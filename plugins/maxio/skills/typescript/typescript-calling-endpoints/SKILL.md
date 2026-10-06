---
name: typescript-calling-endpoints
description: Calling operations on an APIMatic-generated TypeScript SDK — finding the resource that owns an operation, building the one flat channel-blind request object, required vs optional vs defaulted fields and the values that never appear on the request at all, passing a body, the ApiPromise return and the two ways to read it, bounded concurrency, and cancellation. Load before writing the first call to an SDK operation, or when an operation's shape or return type is unclear.
---

# Calling endpoints on an APIMatic TypeScript SDK

Operations are **methods returning `ApiPromise`** on the client. Most are **grouped under a resource
getter** and called `client.{resource}.{operation}(...)`; an operation the spec left untagged sits
**directly on the client**, called `client.{operation}(...)`. The resource getter, the exact operation
name and its signature come from the generated SDK map (grounded in `src/client.ts` and
`src/resources/`) — operation names follow no fixed verb/resource pattern, so take the real name from
the map, never from memory.

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
compiled `dist/`. **Do not assume a `client.{resource}` level exists** — when the spec declares no tags,
or exactly one tag covering every operation, no resource classes are emitted at all.

Resource classes are exported from the package root, but only for their merged namespaces and for
`instanceof`. Never construct one: its constructor takes engine internals that are not exported.

## Method signature convention

Every operation has the same shape, with no positional overload and no sync variant:

```ts
{operation}(request: {Resource}.{Operation}Request, options?: RequestOptions): ApiPromise<T, E>
```

- **There is exactly one request parameter**, and it is **not optional** — even when every field on it
  is. An all-optional request still needs `{}` passed explicitly.
- **`options` is on every generated operation**, always last, always optional. It is
  `RequestOptions` = `{ signal?: AbortSignal; retry?: RequestRetryOptions }` and nothing else — see
  [Cancellation and per-call retry](#cancellation-and-per-call-retry).
- **An operation may declare no request parameter at all.** When every value the request carries is
  fixed by the spec, the generator emits no parameter and exports no request type, and `options` moves
  into first position. Check the **Signature** bullet before passing `{}` — it will not type-check
  against an operation whose only parameter is `RequestOptions`.

  ```ts
  await client.{resource}.{operation}();              // no request
  await client.{resource}.{operation}({ signal });    // options only
  ```
- **The map is the source of truth for the signature.** Whether a field is required, optional or
  defaulted — and whether the operation takes a body at all — varies per operation.
- **Return type** varies by operation — see
  [Making the call and reading the response](#making-the-call-and-reading-the-response).
- A non-2xx response **rejects** the promise unless you opt out with `.asApiResult()` — see
  **typescript-error-handling**.

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

Each value the spec declares produces **one of four** outcomes, and the last one catches people out:

| What the spec declares | What you get |
|---|---|
| **required**, no fixed value | `f: T` — a required member of the request object |
| **optional** | `f?: T` — omit it and nothing is sent for it |
| a **default value** | `f?: T` — omit it and the SDK **still sends the default** |
| a **constant** value | **no field at all** — the value is baked into the request and you cannot change it |

Three consequences worth taking off the map before you write the call:

- **A constant appears in no signature and in no Fields table.** Its only listing is the operation's
  **SDK-sent** bullet, which spells each fixed pair as it goes on the wire. If you are hunting for a
  field to set a `Content-Type`, an API version or a fixed `grant_type` with, that is why you cannot
  find one — and there is no override for it short of wrapping `fetch`.
- **"Required" says nothing about the channel.** A required field may travel in the query, a header or
  the form body just as easily as the path; requiredness and channel are independent columns. Never
  infer one from the route.
- **Field names are the generated `camelCase` identifiers, not the wire names.** A header field
  `traceId` is transmitted as `X-Trace-Id`, and the `Wire` column is where that mapping lives — it is
  written only where the two differ, so a `—` means they match.

The request type is declared in the resource's merged namespace, so it is
`{Resource}.{Operation}Request` — importable from the package root if you want to name it:

```ts
import { {Resource} } from "{package-name}";

const request: {Resource}.{Operation}Request = { /* ... */ };
```

## Building request models

**A JSON, text or binary operation has a `body` field.** Where the API declares an
`application/x-www-form-urlencoded` or `multipart/form-data` request, the generator emits the parts as
**individual flat request fields** alongside the path and query ones and assembles the form itself —
there is no nested body object to construct and no `body` field to pass. The operation's **Request
body** bullet says which you are looking at; the signature settles it.

The runtime carries six request-body shapes: **empty, JSON, form-urlencoded, text, multipart and
binary**. An **XML** body has no carrier, so the operation is still emitted but **degrades to no body
field at all** — there is nothing to supply the payload through, and the request goes out with no
body. Its **Request body** bullet reads `none` in that case. If you need such an endpoint, call it
with `fetch` directly; the SDK cannot send it.

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

For the JSON case, the `body` field's type is a generated model — a plain object literal, no builders.
Required members must be set; optional ones are omitted from the JSON when left `undefined`. Take the
type's name and the file that declares it from the **Type sources** table:

```ts
const result = await client.{resource}.{operation}({
  body: {
    requiredProp: value,   // required members must be provided
    optionalProp: value,   // optional; leave unset to omit from the request
  },
});
```

A body's **shape varies**: some are flat scalars, others nest an inner model. The **Fields** table and
the model file named beside it carry the real members.

**An optional-looking body is not permission to omit it.** A `body?: T` reflects what the *spec* marked
optional, not what the endpoint needs. A create whose body is optional in the spec type-checks with
`{}` passed and then fails at the provider. Where a call obviously needs a payload, pass one.

### Defaults are sent, not omitted

A field the spec gave a default is filled **by the SDK** when you omit it, and it goes on the wire.
Omitting such a field is therefore not "let the server decide" — the server sees the value. Which
fields have defaults is the `Default` column of the **Fields** table.

**And a default can silently narrow what comes back.** A defaulted field is *always sent*, so the
response you get is the one that default asked for, not the full resource. The two shapes that cost
people an afternoon:

- a representation or verbosity switch defaulting to the minimal form, so a create resolves to little
  more than an id, a status and some links;
- a field selector defaulting to one section, so whole branches of the response are simply absent.

Read the `Default` column **before** concluding the API dropped data — it was never requested.

### Every value is validated before anything is sent

Each field is schema-encoded on the way out. A wrong type or a malformed format (a bad date string,
say) rejects with an `EncodeError` — its `cause` the `SchemaError` naming the field — and **nothing is
sent**: no request reaches the network. That is an error in
your code, not an API failure; see **typescript-error-handling**.

## Enums

Enum fields take a member of the generated `const` object. The type alias is **open** — it carries a
`| (string & {})` (or `| (number & {})`) tail — so a raw string also type-checks:

```ts
import { {Enum} } from "{package-name}";

await client.{resource}.{operation}({ status: {Enum}.Active });   // preferred — a rename is caught
await client.{resource}.{operation}({ status: "active" });        // also compiles
```

Prefer the member: the string form silently survives a spec change that renames the value. See
**typescript-models** for read-back semantics and for guarding an unknown value off the wire.

## Union types, collections, and dates

Some fields are not plain scalars: `oneOf`/`anyOf`/polymorphic unions declared under
`src/models/unions/`, array and record collections, and `Date` fields whose wire format the schema pins
(ISO 8601, RFC 1123 or Unix seconds). If a request field or response member is one of these, see
**typescript-models** for how to build and read it.

## Making the call and reading the response

```ts
const value = await client.{resource}.{operation}({ /* ... */ });
```

> **Wrap the call in error handling — a non-2xx response *rejects*, it is not signalled by the return
> value.** The bare `await` above shows only the happy path. Before writing a real call, **load
> `typescript-error-handling`** for the `try`/`catch` shape and which error type to narrow on per
> operation — or use the non-throwing `.asApiResult()` form below.

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

Five things to know:

- **`.asApiResult()` must be called on the value the operation returned.** `ApiPromise` overrides
  `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the
  method is gone. `op(...).then(x => x).asApiResult()` does not compile.
- **`.asApiResult()` still rejects for every other failure** — a body that would not decode, a value that
  would not encode, a connection error, a timeout, a credential that could not be obtained, or a caller
  abort. It converts only the *HTTP error status* branch into a value, so it still needs a
  `try`/`catch` around it.
- **On failure, `outcome` carries the error's own members, not the error object** — `status`,
  `headers`, `message`, `method`, `uri` and `payload` — so `outcome.payload.kind` narrows exactly as
  `err.payload.kind` would. The `ApiError` instance is not reachable through this path.
- **Nothing suppresses an unhandled rejection.** A call you never await that fails is reported by the
  runtime — `unhandledRejection` on Node, which by default ends the process. `.asApiResult()` marks the
  promise handled as its first act, so call it on the returned value in the same turn, and never start
  a call you do not consume.
- **Both paths read one underlying outcome**, so awaiting an `ApiPromise` *and* calling
  `.asApiResult()` on it issues no second request. The request goes out when the operation is called,
  not when you await it — which also means a call you build and hold has already been sent.

### Status and headers

An awaited value gives you **only** the decoded body. `status` and `headers` are reachable in exactly
two places: on `ApiResult` above, and on a rejected `ResponseError`. The raw `fetch` `Response` is
deliberately unreachable.

### The success type

`T` is whatever the operation's success body decodes to. The **Returns** bullet names it, and the cases
you will meet are:

- **A model type** — a JSON body decoded through the generated schema. The **Type sources** table names
  the file under `src/models/` where you read its shape; the map does not duplicate it.
- **A primitive** — a `text/plain` body decoded by the plain-text scalar decoder, not by a model.
- **`undefined`** — the operation's success response has no body. That is a real value, not a mistake:
  the decoder asserts the body is empty, and a non-empty one rejects with `DecodeError`.

**On an `undefined` operation, resolving *is* the success signal.** Do not bind the value and do not
test it — success is "did not reject", exactly as for the others. Two follow-ons: if you need the
resulting state, re-read it with a separate call; and if you need to tell a `200` from a `204`,
`.asApiResult()` is the only place the status appears.

Endpoints in the same family can differ, so let each operation's own **Returns** bullet decide how you
read it.

## Cancellation and per-call retry

`RequestOptions` is the entire per-call surface:

```ts
type RequestOptions = {
  signal?: AbortSignal;
  retry?: RequestRetryOptions;   // Pick<RetryOptions, "maxRetries" | "timeout" | "statusCodesToRetry">
};
```

`retry` overrides three fields of the client's retry policy for this call alone, field by field — a
field you leave out keeps the client's value:

```ts
await client.{resource}.{operation}({ /* ... */ }, { retry: { maxRetries: 0 } });    // one attempt
await client.{resource}.{operation}({ /* ... */ }, { retry: { timeout: 5_000 } });   // 5 s per attempt
```

There is **no** per-call header, base URL or auth override, and the type admits no other retry field
(though the runtime honours one it is handed) — those belong on
`ClientOptions` at construction (**typescript-client-initialization**), and the retry policy's other
fields on `ClientOptions.retry` (**typescript-configuration-resilience**).

```ts
const controller = new AbortController();
setTimeout(() => controller.abort(new Error("too slow")), 5_000);

await client.{resource}.{operation}({ /* ... */ }, { signal: controller.signal });
```

An already-aborted signal rejects immediately. See **typescript-configuration-resilience** for
deadlines across a whole call and for combining signals.

Three mechanics that decide how you catch the result:

- **Your signal and each attempt's `retry.timeout` race the same internal controller**, so an
  attempt ends on whichever fires first. `retry.timeout` bounds **one attempt**, in milliseconds, even
  when set per call — an idempotent call that keeps failing gets up to four of them, plus backoff — so
  a signal plus your own timer is how you bound the whole call. An abort also cuts a backoff wait short,
  and is never retried.
- **An abort rejects with the signal's own `reason`, unwrapped, and a timeout with `TimeoutError`**
  once no retry is left.
  Whatever you passed to `controller.abort(reason)` — or the `DOMException` a bare `abort()` supplies —
  is what the call rejects with, so it is **not** an `{Api}Error`; the timeout is the SDK's own and
  stays in the family.
- **Neither is an `ApiError`.** A `catch` that narrows on `ApiError` — or on an operation's declared
  error class — will **not** match an abort, a timeout or a connection failure. See
  **typescript-error-handling** for a ladder over the whole family, and for rethrowing what is outside
  it.

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

Nothing is paginated and nothing is async-iterable, so there is no `for await` form. If an operation
returns a page, advance its page or cursor field yourself in a loop — see
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
