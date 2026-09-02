---
name: typescript-configuration-resilience
description: Client configuration and resilience for an APIMatic-generated TypeScript SDK — the four ClientOptions fields, server/base-URL selection and template variables, timeouts and cancellation, proxies, TLS and connection pooling, and everything the SDK does not do for you (retries, backoff, logging, pagination, streaming) built on the one `fetch` seam. Load before you construct or tune the client — the field list alone does not reveal that nothing retries, that nothing is logged, that the default environment is whichever the spec listed first, that a `fetch` replacement dropping `init.signal` disables the timeout, that Node's fetch ignores HTTP_PROXY, or that a hand-written page loop is unbounded by default.
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
`{ signal }`. Server groups, environments and their URL templates live in `src/servers.ts`.
Everything under `src/core/` is vendored static code that is **byte-identical in every generated
TypeScript SDK**, so the engine behaviours below hold without checking your SDK.

## The whole configuration surface

| Field | Type | Default | Purpose |
| --- | --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | first declared | selects which environment's server options are read |
| `serverOptions` | `ServerOptions` | `{}` | per-group, per-environment `baseUrl` and template-variable overrides |
| `timeout` | `number` (**ms**) | `60_000` | per-request timeout |
| `fetch` | `FetchLike` (`typeof fetch`) | global `fetch` | **the one extension point** |
| `{scheme}` / `{scheme}Strategy` | per scheme | unset | credentials — see **typescript-authentication** |

Read `DEFAULT_CLIENT_OPTIONS` (exported from the package root) rather than trusting the defaults
column: the credential members and the default environment are per-SDK.

## Not on this SDK

Absent **by design**, not undocumented. This list ships with `src/core/` and is versioned with it:

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. Body kinds are empty, JSON, form-urlencoded, text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| an injected `Idempotency-Key` header | nothing is injected. A key on the wire is one **you** put there |
| the raw `fetch` `Response` | deliberately unreachable. `status`/`headers` are on `asApiResult()` and on `ResponseError` |

Everything in the left column that you actually need, you build on `fetch`. The rest of this skill is
those patterns and the traps in them.

**What the SDK does own**, so that you do not rebuild it: URL and server resolution, request
encoding and schema validation on the way out, auth application and OAuth token caching, response
decoding, the two-family error mapping, and one timeout. Connection pooling belongs to `fetch`, not
to the client.

## The `fetch` seam

```ts
type FetchLike = typeof fetch;
```

One rule, and it is the one that breaks things when missed: **forward `init.signal`**. Spreading
`...init` does it. Drop it and both the client `timeout` and per-call cancellation go inert — the call
neither aborts nor times out, because the transport enforces both through the signal it puts on `init`.

Three facts that decide how you write a wrapper:

- **It sees every request the client makes, including the OAuth token request.** The auth schemes are
  built over the same transport as the operations (`buildAuthSchemes(options, servers, rawClient)` in
  the constructor), so a logging wrapper logs the token POST — `client_secret` and all — and a retry
  wrapper is a candidate to resend it. Filter by URL where that matters.
- **A plain `Error` thrown from a wrapper reaches the caller as `ConnectionError` with your error on
  `.cause`.** A `CoreError` subclass (`SdkError`, `TimeoutError`, …) passes through unwrapped.
- **Wrappers compose by nesting, innermost-first at the network:**
  `new {Api}Client({ fetch: loggingFetch(retryingFetch(3)) })`. Put logging **outside** retry to see one
  line per attempt, inside to see one line per logical call. Order is load-bearing for a write guard —
  see *Making a write safe under retries*.

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
  that exact name exists — otherwise it survives into the URL verbatim, and there is no `SdkError` for
  it the way there is for an unfilled path parameter.
- **An environment value the SDK does not know throws `SdkError` when a server is resolved** — at the
  first call, not at construction. It is the one failure on this surface that throws **synchronously**
  out of the operation method, so `try`/`await` catches it but `.asApiResult()` and `.catch()` never
  see it.

### ⚠▶▶ Always pass `serverEnvironment` explicitly

`serverEnvironment` has a default, so `new {Api}Client()` compiles and reaches a real host. **That
default is whatever environment the spec listed first** — `DEFAULT_CLIENT_OPTIONS.serverEnvironment`
is `EnvironmentOrder[0]` — and for many providers the spec lists sandbox first. Nothing announces it.

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

Without the guard, a typo in a deployment variable becomes `undefined`, `{ ...DEFAULT_CLIENT_OPTIONS,
serverEnvironment: undefined }` overwrites the default with `undefined`, and the failure surfaces at
the first call as a synchronous `SdkError` about an unknown environment (above) — a long way from the
variable that caused it.

### What is captured when

`serverEnvironment` and `serverOptions` are not read at the same time, which makes one of them look
inert. The constructor calls `buildServers(options.serverEnvironment, options.serverOptions)` **once**,
capturing the environment; the resolvers it returns re-merge the options object on **every request**.
So mutating a nested field of the `serverOptions` object you passed in does take effect on later calls,
while assigning `serverEnvironment` afterwards does not.

Do not use that. Mutating server options on a live client is an unsynchronised race against in-flight
calls, not a supported "switch hosts" operation. **Configure the server before you construct, and
construct a new client to change environment.**

### Redirecting at a mock

⚠ **An OAuth token endpoint may live on its own server group.** Redirecting `{group}` at a mock does
**not** move the token request, which still reaches the real host and fails or, worse, succeeds against
production. Override every group the run touches. See **typescript-authentication**.

This is a real base-URL override, not a proxy — the SDK builds requests against the URL you give it.
For a proxy, see *Proxy or custom agent* below.

## Retries — the SDK has none, so this is yours

A failed call rejects once. There is no `maxRetries`, no backoff, no `Retry-After` handling, and
nothing observes a `429`. Concretely:

- A `429` or `503` rejects on the first attempt. Nothing is resent.
- A connection reset rejects. Nothing is resent.
- **Even the one thing that looks automatic — a `401` — is not a retry.** The transport invalidates
  whatever that operation's auth scheme had cached, so the *next* call re-acquires; the failing request
  is not resent. You see one `401`, then recovery.

Two implications, and the second is easy to give away by accident:

1. **Whatever retrying your integration needs, you write.** There is no knob.
2. **You inherit no accidental duplicate writes.** A failed write was attempted exactly once at the SDK
   layer. That is a genuinely valuable property — do not discard it carelessly when you add retries.

### The two seams, and they are not equivalent

A retry can sit in two places, and which you pick changes what it can see and what it re-runs:

| | **Transport-level** — wrap `fetch` | **Caller-level** — wrap the SDK call |
| --- | --- | --- |
| Sees | the raw `Response`, so `status` and `Retry-After` directly | typed rejections only — `ResponseError`, `TimeoutError`, `ConnectionError` |
| Re-runs | one HTTP round-trip | the whole operation: encoding, auth resolution, decoding |
| Sees the token request | **yes** — it goes through the same transport | no |
| Client `timeout` applies | per attempt | per attempt (the wrapper adds no bound of its own) |
| Good for | `Retry-After`, per-status policy, anything shared by every operation | per-operation policy, a decision that depends on the decoded error payload |

**Prefer transport-level** for a blanket policy — it is the only place `Retry-After` and the response
headers are reachable without `.asApiResult()`, and it applies to every operation by construction. Use
caller-level when the decision depends on which operation it is or on the typed error payload:

```ts
import { ResponseError, CoreError } from "{package-name}";

const RETRY_STATUSES = new Set([408, 429, 500, 502, 503, 504]);

// Caller-level: narrow on the typed error, and never retry what cannot succeed twice.
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
  if (err instanceof ResponseError) return RETRY_STATUSES.has(err.status);
  if (err instanceof CoreError) return err.kind === "connection" || err.kind === "timeout";
  return false;                       // SchemaError, AuthError, SdkError, anything else: no
}
```

**Never retry a `SchemaError` or a 4xx other than `429`.** On an outbound `SchemaError` nothing was
sent at all — the request never reached the network, so a resend cannot change the outcome; the fix is
in your code. On an inbound one the response was malformed, which a resend rarely cures. And an
`AuthError` means a credential could not be *obtained*, which is configuration, not weather. See
**typescript-error-handling**.

Do not stack both seams without meaning to: three transport attempts inside three caller attempts is
nine round-trips and up to nine times the `timeout`.

### Building the transport-level wrapper

Everything a retry policy needs, you decide and write:

| What a policy needs | What the SDK gives you | Sane starting point |
| --- | --- | --- |
| which statuses to retry | nothing | `408, 429, 500, 502, 503, 504` |
| which methods to retry | nothing | `GET, HEAD, PUT, DELETE, OPTIONS` — idempotent only |
| attempt count | nothing | 3 total |
| backoff curve | nothing | exponential from ~500 ms, **with jitter** |
| `Retry-After` | nothing | honour it, in both its forms |
| not retrying a cancel | nothing | check `init.signal.aborted` first |

The reference implementation:

```ts
const RETRY_STATUSES = new Set([408, 429, 500, 502, 503, 504]);   // as above
const IDEMPOTENT = new Set(["GET", "HEAD", "PUT", "DELETE", "OPTIONS"]);

function retryingFetch(maxAttempts = 3, inner: typeof fetch = fetch): typeof fetch {
  return async (input, init) => {
    const method = (init?.method ?? "GET").toUpperCase();
    let lastError: unknown;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const response = await inner(input, { ...init });   // forwards init.signal

        if (!RETRY_STATUSES.has(response.status) || !IDEMPOTENT.has(method) || attempt === maxAttempts) {
          return response;
        }
        await delay(backoffFor(attempt, response), init?.signal);
      } catch (err) {
        // A caller abort or the client timeout must NOT be retried.
        if (init?.signal?.aborted) throw err;
        if (!IDEMPOTENT.has(method) || attempt === maxAttempts) throw err;
        lastError = err;
        await delay(backoffFor(attempt), init?.signal);
      }
    }
    throw lastError;
  };
}

function backoffFor(attempt: number, response?: Response): number {
  const retryAfter = response?.headers.get("retry-after");
  if (retryAfter) {
    const seconds = Number(retryAfter);
    if (Number.isFinite(seconds)) return Math.min(seconds * 1000, 60_000);
    const at = Date.parse(retryAfter);                       // Retry-After may be an HTTP-date
    if (!Number.isNaN(at)) return Math.min(Math.max(0, at - Date.now()), 60_000);
  }
  const base = 2 ** (attempt - 1) * 500;
  return base + Math.random() * base;                        // full jitter
}

function delay(ms: number, signal?: AbortSignal | null): Promise<void> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(resolve, ms);
    signal?.addEventListener("abort", () => { clearTimeout(t); reject(signal.reason); }, { once: true });
  });
}

const client = new {Api}Client({ fetch: retryingFetch(3) });
```

Five things that make or break it:

- **Never retry a caller abort or a timeout.** Checking `init.signal.aborted` before retrying is what
  separates "the server is struggling" from "we were told to stop." Without it, an aborted request
  keeps retrying after the caller has given up, and the client `timeout` — which aborts through that
  same signal — silently becomes a per-attempt budget you multiply.
- **Only retry idempotent methods** unless the API documents a safe replay. A retried `POST` can
  double-charge. See *Making a write safe under retries*.
- **Respect `Retry-After`** in both its numeric-seconds and HTTP-date forms, and **cap it**. A provider
  asking for a ten-minute pause will otherwise hold the request open for ten minutes.
- **Jitter the backoff.** Without it, every client in a fleet retries in lockstep.
- **Decide what the token request should do.** The wrapper sees it too. It is a `POST`, so the method
  gate above already excludes it — which is usually right, but means a transient `503` from the token
  endpoint fails the operation outright.

**Do the arithmetic before you accept the shape.** The client `timeout` bounds **each attempt**, not
the total, so three attempts at the default `60_000` plus backoff is a worst case near **three
minutes** — on a wrapper whose configuration mentions no such number anywhere. Nothing in the SDK
imposes a wall-clock ceiling; the next section is how you impose one.

### Making a write safe under retries

**Start from what you have.** The SDK resends nothing on its own, so an unwrapped client already holds
every write at one send. The exposure arrives with your wrapper, and with two things it cannot fix:

- **`PUT` is idempotent by HTTP's definition, not necessarily by your provider's.** A `PUT` can still
  carry a per-call side effect — an audit row, an outbound webhook, a metered charge — that a resend
  duplicates.
- **"It was not resent" is not "the write did not happen."** A transport failure on a `POST` leaves the
  outcome *unknown*: the bytes may have reached the provider before the socket died. That is a
  reconciliation problem, and no retry setting solves it.

**Decide which requirement you are meeting before you pick a remedy — they are not interchangeable.**
*"A duplicate must be harmless"* is options 1–2, and the provider still receives more than one write.
*"At most one write may reach the provider"* is option 4, the only one that holds the count at one
regardless of how the client is later configured. The four, **weakest guarantee first** — so do not
read the numbering as a recommendation order:

1. **Make the write idempotent at the provider** — a client-supplied unique reference or idempotency
   key, where the API offers one. Makes a resend *harmless* rather than rarer; the send count stays
   above one.

   Look at the operation's **whole Fields table**, not just its `body`. The request object is flat and
   channel-blind, so a key can arrive as a header, a query parameter, a form field or a body member and
   they all look alike in the signature — the `Channel` column is what tells them apart. See
   **typescript-calling-endpoints**.

   **Generate the key once per logical action and reuse it across every attempt** — that is the whole
   mechanism, and it is the easy thing to get backwards:

   ```ts
   const requestId = crypto.randomUUID();          // once per logical action, NOT per attempt
   await withRetry(() => client.{resource}.{operation}({ ...body, {idempotencyKey}: requestId }));
   ```

   A key generated inside the retried function is a fresh key on every attempt, which deduplicates
   nothing while looking exactly like a solution. Note this only works at the **caller-level** seam: a
   transport-level wrapper resends bytes the SDK already encoded, so the key is stable there for free.

   Three cautions, none of them visible in the type:

   - **Nothing is injected.** Unlike some generators, this one adds no `Idempotency-Key` header of its
     own, so a key on the wire is one a spec parameter declared and one you set.
   - **Whether the provider actually enforces it is not visible in the model.** Such a field is
     typically just an optional string, equally consistent with an enforced key and with a free-text
     label. Verify against live traffic before relying on it.
   - **Keys expire, and the retention window differs per API.** A resend after a long backoff may fall
     outside it and be treated as a new request. Only the provider's documentation carries that number.
2. **Reconcile after a failure** — on a transport failure on a write, re-read provider state to
   establish what actually happened instead of assuming nothing did. Detects a duplicate; does not
   prevent one. Same reflex as an unreadable write response — see **typescript-error-handling**.
3. **A separate client for writes**, constructed without the retry wrapper. The wrapper is a
   constructor argument, so this is one extra client and no other change:

   ```ts
   const reads  = new {Api}Client({ ...shared, fetch: retryingFetch(3) });
   const writes = new {Api}Client({ ...shared });                          // no resends, ever
   ```

   Holds at one send today; stops holding the moment someone adds a wrapper to `writes`, and that
   failure does not announce itself.
4. **A guard wrapper that refuses a re-send it did not authorise** — the only option that holds the
   count at one no matter how the client is configured, because a blocked attempt never reaches the
   network. Reach for it whenever a duplicate would be externally visible or costly to undo, and
   combine it with option 2 to settle the outcome of the one send you allowed.

   Three details decide whether it works:

   - **The guard must be the *innermost* wrapper.** `retryingFetch(guardFetch(fetch))` puts every
     attempt through the guard; `guardFetch(retryingFetch(fetch))` puts only the first one through it,
     and the retry loop resends freely underneath. Composition order *is* the mechanism here.
   - **Keep the "already sent" marker in state that outlives one attempt** — an `AsyncLocalStorage`
     scope the caller opens around the write, or a closure created per unit of work. A marker hung off
     `init` is per-attempt bookkeeping only, and a caller-level retry (a job re-running after a
     timeout) creates a fresh one either way.
   - **Do not let the refusal look retryable.** Throw a private sentinel class and check for it in the
     retry wrapper's `catch` before deciding to retry, exactly as you check `init.signal.aborted`.
     Remember the guard also sees the OAuth token request; key it on method and URL so a token
     acquisition is not counted as the write.

   Count the send **before** it goes out. A request that failed on the way out may still have been
   received, so "this may already have taken effect" is the only safe reading — surface it as an
   **unknown outcome** to be settled by re-reading provider state (option 2), not as a definite failure.

**Where an operation offers no idempotency parameter at all, retrying it is a real duplication risk**
and the safe recovery is option 2 — re-read state and decide — not a resend. Some operations are
naturally idempotent anyway (cancelling an already-cancelled resource is usually harmless), but that is
a **per-operation judgement** made against the provider's documentation, not a property you can assume
for the whole class of writes.

**All four bound the call YOU make to the provider. None of them is a reason to change the contract
your own callers see.** Key the guard on something you already hold — a reference derived
deterministically from what the caller sent. A caller that sent a well-formed request and got a `4xx`
because your guard wanted an extra field is a defect you introduced, not a duplicate you prevented.
And **a guard needs a release**: a claim or marker with no expiry turns one transient failure into a
permanent refusal. Clear it once the outcome is settled, and expire it when it never is.

## Bounding a call — the two layers, and which one is a total

| Layer | Scope | Default | Bounds a whole call? |
| --- | --- | --- | --- |
| `ClientOptions.timeout` | one attempt through `fetch` | `60_000` ms | **No** — a retry wrapper multiplies it |
| the `signal` you pass to the call | everything from dispatch to resolution | none | **Yes** — the only one |

### `timeout`

In **milliseconds**, bounding **one request attempt** — enforced with an `AbortController` inside the
transport, surfacing as a Family B rejection with `err.kind === "timeout"`. What the field list does
not tell you:

- **It covers credential acquisition too.** The timer starts before the auth scheme resolves, and an
  OAuth token fetch happens inside it. So on the first call of a cold client, `timeout` is the budget
  for the token round-trip **plus** the operation, not for the operation alone.
- **A non-finite or non-positive value is not "no timeout".** The transport falls back to its own
  ceiling of `100_000` ms, and clamps anything above `2_147_483_647` ms — the largest value a timer can
  hold. `timeout: 0` and `timeout: Infinity` both mean 100 seconds.
- **There is no per-request timeout.** One value covers every call on that client. If different
  operations need different budgets, build **two clients**, or impose the tighter budget with a signal.
- **A `fetch` replacement that drops `init.signal` makes it inert.** Always spread `...init`.

### Cancellation and real deadlines

`RequestOptions` is `{ signal?: AbortSignal }` and that is the whole per-call surface.

```ts
const controller = new AbortController();
const t = setTimeout(() => controller.abort(new Error("deadline exceeded")), 2_000);
try {
  await client.{resource}.{operation}({ /* ... */ }, { signal: controller.signal });
} finally {
  clearTimeout(t);
}
```

A caller abort surfaces as `err.kind === "abort"`, and `err.cause` is whatever you passed to `abort()` —
so pass something diagnostic. An already-aborted signal rejects immediately.

For a **deadline across a whole unit of work** — several calls, or a call plus a retry loop —
`AbortSignal.timeout` and `AbortSignal.any` compose (both on Node 20+):

```ts
async function withDeadline<T>(work: (signal: AbortSignal) => Promise<T>, ms: number, caller?: AbortSignal) {
  const deadline = AbortSignal.timeout(ms);
  return await work(caller ? AbortSignal.any([deadline, caller]) : deadline);
}
```

That is also how you give one operation a tighter budget than the client-wide `timeout`: the earlier of
the two wins.

⚠▶▶ **A per-attempt timeout does not bound a request.** If one handler makes more than one SDK call —
a loop over records, a fan-out, a create-then-confirm pair — the per-call timeouts **add up**, and they
add up *faster* when each failure is caught so the work can continue: every swallowed timeout costs its
full bound and the next call still runs. **The check is arithmetic, not judgement:** `calls in this
handler × timeout` must sit under the budget you are willing to make a caller wait. Count the calls in
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

## Streaming and binary responses — not carried

There is no SSE support, no `ReadableStream` handling, and no binary response type. This is not simply
an omission you can work around at the call site: when the spec declares a `text/event-stream` or
binary success response, the generator **still emits the operation** but gives it the **empty-body
decoder**, because the vendored runtime has no carrier for either.

The consequence is specific and worth knowing before you debug it: the empty decoder asserts the body
is empty, so such an operation **fails at the call** with `SchemaError` ("Expected an empty response
body") the moment the server sends anything — rather than quietly resolving something the spec never
described. The operation's **Returns** bullet reads `undefined` for these.

Same story outbound: multipart, binary and XML request bodies have no carrier, so those operations are
emitted with no body field at all. See **typescript-calling-endpoints**.

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
   to **nothing**, leaving a doubled slash (`/orders//confirm`); a path field left `undefined` leaves
   the marker unfilled and raises `SdkError` naming it. The first is silent, so it is the one to look
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

There is no built-in limiter. Either handle `429` in the retry wrapper (above, via `Retry-After`), or
put a concurrency/rate limiter around your calls. Client-side limiting is the more predictable of the
two under load — retrying into a rate limit converts a fast failure into a slow one.

### Circuit breaking

Also a `fetch` wrapper: count consecutive transport failures and 5xx responses, open the circuit for a
cool-off window, and fail fast while it is open. Throw a plain `Error` from the wrapper and it reaches
the caller as `ConnectionError` with your error on `.cause`.

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
| a retry loop keeps going after a cancel | the retry wrapper not checking `init.signal.aborted` |
| one handler takes far longer than `timeout` | `timeout` is per attempt — count the calls, then bound the handler with a signal |
| a page loop never returns | no provider-independent bound — see *Never leave a page loop unbounded* |
| requests still hit the real host under test | the wrong server **group** or **environment** overridden — check `src/servers.ts` |
| auth fails everywhere with credentials you know are right | `serverEnvironment` left to its default, which is the spec's **first** environment — often sandbox |
| the call works locally, fails behind a corporate proxy | Node's `fetch` ignores `HTTP_PROXY` — register `EnvHttpProxyAgent` or pass a `dispatcher` |
| a duplicate write despite an idempotency key | the key is generated inside the retried function — hoist it out |
| ~9× the expected round-trips | a transport-level and a caller-level retry stacked |
| a `{placeholder}` survives into the URL | a `baseUrl` you supplied names a variable the group does not declare |
| `SdkError` naming an unfilled path parameter | a path field was `undefined` — a required field was omitted |
| `SdkError` about an unknown environment, thrown synchronously | `serverEnvironment` is not a declared member; `.asApiResult()` cannot see it |
| `SchemaError` "expected an empty response body" | a streaming or binary response with no carrier — call it with `fetch` directly |
| a token is fetched on every call | a client built per request — see **typescript-client-initialization** |
| 401 on the first call, fine afterwards | expected: a 401 invalidates the token cache and does **not** retry |

## Next

- Injecting a fake `fetch` in tests → **typescript-testing**
- What each failure kind means → **typescript-error-handling**
- Options and client lifetime → **typescript-client-initialization**
- Credentials and the token endpoint's server group → **typescript-authentication**
