---
name: "typescript-getting-started"
description: "Verizon TypeScript SDK identity and lookup layer (TypeScript/JavaScript only) — install, the single import specifier `verizon`, the server environments and the base-URL knob, the auth pattern, the SDK map that ships inside the installed package (`sdk-map.md` + `map/operations/`) and how to traverse it, and the file table naming the one source file owning each fact the map leaves to the source. Load this before answering any Verizon TypeScript SDK contract question or writing any SDK code."
---

# Getting started with the Verizon TypeScript SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Verizon TypeScript SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source files it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `typescript-integrate-verizon` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated TypeScript SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `typescript-client-initialization`, `typescript-authentication`, `typescript-calling-endpoints`, `typescript-models`, `typescript-error-handling`, `typescript-configuration-resilience` and `typescript-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the resources, which file owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a file in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `package.json` and `sdk-map.md` of the generated package at version `v1.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Verizon |
| Package name (what you install, and what you import) | `verizon` — **not on npm**; built from source (see *Install*) |
| Import specifier | `verizon` — the package root is the **only** entry; deep imports do not resolve |
| Version | `v1.0` (API spec version `v1.0`) |
| Client class | `VerizonClient` (`src/client.ts`) — one class, no sync/async split |
| Options type | `ClientOptions`, with `DEFAULT_CLIENT_OPTIONS` beside it (`src/client-options.ts`) |
| Client construction | `new VerizonClient(clientOptions: Partial<ClientOptions> = {})` — **every** field is optional, so `new VerizonClient()` compiles. Fields: `serverEnvironment` · `serverOptions` · `timeout` · `fetch` · `thingspaceOauth` · `thingspaceOauthStrategy` · `vzM2MToken` · `sessionToken` · `thingspaceOauth1` · `thingspaceOauth1Strategy`. `timeout` defaults to `60_000` ms |
| Auth | **OAuth 2 client credentials** — set `ClientOptions.thingspaceOauth`<br>**API key (header)** — set `ClientOptions.vzM2MToken`<br>**API key (header)** — set `ClientOptions.sessionToken`<br>**OAuth 2 client credentials** — set `ClientOptions.thingspaceOauth1` |
| Environments | 5 environments (`ServerEnvironment.Production` *(default)*, `ServerEnvironment.Staging`, `ServerEnvironment.Dev`, `ServerEnvironment.Qa`, `ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart`) × 15 server groups |
| Base-URL config | `serverOptions.<group>.<environment>.baseUrl` (`src/servers.ts`) |
| Node floor | `>=20` (`engines.node`) |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini` — the only one |
| Module format | dual ESM + CommonJS folder dialects (`dist/esm`, `dist/commonjs`) behind one export |
| Typing | the package ships its own `.d.ts` and is generated under strict TypeScript. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Surface | 314 operations · 88 resources · 781 models · 61 open enums · 50 unions · 293 per-operation error subclasses |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import specifier, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install

This SDK is not published to npm, so the install comes straight from the repository the plugin records for it:

```bash
npm install git+https://github.com/context-plugins/verizon-typescript-sdk#main
```

That fetches everything the package's `files` list packs — `src/`, `sdk-map.md` and the pages under `map/operations/` — so **every lookup on this page works as soon as the install finishes**. **Make sure the installed package is built**, as the source on GitHub is not pre-built.

Do not vendor its `src/` into your project, point `tsconfig` `paths` at a throwaway clone, or import from `dist/` directly. Installing the package properly is what makes the `exports` map, the shipped `.d.ts` chain and the dual-dialect resolution behave the way the SDK expects — **and it is what puts the SDK map inside `node_modules`, which is where every lookup below reads it from**. Requires Node `>=20` (`engines.node`).

## Imports — one entry, and only one

**Every** public name is re-exported from the package root — the client, `ClientOptions`, `ServerEnvironment`, 892 model types with the schema value beside each, the error classes, and the runtime types (`ApiPromise`, `ApiResult`, `RequestOptions`, `ErrorPayload`, `Declared`, `Schema`, `EnumSchema`, `Encoded`).

```ts
import { VerizonClient, ServerEnvironment, ResponseError, VerizonError } from "verizon";
import type { ClientOptions, Success201 } from "verizon";
```

Things the specifier alone will not tell you:

- **Deep imports do not resolve.** The `exports` map exposes `.` and `./package.json` and nothing else, so `verizon/models/…` fails (`TS2307`) even though the file exists in the shipped `src/`. Every `Source` path on the SDK map is where to **read** a shape, never what to import.
- **From CommonJS**, the typed spelling is `import sdk = require("verizon")`. A plain `require` destructure runs but yields `any`.
- **`instanceof` is reliable within one dialect.** A process that loads both (`import` in one file, `require` in another) gets two independent copies of every error class, and `instanceof` across that boundary is `false` — narrow on `err.kind` / `err.payload.kind` / `err.name` there.

Under `verbatimModuleSyntax`, names carrying no runtime value (`ClientOptions`, every model type) must be imported with `import type`. Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional field rather than assigning `undefined` to it.

## Environments

`ClientOptions.serverEnvironment` selects one environment for the whole client (`src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type — not a TypeScript `enum` — and unlike the model enums it is **closed**, so only its declared members are assignable.

| Group | Environment | Base URL | Override at |
| --- | --- | --- | --- |
| `hyperPreciseCredentials` | `production` *(default)* | `https://thingspace.verizon.com/api/auth/v1` | `serverOptions.hyperPreciseCredentials.production.baseUrl` |
| `hyperPreciseCredentials` | `staging` | `https://staging.thingspace.verizon.com/api/auth/v1` | `serverOptions.hyperPreciseCredentials.staging.baseUrl` |
| `hyperPreciseCredentials` | `dev` | `https://staging.thingspace.verizon.com/api/auth/v1` | `serverOptions.hyperPreciseCredentials.dev.baseUrl` |
| `hyperPreciseCredentials` | `qa` | `https://thingspace.verizon.com/api/auth/v1` | `serverOptions.hyperPreciseCredentials.qa.baseUrl` |
| `hyperPreciseCredentials` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://staging.thingspace.verizon.com/api/auth/v1` | `serverOptions.hyperPreciseCredentials.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `impServer` | `production` *(default)* | `https://imp.thingspace.verizon.com` | `serverOptions.impServer.production.baseUrl` |
| `impServer` | `staging` | `https://imp-staging.thingspace.verizon.com` | `serverOptions.impServer.staging.baseUrl` |
| `impServer` | `dev` | `https://devmanagement-staging.imp.thingspace.verizon.com` | `serverOptions.impServer.dev.baseUrl` |
| `impServer` | `qa` | `https://tsd-nginx-qa-us-east-1.imp.thingspace.verizon.com` | `serverOptions.impServer.qa.baseUrl` |
| `impServer` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com` | `serverOptions.impServer.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `thingspace` | `production` *(default)* | `https://thingspace.verizon.com/api` | `serverOptions.thingspace.production.baseUrl` |
| `thingspace` | `staging` | `https://staging.thingspace.verizon.com/api` | `serverOptions.thingspace.staging.baseUrl` |
| `thingspace` | `dev` | `https://devmanagement-staging.thingspace.verizon.com/api` | `serverOptions.thingspace.dev.baseUrl` |
| `thingspace` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api` | `serverOptions.thingspace.qa.baseUrl` |
| `thingspace` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api` | `serverOptions.thingspace.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `oAuthServer` | `production` *(default)* | `https://thingspace.verizon.com/api/ts/v1` | `serverOptions.oAuthServer.production.baseUrl` |
| `oAuthServer` | `staging` | `https://staging.thingspace.verizon.com/api/ts/v1` | `serverOptions.oAuthServer.staging.baseUrl` |
| `oAuthServer` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/ts/v1` | `serverOptions.oAuthServer.dev.baseUrl` |
| `oAuthServer` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/ts/v1` | `serverOptions.oAuthServer.qa.baseUrl` |
| `oAuthServer` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/ts/v1` | `serverOptions.oAuthServer.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `m2M` | `production` *(default)* | `https://thingspace.verizon.com/api/m2m` | `serverOptions.m2M.production.baseUrl` |
| `m2M` | `staging` | `https://staging.thingspace.verizon.com/api/m2m` | `serverOptions.m2M.staging.baseUrl` |
| `m2M` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/m2m` | `serverOptions.m2M.dev.baseUrl` |
| `m2M` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/m2m` | `serverOptions.m2M.qa.baseUrl` |
| `m2M` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/m2m` | `serverOptions.m2M.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `deviceLocation` | `production` *(default)* | `https://thingspace.verizon.com/api/loc/v1` | `serverOptions.deviceLocation.production.baseUrl` |
| `deviceLocation` | `staging` | `https://staging.thingspace.verizon.com/api/loc/v1` | `serverOptions.deviceLocation.staging.baseUrl` |
| `deviceLocation` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/loc/v1` | `serverOptions.deviceLocation.dev.baseUrl` |
| `deviceLocation` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/loc/v1` | `serverOptions.deviceLocation.qa.baseUrl` |
| `deviceLocation` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/loc/v1` | `serverOptions.deviceLocation.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `subscriptionServer` | `production` *(default)* | `https://thingspace.verizon.com/api/subsc/v1` | `serverOptions.subscriptionServer.production.baseUrl` |
| `subscriptionServer` | `staging` | `https://staging.thingspace.verizon.com/api/subsc/v1` | `serverOptions.subscriptionServer.staging.baseUrl` |
| `subscriptionServer` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/subsc/v1` | `serverOptions.subscriptionServer.dev.baseUrl` |
| `subscriptionServer` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/subsc/v1` | `serverOptions.subscriptionServer.qa.baseUrl` |
| `subscriptionServer` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/subsc/v1` | `serverOptions.subscriptionServer.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `softwareManagementV1` | `production` *(default)* | `https://thingspace.verizon.com/api/fota/v1` | `serverOptions.softwareManagementV1.production.baseUrl` |
| `softwareManagementV1` | `staging` | `https://staging.thingspace.verizon.com/api/fota/v1` | `serverOptions.softwareManagementV1.staging.baseUrl` |
| `softwareManagementV1` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/fota/v1` | `serverOptions.softwareManagementV1.dev.baseUrl` |
| `softwareManagementV1` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v1` | `serverOptions.softwareManagementV1.qa.baseUrl` |
| `softwareManagementV1` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/fota/v1` | `serverOptions.softwareManagementV1.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `softwareManagementV2` | `production` *(default)* | `https://thingspace.verizon.com/api/fota/v2` | `serverOptions.softwareManagementV2.production.baseUrl` |
| `softwareManagementV2` | `staging` | `https://staging.thingspace.verizon.com/api/fota/v2` | `serverOptions.softwareManagementV2.staging.baseUrl` |
| `softwareManagementV2` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/fota/v2` | `serverOptions.softwareManagementV2.dev.baseUrl` |
| `softwareManagementV2` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v2` | `serverOptions.softwareManagementV2.qa.baseUrl` |
| `softwareManagementV2` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/fota/v2` | `serverOptions.softwareManagementV2.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `softwareManagementV3` | `production` *(default)* | `https://thingspace.verizon.com/api/fota/v3` | `serverOptions.softwareManagementV3.production.baseUrl` |
| `softwareManagementV3` | `staging` | `https://staging.thingspace.verizon.com/api/fota/v3` | `serverOptions.softwareManagementV3.staging.baseUrl` |
| `softwareManagementV3` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/fota/v3` | `serverOptions.softwareManagementV3.dev.baseUrl` |
| `softwareManagementV3` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/fota/v3` | `serverOptions.softwareManagementV3.qa.baseUrl` |
| `softwareManagementV3` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/fota/v3` | `serverOptions.softwareManagementV3.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `deviceDiagnostics` | `production` *(default)* | `https://thingspace.verizon.com/api/diagnostics/v1` | `serverOptions.deviceDiagnostics.production.baseUrl` |
| `deviceDiagnostics` | `staging` | `https://staging.thingspace.verizon.com/api/diagnostics/v1` | `serverOptions.deviceDiagnostics.staging.baseUrl` |
| `deviceDiagnostics` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/diagnostics/v1` | `serverOptions.deviceDiagnostics.dev.baseUrl` |
| `deviceDiagnostics` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/diagnostics/v1` | `serverOptions.deviceDiagnostics.qa.baseUrl` |
| `deviceDiagnostics` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/diagnostics/v1` | `serverOptions.deviceDiagnostics.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `cloudConnector` | `production` *(default)* | `https://thingspace.verizon.com/api/cc/v1` | `serverOptions.cloudConnector.production.baseUrl` |
| `cloudConnector` | `staging` | `https://staging.thingspace.verizon.com/api/cc/v1` | `serverOptions.cloudConnector.staging.baseUrl` |
| `cloudConnector` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/cc/v1` | `serverOptions.cloudConnector.dev.baseUrl` |
| `cloudConnector` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/cc/v1` | `serverOptions.cloudConnector.qa.baseUrl` |
| `cloudConnector` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/cc/v1` | `serverOptions.cloudConnector.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `hyperPreciseLocation` | `production` *(default)* | `https://thingspace.verizon.com/api/hyper-precise/v1` | `serverOptions.hyperPreciseLocation.production.baseUrl` |
| `hyperPreciseLocation` | `staging` | `https://staging.thingspace.verizon.com/api/hyper-precise/v1` | `serverOptions.hyperPreciseLocation.staging.baseUrl` |
| `hyperPreciseLocation` | `dev` | `https://devmanagement-staging.thingspace.verizon.com:80/hyper-precise/v1` | `serverOptions.hyperPreciseLocation.dev.baseUrl` |
| `hyperPreciseLocation` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/hyper-precise/v1` | `serverOptions.hyperPreciseLocation.qa.baseUrl` |
| `hyperPreciseLocation` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/hyper-precise/v1` | `serverOptions.hyperPreciseLocation.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `services` | `production` *(default)* | `https://5gedge.verizon.com/api/mec/services` | `serverOptions.services.production.baseUrl` |
| `services` | `staging` | `https://staging.5gedge.verizon.com/api/mec/services` | `serverOptions.services.staging.baseUrl` |
| `services` | `dev` | `https://devmanagement-staging.5gedge.verizon.com:80/mec/services` | `serverOptions.services.dev.baseUrl` |
| `services` | `qa` | `https://tsd-nginx-qa-us-east-1.5gedge.verizon.com/api/mec/services` | `serverOptions.services.qa.baseUrl` |
| `services` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/mec/services` | `serverOptions.services.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |
| `qualityOfService` | `production` *(default)* | `https://thingspace.verizon.com/api/m2m/v1/devices` | `serverOptions.qualityOfService.production.baseUrl` |
| `qualityOfService` | `staging` | `https://staging.thingspace.verizon.com/api/m2m/v1/devices` | `serverOptions.qualityOfService.staging.baseUrl` |
| `qualityOfService` | `dev` | `https://devmanagement-staging.thingspace.verizon.com/api/m2m/v1/devices` | `serverOptions.qualityOfService.dev.baseUrl` |
| `qualityOfService` | `qa` | `https://tsd-nginx-qa-us-east-1.thingspace.verizon.com/api/m2m/v1/devices` | `serverOptions.qualityOfService.qa.baseUrl` |
| `qualityOfService` | `mockServerForLimitedAvailabilitySeeQuickStart` | `https://mock-staging.thingspace.verizon.com/api/m2m/v1/devices` | `serverOptions.qualityOfService.mockServerForLimitedAvailabilitySeeQuickStart.baseUrl` |

Consequences to state on every contract sheet that touches configuration:

- Constructing the client with no options selects **`ServerEnvironment.Production`**, silently.
- An override merges with the built-in default **per group-and-environment pair, key by key**; a `baseUrl` override replaces the template verbatim, template variable values are percent-encoded into it, and templates expand per request rather than once at construction.
- Each operation is bound to one server group at generation time. A map block carries a **Server** bullet only when its group is not `hyperPreciseCredentials`.
- An environment value the SDK does not know throws `SdkError` **synchronously out of the operation method** at the first call — not at construction — so `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

## Auth pattern (4 schemes)

Authentication is **per operation**: every operation declares the requirement it enforces and the SDK sends exactly that. Each block on a map page carries an **Auth** bullet, `none` included. There is no client-global switch and no per-call override. 314 of the 314 operations require a credential and 0 are public.

| `ClientOptions` field | Scheme kind | What the SDK sends |
| --- | --- | --- |
| `thingspaceOauth` | OAuth 2 client credentials | `Authorization: Bearer <access token>` |
| `vzM2MToken` | API key (header) | header `VZ-M2M-Token: <key>` |
| `sessionToken` | API key (header) | header `SessionToken: <key>` |
| `thingspaceOauth1` | OAuth 2 client credentials | `Authorization: Bearer <access token>` |

```ts
const client = new VerizonClient({
  thingspaceOauth: { clientId: process.env.CLIENT_ID!, clientSecret: process.env.CLIENT_SECRET! },
  vzM2MToken: process.env.API_KEY!,
  sessionToken: process.env.API_KEY!,
  thingspaceOauth1: { clientId: process.env.CLIENT_ID!, clientSecret: process.env.CLIENT_SECRET! },
});
```

**Every credential field is optional at the type level and that is a trap worth flagging on every sheet.** Omit one and nothing fails at construction — the request simply goes out without that credential and the server decides. Most APIs then answer `401`; one that serves anonymous traffic answers `200` and hides the omission entirely. So a `401` on a call you believed was authenticated is usually an unset field rather than an SDK failure; verify the field is set rather than waiting for a `401` to tell you, and check the operation's **Auth** bullet against what the client was actually given.

Three more behaviours the type does not show:

- **A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent; a function counts as present without being invoked.
- **Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives it sends the **first configured** one, in the order the **Auth** bullet prints them.
- **A 401 invalidates, it does not retry.** On a 401 (401 only, not 403) the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires; the current request still rejects.

**OAuth 2 fetches and caches its own token.** The token request goes through **the same client** — same `timeout`, same `fetch` — sends a form-urlencoded body, and decodes the response against a schema rather than casting it. A token is cached until shortly before it expires; a response with no `expires_in` is treated as never expiring (RFC 6749 §5.1); concurrent callers share one in-flight fetch. **A refused token endpoint rejects with `AuthError`**, wrapping the underlying `ResponseError` as `cause` — so a bad secret never looks like the business call failing, and `AuthError` is *not* a `ResponseError`.

| Flow | Token endpoint | Client credentials travel |
| --- | --- | --- |
| `thingspaceOauth` | `oAuthServer` + `/oauth2/token` | as `Authorization: Basic` |
| `thingspaceOauth1` | `oAuthServer` + `/` | as `Authorization: Basic` |

`thingspaceOauthStrategy`, `thingspaceOauth1Strategy` on `ClientOptions` substitute the whole token request (`getToken(credentials, signal)`, plus `tryRefreshToken(…)` where the grant is refreshable); the caching, expiry buffer and single-flight behaviour still apply.

The **token endpoint follows the same base URL** as the operations on its group, so it always tracks the environment or the override — you never configure it separately. Its group is named in the table above, against `src/servers.ts`.

See `typescript-authentication` for the full picture.

## Resources

Resources are **memoized lazy getters** on the client (`client.<attr>`). Their classes are exported only for their merged namespaces — the per-operation request and error types — and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

| Attribute | Class | Ops | Operations |
| --- | --- | --- | --- |
| `client.accountServiceController` | `AccountServiceController` | 1 | `getAccountInformationUsingGet` |
| `client.intelligenceServiceController` | `IntelligenceServiceController` | 2 | `setConnectionPlanner` · `statusConnectionPlanner` |
| `client.deviceManagement` | `DeviceManagement` | 29 | `activateServiceForDevices` · `addDevices` · `billedUsageInfo` · `changeDevicesServicePlan` · `checkDevicesAvailabilityForActivation` · `deactivateServiceForDevices` · `deleteDeactivatedDevices` · `deviceUpload` · `deviceUploadStatus` · `getDeviceExtendedDiagnosticInformation` · `getDeviceServiceSuspensionStatus` · `listCurrentDevicesPrlVersion` · `listDevicesInformation` · `listDevicesProvisioningHistory` · `listDevicesUsageHistory` · `listDevicesWithImeiIccidMismatch` · `moveDevicesWithinAccountsOfProfile` · `restoreServiceForSuspendedDevices` · `retrieveAggregateDeviceUsageHistory` · `retrieveDeviceConnectionHistory` · `suspendServiceForDevices` · `updateDeviceId` · `updateDevicesContactInformation` · `updateDevicesCostCenterCode` · `updateDevicesCustomFields` · `updateDevicesState` · `uploadActivateDevice` · `usageSegmentationLabelAssociation` · `usageSegmentationLabelDeletion` |
| `client.accounts` | `Accounts` | 3 | `getAccountInformation` · `listAccountLeads` · `listAccountStatesAndServices` |
| `client.deviceGroups` | `DeviceGroups` | 5 | `createDeviceGroup` · `deleteDeviceGroup` · `getDeviceGroupInformation` · `listDeviceGroups` · `updateDeviceGroup` |
| `client.sms` | `Sms` | 3 | `listDevicesSmsMessages` · `sendSmsToDevice` · `startQueuedSmsDelivery` |
| `client.sessionManagement` | `SessionManagement` | 3 | `endConnectivityManagementSession` · `resetConnectivityManagementPassword` · `startConnectivityManagementSession` |
| `client.connectivityCallbacks` | `ConnectivityCallbacks` | 3 | `deregisterCallback` · `listRegisteredCallbacks` · `registerCallback` |
| `client.accountRequests` | `AccountRequests` | 1 | `getCurrentAsynchronousRequestStatus` |
| `client.servicePlans` | `ServicePlans` | 1 | `listAccountServicePlans` |
| `client.deviceDiagnostics` | `DeviceDiagnostics` | 2 | `deviceReachabilityStatusUsingPost` · `retrieveActiveMonitorsUsingPost` |
| `client.deviceMonitoring` | `DeviceMonitoring` | 2 | `deviceReachability` · `stopDeviceReachability` |
| `client.deviceProfileManagement` | `DeviceProfileManagement` | 4 | `activateDeviceThroughProfile` · `profileToActivateDevice` · `profileToDeactivateDevice` · `profileToSetFallbackAttribute` |
| `client.eUiccDeviceProfileManagement` | `EUiccDeviceProfileManagement` | 5 | `deleteLocalProfile` · `disableLocalProfile` · `downloadLocalProfileToDisable` · `downloadLocalProfileToEnable` · `enableLocalProfile` |
| `client.devicesLocations` | `DevicesLocations` | 6 | `cancelQueuedLocationReportGeneration` · `createLocationReport` · `getLocationReportStatus` · `listDevicesLocationsAsynchronous` · `listDevicesLocationsSynchronous` · `retrieveLocationReport` |
| `client.exclusions` | `Exclusions` | 6 | `devicesLocationGetConsentAsync` · `devicesLocationGiveConsentAsync` · `devicesLocationUpdateConsent` · `excludeDevices` · `listExcludedDevices` · `removeDevicesFromExclusionList` |
| `client.devicesLocationSubscriptions` | `DevicesLocationSubscriptions` | 2 | `getLocationServiceSubscriptionStatus` · `getLocationServiceUsage` |
| `client.deviceLocationCallbacks` | `DeviceLocationCallbacks` | 4 | `cancelAsyncReport` · `deregisterCallback2` · `listRegisteredCallbacks2` · `registerCallback2` |
| `client.usageTriggerManagement` | `UsageTriggerManagement` | 3 | `createNewTrigger` · `deleteTrigger` · `updateTrigger` |
| `client.billing` | `Billing` | 4 | `addAccount` · `cancelManagedAccountAction` · `listManagedAccount` · `managedAccountAction` |
| `client.softwareManagementSubscriptionsV1` | `SoftwareManagementSubscriptionsV1` | 2 | `getAccountLicenseStatus` · `getAccountSubscriptionStatus` |
| `client.softwareManagementLicensesV1` | `SoftwareManagementLicensesV1` | 5 | `assignLicensesToDevices` · `createListOfLicensesToRemove` · `deleteListOfLicensesToRemove` · `listLicensesToRemove` · `removeLicensesFromDevices` |
| `client.firmwareV1` | `FirmwareV1` | 5 | `cancelScheduledFirmwareUpgrade` · `listAvailableFirmware` · `listFirmwareUpgradeDetails` · `scheduleFirmwareUpgrade` · `updateFirmwareUpgradeDevices` |
| `client.softwareManagementCallbacksV1` | `SoftwareManagementCallbacksV1` | 3 | `deregisterCallback3` · `listRegisteredCallbacks3` · `registerCallback3` |
| `client.softwareManagementReportsV1` | `SoftwareManagementReportsV1` | 3 | `getDeviceFirmwareUpgradeHistory` · `listAccountDevices` · `listUpgradesForSpecifiedStatus` |
| `client.softwareManagementSubscriptionsV2` | `SoftwareManagementSubscriptionsV2` | 1 | `getAccountSubscriptionStatus2` |
| `client.softwareManagementLicensesV2` | `SoftwareManagementLicensesV2` | 6 | `assignLicensesToDevices2` · `createListOfLicensesToRemove2` · `deleteListOfLicensesToRemove2` · `getAccountLicenseStatus2` · `listLicensesToRemove2` · `removeLicensesFromDevices2` |
| `client.campaignsV2` | `CampaignsV2` | 7 | `cancelCampaign` · `getCampaignInformation` · `scheduleCampaignFirmwareUpgrade` · `scheduleFileUpgrade` · `scheduleSwUpgradeHttpDevices` · `updateCampaignDates` · `updateCampaignFirmwareDevices` |
| `client.softwareManagementCallbacksV2` | `SoftwareManagementCallbacksV2` | 4 | `deregisterCallback4` · `listRegisteredCallbacks4` · `registerCallback4` · `updateCallback` |
| `client.softwareManagementReportsV2` | `SoftwareManagementReportsV2` | 5 | `getCampaignDeviceStatus` · `getCampaignHistoryByStatus` · `getDeviceFirmwareUpgradeHistory2` · `listAccountDevices2` · `listAvailableSoftware` |
| `client.clientLogging` | `ClientLogging` | 6 | `disableDeviceLogging` · `disableLoggingForDevices` · `enableDeviceLogging` · `enableLoggingForDevices` · `listDeviceLogs` · `listDevicesWithLoggingEnabled` |
| `client.serverLogging` | `ServerLogging` | 1 | `getDeviceCheckInHistory` |
| `client.configurationFiles` | `ConfigurationFiles` | 2 | `getListOfFiles` · `uploadConfigFile` |
| `client.softwareManagementSubscriptionsV3` | `SoftwareManagementSubscriptionsV3` | 1 | `getAccountSubscriptionStatus3` |
| `client.softwareManagementLicensesV3` | `SoftwareManagementLicensesV3` | 3 | `assignLicensesToDevices3` · `getAccountLicensesStatus` · `removeLicensesFromDevices3` |
| `client.campaignsV3` | `CampaignsV3` | 5 | `cancelCampaign2` · `getCampaignInformation2` · `scheduleCampaignFirmwareUpgrade2` · `updateCampaignDates2` · `updateCampaignFirmwareDevices2` |
| `client.softwareManagementReportsV3` | `SoftwareManagementReportsV3` | 3 | `getCampaignDeviceStatus2` · `getCampaignHistoryByStatus2` · `getDeviceFirmwareUpgradeHistory3` |
| `client.firmwareV3` | `FirmwareV3` | 3 | `listAvailableFirmware2` · `reportDeviceFirmware` · `synchronizeDeviceFirmware` |
| `client.accountDevices` | `AccountDevices` | 2 | `getAccountDeviceInformation` · `listAccountDevicesInformation` |
| `client.softwareManagementCallbacksV3` | `SoftwareManagementCallbacksV3` | 4 | `deregisterCallback5` · `listRegisteredCallbacks5` · `registerCallback5` · `updateCallback2` |
| `client.simSecureForIoTLicenses` | `SimSecureForIoTLicenses` | 2 | `assignLicenseToDevices` · `unassignLicenseToDevices` |
| `client.accountSubscriptions` | `AccountSubscriptions` | 1 | `listAccountSubscriptions` |
| `client.diagnosticsSubscriptions` | `DiagnosticsSubscriptions` | 1 | `getDiagnosticsSubscription` |
| `client.diagnosticsObservations` | `DiagnosticsObservations` | 2 | `startDiagnosticsObservation` · `stopDiagnosticsObservation` |
| `client.diagnosticsHistory` | `DiagnosticsHistory` | 1 | `getDiagnosticsHistory` |
| `client.diagnosticsSettings` | `DiagnosticsSettings` | 1 | `listDiagnosticsSettings` |
| `client.diagnosticsCallbacks` | `DiagnosticsCallbacks` | 3 | `getDiagnosticsSubscriptionCallbackInfo` · `registerDiagnosticsCallbackUrl` · `unregisterDiagnosticsCallback` |
| `client.diagnosticsFactoryReset` | `DiagnosticsFactoryReset` | 1 | `decivesRestart` |
| `client.targets` | `Targets` | 5 | `createAzureCentralIoTApplication` · `createTarget` · `deleteTarget` · `generateTargetExternalId` · `queryTarget` |
| `client.cloudConnectorSubscriptions` | `CloudConnectorSubscriptions` | 3 | `createSubscription` · `deleteSubscription` · `querySubscription` |
| `client.cloudConnectorDevices` | `CloudConnectorDevices` | 6 | `deleteDeviceFromAccount` · `findDeviceByPropertyValues` · `searchDeviceEventHistory` · `searchDevicesResourcesByPropertyValues` · `searchSensorReadings` · `updateDevicesConfigurationValue` |
| `client.hplDeviceManagement` | `HplDeviceManagement` | 1 | `addDevicesHyperPrecise` |
| `client.deviceServiceManagement` | `DeviceServiceManagement` | 2 | `getDeviceHyperPreciseStatus` · `updateDeviceHyperPreciseStatus` |
| `client.deviceReports` | `DeviceReports` | 3 | `calculateAggregatedReportAsynchronous` · `calculateAggregatedReportSynchronous` · `getSessionsReport` |
| `client.hyperPreciseLocationCallbacks` | `HyperPreciseLocationCallbacks` | 3 | `deregisterCallback6` · `listRegisteredCallbacks6` · `registerCallback6` |
| `client.deviceCredentialManagement` | `DeviceCredentialManagement` | 4 | `dropCredentials` · `generateCredentials` · `resetCredentials` · `retrieveCredentials` |
| `client.anomalySettings` | `AnomalySettings` | 3 | `activateAnomalyDetection` · `listAnomalyDetectionSettings` · `resetAnomalyDetectionParameters` |
| `client.anomalyTriggers` | `AnomalyTriggers` | 5 | `createAnomalyDetectionTrigger` · `deleteAnomalyDetectionTrigger` · `listAnomalyDetectionTriggerSettings` · `listAnomalyDetectionTriggers` · `updateAnomalyDetectionTrigger` |
| `client.anomalyTriggersV2` | `AnomalyTriggersV2` | 3 | `createAnomalyDetectionTriggerV2` · `listAnomalyDetectionTriggerSettingsV2` · `updateAnomalyDetectionTriggerV2` |
| `client.wirelessNetworkPerformance` | `WirelessNetworkPerformance` | 5 | `deviceExperience30DaysHistory` · `deviceExperienceBulkLatest` · `domestic4GAnd5GNationwideNetworkCoverage` · `nearRealTimeNetworkConditions` · `siteProximity` |
| `client.managingESimProfiles` | `ManagingESimProfiles` | 10 | `activateADeviceProfile` · `deactivateADeviceProfile` · `deleteADeviceProfile` · `deviceSuspend` · `downloadADeviceProfile` · `enableADeviceProfile` · `enableADeviceProfileForDownload` · `profileSuspend` · `resumeProfile` · `setFallback` |
| `client.deviceSmsMessaging` | `DeviceSmsMessaging` | 4 | `getSmsMessages` · `listSmsMessageHistory` · `sendAnSmsMessage` · `startSmsMessageDelivery` |
| `client.deviceActions` | `DeviceActions` | 7 | `accountInformation` · `aggregateUsage` · `dailyUsage` · `getAsynchronousRequestStatus` · `retrieveDeviceProvisioningHistory` · `retrieveTheGlobalDeviceList` · `servicePlanList` |
| `client.thingSpaceQualityOfServiceApiActions` | `ThingSpaceQualityOfServiceApiActions` | 2 | `createAThingSpaceQualityOfServiceApiSubscription` · `stopAThingSpaceQualityOfServiceApiSubscription` |
| `client.pwn` | `Pwn` | 7 | `changePwnDeviceIPaddress` · `changePwnDeviceProfile` · `changePwnDeviceStateActivate` · `changePwnDeviceStateDeactivate` · `getPwnPerformanceConsent` · `getProfileList` · `kpiList` |
| `client.promotionPeriodInformation` | `PromotionPeriodInformation` | 2 | `getPromoDeviceAggregateUsageHistory` · `getPromoDeviceUsageHistory` |
| `client.retrieveTheTriggers` | `RetrieveTheTriggers` | 4 | `getAllAvailableTriggers` · `getAllTriggersByAccountName` · `getAllTriggersByTriggerCategory` · `getTriggersById` |
| `client.updateTriggers` | `UpdateTriggers` | 1 | `updateAllAvailableTriggers` |
| `client.simActions` | `SimActions` | 3 | `newactivatecode` · `setactivateUsingPost` · `setdeactivateUsingPost` |
| `client.globalReporting` | `GlobalReporting` | 2 | `retrieveGlobalList` · `deviceprovhistoryUsingPost` |
| `client.deviceRoleController` | `DeviceRoleController` | 1 | `getAclRulesByVendorId` |
| `client.etxAppConfiguration` | `EtxAppConfiguration` | 5 | `createConfiguration` · `deleteConfiguration` · `getConfiguration` · `getConfigurationList` · `updateConfiguration` |
| `client.etxRegistration` | `EtxRegistration` | 7 | `getEtxClientCertificate` · `getEtxConnectionUrl` · `getEtxConnectionUrlMultiMec` · `queryEtxDevices` · `registerEtxClient` · `renewEtxClientCertificate` · `unregisterEtxClients` |
| `client.mapMessageController` | `MapMessageController` | 4 | `deleteMapMessage` · `downloadMapMessages` · `ingestMapMessages` · `queryMapMessages` |
| `client.retrieveRatePlanList` | `RetrieveRatePlanList` | 1 | `getRatePlanList` |
| `client.createPricePlanTriggers` | `CreatePricePlanTriggers` | 1 | `createTriggerRules` |
| `client.updatePricePlanTriggers` | `UpdatePricePlanTriggers` | 1 | `updateTriggerRules` |
| `client.gbiDeviceActions5` | `GbiDeviceActions5` | 3 | `businessInternetServiceplanchange` · `businessInternetactivateUsingPost` · `businessInternetlistDeviceInformation` |
| `client.sensorInsightsSensors` | `SensorInsightsSensors` | 5 | `sensorInsightsListSensorDevicesRequest` · `sensorInsightsOffBoardSensorRequest` · `sensorInsightsOnBoardSensorRequest` · `sensorInsightsSensorOffBoardingStatusRequest` · `sensorInsightsSensorOnBoardStatusRequest` |
| `client.sensorInsightsDevices` | `SensorInsightsDevices` | 6 | `sensorInsightsDeviceActionSetRequest` · `sensorInsightsLastReportedTimeRequest` · `sensorInsightsListDeviceExperienceHistoryRequest` · `sensorInsightsListDevicesRequest` · `sensorInsightsListNetworkExperienceHistoryRequest` · `sensorInsightsPatchDeviceRequest` |
| `client.sensorInsightsGateways` | `SensorInsightsGateways` | 1 | `sensorInsightsListGatewayDevicesRequest` |
| `client.sensorInsightsSmartAlerts` | `SensorInsightsSmartAlerts` | 3 | `sensorInsightsBulkUpdate` · `sensorInsightsListSmartAlertsRequest` · `sensorInsightsPatchSmartAlertRequest` |
| `client.sensorInsightsRules` | `SensorInsightsRules` | 2 | `sensorInsightsListRulesRequest` · `sensorInsightsOverwriteRuleRequest` |
| `client.sensorInsightsHealthScore` | `SensorInsightsHealthScore` | 2 | `sensorInsightsGetNetworkHealthScoreResponse` · `sensorInsightsHealthScoreSummary` |
| `client.sensorInsightsNotificationGroups` | `SensorInsightsNotificationGroups` | 6 | `sensorInsightsAddUsersToNotificationGroupRequest` · `sensorInsightsCreateNotificationGroupRequest` · `sensorInsightsDeleteNotificationGroup` · `sensorInsightsListNotificationGroupRequest` · `sensorInsightsRemoveUsersFromNotificationGroupRequest` · `sensorInsightsUpdateNotificationGroupRequest` |
| `client.sensorInsightsUsers` | `SensorInsightsUsers` | 4 | `sensorInsightsCreateUserRequest` · `sensorInsightsDeleteUser` · `sensorInsightsListUserRequest` · `sensorInsightsUpdateUserRequest` |
| `client.sensorInsightsDeviceProfile` | `SensorInsightsDeviceProfile` | 4 | `createAProfile` · `deleteAProfile` · `queryAProfile` · `updateAProfile` |
| `client.sensorInsightsSmartAlertMetrics` | `SensorInsightsSmartAlertMetrics` | 1 | `sensorinsightsmetricsquery` |

Every operation has the same call shape — `op(request, options?)`, one **flat, channel-blind** request object first and `RequestOptions` (`{ signal }`) second — and returns `ApiPromise<T, E>`.

⚠ **The request type name is not uniformly `<Operation>Request`.** 16 operations take `<Operation>RequestParams` instead: `addDevices`, `deviceUpload`, `createDeviceGroup`, `registerCallback`, `updateTrigger`, `createTarget`, `deleteTarget`, `queryTarget`, `createSubscription`, `deleteSubscription`, `querySubscription`, `searchDeviceEventHistory`, `changePwnDeviceIPaddress`, `changePwnDeviceProfile`, `changePwnDeviceStateActivate`, `changePwnDeviceStateDeactivate`. Take the name from the operation's **Signature** bullet on its map page; never construct it from the method name.

## SDK map — look up first, open the file second

The SDK ships a generated map, and `package.json`'s `files` list includes it, so **installing the package gives you the map** — no clone is needed. It sits at the package root, the directory holding `package.json` and the `src/` tree:

- **`sdk-map.md`** — the index: client construction with the full `ClientOptions` table, the *Not on this SDK* table, the two error families with `ApiResult` and `.asApiResult()`, wire serialization for every channel, **the full enum table with every member and its wire value**, servers and auth, runtime and packaging, and the link table into the operations pages.
- **`map/operations/<resource>.md`** — one page per resource, one `###` block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire** (verb and route), **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms** — then a **Fields** table giving every request field its channel, wire name, type, required flag and default, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions.

Locate the installed package before you rely on a lookup:

```bash
node -e "console.log(require.resolve('verizon/package.json'))"
```

Failing that it is at `node_modules/verizon/`. **If the package is not installed, there is no map and no source to read** — mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory.

Every `Source` path on the map is relative to that package root, so `src/models/<file>.ts` opens as written from there — the package ships its `src/` tree, so the path resolves inside `node_modules/verizon/` exactly as the map writes it. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

**The map is the locator; the source files are the shapes.** Read the map first — signatures, routes, request fields with their channels and defaults, return types, error arms, enum values, and which file declares a type are all answered there without opening a single `.ts` file. Then open the one file the map names for what it deliberately does not carry: a model's members, whether each is required, optional or nullable. The map says so itself — *"Shapes live only in the source … Do not derive the path from the type name."*

**`sdk-map.md` carries the invariants every operation block assumes, so read it before any `map/operations/` page**; the pages are written to be read beside it. And **silence means the default**: the index states what holds for every operation — the call shape, the flat channel-blind request object, the `ApiPromise<T, E>` return, the default server group, no pagination and no streaming — and a block departs from one only by saying so. Take the default and move on rather than opening the source to confirm it.

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted header actually selects — the map will not settle it. Read that operation's entry in `api-reference.md` at the package root, keyed by the same signature, *before* writing the sheet row, and record what you found. A value you already "know" for a field the map types as a plain `string` is a lookup, not a recall — the memory ban applies to it.

## Contract facts — the map first, then the source file

**Seven of these are map lookups — don't open a source file for them:** an operation's signature; its request fields with channel, wire name, required flag and default; its return type; its error subclass and the arms with the status each covers; the `ClientOptions` fields and their defaults; the environments, base URLs and auth wiring; **and every enum's members with their wire values**, which `sdk-map.md` tabulates in full.

The table below covers everything else, and the full body behind a map row. Paths are relative to `node_modules/verizon/`:

| Question | File |
| --- | --- |
| A model's members, required (`f: T`) vs optional (`f?: T`) vs required-nullable (`f: T \| null`) | `src/models/<file the Type sources table names>.ts` |
| The operation method body and the request it builds | `src/resources/<resource>.ts` |
| The per-operation request and error types (merged namespace) | the `export namespace <Resource>` block at the foot of the same file |
| Client construction, resource getters | `src/client.ts` |
| `ClientOptions` fields and `DEFAULT_CLIENT_OPTIONS` | `src/client-options.ts` |
| Environments, base URLs, override merging | `src/servers.ts` |
| Auth scheme wiring, token endpoint, credential placement | `src/auth-schemes.ts`, `src/core/auth/credentials.ts`, `src/core/auth/oauth2-strategies.ts` |
| The transport: timeout clamp, `fetch` resolution, 401 invalidation, 2xx-vs-error split | `src/core/raw-client.ts` |
| Error classes and `ErrorKind` | `src/core/errors.ts`, `src/core/response-error.ts` |
| `ApiPromise`, `ApiResult`, `.asApiResult()`, the `Symbol.species` behaviour | `src/core/api-promise.ts` |
| `RequestOptions` (it is `{ signal }` and nothing else) | `src/core/api-request.ts` |
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

1. **Client construction & lifetime** — load **typescript-client-initialization** before you write `new VerizonClient(…)`. (*The signature won't tell you:* every option is optional, so a client built with no arguments compiles and talks to the default environment with no credential; the client must be **long-lived and app-scoped**, never rebuilt per request, because the resource getters and the OAuth 2 token cache live on it; there is no `close()` or `dispose()` — it owns no pool, only a `fetch`; and when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.)
2. **Authentication** — load **typescript-authentication** before you set credentials. The 4 schemes are `thingspaceOauth`, `vzM2MToken`, `sessionToken`, `thingspaceOauth1` on `ClientOptions`. (*The signature won't tell you:* the field is optional — omit it and every request goes out unauthenticated with no failure at construction; the token is fetched lazily and cached on the client; a **failed token fetch** raises `AuthError`, which is not a `ResponseError` and **bypasses `.asApiResult()` entirely**; and a 401 invalidates the cache without retrying the current call. Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **typescript-calling-endpoints** before the first `client.<resource>.<operation>(…)` call. (*The signature won't tell you:* the request object is **flat and channel-blind** — a field named `body` *is* the whole request body and every other field is fanned out to path, query or header by the SDK, so nothing is nested by channel; **an omitted field that has a default is still sent, with that default**; **18 operations resolve to `undefined`**; and `.asApiResult()` must be called on the value the operation returned, because `ApiPromise` overrides `Symbol.species` and `.then()`/`.catch()` hand back a plain `Promise` with the method gone.)
4. **Models** — load **typescript-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* models are plain `type`s built from object literals — no constructor, no builder; `f?: T` means omit the key, while `f: T | null` is **required and nullable** and `null` is a distinct value; enums are **open** (`const` companion plus a union admitting `(string & {})`), so the schema validates the base type only and an unknown server value round-trips instead of throwing — use `.values` to test membership yourself; and every type has a schema companion usable in both directions.)
5. **Error handling** — load **typescript-error-handling** before you write any `try/catch`. (*The signature won't tell you:* there are **two disjoint families** — `ResponseError` and its per-operation subclasses for an API error status, and the `VerizonError` set (`ConnectionError`, `TimeoutError`, `AbortError`, `SdkError`, `SchemaError`, `AuthError`) for no usable response — and neither is `instanceof` the other, so a complete catch needs both arms; **arm tags are schema-derived, not statuses** (see the sheet checklist below); a malformed 2xx body rejects with `SchemaError`, not `ResponseError`, and `.asApiResult()` does not convert it; and a missing response field the schema permits is silently `undefined` rather than any error at all.)
6. **Configuration & resilience** — load **typescript-configuration-resilience** when you set the base URL, timeouts, proxies, TLS, or logging. (*The signature won't tell you:* **the SDK performs no retries at all** — a failed call rejects once, so retry/backoff is entirely yours to build or deliberately omit; **there is no logging and there are no hooks, middleware or interceptors** — `ClientOptions.fetch` is the single extension point for all of it; `timeout` is client-wide with **no per-request timeout**, and a non-finite or non-positive value is not "no timeout" but a fallback to the transport's own ceiling; and a `fetch` replacement that drops `init.signal` makes both the timeout and every `RequestOptions.signal` inert.)
7. **Testing** — load **typescript-testing** before you stub the SDK. (*The signature won't tell you:* the seam is **`ClientOptions.fetch`**, not the client class and not the resource classes — whose constructors take unexported engine internals, so they cannot be instantiated in a test; stub bodies in **wire shape** and let the SDK decode them; assert on the request the SDK actually built, headers included; and cover the failure kinds a `ResponseError`-only test misses, `SchemaError` above all.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a contract sheet for the Verizon TypeScript SDK is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone.

1. **Which host each deployment talks to**, and where that is set. The members are `ServerEnvironment.Production`, `ServerEnvironment.Staging`, `ServerEnvironment.Dev`, `ServerEnvironment.Qa`, `ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart`, defaulting to `ServerEnvironment.Production` when the field is unset.
2. **18 operations resolve to `undefined`** — `await` gives you nothing to inspect, so **`.asApiResult()` is the only way to observe their status and headers** — decide the mode at write time, not by retrofit.
3. **The exact request type name per operation**, taken from the **Signature** bullet — 16 operations take `<Operation>RequestParams`, not `<Operation>Request`.
4. **Every request field with its channel, wire name and default**, because the request object is flat and channel-blind and the SDK fans fields out. An omitted field that has a default is still sent with that default, so a defaulted header shapes the response whether or not the sheet mentions it. Any caller-supplied idempotency or request-id field is the ONLY idempotency this SDK has: it injects none and `RequestOptions` is `{ signal }` only.
5. **Required vs optional vs required-nullable** for every model member the task sets — `f: T` required, `f?: T` omit the key, `f: T | null` required and nullable. And that under `exactOptionalPropertyTypes` an absent optional is **omitted or spread**, never assigned `undefined`.
6. **The error arms for each operation in scope, with the status each covers — and the warning that arm tags are schema-derived, not status codes.** Every operation rejects with its own `ResponseError` subclass narrowed on `err.payload.kind`, and a tag comes from the arm's **body schema**: an arm whose body is a direct model reference is named after that model in lower camel (`"apiError"`), and every other body — a primitive, an array, a map, or no content — is named `"error{Status}"` (`"error400"`, `"error4XX"`, `"errorDefault"`), with a numeric suffix on the second of two arms that would otherwise land on the same name. The same tag means different statuses on different operations, and the same status carries different tags — so a tag is only meaningful beside the arm table it came from, and a shared helper that switches on `kind` across operations is a bug. 293 of 314 operations declare typed error bodies; the rest reject with the base `ResponseError`. Every operation also carries an always-present `"undeclared"` arm holding `rawBody: ArrayBuffer`, for which **matcher precedence** matters: an exact numeric status is looked up across the whole table first, and only then does the first covering wildcard or range win.
7. **That a malformed or drifted 2xx body rejects with `SchemaError`, not `ResponseError`, in both response modes** — `.asApiResult()` converts an HTTP error status, never a Family B failure. Any sheet row for a call whose result is used must name the members the implementer has to assert on, because a thin or truncated body decodes without complaint and the hole surfaces later.
8. **That the SDK performs no retries, no logging, no pagination and no streaming at all**, and that `ClientOptions.fetch` is the one seam where any of it can be added — so whatever the task needs there is yours to build or deliberately omit. Say which.
9. A **REQUIRED READING** block naming the `typescript-*` companions that govern the steps, with inline `MUST load` pointers.

