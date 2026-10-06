---
name: "typescript-getting-started"
description: "Deepgram TypeScript SDK identity and lookup layer (TypeScript/JavaScript only) — install, the single import specifier `deepgram`, the server environments and the base-URL knob, the auth pattern, the SDK map that ships inside the installed package (`sdk-map.md` + `map/operations/`) and how to traverse it, and the file table naming the one source file owning each fact the map leaves to the source. Load this before answering any Deepgram TypeScript SDK contract question or writing any SDK code."
---

# Getting started with the Deepgram TypeScript SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Deepgram TypeScript SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source files it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `typescript-integrate-deepgram` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated TypeScript SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `typescript-client-initialization`, `typescript-authentication`, `typescript-calling-endpoints`, `typescript-models`, `typescript-error-handling`, `typescript-configuration-resilience` and `typescript-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the resources, which file owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a file in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `package.json` and `sdk-map.md` of the generated package at version `1.0.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Deepgram |
| Package name (what you install, and what you import) | `deepgram` — **not on npm**; built from source (see *Install*) |
| Import specifier | `deepgram` — the package root is the **only** entry; deep imports do not resolve |
| Source repository | https://github.com/context-plugins/deepgram-typescript-sdk (branch `main` — the ref this map documents) |
| Version | `1.0.0` (API spec version `1.0.0`) |
| Client class | `DeepgramClient` (`src/client.ts`) — one class, no sync/async split |
| Options type | `ClientOptions` (`src/client-options.ts`) — types only, no resolver beside it |
| Client construction | `new DeepgramClient(options: ClientOptions = {})` — the argument is optional, as is **every** field on it, so `new DeepgramClient()` compiles. Fields: `serverEnvironment` · `serverOptions` · `retry` · `fetch` · `apiKeyAuth` · `jwtAuth`. `retry` is the `RetryOptions` policy; its defaults retry a GET, HEAD, PUT or OPTIONS call up to `3` times and bound each attempt by `retry.timeout` = `60_000` ms, and every one of them can be changed |
| Auth | **API key (header)** — set `ClientOptions.apiKeyAuth`<br>**Bearer token** — set `ClientOptions.jwtAuth` |
| Environments | 2 environments (`ServerEnvironment.Production` *(default)*, `ServerEnvironment.Environment2`) × 1 server group |
| Base-URL config | `serverOptions.baseUrl` (`src/servers.ts`), defaulting to `https://agent.deepgram.com` |
| Node floor | `>=20.3` (`engines.node`) |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini` — the only one |
| Module format | dual ESM + CommonJS folder dialects (`dist/esm`, `dist/commonjs`) behind one export |
| Typing | the package ships its own `.d.ts` and is generated under strict TypeScript. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Surface | 50 operations · 24 resources · 139 models · 73 open enums · 32 unions · 50 per-operation error subclasses |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import specifier, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install

Install the package straight from the repository the plugin records for it, as it is not published to npm:

```bash
npm install git+https://github.com/context-plugins/deepgram-typescript-sdk#main
```

The installed package carries everything its `files` list packs — `src/`, `sdk-map.md` and the pages under `map/operations/` — so **every lookup on this page works as soon as the install finishes**. **Make sure the installed package is built**, as the source on GitHub is not pre-built.

Do not vendor its `src/` into your project, point `tsconfig` `paths` at a throwaway clone, or import from `dist/` directly. Installing the package properly is what makes the `exports` map, the shipped `.d.ts` chain and the dual-dialect resolution behave the way the SDK expects — **and it is what puts the SDK map inside `node_modules`, which is where every lookup below reads it from**. Requires Node `>=20.3` (`engines.node`).

## Imports — one entry, and only one

**Every** public name is re-exported from the package root — the client, `ClientOptions`, `ServerEnvironment`, 244 model types with the schema value beside each, the error classes, and the runtime types (`ApiPromise`, `ApiResult`, `RequestOptions`, `RetryOptions`, `RequestRetryOptions`, `ErrorPayload`, `Declared`, `Schema`, `EnumSchema`, `Encoded`).

```ts
import { DeepgramClient, ServerEnvironment, ApiError, DeepgramError } from "deepgram";
import type { ClientOptions, AgentConfigurationV1 } from "deepgram";
```

Things the specifier alone will not tell you:

- **Deep imports do not resolve.** The `exports` map exposes `.` and `./package.json` and nothing else, so `deepgram/models/…` fails (`TS2307`) even though the file exists in the shipped `src/`. Every `Source` path on the SDK map is where to **read** a shape, never what to import.
- **From CommonJS**, the typed spelling is `import sdk = require("deepgram")`. A plain `require` destructure runs but yields `any`.
- **`instanceof` is reliable within one dialect.** A process that loads both (`import` in one file, `require` in another) gets two independent copies of every error class, and `instanceof` across that boundary is `false` — narrow on `err.kind` / `err.payload.kind` / `err.name` there.

Under `verbatimModuleSyntax`, names carrying no runtime value (`ClientOptions`, every model type) must be imported with `import type`. Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional field rather than assigning `undefined` to it.

## Environments

`ClientOptions.serverEnvironment` selects one environment for the whole client (`src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type — not a TypeScript `enum` — and unlike the model enums it is **closed**, so only its declared members are assignable.

| Group | Environment | Base URL | Override at |
| --- | --- | --- | --- |
| `default` | `production` *(default)* | `https://agent.deepgram.com` | `serverOptions.baseUrl` |
| `default` | `environment2` | `https://api.deepgram.com` | `serverOptions.baseUrl` |

Consequences to state on every contract sheet that touches configuration:

- Constructing the client with no options selects **`ServerEnvironment.Production`**, silently.
- An override merges with the built-in default **per group-and-environment pair, key by key**; a `baseUrl` override replaces the template verbatim, template variable values are percent-encoded into it; server variables are filled in once, as the client is built, and only the path parameters expand per request.
- Each operation is bound to one server group at generation time. A map block carries a **Server** bullet only when its group is not `default`.
- An environment value the SDK does not know throws `ConfigurationError` **from the constructor** — every server group is resolved once, as the client is built — so no operation method throws synchronously.

## Auth pattern (2 schemes)

Authentication is **per operation**: every operation declares the requirement it enforces and the SDK sends exactly that. Each block on a map page carries an **Auth** bullet, `none` included. There is no client-global switch and no per-call override. 50 of the 50 operations require a credential and 0 are public.

| `ClientOptions` field | Scheme kind | What the SDK sends |
| --- | --- | --- |
| `apiKeyAuth` | API key (header) | header `Authorization: <key>` |
| `jwtAuth` | Bearer token | `Authorization: Bearer <token>` |

```ts
const client = new DeepgramClient({
  apiKeyAuth: process.env.API_KEY!,
  jwtAuth: process.env.API_TOKEN!,
});
```

**Every credential field is optional at the type level and that is a trap worth flagging on every sheet.** Omit one and nothing fails at construction — the request simply goes out without that credential and the server decides. Most APIs then answer `401`; one that serves anonymous traffic answers `200` and hides the omission entirely. So a `401` on a call you believed was authenticated is usually an unset field rather than an SDK failure; verify the field is set rather than waiting for a `401` to tell you, and check the operation's **Auth** bullet against what the client was actually given.

Three more behaviours the type does not show:

- **A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent; a function counts as present without being invoked.
- **Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives it sends the **first configured** one, in the order the **Auth** bullet prints them.
- **A 401 invalidates the cached credential.** On a 401 (401 only, not 403) the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires; the current request still rejects.

See `typescript-authentication` for the full picture.

## Resources

Resources are **memoized lazy getters** on the client (`client.<attr>`). Their classes are exported only for their merged namespaces — the per-operation request and error types — and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

| Attribute | Class | Ops | Operations |
| --- | --- | --- | --- |
| `client.agentV1SettingsThinkModels` | `AgentV1SettingsThinkModels` | 1 | `list` |
| `client.voiceAgentConfigurations` | `VoiceAgentConfigurations` | 5 | `create` · `delete` · `get` · `list2` · `update` |
| `client.voiceAgentVariables` | `VoiceAgentVariables` | 5 | `create2` · `delete2` · `get2` · `list3` · `update2` |
| `client.listenV1Media` | `ListenV1Media` | 1 | `transcribe` |
| `client.speakV1Audio` | `SpeakV1Audio` | 1 | `generate` |
| `client.readV1Text` | `ReadV1Text` | 1 | `analyze` |
| `client.manageV1Projects` | `ManageV1Projects` | 5 | `delete3` · `get3` · `leave` · `list4` · `update3` |
| `client.manageV1ProjectsModels` | `ManageV1ProjectsModels` | 2 | `get4` · `list5` |
| `client.manageV1Models` | `ManageV1Models` | 2 | `get5` · `list6` |
| `client.manageV1ProjectsKeys` | `ManageV1ProjectsKeys` | 4 | `create3` · `delete4` · `get6` · `list7` |
| `client.manageV1ProjectsMembers` | `ManageV1ProjectsMembers` | 2 | `delete5` · `list8` |
| `client.manageV1ProjectsMembersScopes` | `ManageV1ProjectsMembersScopes` | 2 | `list9` · `update4` |
| `client.manageV1ProjectsMembersInvites` | `ManageV1ProjectsMembersInvites` | 3 | `create4` · `delete6` · `list10` |
| `client.manageV1ProjectsRequests` | `ManageV1ProjectsRequests` | 2 | `get7` · `list11` |
| `client.manageV1ProjectsUsage` | `ManageV1ProjectsUsage` | 1 | `get8` |
| `client.manageV1ProjectsUsageFields` | `ManageV1ProjectsUsageFields` | 1 | `list12` |
| `client.manageV1ProjectsUsageBreakdown` | `ManageV1ProjectsUsageBreakdown` | 1 | `get9` |
| `client.manageV1ProjectsBillingBalances` | `ManageV1ProjectsBillingBalances` | 2 | `get10` · `list13` |
| `client.manageV1ProjectsBillingBreakdown` | `ManageV1ProjectsBillingBreakdown` | 1 | `list14` |
| `client.manageV1ProjectsBillingFields` | `ManageV1ProjectsBillingFields` | 1 | `list15` |
| `client.manageV1ProjectsBillingPurchases` | `ManageV1ProjectsBillingPurchases` | 1 | `list16` |
| `client.selfHostedV1DistributionCredentials` | `SelfHostedV1DistributionCredentials` | 4 | `create5` · `delete7` · `get11` · `list17` |
| `client.authV1Tokens` | `AuthV1Tokens` | 1 | `grant` |
| `client.speakV2Audio` | `SpeakV2Audio` | 1 | `generate2` |

Every operation has the same call shape — `op(request, options?)`, one **flat, channel-blind** request object first and `RequestOptions` (`{ signal, retry }`) second — and returns `ApiPromise<T, E>`.

⚠ **The request type name is not uniformly `<Operation>Request`.** A name that collides inside its namespace is promoted to `<Operation>RequestParams` instead — no operation in this SDK takes that spelling at this version. Take the name from the operation's **Signature** bullet on its map page; never construct it from the method name.

## SDK map — look up first, open the file second

The SDK ships a generated map, and `package.json`'s `files` list includes it, so **installing the package gives you the map** — no clone is needed. It sits at the package root, the directory holding `package.json` and the `src/` tree:

- **`sdk-map.md`** — the index: client construction with the full `ClientOptions` table, the *Not on this SDK* table, the one error family with `ApiResult` and `.asApiResult()`, wire serialization for every channel, **the full enum table with every member and its wire value**, servers and auth, runtime and packaging, and the link table into the operations pages.
- **`map/operations/<resource>.md`** — one page per resource, one `###` block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire** (verb and route), **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms** — then a **Fields** table giving every request field its channel, wire name, type, required flag and default, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions.

Locate the installed package before you rely on a lookup:

```bash
node -e "console.log(require.resolve('deepgram/package.json'))"
```

Failing that it is at `node_modules/deepgram/`. **If the resolve fails, or the directory it prints carries no `sdk-map.md`, the map is still in the SDK's own repository** — <https://github.com/context-plugins/deepgram-typescript-sdk>, branch `main`. A registry id is a claim on a shared index rather than proof of identity, so it can resolve to an unrelated package or to a release predating the map; the repository is the copy that is this SDK by construction. Read it there, and if neither route yields a map, mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory.

Every `Source` path on the map is relative to that package root, so `src/models/<file>.ts` opens as written from there — the package ships its `src/` tree, so the path resolves inside `node_modules/deepgram/` exactly as the map writes it. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

**The map is the locator; the source files are the shapes.** Read the map first — signatures, routes, request fields with their channels and defaults, return types, error arms, enum values, and which file declares a type are all answered there without opening a single `.ts` file. Then open the one file the map names for what it deliberately does not carry: a model's members, whether each is required, optional or nullable. The map says so itself — *"Shapes live only in the source … Do not derive the path from the type name."*

**`sdk-map.md` carries the invariants every operation block assumes, so read it before any `map/operations/` page**; the pages are written to be read beside it. And **silence means the default**: the index states what holds for every operation — the call shape, the flat channel-blind request object, the `ApiPromise<T, E>` return, the default server group, no pagination and no streaming — and a block departs from one only by saying so. Take the default and move on rather than opening the source to confirm it.

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted header actually selects — the map will not settle it. Read that operation's entry in `api-reference.md` at the package root, keyed by the same signature, *before* writing the sheet row, and record what you found. A value you already "know" for a field the map types as a plain `string` is a lookup, not a recall — the memory ban applies to it.

## Contract facts — the map first, then the source file

**Seven of these are map lookups — don't open a source file for them:** an operation's signature; its request fields with channel, wire name, required flag and default; its return type; its error subclass and the arms with the status each covers; the `ClientOptions` fields and their defaults; the environments, base URLs and auth wiring; **and every enum's members with their wire values**, which `sdk-map.md` tabulates in full.

The table below covers everything else, and the full body behind a map row. Paths are relative to `node_modules/deepgram/`:

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
| `RequestOptions` (it is `{ signal, retry }` and nothing else) | `src/core/api-request.ts` |
| `RetryOptions` and its defaults, `RequestRetryOptions`, backoff, `Retry-After`, `RetryAttempt` | `src/core/retry.ts` |
| Schema decode/encode, `SchemaError`, `Encoded<T>` | `src/core/validation/schema-error.ts` and its directory |
| Wire serialization per channel | `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts` |
| What an operation *means* — field semantics, coupling rules | `api-reference.md` at the package root |

**Read scoped.** Search for the one symbol and read the lines around it rather than whole files, and never copy a design comment's rationale onto a contract sheet — the sheet carries facts an implementer must obey, not the reasoning behind them.

Keep lookups cheap — the rules that keep a session's context small:

- Collect the contracts for **every** in-scope operation in **one** pass — signature, request fields with channels and defaults, required members, the error arms, enum values — into a short **contract sheet** in your plan, then implement from the sheet. Don't re-open a map page per field, and never re-look-up a fact the sheet already carries.
- Recurse into a model's members only where the task actually sets them — a full transitive expansion is hundreds of rows nobody needs.
- **Never grep, glob or `find` the package to *locate* a type** — the map is the locator, and it says so. Grep only *inside* the file its **Type sources** table names, for the symbol. A sweep for a cross-cutting *shape* is a different question and is fine: "every field typed `unknown`", "every required-nullable member" are things nothing indexes, and one targeted `grep -rn` over `src/models/` is the right tool — record what it found on the sheet.
- Trust the compiler over this page: if a name here ever fails to type-check, re-read the file the table above names and report the drift; never patch around it from memory.

## Integration workflow — load the companion skill at each step

Before you write the code for each step, load the named companion skill — even if you have already read the relevant file. Each step calls out the trap the signature hides (in *parens*). A typical integration reaches them in this order:

1. **Client construction & lifetime** — load **typescript-client-initialization** before you write `new DeepgramClient(…)`. (*The signature won't tell you:* every option is optional, so a client built with no arguments compiles and talks to the default environment with no credential; the client must be **long-lived and app-scoped**, never rebuilt per request, because the resource getters live on it; there is no `close()` or `dispose()` — it owns no pool, only a `fetch`; and when no `fetch` is reachable the **constructor** throws `ConfigurationError`, not the first call.)
2. **Authentication** — load **typescript-authentication** before you set credentials. The 2 schemes are `apiKeyAuth`, `jwtAuth` on `ClientOptions`. (*The signature won't tell you:* the field is optional — omit it and every request goes out unauthenticated with no failure at construction; and a 401 invalidates the cache without retrying the current call. Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **typescript-calling-endpoints** before the first `client.<resource>.<operation>(…)` call. (*The signature won't tell you:* the request object is **flat and channel-blind** — a field named `body` *is* the whole request body and every other field is fanned out to path, query or header by the SDK, so nothing is nested by channel; **an omitted field that has a default is still sent, with that default**; **no operation resolves to `undefined` — every one of them carries a body**; and `.asApiResult()` must be called on the value the operation returned, because `ApiPromise` overrides `Symbol.species` and `.then()`/`.catch()` hand back a plain `Promise` with the method gone.)
4. **Models** — load **typescript-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* models are plain `type`s built from object literals — no constructor, no builder; `f?: T` means omit the key, while `f: T | null` is **required and nullable** and `null` is a distinct value; enums are **open** (`const` companion plus a union admitting `(string & {})`), so the schema validates the base type only and an unknown server value round-trips instead of throwing — use `.values` to test membership yourself; and every type has a schema companion usable in both directions.)
5. **Error handling** — load **typescript-error-handling** before you write any `try/catch`. (*The signature won't tell you:* every operational failure is **one family**, `DeepgramError`, narrowed on `err.kind` — `"api"` is an API error status, carried by `ApiError` and its per-operation subclasses — while four throwables sit outside it (`ConfigurationError` from the constructor, `SchemaError` from a codec called directly, a `TypeError` for a bug, and a caller abort's own `reason`), so a `catch` that tests the family has to rethrow the rest; **arm tags are schema-derived, not statuses** (see the sheet checklist below); a malformed 2xx body rejects with `DecodeError`, not `ApiError`, and `.asApiResult()` does not convert it; and a missing response field the schema permits is silently `undefined` rather than any error at all.)
6. **Configuration & resilience** — load **typescript-configuration-resilience** when you set the base URL, timeouts, retries, proxies, TLS, or logging. (*The signature won't tell you:* **retrying is on by default** — the default policy retries a GET, HEAD, PUT or OPTIONS call on `408`, `429`, `500`, `502`, `503` and `504` and on a dropped connection or timeout, and every one of those is a `RetryOptions` field you can change; a write is repeated only when `httpMethodsToRetry` names its method; `retry: { maxRetries: 0 }` turns it off, one call overrides it through `RequestOptions.retry`, and a `401` is not retried by default; `retry.timeout` bounds **one attempt**, up to its response headers, not the whole call, and `0` is a zero-length deadline while a value `setTimeout` cannot honour falls back to the default; **there is no logging and there are no hooks, middleware or interceptors** — `ClientOptions.fetch` is the extension point for all of it, `onRetry` being the only built-in callback; and a `fetch` replacement that drops `init.signal` makes both each attempt's timeout and every `RequestOptions.signal` inert.)
7. **Testing** — load **typescript-testing** before you stub the SDK. (*The signature won't tell you:* the seam is **`ClientOptions.fetch`**, not the client class and not the resource classes — whose constructors take unexported engine internals, so they cannot be instantiated in a test; stub bodies in **wire shape** and let the SDK decode them; assert on the request the SDK actually built, headers included; and cover the failure kinds an `ApiError`-only test misses, `DecodeError` above all.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a contract sheet for the Deepgram TypeScript SDK is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone.

1. **Which host each deployment talks to**, and where that is set. The members are `ServerEnvironment.Production`, `ServerEnvironment.Environment2`, defaulting to `ServerEnvironment.Production` when the field is unset.
2. **no operation resolves to `undefined` — every one of them carries a body** — `await` gives you nothing to inspect, so **`.asApiResult()` is the only way to observe their status and headers** — decide the mode at write time, not by retrofit.
3. **The exact request type name per operation**, taken from the **Signature** bullet.
4. **Every request field with its channel, wire name and default**, because the request object is flat and channel-blind and the SDK fans fields out. An omitted field that has a default is still sent with that default, so a defaulted header shapes the response whether or not the sheet mentions it. The generator injects an `Idempotency-Key` on every non-GET operation that does not declare that header itself — minted once per call and invisible to you. Every retry of that call re-sends the **same** key, which is what makes naming a write in `httpMethodsToRetry` safe where the provider deduplicates on it; but the next call mints a new one, so a call your own code repeats is two submissions. Any caller-supplied idempotency or request-id field is the only idempotency that spans calls, and `RequestOptions` is `{ signal, retry }` only.
5. **Required vs optional vs required-nullable** for every model member the task sets — `f: T` required, `f?: T` omit the key, `f: T | null` required and nullable. And that under `exactOptionalPropertyTypes` an absent optional is **omitted or spread**, never assigned `undefined`.
6. **The error arms for each operation in scope, with the status each covers — and the warning that arm tags are schema-derived, not status codes.** Every operation rejects with its own `ApiError` subclass narrowed on `err.payload.kind`, and a tag comes from the arm's **body schema**: an arm whose body is a direct model reference is named after that model in lower camel (`"validationError"`), and every other body — a primitive, an array, a map, or no content — is named `"error{Status}"` (`"error400"`, `"error4XX"`, `"errorDefault"`), with a numeric suffix on the second of two arms that would otherwise land on the same name. The same tag means different statuses on different operations, and the same status carries different tags — so a tag is only meaningful beside the arm table it came from, and a shared helper that switches on `kind` across operations is a bug. 50 of 50 operations declare typed error bodies; the rest reject with the base `ApiError`. Every operation also carries an always-present `"undeclared"` arm holding `rawBody: ArrayBuffer`, for which **matcher precedence** matters: an exact numeric status is looked up across the whole table first, then the first covering range, and last a `"default"` arm where the spec declared one — whose body, if it does not fit, falls to `"undeclared"` rather than throwing.
7. **That a malformed or drifted 2xx body rejects with `DecodeError`, not `ApiError`, in both response modes** — `.asApiResult()` converts an HTTP error status, never any other failure. Any sheet row for a call whose result is used must name the members the implementer has to assert on, because a thin or truncated body decodes without complaint and the hole surfaces later.
8. **The retry policy this integration needs.** Retrying is on by default — `ClientOptions.retry` sets it for the client and `RequestOptions.retry` overrides it per call — so the sheet says whether the defaults fit, which writes (if any) join `httpMethodsToRetry`, since a write is repeated only when the policy names its method, and the per-attempt timeout.
9. **That the SDK performs no logging, no pagination and no streaming at all**, and that `ClientOptions.fetch` is the one seam where any of it can be added — so whatever the task needs there is yours to build or deliberately omit. Say which.
10. A **REQUIRED READING** block naming the `typescript-*` companions that govern the steps, with inline `MUST load` pointers.

