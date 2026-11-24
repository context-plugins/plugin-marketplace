"""The SDK's own exception family: every failure a call can end in, under one root.

:class:`SdkError` is the root, and the one ``except`` that catches everything the runtime raises for a
call. Two members mean the server answered and the answer could not become a payload, and each carries
the head, ``status_code`` and ``headers``: :class:`ApiError` for a non-2xx decoded into the operation's
error body, :class:`ResponseDecodeError` for a body, 2xx or documented error, that its declared type
rejected. They are siblings under the root rather than leaves of a shared base, so neither is ever caught
as the other. :class:`SdkConnectionError` means no usable response: the request could not be
sent, or its body could not be read -- the library's own exception on ``__cause__`` -- and its one leaf,
:class:`SdkTimeoutError`, is the one of those that was a timeout, carrying the window that elapsed.
:class:`AuthSchemeError` stands beside them, for a credential that could not be applied. Every member
names the call it belongs to, ``method`` and ``url``, and every message starts with it. What caused it
rides on ``__cause__`` as the library or pydantic raised it, and :class:`SdkConnectionError` and
:class:`AuthSchemeError` also end their message with the cause's own text -- the timeout leaf its window
instead -- so a caller-written scheme's message reaches the caller as written. No message renders a
response body or a header.

The shape is the one the sibling SDKs of this generator share (ADR-0072), read through Python's
conventions: one root with the ``Error`` suffix (PEP 8), branches by what happened
rather than by status code (``requests``, ``httpx``, azure-core), the raw cause chained with ``from``
(PEP 3134), narrowing by class pattern rather than by a ``kind`` string (PEP 634), and no name that
shadows a builtin -- which is why the connection pair carries the ``Sdk`` prefix.

Two things are deliberately not members. A caller's own cancellation -- ``KeyboardInterrupt``,
``asyncio.CancelledError`` -- is a ``BaseException`` and passes through every arm untouched. And input
the SDK refuses before any request exists -- a path value its type rejects, an unknown environment --
stays the ``ValueError`` it is: a programming error, not a call that failed.

The connection branch is raised by the transport itself, never by the pipeline: a transport names the
call on the exception it raises -- ``request.method`` and ``safe_url(request.url)`` -- and the retry loop
acts on that one shape without naming the HTTP library that moved the bytes. There is no wrapper
between them; the family is the transport's vocabulary as much as the caller's."""

from __future__ import annotations

from collections.abc import Mapping, Sequence
from http import HTTPStatus
from typing import Any, Generic

from typing_extensions import TypeVar

from .transport import HttpMethod

E = TypeVar("E", default=object)


class SdkError(Exception):
    """Every failure the SDK raises for a call, and the one ``except`` that catches them all.

    ``method`` and ``url`` name the call. The URL is the operation's path rendered with its path
    parameters and nothing after it -- no query, so a parameter value or a credential a scheme places
    there can never reach a message, a log line or a traceback. Catch a member for less:
    :class:`ApiError` or :class:`ResponseDecodeError` means the server answered, a
    :class:`SdkConnectionError` that it did not."""

    def __init__(self, message: str, *, method: HttpMethod, url: str) -> None:
        # Composed by the subclass and handed over once: ``Exception.__str__`` returns a single
        # argument verbatim, so ``args[0]`` and ``str(self)`` are the same string by construction.
        super().__init__(message)
        self.method: HttpMethod = method
        """The HTTP method of the call that failed."""
        self.url = url
        """The call's URL: its path rendered, its query dropped."""

    def __reduce__(self) -> tuple[Any, tuple[type[SdkError]], dict[str, Any]]:
        # One reduce for the family, so a leaf cannot forget its own. ``BaseException``'s default replays
        # ``args`` through ``__init__``, which no member here can take: every constructor requires
        # keyword-only fields. ``cls.__new__(cls)`` builds the instance with no ``__init__`` at all, and
        # ``__setstate__`` puts the fields back -- ``args`` among them, since it is a slot on
        # ``BaseException`` and not in ``__dict__``. ``pickle``, ``copy`` and ``deepcopy`` all come this way.
        return type(self).__new__, (type(self),), {"args": self.args, **self.__dict__}

    def __setstate__(self, state: dict[str, Any] | None, /) -> None:
        # Positional-only and optional, as ``BaseException`` declares it; the mapping is never ``None`` here.
        if state:
            self.args = state.pop("args")
            self.__dict__.update(state)


class ApiError(SdkError, Generic[E]):
    """A failed API call, raised by the parsed response mode.

    ``error`` is the decoded response body -- a typed union of the operation's documented error
    schemas, or :class:`RawError` for a status the operation does not document. That payload *is* the
    information, so neither string form embeds it: ``str`` names the call and the status, which keeps
    response bodies out of logs and tracebacks. Read ``.error`` to inspect it. The response head is
    here too, as ``status_code`` and ``headers``. :class:`ResponseDecodeError` carries the same head as
    a sibling, never a subclass, so ``except ApiError`` never catches a body that failed to decode."""

    def __init__(self, error: E, status_code: int, headers: Mapping[str, str], *, method: HttpMethod, url: str) -> None:
        # The status with its reason phrase, ``404 (Not Found)``; the bare number where the stdlib knows no phrase.
        try:
            status = f"{status_code} ({HTTPStatus(status_code).phrase})"
        except ValueError:
            status = str(status_code)
        super().__init__(f"{method} {url} returned {status}", method=method, url=url)
        self.status_code = status_code
        """The status the server answered with."""
        self.headers: Mapping[str, str] = headers
        """Header names lowercased, per the transports' obligation -- look keys up in lowercase."""
        self.error: E = error

    def __repr__(self) -> str:
        return f"{type(self).__name__}(status_code={self.status_code}, error={type(self.error).__name__})"


class ResponseDecodeError(SdkError):
    """A body its declared type rejected -- a 2xx payload, or a documented error body.

    The server answered, so the head is here as ``status_code`` and ``headers``, but what it sent is not
    what the spec declares for that status -- a broken contract rather than a documented failure, which
    is why it is a sibling of :class:`ApiError` and not a kind of one. The decoder's own rejection --
    pydantic's ``ValidationError``, the parser's ``ValueError``, a ``UnicodeDecodeError`` -- is
    ``__cause__``, and it names the type and the offending field. The message does not, because a
    validation message quotes the input and a body may be large or sensitive."""

    def __init__(self, *, method: HttpMethod, url: str, status_code: int, headers: Mapping[str, str]) -> None:
        # The status with its reason phrase, ``404 (Not Found)``; the bare number where the stdlib knows no phrase.
        try:
            status = f"{status_code} ({HTTPStatus(status_code).phrase})"
        except ValueError:
            status = str(status_code)
        super().__init__(
            f"{method} {url} returned {status} with a body that could not be decoded", method=method, url=url
        )
        self.status_code = status_code
        """The status the server answered with."""
        self.headers: Mapping[str, str] = headers
        """Header names lowercased, per the transports' obligation -- look keys up in lowercase."""


class SdkConnectionError(SdkError):
    """No usable response: the request could not be sent, or its body could not be read.

    The branch to catch for "the server did not answer". Raised by the transport -- the shipped one or
    a custom one -- from the HTTP library's own exception, which is ``__cause__``; the message says
    which of the two it was. A timeout is its one leaf, :class:`SdkTimeoutError`, so ``except
    SdkConnectionError`` still catches it and ``except SdkTimeoutError`` catches it alone."""


class SdkTimeoutError(SdkConnectionError):
    """A connection failure that was a timeout: no response within the window, or a body read stalled for it.

    ``timeout`` is the window that elapsed, in seconds -- the per-call ``timeout`` option where one was
    set, else the transport's own. Which phase ran out -- connecting, writing, reading -- is the
    library's class on ``__cause__``. The retry loop treats it as it treats any connection failure."""

    def __init__(self, message: str, *, method: HttpMethod, url: str, timeout: float) -> None:
        super().__init__(message, method=method, url=url)
        self.timeout = timeout
        """The window that elapsed, in seconds."""


class AuthSchemeError(SdkError):
    """A credential could not be applied to the call.

    The token endpoint refused, could not be reached, or answered with a body it should not have; or a
    caller's own scheme raised; or every configured member of an OR requirement did. ``scheme_failures``
    holds what was raised, and ``__cause__`` is that failure -- or the OR group's ``AnySchemesError``,
    which carries the same list. A failure names the token endpoint, this exception names the API call it
    was for, so a caller's ``except ApiError`` around that call does not catch the token endpoint's 401
    by mistake. Any ``Exception`` a scheme's ``apply`` raises is wrapped, an ``AuthSchemeError`` included."""

    def __init__(self, message: str, *, method: HttpMethod, url: str, scheme_failures: Sequence[Exception]) -> None:
        super().__init__(message, method=method, url=url)
        self.scheme_failures: tuple[Exception, ...] = tuple(scheme_failures)
        """What the scheme raised, in order; one entry unless a composite collected several."""
