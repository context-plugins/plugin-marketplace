---
name: typescript-client-initialization
description: Creating and reusing an APIMatic-generated TypeScript SDK client — construction, the ClientOptions shape, fetch ownership and client lifetime, and wiring the client into an application's startup. Load before wiring the client into an app or writing the factory that builds it.
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

Everything under `src/core/` is vendored static code that is **byte-identical in every generated
TypeScript SDK**, so the engine behaviours below hold without checking yours. What varies per SDK is
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
- **`dist/` must exist before the package can be referenced.** The SDK builds with `tshy`; a freshly
  generated SDK consumed by path needs its `build` script run once. A `Cannot find module` on a
  path-installed SDK is usually this, not a bad import.

## Shape of the client

APIMatic TypeScript SDKs expose **one public client class** with **one constructor**, taking a single
partial options object:

```ts
constructor(clientOptions: Partial<ClientOptions> = {})
```

Every option has a default, so `new {Api}Client()` compiles. The options object is the whole
configuration surface, and reading the environment into it is yours to do at the call site.

Operations are exposed on the client. Most are grouped under **resource getters** (one per API
resource group) and called `client.{resource}.{operation}(...)` — for example, a `widgets` resource's
`listWidgets` operation is `client.widgets.listWidgets(...)`. But when the spec declares **no tags**,
or exactly **one tag covering every operation**, no resource classes are emitted at all and every
operation sits **directly on the client**, called `client.{operation}(...)`. The available resource
getters (and any direct operations) come from the contract sheet (grounded in `src/client.ts` and
`src/resources/`) — not from the API's own documentation, and not from the compiled `dist/`. See
**typescript-calling-endpoints**.

The options type always carries these four knobs (credential members vary per API — see
**typescript-authentication**):

```ts
export type ClientOptions = {
  readonly serverEnvironment: ServerEnvironment;   // selects the base URL
  readonly serverOptions: ServerOptions;           // per-server, per-environment baseUrl override
  readonly timeout: number;                        // MILLISECONDS, per request. Default 60_000
  readonly fetch?: FetchLike | undefined;          // the ONE extension point —
                                                   //   see typescript-configuration-resilience
  // + one OPTIONAL credential member per auth scheme the API declares, and — for an OAuth2 scheme —
  //   a {scheme}Strategy member alongside it (see typescript-authentication)
};
```

Those four names are minted by the generator and cannot move; a credential spelled like one of them is
the member that takes a suffix instead. **Every member is `readonly`**, and the constructor merges
your partial over `DEFAULT_CLIENT_OPTIONS` exactly once — there is no mutable accessor and no way to
reconfigure a built client. `DEFAULT_CLIENT_OPTIONS` is exported from the package root and holds the
concrete defaults for your SDK — read it rather than trusting the numbers above. Note in particular
that the default `serverEnvironment` is the **first** environment the spec declares, which is not
necessarily the production one.

**`fetch` is not a niche escape hatch — it is the only one there is.** The SDK performs **no retries**
and **no logging**, and carries **no hooks, middleware or interceptors**, **no pagination** and **no
streaming**. Each of those is something you build by wrapping `fetch` — including a header you want on
every request. **typescript-configuration-resilience** owns that work and carries the wrappers. Two
consequences to take into any first call: **a failed call rejects once**, and **nothing is logged
anywhere** (`src/core/` contains no `console` call), so an integration is silent until you make it
otherwise. A replacement `fetch` **must forward `init.signal`** to whatever performs the request;
drop it and both cancellation and `timeout` go inert.

`timeout` has its own trap: it is in **milliseconds**, it bounds **one request**, and a non-finite or
non-positive value is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to
its own ceiling, which is *longer* than the default, and clamps anything above what a timer can hold.
There is no per-request override: the entire per-request surface is `RequestOptions` = `{ signal }`.

## Direct instantiation

```ts
import { {Api}Client, ServerEnvironment } from "{package-name}";

const client = new {Api}Client({
  serverEnvironment: ServerEnvironment.{Environment},   // pick the environment your API exposes
  timeout: 10_000,
  // ...set the credential member your API uses (see typescript-authentication)
});
```

Spell `serverEnvironment` out even when it is the default, so the host a call reaches is visible
where the client is built rather than inherited silently.

### What construction checks, and what it does not

A clean construction does not mean a working client. **Exactly two things throw from the
constructor**, both `SdkError`: no reachable `fetch` implementation, and a basic-auth username
containing `:`. Everything else is accepted and fails later, one layer from its cause:

| Passed at construction | When it actually fails |
| --- | --- |
| a non-finite or non-positive `timeout` | never — it silently becomes the transport's ceiling, which is *longer* than the default. There is no `ValueError` equivalent here |
| a `baseUrl` override | first call — as a connection error, or as a `401` against the wrong host |
| a `serverEnvironment` widened out of the union (a `string` cast) | first call **that touches that server group** — the resolvers are lazy arrows, so it is `SdkError: Unknown server environment`, not a construction failure |
| wrong credentials | first call — and under OAuth2, first *token* request, so the error names the token endpoint rather than the operation you wrote |
| a misspelled or extra credential field | never at run time. Credentials are plain objects checked only by TypeScript; nothing re-validates them at construction |
| **an omitted** credential | first call, as a `401`. An unset credential configures the client for **no auth** — the operation sends no credential rather than erroring. See **typescript-authentication** |

That last row is the one integrations lose time to, which is why the factory below checks credentials
before constructing.

### Client and fetch lifetime

The SDK does **not** own a connection pool — `fetch` does. On Node the global `fetch` shares one
process-wide dispatcher, so the reason to keep one client is not the socket pool; it is everything the
constructor resolved and cached.

**Keep the SDK client long-lived — it is not a stateless wrapper.** The only thing you hand it is
configuration; its constructor resolves the rest and then owns it:

- the **transport** — a `RawClient` built over the resolved `fetch` implementation. If no `fetch` is
  reachable, **the constructor throws `SdkError`**, not the first call;
- the **server resolvers** — base URLs are resolved from `serverEnvironment` and `serverOptions` here,
  so a later change to either has no effect on an existing client;
- the **auth schemes** — validated at construction (a basic-auth username containing `:` throws
  `SdkError` from the constructor), and for an OAuth2 SDK the auth scheme *is* the access-token
  cache, closed over by the scheme object.

That last one is the reason a per-request client is a real cost rather than a stylistic one: a fresh
client starts with an empty token cache, so **every construction pays a token request on its first
call**. Three calls through three throwaway clients is three token round-trips where a shared client
makes one — and the shared one also collapses concurrent callers onto a single in-flight token
acquisition, which the throwaway ones cannot.

Resource getters are memoized per client (`client.{resource}` builds once, behind `??=`, and is
cached), so they are part of the same bargain. Never construct a resource class yourself: they are
exported only for their merged namespaces and for `instanceof`, and their constructors take engine
internals that are not exported.

Construct per request only where you genuinely need different credentials per request — and then
expect the token fetch. For rotating a secret without rebuilding, a credential member accepts a
**function** instead of a string; see **typescript-authentication**.

**There is nothing to close.** `src/core/` declares no `close()`, no `dispose()`, and no
`Symbol.dispose` / `Symbol.asyncDispose`, so the client holds no releasable resource and needs no
shutdown hook — the connection pool belongs to the runtime's `fetch`, not to you. The flip side is
that there is no drain either: to stop in-flight requests at shutdown you abort them yourself through
each call's `signal`.

**The `fetch` implementation is resolved once, in the constructor** (`config.fetch ?? globalThis.fetch`,
then stored). Two consequences that fail silently:

- **Monkey-patching `globalThis.fetch` after a client exists has no effect on that client.** A test
  that swaps the global and reuses a module-level client is still calling the original. Pass the fake
  through `ClientOptions.fetch` and build the client after — see **typescript-testing**.
- **A replacement must satisfy `typeof fetch`** — it is called as `fetch(url, init)` with `this` set to
  `undefined`, so a transport method that depends on its receiver must be bound before you pass it.
  It must forward `init.signal` and resolve to a `Response` the decoder can read `status`, `headers`
  and a body from. **typescript-configuration-resilience** owns the wrappers.

## Choosing the server / base URL

**The shape does not vary with the spec.** However many servers or environments the API declares — one
of each, or several of both — you always get a `ServerEnvironment` object and a `serverOptions` bag
keyed by server group; a single-server, single-environment API simply gets a one-member enum and a
one-group bag. There is no arm where the constructor takes a bare `baseUrl` instead.

Environments are modeled as a `ServerEnvironment` const object plus a matching type alias, with one
member per environment the API defines (e.g. `ServerEnvironment.Production`, or region members).
Unlike model enums it is **closed** — no `| (string & {})` tail — so only declared members type-check.
Select one on `serverEnvironment`.

Overriding the base URL is nested **per server group AND per environment** —
`serverOptions.{group}.{environment}.baseUrl`, NOT directly on `serverOptions`. Any **templated
server variables** sit at that same level, beside `baseUrl`, one key per variable the URL template
names:

```ts
const client = new {Api}Client({
  serverEnvironment: ServerEnvironment.{Environment},
  serverOptions: {
    {group}: { {environment}: { baseUrl: "http://localhost:3000" } },
  },
});
```

An override is merged key-wise over that environment's defaults, so setting `baseUrl` alone leaves the
template variables in place, and naming one group leaves the other groups alone. **That last part is a
trap when an OAuth token endpoint lives on its own group**: redirecting the `default` group at a mock
does not move the token request, which still reaches the real host. Override every group the run
touches.

The group keys, the environment members, and the URL each resolves to are all in
`DEFAULT_SERVER_OPTIONS` in `src/servers.ts`, and tabulated under **Servers & auth** in the contract
sheet — **read them there**, because a member's name does not reliably tell you its host.
**typescript-configuration-resilience** owns server and base-URL configuration in full.

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

⚠ **A module-level client is constructed at import time, and that has a consequence worth planning
for.** It reads `process.env` when the module is first imported — which, with ESM hoisting, can be
*before* your config loader, `dotenv`, or secret fetch has run. The credential then resolves to
`undefined`, and because **an unset credential is not an SDK error** (the operation simply sends no
credential), you do not get a startup failure. You get a `401` from the API on the first call, at
runtime, in whichever code path happens to run first — which reads like an expired token rather than
a load-order bug. Two ways out: load config before anything imports this module, or build the client
in a factory called from your startup path (below).

### Building it in a factory

The full shape. **The credential check is not optional to think about** — without it, a missing
environment variable is invisible until an unrelated `401`:

```ts
import { {Api}Client, ServerEnvironment } from "{package-name}";

export function build{Api}Client(): {Api}Client {
  const token = process.env.API_TOKEN;

  // SET THIS. An unset credential is NOT an SDK error — it sends no credential and 401s later.
  if (!token) throw new Error("API_TOKEN is not set");

  return new {Api}Client({
    serverEnvironment: ServerEnvironment.{Environment},

    // SET THIS. Default 60_000 ms. Bounds ONE request, and there are no retries.
    // See typescript-configuration-resilience > Timeout.
    timeout: 10_000,

    {scheme}: token,
  });
}
```

Both flagged lines are load-bearing and they answer different failures: the credential check turns a
silent `401` into a startup failure, and `timeout` stops a hung provider from holding the caller open
for the full default minute with nothing retrying behind it. Setting only the timeout is the common
mistake — it looks like the configuration box is ticked.

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

There is no fork-safety hazard to design around the way a pooled-socket SDK has: the client owns no
pool. The cost of building one per worker is the token cache, not a corrupt connection.

## ESM and CommonJS

The package ships both dialects from a single entry, so `require` works with full types. In a
TypeScript CommonJS file use the `import … = require(…)` form — a destructuring `require` runs fine
but gives you `any`:

```ts
import sdk = require("{package-name}");

const client = new sdk.{Api}Client({ serverEnvironment: sdk.ServerEnvironment.{Environment} });
```

⚠ **A process that loads both dialects gets two independent copies of every class**, including every
error class, and `instanceof` across that boundary is `false`. It is a real hazard in a mixed
codebase, and it fails silently — a `catch` arm simply never matches. Pick one dialect per process
where you can; where you cannot, narrow on `err.kind` or `err.payload.kind` instead of `instanceof`.
See **typescript-error-handling**.

Two consumer compiler settings change what you type at the construction site. Under
`exactOptionalPropertyTypes`, **omit or spread** an absent option rather than assigning `undefined` to
it. Under `verbatimModuleSyntax`, names that carry no runtime value — `ClientOptions` and every model
type — must be imported with `import type`; `{Api}Client` and `ServerEnvironment` are real values and
are imported normally.

## Inbound webhooks — what the emitted package does and does not give you

**There is no webhook surface at all** — no webhook tree, no event parser, no signature verifier, on
any generated TypeScript SDK. Nothing under `src/core/` computes any part of an inbound webhook for
you, and no member of `ClientOptions` turns one on.

So verifying an inbound webhook is entirely yours to write, against the provider's published scheme:
capture the raw body before any JSON parsing, compute the signature yourself, and compare in constant
time. The SDK's model types stay useful for *deserializing* an event body once you have verified it —
but do not read "the SDK parses this" as "the SDK verified this". See **typescript-models**.

Testing is a different matter and needs no shipped helpers — inject a fake `fetch`; see
**typescript-testing**.

> **Not settled by the generator's current version.** The transport carries default header, query and
> path-parameter channels that the generated client currently wires as empty arrays — a source comment
> says nothing in the spec reaches them *yet*. If a later version starts populating them, a
> client-wide header option could appear on `ClientOptions`, so read `src/client-options.ts` rather
> than assuming the option list above is complete for your SDK.

## Next

- Configure authentication → **typescript-authentication**
- Make your first call → **typescript-calling-endpoints**
- Tune timeouts, retries, logging, base URL → **typescript-configuration-resilience**
