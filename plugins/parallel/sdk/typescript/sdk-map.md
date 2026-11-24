<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Parallel (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Parallel |
| Package | `parallel` |
| Package version | `0.1.2` |
| API spec version | `0.1.2` |
| Import specifier | `parallel` — the package root is the **only** entry. Deep imports (`parallel/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20.3` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^4.1.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/parallel/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { ParallelClient } from "parallel";

const client = new ParallelClient({
  apiKeyAuth: "YOUR_API_KEY",
});
```

The only constructor is `new ParallelClient(options: ClientOptions = {})`, so `new ParallelClient()` is the minimum. Resources are memoized lazy getters on the client — `client.chatApiBeta`, `client.extract`, `client.findAll`, `client.memory`, `client.monitor`, `client.responsesApi`, `client.search`, `client.tasks` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverOptions` | the server's base-URL and template-variable overrides | `{}` — the resolver merges the declared defaults in |
| `retry` | `RetryOptions` | the `RetryOptions` defaults below |
| `eventStream` | `EventStreamOptions` | the `EventStreamOptions` defaults below |
| `logging` | `LoggingOptions` | off — the `LoggingOptions` defaults below |
| `hooks` | `HookOptions` | none — the `HookOptions` types below |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `apiKeyAuth` | `SecretProvider \| undefined` | `PARALLEL_API_KEY_AUTH`, else unset |

The 1 auth field is optional, and constructing the client never fails over one. A credential field left unset is read from the environment variables its Default cell names, once, when the client is built. A call whose operation requires a credential that is still unset rejects with `AuthError` before anything is sent. What each one puts on the wire, which operations require it, and the rules for the environment are under Servers & auth.

When no `fetch` is reachable the **constructor** throws `ConfigurationError`, not the first call.

`RetryOptions` fields (source: `src/core/retry.ts`; exported from `parallel` as a type). Every field is optional, so pass only the fields you change — each one left out takes its default:

| Field | Type | Default |
| --- | --- | --- |
| `timeout` | `number` (ms) | `60_000` |
| `statusCodesToRetry` | `readonly number[]` | `[408, 429, 500, 502, 503, 504]` |
| `httpMethodsToRetry` | `readonly HttpMethod[]` | `["GET", "HEAD", "PUT", "OPTIONS"]` |
| `maxRetries` | `number` | `3` |
| `delay` | `number` (ms) | `1000` |
| `backoffFactor` | `number` | `2` |
| `useExponentialBackoff` | `boolean` | `true` |
| `maxJitter` | `number` (a fraction, `0` to `1`) | `0.25` |
| `onRetry` | `((attempt: RetryAttempt) => void) \| undefined` | unset |

`retry: { maxRetries: 0 }` turns retries off.

A call may override three of these through `RequestOptions.retry`, typed `RequestRetryOptions`: `maxRetries`, `timeout` and `statusCodesToRetry`.

Retry types named by the fields above — public members with their **declared types**, verbatim from source; every member is `readonly`, and both are exported as types:

| Type | Public members | Source |
| --- | --- | --- |
| `RetryAttempt` — the `onRetry` callback argument | `attemptNumber: number` · `delay: number` · `reason: RetryReason` | `src/core/retry.ts` |
| `RetryReason` — narrow on `kind` | `{ kind: "status"; status: number; headers: Headers }` or `{ kind: "fault"; error: ConnectionError \| TimeoutError }`, the two retryable leaves of `ParallelError` | `src/core/retry.ts` |

`EventStreamOptions` fields (source: `src/core/event-stream.ts`; exported from `parallel` as a type). Only an operation that resolves to an `EventStream` reads it; it is resolved once, as the client is built, beside `retry`, and no call overrides it. Its one field is optional, and a value the engine cannot honour falls back to the default rather than raising:

| Field | Type | Default |
| --- | --- | --- |
| `idleTimeout` | `number \| null` (ms the server may stay silent while your loop waits; `null` turns it off, `0` is a zero-length window) | `60_000` |

`LoggingOptions` fields (source: `src/core/logging.ts`; exported from `parallel` as a type). Every field is optional, so pass only the fields you change — each one left out takes its default:

| Field | Type | Default |
| --- | --- | --- |
| `logger` | `Logger` | `console` |
| `level` | `LogLevel` — `"off" \| "error" \| "warn" \| "info" \| "debug"` | `"off"`; `"debug"` when `logger` is set |
| `logRequestHeaders` | `boolean` | `false` |
| `logResponseHeaders` | `boolean` | `false` |
| `logRequestBody` | `boolean` | `false` |
| `bodySizeLimit` | `number` (bytes of UTF-8) | `32_768` |
| `loggableContentTypes` | `readonly string[]` | `["application/json", "application/x-www-form-urlencoded"]` |
| `redactedHeaders` | `readonly string[]` | `[]` |
| `unmaskHeaders` | `readonly string[]` | `[]` |
| `redactedKeys` | `readonly string[]` | `["sig", "signature", "access_token", "apikey", "api_key", "client_secret", "password", "refresh_token", "code", "assertion", "client_assertion"]` |
| `redactionPlaceholder` | `string` | `"***"` |

A call may override one of these through `RequestOptions.logging`, typed `RequestLoggingOptions`: `level`.

Logging types named by the fields above — their **declared types**, verbatim from source; both are exported as types:

| Type | Public members | Source |
| --- | --- | --- |
| `Logger` — the `logger` field | `error(message: string, details: LogDetails): void` · `warn(message: string, details: LogDetails): void` · `info(message: string, details: LogDetails): void` · `debug(message: string, details: LogDetails): void` | `src/core/logging.ts` |
| `LogDetails` — narrow on `event` | `HttpRequestDetails \| RequestHeadersDetails \| RequestBodyDetails \| HttpResponseDetails \| ResponseHeadersDetails \| HttpRetryingDetails \| HttpFailedDetails`, each exported as a type | `src/core/logging.ts` |

**Hooks.** `ClientOptions.hooks` and `RequestOptions.hooks` each take a `HookOptions`: a `beforeRequest` list and an `afterResponse` list of plain functions (source: `src/core/hooks.ts`). Each `beforeRequest` hook is handed the attempt's `Request`, a `HookContext` and the call's signal once the credential is applied, before the request is logged and sent; set a header on it with `request.headers.set(…)` and return nothing, or return a `Request` to send in its place, built from the one handed in (`new Request(request, { … })`) so it keeps the call's signal. Each `afterResponse` hook is handed the `Response` once its headers arrive, before the retry decision; return nothing to keep it, or return a `Response` to put in its place: the retry decision and the decoder read the returned one, and a hook that returns a different response owns the one it was handed, so it reads it, builds on its body or cancels it. To read the body and keep the response, read `response.clone()`: nothing checks that a hook left the body unread, and one that uses it up without returning another response leaves the client nothing to decode, so the call fails with a `DecodeError`. Reading a clone waits for the whole body, so read only the status and headers of an event stream or a download: a hook that reads either one's clone holds the stream back until it ends and buffers the download whole. The client's hooks run first, then the call's, list by list, each hook handed what the one before it left, and a call's hooks never replace the client's. A hook may return a promise, which is awaited outside `retry.timeout`. Hooks run on every attempt. A hook that throws ends the call with what it threw, unretried. The client's lists are not read when the client is built: each call reads them as it starts. The values are not checked at runtime: one the types rule out, a list that is not iterable or an entry that is not a function, is the platform's `TypeError` from the call. A returned request changes what is sent, not the URL the log lines and the call's errors name.

| Type | Members | Source |
| --- | --- | --- |
| `HookOptions` | `beforeRequest?: readonly BeforeRequestHook[] \| undefined` · `afterResponse?: readonly AfterResponseHook[] \| undefined` | `src/core/hooks.ts` |
| `BeforeRequestHook` | `(request: Request, context: HookContext, signal: AbortSignal) => Request \| void \| Promise<Request \| void>` | `src/core/hooks.ts` |
| `AfterResponseHook` | `(response: Response, context: HookContext, signal: AbortSignal) => Response \| void \| Promise<Response \| void>` | `src/core/hooks.ts` |
| `HookContext` | `method: HttpMethod` · `uri: string` · `options: Omit<RequestOptions, "signal"> \| undefined` | `src/core/hooks.ts` |

All four are exported as types. `uri` is the URL the call dials without its query, the same `uri` its errors carry; a hook's third argument is the call's `signal`, or one that never aborts when the call passed none, and `options` is the call's `RequestOptions`, typed without that `signal`.

**`ClientOptions.fetch` replaces the transport** — a proxy, a custom agent and a mock go here; a header or a metric belongs in a hook. There is no middleware chain. The SDK calls a replacement with one argument, the `Request` of the attempt, and no `init`. A replacement **must forward that `Request`, or its `signal`,** to whatever actually performs the request. Drop the signal and both the per-call signal and `retry.timeout` go inert — the call neither aborts nor times out. To add a header, copy the `Request` with `new Request(request)` and set it on the copy's `headers`: passing `{ headers }` to the copy replaces every header the SDK set rather than adding to them. A replacement may reject with an error of its own when that signal aborts: a timeout is still a `TimeoutError` that is retried, and an abort of `RequestOptions.signal` still rejects with the caller's own `reason`.

**Cancellation.** The `signal` on `RequestOptions` is the per-request cancellation surface. Aborting rejects with the signal's **own `reason`** — whatever you passed to `abort()`, or the platform `DOMException` a bare `abort()` supplies — unwrapped, so it is **not** an `ParallelError` and a `catch` that tests the family must rethrow it. An already-aborted signal rejects immediately. The `retry.timeout` that bounded the attempt is the SDK's own and does stay in the family, as `err.kind === "timeout"`. It starts once the credential is in hand and covers the request up to its response headers — not obtaining the credential and not reading the body, which only the signal bounds, so a body that stalls after its headers holds a call with no signal until the transport gives up.

An **event stream** differs. Once the `ApiPromise` has resolved with an `EventStream`, the SDK reads the body as you iterate and never before. An abort rejects the pending `next()` with the signal's `reason` whatever your `fetch` does with the body; `break`, `return()`, a throw in the loop body, `await stream.close()` and `await using` release it; a connection that dies mid-read is a `ConnectionError`, and a body that closes is a clean end whether or not the sentinel its operation declares arrived; an event whose `data` does not fit the operation's schema is a `DecodeError` carrying the stream's status and headers; and a stream that sends no byte for `eventStream.idleTimeout` (`60_000` ms by default, `null` for none), heartbeat comments included, ends with a `TimeoutError`. Time your loop body holds an event never counts. Every failure while the stream is read is an `ParallelError` leaf, the same family the call raises, and an error the API reports inside the stream is an event, an arm of the data the operation declares.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal \| undefined` · `retry?: RequestRetryOptions` · `logging?: RequestLoggingOptions` · `hooks?: HookOptions` | `src/core/api-request.ts` |
| `RequestRetryOptions` — `Pick<RetryOptions, "maxRetries" \| "timeout" \| "statusCodesToRetry">` | `maxRetries?: number` · `timeout?: number` · `statusCodesToRetry?: readonly number[]` | `src/core/retry.ts` |
| `RequestLoggingOptions` — `Pick<LoggingOptions, "level">` | `level?: LogLevel` | `src/core/logging.ts` |

**A per-call `retry` is merged field by field over the client's resolved policy**, so `{ retry: { maxRetries: 0 } }` changes that one field for that one call and leaves every other call alone.

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| middleware, interceptors, `onError` | none. `hooks` gives `beforeRequest` and `afterResponse`, above; nothing wraps the call, and an attempt with no response reaches no `afterResponse` hook |
| SSE request bodies, WebSockets | none. `text/event-stream` is a response media type only — the 5 operations resolving to an `EventStream` you iterate or release. Every other decoder reads the body to completion, bar a binary success, which hands its stream over unread |
| multipart <em>responses</em>, XML bodies | none. A multipart reply is not decoded and an XML body is not sent — an operation declaring either is still emitted, with no body to supply or read |
| per-request `headers`, `baseUrl`, idempotency key | not as fields. `RequestOptions` is `{ signal, retry, logging, hooks }`; a call's `beforeRequest` hook can set a header, the minted `Idempotency-Key` included, and a base URL cannot be set per call. Create a replacement key once per call, outside the hook: a hook runs on every attempt, so a key made inside it differs on each retry |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and every **operational** failure belongs to **one family**: `ParallelError`, a union over seven leaves, so one `instanceof ParallelError` sees all of them. It is not the whole escape set — four throwables sit outside it, enumerated below. Every leaf names the call it raised — `err.method` and `err.uri` — and `message` opens with that name. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` there, or on `err.name`, which is stable across copies.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ParallelError` (declared as `CoreError`) | `kind: ErrorKind` · `method: HttpMethod` · `uri: string` · `message` · `cause` — the union every failure below belongs to | `src/core/errors.ts` |
| `ResponseError` | the rung the server answered on, `ApiError \| DecodeError`; adds `status: number` · `headers: Headers` | `src/core/errors.ts` |
| `ApiError` | `kind: "api"` · `payload` — the open arm, whose `kind` is `string`. **Not generic**: a typed operation's subclass redeclares `payload` with its own literal arms | `src/core/api-error.ts` |
| `TimeoutError` | `kind: "timeout"` · `timeout: number` | `src/core/errors.ts` |
| `DecodeError`, `EncodeError`, `ConnectionError`, `AuthError`, `PaginationError` | their `kind`, and nothing beyond the two rows above | `src/core/errors.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/api-error.ts` |
| `Undeclared` | `kind: "undeclared"` · `rawBody: ArrayBuffer` — the last arm of every error class, carrying the untouched bytes of a status no arm covers, a middleware's included | `src/core/api-error.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; message: string; method: HttpMethod; uri: string; payload: P }`, `P` being the error class's payload union — the failure branch carries the error's own members, never the error object | `src/core/api-promise.ts` |

`ParallelError` and `ResponseError` are each a **type and a value**: the type is the union, the value is the abstract class every leaf extends, so `instanceof` and `err.kind` select the same set. Neither can be constructed or extended. `uri` is the absolute URL the call dialled, with the server variables expanded and the path parameters filled. It carries no query, fragment or userinfo, so no query parameter reaches it. One failure names an unresolved URI: a path parameter rejected by its schema arrives as an `EncodeError` whose `uri` still shows the unfilled `{braces}` — an `undefined` one included, since a path parameter is always required, so its schema rejects it first.

`ErrorKind` is closed, so a `switch` over `err.kind` is exhaustive:

| `err.kind` | What happened | Adds |
| --- | --- | --- |
| `"api"` | the API answered with an error status | `status` · `headers` · `payload` |
| `"decode"` | the answer could not be turned into the declared value — the body was not JSON, failed its schema, arrived where none is declared, or died mid-read after the response line, or, on an operation that resolves to an `EventStream`, was an event whose `data` did not fit; `cause` carries the underlying failure | `status` · `headers` |
| `"encode"` | a request value did not match its declared type, so **nothing was sent**. `cause` is the `SchemaError` that rejected it | — |
| `"connection"` | `fetch` rejected before a response line arrived, or an event stream's connection failed while you read it | — |
| `"timeout"` | `ClientOptions.retry.timeout` elapsed, or an event stream stayed silent past its idle timeout. `timeout` is the budget that ran out | `timeout` |
| `"auth"` | a credential the operation requires is **not configured**, so nothing was sent, or could not be **obtained**, per the paragraph below | — |
| `"pagination"` | a next link the API sent resolved to another origin, or was not a URL, so the walk stopped there. Raised inside a paged loop, after the page that carried the link; `uri` names the link, or the page that carried it when the link is not a URL | — |

**Four throwables sit outside the family**, so `instanceof ParallelError` is `false` on each and a `catch` that tests it has to rethrow what is left. `ConfigurationError` comes out of the **`ParallelClient` constructor**, synchronously and before any `ApiPromise` exists: no reachable `fetch` or a `ClientOptions.retry` or `ClientOptions.logging` whose reads throw. One call can reject with it too: a `RequestOptions.retry` or `RequestOptions.logging` whose reads throw. Either way the failed read is on `cause`. `SchemaError` is what a codec throws when called directly — `acceptedPredictionTokensSchema.decode(json)` — so it names no call; through an operation the same failure arrives one level down, on `DecodeError.cause` or `EncodeError.cause`, and a `serverOptions` override whose value is not a string raises it from the constructor too. Bugs stay outside the family and reach you raw — an unparseable `baseUrl` is a `TypeError`, and so is a second iteration of one `EventStream`. And a caller abort arrives as the signal's own `reason`, unwrapped. The first two are exported from the package root; the other two are not ours to export.

**`AuthError` is about having and obtaining a credential, never about being refused one.** It is raised before anything is sent when a credential the operation requires is not configured, and its message names what to set: every missing member of a requirement that needs several, every alternative of one that accepts any of several. It is also raised when a credential could not be obtained — a credential function that returns nothing. A 401 *from the API* is an `ApiError` like any other status.

```ts
try {
  const response = await client.chatApiBeta.chatCompletionsV1BetaChatCompletionsPost({
    body: {
      model: "some example string",
      messages: [{ role: Role1.System, content: "some example string" }],
    },
  });
} catch (err) {
  if (err instanceof ParallelError) {
    switch (err.kind) {
      case "api":
        // TODO: the API answered with an error status — read err.status and err.payload
        break;
      case "decode":
        // TODO: the answer did not fit the spec — read err.status and err.cause
        break;
      case "encode":
        // TODO: nothing was sent — err.cause is the SchemaError that rejected the value
        break;
      case "connection":
      case "timeout":
      case "auth":
        // TODO: no response was produced — err.kind says which
        break;
      case "pagination":
        // TODO: the walk stopped at a next link it could not follow — err.uri says where
        break;
    }
  } else {
    throw err;
  }
}
```

**Narrowing the payload.** A typed subclass declares its arms as literals, so `switch (err.payload.kind)` narrows `payload.body` to exactly one model. The `kind` is named after the arm's **body**, *not* its status code: a body that references a model takes that model's name in lower camel, any other body `error{Status}`, and a second arm that would land on the same name takes a numeric suffix. On the base `ApiError` — what an operation with no declared error bodies rejects with — `payload.kind` is `string`, so comparing it to `"undeclared"` narrows **nothing**: use `"rawBody" in err.payload`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms, in two passes: an exact numeric status is looked up across the whole table **first**, then the first covering `[lo, hi]` range. A body that does not fit the arm it matched is a `DecodeError`. A status no row covers is the `"undeclared"` arm with its bytes untouched — a spec's `default` response is not a row, so a gateway's or a WAF's own status lands there rather than failing the `default` schema.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — every other failure still rejects, `DecodeError` included, so the `catch` stays. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

```ts
try {
  const result = await client.chatApiBeta
    .chatCompletionsV1BetaChatCompletionsPost({
      body: {
        model: "some example string",
        messages: [{ role: Role1.System, content: "some example string" }],
      },
    })
    .asApiResult();
  // TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
  if (result.ok) {
    // TODO: Use 'result.value' — what this operation resolves to
  } else {
    // TODO: Use 'result.message', 'result.method' and 'result.uri', and narrow 'result.payload'
  }
} catch (err) {
  if (err instanceof ParallelError) {
    // TODO: no error status was produced — err.kind says which failure this is
  } else {
    throw err;
  }
}
```

`result.payload` is the same payload union a thrown `ApiError` carries on `err.payload`, and `result.message`, `result.method` and `result.uri` are that error's own members — so the **Error arms** bullet on an operation's page enumerates the payload either way, and the `catch` above it is for the rest of the family. `result.method` and `result.uri` are named on this map alone.

Of **36 operations**, **36** declare typed error bodies and **0** reject with the base `ApiError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (8 groups, 36 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. When the request type has no required field the request is `request?:` and may be omitted — `client.monitor.listMonitorsV1MonitorsGet()` sends what `client.monitor.listMonitorsV1MonitorsGet({})` sends; 1 of the 36 operations is in that case. There is no positional overload. What the second argument carries is a `signal`, a `retry` override and a log level; a per-call base URL, header or auth override does not exist | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | the operation is paged — it returns a `Pageable<TPage, TItem, E>`: a loop over it throws `E` at the first error status, and `.asApiResult()` on the returned value is the form whose `.pages()` yields one `ApiResult<TPage, E>` per page |
| **`E` is the base `ApiError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header**, and a named media type means the body is **required** — the request type's field is not optional | here | the spec declared the body optional — the bullet adds **Optional**, the field is `field?:`, and omitting it sends no body and no `Content-Type` header at all |
| **Resolves once, to one whole value** — except a binary body, which resolves to a stream the caller reads, and an event stream, which resolves at the response headers to an `EventStream` of decoded events the caller iterates or releases. No partial results | here, Not on this SDK | the operation is paged — it returns a `Pageable`, the first request goes out when a loop starts, and each page resolves on its own as the loop reaches it. Its **Returns** bullet says so, as does an event stream's |
| **Six identity headers ride every request** — `User-Agent`, `X-APIMatic-Lang`, `X-APIMatic-Package-Version`, `X-APIMatic-Gen-Version`, `X-APIMatic-OS` and `X-APIMatic-Runtime`. They identify the generated SDK, so **no option configures them** | here | the operation declared a header of the same name — the operation's layer is folded after the client's, so its value wins |
| **A fresh `Idempotency-Key` rides every non-GET call that does not declare that header itself**, minted per call in the operation's own header layer. It makes a *replayed* request safe, not a repeated one — a value that changes per call deduplicates nothing, so it is no substitute for a key the API documents. **No option sets it directly, and a call's `beforeRequest` hook can replace it**; once minted it is always sent — a runtime with no `crypto` global mints it from `Math.random` mixed with the clock and a per-process counter | here | the operation is a GET, or declared that header itself — then its own value stands and nothing is minted |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation; a client-credentials scheme names the scopes the operation asks for, and a requirement that also admits anonymous callers ends `or anonymous` | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `TypeError` naming the unfilled placeholder — a guard no operation reaches, since a path parameter is always required and its schema rejects `undefined` first, as an `EncodeError`; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**An event stream is a resource you own.** It resolves at the response headers with nothing read, and nothing is read ahead of the event you ask for. Until it is read to its end, closed, or released by leaving the loop, the connection stays held. The two types below are declared in `src/core/event-stream.ts`, not in `src/models/`, so they have no schema value; both are exported from the package root as types.

| Type | Members | Source |
| --- | --- | --- |
| `EventStream<T>` | `[Symbol.asyncIterator]()`, yielding `T` · `close(): Promise<void>` · `toReadableStream(): ReadableStream<T>`, plus `[Symbol.asyncDispose]` wherever your compilation declares that symbol — *a resource: iterate it once, or close it* | `src/core/event-stream.ts` |
| `EventStreamOptions` | the `idleTimeout` field tabulated under Getting a client | `src/core/event-stream.ts` |

Each step of the loop is one event's `data`, decoded through the type the operation declares; the event's name and `id` lines are not surfaced.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Operations | Page |
| --- | --- | --- | --- |
| `chatApiBeta` | 1 | `chatCompletionsV1BetaChatCompletionsPost` | [map/operations/chat-api-beta.md](map/operations/chat-api-beta.md) |
| `extract` | 1 | `extractV1ExtractPost` | [map/operations/extract.md](map/operations/extract.md) |
| `findAll` | 10 | `cancelFindallRunV1BetaFindallRunsFindallIdCancelPost` · `enrichFindallRunV1BetaFindallRunsFindallIdEnrichPost` · `extendFindallRunV1BetaFindallRunsFindallIdExtendPost` · `findallEntitySearchV1BetaFindallEntitySearchPost` · `findallRunsV1GetV1BetaFindallRunsFindallIdGet` · `findallRunsV1V1BetaFindallRunsPost` · `getFindallEventsV1BetaFindallRunsFindallIdEventsGet` · `getFindallResultV1BetaFindallRunsFindallIdResultGet` · `getFindallSchemaV1BetaFindallRunsFindallIdSchemaGet` · `ingestFindallRunV1BetaFindallIngestPost` | [map/operations/find-all.md](map/operations/find-all.md) |
| `memory` | 3 | `clearMemoryV1BetaMemoryClearPost` · `evictMemorySourceV1BetaMemoryEvictPost` · `retrieveMemoryV1BetaMemoryRetrievePost` | [map/operations/memory.md](map/operations/memory.md) |
| `monitor` | 7 | `cancelMonitorV1MonitorsMonitorIdCancelPost` · `createMonitorV1MonitorsPost` · `listMonitorEventsV1MonitorsMonitorIdEventsGet` · `listMonitorsV1MonitorsGet` · `retrieveMonitorV1MonitorsMonitorIdGet` · `triggerMonitorRunV1MonitorsMonitorIdTriggerPost` · `updateMonitorV1MonitorsMonitorIdUpdatePost` | [map/operations/monitor.md](map/operations/monitor.md) |
| `responsesApi` | 1 | `createResponseV1ResponsesPost` | [map/operations/responses-api.md](map/operations/responses-api.md) |
| `search` | 1 | `v1SearchV1SearchPost` | [map/operations/search.md](map/operations/search.md) |
| `tasks` | 12 | `tasksRunsEventsGetV1TasksRunsRunIdEventsGet` · `tasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet` · `tasksRunsGetV1TasksRunsRunIdGet` · `tasksRunsInputGetV1TasksRunsRunIdInputGet` · `tasksRunsPostV1TasksRunsPost` · `tasksRunsResultGetV1TasksRunsRunIdResultGet` · `tasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet` · `tasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet` · `tasksTaskgroupsPostV1TasksGroupsPost` · `tasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet` · `tasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet` · `tasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost` | [map/operations/tasks.md](map/operations/tasks.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. Take the pair from an operation's **Type sources** table, or build the directory from the kind below. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. Never grep for a type.

| Group | Count | Directory |
| --- | --- | --- |
| Objects (plain `type`, no class) | 169 | `src/models/` |
| Enums (open; const companion plus schema) | 56 | `src/models/` |
| Unions | 214 | `src/models/unions/` |
| Typed error classes (`ApiError` subclass, one per typed operation) | 36 | `src/resources/`, in the declaring module's namespace |

Conventions: every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it. A schema value is directly usable both ways: `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: T): W; validate(v: T): ValidationResult }` — `validate` runs `encode`'s rules without the conversion and without the throw, and answers `{ success: true }` or `{ success: false, message }` — and `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time. Enums are **not** TypeScript `enum`s and are open: a `const` companion plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the base type is assignable and the schema validates the base type only, never membership — read the member names and the values they send off the companion, and use `.values` to test membership yourself. A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import; one without a discriminant is narrowed on the shape of its arms, which its declaration spells out. A property default is filled by the SDK on **encode as well as decode**, so omitting one still sends it — read it off the `defaulted(…)` entry in the schema, or off the property's `@default`. A numeric property is a `number` whatever its format, and its schema follows the type. `type: integer` with no format, `int32` or `int64` rejects a fraction and any value outside the safe-integer range; `type: number` with no format, `float`, `double` or `bigdecimal` rejects a non-finite value. A property's wire name is its `_keysMap` entry in the schema and may differ from the TypeScript name — read it there rather than deriving it. A model whose spec schema is open — `additionalProperties` absent, `true`, or a schema — carries one more optional field, `additionalProperties?: Record<string, T>`, where `T` is the value schema's own type: `JsonValue` for `true` or absent, otherwise the declared type. On the way in, every wire key the model does not declare lands in it, under its wire name and validated against `T` as a declared field would be; the field is **present only when the wire carried an extra**, so test for it with `?.`. On the way out, write extras into it and the SDK spreads them onto the wire as plain siblings of the declared fields; a value that is not a `T`, or a key the model already declares, is an `EncodeError` before any request is sent. A model whose schema says `additionalProperties: false` has no such field, and an unknown key on it still passes through both directions untouched. When the spec itself declares a property named `additionalProperties`, that property keeps its name and the record is `additionalProperties2` instead — so whether a model has the field, what it is called and what its `T` is, is read off the model's declaration, never off the spec. A named spec schema whose resolved form is a bare container, or which is used only as a form-encoded body, gets no model file and no exported name: the first is written inline at each use site, the second is flattened onto the operation's request type, one field per property, so read that field list from the request type.

**A schema whose spec declares value constraints carries them on its public schema, and the operations run a structural twin.** The public schema enforces the spec's `minLength`/`maxLength`, `pattern`, `format` (`email`, `hostname`, `ipv4`, `ipv6`, `uri`, `uri-reference`, `json-pointer`), `minimum`/`maximum`, `exclusiveMinimum`/`exclusiveMaximum`, `multipleOf`, `minItems`/`maxItems`/`uniqueItems` and `minProperties`/`maxProperties`, and the keywords on an array's `items` and a map's `additionalProperties`, reported under the item's index or the value's key, in both directions: its `validate(value)` returns `{ success: true }` or `{ success: false, message }`, the message naming every field that breaks one and why, and is how you check a value before sending it. A check never fires on an omitted optional field, and a missing required field is the same structural failure it is on every other model. The SDK's own operations do not apply these constraints — they encode and decode through a structural twin the module keeps for itself and the package root does not export — so a value the service would accept is never refused on the way out, and a service that is ahead of the spec is never refused on the way in. A model that nests a constrained one carries the same split, so its `validate` checks the nested value too and reports its fields under their full path, while the operation sends it through the unexported twin and accepts whatever you built. A model splits this way: `createMonitorRequestSchema` enforces the keywords and the unexported `createMonitorRequestInternalSchema` is what the operations run. A `oneOf` with a discriminator splits the same way: `response200TasksRunsEventsGetV1TasksRunsRunIdEventsGetSchema` is the discriminated union over the variants' constrained schemas, and the unexported `response200TasksRunsEventsGetV1TasksRunsRunIdEventsGetInternalSchema` over their structural ones, so the operations check the tag and nothing else. An `anyOf` splits the same way: `excludeListSchema` is the union over the arms' constrained schemas and the unexported `excludeListInternalSchema` over their structural ones, so an operation sends any arm by shape, and only `validate` refuses a value that breaks an arm's constraints. Every other model's schema is structural only.

Every name comes from the package root — there is no default export, and no deep imports:

```ts
import { type AcceptedPredictionTokens, acceptedPredictionTokensSchema } from "parallel";
```

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **36 of the 36 operations** declare a requirement and **0** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `apiKeyAuth` | `apiKeyAuth` | header `x-api-key: <key>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. Where it also lists an empty requirement, the operation admits anonymous callers: the SDK sends the credential when it is configured and goes out without one when it is not, which is the only way a secured operation is sent bare. The combinators that express this (`allAuth`, `anyAuth`, `orAnonymous`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `SecretProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as unset, and a function counts as configured without being invoked; one that returns nothing fails that call with `AuthError` rather than sending it without the credential. The function is handed the call's `signal`, or one that never aborts when the call was given none, and the SDK waits for it to settle — so a function that fetches its credential should pass that signal on, or a cancelled call waits for the fetch to finish.

**A required credential that is not configured is refused before the send.** The call rejects with `AuthError` naming what to set, and nothing goes out. Building the client never fails over a credential, because which ones a program needs depends on the operations it calls. So a 401 on a call that went out means the server rejected the credential that was sent.

**Credentials from the environment.** A credential field left unset is read from the environment variables the `ClientOptions` table names. A value set in code always wins, including a placeholder copied from a sample. A variable that is unset, empty or whitespace counts as unset. The variables are read once, when the client is built, so changing one later does not reach an existing client. Where there is no `process.env`, as in a browser, nothing is read.

**serverOptions.** 1 logical server; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`. Override `serverOptions`.

**Base URLs and overrides.** One row per group, and every cell is overridden at `serverOptions.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **key by key**.

| Group | Base URL template | Template variables (default) |
| --- | --- | --- |
| `default` | `https://api.parallel.ai` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it. Server variables are filled in once, as the client is built; only the path parameters are expanded per request.

Retries are configurable via `ClientOptions.retry` (`RetryOptions`, source `src/core/retry.ts`) — the field table is under Getting a client.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("parallel")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `AbortSignal.any`, `Headers`, `Request`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`, and `console`, which is read as the package loads. `crypto.randomUUID` or `crypto.getRandomValues` mints the `Idempotency-Key` a non-GET call carries — **read and never required**, since a runtime offering neither fills the bytes from `Math.random` mixed with the clock and a per-process counter, so the header is always sent. Three more are **read and never required** — `process`, `navigator` and `EdgeRuntime`, which name the host in `X-APIMatic-OS` and `X-APIMatic-Runtime`. A runtime offering none of them sends neither header and works unchanged. `process.env.PARALLEL_LOG` is read at most once, when the client is built and code sets neither a `logger` nor a valid `level`. Logging writes to `console` only as the default logger, and for the warning on a `PARALLEL_LOG` value that is not a level. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor is set by `AbortSignal.any`, which every call uses to combine `RequestOptions.signal`, or a signal that never aborts when there is none, with the attempt's timer. The emitted output needs less: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`, and those load from Chrome 85, Firefox 90 and Safari 15.

| Browser | Minimum |
| --- | --- |
| Chrome / Edge | **116** |
| Firefox | **124** |
| Safari / iOS Safari | **17.4** |

Below that table the module still loads, down to the emitted-output floor, but every call rejects with a `TypeError`.

