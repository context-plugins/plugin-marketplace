---
name: typescript-event-streams
description: Consuming a server-sent-events (text/event-stream) operation on an APIMatic-generated TypeScript SDK — what EventStream<T> yields (each event's decoded data, nothing else), how the loop must end so the connection is released, narrowing a union on the yielded value, what rejects and when (the loop raises the same error family as the call, and there is no SSE error class), and bounding the wait with the client's idleTimeout. Load before writing the loop over an operation that resolves to an event stream, in addition to `typescript-calling-endpoints`.
---

# Event streams on an APIMatic TypeScript SDK

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{resource}`,
> `{operation}`, `{Api}Error`) — replace it with the concrete identifier from the source.

An operation whose success response is `text/event-stream` returns `ApiPromise<EventStream<T>, E>`
rather than a value. The promise resolves as soon as the response **headers** arrive, before anything
is read — what is deferred is the body, and the stream holds its connection until it is released.
`T` is the type the spec gives every event's `data`: a string, a model, an array, or a union.

```ts
const stream = await client.{resource}.{operation}({ /* ... */ });
for await (const event of stream) {
  event; // T — one event's data, already decoded
}
```

Iterating yields `T` itself, each event's decoded `data` and nothing else: the `event:` name and
`id:` lines of the wire format are not surfaced, so there is no envelope to unwrap and no `kind`
beyond what `T` declares. Nothing is read ahead of your loop, so a slow loop body slows delivery
rather than buffering events in memory. Where the operation declares a terminating event (the map's
**Returns** bullet names it, such as a `[DONE]` data line), the SDK consumes it, closes the stream and
never yields it; a body that closes before that line arrived is a clean end too.

## Start here

**Drain the loop.** Reaching the end releases the connection, so the shortest correct code is a plain
`for await`:

```ts
for await (const event of await client.{resource}.{operation}({ /* ... */ })) {
  handle(event);
}
```

**Leaving the loop early releases it too** — `break`, `return`, or a `throw` inside the body all
close the stream before control leaves. A stream you decide not to read at all is released with
`await stream.close()`, and where your runtime declares `Symbol.asyncDispose`, `await using` does
the same at block exit:

```ts
await using stream = await client.{resource}.{operation}({ /* ... */ });
for await (const event of stream) {
  if (done(event)) break; // the stream is released either way
}
```

## How the iteration ends

| You want | Write | Releases |
|---|---|---|
| the whole stream | a plain `for await` | at the end of the stream |
| to stop at a condition | `break` / `return` inside the loop | as the loop exits |
| a stream you will not read | `await stream.close()` | your `close()` |
| release at block exit | `await using stream = …` | the block |
| to stop from elsewhere | abort the `signal` you passed | the SDK cancels its own reader |

`close()` is idempotent, and a pending `next()` ends with `done` rather than an error. A stream is
**single-use**: a second `for await` over the same `EventStream` throws a `TypeError`, exactly as a
second read of a web `ReadableStream` does. `stream.toReadableStream()` hands you the same values as a
web `ReadableStream<T>` and takes the stream's one iteration.

## What the loop yields

| The success schema is | each `event` is | Narrow with |
|---|---|---|
| `type: string` | `string` — the event's text, verbatim | nothing — it is the value |
| an object schema | `{Model}` | nothing — it is the model |
| an array schema | `{Model}[]` — one batch per event, no wrapper model | nothing |
| a `oneOf` with a discriminator | `{Union}` | `switch (event.kind)` |

Every event decodes through the **one** schema the spec declares for the stream, whatever name the
server gave it, so a union is narrowed on its own discriminant. An error the API reports *inside* the
stream is an event like any other: the spec declares its shape as an arm of the union, the loop
yields it, and the stream goes on unless you `break`.

## What can go wrong

| What failed | Direct call | `.asApiResult()` |
|---|---|---|
| a non-2xx status (the headers) | rejects at the call with `ApiError` (or the operation's typed subclass) | resolves `{ ok: false }` — no rejection |
| a 2xx that is not `text/event-stream` | nothing checks the media type: the call resolves and the body is read as event frames, so a JSON body usually ends the loop cleanly with no event | same |
| an event whose `data` does not fit the schema | the loop rejects with `DecodeError`, stream released | same |
| the connection dies mid-read | the loop rejects with `ConnectionError` | same |
| the body closes before the declared sentinel arrived | the loop ends cleanly; every event the server sent was delivered | same |
| the server sends nothing for `idleTimeout` | the loop rejects with `TimeoutError`, `timeout` = the idle bound | same |
| you abort the `signal` | the pending `next()` rejects with the signal's own `reason` — **not** an `{Api}Error` | same |
| a second iteration of one stream | `TypeError` at the `for await`, a bug | same |

**There is no SSE error class.** Everything the loop raises is a leaf of the one `{Api}Error` family,
the same `DecodeError`, `ConnectionError` and `TimeoutError` the call itself can raise, narrowed on
`err.kind` exactly as `typescript-error-handling` describes. Put that boundary around the **loop**, not
only the call — the call settles as soon as the headers arrive:

```ts
try {
  const stream = await client.{resource}.{operation}({ /* ... */ });
  for await (const event of stream) {
    handle(event);
  }
} catch (err) {
  if (err instanceof {Api}Error) {
    // err.kind is "api" before the stream existed, and "decode", "connection" or "timeout" from the loop
  } else {
    throw err; // a caller abort or a bug — not ours
  }
}
```

## Resuming

The SDK does not read the `id:` lines and the stream carries no resume point. Where the spec declares
a `Last-Event-ID` header, the operation's request type carries it as an optional field the SDK sends
verbatim; what to put in it is yours to track, from the data the events carry, because no event id
reaches your loop.

## Bounding the wait

The client's `retry.timeout` stops at the response headers; an event stream has its own clock.
`ClientOptions.eventStream.idleTimeout` (default `60_000` ms) is how long the server may stay silent
while your loop waits for the next event — any bytes reset it, a heartbeat comment included, and it
runs only while an iteration is waiting, so time your loop body spends on an event never counts.
`null` turns it off; `0` is a zero-length window. It is resolved once, as the client is built, and no
call overrides it. For a total budget, pass a `signal` and abort it: the SDK cancels its own reader,
so the stream stops whatever your `fetch` does with the body.

## The non-throwing form

`.asApiResult()` resolves to `{ ok: true, status, headers, value }` with `value` the `EventStream<T>`
— the only way to read the opening status and headers of a stream — or `{ ok: false, … }` for an
error status. The loop over `result.value` still rejects for the failures in the table above.

## Testing an event stream

Fake `fetch` (`typescript-testing`) and hand the SDK a `Response` whose body is a `ReadableStream` of
event frames under `content-type: text/event-stream` — `data: {...}\n\n`, one blank line ending each
event. The SDK reads the body in the transport's own chunks, so split a frame across two `enqueue`
calls to prove the loop does not depend on where the network cuts, and record what the body's
`cancel` receives to prove that `break` released the connection.
