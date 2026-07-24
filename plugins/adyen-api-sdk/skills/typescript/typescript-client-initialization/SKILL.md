---
name: typescript-client-initialization
description: Construct and configure an APIMatic-generated TypeScript/Node SDK client — `new Client(config?: Partial<Configuration>)` takes a single options object (environment, credential objects, and a nested `httpClientOptions` for timeout/retries/proxy/agents), with static `Client.fromEnvironment(...)` / `Client.fromJsonConfig(...)` factories, a `client.withConfiguration(...)` clone, and controllers you instantiate yourself with `new {Resource}Controller(client)`. Use the moment you call `new Client(...)`, build its `Configuration`, pick an `Environment`, or wire the client into your app — load it even after reading the constructor in the source, since the signature shows the arguments but not the options-object shape, the instantiate-the-controller-yourself rule, or the reuse-one-client lifetime guidance.
---

# Initializing an APIMatic-generated TypeScript SDK client

This applies to **any** APIMatic-generated TypeScript SDK (APIMATIC v3.0). Replace placeholders with the
real names from the SDK you are using:

- `adyen-apilib` — the npm package name (the `"name"` in `package.json`, e.g. `multiauth-samplelib`).
- `{Resource}Controller` — a controller class exported from the package root.

## The shape: one options object, no builder

The SDK exports a single `Client` class. You construct it with **one options object**, a
`Partial<Configuration>` — every field is optional and missing fields fall back to `DEFAULT_CONFIGURATION`:

```ts
import { Client, Environment } from 'adyen-apilib';

const client = new Client({
  environment: Environment.Production,
  // auth credential objects — see typescript-authentication
  timeout: 30000,                  // ms; 0 = no timeout (the default)
  httpClientOptions: {             // retries, proxy, agents — see typescript-configuration-resilience
    // ...
  },
});
```

There is **no** separate options class or builder — the `Configuration` interface *is* the constructor
argument. Open `src/configuration.ts` for the exact field set; it varies per API but always includes
`timeout`, `environment`, `httpClientOptions`, plus the credential objects for the schemes the API uses
(and any server parameters such as `port`). `src/defaultConfiguration.ts` holds `DEFAULT_CONFIGURATION`
(the field defaults) and `DEFAULT_RETRY_CONFIG`.

## Choosing the environment / base URL

Environments are members of an `enum Environment` in `src/configuration.ts` (e.g. `Environment.Production`,
`Environment.Testing`). The base URL is **derived** from the selected environment (plus any server
parameters like `port`) by a private resolver in `src/client.ts` — there is no free-form `baseUrl`
option. The default environment is whatever `DEFAULT_CONFIGURATION.environment` sets (often
`Environment.Testing`).

```ts
const client = new Client({ environment: Environment.Production });
```

Some SDKs expose server parameters (e.g. `port`, or a template variable) as their own `Configuration`
fields that feed the base-URL template. To point the SDK at a mock or proxy that the `Environment`
members don't cover, see **typescript-configuration-resilience** and **typescript-testing**. Inspect the
`getBaseUri`/base-URL function in `src/client.ts` for the exact environments and server parameters.

## Custom HTTP options — timeout, proxy, agents, retries

Transport tuning lives under the nested `httpClientOptions` (a `Partial<HttpClientOptions>`). The common
fields (confirm in `doc/http-client-options.md`):

| Field | Type | Purpose |
| --- | --- | --- |
| `timeout` | `number` | per-request timeout in **milliseconds** (overrides the top-level `timeout`) |
| `retryConfig` | `Partial<RetryConfiguration>` | retry policy — **off by default**; see typescript-configuration-resilience |
| `proxySettings` | `ProxySettings` | route requests through a proxy |
| `httpAgent` / `httpsAgent` | `any` | custom Node http(s) agents (keep-alive, TLS) |

```ts
const client = new Client({
  httpClientOptions: {
    timeout: 30000,
    retryConfig: { maxNumberOfRetries: 3, backoffFactor: 2 },
  },
});
```

There is also an escape hatch, `unstable_httpClientOptions` (`any`), passed straight to the underlying
axios adapter — and it is the seam for injecting a fake client in tests (see **typescript-testing**).

## Configuration from environment variables / JSON

Two static factories build a client without writing the options object by hand:

```ts
const client = Client.fromEnvironment();            // reads process.env (or pass an object)
const client = Client.fromJsonConfig(jsonString);   // parses + validates a JSON config string
```

`fromEnvironment` reads a fixed set of `UPPER_SNAKE` variables (e.g. `TIMEOUT`, `ENVIRONMENT`,
`BASIC_AUTH_USERNAME`/`BASIC_AUTH_PASSWORD`, `O_AUTH_CCG_O_AUTH_CLIENT_ID`, retry/proxy vars). The exact
names are in `Configuration.fromEnvironment` in `src/configuration.ts` — grep it; both factories run the
config through schema validation and **throw** on invalid input. (In Node, load a `.env` with `dotenv`
first.)

## Accessing controllers — you instantiate them

Unlike some SDKs, the `Client` exposes **no controller accessor methods**. You construct each controller
yourself, passing the client, then call operations on it (see **typescript-calling-endpoints**):

```ts
import { {Resource}Controller } from 'adyen-apilib';

const controller = new {Resource}Controller(client);
const response = await controller.{operation}(/* params */);
```

OAuth grant types are the exception: OAuth-using SDKs expose ready-made manager objects on the client
(e.g. `client.oAuthCCGManager`, `client.oAuthACGManager`) used to fetch/refresh tokens — see
**typescript-authentication**. Grep `src/client.ts` for any such public properties.

## Client lifetime and reuse

`Client` stores a `Readonly<Configuration>` and builds its request-builder factory **once** in the
constructor — treat the client as **immutable and long-lived**. Construct it once at startup and reuse it
for the process lifetime; do **not** build a new client per request (that discards connection pooling and
any cached OAuth token). Controllers are cheap, stateless wrappers over the client — instantiate freely.

```ts
// startup — construct once:
export const apiClient = new Client({ environment: Environment.Production /* + auth */ });

// elsewhere — reuse, wrap in a controller per call site as needed:
const controller = new {Resource}Controller(apiClient);
```

To produce a variant with a few options changed (e.g. attach a fetched OAuth token), call
`client.withConfiguration({ ... })` — it returns a **new** `Client` merged over the current config rather
than mutating the original.

## Dependency injection

TypeScript/Node has no single DI standard. Export the constructed client as a module singleton (above), or
provide it through your DI container of choice (NestJS provider, InversifyJS binding, a factory function)
with a single provider that constructs the client once. Inject the `Client` (or a narrow interface of your
own over the controllers you use) rather than constructing inside consumers.

## Next

- Configure authentication → **typescript-authentication**
- Make your first call → **typescript-calling-endpoints**
- Tune retries/timeouts/proxy → **typescript-configuration-resilience**
