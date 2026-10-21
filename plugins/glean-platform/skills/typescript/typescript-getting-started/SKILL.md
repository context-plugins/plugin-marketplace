---
name: "typescript-getting-started"
description: "Load before answering any Glean Platform API TypeScript SDK question or writing SDK code — the lookup layer for `glean-platform-api`: install, imports, environments, auth, and how to read the SDK map that ships in the package (`sdk-map.md`, `map/operations/`). TypeScript/JavaScript only."
---

# Getting started with the Glean Platform API TypeScript SDK

> **The lookup layer** for Glean Platform API TypeScript SDK code: ground every contract fact here — in the SDK map and the source files it names — never in recall, and carry those facts onto a contract sheet before you implement. `typescript-integrate-glean-platform-api` holds the workflow around it.

This page is authoritative for the SDK's identity and surface. The API-agnostic companion skills — `typescript-client-initialization`, `typescript-authentication`, `typescript-calling-endpoints`, `typescript-models`, `typescript-error-handling`, `typescript-configuration-resilience` and `typescript-testing` — are the *usage layer* on top: the way to call each piece and the gotchas a signature cannot show. **Load both:** at each **Integration workflow** step, load the companion it names even after reading the file it covers, and confirm names against the installed package.

## SDK identity

Verified against `package.json` and `sdk-map.md` of the package at version `0.1.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Glean Platform API |
| Package name (what you install, and what you import) | `glean-platform-api` — **not on npm**; it ships in this plugin (see *Install*) |
| SDK source | `sdk/typescript/` inside this plugin — nothing to clone |
| Version | `0.1.0` (API spec version `2026-04-01`) |
| Client class | `GleanPlatformApiClient` (`src/client.ts`) |
| Options type | `ClientOptions` (`src/client-options.ts`) |
| Client construction | `new GleanPlatformApiClient(options: ClientOptions = {})` — the argument is optional, as is **every** field on it, so `new GleanPlatformApiClient()` compiles. Fields: `serverOptions` · `retry` · `fetch` · `apiToken`. `retry` is the `RetryOptions` policy |
| Auth | **Bearer token** — set `ClientOptions.apiToken` |
| Environments | no selector — one environment; 1 server group |
| Base-URL config | `serverOptions.baseUrl` (`src/servers.ts`), defaulting to `https://{instance}-be.glean.com` |
| Log environment variable | `GLEAN_PLATFORM_API_CLIENT_LOG` |
| Node floor | `>=20.3` (`engines.node`) |
| Runtime dependency | `zod` (`^4.1.0`) — the only one |
| Module format | dual ESM + CommonJS folder dialects (`dist/esm`, `dist/commonjs`) behind one export |
| Typing | the package ships its own `.d.ts` — **a type error against this SDK is a real contract violation, not noise** |
| Surface | 55 operations · 11 resources · 232 models · 76 open enums · 18 unions · 55 per-operation error subclasses |

## Install

Install the package from the copy that ships inside this plugin, at `sdk/typescript/` relative to the plugin root (the directory holding `skills/`), as it is not published to npm:

```bash
npm --prefix <plugin-root>/sdk/typescript/ install
npm --prefix <plugin-root>/sdk/typescript/ run build
npm install <plugin-root>/sdk/typescript/
```

**That dependency is local to this machine.** `npm install <directory>` records the package in `package.json` and the lockfile as a `file:` path from your project into this plugin's install directory, and links it in `node_modules` to that directory, so the project installs only where this plugin is installed at that path — a teammate needs the plugin installed and all three commands run against their copy, which ships unbuilt and without its dependencies, and a CI runner without the plugin cannot install it. Say so when you hand the work over. A plugin reinstalled or updated somewhere else replaces that directory, so run all three commands again against the new copy.

The installed package carries everything its `files` list packs — `src/`, `sdk-map.md` and the pages under `map/operations/` — so **every lookup on this page works as soon as the install finishes**. The copy ships as source, not pre-built, which is why the commands build it where it sits before installing it.

Do not vendor its `src/` into your project, point `tsconfig` `paths` at a throwaway clone, or import from `dist/` directly: the `exports` map, the shipped `.d.ts` chain, the dual-dialect resolution and the SDK map in `node_modules` all depend on a real install.

## Imports — one entry, and only one

**Every** public name is re-exported from the package root — the client, `ClientOptions`, 326 model types with the schema value beside each, the error classes, and the runtime types (`ApiPromise`, `ApiResult`, `RequestOptions`, `RetryOptions`, `RequestRetryOptions`, `Declared`, `Undeclared`, `Schema`, `EnumSchema`, `Encoded`).

```ts
import { GleanPlatformApiClient, ApiError, GleanPlatformApiError } from "glean-platform-api";
import type { ClientOptions, ApiChatRequest } from "glean-platform-api";
```

Things the specifier alone will not tell you:

- **Deep imports do not resolve.** The `exports` map exposes `.` and `./package.json` and nothing else, so `glean-platform-api/models/…` fails (`TS2307`) even though the file exists in the shipped `src/`. Every `Source` path on the SDK map is where to **read** a shape, never what to import.
- **From CommonJS**, the typed spelling is `import sdk = require("glean-platform-api")`. A plain `require` destructure runs but yields `any`. A process that loads both dialects gets two copies of every error class, so `instanceof` fails across them (`typescript-error-handling`).

Under `verbatimModuleSyntax`, names carrying no runtime value (`ClientOptions`, every model type) must be imported with `import type`. Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional field rather than assigning `undefined` to it.

## Hosts

This SDK has one environment and so **no environment selector** — there is no `ServerEnvironment` type and no field to set (`src/servers.ts`). The base URL of every server group, the only hosts the SDK knows, is in `sdk-map.md` § *Servers & auth*; reaching any other is a `serverOptions` base-URL override — `serverOptions: { baseUrl: "…" }` — and nothing in the options then records **which** deployment that is, so make the intent explicit where the client is built.

Consequences to state on every contract sheet that touches configuration:

- An override merges with the built-in default **key by key**; a `baseUrl` override replaces the whole template.
- Each operation belongs to one server group; a map block carries a **Server** bullet only when its group is not `default`.

## Auth pattern (1 scheme)

Authentication is **per operation**: every operation declares the requirement it enforces and the SDK sends exactly that. Each block on a map page carries an **Auth** bullet, `none` included. There is no client-global switch and no per-call override. 55 of the 55 operations require a credential and 0 are public.

| `ClientOptions` field | Scheme kind | What the SDK sends |
| --- | --- | --- |
| `apiToken` | Bearer token | `Authorization: Bearer <token>` |

```ts
const client = new GleanPlatformApiClient({
  apiToken: process.env.API_TOKEN!,
});
```

**Every credential field is optional.** Omit one and the request goes out without it, with no error at construction; the server answers `401`, or `200` if it serves anonymous traffic. On an unexpected `401`, check the operation's **Auth** bullet against the fields you set.

Credential functions, scheme composition, 401 invalidation: `sdk-map.md` § *Servers & auth* and `typescript-authentication`.

## Resources

Resources are **memoized lazy getters** on the client (`client.<attr>`); reach one only through its getter. Its class is exported for its merged namespace — the per-operation request and error types — and for `instanceof`, not for construction.

11 resources: `sdk-map.md` § *Operations — by resource* names every operation, with the page that documents it.

Every operation has the same call shape — `op(request, options?)`, one **flat, channel-blind** request object first and `RequestOptions` (`{ signal, retry, logging }`) second — and returns `ApiPromise<T, E>`.

⚠ **The request type name is not uniformly `<Operation>Request`.** 3 operations take `<Operation>RequestParams` instead: `platformAgentsSearch`, `platformChatCreate`, `platformSearch`. Take the name from the operation's **Signature** bullet on its map page; never construct it from the method name.

## SDK map — look up first, open the file second

The map sits at the package root, the directory holding `package.json` and the `src/` tree:

- **`sdk-map.md`** — the index: client construction with the full `ClientOptions` table, the *Not on this SDK* table, the one error family with `ApiResult` and `.asApiResult()`, wire serialization for every channel, servers and auth, runtime and packaging, and the link table into the operations pages.
- **`map/operations/<resource>.md`** — one page per resource, one `###` block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire** (verb and route), **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms** — then a **Fields** table giving every request field its channel, wire name, type, required flag and default, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions.

Locate the installed package before you rely on a lookup:

```bash
node -e "console.log(require.resolve('glean-platform-api/package.json'))"
```

Failing that it is at `node_modules/glean-platform-api/`. **If the resolve fails, or the directory it prints carries no `sdk-map.md`, the map is still in the SDK source this plugin ships** — at `sdk/typescript/`. That is the directory you installed from. Read it there, and if neither route yields a map, mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory.

Every `Source` path on the map is relative to that package root (`node_modules/glean-platform-api/`). An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

**Read `sdk-map.md` before any `map/operations/` page.** It states what holds for every operation, and **silence means the default**: a block departs from it only by saying so, so take the default rather than opening the source to confirm it.

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted header actually selects — the map will not settle it. Read that operation's entry in `api-reference.md` at the package root, keyed by the same signature, *before* writing the sheet row, and record what you found. A value you already "know" for a field the map types as a plain `string` is a lookup, not a recall — the memory ban applies to it.

## Contract facts — the map first, then the source file

**The map is the locator; the source files are the shapes.** These are map lookups — don't open a source file for them: an operation's signature and route; its request fields with channel, wire name, required flag and default; its return type; its error subclass and the arms with the status each covers; the `ClientOptions` fields and their defaults; the environments, base URLs and auth wiring; and which file declares a type.

Open the one file the map's **Type sources** table names — never derive the path from the type name — for what the map does not carry: a model's members and whether each is required, optional or nullable, and an enum's members with their wire values — the `as const` object in the enum's own file (for an enum inside a model, the file the model imports it from). The table below covers that, everything else, and the full body behind a map row. Paths are relative to `node_modules/glean-platform-api/`:

| Question | File |
| --- | --- |
| A model's members, required (`f: T`) vs optional (`f?: T`) vs required-nullable (`f: T \| null`) | `src/models/<file the Type sources table names>.ts` |
| The operation method body and the request it builds | `src/resources/<resource>.ts` |
| The per-operation request and error types (merged namespace) | the `export namespace <Resource>` block at the foot of the same file |
| Client construction, resource getters | `src/client.ts` |
| `ClientOptions` fields | `src/client-options.ts` |
| Environments, base URLs, override merging | `src/servers.ts` |
| Auth scheme wiring, token endpoint, credential placement | `src/auth-schemes.ts`, `src/core/auth/credentials.ts`, `src/core/auth/oauth2-strategies.ts` |
| The transport: the attempt loop, `fetch` resolution, 401 invalidation, 2xx-vs-error split | `src/core/raw-client.ts` |
| Error classes and `ErrorKind` | `src/core/errors.ts`, `src/core/api-error.ts` |
| `ApiPromise`, `ApiResult`, `.asApiResult()`, the `Symbol.species` behaviour | `src/core/api-promise.ts` |
| `RequestOptions` (it is `{ signal, retry, logging }` and nothing else) | `src/core/api-request.ts` |
| `RetryOptions` and its defaults, `RequestRetryOptions`, backoff, `Retry-After`, `RetryAttempt` | `src/core/retry.ts` |
| `LoggingOptions` and its defaults (`defaultLoggingOptions`), `RequestLoggingOptions`, `Logger`, `LogDetails` | `src/core/logging.ts` |
| Schema decode/encode, `SchemaError`, `Encoded<T>` | `src/core/validation/schema-error.ts` and its directory |
| Wire serialization per channel | `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts` |
| What an operation *means* — field semantics, coupling rules | `api-reference.md` at the package root |

**Read scoped.** Search for the one symbol and read the lines around it rather than whole files, and never copy a design comment's rationale onto a contract sheet — the sheet carries facts an implementer must obey, not the reasoning behind them.

Keep lookups cheap — the rules that keep a session's context small:

- Collect the contracts for **every** in-scope operation in **one** pass — signature, request fields with channels and defaults, required members, the error arms, enum values — into a short **contract sheet** in your plan, then implement from the sheet. Don't re-open a map page per field, and never re-look-up a fact the sheet already carries.
- Recurse into a model's members only where the task actually sets them — a full transitive expansion is hundreds of rows nobody needs.
- **Never grep, glob or `find` the package to *locate* a type** — the map is the locator, and it says so. Grep only *inside* the file its **Type sources** table names, for the symbol. A sweep for a cross-cutting *shape* is a different question and is fine: "every field typed `unknown`", "every required-nullable member" are things nothing indexes, and one targeted `grep -rn` over `src/models/` is the right tool — record what it found on the sheet.
- Trust the compiler over this page: if a name here ever fails to type-check, re-read the file the table above names and report the drift; never patch around it from memory.

## Sensitive data — check the request models before you log anything

Whether this API's **request** models carry fields you must never log — card or bank numbers, personal data, message content — is a shape question: each request model's declaring file (the map's **Type sources** table names it) lists every field. If the scope touches such a field: `logRequestBody` stays off, because it logs a JSON request body **verbatim** and masks a form body only by deny-list; no call on those paths passes a per-call `RequestOptions.logging` level, which turns the request body on for that call whatever the client set; `ClientOptions.logging.level` is set explicitly in production, because without a `logger` or a `level` the `GLEAN_PLATFORM_API_CLIENT_LOG` environment variable turns logging and both header switches on with no code change; and your own diagnostics never echo a request body on those paths (`typescript-configuration-resilience` has the details).

The SDK never logs a response body, but your own code may. Responses are often safer — many APIs return masked variants of what requests carry raw — but that too is a model-shape fact: check the response model's file before assuming.

## Integration workflow — load the companion skill at each step

Before you write the code for each step, load the named companion skill — even if you have already read the relevant file. A typical integration reaches them in this order:

1. **Client construction & lifetime** — load **typescript-client-initialization** before you write `new GleanPlatformApiClient(…)`. The client is **long-lived and app-scoped**, never rebuilt per request, because the resource getters live on it.
2. **Authentication** — load **typescript-authentication** before you set credentials. The scheme is `apiToken` on `ClientOptions`. Load secrets from the environment or a secret store, never hardcode.
3. **Calling an endpoint** — load **typescript-calling-endpoints** before the first `client.<resource>.<operation>(…)` call. (*For the event streams:* an operation that resolves to an `EventStream` hands back an **unread** stream whose `for await` loop yields one event's decoded `data` per step, and holds its connection until the loop ends or `close()` is called — load **typescript-event-streams** before you write the loop.)
4. **Models** — load **typescript-models** the moment a request/response member is not a plain string or number.
5. **Error handling** — load **typescript-error-handling** before you write any `try/catch`. Every operational failure is **one family**, `GleanPlatformApiError`, narrowed on `err.kind`.
6. **Configuration & resilience** — load **typescript-configuration-resilience** when you set the base URL, timeouts, retries, proxies, TLS, or logging.
7. **Testing** — load **typescript-testing** before you stub the SDK. The seam is **`ClientOptions.fetch`**.

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a contract sheet for the Glean Platform API TypeScript SDK is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone.

1. **Which host each deployment talks to**, and where that is set. Any host but the one this SDK knows is a `serverOptions` base-URL override (see *Hosts*) — give the override path on the sheet.
2. **2 operations resolve to `undefined` (`skills.platformSkillsDelete`, `triggers.platformTriggersDelete`)** — `await` gives you nothing to inspect, so **`.asApiResult()` is the only way to observe their status and headers** — decide the mode at write time, not by retrofit.
3. **2 operations resolve to an `EventStream`** (`chat.platformChatCreateStream`, `skills.platformSkillsPreviewSourceStream`) — the call resolves at the response headers with nothing read; each step of the loop is one event's decoded `data`, and the loop's own failures are `DecodeError`, `ConnectionError` and `TimeoutError`, the same family the call raises — load **typescript-event-streams**.
4. **The exact request type name per operation**, taken from the **Signature** bullet — 3 operations take `<Operation>RequestParams`, not `<Operation>Request`.
5. **Every request field with its channel, wire name and default**, because the request object is flat and channel-blind and the SDK fans fields out. An omitted field that has a default is still sent with that default, so a defaulted header shapes the response whether or not the sheet mentions it. Every non-GET operation sends an `Idempotency-Key` header, minted once per call and invisible to you, unless it takes that header as a request field — `typescript-configuration-resilience` has what that key does and does not deduplicate. Any caller-supplied idempotency or request-id field is the only idempotency that spans calls, and `RequestOptions` is `{ signal, retry, logging }` only.
6. **Required vs optional vs required-nullable** for every model member the task sets — `f: T` required, `f?: T` omit the key, `f: T | null` required and nullable.
7. **The error arms for each operation in scope, with the status each covers — and the warning that arm tags are schema-derived, not status codes.** Every operation rejects with its own `ApiError` subclass narrowed on `err.payload.kind`. A tag comes from the arm's body schema and is resolved per operation, so the same tag means different statuses on different operations, and a shared helper that switches on `kind` across operations is a bug — `typescript-error-handling` has the naming rule, the always-present `"undeclared"` arm and the matcher precedence. 55 of 55 operations declare typed error bodies; the rest reject with the base `ApiError`.
8. **That a malformed or drifted 2xx body rejects with `DecodeError`, not `ApiError`, in both response modes** — and the members the implementer has to assert on, because a thin or truncated body decodes without complaint.
9. **The retry policy this integration needs.** Retrying is on by default — `ClientOptions.retry` sets it for the client and `RequestOptions.retry` overrides it per call — so the sheet says whether the defaults fit, which writes (if any) join `httpMethodsToRetry`, since a write is repeated only when the policy names its method, and the per-attempt timeout.
10. **The logging this integration needs.** Logging is off by default — `ClientOptions.logging` sets it for the client and `RequestOptions.logging` sets one call's level — so the sheet says whether it stays off and, where it is on, the level, the logger, and whether headers and the request body are logged (**Sensitive data**, above).
11. **That the SDK performs no pagination, and streams only through the `EventStream` operations above**, and that `ClientOptions.fetch` is the one seam where pagination or any other streaming can be added — so whatever the task needs beyond those operations is yours to build or deliberately omit. Say which.
12. A **REQUIRED READING** block naming the `typescript-*` companions that govern the steps, with inline `MUST load` pointers.

