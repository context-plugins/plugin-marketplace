---
name: typescript-calling-endpoints
description: Load before writing the first call to an APIMatic-generated TypeScript SDK operation, or when an operation's request shape or return type is unclear — the one flat request object, required, optional, defaulted and SDK-fixed fields, request bodies and file uploads, binary responses, reading an `ApiPromise` or `.asApiResult()`, and per-call retry and cancellation.
---

# Calling endpoints on an APIMatic TypeScript SDK

Operations are **methods returning `ApiPromise`** on the client. Most are **grouped under a resource
getter** and called `client.{resource}.{operation}(...)`; an operation with no resource group sits
**directly on the client**, called `client.{operation}(...)`, and an SDK may have no resource level at
all. Take the getter, the exact operation name and its signature from the SDK map, never from memory —
operation names follow no fixed verb/resource pattern.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Api}Client`,
> `{package-name}`, `{resource}`, `{Resource}`, `{Operation}`, `{Enum}`) — replace it with the concrete
> identifier from the source.

## Where to read the operation's shape

1. **`map/operations/{resource}.md`** (indexed from `sdk-map.md` at the package root) — the generated
   contract sheet. Per operation: the exact **Signature**, the **Wire** verb and route, **Auth**,
   **Request body**, **SDK-sent** fixed values, **Returns**, **Error** and its arms, then a **Fields**
   table (`Field` · `Channel` · `Wire` · `Type` · `Req` · `Default`) and a **Type sources** table naming
   the file under `src/models/` that declares each type. Start here. Operations that sit directly on
   the client get their own page there too.
2. **`api-reference.md`** — per-operation prose: a usage snippet, per-parameter descriptions, and the
   semantics that decide what you must pass (field interactions, ordering rules).
3. `src/client.ts` and `src/resources/{resource}.ts` — the source, when you need to confirm something
   the docs do not carry.

Both the docs and `src/` ship inside `node_modules/{package-name}/`, so read them there rather than the
compiled `dist/`.

Resource classes are exported from the package root, but only for their merged namespaces and for
`instanceof`. Never construct one: its constructor takes engine internals that are not exported.

## Method signature convention

Every operation has the same shape, with no positional overload and no sync variant:

```ts
{operation}(request: {Resource}.{Operation}Request, options?: RequestOptions): ApiPromise<T, E>
```

- **There is exactly one request parameter**, and it is **not optional** — even when every field on it
  is. An all-optional request still needs `{}` passed explicitly.
- **`options?: RequestOptions` is on every operation**, always last — see
  [Cancellation and per-call retry](#cancellation-and-per-call-retry).
- **An operation whose every value is fixed takes no request parameter** and has no request type;
  `options` is then its only parameter. Check the **Signature** bullet before passing `{}` — it will
  not type-check against such an operation.

  ```ts
  await client.{resource}.{operation}();              // no request
  await client.{resource}.{operation}({ signal });    // options only
  ```
- Requiredness, defaults, whether there is a body, and the return type all vary per operation — read
  each from its map entry.

## The request object is flat and channel-blind

There is **one** request parameter and it is **not nested by channel**. A field named `body` *is* the
whole request body; **every other field** is fanned out to the path, query string, headers or form body
by the SDK.

```ts
// Correct — flat, whatever channel each field travels on:
await client.{resource}.{operation}({
  collectionId: "abc123",     // travels in the path
  page: 2,                    // travels in the query string
  userAgent: "my-app/1.0",    // travels as a header
  body: { name: "My thing" }, // IS the request body
});

// Wrong — there is no channel nesting:
// await client.{resource}.{operation}({ path: { ... }, query: { ... } });
```

Which channel a field travels on is the `Channel` column of the operation's **Fields** table. Because
the request is a named object, getting the channel wrong is impossible — but you cannot *read* it off
the field list either, so the table is the only place to learn what went on the wire.

### Where a field lands — the rule

| In the map | What you get |
|---|---|
| `Req` yes | `f: T` — a required member of the request object |
| `Req` no, no `Default` | `f?: T` — omit it and nothing is sent for it |
| a `Default` | `f?: T` — omit it and the SDK **still sends the default** |
| listed only under **SDK-sent** | **no field at all** — a fixed value (a `Content-Type`, an API version, a `grant_type`) spelled as it goes on the wire; no override short of wrapping `fetch` |

- **Requiredness and channel are independent.** A required field may travel in the query, a header or
  the form body just as easily as the path; never infer one from the route.
- **Field names are `camelCase` identifiers, not the wire names.** A header field `traceId` is
  transmitted as `X-Trace-Id`; the `Wire` column gives the wire name where the two differ, and `—`
  means they match.

The request type is declared in the resource's merged namespace, so it is
`{Resource}.{Operation}Request` — importable from the package root if you want to name it:

```ts
import { {Resource} } from "{package-name}";

const request: {Resource}.{Operation}Request = { /* ... */ };
```

## Building request models

**A JSON, text or binary operation has a `body` field; a form-urlencoded or multipart operation has
none** — its parts are **individual flat request fields** beside the path and query ones, and the SDK
assembles the form. The operation's **Request body** bullet says which. An **XML**-body operation has
no body field and sends no body (its **Request body** reads `none`); call that endpoint with `fetch`
directly.

**A file field takes bytes, not a path.** Every binary `body` field and every multipart file field is
typed `FileInput`, which is a `Blob`, a `Uint8Array`, an `ArrayBuffer`, a `ReadableStream` of bytes,
any async iterable of them — which is what a Node `Readable` is — or a `{ data, fileName?,
contentType? }` wrapper around one. A filesystem path is **not** a file body: open it with
`createReadStream(path)` to stream it, or `await openAsBlob(path)` to send it with a
`Content-Length`. A field declared as an array of files takes `FileInput[]`, and the SDK sends one
part per element under the shared field name; an empty array sends no part at all.

Nothing about a file is schema-checked, so a wrong value throws at the call rather than rejecting on
the wire. The media type the SDK declares is a fallback: a `contentType` on the wrapper, or a
non-empty `Blob.type`, overrides it. A file name is yours or absent — the SDK never invents one, and a
part with no file name is read as an ordinary text field by many servers, so name a file you upload.

**A binary response is a handle, not a value.** Such an operation resolves to a `BinaryContent`:
`stream`, `contentType`, and a `fileName` parsed from `Content-Disposition` where the server sent one.
Read the stream exactly once — `new Response(file.stream)` to buffer it, a reader or `for await` to
stream it — or release it with `await file.stream.cancel()` if you decide not to. No timeout covers
the read, so an unread stream holds the connection until you read it, cancel it or abort the call's
`signal`. A server-chosen file
name is untrusted input: sanitise it before writing to disk.

For the JSON case, the `body` field's type is a generated model written as a plain object literal
(**typescript-models**); take its name and the file that declares it from the **Type sources** table.

**An optional-looking body is not permission to omit it.** A `body?: T` is optional only in the type:
a create passed `{}` type-checks and then fails at the provider. Where a call obviously needs a
payload, pass one.

### Defaults are sent, not omitted

An omitted field with a `Default` is filled **by the SDK** and sent, so the server sees the default,
and the response is the one that default asked for — a verbosity switch defaulting to the minimal form
(a create resolving to little more than an id and a status), or a field selector defaulting to one
section. Read the `Default` column **before** concluding the API dropped data — it was never
requested.

### Every value is validated before anything is sent

Each field is schema-encoded on the way out: a wrong type or a malformed format (a bad date string,
say) rejects with an `EncodeError` — its `cause` the `SchemaError` naming the field — and **nothing is
sent** (**typescript-error-handling**).

## Enums

Enum fields take a member of the generated `const` object — `{ status: {Enum}.Active }`. A raw string
also compiles (the type is open), but only the member catches a rename. See **typescript-models**.

## Union types, collections, and dates

Some fields are not plain scalars: `oneOf`/`anyOf`/polymorphic unions declared under
`src/models/unions/`, array and record collections, and `Date` fields whose wire format the schema pins
(ISO 8601, RFC 1123 or Unix seconds). If a request field or response member is one of these, see
**typescript-models** for how to build and read it.

## Making the call and reading the response

```ts
const value = await client.{resource}.{operation}({ /* ... */ });
```

> **A non-2xx response *rejects*.** Before writing a real call, **load `typescript-error-handling`** for
> the `try`/`catch` shape and which error type to narrow on per operation — or use the non-throwing
> `.asApiResult()` form below.

Operations return `ApiPromise<T, E>`, a `Promise<T>` subclass. Two ways to consume it:

**Await it** — you get `T`, the decoded success body, and a non-2xx **rejects**.

**Call `.asApiResult()`** — you get a discriminated result, and an HTTP error status does **not** reject:

```ts
const outcome = await client.{resource}.{operation}({ /* ... */ }).asApiResult();

if (outcome.ok) {
  console.log(outcome.status, outcome.headers.get("x-request-id"), outcome.value);
} else {
  console.log(outcome.status, outcome.message, outcome.payload);   // the error's members, not the error
}
```

```ts
type ApiResult<T, E> =
  | { ok: true;  status: number; headers: Headers; value: T }
  | { ok: false; status: number; headers: Headers; message: string; method: HttpMethod; uri: string;
      payload: PayloadOf<E> };
```

- **Call `.asApiResult()` on the value the operation returned.** `ApiPromise` overrides
  `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the
  method is gone — `op(...).then(x => x).asApiResult()` does not compile.
- **It converts only the HTTP error status.** Every other failure still rejects, so keep the
  `try`/`catch`; on failure `outcome` carries the error's members, not the error object
  (**typescript-error-handling**).
- **The request goes out when the operation is called**, not when you await it; awaiting and
  `.asApiResult()` read the same outcome and never send twice, so a call you build and hold has already
  been sent.
- **Nothing suppresses an unhandled rejection.** A call you never consume that fails is an
  `unhandledRejection` — on Node, by default, the process ends. `.asApiResult()` marks the promise
  handled as its first act, so call it on the returned value in the same turn.

### Status and headers

An awaited value gives you **only** the decoded body. `status` and `headers` are reachable in exactly
two places: on `ApiResult` above, and on a rejected `ResponseError`. The raw `fetch` `Response` is
deliberately unreachable.

### The success type

The operation's own **Returns** bullet names `T`, which can differ between sibling operations:

- **A model type** — a JSON body decoded through its schema. The **Type sources** table names the file
  under `src/models/` where you read its shape.
- **A primitive** — a `text/plain` body.
- **`undefined`** — no body; a non-empty one rejects with `DecodeError`. Resolving *is* the success
  signal: do not test the value, re-read the resulting state with a separate call if you need it, and
  use `.asApiResult()` to tell a `200` from a `204`.
- **`EventStream<T>`** — a `text/event-stream` body. The call resolves at the response headers with
  nothing read, and `for await` over the stream yields each event's decoded `data` as a `T`; the
  stream holds its connection until the loop ends or you `close()` it. Load
  **typescript-event-streams** before you write the loop.

## Cancellation and per-call retry

`RequestOptions` = `{ signal?: AbortSignal; retry?: RequestRetryOptions; logging?: RequestLoggingOptions }`
is the entire per-call surface. `retry` overrides `maxRetries`, `timeout` and `statusCodesToRetry` for
this call, field by field — a field you leave out keeps the client's value — and `logging` takes only a
`level`. Headers, base URL, auth and the other retry and logging fields are client-level only
(**typescript-client-initialization**, **typescript-configuration-resilience**).

```ts
await client.{resource}.{operation}({ /* ... */ }, { retry: { maxRetries: 0 } });    // one attempt
await client.{resource}.{operation}({ /* ... */ }, { retry: { timeout: 5_000 } });   // 5 s per attempt

const controller = new AbortController();
setTimeout(() => controller.abort(new Error("too slow")), 5_000);
await client.{resource}.{operation}({ /* ... */ }, { signal: controller.signal });
```

- `retry.timeout` bounds **one attempt**, in milliseconds, even when set per call — an idempotent call
  gets up to four attempts plus backoff — so only your `signal` bounds the whole call
  (**typescript-configuration-resilience** for deadlines and combining signals). An abort — an
  already-aborted signal included — ends the call at once, cuts a backoff wait short and is never
  retried.
- An abort rejects with the signal's own `reason`, unwrapped, and an exhausted timeout with
  `TimeoutError`. Neither is an `ApiError`, and the abort is not an `{Api}Error` at all — see
  **typescript-error-handling** for a ladder over the whole family.

## Concurrency

There is nothing to serialize — the client is stateless apart from its token cache, and that cache is
concurrency-safe (one in-flight token acquisition is shared). A handful of independent calls can go out
together:

```ts
const [a, b] = await Promise.all([
  client.{resource}.{operationA}({ /* ... */ }),
  client.{resource}.{operationB}({ /* ... */ }),
]);
```

**Bound it once the list is data rather than two literals.** `Promise.all` over an array opens as many
simultaneous requests as the array is long, against a provider that rate-limits. The SDK retries a
`429` on an idempotent call, honouring `Retry-After`, but every one of those calls then retries after
a similar wait — jitter spreads them by a quarter at most — keeping the pressure on, and a write
outside the retry gate simply fails. Cap the width:

```ts
async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = [];
  for (let i = 0; i < items.length; i += limit) {
    results.push(...(await Promise.all(items.slice(i, i + limit).map(fn))));
  }
  return results;
}

const all = await mapLimit(ids, 10, (id) => client.{resource}.{operation}({ id }));
```

Note that `Promise.all` rejects on the first failure and leaves the rest of the batch running
unobserved; `Promise.allSettled` is usually what you want when partial success is acceptable.

Nothing is paginated. The one `for await` form is over an `EventStream`, which only an operation
whose **Returns** bullet reads `EventStream<T>` hands back (**typescript-event-streams**). If an
operation returns a page, advance its page or cursor field yourself in a loop — see
**typescript-configuration-resilience**.

## Worked example — a list/GET call

```ts
// Signature (illustrative — take the real one from map/operations/{resource}.md):
//   {operation}(request: {Resource}.{Operation}Request, options?: RequestOptions):
//     ApiPromise<{Model}, ApiError>
//
// Fields:  collectionId  path   string   yes
//          status        query  {Enum}   no
//          page          query  number   no   default 1
//          perPage       query  number   no   default 20

import { {Enum} } from "{package-name}";

const outcome = await client.{resource}.{operation}(
  {
    collectionId: "abc123",
    status: {Enum}.Active,
    perPage: 100,
    // page omitted — the SDK still fills and sends its default of 1
  },
  { signal: controller.signal },
).asApiResult();

if (!outcome.ok) {
  console.error(outcome.status, outcome.message, outcome.payload);
} else {
  for (const item of outcome.value.{items}) {
    console.log(item.id);
  }
}
```

> This operation's success body is a model that nests its list under a member, so you read that member
> and then iterate. Another operation may return the array directly, or a primitive, or `undefined`.
> Check its **Returns** bullet.

## Next

- Build bodies, unions, collections, dates, enums → **typescript-models**
- Errors and status codes → **typescript-error-handling**
- Timeouts, the retry policy, logging, base URL, paging → **typescript-configuration-resilience**
