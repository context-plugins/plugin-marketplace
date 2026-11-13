---
name: typescript-client-initialization
description: Load before writing the code that builds an APIMatic-generated TypeScript SDK client — `ClientOptions`, environments and base URLs, client lifetime and the token cache, wiring the client into app startup or dependency injection, ESM and CommonJS, and inbound webhooks.
---

# Initializing an APIMatic TypeScript SDK client

This applies to **any** APIMatic-generated TypeScript SDK. Replace placeholders with the real names
from the SDK you are using:

- `{Api}Client` — the single public client class (e.g. `FooClient`), declared in `src/client.ts`.
- `{package-name}` — the npm package name from `package.json`. This can differ from the client class
  name, and it is the **only** import specifier: deep imports (`{package-name}/models/…`) do not
  resolve, because the `exports` map exposes `.` and `./package.json` and nothing else.
- `{Environment}` — a member of the generated `ServerEnvironment` object (e.g. `Production`);
  `{environment}` is that same environment's lower-camel key inside `serverOptions`.
- `{group}` — a named server group key inside `serverOptions` (`default` is the usual one).
- `{resource}` / `{operation}` — a resource getter on the client and an operation on it.
- `{scheme}` — a credential member on the options object, one per auth scheme the API declares.

Everything under `src/core/` is **the same in every APIMatic TypeScript SDK**, so the engine behaviours
described in these skills hold without checking yours. What varies per SDK is
`src/client.ts`, `src/client-options.ts`, `src/servers.ts`, `src/auth-schemes.ts`, `src/resources/`
and `src/models/`.

## Where to read the client's shape

1. **`sdk-map.md` § Getting a client** (at the package root) — the generated contract sheet. It prints
   the construction sample, the complete `ClientOptions` table (`Field` · `Type` · `Default`, plus the
   source file each field comes from), the per-request surface, and a **Not on this SDK** table naming
   what is absent by design. § **Servers & auth** carries the environments, the server groups and
   which operations require which scheme; § **Runtime & packaging** carries the dialects, the required
   globals and the browser floors. Start here.
2. **`README.md`** — Quick Start prints the same construction sample, in both the ESM and the
   CommonJS spelling.
3. `src/client.ts`, `src/client-options.ts` and `src/servers.ts` — the source, when you need to
   confirm something the docs do not carry.

Two facts about where those files live:

- **The package ships its own `src/`, plus the generated map.** `package.json` `files` includes
  `dist`, `src`, `README.md`, `api-reference.md`, `sdk-map.md` and `map`, so the readable TypeScript
  source and the lookup index are both inside `node_modules/{package-name}/`. Read them there rather
  than the compiled `dist/`.
- **`dist/` must exist before the package can be referenced.** The SDK builds with `tshy`; an SDK
  consumed by path needs its `build` script run once. A `Cannot find module` on a
  path-installed SDK is usually this, not a bad import.

## Shape of the client

APIMatic TypeScript SDKs expose **one public client class** with **one constructor**, taking a single
options object:

```ts
constructor(options: ClientOptions = {})
```

Nothing on it is required and neither is the argument, so `new {Api}Client()` compiles. The options
object is the whole configuration surface, and reading the environment into it is yours to do at the
call site.

Operations hang off resource getters, `client.{resource}.{operation}(...)`, or sit directly on the
client when the SDK has no resource level — take them from the contract sheet, not the API's own
documentation (**typescript-calling-endpoints**).

The options type always carries these six knobs (credential members vary per API — see
**typescript-authentication**):

```ts
export type ClientOptions = {
  readonly serverEnvironment?: ServerEnvironment;     // selects the base URL
  readonly serverOptions?: ServerOptions;             // per-server, per-environment baseUrl override
  readonly retry?: RetryOptions | undefined;          // retry policy + per-attempt timeout (MILLISECONDS).
                                                      //   Retries ON by default
  readonly logging?: LoggingOptions | undefined;      // request/response logging — OFF by default
  readonly eventStream?: EventStreamOptions | undefined; // event-stream idle timeout (MILLISECONDS) —
                                                      //   read only by an EventStream operation
  readonly fetch?: FetchLike | undefined;             // the ONE transport extension point —
                                                      //   see typescript-configuration-resilience
  // + one OPTIONAL credential member per auth scheme the API declares, and — for an OAuth2 scheme —
  //   a {scheme}Strategy member alongside it (see typescript-authentication)
};
```

Those six names are fixed in every SDK; a credential named like one of them carries a suffix
instead. **Every member is `readonly`**, and the client captures your options once, at construction —
a different configuration means a new client. Each default is applied where the value is read: a
server variable takes the `@default` on its member in `src/client-options.ts`, `fetch` takes its in
`src/core/client-options.ts`, every `retry` field takes its in `src/core/retry.ts`, every
`logging` field its in `src/core/logging.ts`, and `eventStream.idleTimeout` its in
`src/core/event-stream.ts`. Read them there rather than trusting the numbers on this
page. The default `serverEnvironment` is the **first** `ServerEnvironment` member, which is not
necessarily the production one.

**Retries are on by default**: an idempotent call (`GET`, `HEAD`, `PUT`, `OPTIONS`) that fails
retryably is re-sent up to 3 more times with backoff, so its failure surfaces seconds late, and
`retry.timeout` (milliseconds) bounds each attempt, not the call; `retry: { maxRetries: 0 }` turns
retrying off. **typescript-configuration-resilience** owns the policy.

**`fetch` is the only transport extension point.** The SDK has no hooks or middleware, and streams
only a `text/event-stream` response, through an operation that resolves to an `EventStream`
(**typescript-event-streams**) — build anything else by wrapping `fetch`
(**typescript-configuration-resilience**). A replacement must
forward the `Request` it is handed, or its `signal`, or cancellation and timeouts go inert. **Logging is
built in and off by default**, and the `{APICLIENTTYPENAME}_LOG` environment variable (the client class
name in upper snake case, plus `_LOG`) can turn it on with no code change
(**typescript-configuration-resilience**).

## Direct instantiation

```ts
import { {Api}Client, ServerEnvironment } from "{package-name}";

const client = new {Api}Client({
  serverEnvironment: ServerEnvironment.{Environment},   // pick the environment your API exposes
  retry: { timeout: 10_000 },                            // per attempt; the retry defaults stand
  // ...set the credential member your API uses (see typescript-authentication)
});
```

Spell `serverEnvironment` out even when it is the default, so the host a call reaches is visible
where the client is built rather than inherited silently.

### What construction checks, and what it does not

A clean construction does not mean a working client. **What throws from the constructor** is
`ConfigurationError` — no reachable `fetch` implementation, a basic-auth username containing `:`, or a
`serverEnvironment` the SDK does not know — and `SchemaError`, for a `serverOptions` override whose
value its schema refuses: every server group is resolved as the client is built. Everything else is
accepted and fails later, one layer from its cause:

| Passed at construction | When it actually fails |
| --- | --- |
| a `retry` field out of range — a negative or fractional `timeout`, a `maxJitter` above `1`, a lower-cased `"get"` in `httpMethodsToRetry` | never — that field silently falls back to its default. `timeout: 0` is the exception: it is kept, and aborts every attempt |
| a `baseUrl` override | first call — as a connection error, or as a `401` against the wrong host |
| wrong credentials | first call — under OAuth2 as an `AuthError` from that operation, with the token endpoint's `ApiError` on `.cause` (**typescript-error-handling**) |
| a misspelled or extra credential field | never at run time. Credentials are plain objects checked only by TypeScript; nothing re-validates them at construction |
| **an omitted** credential | first call, as a `401`. An unset credential configures the client for **no auth** — the operation sends no credential rather than erroring. See **typescript-authentication** |

That last row is the one integrations lose time to, which is why the factory below checks credentials
before constructing.

### Client and fetch lifetime

**Keep the SDK client long-lived.** `fetch` owns the connection pool, but the constructor resolves and
then owns the rest: the `fetch` implementation, every server group (mutating the options object
afterwards does nothing; construct a new client to change environment —
**typescript-configuration-resilience**, *What is captured when*), the memoized resource getters, and
the auth schemes — for an OAuth2 SDK the scheme *is* the access-token cache. A fresh client starts with
an empty token cache, so **every construction pays a token request on its first call**, and
throwaway clients cannot share one in-flight token acquisition the way a shared client does.

Construct per request only where you genuinely need different credentials per request — and then
expect the token fetch. For rotating a secret without rebuilding, a credential member accepts a
**function** instead of a string; see **typescript-authentication**.

**There is nothing to close** — no `close()`, `dispose()` or `Symbol.dispose`, and no shutdown hook to
register. There is no drain either: to stop in-flight requests at shutdown, abort each call's
`signal`.

**The `fetch` implementation is resolved once, in the constructor** — yours, else `globalThis.fetch`;
with neither, the constructor throws `ConfigurationError`. Patching `globalThis.fetch` after a client
exists does not reach it, so pass a fake through `ClientOptions.fetch` and build the client after it
(**typescript-testing**). A replacement is called as `fetch(request)` — one `Request`, no `init` — with
`this` set to `undefined`, so bind a method before passing it; **typescript-configuration-resilience**
owns the rest of its contract.

## Choosing the server / base URL

Select an environment with `serverEnvironment: ServerEnvironment.{Environment}` — a **closed** const
object (no `| (string & {})` tail), one member per environment the API defines, even when there is only
one. There is no bare `baseUrl` option: an override is nested **per server group AND per environment**
— `serverOptions.{group}.{environment}.baseUrl` — with any template variables beside `baseUrl`, and it
merges key-wise over that environment's defaults:

```ts
const client = new {Api}Client({
  serverEnvironment: ServerEnvironment.{Environment},
  serverOptions: {
    {group}: { {environment}: { baseUrl: "http://localhost:3000" } },
  },
});
```

The group keys, the environment members, and the URL each resolves to are in `DEFAULT_SERVER_OPTIONS`
in `src/servers.ts` and under **Servers & auth** in the contract sheet — **read them there**, because a
member's name does not reliably tell you its host. **typescript-configuration-resilience** owns server
and base-URL configuration, including an OAuth token endpoint on its own server group.

## Wiring into an application

The client is a plain object you construct and share, so the wiring is whatever your framework
already uses for singletons.

The simplest form, and the right one for scripts and small services:

```ts
// api-client.ts — one module-level instance, imported wherever it is needed
import { {Api}Client, ServerEnvironment } from "{package-name}";

export const client = new {Api}Client({
  serverEnvironment: ServerEnvironment.{Environment},
  {scheme}: process.env.API_TOKEN!,
});
```

⚠ **A module-level client reads `process.env` at import time**, which under ESM hoisting can precede
your config loader, `dotenv` or secret fetch. The credential is then `undefined`, which the SDK treats
as no auth: no startup error, just a `401` on the first call, reading like an expired token. Load
config before anything imports this module, or build the client in a factory called from your startup
path (below).

### Building it in a factory

The full shape. **The credential check is not optional to think about** — without it, a missing
environment variable is invisible until an unrelated `401`:

```ts
import { {Api}Client, ServerEnvironment } from "{package-name}";

export function build{Api}Client(): {Api}Client {
  const token = process.env.API_TOKEN;
  if (!token) throw new Error("API_TOKEN is not set");   // fail at startup, not as a 401 later

  return new {Api}Client({
    serverEnvironment: ServerEnvironment.{Environment},
    retry: { timeout: 10_000 },                          // per attempt; default 60_000 ms
    {scheme}: token,
  });
}
```

Then register the result once, however your framework shares singletons, and inject it:

```ts
// The registration call differs per framework; the rule — build once, share — does not.
const client = build{Api}Client();

export class MyService {
  constructor(private readonly client: {Api}Client) {}

  doWork() {
    return this.client.{resource}.{operation}({ /* ... */ });
  }
}
```

Taking the client as a constructor parameter rather than importing the module singleton directly is
what makes the service testable — a test passes a client built over a fake `fetch`. See
**typescript-testing**.

### Where the client lives

| Host | Where to build it | Why |
| --- | --- | --- |
| Long-running server (Express, Nest, Fastify, …) | once at startup, shared for the process lifetime | one token cache, one set of memoized resource getters |
| Serverless function | **module scope**, not inside the handler | module scope survives warm invocations, so the token cache does too. It does not survive a cold start, and nothing can make it |
| `cluster` workers | once per worker, after the fork | workers are separate processes: **N workers is N token caches and N first-call token fetches**, and no client can be shared between them |
| `worker_threads` | once per thread | a client is not structured-cloneable — it holds functions and private fields — so it cannot be posted across the boundary |
| CLI / script | one at the top, or one per run | the process is short-lived; the cache never pays back |
| Browser / edge runtime | wherever your bundle initialises | the package ships `dist/esm` and `dist/commonjs` only — no bundle, no UMD, no CDN artifact — so it goes through a bundler. Deno, Bun, Workers and Vercel Edge need only the globals the map lists, but none is a tested target |

## ESM and CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a
TypeScript CommonJS file use the `import … = require(…)` form — a destructuring `require` runs fine
but gives you `any`:

```ts
import sdk = require("{package-name}");

const client = new sdk.{Api}Client({ serverEnvironment: sdk.ServerEnvironment.{Environment} });
```

⚠ **A process that loads both dialects gets two copies of every class**, so `instanceof` is `false`
across them — pick one dialect per process, or narrow on `err.kind` (**typescript-error-handling**).

Two consumer compiler settings change what you type at the construction site. Under
`exactOptionalPropertyTypes`, **omit or spread** an absent option rather than assigning `undefined` to
it. Under `verbatimModuleSyntax`, names that carry no runtime value — `ClientOptions` and every model
type — must be imported with `import type`; `{Api}Client` and `ServerEnvironment` are real values and
are imported normally.

## Inbound webhooks — what the emitted package does and does not give you

**There is no webhook surface at all** — no event parser, no signature verifier, and no member of
`ClientOptions` that turns one on.

So verifying an inbound webhook is entirely yours to write, against the provider's published scheme:
capture the raw body before any JSON parsing, compute the signature yourself, and compare in constant
time. The SDK's model types stay useful for *deserializing* an event body once you have verified it —
but do not read "the SDK parses this" as "the SDK verified this". See **typescript-models**.

## Next

- Configure authentication → **typescript-authentication**
- Make your first call → **typescript-calling-endpoints**
- Tune timeouts, retries, logging, base URL, paging → **typescript-configuration-resilience**
