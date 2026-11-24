"""The event stream's payload: a ``text/event-stream`` body not yet read, owning its connection.

``EventStream`` and ``AsyncEventStream`` join ``FileResponse`` and its twin as the runtime's non-frozen
classes, for the same reason: they own a resource with a lifecycle. Iterating one yields the typed payload
of each event as the server dispatches it. Every path that ends the iteration releases the connection --
exhaustion, the operation's sentinel, an exception, a ``with`` block, ``close`` -- and abandoning a partial
iteration is the one leak, reported by ``__del__`` (a ``ResourceWarning`` naming the URL) and reaped by the
client's own close, exactly as a file's is. A stream that is never iterated at all is reported the same way.

The parser is ``_internal/sse_parser.py``; this module decides what happens to what it yields. An event
whose ``data`` equals the sentinel ends the stream and is never surfaced. An event the declared type
rejects raises :class:`ResponseDecodeError` after the close, from pydantic's ``ValidationError`` -- exactly
what a buffered body's rejection raises out of ``execute``; raised, not skipped, because a silently dropped
event in a token stream is data loss the caller cannot see. A body the transport could not deliver raises
:class:`SdkConnectionError` the same way. The bytes are taken as the transport delivers them,
``iter_bytes(None)``, never re-chunked: a fixed chunk size would hold a twenty-byte event back until enough
followed it.

A finalizer here only ever *reports*, never acts (ADR-0007): nothing is closed at GC time, and the
consuming generator re-raises ``GeneratorExit`` without closing for the same reason."""

from __future__ import annotations

import warnings
from collections.abc import AsyncIterator, Callable, Iterator
from typing import Generic, TypeVar

from typing_extensions import Self

from ._internal.redaction import redact_url
from ._internal.sse_parser import SseParser
from ._internal.urls import safe_url
from .exceptions import ResponseDecodeError
from .transport import AsyncHttpResponse, HttpResponse

T = TypeVar("T")


class EventStream(Generic[T]):
    """An event stream whose body has not been read yet; iterate it to receive the events.

    ``for chunk in stream`` yields each event's decoded ``data`` and closes the connection when the server
    ends the stream or the operation's sentinel arrives, so a loop run to the end leaks nothing::

        with client.streaming.create_chat_completion(request) as chunks:
            for chunk in chunks:
                ...

    Only a *partially* consumed iteration outside a ``with`` can leak; that case emits a ``ResourceWarning``
    at finalization, the same way an unclosed file does, and the client's own ``close()`` is the backstop.
    A ``break`` inside a ``with`` is the idiomatic early stop. Single-use: once closed, iterating again
    raises rather than yielding nothing. The per-call ``timeout`` applies to each read of the body, so it
    bounds the wait *between* events and a stalled server raises rather than hangs. Each open stream holds
    one connection from the transport's pool until it is closed, so many left open will make later
    requests wait on the pool."""

    __slots__ = ("_closed", "_decode_data", "_method", "_parser", "_response", "_safe_url", "_sentinel", "_url")

    def __init__(self, response: HttpResponse, decode_data: Callable[[str], T], sentinel: str | None) -> None:
        # Total by design: this runs between the head arriving and the raw client returning, so a
        # raise here would leak the connection.
        self._response = response
        self._closed = False
        # Captured here rather than read off the response inside the finalizer, which can run at
        # interpreter shutdown; its query values masked, so an api key placed there cannot reach a warning.
        self._url = redact_url(response.url)
        # The call, as every result and exception names it -- see FileResponse.
        self._method = response.method
        self._safe_url = safe_url(response.url)
        self._decode_data = decode_data
        self._sentinel = sentinel
        self._parser = SseParser()

    def __iter__(self) -> Iterator[T]:
        """Iterate the events, closing when the stream ends.

        Ends -- and closes -- when the server closes the connection, or when an event's ``data`` equals
        the operation's sentinel, which is consumed and never yielded. An exception mid-iteration closes
        before propagating; only abandoning the iteration part-way leaves the connection held, which
        ``__del__`` reports.

        Returns:
            Each event's decoded ``data``, in order.

        Raises:
            ValueError: If the stream is already closed.
            ResponseDecodeError: From the iteration, if an event's ``data`` is rejected by the declared
                type -- pydantic's ``ValidationError`` is the cause -- or if the wire breaks the
                event-stream grammar.
            SdkConnectionError: From the iteration, if the transport could not deliver the body, a wait
                between events that timed out included."""
        # Checked here, not in the generator: a closed stream must raise at the call, the way a closed
        # file does -- not at the first next().
        self._ensure_open()
        return self._consume()

    def _consume(self) -> Iterator[T]:
        try:
            for data in self._events():
                if data == self._sentinel:
                    break
                yield self._decode_data(data)
        except GeneratorExit:
            # Abandoned mid-iteration: deliberately left open. Closing here would run at GC time, and a
            # finalizer may report, never act (ADR-0007) -- __del__ warns, client.close() reaps.
            raise
        except ValueError as error:
            # A rejected event (pydantic's ValidationError), or the wire breaking the grammar or the 1 MiB
            # cap: closed first, then raised as the family's, never skipped (ADR-0064).
            self.close()
            raise ResponseDecodeError(
                method=self._method,
                url=self._safe_url,
                status_code=self._response.status_code,
                headers=self._response.headers,
            ) from error
        except BaseException:
            # A body the transport could not deliver arrives as the family's exception already naming the
            # call -- closed here with everything else, and passed as it is.
            self.close()
            raise
        self.close()

    def _events(self) -> Iterator[str]:
        # None, not a size: the transport's own delivery units, so an event is parsed the moment its
        # bytes arrive.
        for chunk in self._response.iter_bytes(None):
            yield from self._parser.parse_chunk(chunk)

    def close(self) -> None:
        """Release the connection. Idempotent, and every path that ends an iteration calls it."""
        if self._closed:
            return
        self._closed = True
        self._response.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(self, *exc: object) -> None:
        self.close()

    def __del__(self) -> None:
        # getattr guard: __init__ may not have completed. Report only -- never act (ADR-0007).
        if not getattr(self, "_closed", True):
            warnings.warn(
                f"unclosed {type(self).__name__} for {self._url} -- use `with`, iterate to the end, or call close()",
                ResourceWarning,
                stacklevel=2,
                source=self,
            )

    def __repr__(self) -> str:
        # Identify by state only -- never an event, which is the caller's data and not read yet anyway.
        return f"{type(self).__name__}(closed={self._closed})"

    def _ensure_open(self) -> None:
        if self._closed:
            raise ValueError(
                f"this {type(self).__name__} is closed -- it is single-use: the end of the stream, its "
                "sentinel, an error and close() each close it"
            )


class AsyncEventStream(Generic[T]):
    """The awaited twin of :class:`EventStream` -- same lifecycle, ``a``-prefixed verbs.

    ``async with`` is the spelling to reach for: an abandoned instance defers finalization to
    ``loop.shutdown_asyncgens()``, where the ``ResourceWarning`` still fires but later and less usefully,
    and ``aclose`` must run on the loop that created the stream."""

    __slots__ = ("_closed", "_decode_data", "_method", "_parser", "_response", "_safe_url", "_sentinel", "_url")

    def __init__(self, response: AsyncHttpResponse, decode_data: Callable[[str], T], sentinel: str | None) -> None:
        # Total by design, and the URL captured and masked, as in the sync twin.
        self._response = response
        self._closed = False
        self._url = redact_url(response.url)
        # The call, as every result and exception names it -- see FileResponse.
        self._method = response.method
        self._safe_url = safe_url(response.url)
        self._decode_data = decode_data
        self._sentinel = sentinel
        self._parser = SseParser()

    def __aiter__(self) -> AsyncIterator[T]:
        """Iterate the events, closing when the stream ends; the twin of :meth:`EventStream.__iter__`.

        Returns:
            Each event's decoded ``data``, in order.

        Raises:
            ValueError: If the stream is already closed.
            ResponseDecodeError: From the iteration, if an event's ``data`` is rejected by the declared
                type -- pydantic's ``ValidationError`` is the cause -- or if the wire breaks the
                event-stream grammar.
            SdkConnectionError: From the iteration, if the transport could not deliver the body, a wait
                between events that timed out included."""
        self._ensure_open()
        return self._consume()

    async def _consume(self) -> AsyncIterator[T]:
        try:
            async for data in self._events():
                if data == self._sentinel:
                    break
                yield self._decode_data(data)
        except GeneratorExit:
            # Abandoned mid-iteration: deliberately left open, as in the sync twin.
            raise
        except ValueError as error:
            await self.aclose()
            raise ResponseDecodeError(
                method=self._method,
                url=self._safe_url,
                status_code=self._response.status_code,
                headers=self._response.headers,
            ) from error
        except BaseException:
            await self.aclose()
            raise
        await self.aclose()

    async def _events(self) -> AsyncIterator[str]:
        async for chunk in self._response.aiter_bytes(None):
            for data in self._parser.parse_chunk(chunk):
                yield data

    async def aclose(self) -> None:
        """Release the connection. Idempotent, and every path that ends an iteration awaits it."""
        if self._closed:
            return
        self._closed = True
        await self._response.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(self, *exc: object) -> None:
        await self.aclose()

    def __del__(self) -> None:
        # getattr guard: __init__ may not have completed. Report only -- never act (ADR-0007).
        if not getattr(self, "_closed", True):
            warnings.warn(
                f"unclosed {type(self).__name__} for {self._url} -- use `async with`, iterate to the end, or "
                "call aclose()",
                ResourceWarning,
                stacklevel=2,
                source=self,
            )

    def __repr__(self) -> str:
        return f"{type(self).__name__}(closed={self._closed})"

    def _ensure_open(self) -> None:
        if self._closed:
            raise ValueError(
                f"this {type(self).__name__} is closed -- it is single-use: the end of the stream, its "
                "sentinel, an error and aclose() each close it"
            )
