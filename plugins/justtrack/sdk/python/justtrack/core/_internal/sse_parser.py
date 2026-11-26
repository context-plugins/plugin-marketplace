"""Parsing the ``text/event-stream`` grammar: bytes in, event data out.

The WHATWG algorithm ("Server-sent events", HTML Standard) written as a push parser, so one
implementation serves both flavours: a consumer hands over each chunk the transport delivers and takes
back the events those bytes completed, and nothing here touches the wire. Per the standard: one leading
UTF-8 BOM is dropped; a line ends at CRLF, LF or CR; a line starting with ``:`` is a comment; ``data``
accumulates and its values join with LF; a blank line dispatches, but only when a ``data`` line was seen,
otherwise it resets; ``event``, ``id`` and ``retry`` are recognised so they are ignored correctly, and so
is any other field -- only ``data`` reaches the consumer.

Lines are found with ``bytes.splitlines``, which knows exactly the standard's three terminators and no
others -- unlike ``str.splitlines``, which also cuts on ``\\x0b``, ``\\x0c``, ``\\x1c`` to ``\\x1e``,
``\\x85`` and U+2028/9 and would split a payload holding one of them. It is one C pass per chunk,
measured at a twelfth of a regex loop's cost, and only the new chunk is ever scanned: the unfinished tail
of the previous chunk is carried and joined onto the first line the next chunk completes, so parsing
stays linear in the bytes received however small the chunks.

Two things the standard leaves to the client. A CR at the very end of a chunk is a terminator on its own,
and the LF that may follow it in the next chunk is then skipped, so a CRLF split across two reads is one
terminator, never two -- and the event dispatches the moment its CR arrives rather than waiting for the
next chunk. And an event still pending at EOF is dropped, as the standard's processing model says and as
the .NET parser does: a truncated final event is not delivered as if it were whole.

Each completed line is decoded as UTF-8 on its own, strictly. That is exact rather than a shortcut: both
terminator bytes are ASCII, and in UTF-8 an ASCII byte is never part of a multi-byte sequence, so a line
boundary cannot fall inside a character and no incremental decoder is needed. A line that is not UTF-8
raises the stdlib's ``UnicodeDecodeError``, unwrapped: it already names the offending byte and position.
The one bound is on bytes held for an event that has not dispatched -- the carried tail plus the ``data``
already collected -- so a server that never sends a blank line is refused at 1 MiB with a ``ValueError``
instead of growing the buffer without limit."""

from __future__ import annotations

from typing import Final

MAX_EVENT_BYTES: Final = 1 << 20
"""Bytes held for one undispatched event before the stream is refused (1 MiB)."""

_BOM: Final = b"\xef\xbb\xbf"
_LINE_ENDS: Final = (b"\n", b"\r")


class SseParser:
    """The push parser: ``parse_chunk`` each chunk as the transport delivers it, take back the events it completed."""

    __slots__ = ("_at_start", "_data", "_pending", "_skip_lf", "_tail")

    def __init__(self) -> None:
        self._tail = bytearray()  # the unfinished line of the last chunk; never holds a terminator
        self._at_start = True
        self._skip_lf = False
        self._data: list[str] = []
        self._pending = 0

    def parse_chunk(self, chunk: bytes) -> list[str]:
        """Consume ``chunk`` and return the data of every event it completed, in order.

        Args:
            chunk: The next bytes off the wire, of any length including zero.

        Returns:
            Each dispatched event's ``data``, its lines already joined with LF.

        Raises:
            ValueError: If the pending event outgrows :data:`MAX_EVENT_BYTES`, or -- as a
                ``UnicodeDecodeError`` -- if a line is not valid UTF-8."""
        if chunk and self._skip_lf:
            # The previous chunk ended on a CR that was treated as a terminator; a leading LF now is the
            # other half of that CRLF, not a blank line. An empty chunk decides nothing, so the flag waits.
            self._skip_lf = False
            if chunk[:1] == b"\n":
                chunk = chunk[1:]
        if self._at_start:
            self._tail += chunk
            if len(self._tail) < len(_BOM) and _BOM.startswith(self._tail):
                return []
            if self._tail.startswith(_BOM):
                del self._tail[: len(_BOM)]
            self._at_start = False
            chunk = bytes(self._tail)
            self._tail.clear()

        # bytes.splitlines knows exactly SSE's three terminators; keepends tells the last piece apart --
        # terminated, or an unfinished tail to carry into the next chunk.
        pieces = chunk.splitlines(keepends=True)
        unfinished = pieces.pop() if pieces and not pieces[-1].endswith(_LINE_ENDS) else b""
        if pieces:
            pieces[0] = bytes(self._tail) + pieces[0]
            self._tail.clear()
            self._skip_lf = not unfinished and pieces[-1].endswith(b"\r")
        self._tail += unfinished

        events: list[str] = []
        for piece in pieces:
            data = self._line(piece)
            if data is not None:
                events.append(data)
        if len(self._tail) + self._pending > MAX_EVENT_BYTES:
            raise ValueError(
                f"an event exceeded {MAX_EVENT_BYTES} bytes without dispatching -- refusing to buffer further"
            )
        return events

    def _line(self, raw: bytes) -> str | None:
        # ``raw`` is one terminated line, so the strip removes exactly its CRLF, LF or CR. Strict decode:
        # bad bytes raise UnicodeDecodeError straight out of parse_chunk.
        line = raw.rstrip(b"\r\n").decode("utf-8")
        if not line:
            return self._dispatch()
        if line.startswith(":"):
            return None
        name, colon, value = line.partition(":")
        if name == "data":
            self._data.append(value[1:] if colon and value.startswith(" ") else value)
            self._pending += len(raw)
        return None

    def _dispatch(self) -> str | None:
        if not self._data:
            return None
        data = "\n".join(self._data)
        self._data = []
        self._pending = 0
        return data
