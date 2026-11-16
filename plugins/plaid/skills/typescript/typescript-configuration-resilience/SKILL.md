---
name: typescript-configuration-resilience
description: Load before constructing or tuning an APIMatic-generated TypeScript SDK client — picking a server environment or overriding a base URL, changing the on-by-default retries or `retry.timeout`, adding cancellation or a deadline, turning the built-in logging on or off, making a write safe to retry, paging through results, or wrapping `fetch` for header injection, proxies, TLS or connection pooling.
---

# Configuration & resilience for an APIMatic TypeScript SDK

> Which server groups, environments, template variables, page/cursor fields and idempotency-key
> fields YOUR SDK has comes from `sdk-map.md` and `map/operations/{resource}.md` at the package root —
> **apply only the guidance that matches**. `{...}` marks a name to take from your SDK; `{Api}Client`
> is the one public client class, in `src/client.ts`. `{APICLIENTTYPENAME}_LOG` is the logging
> environment variable: the client class name in upper snake case, plus `_LOG`, so `AcmeClient` reads
> `ACME_CLIENT_LOG`. The getting-started skill's identity table names yours.

Everything configurable is a field on `ClientOptions` (`src/client-options.ts`), passed to the one
constructor. There is no `Configuration` class, no builder, and no per-request override beyond
`{ signal, retry, logging }`. Server groups, environments and their URL templates live in `src/servers.ts`.

## The whole configuration surface

| Field | Type | Default | Purpose |
| --- | --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | first declared | selects which environment's server options are read |
| `serverOptions` | `ServerOptions` | `{}` | per-group, per-environment `baseUrl` and template-variable overrides |
| `retry` | `RetryOptions` | retries **on** — see *Retries* | the retry policy, and `retry.timeout` (**ms**, `60_000`) bounding each attempt |
| `logging` | `LoggingOptions` | **off** — see *Logging* | the built-in request/response logger, its levels and its redaction |
| `eventStream` | `EventStreamOptions` | `idleTimeout` `60_000` (**ms**) | how long an event stream may stay silent; read only by an operation that resolves to an `EventStream` — see **typescript-event-streams** |
| `fetch` | `FetchLike` (`typeof fetch`) | global `fetch` | **the one transport extension point** |
| `{scheme}` / `{scheme}Strategy` | per scheme | unset | credentials — see **typescript-authentication** |

Read the defaults off your own SDK rather than trusting the column: the credential members and the
default environment are per-SDK.

## Not on this SDK

| You might reach for | Reality |
| --- | --- |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one transport extension point; `retry.onRetry` is the one callback, and it sees only retries |
| SSE request bodies, WebSockets | none. `text/event-stream` is a response media type only — an operation whose success is one resolves to an `EventStream<T>` you iterate with `for await` (**typescript-event-streams**). Every other decoder reads the body to completion, bar a binary success, which hands its stream over unread |
| multipart <em>responses</em>, XML bodies | none. Body kinds are empty, JSON, form-urlencoded, text, multipart and binary |
| per-request `headers`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal, retry, logging }`; `retry` takes only `maxRetries`, `timeout` and `statusCodesToRetry`, and `logging` only `level` |
| a circuit breaker, a rate limiter | none. The retry loop honours `Retry-After`, but nothing limits how many calls you start |
| the raw `fetch` `Response` | deliberately unreachable. `status`/`headers` are on `asApiResult()` and on `ResponseError` |

Everything in the left column that you actually need, you build on `fetch`. The rest of this skill is
those patterns and the traps in them.

**What the SDK does own**, so that you do not rebuild it: URL and server resolution, request
encoding and schema validation on the way out, auth application and OAuth token caching, response
decoding, the two-family error mapping, the `Idempotency-Key` on every non-GET call, fetching and
advancing the pages of a paged operation, the retry loop with its per-attempt timeout, and
request/response logging with redaction.

## The `fetch` seam

```ts
type FetchLike = typeof fetch;
```

The SDK calls it with **one argument, the attempt's `Request`, and no `init`**. The method, the
headers (the credential included), the body and the signal are all on that `Request`. **Forward that
`Request`, or at least its `signal`**, to whatever performs the request: drop the signal and both each
attempt's `retry.timeout` and per-call cancellation go inert — the call neither aborts nor times out. A
wrapper written against `(input, init)` still type-checks, but `init` is always `undefined`: whatever it
reads from `init` is nothing, and whatever it passes as `init` **replaces** what the `Request` carries,
so `fetch(input, { headers })` drops every header the SDK set. On an abort a replacement may reject with
whatever it likes: a deadline is still a `TimeoutError` the retry loop retries, and a caller abort still
rejects with the caller's own `reason`.

Four facts that decide how you write a wrapper:

- **It sees every request the client makes, including the OAuth token request** — a wrapper that logs
  requests logs the token POST, `client_secret` and all, where the built-in logger (*Logging*) masks it.
  Filter by URL where that matters.
- **It sits under the retry loop, so it sees every attempt.** A call retried three times is four
  requests through your wrapper, each a fresh `Request` with its own signal, and a wrapper that logs
  writes four lines. To see one line per logical call, log around the SDK call instead; to see why an
  attempt was abandoned, use `retry.onRetry` or the built-in logger's retry line.
- **A plain `Error` thrown from a wrapper reaches the caller as `ConnectionError` with your error on
  `.cause` — and is retried like a dropped connection** for a method in the retry gate, so a
  deliberate refusal is thrown again on every attempt and surfaces only after the backoff. A member of
  the `{Api}Error` family (`TimeoutError`, `ConnectionError`, …) passes through unwrapped, and is
  retried only if its `kind` is `connection` or `timeout`.
- **Wrappers compose by nesting, innermost-first at the network:** in
  `new {Api}Client({ fetch: tracingFetch(proxiedFetch) })` the tracer sees the request before the
  proxy dispatches it. Do not add a retrying wrapper to the stack — see *Retries*.

## `serverOptions` configuration for each environment

The base URL is resolved **per server group and per environment**. `src/servers.ts` declares one
options type per group, and each carries a nested object for **every environment** the API declares:

```ts
export type ServerOptions = {
  {group}?: {
    {environment}?: { baseUrl?: string; {variable}?: string };
  };
};
```

Each environment's entry exposes what the SDK substitutes into that group's URL: the **`baseUrl`
template** (always present and settable) plus any **template variables** that server's URL declares
— a region, a subdomain, a port, an API version. Names and counts vary per API and per
environment; a group with no variables exposes `baseUrl` alone. Read the real group keys, environment
keys, URL templates and variable defaults from `DEFAULT_SERVER_OPTIONS` in `src/servers.ts`, or from
the **Base URLs and overrides** table in `sdk-map.md`.

```ts
const client = new {Api}Client({
  serverEnvironment: ServerEnvironment.{Environment},

  serverOptions: {
    // Fill one template variable, keeping the declared baseUrl template:
    {group}: { {environment}: { {variable}: "eu" } },

    // Or replace the template outright — a mock server, a proxy, a self-hosted gateway.
    // A literal URL with no {placeholders} is used as-is:
    // {group}: { {environment}: { baseUrl: "http://localhost:3000" } },
  },
});
```

How this resolves:

- **Overrides merge with the declared defaults per group-and-environment pair, key by key**
  (`{ ...DEFAULT_SERVER_OPTIONS.{group}.{environment}, ...yours }`). Setting `{variable}` alone keeps
  the declared `baseUrl`; setting `baseUrl` alone keeps the declared variables. Naming one group or
  one environment leaves every other untouched.
- **Only the selected environment's options are read.** Set `baseUrl` on the wrong environment and
  your value is silently ignored in favour of the selected one's default.
- **`baseUrl` is a template, not a URL.** Variables are percent-encoded into their `{placeholder}` at
  request time. A placeholder in a `baseUrl` you supply is only substituted if a declared variable of
  that exact name exists — otherwise it survives into the URL verbatim, and nothing rejects it the way
  an unfilled path parameter is rejected.

### ⚠▶▶ Always pass `serverEnvironment` explicitly

`serverEnvironment` has a default, so `new {Api}Client()` compiles and reaches a real host: the
**first** member of `ServerEnvironment` in `src/servers.ts` — often sandbox. Production credentials
then fail against it as if they were wrong. **Pass it in every environment, production included.**

`ServerEnvironment` is a **closed** union — no `| (string & {})` tail — so a mistyped literal fails to
compile; a value read from configuration does not. An unknown string throws `ConfigurationError` from
the constructor, but `undefined` silently selects the default — so map configuration values explicitly
and **fail on a miss**:

```ts
const ENVIRONMENTS: Record<string, ServerEnvironment> = {
  sandbox: ServerEnvironment.{Sandbox},
  live: ServerEnvironment.{Production},
};

const serverEnvironment = ENVIRONMENTS[process.env.API_ENV ?? ""];
if (!serverEnvironment) throw new Error(`unknown API_ENV: ${process.env.API_ENV}`);
```

### What is captured when

`serverEnvironment` and `serverOptions` are resolved **once**, in the constructor — so a bad value
throws there, never from a call, and mutating the `serverOptions` object you passed in, replacing a
whole group (`serverOptions.{group} = …`) or assigning `serverEnvironment` afterwards has no effect.
**Configure the server before you construct, and construct a new client to change environment.**

### Redirecting at a mock

⚠ **An OAuth token endpoint may live on its own server group.** Redirecting `{group}` at a mock does
**not** move the token request, which still reaches the real host and fails or, worse, succeeds against
production. Override every group the run touches. See **typescript-authentication**.

This is a real base-URL override, not a proxy — the SDK builds requests against the URL you give it.
For a proxy, see *Proxy or custom agent* below.

## Retries — on by default

**A client built without `retry` retries.** With the defaults:

- A `GET`, `HEAD`, `PUT` or `OPTIONS` call that gets a `408`, `429`, `500`, `502`, `503` or `504`, or
  whose attempt fails with a `ConnectionError` or a `TimeoutError`, is re-sent up to **3** more times,
  backing off roughly 1 s, 2 s and 4 s, and honouring `Retry-After`.
- A `POST`, `PATCH` or `DELETE` is sent **once**, whatever went wrong. The method gate covers every
  failure, faults included.
- **A `401` is not in the default status set**: the failing call rejects, and the *next* call
  re-acquires a fetched credential (**typescript-authentication**).

Its defaults live in `src/core/retry.ts`. Configure it with any subset of `RetryOptions` — a field you
leave out keeps its default:

```ts
new {Api}Client({ retry: { maxRetries: 0 } });            // off: every call is sent exactly once
new {Api}Client({ retry: { timeout: 10_000 } });          // the defaults, with a tighter per-attempt budget
new {Api}Client({
  retry: {
    maxRetries: 5,
    httpMethodsToRetry: ["GET", "HEAD", "PUT", "OPTIONS", "POST"],   // see *Making a write safe*
  },
});
```

| Field | Default | Meaning |
| --- | --- | --- |
| `timeout` | `60_000` | Milliseconds **one attempt** may take, up to its response headers. Not a budget for the call |
| `statusCodesToRetry` | `[408, 429, 500, 502, 503, 504]` | Exactly these and no others — there is no family rule, so `[429, 503]` stops retrying `500`. `[]` retries no status, while faults still retry |
| `httpMethodsToRetry` | `["GET", "HEAD", "PUT", "OPTIONS"]` | The gate: a call outside it is never re-sent. `[]` turns retrying off. Upper case only |
| `maxRetries` | `3` | Retries *after* the first attempt, so `3` is up to four sends. `0` turns retrying off |
| `delay` | `1000` | Milliseconds before the first retry, and the base the curve grows from |
| `backoffFactor` | `2` | What each successive delay is multiplied by, between `1` and `100` |
| `useExponentialBackoff` | `true` | `false` repeats `delay` unchanged |
| `maxJitter` | `0.25` | A **fraction**, `0` to `1`, and additive: a wait lands between its delay and `delay × (1 + maxJitter)`. `0` makes every wait exact |
| `onRetry` | none | `(attempt: RetryAttempt) => void`, called before each retry's wait |

`0`, `false` and `[]` are values, never misses. Anything else a field cannot honour — a negative,
fractional, `NaN`, `Infinity` or above-`2_147_483_647` `timeout`, a `maxJitter` of `50`, a list
carrying a lower-cased `"get"` — **silently falls back to that field's default** (on a call, to the
client's value), and the client still constructs. `timeout: 0` is kept: it is a zero-length deadline
that fails every attempt, not "no timeout" — an unbounded attempt is not expressible.

The wait before retry *n* (counting from 0) is
`min(Retry-After ?? delay × backoffFactor ** n, 60_000) × (1 + random × maxJitter)`, rounded up. The
60-second ceiling is the engine's, not an option, and jitter sits on top of it, so the longest single
wait is 75 s at the defaults.

What the loop does:

- **`Retry-After` is honoured** in both its delta-seconds and HTTP-date forms, capped at 60 s, with
  jitter added on top, so the SDK never wakes before the time the server named. A malformed value
  falls back to the curve.
- **Never retried:** a caller abort (which also cuts a backoff wait short), a streaming request body
  whatever the method, and a failure to obtain a credential — the token request is itself a `POST`
  under this policy (**typescript-authentication**).
- **A rejection from your `fetch` that is not an SDK error counts as a dropped connection** — see
  *The `fetch` seam*.
- **The call rejects with the last attempt's failure** — an `ApiError` (or the operation's subclass)
  for a status, a `ConnectionError` or `TimeoutError` for a fault — the same shapes as with retrying
  off (**typescript-error-handling**). Only a retried-away response's headers reach `onRetry`, and
  `.asApiResult()` sees the last response.

### Per-call overrides

`RequestOptions.retry` (`RequestRetryOptions`) takes only `maxRetries`, `timeout` and
`statusCodesToRetry`, each merged over the client's value for that one call (syntax:
**typescript-calling-endpoints**). Backoff, the method gate and `onRetry` are client-only — but only by
type: an object carrying another `RetryOptions` field (from JavaScript, or a constant typed as the
wider record) still has it honoured, so do not rely on the type to keep a write out of the gate.

### Observing retries

`onRetry` is the one built-in callback. It runs before each retry's wait — not for the first attempt,
and not on success — with the retry about to be made:

```ts
const client = new {Api}Client({
  retry: {
    onRetry: ({ attemptNumber, delay, reason }) => {
      if (reason.kind === "status") log.warn({ attemptNumber, delay, status: reason.status }, "retrying");
      else log.warn({ attemptNumber, delay, kind: reason.error.kind }, "retrying after a fault");
    },
  },
});
```

Narrow `RetryReason` on `kind` before reading the rest: a `"status"` carries the `status` and the
discarded response's `headers`, a `"fault"` carries the `connection` or `timeout` error and no response
at all. A fault from an OAuth token request carries the token endpoint's `uri`, not the operation's.
**Keep the callback to logging and metrics** — a throw from it ends the call with the error it threw.
With the built-in logger on at `warn` or below, the SDK writes its own retry line before `onRetry`
runs, so you need the callback only for metrics or a sink of your own.

### When the SDK's policy is not enough

Rules to hold to:

- **Retry idempotent reads freely; treat every write as a separate decision.** A write that timed out
  may have succeeded — a reset after the bytes reached the server is indistinguishable from one before.
  The default gate encodes exactly this.
- **Do not stack a second retry layer** — a retrying `fetch` wrapper, a `withRetry` around the call, a
  job that re-runs on failure — on top of the SDK's without turning the SDK's off for that path.
  Attempts multiply (four inside four is sixteen round-trips, and up to sixteen times the timeout), and
  every attempt of a caller-level layer is a new SDK call that mints a **new** `Idempotency-Key`.
- **Never retry an `EncodeError`, a `DecodeError`, an `AuthError` or a 4xx other than `408`/`429`** —
  the loop retries none of them, and what each means is in **typescript-error-handling**.

When a decision genuinely needs something the policy cannot express — a retry that depends on the
decoded error payload, or on which operation it is — turn the SDK's loop off for that call and own
retrying entirely at the caller:

```ts
import { {Api}Error } from "{package-name}";

async function withRetry<T>(work: () => Promise<T>, attempts = 3): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await work();
    } catch (err) {
      if (attempt === attempts || !isTransient(err)) throw err;
      await new Promise((r) => setTimeout(r, 2 ** (attempt - 1) * 500 * (1 + Math.random())));
    }
  }
}

function isTransient(err: unknown): boolean {
  if (!(err instanceof {Api}Error)) return false;   // an abort's reason, a configuration fault, a bug: no
  return err.kind === "api" && isRetryableConflict(err);   // your decision, on the decoded payload
}

await withRetry(() => client.{resource}.{operation}(request, { retry: { maxRetries: 0 } }));
```

`{Api}Error` is the whole error family, narrowed on its closed `kind`; its real name is in
**typescript-error-handling**.

### Making a write safe under retries

A write is exposed to a resend only when you widen `httpMethodsToRetry` or add a retry layer of your
own — and through two things no setting fixes:

- **`PUT` is in the default gate — idempotent by HTTP's definition, not necessarily by your
  provider's.** A `PUT` can still carry a per-call side effect — an audit row, an outbound webhook, a
  metered charge — that a resend duplicates. Where yours does, drop `"PUT"` from
  `httpMethodsToRetry`.
- **"It was not resent" is not "the write did not happen."** A transport failure on a `POST` leaves the
  outcome *unknown*: the bytes may have reached the provider before the socket died. That is a
  reconciliation problem, and no retry setting solves it.

**Decide which requirement you are meeting before you pick a remedy — they are not interchangeable.**
*"A duplicate must be harmless"* is options 1–2, and the provider still receives more than one write.
*"At most one write may reach the provider"* is option 4, the only one that holds the count at one
regardless of how the client is later configured. The four, **weakest guarantee first** — so do not
read the numbering as a recommendation order:

1. **Make the write idempotent at the provider.** Makes a resend *harmless* rather than rarer; the send
   count stays above one.

   **The SDK sends an `Idempotency-Key` header on every operation other than a `GET`** — a UUID minted
   once per call, unless the operation declares a header of that name itself, in which case that one is
   a field you set. **Every attempt of the SDK's retry loop re-sends the same key**, because the loop
   re-sends the request the SDK already built. That is what makes naming a write in
   `httpMethodsToRetry` safe — **where the provider deduplicates on it**. A retry of your own is a new
   call and mints a new key: the provider sees two submissions.

   Where the operation declares its own key — a header, a query parameter, a form field or a body
   member, all alike in the flat, channel-blind request object; the `Channel` column of its **Fields**
   table tells them apart (**typescript-calling-endpoints**) — **generate it once per logical action and
   reuse it across every attempt you make**:

   ```ts
   const requestId = crypto.randomUUID();          // once per logical action, NOT per attempt
   await withRetry(() =>
     client.{resource}.{operation}({ ...body, {idempotencyKey}: requestId }, { retry: { maxRetries: 0 } }),
   );
   ```

   A key generated inside the retried function is a fresh key on every attempt, which deduplicates
   nothing while looking exactly like a solution.

   Two cautions, neither of them visible in the type:

   - **Whether the provider actually enforces it is not visible in the SDK.** The header being sent,
     or a declared key field existing, is not a guarantee that a resend is deduplicated. Verify
     against the provider's documentation or live traffic before widening the gate.
   - **Keys expire, and the retention window differs per API.** A resend after a long backoff may fall
     outside it and be treated as a new request. Only the provider's documentation carries that number.
2. **Reconcile after a failure** — on a transport failure on a write, re-read provider state to
   establish what actually happened instead of assuming nothing did. Detects a duplicate; does not
   prevent one. Same reflex as an unreadable write response — see **typescript-error-handling**.
3. **Send the write once, explicitly** — `{ retry: { maxRetries: 0 } }` on that call, or a separate
   client for writes built with `retry: { maxRetries: 0 }`:

   ```ts
   const reads  = new {Api}Client({ ...shared });
   const writes = new {Api}Client({ ...shared, retry: { maxRetries: 0 } });   // no resends
   ```

   Holds at one send today; stops holding the moment someone removes the override or widens the gate
   on `writes`, and that failure does not announce itself.
4. **A guard wrapper that refuses a re-send it did not authorise** — the only option that holds the
   count at one no matter how the client is configured, because a blocked attempt never reaches the
   network. Reach for it whenever a duplicate would be externally visible or costly to undo, and
   combine it with option 2 to settle the outcome of the one send you allowed.

   Three details decide whether it works:

   - **A `fetch` wrapper sees every attempt of the SDK's loop**, and its refusal is retried as a
     `ConnectionError` (*The `fetch` seam*). Pair the guard with option 3 on the guarded write, so the
     refusal is immediate, and recognise it with `err.cause instanceof YourRefusal`.
   - **Keep the "already sent" marker in state that outlives one attempt** — an `AsyncLocalStorage`
     scope the caller opens around the write, or a closure created per unit of work. A marker hung off
     `init` is per-attempt bookkeeping only, and a caller-level retry (a job re-running after a
     timeout) creates a fresh one either way.
   - **Key it on method and URL**, so the OAuth token request it also sees is not counted as the
     write.

   Count the send **before** it goes out. A request that failed on the way out may still have been
   received, so "this may already have taken effect" is the only safe reading — surface it as an
   **unknown outcome** to be settled by re-reading provider state (option 2), not as a definite failure.

**Where the provider ignores the key, retrying a write is a real duplication risk.** Keep the write
out of the gate; the safe recovery is option 2 — re-read state and decide — not a resend. Some
operations are naturally idempotent anyway (cancelling an already-cancelled resource is usually
harmless), but that is a **per-operation judgement** made against the provider's documentation, not a
property you can assume for the whole class of writes.

**All four bound the call YOU make to the provider. None of them is a reason to change the contract
your own callers see.** Key the guard on something you already hold — a reference derived
deterministically from what the caller sent. A caller that sent a well-formed request and got a `4xx`
because your guard wanted an extra field is a defect you introduced, not a duplicate you prevented.
And **a guard needs a release**: a claim or marker with no expiry turns one transient failure into a
permanent refusal. Clear it once the outcome is settled, and expire it when it never is.

## Bounding a call — the two layers, and which one is a total

| Layer | Scope | Default | Bounds a whole call? |
| --- | --- | --- | --- |
| `retry.timeout` | one attempt, up to its response headers | `60_000` ms | **No** — an idempotent call gets up to `maxRetries + 1` attempts, plus the waits between them |
| the `signal` you pass to the call | everything from dispatch to resolution, retries and waits included | none | **Yes** — the only one |

### `retry.timeout`

In **milliseconds**, bounding **one attempt**, each with its own deadline; the last attempt's expiry
rejects as a `TimeoutError` (`err.kind === "timeout"`). It starts once the credential is in hand and
stops at the response headers, so obtaining a credential and reading the body are bounded only by your
`signal` (a built-in OAuth token request runs on its own timer). A per-call value replaces the
client's for that call, still per attempt. A value a timer cannot hold silently falls back to the
default, and `0` fails every attempt (*Retries*).

### Cancellation and real deadlines

Per-call cancellation is `RequestOptions.signal` (**typescript-calling-endpoints**). An abort rejects
with the signal's own `reason`, outside the `{Api}Error` family (**typescript-error-handling**) — so
pass something diagnostic, and rethrow it from a family `catch`.

For a **deadline across a whole call or unit of work** — one call and its retries, or several calls —
`AbortSignal.timeout` and `AbortSignal.any` compose (both on Node 20+):

```ts
async function withDeadline<T>(work: (signal: AbortSignal) => Promise<T>, ms: number, caller?: AbortSignal) {
  const deadline = AbortSignal.timeout(ms);
  return await work(caller ? AbortSignal.any([deadline, caller]) : deadline);
}
```

That is how you give one operation a ceiling that `retry.timeout` cannot: the deadline covers every
attempt and every wait, and the earlier of the two wins.

⚠ **Several calls in one handler add up** — a loop over records, a fan-out, a create-then-confirm
pair — and a swallowed timeout still costs its full bound before the next call runs: `calls ×
(maxRetries + 1) × timeout`, plus the waits, must fit the budget you make a caller wait. Count the
calls in the loop, not in the snippet, and bound the handler with one signal.

**Give the total bound one home, not one per call site.** A controller written out at each call is the
layer that gets skipped, so any operation added later silently has no ceiling. Put it at the one
service that fronts the SDK and route every operation through it:

```ts
export class {Api}Gateway {
  constructor(private readonly client: {Api}Client, private readonly budgetMs = 20_000) {}

  private bounded<T>(work: (signal: AbortSignal) => Promise<T>, caller?: AbortSignal): Promise<T> {
    const deadline = AbortSignal.timeout(this.budgetMs);
    return work(caller ? AbortSignal.any([deadline, caller]) : deadline);
  }

  {operation}(request: {Resource}.{Operation}Request, caller?: AbortSignal) {
    return this.bounded((signal) => this.client.{resource}.{operation}(request, { signal }), caller);
  }
}
```

Link the caller's own signal in — a request whose client has disconnected should stop the outbound work
too.

> **Browser floor.** Cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`
> (Chrome 98, Firefox 97, Safari 15.4). The SDK's own module-load floor is lower, so between the two
> the engine still aborts the request but **produces no typed error at all**.

## Pagination

An operation the API pages returns **`Pageable<{PageResponse}, {Item}, E>`** in place of `ApiPromise`,
and its **Returns** bullet on the map names the strategy and the condition that ends its walk. The
walk is **lazy**: calling the operation sends nothing, the first page goes out when a loop starts, and
each new loop starts again from the first page. `Pageable` implements `AsyncIterable<`**`{Item}`**`>`, so a plain `for await` walks
**individual items** across every page; `.pages()` walks the decoded pages instead. The SDK fetches each
page and advances the paging state for you — one of four strategies (offset, page-number, cursor or
`Link`), chosen per operation.

```ts
// The paging fields on the request (page/limit, offset/limit, or cursor) seed the FIRST page,
// with their declared defaults applied; the SDK advances the page, offset or cursor and stops when
// the API signals the end.
for await (const item of client.{resource}.{operation}({ /* limit: 100, ... */ }, { signal })) {
  process(item);
}

// Pages, not items — also where any total, cursor or link metadata on the page response lives:
for await (const page of client.{resource}.{operation}({ /* ... */ }).pages()) {
  for (const item of page.{items}) process(item);
}
```

Every page is its own request: `options` — the `signal`, the per-call `retry` and `logging` — applies to each one,
and each one goes through the retry policy on its own. Where the walk stops is the strategy's rule:

| Strategy | Advances by | Stops when |
| --- | --- | --- |
| offset | the item count of each page | the next offset reaches the total, a page is empty, `hasMore` is `false`, or — when the page carries neither a total nor `hasMore` — a page is shorter than the limit |
| page-number | one page | the page number reaches the total pages, `hasMore` is `false`, or — when the page carries no `hasMore` — a page is empty, or is shorter than the limit with no total |
| cursor | the next cursor the response carries | the response carries no next cursor, the cursor did not change, or `hasMore` is `false` |
| `Link` | the next link the response carries, resolved against the page's own URL | the response carries no next link, or the link did not change |

Two consequences of the `Link` strategy worth knowing: after the first page the request's own query
is dropped, because the link the API sent carries it; and a link is followed only to the **same origin**
as the API — another origin, or a link that is not a URL, raises `PaginationError` between pages rather
than sending a credential elsewhere (see **typescript-error-handling**).

**A failed page throws mid-walk** — `E` for an error status, and every other failure exactly as an
awaited call would reject with it: a `{Api}Error` member, or a caller abort's own `reason`. The pages already delivered stay delivered. For the
form that turns an error status into a value, call `.asApiResult()` **on the walk**:

```ts
for await (const result of client.{resource}.{operation}({ /* ... */ }).asApiResult().pages()) {
  if (result.ok) {
    // result.value is the page; result.status and result.headers are its own
  } else {
    // result.status, result.message, result.payload — and this is the LAST element the walk yields
  }
}
```

Its item loop (`for await (const item of walk.asApiResult())`) ends silently at an error status and
contributes no items for it, so an item loop that ends cannot tell the last page from a failed one —
use `.pages()` when the distinction matters. Everything else still throws from either form, as it
would from an awaited call.

### ⚠⚠ Never leave a page walk unbounded

**"The SDK stops when the API signals the end" describes the happy path, not a guarantee.** The walk
ends only when the provider stops handing out a next page. A provider that keeps returning a next
link, or a filter it quietly ignores, will spin until something else kills the request. The cursor
and `Link` strategies stop on a cursor or link that did not change; nothing stops one that keeps
changing. The failure does not look like a slow request. It looks like a request that **never
returns**, with tens of thousands of provider calls billed behind it and no error the provider can be
blamed for.

**A `limit` the provider silently caps below what you asked for fails the other way.** When a page
carries neither a total nor `hasMore`, an offset or page-number walk takes a page shorter than the
limit as the last one, so it stops after the first page and drops the rest without an error. Ask for
no more than the provider's documented maximum page size.

**Every page walk needs at least one bound that does not depend on the provider.** Pick what matches
the use case; a page cap is the cheapest and is never wrong:

| Bound | Use when | Shape |
| --- | --- | --- |
| **page cap** | always — the backstop | `if (++pages >= MAX_PAGES) break;` in a `.pages()` loop |
| **item cap** | the caller wants "the first N" | `if (out.length >= max) break;` |
| **deadline** | the walk sits behind a request timeout | one `AbortSignal.timeout` passed as `options.signal` — it bounds the whole walk, not one page |

```ts
const MAX_PAGES = 100;
const signal = AbortSignal.timeout(30_000);          // bounds the whole walk, not one page
let pages = 0;

for await (const page of client.{resource}.{operation}({ /* ... */ }, { signal }).pages()) {
  for (const item of page.{items}) process(item);
  if (++pages >= MAX_PAGES) break;                   // then surface the truncation — see below
}
```

Prefer to **narrow the query before you page it** — a provider-side date range, status filter, or a
`limit` matching what the caller needs turns "walk everything" into a handful of pages. And **a bound
that silently truncates is a different defect from one that hangs**: when you hit the cap, surface it
or log it; never return a partial set that reads like a complete one.

> An operation whose **Signature** returns `ApiPromise` is a plain list call, however list-like its
> response. To page one of those, advance its own page or cursor field in a loop and stop on the API's
> end signal — read the field names off its **Fields** table and its response model — and carry the same
> bound: "fewer than `limit`" and "no next cursor" are both provider-supplied stop conditions, and
> neither is a bound.
>
> ```ts
> let cursor: string | undefined;
> let seen: string | undefined;
> for (let pages = 0; pages < MAX_PAGES; pages++) {
>   const result = await client.{resource}.{operation}({ ...(cursor ? { cursor } : {}) }, { signal });
>   for (const item of result.{items}) process(item);
>   cursor = result.{nextCursor};
>   if (!cursor) return;                               // the provider's end signal — the happy path
>   if (cursor === seen) throw new Error("cursor did not advance");
>   seen = cursor;
> }
> throw new Error(`stopped after ${MAX_PAGES} pages`);
> ```

## Event streams and XML bodies

An operation with a `text/event-stream` success response **is** carried: its **Returns** bullet reads
`EventStream<T>`, the call resolves at the response headers, and you iterate the stream with
`for await` — load **typescript-event-streams** before you write the loop. Its one setting is
`eventStream.idleTimeout` on the client, which bounds the silence between events; `retry.timeout`
stops at the headers and never reaches the loop.

Outbound, an operation with an XML request body has no body field. Call it with `fetch` directly —
the same base URL, and the credential header the SDK would have sent; no option makes the SDK carry
it. A **binary** success, and multipart and binary request bodies, **are** carried — see
**typescript-calling-endpoints**.

## Logging

**The SDK has a built-in request/response logger, and it is off by default.** Turn it on through
`ClientOptions.logging`, a `LoggingOptions` exported from the package root with `Logger`, `LogLevel`,
`LogDetails` and the value `defaultLoggingOptions`:

```ts
import { {Api}Client, defaultLoggingOptions } from "{package-name}";

const client = new {Api}Client({
  logging: {
    logger: appLogger,          // any { error, warn, info, debug }; default `console`
    level: "info",              // "off" | "error" | "warn" | "info" | "debug"
    logRequestHeaders: false,   // default
    logResponseHeaders: false,  // default
    logRequestBody: false,      // default — read the warning below before enabling
    redactedKeys: [...defaultLoggingOptions.redactedKeys, "card_number"],
  },
});
```

How it turns on — the first row that applies wins:

| what is set | what is logged |
| --- | --- |
| `logging.logger` | everything the switches allow, at `debug` unless `level` says otherwise — your logger's own level does the filtering |
| `logging.level`, and no `logger` | lines at that level and above, to `console` |
| neither, and `{APICLIENTTYPENAME}_LOG` holds a level | see the warning below |
| nothing | nothing — `level` is `"off"` |

What it writes, and at which level. The SDK filters by level itself, then calls your logger's method of
the same name:

| Line | `event` | Level | Written when |
| --- | --- | --- | --- |
| `sending {METHOD} {url}` | `HttpRequest` | `info` | every attempt |
| `request headers` | `RequestHeaders` | `debug` | `logRequestHeaders` |
| `request body` | `RequestBody` | `debug` | `logRequestBody`, and the media type is in `loggableContentTypes` |
| `{METHOD} {url} succeeded with status {n} in {ms}ms` | `HttpResponse` | `info` | a `2xx` |
| `{METHOD} {url} failed with status {n} in {ms}ms` | `HttpResponse` | `warn` | any other status |
| `response headers` | `ResponseHeaders` | `debug` | `logResponseHeaders` |
| `{METHOD} {url} retrying in {ms}ms (retry {n} of {max}) after {reason}` | `HttpRetrying` | `warn` | before each retry, ahead of `onRetry` |
| `{METHOD} {url} failed after {ms}ms: {ErrorName}` | `HttpFailed` | `error` | a call that ends on a fault or on a credential it could not obtain |

Each line is `logger.{level}(message, details)`: the message is complete text, and `details` is a
`LogDetails`, a union you narrow on `event`. The SDK calls the method **on** your logger, so one that
reads its own state through `this` works as it is. `console` and winston take `(message, meta)` and
plug in directly; pino takes `(details, message)` and needs a four-line adapter:

```ts
import pino from "pino";
import type { Logger } from "{package-name}";

const p = pino();
const appLogger: Logger = {
  error: (message, details) => p.error(details, message),
  warn: (message, details) => p.warn(details, message),
  info: (message, details) => p.info(details, message),
  debug: (message, details) => p.debug(details, message),
};
```

**Keep the logger non-throwing.** An error thrown from it ends the call with that error — on a
response line, after the request already reached the server.

**The URL and the headers are redacted by allow-list, which is the safe direction.** A query value is
masked unless its key is on a short known-safe list (`cursor`, `dates`, `datetime`, `limit`,
`offset`, `page`, `since`, `size`, `strings`); a header is masked unless it is an ordinary transport
header — `authorization`, `cookie` and every api-key header are not on that list, so they are masked.
`redactedKeys` (default: `sig`, `signature`, `access_token`, `apikey`, `api_key`, `client_secret`,
`password`, `refresh_token`, `code`, `assertion`, `client_assertion`) adds keys to the masked set,
`redactedHeaders` forces a header in, and `unmaskHeaders` opts one out; the mask is
`redactionPlaceholder` (`"***"`). The URL **path** is not masked — an id or reference in the route is
logged as it is. `redactedKeys` and `loggableContentTypes` **replace** their default rather than add to
it, so spread `defaultLoggingOptions` to extend one, as above.

⚠▶▶ **`logRequestBody: true` does not redact a JSON body**, and only half-redacts a form body. A body
is logged only when its media type is in `loggableContentTypes` (`application/json`,
`application/x-www-form-urlencoded`; add others there), truncated at `bodySizeLimit` bytes (32 KB). A
JSON body is logged **verbatim**. A form body gets key masking, but by **deny-list**, not by the
allow-list the URL uses: only keys in `redactedKeys` are masked, so `card_number` in a form body prints
in the clear although the same key in a query string would not. On any endpoint that carries card data,
bank details, personal data or a credential in the body, switching this on writes that data to your
logs. Leave it off in production; turn it on for one endpoint at a time
behind a flag you can prove is off.

⚠▶▶ **An environment variable turns logging on without a code change.** When code sets neither a
`logger` nor a valid `level`, the client reads `{APICLIENTTYPENAME}_LOG` once, as it is built, through
`process.env` — a runtime without `process` reads nothing. It takes a level name (`error`, `warn`,
`info`, `debug`, or `off`) and writes to `console`. `debug` also turns **both header switches** on; the
request body it never turns on — only code can. A value that is not a level warns once on `console`,
and logging stays off. Setting `logger` or `level` in code disables the variable outright — which is the
reason to set `logging: { level: "off" }` explicitly where you must guarantee silence.

**Per-call override.** `RequestOptions.logging`, typed `RequestLoggingOptions`, takes one field, `level`,
for that call alone. Two things about it are easy to get wrong:

- It **replaces** the client's settings for that call rather than raising them. A per-call `level`
  decides every line by itself with **all three switches on**, so `{ logging: { level: "debug" } }`
  writes both header lines **and the request body**, whatever the client set. `{ logging: { level:
  "off" } }` silences that one call.
- It cannot lift your logger's own filter. With a `logger` supplied, a per-call `debug` hands it `debug`
  lines, and a logger filtering at `info` drops them; `console` has no filter of its own.

A per-call value that is not a level is ignored, and the call logs under the client's settings.

**Resolution.** A field whose value the SDK cannot honour falls back to its default, silently, and the
client still constructs. A `logging` record whose read throws — a throwing getter, a revoked proxy — is
the one failure: a `ConfigurationError` from the constructor, or the rejection of the one call that
passed it.

**OpenTelemetry spans, metrics and request-id propagation are not logging** — they belong on the
`fetch` seam, the one place that sees every outbound request, its status and its duration.

### Verify on the wire (first run of a new integration)

On a **successful** call the SDK returns only the decoded body — it never surfaces the request URL, the
verb or the status. So a wrong verb, a mis-serialized path segment or a dropped query parameter
**compiles cleanly** and produces no in-band signal; the only symptom is a runtime `404` or `422`. Turn
logging on at `info` for the first execution of any new call — `{APICLIENTTYPENAME}_LOG=info`, or
`logging: { level: "info" }` — and check five things in its `sending` line:

1. The **verb** matches the operation's **Wire** bullet in `map/operations/{resource}.md`.
2. The **base URL** is fully expanded — no leftover `{region}`-style server variable, which means a
   `baseUrl` you supplied carries a placeholder no declared variable fills.
3. The **path** is fully formed: a path field set to `null` collapses to **nothing**, silently,
   leaving a doubled slash (`/orders//confirm`). (One left `undefined` rejects with `EncodeError`
   before anything is sent.)
4. Each **path segment** holds the value you meant — for an enum that is the **wire value**, not the
   member name.
5. The **query parameters** you set are present, spelled as their `Wire` names. A `null` or `undefined`
   query value is dropped entirely rather than sent empty, so an absent parameter usually means an
   absent field, not an encoding bug. The line masks a value whose key is off the safe list, so it
   shows that a parameter was sent, not what it held.

Then turn the level back down.

## Other work on the `fetch` seam

### Header injection

```ts
const client = new {Api}Client({
  fetch: (input, init) => {
    const request = new Request(input, init);
    request.headers.set("x-correlation-id", currentCorrelationId());
    return fetch(request);
  },
});
```

Set the header on a copy of the `Request` — the SDK has already put the content type and the
credential on it, and the copy keeps them, the body and the signal. Passing `{ headers }` as `init`
instead **replaces** every header the SDK set, the credential included. This is the only client-wide
header mechanism: `ClientOptions` has no header option.

### Rate limiting

There is no built-in limiter. The default `429` retry absorbs an occasional limit but does nothing to
stop you starting more calls than the provider allows. Put a concurrency/rate limiter around your
calls for that. Client-side limiting is the more predictable of the two under load — retrying into a rate limit
converts a fast failure into a slow one, and a fan-out of retrying calls keeps the pressure on.

### Circuit breaking

Count consecutive `ConnectionError`s, `TimeoutError`s and 5xx `ApiError`s, open the circuit for a
cool-off window, and fail fast while it is open. **Put the breaker around the SDK call, not in `fetch`**,
where its refusal would be retried as a `ConnectionError` (*The `fetch` seam*). Around the call, the
breaker sees one outcome per call, after the retries, and its refusal never enters the loop.

## Proxies and TLS (Node)

Neither is a `ClientOptions` field. Both are properties of the **dispatcher** the `fetch` seam hands to
undici, so both are configured the same way:

```ts
import { ProxyAgent } from "undici";

const dispatcher = new ProxyAgent(process.env.HTTPS_PROXY!);
const client = new {Api}Client({
  fetch: (request) => fetch(request, { dispatcher } as RequestInit),
});
```

`dispatcher` is an undici extension, not standard `RequestInit`, hence the cast. The same seam takes a
custom TLS configuration, a connection-pool setting, or a unix-socket dispatcher.

⚠▶▶ **Node's global `fetch` ignores the proxy environment variables.** `HTTP_PROXY`, `HTTPS_PROXY` and
`NO_PROXY` do **nothing** to a `fetch` call by default — unlike most HTTP clients in other ecosystems,
and unlike `curl` in the same container. Undici reads them only through `EnvHttpProxyAgent`, and only
once you register it:

```ts
import { EnvHttpProxyAgent, setGlobalDispatcher } from "undici";

setGlobalDispatcher(new EnvHttpProxyAgent());   // now http_proxy / https_proxy / no_proxy apply
```

This is the usual reason an SDK call fails inside a corporate network while every other tool works.
`setGlobalDispatcher` affects the whole process, so in a library prefer the per-request `dispatcher`
above.

**Private CAs and client certificates** go on the dispatcher's `connect` options:

```ts
import { Agent } from "undici";
import { readFileSync } from "node:fs";

const dispatcher = new Agent({
  connect: {
    ca: readFileSync("/etc/ssl/corporate-root.pem"),         // a private CA bundle
    // cert / key: for mutual TLS, where the provider requires a client certificate
  },
});
```

`NODE_EXTRA_CA_CERTS` is the deployment-side equivalent for the CA case and needs no code change, but
it is read **once at process start** and is ignored if set later.

⚠ **Never reach for `rejectUnauthorized: false` or `NODE_TLS_REJECT_UNAUTHORIZED=0`.** They disable
certificate verification for traffic that carries a live credential, and the second one disables it
**process-wide**, for every other outbound call your service makes. Fix the trust store instead.

## Connection pooling

Pooling belongs to `fetch`, not to the client: on Node the global `fetch` shares one process-wide
undici dispatcher, so several SDK clients built over the default `fetch` share one pool and cost
nothing extra. Two consequences:

- **A dispatcher you create is a pool you own.** Build it once, beside the client, and reuse it. A
  `new Agent(...)` or `new ProxyAgent(...)` per request opens a fresh pool — and therefore fresh TCP
  and TLS handshakes — on every call.
- **Pool limits live there too** — `connections`, `keepAliveTimeout`, `pipelining` on the `Agent`.
  Raise `connections` before assuming a provider is slow under a fan-out; the default cap can be the
  actual bottleneck.

Everything else about client lifetime — why the client itself must be long-lived, and what a per-request
client costs under OAuth — is **typescript-client-initialization**.

## What to reach for, by symptom

| Symptom | Where to look |
| --- | --- |
| calls never time out | a `fetch` replacement that does not forward the `Request`, or its `signal` |
| a header added in a `fetch` wrapper arrives, but every call is now a `401` | the wrapper passed `{ headers }` as `init`, which replaces the SDK's headers — copy the `Request` instead (*Header injection*) |
| request lines in the logs with no logging code | `{APICLIENTTYPENAME}_LOG` is set in that environment — set `logging.level` in code to own it |
| a JSON body or a card number in the logs | `logRequestBody`, or a per-call `level`, which turns the body on — see *Logging* |
| a failing call takes seconds longer to reject than the first failure | expected on an idempotent call: the default policy retried it — watch it with `retry.onRetry` |
| a page walk never ends | no provider-independent bound — see *Never leave a page walk unbounded* |
| `PaginationError` naming another origin | the API's next link points off the API's host, and the SDK refuses to follow it — see *Pagination* |
| requests still hit the real host under test | the wrong server **group** or **environment** overridden — check `src/servers.ts` |
| auth fails everywhere with credentials you know are right | `serverEnvironment` left to its default, the **first** `ServerEnvironment` member — often sandbox |
| the call works locally, fails behind a corporate proxy | Node's `fetch` ignores `HTTP_PROXY` — register `EnvHttpProxyAgent` or pass a `dispatcher` |
| a duplicate write despite an idempotency key | the key is generated inside the retried function — hoist it out; or your own retry layer re-calls the SDK, which sends a new `Idempotency-Key` per call |
| ~16× the expected round-trips | a retry layer of your own stacked on the SDK's — set `retry: { maxRetries: 0 }` where you own retrying |
| a test with one stubbed `503` hangs, or runs out of queued responses | the default policy fetched it four times across ~7 s of backoff — see **typescript-testing** |
| a `{placeholder}` survives into the URL | a `baseUrl` you supplied names a variable the group does not declare |
| `EncodeError` whose `uri` still shows a `{placeholder}` | a path field was `undefined` — a required field was omitted |
| `ConfigurationError` about an unknown environment, thrown by the constructor | `serverEnvironment` is not a declared member |
| an event-stream loop rejects with `TimeoutError` while the server is still connected | the server stayed silent past `eventStream.idleTimeout` — raise it, or set it to `null` and bound the wait with a `signal` (**typescript-event-streams**) |
| a token is fetched on every call | a client built per request — see **typescript-client-initialization** |

## Next

- Injecting a fake `fetch` in tests → **typescript-testing**
- What each failure kind means → **typescript-error-handling**
- Options and client lifetime → **typescript-client-initialization**
- Credentials and the token endpoint's server group → **typescript-authentication**
