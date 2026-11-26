"""The HTTP boundary: what a request and a response are, and what a transport must provide.

The two protocols are the seam between the SDK and whatever HTTP library actually moves bytes.
Keeping them SDK-owned is deliberate: no third-party request or response type reaches the public
surface, and a caller can supply their own transport by satisfying :class:`HttpClient` or
:class:`AsyncHttpClient`.

There is no response *dataclass* here at all. A result carries the head as fields of its own, and a
body that has been read is ``bytes`` -- handed to a decode step or to an error mapper beside the
status it switches on. So the vocabulary at this boundary is three things: a request, a response
whose body is still on the wire, and the bytes that come off it.

The request and response shapes live here; the body shapes a request can carry live in
``bodies.py``, beside the factories that build them, and reach a transport through
:attr:`HttpRequest.body`."""

from __future__ import annotations

from collections.abc import AsyncIterator, Iterator, Mapping
from dataclasses import dataclass
from typing import Literal, Protocol, TypeAlias

from ._internal.redaction import redact_url
from .bodies import RequestBody

HttpMethod: TypeAlias = Literal["GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS", "TRACE", "PATCH"]
"""The request methods an API operation can declare: RFC 9110 §9.3's set less ``CONNECT``, plus RFC 5789's ``PATCH``.

A ``Literal`` rather than ``str``, so a misspelt or lowercased verb at an emitted call site is a build
failure, and so a retry policy can only ever nominate a verb a request can carry."""


@dataclass(frozen=True, slots=True)
class HttpRequest:
    """An outbound request, fully resolved and ready for a transport to send; ``headers`` already
    carry the body's own label."""

    method: HttpMethod
    url: str
    headers: Mapping[str, str]

    body: RequestBody | None = None
    timeout: float | None = None
    """Seconds to wait, or ``None`` to leave the transport's own timeout in force."""

    def __repr__(self) -> str:
        # Identify by method and URL, unknown query values masked. ``headers`` holds the rendered
        # credential and ``body`` a form-encoded ``client_secret``, so neither reaches the string form;
        # the query string holds a query-placed api key, so it goes through the one printable-URL
        # rule with its defaults -- keys kept, a known-safe value kept, everything else ``REDACTED``,
        # since a repr reads no options. This is also the type that crosses the ``HttpClient`` seam,
        # which is where a logging transport would print it. The fields stay readable.
        return f"{type(self).__name__}(method={self.method!r}, url={redact_url(self.url)!r})"


class HttpResponse(Protocol):
    """A response whose head has arrived and whose body has not been read.

    The status and headers are facts as soon as this exists, which is what lets a streamed call
    still yield a ``Success`` or a ``Failure``: only the payload is deferred, never the outcome.
    It holds a connection until it is closed. Header names MUST be lowercased, the same rule the
    request side applies in ``_internal/headers.py``.

    ``read`` is the seam the error path and every buffered decoder take, not a convenience over
    ``iter_bytes``: it must both buffer the whole body *and* release the connection, so a body
    survives the close that frees the socket. Both it and ``iter_bytes`` MUST raise
    :class:`~.exceptions.SdkConnectionError` -- :class:`~.exceptions.SdkTimeoutError` where the window
    ran out -- for a body the transport could not deliver once the head is in: a dropped connection,
    a read that timed out, a content-encoding it could not undo; naming the call as ``method`` and
    ``safe_url(url)``, from the library's own exception. The retry loop never sees one, since its
    ``try`` covers ``send`` alone, so work the server has already done is still never repeated;
    ``execute`` and the streamed payloads close and let it pass, since it already names the call.

    ``iter_bytes`` re-chunks to ``chunk_size`` bytes when given an ``int``; given ``None`` it MUST yield
    each chunk as the network delivered it, buffering nothing of its own -- a latency-bound consumer such
    as an event stream reads it that way, since a fixed size would hold a twenty-byte event back until
    enough followed it.

    ``close`` MUST be idempotent. The runtime closes twice on one path: a buffered decoder releases
    the body in its own ``finally``, and a decoder that raises is then closed again by the seam that
    called it -- the belt that keeps a failed decode from stranding a socket."""

    @property
    def method(self) -> HttpMethod:
        """The method of the request this response answers.

        Carried for the reason ``url`` is: a payload that outlives the call names the call in the
        exception it raises, and has nowhere else to read it from."""
        ...

    @property
    def url(self) -> str:
        """The URL this response came from.

        Carried on the response rather than passed alongside it, because the payloads that outlive
        the call are the only readers and have no other way to name themselves once abandoned. It
        is the URL the request asked for, as the request spelled it -- never the library's own
        normalised form -- so the call a payload names is the call the result names, byte for
        byte; the SDK never follows redirects."""
        ...

    @property
    def status_code(self) -> int: ...

    @property
    def headers(self) -> Mapping[str, str]: ...

    def iter_bytes(self, chunk_size: int | None) -> Iterator[bytes]: ...

    def read(self) -> bytes: ...

    def close(self) -> None: ...


class AsyncHttpResponse(Protocol):
    """The awaited twin. ``aclose`` rather than ``close``, matching the SDK's async client.

    ``method``, ``url``, ``status_code`` and ``headers`` stay synchronous properties -- the head has
    already arrived. Header names MUST be lowercased, the same rule the request side applies, and
    ``aread`` carries ``read``'s obligations: buffer the whole body, release the connection, and
    raise :class:`~.exceptions.SdkConnectionError` for a body it could not deliver. ``aclose`` carries
    ``close``'s -- it MUST be idempotent, for the same double-close path. ``aiter_bytes`` carries
    ``iter_bytes``'s ``chunk_size`` contract, ``None`` included, and its failure contract."""

    @property
    def method(self) -> HttpMethod:
        """The method of the request this response answers; see :attr:`HttpResponse.method`."""
        ...

    @property
    def url(self) -> str:
        """The URL this response came from; see :attr:`HttpResponse.url`."""
        ...

    @property
    def status_code(self) -> int: ...

    @property
    def headers(self) -> Mapping[str, str]: ...

    def aiter_bytes(self, chunk_size: int | None) -> AsyncIterator[bytes]: ...

    async def aread(self) -> bytes: ...

    async def aclose(self) -> None: ...


class HttpClient(Protocol):
    """Sync transport contract.

    There is **one** request seam. ``send`` returns as soon as the response head has arrived and
    never reads the body; who reads it, and when the connection is released, is the decoder's
    business (ADR-0063). A transport that buffered would be answering a question nobody asked --
    and, underneath, the library this one wraps reaches a streamed response first in either case.

    Implementations:
    - MUST NOT mutate the incoming :class:`HttpRequest`.
    - MUST honour ``request.timeout`` when it is set, and fall back to their own configured
      timeout when it is ``None``.
    - MUST lowercase the header names on the returned response: HTTP/1.1 treats them
      case-insensitively and HTTP/2 requires lowercase, so a caller's lookup needs no case
      handling -- the same rule, for the same reason, as the request side in
      ``_internal/headers.py``.
    - MUST send ``request.headers`` as given and spell no header of its own: a body's label -- its
      media type as ``Content-Type``, and a raw body's name as ``Content-Disposition`` -- is already
      among them, folded under the parameter layers when the request was built, so a caller's
      ``extra_headers`` has already won. The one label a transport writes is a multipart body's,
      whose boundary exists only once its encoder has minted it.
    - MUST raise :class:`~.exceptions.SdkConnectionError` (``from <sdk>.core import
      SdkConnectionError``) when a request produces no response at all -- a refused connection, a
      dropped one, a protocol failure -- and its leaf :class:`~.exceptions.SdkTimeoutError`, with the
      window that elapsed as ``timeout``, when it was a timeout; or the retry loop never sees the
      failure. Both name the call: ``method`` is ``request.method`` and ``url`` is
      ``safe_url(request.url)`` (``from <sdk>.core import safe_url``), the query and userinfo dropped,
      exactly as every result names it. The returned response owes the same for a failure *after* the
      head (see :class:`HttpResponse`). That is what lets the retry loop and the runtime both act on
      one shape whichever library moves the bytes; a loop that caught the library's own exception
      would have to import it to say so. The library's exception belongs on ``__cause__``, not
      swallowed.
    - SHOULD be idempotent for ``close()``."""

    def send(self, request: HttpRequest) -> HttpResponse:
        """Execute a request and return its response with the body unread.

        Returns once the response head has arrived; the connection stays checked out until the
        returned response is closed.

        Args:
            request: The request to send, which MUST NOT be mutated.

        Returns:
            The response head, its body pending, its header names lowercased.

        Raises:
            SdkConnectionError: If the request produced no response; its leaf ``SdkTimeoutError`` for a
                timeout. A failure *after* the head has arrived belongs to the returned response, not
                here."""
        ...

    def close(self) -> None:
        """Release underlying resources (connections, pools). Should be idempotent."""
        ...


class AsyncHttpClient(Protocol):
    """Async transport contract -- the same shape as :class:`HttpClient`, awaited.

    The same obligations apply, including honouring ``request.timeout``, lowercasing the
    response's header names, leaving the body unread, and translating a failed send into
    :class:`~.exceptions.SdkConnectionError`. ``aclose`` rather than ``close`` matches the
    shipped transport's HTTP library and the SDK's own async client.

    One obligation is this side's alone:

    - Implementations MUST resolve an async :attr:`MultipartFile.content` themselves. A multipart
      encoder pulls every part from a synchronous chunk generator, so an awaitable ``read`` cannot
      be driven from inside one; the shipped transport drains such a part to a temp file before
      encoding, which keeps it bounded rather than resident and leaves it sized. A raw
      :class:`BinaryBody` needs no such pre-pass -- its async arms stream natively."""

    async def send(self, request: HttpRequest) -> AsyncHttpResponse:
        """Execute a request and return its response with the body unread.

        Returns once the response head has arrived; the connection stays checked out until the
        returned response is closed.

        Args:
            request: The request to send, which MUST NOT be mutated.

        Returns:
            The response head, its body pending, its header names lowercased.

        Raises:
            SdkConnectionError: If the request produced no response; its leaf ``SdkTimeoutError`` for a
                timeout. A failure *after* the head has arrived belongs to the returned response, not
                here."""
        ...

    async def aclose(self) -> None:
        """Release underlying resources (connections, pools). Should be idempotent."""
        ...
