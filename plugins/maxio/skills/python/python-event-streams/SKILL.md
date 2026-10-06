---
name: python-event-streams
description: Consuming a server-sent-events (text/event-stream) operation on an APIMatic-generated Python SDK — what EventStream[T] / AsyncEventStream[T] yields, how the loop must end so the connection is released, narrowing a union of event types, what raises and when (there is no SSE exception class), the one silent failure, and bounding the wait. Load before writing the loop over an operation that returns an event stream, in addition to `python-calling-endpoints`.
---

# Event streams on an APIMatic Python SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{group}`,
> `{operation}`) — replace it with the concrete identifier from the source.

An operation whose success response is `text/event-stream` returns an `EventStream[T]`
(`AsyncEventStream[T]` on the async client) rather than a value. When the call returns, the request has
gone out and the response head has arrived — what is deferred is the **body**, and the stream holds one
pooled connection until it is released.

```python
EventStream[T]        # sync client   -- `for x in stream`,       `with`,       `close()`
AsyncEventStream[T]   # async client  -- `async for x in stream`, `async with`, `await aclose()`
```

Iterating yields `T`, each event's decoded `data`. The `event`, `id` and `retry` fields are parsed and
dropped — there is no frame object. Where the operation declares a terminating sentinel (such as
`[DONE]`), the SDK consumes it, closes the stream and never yields it.

## Start here

**Drain the loop.** Exhaustion closes the connection, so the shortest correct code is a plain `for`:

```python
for event in client.{group}.{operation}(...):
    handle(event)
```

**Reach for `with` the moment you might stop early** — every `break`, every `return` out of the loop,
every exception you catch outside it:

```python
with client.{group}.{operation}(...) as stream:
    for event in stream:
        if done(event):
            break                     # the `with` releases the connection
```

## How the iteration ends

| You want | Write | Releases |
|---|---|---|
| the whole stream | a plain `for` | on exhaustion |
| to stop at a condition | `with` + `break` / `return` | the `with` |
| a bounded prefix | `with` + your own counter | the `with` |
| a stream that outlives one block | `try` / `finally` + `close()` | your `close()` |
| — | **abandon it part-way** | the default transport, once the abandoned iterator is finalized; a custom one may hold it until the client closes — a `ResourceWarning` either way |

Closing is idempotent, so a `finally` after exhaustion is safe. A closed stream is **single-use**:
iterating it again raises `ValueError` at the `iter()` call, not at the first `next()`.

## What the loop yields

| The success schema is | You get | Narrow with |
|---|---|---|
| a string or another scalar | `EventStream[str]`, `EventStream[int]`, … | nothing — it is the value |
| an object schema | `EventStream[{Model}]` | nothing — it is the model |
| a `oneOf` with a discriminator | `EventStream[{Union}]` | `match` on the arm's class, or `isinstance` |

A union arrives **already routed** by its wire discriminator, so narrowing is a check on the Python
type, never on a `type` string.

⚠️ An `OptionalNullable[T]` member is a **tri-state** (`T | None | UnsetType`), and both `None` and
`UNSET` are falsy. `x or <default>` narrows to `T`, and so does `isinstance(x, T)`; `if x is not None`
does **not** — it leaves `T | UnsetType`.

## What can go wrong

| What failed | Parsed call | `with_raw_response` |
|---|---|---|
| a non-2xx status (the head) | raises `ApiError` at the call | returns `Failure` — no raise |
| a frame the event type rejects | raises pydantic's `ValidationError` from the loop, **after** the stream closed | same |
| an event over 1 MiB, or bad UTF-8 | raises `ValueError` / `UnicodeDecodeError` from the loop | same |
| the wire stalls | raises `httpx2.ReadTimeout` from the loop | same |
| **the body is not an event stream** | **nothing — the loop ends with zero events** | same |

**There is no SSE exception class.** Everything the loop raises for a bad body is already a
`ValueError`, so one `except ValueError` covers the family. Put that boundary around the **loop**, not
only the call — the call returns as soon as the head arrives.

The last row is the known gap: the SDK does not check `Content-Type`, so a 200 carrying a proxy's HTML
page or a buffered JSON body parses as a stream of zero events and ends quietly. If a stream yields
nothing, read the raw peer's `Success(...).headers` before suspecting the parser.

## Bounding the wait

`request_options={"timeout": ...}` bounds **each read**, so it limits the gap *between* events, not the
stream's total length — a legitimate stream may run for minutes. For a total budget, async callers wrap
the consumer in `asyncio.wait_for`; sync callers have no equivalent and must consume in a thread they
can abandon.

⚠️ `asyncio.wait_for`, not `async with asyncio.timeout(...)` — the latter is **3.11+**, and this SDK
supports 3.10.

## The async client

The `await` is on the **call**, not on the iteration:

```python
async for event in await async_client.{group}.{operation}(...):
    handle(event)

async with await async_client.{group}.{operation}(...) as stream:
    async for event in stream:
        if done(event):
            break
```

`async with` matters *more* than `with` does on the sync client: an abandoned async stream is not
finalized by reference counting, so its `ResourceWarning` arrives later and further from the cause.

## Testing an event stream

Stub the transport (`python-testing`) and hand the SDK a response whose `iter_bytes(None)` yields
event frames — `b"data: {...}\n\n"`, one blank line ending each event. The SDK reads the body in the
transport's own chunks, so split a frame across two chunks to prove the loop does not depend on
where the network cuts.
