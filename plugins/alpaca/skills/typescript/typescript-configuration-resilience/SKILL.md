---
name: typescript-configuration-resilience
description: Client configuration and resilience for an APIMatic-generated TypeScript SDK — the four ClientOptions fields, server/base-URL selection and template variables, the retry policy (on by default — what it retries, what it never does, per-call overrides) and the per-attempt timeout, cancellation, proxies, TLS and connection pooling, and everything the SDK does not do for you (logging, pagination, streaming) built on the one `fetch` seam. Load before you construct or tune the client — the field list alone does not reveal that idempotent calls are retried by default and writes are not, that the timeout bounds one attempt rather than the call, that nothing is logged, that the default environment is whichever the spec listed first, that a `fetch` replacement dropping `init.signal` disables the timeout, that Node's fetch ignores HTTP_PROXY, or that a hand-written page loop is unbounded by default.
---

# Configuration & resilience for an APIMatic TypeScript SDK

> **One skill, every shape.** This file covers every configuration surface the TypeScript generator
> emits. Which parts YOUR SDK exercises — how many server groups and environments it declares, which
> template variables those carry, whether an operation takes a page or cursor field, whether the API
> offers an idempotency key — are facts of the API definition, not of this skill: take them from
> `sdk-map.md` and `map/operations/{resource}.md` at the package root, and **apply only the guidance
> that matches**.

> `{...}` is a placeholder for a name you take from your SDK — `{Api}Client` (the one public client
> class, declared in `src/client.ts`), `{resource}`/`{Resource}`, `{operation}`/`{Operation}`,
> `{group}`, `{environment}`, `{variable}`, `{items}`, `{nextCursor}`. Replace each with the concrete
> identifier from the source; none of them is a name the generator emits literally.

Everything configurable is a field on `ClientOptions` (`src/client-options.ts`), passed to the one
constructor. There is no `Configuration` class, no builder, and no per-request override beyond
`{ signal, retry }`. Server groups, environments and their URL templates live in `src/servers.ts`.
Everything under `src/core/` is vendored static code that is **byte-identical in every generated
TypeScript SDK**, so the engine behaviours below hold without checking your SDK.

## The whole configuration surface

| Field | Type | Default | Purpose |
| --- | --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | first declared | selects which environment's server options are read |
| `serverOptions` | `ServerOptions` | `{}` | per-group, per-environment `baseUrl` and template-variable overrides |
| `retry` | `RetryOptions` | retries **on** — see *Retries* | the retry policy, and `retry.timeout` (**ms**, `60_000`) bounding each attempt |
| `fetch` | `FetchLike` (`typeof fetch`) | global `fetch` | **the one extension point** |
| `{scheme}` / `{scheme}Strategy` | per scheme | unset | credentials — see **typescript-authentication** |

Read the defaults off your own SDK rather than trusting the column: the credential members and the
default environment are per-SDK.

## Not on this SDK

Absent **by design**, not undocumented. This list ships with `src/core/` and is versioned with it:

| You might reach for | Reality |
| --- | --- |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point; `retry.onRetry` is the one callback, and it sees only retries |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream` | no event streams. Every decoder reads the body to completion, bar a binary success, which hands its stream over unread |
| multipart <em>responses</em>, XML bodies | none. Body kinds are empty, JSON, form-urlencoded, text, multipart and binary |
| per-request `headers`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal, retry }`, and `retry` takes only `maxRetries`, `timeout` and `statusCodesToRetry` |
| a circuit breaker, a rate limiter | none. The retry loop honours `Retry-After`, but nothing limits how many calls you start |
| the raw `fetch` `Response` | deliberately unreachable. `status`/`headers` are on `asApiResult()` and on `ResponseError` |

Everything in the left column that you actually need, you build on `fetch`. The rest of this skill is
those patterns and the traps in them.

**What the SDK does own**, so that you do not rebuild it: URL and server resolution, request
encoding and schema validation on the way out, auth application and OAuth token caching, response
decoding, the two-family error mapping, the `Idempotency-Key` on every non-GET call, and the retry
loop with its per-attempt timeout. Connection pooling belongs to `fetch`, not to the client.

## The `fetch` seam

```ts
type FetchLike = typeof fetch;
```

One rule, and it is the one that breaks things when missed: **forward `init.signal`**. Spreading
`...init` does it. Drop it and both each attempt's `retry.timeout` and per-call cancellation go inert
— the call neither aborts nor times out, because the transport enforces both through the signal it
puts on `init`. On an abort, **reject with `init.signal.reason`**, as the real `fetch` does: a
replacement that rejects with an error of its own instead still ends the attempt as a
`TimeoutError`, but one the retry loop does not retry.

Four facts that decide how you write a wrapper:

- **It sees every request the client makes, including the OAuth token request.** The auth schemes are
  built over the same transport as the operations (`buildAuthSchemes(options, servers, rawClient)` in
  the constructor), so a logging wrapper logs the token POST — `client_secret` and all. Filter by URL
  where that matters.
- **It sits under the retry loop, so it sees every attempt.** A call retried three times is four
  requests through your wrapper, each with a fresh `init.signal`, and a logging wrapper writes four
  lines. To see one line per logical call, log around the SDK call instead; to see why an attempt
  was abandoned, use `retry.onRetry`.
- **A plain `Error` thrown from a wrapper reaches the caller as `ConnectionError` with your error on
  `.cause` — and is retried like a dropped connection** for a method in the retry gate, so a
  deliberate refusal is thrown again on every attempt and surfaces only after the backoff. A member of
  the `{Api}Error` family (`TimeoutError`, `ConnectionError`, …) passes through unwrapped, and is
  retried only if its `kind` is `connection` or `timeout`.
- **Wrappers compose by nesting, innermost-first at the network:** in
  `new {Api}Client({ fetch: loggingFetch(proxiedFetch) })` the logger sees the request before the
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
template** (always present and settable) plus any **template variables** the spec declares for that
server — a region, a subdomain, a port, an API version. Names and counts vary per API and per
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

Four things about how this resolves:

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
- **An environment value the SDK does not know throws `ConfigurationError` from the constructor** —
  every server group is resolved once, as the client is built, so no operation method throws
  synchronously.

### ⚠▶▶ Always pass `serverEnvironment` explicitly

`serverEnvironment` has a default, so `new {Api}Client()` compiles and reaches a real host. **That
default is whatever environment the spec listed first** — the first member `ServerEnvironment`
declares in `src/servers.ts`, and the one whose arm every resolver in that file labels `case
undefined:` alongside its own. For many providers the spec lists sandbox first. Nothing announces it.

A deployment that believes it configured production and did not gets sandbox behaviour with
production credentials, which fails auth in a way that reads like a credentials problem rather than an
environment one. **Pass it in every environment, production included**, so the host a call reaches is
visible where the client is built.

`ServerEnvironment` is a **closed** union — no `| (string & {})` tail — so a literal typos out at
compile time. A value arriving from configuration does not. Map it explicitly and **fail on an unknown
value** rather than falling through to the default:

```ts
const ENVIRONMENTS: Record<string, ServerEnvironment> = {
  sandbox: ServerEnvironment.{Sandbox},
  live: ServerEnvironment.{Production},
};

const serverEnvironment = ENVIRONMENTS[process.env.API_ENV ?? ""];
if (!serverEnvironment) throw new Error(`unknown API_ENV: ${process.env.API_ENV}`);
```

Without the guard, a typo in a deployment variable becomes `undefined`, and an `undefined`
environment is read as *none selected*: every resolver's default arm answers to `case undefined:`
alongside its own label, so the client runs quietly against the default environment instead of the
one you asked for. Nothing throws, and nothing is logged. An unknown *string* is the loud case — the
constructor rejects it with `ConfigurationError` (above) — so it is the value your own
configuration turns into `undefined` that fails silently, which is what the guard is for.

### What is captured when

`serverEnvironment` and `serverOptions` are both read **once**, as the client is built. The constructor
calls `buildServers(options)`, which resolves every server group — the environment, its `baseUrl` and
each variable, decoded through its schema — into a value that every call afterwards only attaches its
own sub-path to. So mutating the `serverOptions` object you passed in, replacing a whole group
(`serverOptions.{group} = …`), or assigning `serverEnvironment` afterwards has no effect on the client.
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
- **A `401` is not in the default status set.** The transport invalidates whatever that operation's
  auth scheme had cached, so the *next* call re-acquires; the failing call rejects. You see one `401`,
  then recovery.

The loop lives in `src/core/retry.ts`, and `src/core/raw-client.ts` runs every call through it.
Configure it with any subset of `RetryOptions` — a field you leave out keeps its default:

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

`0`, `false` and `[]` are values, never misses. Anything else a field cannot honour — a negative or
fractional `timeout`, a `maxJitter` of `50`, a list carrying a lower-cased `"get"` — **silently falls
back to that field's default**, and the client still constructs. `timeout: 0` is kept: it is a
zero-length deadline that fails every attempt, not "no timeout".

The wait before retry *n* (counting from 0) is
`min(Retry-After ?? delay × backoffFactor ** n, 60_000) × (1 + random × maxJitter)`, rounded up. The
60-second ceiling is the engine's, not an option, and jitter sits on top of it, so the longest single
wait is 75 s at the defaults.

What the loop does and does not do — read these before you rely on it:

- **The method gate covers every failure.** A status in the set, a dropped connection, a timeout: each
  is retried only for a method in `httpMethodsToRetry`. `PUT` is in the default gate — see *Making a
  write safe*.
- **`Retry-After` is honoured** in both its delta-seconds and HTTP-date forms, capped at 60 s, with
  jitter added on top — never subtracted, so the SDK never wakes before the time the server named. A
  malformed value falls back to the curve.
- **A caller abort is never retried.** Aborting your `signal` cuts a backoff wait short and rejects
  with the signal's own `reason`.
- **A streaming request body is never retried**, whatever the method, because a stream cannot be
  replayed.
- **A failure while obtaining a credential is not retried.** It ends the call — once the token
  request's own retries are spent, since it is a `POST` under this same policy and retries only when
  `httpMethodsToRetry` names `POST`.
- **A rejection from your `fetch` that is not an SDK error counts as a dropped connection.** It
  becomes a `ConnectionError` and is retried — including a refusal your own wrapper throws on purpose
  (see *The `fetch` seam*). The exception is one that arrives after the attempt's timeout or your
  signal fired: the deadline's reason is thrown instead — a caller abort as itself, a timeout as a
  `TimeoutError` that is not retried — which is why a replacement must reject with
  `init.signal.reason`.
- **A retried-away response is released** — its body's cancel started, not awaited, before the wait,
  so a cancel that stalls never holds up the retry — and only its headers reach `onRetry`. When the last attempt fails, the call rejects with **that** attempt's failure: an
  `ApiError` (or the operation's subclass) for a status, a `ConnectionError` or `TimeoutError` for a
  fault — the same shapes as with retrying off (**typescript-error-handling**). `.asApiResult()` sees
  the last response.

**Do the arithmetic before you accept the defaults.** `retry.timeout` bounds each attempt, not the call,
so an idempotent call's worst case is `(maxRetries + 1) × timeout` plus the waits — four minutes at the
defaults. Nothing in the SDK imposes a wall-clock ceiling on the call; *Bounding a call* below is how
you impose one.

### Per-call overrides

Three fields can be overridden on one call through `RequestOptions.retry`, typed `RequestRetryOptions`.
Each is merged field by field over the client's policy, so a field you omit keeps the client's value:

```ts
await client.{resource}.{operation}(request, { retry: { maxRetries: 0 } });              // this call: one attempt
await client.{resource}.{operation}(request, { retry: { timeout: 5_000 } });             // this call: 5 s per attempt
await client.{resource}.{operation}(request, { retry: { statusCodesToRetry: [503] } });  // this call: a narrower set
```

The type admits only these three. How many attempts *this* call gets, how long each may take, and which
statuses are worth a second try vary by call site; the backoff curve, the method gate and `onRetry` are
how the client paces itself against one server, so they are set on the client alone. A per-call
`httpMethodsToRetry` would be a second route to retrying a write. The restriction is the type's
alone: an object carrying another `RetryOptions` field — from JavaScript, or through a constant typed
as the wider record — still has it honoured, so do not rely on the type to keep a write out of the
gate for one call.

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

### When the SDK's policy is not enough

Rules to hold to:

- **Retry idempotent reads freely; treat every write as a separate decision.** A write that timed out
  may have succeeded — a reset after the bytes reached the server is indistinguishable from one before.
  The default gate encodes exactly this.
- **Do not stack a second retry layer** — a retrying `fetch` wrapper, a `withRetry` around the call, a
  job that re-runs on failure — on top of the SDK's without turning the SDK's off for that path.
  Attempts multiply (four inside four is sixteen round-trips, and up to sixteen times the timeout), and
  every attempt of a caller-level layer is a new SDK call that mints a **new** `Idempotency-Key`.
- **Never retry an `EncodeError`, a `DecodeError`, an `AuthError` or a 4xx other than `408`/`429`.** On
  an `EncodeError` nothing was sent at all — the fix is in your code. A `DecodeError` means the
  response was malformed, which a resend rarely cures. An `AuthError` means a credential could not be
  *obtained*, which is configuration, not weather. The loop retries none of them, and neither should
  you. See **typescript-error-handling**.

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

`{Api}Error` is the whole error family, narrowed on its closed `kind`. The runtime declares it as `CoreError`, and the
package exports it **only** under the SDK-branded alias — read the real name off the
`CoreError as …Error` line in `src/index.ts`. See **typescript-error-handling**.

### Making a write safe under retries

**Start from what you have.** With the default gate a `POST`, `PATCH` or `DELETE` is sent once. The
exposure arrives when you widen `httpMethodsToRetry` or add a retry layer of your own, and with two
things no setting fixes:

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

   - **A `fetch` wrapper sees every attempt of the SDK's loop by construction**, because the loop sits
     above `fetch`. But its refusal reaches the loop as a `ConnectionError`, which **is retried** for a
     method in the gate — each retry is refused again, and the call rejects only after the backoff,
     with your error on `.cause`. Pair the guard with option 3 on the guarded write, so the refusal is
     immediate, and recognise it with `err.cause instanceof YourRefusal`.
   - **Keep the "already sent" marker in state that outlives one attempt** — an `AsyncLocalStorage`
     scope the caller opens around the write, or a closure created per unit of work. A marker hung off
     `init` is per-attempt bookkeeping only, and a caller-level retry (a job re-running after a
     timeout) creates a fresh one either way.
   - **Key it on method and URL.** The guard also sees the OAuth token request, and a token
     acquisition must not be counted as the write.

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

In **milliseconds**, bounding **one attempt** — enforced with an `AbortController` inside the
transport, surfacing as a `TimeoutError` (`err.kind === "timeout"`) once no retry is left. Each attempt
gets its own deadline. What the field list does not tell you:

- **It stops at the response headers.** The timer starts once the credential is in hand, so obtaining
  a credential and reading the body are bounded only by your `signal`. A built-in OAuth token request
  runs on its own timer.
- **A value the platform cannot honour is not "no timeout".** Negative, fractional, `NaN`, `Infinity`
  and anything above `2_147_483_647` ms — the largest value a timer can hold — all fall back to the
  SDK's default (on a call, to the client's value), silently, and the client still constructs. A usable
  value is installed **verbatim**, `0` included, so `timeout: 0` is a zero-length deadline that fails
  every attempt rather than lifting it. An unbounded attempt is not expressible.
- **One call can take its own.** `{ retry: { timeout: 5_000 } }` on the call replaces the client's
  value for that call — still per attempt. For a budget on the whole call, use a signal.
- **A `fetch` replacement that drops `init.signal` makes it inert.** Always spread `...init`.

### Cancellation and real deadlines

`RequestOptions` is `{ signal?: AbortSignal; retry?: RequestRetryOptions }`, and `signal` is the whole
per-call cancellation surface.

```ts
const controller = new AbortController();
const t = setTimeout(() => controller.abort(new Error("deadline exceeded")), 2_000);
try {
  await client.{resource}.{operation}({ /* ... */ }, { signal: controller.signal });
} finally {
  clearTimeout(t);
}
```

A caller abort rejects with whatever you passed to `abort()` — the signal's own `reason`, unwrapped and
outside the `{Api}Error` family — so pass something diagnostic, and rethrow it from a family `catch`.
An already-aborted signal rejects immediately, and an abort during a backoff wait ends the wait and the
call; an abort is never retried.

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

⚠▶▶ **A per-attempt timeout does not bound a request.** If one handler makes more than one SDK call —
a loop over records, a fan-out, a create-then-confirm pair — the per-call timeouts **add up**, and they
add up *faster* when each failure is caught so the work can continue: every swallowed timeout costs its
full bound and the next call still runs — and an idempotent call spends up to `maxRetries + 1` of
them before it fails. **The check is arithmetic, not judgement:** `calls in this handler ×
(maxRetries + 1) × timeout`, plus the waits, must sit under the budget you are willing to make a caller
wait. Count the calls in
the loop, not the calls in the snippet — a handler that processes every record on file makes as many
calls as there are records.

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

## Pagination — drive it yourself

Nothing is paginated and nothing is async-iterable. When an operation returns a page, advance its page
or cursor field in a loop and stop on the API's own end signal:

```ts
// Offset/page style:
const PER_PAGE = 100;
for (let page = 1; ; page++) {
  const result = await client.{resource}.{operation}({ page, perPage: PER_PAGE });
  for (const item of result.{items}) process(item);
  if (result.{items}.length < PER_PAGE) break;      // short page — usually the last
}

// Cursor style:
let cursor: string | undefined;
do {
  const result = await client.{resource}.{operation}({ ...(cursor ? { cursor } : {}) });
  for (const item of result.{items}) process(item);
  cursor = result.{nextCursor};
} while (cursor);
```

Read the actual page/cursor field names off the operation's **Fields** table and its response model —
they are spec-specific, and the SDK sends a defaulted `page`/`perPage` whether or not you set it. Prefer
the API's explicit end signal (a null next-cursor, a `hasMore` flag) over inferring from a short page
where one exists.

### ⚠⚠ Never leave a page loop unbounded

**Both loops above are wrong as written**, and the reason is the same one that makes hand-driven paging
riskier than the auto-paging this SDK does not have: *the only stop condition is the provider's
cooperation*. A provider that keeps returning a next cursor, a cursor that fails to advance, a filter
the provider quietly ignores, or a `perPage` it silently caps below what you asked for will each spin
forever. The failure does not look like a slow request. It looks like a request that **never returns**,
with tens of thousands of provider calls billed behind it and no error the provider can be blamed for.

**Every page loop needs at least one bound that does not depend on the provider.** Pick what matches
the use case; a page cap is the cheapest and is never wrong:

| Bound | Use when | Shape |
| --- | --- | --- |
| **page cap** | always — the backstop | `if (++pages >= MAX_PAGES) break;` |
| **item cap** | the caller wants "the first N" | `if (out.length >= max) break;` |
| **deadline** | the loop sits behind a request timeout | one `AbortSignal.timeout` passed to every call |
| **no-progress guard** | cursor or offset paging | stop if the cursor did not change between pages |

```ts
const MAX_PAGES = 100;
const signal = AbortSignal.timeout(30_000);          // bounds the whole walk, not one page
let cursor: string | undefined;
let seen: string | undefined;

for (let pages = 0; pages < MAX_PAGES; pages++) {
  const result = await client.{resource}.{operation}({ ...(cursor ? { cursor } : {}) }, { signal });
  for (const item of result.{items}) process(item);

  cursor = result.{nextCursor};
  if (!cursor) return;                               // the provider's end signal — the happy path
  if (cursor === seen) throw new Error("cursor did not advance");
  seen = cursor;
}
throw new Error(`stopped after ${MAX_PAGES} pages`);  // truncating silently is its own defect
```

Prefer to **narrow the query before you page it** — a provider-side date range, status filter, or a
`perPage` matching what the caller needs turns "walk everything" into a handful of pages. And **a bound
that silently truncates is a different defect from one that hangs**: when you hit the cap, surface it
or log it; never return a partial set that reads like a complete one.

Wrapping a bounded loop in an async generator gives you the `for await` the SDK does not:

```ts
async function* all{Items}(signal?: AbortSignal): AsyncGenerator<{Item}> {
  let cursor: string | undefined;
  for (let pages = 0; pages < MAX_PAGES; pages++) {
    const result = await client.{resource}.{operation}({ ...(cursor ? { cursor } : {}) }, { signal });
    yield* result.{items};
    cursor = result.{nextCursor};
    if (!cursor) return;
  }
  throw new Error(`stopped after ${MAX_PAGES} pages`);
}
```

A failed page rejects mid-enumeration like any other call — see **typescript-error-handling**.

## Event streams — not carried

There is no SSE support. When the spec declares a `text/event-stream` success response, the generator
**still emits the operation** but gives it the **empty-body decoder**, because the vendored runtime
has no carrier for it. A **binary** success is different and is carried: it resolves to a
`BinaryContent` whose `stream` you read once or release — see **typescript-calling-endpoints**.

The consequence of the empty decoder is specific and worth knowing before you debug it: it asserts
the body is empty, so such an operation **fails at the call** with `DecodeError` ("Expected an empty
response body") the moment the server sends anything — rather than quietly resolving something the
spec never described. The operation's **Returns** bullet reads `undefined` for these.

Outbound, only an XML request body has no carrier, so such an operation is emitted with no body field
at all. Multipart and binary bodies are both sent. See **typescript-calling-endpoints**.

**If you need one of these endpoints, call it with `fetch` directly** — build the URL from the same
base URL, and copy the credential header the SDK would have sent. The SDK cannot carry it, and no
option makes it.

## Logging — none built in

`src/core/` contains no `console` call, so an integration is silent until you make it otherwise. The
wrapper:

```ts
function loggingFetch(inner: typeof fetch = fetch): typeof fetch {
  return async (input, init) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    const started = performance.now();
    log.debug({ method: init?.method ?? "GET", url: redact(url) }, "--> request");

    try {
      const response = await inner(input, { ...init });
      log.debug({ status: response.status, ms: Math.round(performance.now() - started) }, "<-- response");
      return response;
    } catch (err) {
      log.warn({ err, ms: Math.round(performance.now() - started) }, "<-- failed");
      throw err;
    }
  };
}
```

⚠▶▶ **Nothing here is redacted for you, and every channel can carry a credential.** There is no
allow-list, no `RedactedKeys`, no placeholder — a hand-rolled logger prints exactly what you hand it:

- **The URL.** An api-key scheme may put the key in the **query string**, so a logged URL can leak it
  outright. The path also carries ids and references. Write `redact()` and use it — allow-list the
  query keys you want to see rather than deny-listing the ones you do not.
- **The headers.** `Authorization` is on `init.headers`, fully formed. Never log the header bag whole.
- **The request body.** On a form-urlencoded operation that is where the fields live, and on the OAuth
  token request it is where `client_secret` lives. The wrapper sees the token request like any other.
- **The response body.** ⚠ **Reading `response.body` consumes it and the SDK then decodes nothing.**
  Clone first (`response.clone().text()`), and know that doubles memory for large bodies.

Turn body logging on for one endpoint at a time, behind a flag you can prove is off in production.

This same wrapper is where **OpenTelemetry spans, metrics and request-id propagation** belong — it is
the one place that sees every outbound request, its status and its duration.

### Verify on the wire (first run of a new integration)

On a **successful** call the SDK returns only the decoded body — it never surfaces the request URL, the
verb or the status. So a wrong verb, a mis-serialized path segment or a dropped query parameter
**compiles cleanly** and produces no in-band signal; the only symptom is a runtime `404` or `422`. Wrap
`fetch` with the logger above on the first execution of any new call and check five things:

1. The **verb** matches the operation's **Wire** bullet in `map/operations/{resource}.md`.
2. The **base URL** is fully expanded — no leftover `{region}`-style server variable, which means a
   `baseUrl` you supplied carries a placeholder no declared variable fills.
3. The **path** is fully formed. Two different failures live here: a path field set to `null` collapses
   to **nothing**, leaving a doubled slash (`/orders//confirm`); a path field left `undefined` is
   rejected by its schema before anything is sent, as an `EncodeError` whose `uri` still shows the
   unfilled marker. The first is silent, so it is the one to look
   for.
4. Each **path segment** holds the value you meant — for an enum that is the **wire value**, not the
   member name.
5. The **query parameters** you set are present, spelled as their `Wire` names. A `null` or `undefined`
   query value is dropped entirely rather than sent empty, so an absent parameter usually means an
   absent field, not an encoding bug.

Then remove the wrapper, or gate it behind a log level.

## Other work on the `fetch` seam

### Header injection

```ts
const client = new {Api}Client({
  fetch: (input, init) => {
    const headers = new Headers(init?.headers);
    headers.set("x-correlation-id", currentCorrelationId());
    return fetch(input, { ...init, headers });
  },
});
```

Build from `new Headers(init?.headers)` rather than replacing the object — the SDK has already put the
content type and the credential there. This is also the only client-wide header mechanism: the
transport carries default header, query and path-parameter channels, but the generated client currently
wires all three as empty arrays. If a later generator version starts populating them, a header option
could appear on `ClientOptions` — read `src/client-options.ts` rather than assuming the field list is
frozen.

### Rate limiting

There is no built-in limiter. The default policy retries a `429` on an idempotent call and honours
its `Retry-After` (capped at 60 s), which absorbs an occasional limit; it does nothing to stop you
starting more calls than the provider allows. Put a concurrency/rate limiter around your calls for
that. Client-side limiting is the more predictable of the two under load — retrying into a rate limit
converts a fast failure into a slow one, and a fan-out of retrying calls keeps the pressure on.

### Circuit breaking

Count consecutive `ConnectionError`s, `TimeoutError`s and 5xx `ApiError`s, open the circuit for a
cool-off window, and fail fast while it is open. **Put the breaker around the SDK call, not in `fetch`.**
A plain `Error` thrown from a `fetch` wrapper reaches the loop as a `ConnectionError`, which is retried
with backoff — the opposite of failing fast. Around the call, the breaker sees one outcome per call,
after the retries, and its refusal never enters the loop.

## Proxies and TLS (Node)

Neither is a `ClientOptions` field. Both are properties of the **dispatcher** the `fetch` seam hands to
undici, so both are configured the same way:

```ts
import { ProxyAgent } from "undici";

const dispatcher = new ProxyAgent(process.env.HTTPS_PROXY!);
const client = new {Api}Client({
  fetch: (input, init) => fetch(input, { ...init, dispatcher } as RequestInit),
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
  and TLS handshakes — on every call, which is the same waste as a client per request without looking
  like one.
- **Pool limits live there too** — `connections`, `keepAliveTimeout`, `pipelining` on the `Agent`.
  Raise `connections` before assuming a provider is slow under a fan-out; the default cap can be the
  actual bottleneck.

Everything else about client lifetime — why the client itself must be long-lived, and what a per-request
client costs under OAuth — is **typescript-client-initialization**.

## What to reach for, by symptom

| Symptom | Where to look |
| --- | --- |
| calls never time out | a `fetch` replacement dropping `init.signal` |
| a failing call takes seconds longer to reject than the first failure | expected on an idempotent call: the default policy retried it — watch it with `retry.onRetry` |
| a `POST` fails on a `503` that a `GET` survives | expected: `POST` is outside the default `httpMethodsToRetry` |
| one handler takes far longer than `retry.timeout` | it is per attempt, and an idempotent call gets up to four — count the calls, then bound the handler with a signal |
| a page loop never returns | no provider-independent bound — see *Never leave a page loop unbounded* |
| requests still hit the real host under test | the wrong server **group** or **environment** overridden — check `src/servers.ts` |
| auth fails everywhere with credentials you know are right | `serverEnvironment` left to its default, which is the spec's **first** environment — often sandbox |
| the call works locally, fails behind a corporate proxy | Node's `fetch` ignores `HTTP_PROXY` — register `EnvHttpProxyAgent` or pass a `dispatcher` |
| a duplicate write despite an idempotency key | the key is generated inside the retried function — hoist it out; or your own retry layer re-calls the SDK, which mints a new injected key per call |
| ~16× the expected round-trips | a retry layer of your own stacked on the SDK's — set `retry: { maxRetries: 0 }` where you own retrying |
| a test with one stubbed `503` hangs, or runs out of queued responses | the default policy fetched it four times across ~7 s of backoff — see **typescript-testing** |
| a `{placeholder}` survives into the URL | a `baseUrl` you supplied names a variable the group does not declare |
| `EncodeError` whose `uri` still shows a `{placeholder}` | a path field was `undefined` — a required field was omitted |
| `ConfigurationError` about an unknown environment, thrown by the constructor | `serverEnvironment` is not a declared member |
| `DecodeError` "Expected an empty response body" | an event-stream response with no carrier — call it with `fetch` directly |
| a token is fetched on every call | a client built per request — see **typescript-client-initialization** |
| 401 on the first call, fine afterwards | expected: a 401 invalidates the token cache and is not in the default retry set |

## Next

- Injecting a fake `fetch` in tests → **typescript-testing**
- What each failure kind means → **typescript-error-handling**
- Options and client lifetime → **typescript-client-initialization**
- Credentials and the token endpoint's server group → **typescript-authentication**
