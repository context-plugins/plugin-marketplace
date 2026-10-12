---
name: python-file-handling
description: Sending and receiving files with an APIMatic-generated Python SDK — which arm of the upload alias to hand an endpoint and what each one costs in memory, re-sendability and ownership, the three behaviours that differ between a multipart part and a raw body, when a body goes out chunked rather than sized, overriding a filename or media type, and consuming a streamed file response without leaking its connection. Load before passing a file to an operation or consuming one it returns, in addition to `python-calling-endpoints`.
---

# File handling on an APIMatic Python SDK

**One name per client, at every position.** A multipart file part and a raw binary body accept the
same alias, and only the client you built decides which:

```python
BinaryContent      = bytes | bytearray | Path | BinaryReader | Iterator[bytes]
AsyncBinaryContent = BinaryContent | AsyncBinaryReader | AsyncIterable[bytes]

FileInput          = BinaryContent      | NamedFile[BinaryContent]        # sync client
AsyncFileInput     = AsyncBinaryContent | NamedFile[AsyncBinaryContent]   # async client
```

So you make exactly one choice: **where the bytes come from**. The destination is fixed by the
endpoint, and the flavour by the client. All of these are imported from `{root_package}.core`, and
`list[FileInput]` is an array part.

Nothing validates what you pass, so a wrong arm is a type error at build time and a wrong *value* is
a failure at send time. What each arm accepts is wider than the annotation suggests.

## Start here

**Use `Path`.** It streams rather than loading the file, the same value can be sent twice, the SDK
closes what it opened, it names the file on the wire for you, it keeps a `Content-Length`, and it is
the only arm that behaves identically at both destinations.

```python
from pathlib import Path

client.{group}.{operation}(Path("invoice.pdf"))
```

Every other arm below exists for a reason you will know you have.

## Which arm

| Arm | Reach for it when | What it costs |
|---|---|---|
| `Path` | the bytes are a file — **the default** | nothing worth naming |
| `bytes` / `bytearray` | small, or built in memory with no file behind it | fully resident; carries no filename |
| `BinaryReader` — any object with a binary `read` | a handle that is not a path: `gzip`, a spool, another library's | you close it; not re-sendable |
| `Iterator[bytes]` | transforming on the way out, or you want a progress hook | single-use; makes a whole multipart body chunked |
| `AsyncBinaryReader` — awaitable `read` | you already hold an `anyio`-style handle *(async client only)* | buffered through a temporary file in a multipart part |
| `AsyncIterable[bytes]` | relaying bytes that arrive asynchronously *(async client only)* | the same |
| `NamedFile[...]` | the derived filename or media type is wrong, or the source has none | nothing — it is an override, not an arm |

A `bytearray` is the `bytes` arm, copied on the way through, so mutating yours after the call cannot
change what was sent.

## Three behaviours that differ by destination, not by type

These are the only places the position still matters, and none of them is visible in the annotation.

1. **A handle you pass mid-file is rewound in a multipart part and is not in a raw body.** So a
   position you set is discarded in a part and honoured in a raw body, and the same handle is
   re-sendable in one place and not the other.
2. **A chunk iterator makes the whole multipart body chunked.** One part that cannot report a length
   stops every part being sized. As a raw body it only chunks itself.
3. **An async source in a multipart part is buffered through a temporary file first.** Nothing
   accumulates in memory and the part keeps its length, but the payload is briefly written to disk:
   it needs room in the temp directory, and a read-only or undersized one raises `OSError`. Yield
   windows rather than one whole `bytes` from an `AsyncIterable` — your pieces are forwarded as you
   yield them, so a single large `bytes` is resident before the SDK ever sees it.

   So **do not reach for an async handle over a file you could have named.** `anyio.open_file(p)` in
   a part costs two reads and a write where `Path(p)` costs one read. The async arms earn their keep
   when there is no path — bytes arriving from another connection, a queue, a subprocess — and cost a
   round trip through the filesystem when there is one.

On the **async client**, reading a *sync* arm inside a multipart body occupies the event loop while
it reads, so `bytes` and the async arms are the spellings that never block it there. A raw body has
neither cost: every arm streams without occupying the loop.

## When the body goes out chunked

The body is sent with a `Content-Length` **only when the length can be established** — a plain file
handle or an in-memory buffer, sitting at the start. Everything else is chunked, which is correct
rather than merely cautious: for a decompressing reader, or one already read from, the length of the
file behind it is not the length of the body.

So a `gzip.open(...)` handle uploads fine, chunked. If a server refuses chunked uploads, either pass
the `Path` — which keeps its `Content-Length` — or declare the length yourself:

```python
client.{group}.{operation}(handle, request_options={"extra_headers": {"content-length": "1000"}})
```

## The filename, and the media type

**Both are derived, and both are overridable at either destination.** Left alone, the filename comes
from a `Path`'s own name or a handle's `.name`, **reduced to a basename** so your directories never
reach the wire; a source that has no name at all — `bytes`, a `BytesIO`, a chunk iterator — sends
none rather than an invented one. A multipart part is sent under it; a raw body carries it as the
whole request's `Content-Disposition`.

`NamedFile` is the only override, and it takes the two fields that matter:

```python
from {root_package}.core import NamedFile

client.{group}.{operation}(NamedFile(b"...", filename="invoice.pdf", media_type="application/pdf"))
```

Set `filename` and it wins over a `Path`'s own name and a handle's `.name` alike, so wrapping a named
source renames it rather than being ignored.

**Every file currently goes out as `application/octet-stream`** whatever the spec declares, so
`NamedFile(content, media_type=...)` is the only way to send anything else. If the server validates a
part's `Content-Type`, say the type yourself.

## There is no `str` arm

A bare string is unresolvably either a path or the content itself, so `mypy --strict` rejects it. At
run time the failure differs by position, and neither is guided:

- a **multipart part** raises `AttributeError: 'str' object has no attribute 'read'` from inside the
  send
- a **raw body** sends the string's own bytes, so `client.{group}.{operation}("invoice.pdf")` uploads
  eleven bytes and reports success

Wrap a path in `Path`.

## Who closes what

**The SDK closes only what it opened.** A `Path` is opened for the send and closed when it returns or
raises — never later. A handle **you** open stays yours to close, and is never closed behind your
back. An iterable of chunks has no position at all: it is consumed once, at either destination, and
cannot be re-sent.

## Reading a file response

A `FileResponse` — `AsyncFileResponse` on the async client — is a body that has **not been read yet**
and holds its connection until it is. That makes it the one return value with a lifecycle, and the
three ways to consume it all close it:

```python
client.{group}.{operation}(...).save_to("out.bin")      # streams to disk
data = client.{group}.{operation}(...).read()           # buffers — for a payload that fits in memory
with client.{group}.{operation}(...) as f:              # anything else
    for chunk in f.iter_bytes():
        ...
```

Both iterators take a `chunk_size`, defaulting to 64 KiB.

- **Reading is what closes it**, so only a *partially* consumed `iter_bytes()` outside a `with` leaks.
  That case emits a `ResourceWarning` at finalization — a category Python's default filters silence,
  so enable it (`-W error::ResourceWarning` plus `filterwarnings` in your pytest config; under pytest
  the flag alone is a no-op) if you want the leak to fail a test. By then the default transport has
  already released the connection, as soon as the abandoned iterator was finalized; a custom one may
  not, so the client's own `close()` stays the backstop, since it disposes the pool and any
  connection still held.
- **Single-use.** Once closed, reading again raises, and one consumer means one pass: `read()` after a
  partially driven `iter_bytes()` raises too.
- **The async twin is `AsyncFileResponse`** — same lifecycle, mostly `a`-prefixed verbs: `await
  f.aread()`, `async for chunk in f.aiter_bytes()`, `await f.aclose()`, and `async with` as the
  spelling to reach for. **`save_to` is the exception**: it keeps its name and is awaited — `await
  f.save_to("out.bin")` — so there is no `asave_to`. Calling it without `await` creates a coroutine
  and drops it: nothing is written and the connection stays held. An abandoned response defers its
  warning to loop shutdown, where it is far less useful — and that warning is silenced by default
  too.
- **`save_to` accepts a directory**, naming the file from the server's `Content-Disposition` — reduced
  to a safe basename first, because that header is attacker-controlled — and raising `ValueError` when
  the server sent no filename, or sent one that reduces to nothing safe to create: empty, `.` or
  `..`, a reserved device name (`CON`, `NUL`, `COM1`…), or longer than 255 characters. It writes
  `<name>.part` and moves it into place atomically, so an interrupted download never appears under
  the final name. If the destination cannot be opened at all — a missing parent directory, or
  permissions — the response is still consumable.
- **The head has already arrived**, so `headers`, `media_type`, `content_length` and `filename` are
  readable before you read a byte. `filename` is the server's suggestion and may be `None`.
- **`request_options={"timeout": ...}` bounds each read of the body**, not the call as a whole, so a
  stalled download raises rather than hanging.
- **A transport failure mid-download raises out of the *read*, not out of the call.** The call already
  returned successfully — only the head had arrived — so a `try` wrapped around the call alone catches
  nothing. Put the boundary around the consuming code (`python-error-handling`).

With `with_raw_response`, the payload is the same unread `FileResponse`. The raw peer buys you the
status code and headers, not the bytes — a result carries no body of its own, because here the body
*is* the payload.

## Where these types live

Import all of them from `{root_package}.core`: the two aliases and their content unions, `NamedFile`,
the two reader protocols, and the two response classes. They are not re-exported from
`{root_package}/__init__.py`, so the package root is not where to look for them.
