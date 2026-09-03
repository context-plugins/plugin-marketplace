---
name: "typescript-getting-started"
description: "Twilio TypeScript SDK identity and lookup layer (TypeScript/JavaScript only) — install, the single import specifier `twilio`, the server environments and the base-URL knob, the auth pattern, the SDK map that ships inside the installed package (`sdk-map.md` + `map/operations/`) and how to traverse it, and the file table naming the one source file owning each fact the map leaves to the source. Load this before answering any Twilio TypeScript SDK contract question or writing any SDK code."
---

# Getting started with the Twilio TypeScript SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Twilio TypeScript SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source files it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `typescript-integrate-twilio` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated TypeScript SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `typescript-client-initialization`, `typescript-authentication`, `typescript-calling-endpoints`, `typescript-models`, `typescript-error-handling`, `typescript-configuration-resilience` and `typescript-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the resources, which file owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a file in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `package.json` and `sdk-map.md` of the generated package at version `1.0.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Twilio |
| Package name (what you install, and what you import) | `twilio` — **not on npm**; built from source (see *Install*) |
| Import specifier | `twilio` — the package root is the **only** entry; deep imports do not resolve |
| Version | `1.0.0` (API spec version `1.0.0`) |
| Client class | `TwilioClient` (`src/client.ts`) — one class, no sync/async split |
| Options type | `ClientOptions`, with `DEFAULT_CLIENT_OPTIONS` beside it (`src/client-options.ts`) |
| Client construction | `new TwilioClient(clientOptions: Partial<ClientOptions> = {})` — **every** field is optional, so `new TwilioClient()` compiles. Fields: `serverEnvironment` · `serverOptions` · `timeout` · `fetch` · `accountSidAuthToken`. `timeout` defaults to `60_000` ms |
| Auth | **HTTP Basic** — set `ClientOptions.accountSidAuthToken` |
| Environments | 1 environment (`ServerEnvironment.Production` *(default)*) × 15 server groups |
| Base-URL config | `serverOptions.<group>.<environment>.baseUrl` (`src/servers.ts`) |
| Node floor | `>=20` (`engines.node`) |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini` — the only one |
| Module format | dual ESM + CommonJS folder dialects (`dist/esm`, `dist/commonjs`) behind one export |
| Typing | the package ships its own `.d.ts` and is generated under strict TypeScript. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Surface | 898 operations · 318 resources · 838 models · 399 open enums · 4 unions · 39 per-operation error subclasses |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import specifier, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install

This SDK is not published to npm, so the install comes straight from the repository the plugin records for it:

```bash
npm install git+https://github.com/context-plugins/twilio-typescript-sdk#main
```

That fetches everything the package's `files` list packs — `src/`, `sdk-map.md` and the pages under `map/operations/` — so **every lookup on this page works as soon as the install finishes**. **Make sure the installed package is built**, as the source on GitHub is not pre-built.

Do not vendor its `src/` into your project, point `tsconfig` `paths` at a throwaway clone, or import from `dist/` directly. Installing the package properly is what makes the `exports` map, the shipped `.d.ts` chain and the dual-dialect resolution behave the way the SDK expects — **and it is what puts the SDK map inside `node_modules`, which is where every lookup below reads it from**. Requires Node `>=20` (`engines.node`).

## Imports — one entry, and only one

**Every** public name is re-exported from the package root — the client, `ClientOptions`, `ServerEnvironment`, 1241 model types with the schema value beside each, the error classes, and the runtime types (`ApiPromise`, `ApiResult`, `RequestOptions`, `ErrorPayload`, `Declared`, `Schema`, `EnumSchema`, `Encoded`).

```ts
import { TwilioClient, ServerEnvironment, ResponseError, TwilioError } from "twilio";
import type { ClientOptions, AccountType } from "twilio";
```

Things the specifier alone will not tell you:

- **Deep imports do not resolve.** The `exports` map exposes `.` and `./package.json` and nothing else, so `twilio/models/…` fails (`TS2307`) even though the file exists in the shipped `src/`. Every `Source` path on the SDK map is where to **read** a shape, never what to import.
- **⚠ The SDK exports a model type literally named `Error`** (`src/models/error.ts`, schema `errorSchema`). Import it unaliased and it **shadows the global `Error`** for the rest of the file. Alias it: `import type { Error as SdkError } from "twilio"`.
- **⚠ The SDK exports a model type literally named `Event`** (`src/models/event.ts`, schema `eventSchema`). Import it unaliased and it **shadows the global `Event`** for the rest of the file. Alias it: `import type { Event as SdkEvent } from "twilio"`.
- **⚠ The SDK exports a model type literally named `Response`** (`src/models/response.ts`, schema `responseSchema`). Import it unaliased and it **shadows the global `Response`** for the rest of the file. Alias it: `import type { Response as SdkResponse } from "twilio"`.
- **From CommonJS**, the typed spelling is `import sdk = require("twilio")`. A plain `require` destructure runs but yields `any`.
- **`instanceof` is reliable within one dialect.** A process that loads both (`import` in one file, `require` in another) gets two independent copies of every error class, and `instanceof` across that boundary is `false` — narrow on `err.kind` / `err.payload.kind` / `err.name` there.

Under `verbatimModuleSyntax`, names carrying no runtime value (`ClientOptions`, every model type) must be imported with `import type`. Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional field rather than assigning `undefined` to it.

## Environments

`ClientOptions.serverEnvironment` selects one environment for the whole client (`src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type — not a TypeScript `enum` — and unlike the model enums it is **closed**, so only its declared members are assignable.

| Group | Environment | Base URL | Override at |
| --- | --- | --- | --- |
| `default` | `production` *(default)* | `https://api.twilio.com` | `serverOptions.default.production.baseUrl` |
| `default1` | `production` *(default)* | `https://messaging.twilio.com` | `serverOptions.default1.production.baseUrl` |
| `default2` | `production` *(default)* | `https://content.twilio.com` | `serverOptions.default2.production.baseUrl` |
| `default3` | `production` *(default)* | `https://verify.twilio.com` | `serverOptions.default3.production.baseUrl` |
| `default4` | `production` *(default)* | `https://lookups.twilio.com` | `serverOptions.default4.production.baseUrl` |
| `default5` | `production` *(default)* | `https://numbers.twilio.com` | `serverOptions.default5.production.baseUrl` |
| `default6` | `production` *(default)* | `https://video.twilio.com` | `serverOptions.default6.production.baseUrl` |
| `default7` | `production` *(default)* | `https://conversations.twilio.com` | `serverOptions.default7.production.baseUrl` |
| `default8` | `production` *(default)* | `https://taskrouter.twilio.com` | `serverOptions.default8.production.baseUrl` |
| `default9` | `production` *(default)* | `https://trusthub.twilio.com` | `serverOptions.default9.production.baseUrl` |
| `default10` | `production` *(default)* | `https://proxy.twilio.com` | `serverOptions.default10.production.baseUrl` |
| `default11` | `production` *(default)* | `https://studio.twilio.com` | `serverOptions.default11.production.baseUrl` |
| `default12` | `production` *(default)* | `https://sync.twilio.com` | `serverOptions.default12.production.baseUrl` |
| `default13` | `production` *(default)* | `https://flex-api.twilio.com` | `serverOptions.default13.production.baseUrl` |
| `default14` | `production` *(default)* | `https://insights.twilio.com` | `serverOptions.default14.production.baseUrl` |

Consequences to state on every contract sheet that touches configuration:

- Constructing the client with no options selects **`ServerEnvironment.Production`**, silently.
- ⚠ **This SDK declares exactly one environment**, so reaching any other host is a `serverOptions` override, not an environment value — `serverOptions: { default: { production: { baseUrl: "…" } } }`. Note the key is still `production`: the environment name and the host it points at are now decoupled, which is exactly the shape of configuration that gets a live secret pointed at a test host or the reverse. Make the deployment's intent explicit where the client is built, and verify it.
- An override merges with the built-in default **per group-and-environment pair, key by key**; a `baseUrl` override replaces the template verbatim, template variable values are percent-encoded into it, and templates expand per request rather than once at construction.
- Each operation is bound to one server group at generation time. A map block carries a **Server** bullet only when its group is not `default`.
- An environment value the SDK does not know throws `SdkError` **synchronously out of the operation method** at the first call — not at construction — so `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

## Auth pattern (1 scheme)

Authentication is **per operation**: every operation declares the requirement it enforces and the SDK sends exactly that. Each block on a map page carries an **Auth** bullet, `none` included. There is no client-global switch and no per-call override. 898 of the 898 operations require a credential and 0 are public.

| `ClientOptions` field | Scheme kind | What the SDK sends |
| --- | --- | --- |
| `accountSidAuthToken` | HTTP Basic | `Authorization: Basic <base64 of username:password>` |

```ts
const client = new TwilioClient({
  accountSidAuthToken: { username: process.env.API_USERNAME!, password: process.env.API_PASSWORD! },
});
```

**Every credential field is optional at the type level and that is a trap worth flagging on every sheet.** Omit one and nothing fails at construction — the request simply goes out without that credential and the server decides. Most APIs then answer `401`; one that serves anonymous traffic answers `200` and hides the omission entirely. So a `401` on a call you believed was authenticated is usually an unset field rather than an SDK failure; verify the field is set rather than waiting for a `401` to tell you, and check the operation's **Auth** bullet against what the client was actually given.

Three more behaviours the type does not show:

- **A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent; a function counts as present without being invoked.
- **Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives it sends the **first configured** one, in the order the **Auth** bullet prints them.
- **A 401 invalidates, it does not retry.** On a 401 (401 only, not 403) the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires; the current request still rejects.

See `typescript-authentication` for the full picture.

## Resources

Resources are **memoized lazy getters** on the client (`client.<attr>`). Their classes are exported only for their merged namespaces — the per-operation request and error types — and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

| Attribute | Class | Ops | Operations |
| --- | --- | --- | --- |
| `client.api20100401Account` | `Api20100401Account` | 4 | `createAccount` · `fetchAccount` · `listAccount` · `updateAccount` |
| `client.api20100401AddOnResult` | `Api20100401AddOnResult` | 3 | `deleteRecordingAddOnResult` · `fetchRecordingAddOnResult` · `listRecordingAddOnResult` |
| `client.api20100401Address` | `Api20100401Address` | 5 | `createAddress` · `deleteAddress` · `fetchAddress` · `listAddress` · `updateAddress` |
| `client.api20100401AllTime` | `Api20100401AllTime` | 1 | `listUsageRecordAllTime` |
| `client.api20100401Application` | `Api20100401Application` | 5 | `createApplication` · `deleteApplication` · `fetchApplication` · `listApplication` · `updateApplication` |
| `client.api20100401AssignedAddOn` | `Api20100401AssignedAddOn` | 4 | `createIncomingPhoneNumberAssignedAddOn` · `deleteIncomingPhoneNumberAssignedAddOn` · `fetchIncomingPhoneNumberAssignedAddOn` · `listIncomingPhoneNumberAssignedAddOn` |
| `client.api20100401AssignedAddOnExtension` | `Api20100401AssignedAddOnExtension` | 2 | `fetchIncomingPhoneNumberAssignedAddOnExtension` · `listIncomingPhoneNumberAssignedAddOnExtension` |
| `client.api20100401AuthCallsCredentialListMapping` | `Api20100401AuthCallsCredentialListMapping` | 4 | `createSipAuthCallsCredentialListMapping` · `deleteSipAuthCallsCredentialListMapping` · `fetchSipAuthCallsCredentialListMapping` · `listSipAuthCallsCredentialListMapping` |
| `client.api20100401AuthCallsIpAccessControlListMapping` | `Api20100401AuthCallsIpAccessControlListMapping` | 4 | `createSipAuthCallsIpAccessControlListMapping` · `deleteSipAuthCallsIpAccessControlListMapping` · `fetchSipAuthCallsIpAccessControlListMapping` · `listSipAuthCallsIpAccessControlListMapping` |
| `client.api20100401AuthRegistrationsCredentialListMapping` | `Api20100401AuthRegistrationsCredentialListMapping` | 4 | `createSipAuthRegistrationsCredentialListMapping` · `deleteSipAuthRegistrationsCredentialListMapping` · `fetchSipAuthRegistrationsCredentialListMapping` · `listSipAuthRegistrationsCredentialListMapping` |
| `client.api20100401AuthorizedConnectApp` | `Api20100401AuthorizedConnectApp` | 2 | `fetchAuthorizedConnectApp` · `listAuthorizedConnectApp` |
| `client.api20100401AvailablePhoneNumberCountry` | `Api20100401AvailablePhoneNumberCountry` | 2 | `fetchAvailablePhoneNumberCountry` · `listAvailablePhoneNumberCountry` |
| `client.api20100401Balance` | `Api20100401Balance` | 1 | `fetchBalance` |
| `client.api20100401Call` | `Api20100401Call` | 5 | `createCall` · `deleteCall` · `fetchCall` · `listCall` · `updateCall` |
| `client.api20100401CallNotification` | `Api20100401CallNotification` | 2 | `fetchCallNotification` · `listCallNotification` |
| `client.api20100401CallRecording` | `Api20100401CallRecording` | 5 | `createCallRecording` · `deleteCallRecording` · `fetchCallRecording` · `listCallRecording` · `updateCallRecording` |
| `client.api20100401CallTranscription` | `Api20100401CallTranscription` | 2 | `createRealtimeTranscription` · `updateRealtimeTranscription` |
| `client.api20100401Conference` | `Api20100401Conference` | 3 | `fetchConference` · `listConference` · `updateConference` |
| `client.api20100401ConferenceRecording` | `Api20100401ConferenceRecording` | 4 | `deleteConferenceRecording` · `fetchConferenceRecording` · `listConferenceRecording` · `updateConferenceRecording` |
| `client.api20100401ConnectApp` | `Api20100401ConnectApp` | 4 | `deleteConnectApp` · `fetchConnectApp` · `listConnectApp` · `updateConnectApp` |
| `client.api20100401Credential` | `Api20100401Credential` | 5 | `createSipCredential` · `deleteSipCredential` · `fetchSipCredential` · `listSipCredential` · `updateSipCredential` |
| `client.api20100401CredentialList` | `Api20100401CredentialList` | 5 | `createSipCredentialList` · `deleteSipCredentialList` · `fetchSipCredentialList` · `listSipCredentialList` · `updateSipCredentialList` |
| `client.api20100401CredentialListMapping` | `Api20100401CredentialListMapping` | 4 | `createSipCredentialListMapping` · `deleteSipCredentialListMapping` · `fetchSipCredentialListMapping` · `listSipCredentialListMapping` |
| `client.api20100401Daily` | `Api20100401Daily` | 1 | `listUsageRecordDaily` |
| `client.api20100401Data` | `Api20100401Data` | 1 | `fetchRecordingAddOnResultPayloadData` |
| `client.api20100401DependentPhoneNumber` | `Api20100401DependentPhoneNumber` | 1 | `listDependentPhoneNumber` |
| `client.api20100401Domain` | `Api20100401Domain` | 5 | `createSipDomain` · `deleteSipDomain` · `fetchSipDomain` · `listSipDomain` · `updateSipDomain` |
| `client.api20100401Event` | `Api20100401Event` | 1 | `listCallEvent` |
| `client.api20100401Feedback` | `Api20100401Feedback` | 1 | `createMessageFeedback` |
| `client.api20100401IncomingPhoneNumber` | `Api20100401IncomingPhoneNumber` | 5 | `createIncomingPhoneNumber` · `deleteIncomingPhoneNumber` · `fetchIncomingPhoneNumber` · `listIncomingPhoneNumber` · `updateIncomingPhoneNumber` |
| `client.api20100401IncomingPhoneNumberLocal` | `Api20100401IncomingPhoneNumberLocal` | 2 | `createIncomingPhoneNumberLocal` · `listIncomingPhoneNumberLocal` |
| `client.api20100401IncomingPhoneNumberMobile` | `Api20100401IncomingPhoneNumberMobile` | 2 | `createIncomingPhoneNumberMobile` · `listIncomingPhoneNumberMobile` |
| `client.api20100401IncomingPhoneNumberTollFree` | `Api20100401IncomingPhoneNumberTollFree` | 2 | `createIncomingPhoneNumberTollFree` · `listIncomingPhoneNumberTollFree` |
| `client.api20100401IpAccessControlList` | `Api20100401IpAccessControlList` | 5 | `createSipIpAccessControlList` · `deleteSipIpAccessControlList` · `fetchSipIpAccessControlList` · `listSipIpAccessControlList` · `updateSipIpAccessControlList` |
| `client.api20100401IpAccessControlListMapping` | `Api20100401IpAccessControlListMapping` | 4 | `createSipIpAccessControlListMapping` · `deleteSipIpAccessControlListMapping` · `fetchSipIpAccessControlListMapping` · `listSipIpAccessControlListMapping` |
| `client.api20100401Key` | `Api20100401Key` | 4 | `deleteKey` · `fetchKey` · `listKey` · `updateKey` |
| `client.api20100401LastMonth` | `Api20100401LastMonth` | 1 | `listUsageRecordLastMonth` |
| `client.api20100401Local` | `Api20100401Local` | 1 | `listAvailablePhoneNumberLocal` |
| `client.api20100401MachineToMachine` | `Api20100401MachineToMachine` | 1 | `listAvailablePhoneNumberMachineToMachine` |
| `client.api20100401Media` | `Api20100401Media` | 1 | `listMedia` |
| `client.api20100401MediaInstance` | `Api20100401MediaInstance` | 2 | `deleteMedia` · `fetchMedia` |
| `client.api20100401Member` | `Api20100401Member` | 3 | `fetchMember` · `listMember` · `updateMember` |
| `client.api20100401Message` | `Api20100401Message` | 5 | `createMessage` · `deleteMessage` · `fetchMessage` · `listMessage` · `updateMessage` |
| `client.api20100401Mobile` | `Api20100401Mobile` | 1 | `listAvailablePhoneNumberMobile` |
| `client.api20100401Monthly` | `Api20100401Monthly` | 1 | `listUsageRecordMonthly` |
| `client.api20100401National` | `Api20100401National` | 1 | `listAvailablePhoneNumberNational` |
| `client.api20100401NewKey` | `Api20100401NewKey` | 1 | `createNewKey` |
| `client.api20100401NewSigningKey` | `Api20100401NewSigningKey` | 1 | `createNewSigningKey` |
| `client.api20100401Notification` | `Api20100401Notification` | 2 | `fetchNotification` · `listNotification` |
| `client.api20100401OutgoingCallerId` | `Api20100401OutgoingCallerId` | 4 | `deleteOutgoingCallerId` · `fetchOutgoingCallerId` · `listOutgoingCallerId` · `updateOutgoingCallerId` |
| `client.api20100401Participant` | `Api20100401Participant` | 5 | `createParticipant` · `deleteParticipant` · `fetchParticipant` · `listParticipant` · `updateParticipant` |
| `client.api20100401Payload` | `Api20100401Payload` | 3 | `deleteRecordingAddOnResultPayload` · `fetchRecordingAddOnResultPayload` · `listRecordingAddOnResultPayload` |
| `client.api20100401Payment` | `Api20100401Payment` | 2 | `createPayments` · `updatePayments` |
| `client.api20100401Queue` | `Api20100401Queue` | 5 | `createQueue` · `deleteQueue` · `fetchQueue` · `listQueue` · `updateQueue` |
| `client.api20100401Record` | `Api20100401Record` | 1 | `listUsageRecord` |
| `client.api20100401Recording` | `Api20100401Recording` | 3 | `deleteRecording` · `fetchRecording` · `listRecording` |
| `client.api20100401RecordingTranscription` | `Api20100401RecordingTranscription` | 3 | `deleteRecordingTranscription` · `fetchRecordingTranscription` · `listRecordingTranscription` |
| `client.api20100401SharedCost` | `Api20100401SharedCost` | 1 | `listAvailablePhoneNumberSharedCost` |
| `client.api20100401ShortCode` | `Api20100401ShortCode` | 3 | `fetchShortCode` · `listShortCode` · `updateShortCode` |
| `client.api20100401SigningKey` | `Api20100401SigningKey` | 4 | `deleteSigningKey` · `fetchSigningKey` · `listSigningKey` · `updateSigningKey` |
| `client.api20100401SipIpAddress` | `Api20100401SipIpAddress` | 5 | `createSipIpAddress` · `deleteSipIpAddress` · `fetchSipIpAddress` · `listSipIpAddress` · `updateSipIpAddress` |
| `client.api20100401Siprec` | `Api20100401Siprec` | 2 | `createSiprec` · `updateSiprec` |
| `client.api20100401Stream` | `Api20100401Stream` | 2 | `createStream` · `updateStream` |
| `client.api20100401ThisMonth` | `Api20100401ThisMonth` | 1 | `listUsageRecordThisMonth` |
| `client.api20100401Today` | `Api20100401Today` | 1 | `listUsageRecordToday` |
| `client.api20100401Token` | `Api20100401Token` | 1 | `createToken` |
| `client.api20100401TollFree` | `Api20100401TollFree` | 1 | `listAvailablePhoneNumberTollFree` |
| `client.api20100401Transcription` | `Api20100401Transcription` | 3 | `deleteTranscription` · `fetchTranscription` · `listTranscription` |
| `client.api20100401Trigger` | `Api20100401Trigger` | 5 | `createUsageTrigger` · `deleteUsageTrigger` · `fetchUsageTrigger` · `listUsageTrigger` · `updateUsageTrigger` |
| `client.api20100401UserDefinedMessage` | `Api20100401UserDefinedMessage` | 1 | `createUserDefinedMessage` |
| `client.api20100401UserDefinedMessageSubscription` | `Api20100401UserDefinedMessageSubscription` | 2 | `createUserDefinedMessageSubscription` · `deleteUserDefinedMessageSubscription` |
| `client.api20100401ValidationRequest` | `Api20100401ValidationRequest` | 1 | `createValidationRequest` |
| `client.api20100401Voip` | `Api20100401Voip` | 1 | `listAvailablePhoneNumberVoip` |
| `client.api20100401Yearly` | `Api20100401Yearly` | 1 | `listUsageRecordYearly` |
| `client.api20100401Yesterday` | `Api20100401Yesterday` | 1 | `listUsageRecordYesterday` |
| `client.messagingV1AlphaSender` | `MessagingV1AlphaSender` | 4 | `createAlphaSender` · `deleteAlphaSender` · `fetchAlphaSender` · `listAlphaSender` |
| `client.messagingV1BrandRegistration` | `MessagingV1BrandRegistration` | 4 | `createBrandRegistrations` · `fetchBrandRegistrations` · `listBrandRegistrations` · `updateBrandRegistrations` |
| `client.messagingV1BrandRegistrationOtp` | `MessagingV1BrandRegistrationOtp` | 1 | `createBrandRegistrationOtp` |
| `client.messagingV1BrandVetting` | `MessagingV1BrandVetting` | 3 | `createBrandVetting` · `fetchBrandVetting` · `listBrandVetting` |
| `client.messagingV1ChannelSender` | `MessagingV1ChannelSender` | 4 | `createChannelSender` · `deleteChannelSender` · `fetchChannelSender` · `listChannelSender` |
| `client.messagingV1Deactivations` | `MessagingV1Deactivations` | 1 | `fetchDeactivation` |
| `client.messagingV1DestinationAlphaSender` | `MessagingV1DestinationAlphaSender` | 4 | `createDestinationAlphaSender` · `deleteDestinationAlphaSender` · `fetchDestinationAlphaSender` · `listDestinationAlphaSender` |
| `client.messagingV1DomainCerts` | `MessagingV1DomainCerts` | 3 | `deleteDomainCertV4` · `fetchDomainCertV4` · `updateDomainCertV4` |
| `client.messagingV1DomainConfigApi` | `MessagingV1DomainConfigApi` | 2 | `fetchDomainConfig` · `updateDomainConfig` |
| `client.messagingV1DomainConfigMessagingServiceApi` | `MessagingV1DomainConfigMessagingServiceApi` | 1 | `fetchDomainConfigMessagingService` |
| `client.messagingV1ExternalCampaignApi` | `MessagingV1ExternalCampaignApi` | 1 | `createExternalCampaign` |
| `client.messagingV1LinkshorteningMessagingServiceApi` | `MessagingV1LinkshorteningMessagingServiceApi` | 2 | `createLinkshorteningMessagingService` · `deleteLinkshorteningMessagingService` |
| `client.messagingV1LinkshorteningMessagingServiceDomainAssociationApi` | `MessagingV1LinkshorteningMessagingServiceDomainAssociationApi` | 1 | `fetchLinkshorteningMessagingServiceDomainAssociation` |
| `client.messagingV1PhoneNumber` | `MessagingV1PhoneNumber` | 4 | `createPhoneNumber` · `deletePhoneNumber` · `fetchPhoneNumber` · `listPhoneNumber` |
| `client.messagingV1RequestManagedCertApi` | `MessagingV1RequestManagedCertApi` | 1 | `updateRequestManagedCert` |
| `client.messagingV1ServiceApi` | `MessagingV1ServiceApi` | 5 | `createService` · `deleteService` · `fetchService` · `listService` · `updateService` |
| `client.messagingV1ShortCode` | `MessagingV1ShortCode` | 4 | `createShortCode` · `deleteShortCode` · `fetchShortCode2` · `listShortCode2` |
| `client.messagingV1TollfreeVerificationApi` | `MessagingV1TollfreeVerificationApi` | 5 | `createTollfreeVerification` · `deleteTollfreeVerification` · `fetchTollfreeVerification` · `listTollfreeVerification` · `updateTollfreeVerification` |
| `client.messagingV1UsAppToPerson` | `MessagingV1UsAppToPerson` | 5 | `createUsAppToPerson` · `deleteUsAppToPerson` · `fetchUsAppToPerson` · `listUsAppToPerson` · `updateUsAppToPerson` |
| `client.messagingV1UsAppToPersonUsecase` | `MessagingV1UsAppToPersonUsecase` | 1 | `fetchUsAppToPersonUsecase` |
| `client.messagingV1UsecaseApi` | `MessagingV1UsecaseApi` | 1 | `fetchUsecase` |
| `client.messagingV1DomainValidateDns` | `MessagingV1DomainValidateDns` | 1 | `fetchDomainDnsValidation` |
| `client.messagingV2ChannelsSender` | `MessagingV2ChannelsSender` | 5 | `createChannelsSender` · `deleteChannelsSender` · `fetchChannelsSender` · `listChannelsSender` · `updateChannelsSender` |
| `client.messagingV2TypingIndicator` | `MessagingV2TypingIndicator` | 1 | `createTypingIndicator` |
| `client.messagingV2DomainCerts` | `MessagingV2DomainCerts` | 1 | `fetchDomainCertV42` |
| `client.messagingV3TypingIndicator` | `MessagingV3TypingIndicator` | 1 | `createV3TypingIndicator` |
| `client.contentv1ApprovalCreate` | `Contentv1ApprovalCreate` | 1 | `createApprovalCreate` |
| `client.contentv1ApprovalFetch` | `Contentv1ApprovalFetch` | 1 | `fetchApprovalFetch` |
| `client.contentv1ContentApi` | `Contentv1ContentApi` | 5 | `createContent` · `deleteContent` · `fetchContent` · `listContent` · `updateContent` |
| `client.contentv1ContentAndApprovalsApi` | `Contentv1ContentAndApprovalsApi` | 1 | `listContentAndApprovals` |
| `client.contentv1LegacyContentApi` | `Contentv1LegacyContentApi` | 1 | `listLegacyContent` |
| `client.contentV2Content` | `ContentV2Content` | 1 | `listContent2` |
| `client.contentV2ContentAndApprovals` | `ContentV2ContentAndApprovals` | 1 | `listContentAndApprovals2` |
| `client.verifyV2AccessToken` | `VerifyV2AccessToken` | 2 | `createAccessToken` · `fetchAccessToken` |
| `client.verifyV2Bucket` | `VerifyV2Bucket` | 5 | `createBucket` · `deleteBucket` · `fetchBucket` · `listBucket` · `updateBucket` |
| `client.verifyV2Challenge` | `VerifyV2Challenge` | 4 | `createChallenge` · `fetchChallenge` · `listChallenge` · `updateChallenge` |
| `client.verifyV2Entity` | `VerifyV2Entity` | 4 | `createEntity` · `deleteEntity` · `fetchEntity` · `listEntity` |
| `client.verifyV2Factor` | `VerifyV2Factor` | 4 | `deleteFactor` · `fetchFactor` · `listFactor` · `updateFactor` |
| `client.verifyV2FormApi` | `VerifyV2FormApi` | 1 | `fetchForm` |
| `client.verifyV2MessagingConfiguration` | `VerifyV2MessagingConfiguration` | 5 | `createMessagingConfiguration` · `deleteMessagingConfiguration` · `fetchMessagingConfiguration` · `listMessagingConfiguration` · `updateMessagingConfiguration` |
| `client.verifyV2NewFactor` | `VerifyV2NewFactor` | 2 | `createNewFactor` · `createNewFactorPasskey` |
| `client.verifyV2Notification` | `VerifyV2Notification` | 1 | `createNotification` |
| `client.verifyV2RateLimit` | `VerifyV2RateLimit` | 5 | `createRateLimit` · `deleteRateLimit` · `fetchRateLimit` · `listRateLimit` · `updateRateLimit` |
| `client.verifyV2SafelistApi` | `VerifyV2SafelistApi` | 3 | `createSafelist` · `deleteSafelist` · `fetchSafelist` |
| `client.verifyV2ServiceApi` | `VerifyV2ServiceApi` | 5 | `createService2` · `deleteService2` · `fetchService2` · `listService2` · `updateService2` |
| `client.verifyV2Template` | `VerifyV2Template` | 1 | `listVerificationTemplate` |
| `client.verifyV2Verification` | `VerifyV2Verification` | 3 | `createVerification` · `fetchVerification` · `updateVerification` |
| `client.verifyV2VerificationAttemptApi` | `VerifyV2VerificationAttemptApi` | 2 | `fetchVerificationAttempt` · `listVerificationAttempt` |
| `client.verifyV2VerificationAttemptsSummaryApi` | `VerifyV2VerificationAttemptsSummaryApi` | 1 | `fetchVerificationAttemptsSummary` |
| `client.verifyV2VerificationCheck` | `VerifyV2VerificationCheck` | 1 | `createVerificationCheck` |
| `client.verifyV2Webhook` | `VerifyV2Webhook` | 5 | `createWebhook` · `deleteWebhook` · `fetchWebhook` · `listWebhook` · `updateWebhook` |
| `client.verifyV2NewChallenge` | `VerifyV2NewChallenge` | 1 | `createChallengePasskeys` |
| `client.lookupsV1PhoneNumberApi` | `LookupsV1PhoneNumberApi` | 1 | `fetchPhoneNumber2` |
| `client.lookupsV2PhoneNumber` | `LookupsV2PhoneNumber` | 1 | `fetchPhoneNumber3` |
| `client.numbersV1BulkEligibilityApi` | `NumbersV1BulkEligibilityApi` | 2 | `createBulkEligibility` · `fetchBulkEligibility` |
| `client.numbersV1EligibilityApi` | `NumbersV1EligibilityApi` | 1 | `createEligibility` |
| `client.numbersV1PortingPortInApi` | `NumbersV1PortingPortInApi` | 4 | `createPortingPortIn` · `deletePortingPortIn` · `fetchPortingPortIn` · `listPortInRequests` |
| `client.numbersV1PortingPortInPhoneNumberApi` | `NumbersV1PortingPortInPhoneNumberApi` | 2 | `deletePortingPortInPhoneNumber` · `fetchPortingPortInPhoneNumber` |
| `client.numbersV1PortingPortabilityApi` | `NumbersV1PortingPortabilityApi` | 1 | `fetchPortingPortability` |
| `client.numbersV1PortingWebhookConfigurationApi` | `NumbersV1PortingWebhookConfigurationApi` | 1 | `createPortingWebhookConfiguration` |
| `client.numbersV1PortingWebhookConfigurationDeleteApi` | `NumbersV1PortingWebhookConfigurationDeleteApi` | 1 | `deletePortingWebhookConfigurationDelete` |
| `client.numbersV1PortingWebhookConfigurationFetchApi` | `NumbersV1PortingWebhookConfigurationFetchApi` | 1 | `fetchPortingWebhookConfigurationFetch` |
| `client.numbersV1SigningRequestConfigurationApi` | `NumbersV1SigningRequestConfigurationApi` | 2 | `createSigningRequestConfiguration` · `listSigningRequestConfiguration` |
| `client.numbersV1SenderIdRegistration` | `NumbersV1SenderIdRegistration` | 1 | `createSenderIdRegistration` |
| `client.numbersV1SenderIdRegistrationEmbeddedSession` | `NumbersV1SenderIdRegistrationEmbeddedSession` | 1 | `createSenderIdRegistrationEmbeddedSession` |
| `client.numbersV2AuthorizationDocumentApi` | `NumbersV2AuthorizationDocumentApi` | 4 | `createAuthorizationDocument` · `deleteAuthorizationDocument` · `fetchAuthorizationDocument` · `listAuthorizationDocument` |
| `client.numbersV2BulkHostedNumberOrderApi` | `NumbersV2BulkHostedNumberOrderApi` | 2 | `createBulkHostedNumberOrder` · `fetchBulkHostedNumberOrder` |
| `client.numbersV2Bundle` | `NumbersV2Bundle` | 5 | `createBundle` · `deleteBundle` · `fetchBundle` · `listBundle` · `updateBundle` |
| `client.numbersV2BundleCloneApi` | `NumbersV2BundleCloneApi` | 1 | `createBundleClone` |
| `client.numbersV2BundleCopy` | `NumbersV2BundleCopy` | 2 | `createBundleCopy` · `listBundleCopy` |
| `client.numbersV2DependentHostedNumberOrder` | `NumbersV2DependentHostedNumberOrder` | 1 | `listDependentHostedNumberOrder` |
| `client.numbersV2EndUser` | `NumbersV2EndUser` | 5 | `createEndUser` · `deleteEndUser` · `fetchEndUser` · `listEndUser` · `updateEndUser` |
| `client.numbersV2EndUserType` | `NumbersV2EndUserType` | 2 | `fetchEndUserType` · `listEndUserType` |
| `client.numbersV2Evaluation` | `NumbersV2Evaluation` | 3 | `createEvaluation` · `fetchEvaluation` · `listEvaluation` |
| `client.numbersV2HostedNumberOrderApi` | `NumbersV2HostedNumberOrderApi` | 5 | `createHostedNumberOrder` · `deleteHostedNumberOrder` · `fetchHostedNumberOrder` · `listHostedNumberOrder` · `updateHostedNumberOrder` |
| `client.numbersV2ItemAssignment` | `NumbersV2ItemAssignment` | 4 | `createItemAssignment` · `deleteItemAssignment` · `fetchItemAssignment` · `listItemAssignment` |
| `client.numbersV2Regulation` | `NumbersV2Regulation` | 2 | `fetchRegulation` · `listRegulation` |
| `client.numbersV2ReplaceItems` | `NumbersV2ReplaceItems` | 1 | `createReplaceItems` |
| `client.numbersV2SupportingDocument` | `NumbersV2SupportingDocument` | 5 | `createSupportingDocument` · `deleteSupportingDocument` · `fetchSupportingDocument` · `listSupportingDocument` · `updateSupportingDocument` |
| `client.numbersV2SupportingDocumentType` | `NumbersV2SupportingDocumentType` | 2 | `fetchSupportingDocumentType` · `listSupportingDocumentType` |
| `client.v2ShortCodeApplications` | `V2ShortCodeApplications` | 3 | `createShortCodeApplication` · `fetchShortCodeApplication` · `listShortCodeApplications` |
| `client.numbersV3HostedNumbersHostedNumberOrderApi` | `NumbersV3HostedNumbersHostedNumberOrderApi` | 1 | `createHostedNumbersHostedNumberOrder` |
| `client.videoV1Anonymize` | `VideoV1Anonymize` | 1 | `updateRoomParticipantAnonymize` |
| `client.videoV1CompositionApi` | `VideoV1CompositionApi` | 4 | `createComposition` · `deleteComposition` · `fetchComposition` · `listComposition` |
| `client.videoV1CompositionHookApi` | `VideoV1CompositionHookApi` | 5 | `createCompositionHook` · `deleteCompositionHook` · `fetchCompositionHook` · `listCompositionHook` · `updateCompositionHook` |
| `client.videoV1CompositionSettingsApi` | `VideoV1CompositionSettingsApi` | 2 | `createCompositionSettings` · `fetchCompositionSettings` |
| `client.videoV1Participant` | `VideoV1Participant` | 3 | `fetchRoomParticipant` · `listRoomParticipant` · `updateRoomParticipant` |
| `client.videoV1PublishedTrack` | `VideoV1PublishedTrack` | 2 | `fetchRoomParticipantPublishedTrack` · `listRoomParticipantPublishedTrack` |
| `client.videoV1RecordingApi` | `VideoV1RecordingApi` | 3 | `deleteRecording2` · `fetchRecording2` · `listRecording2` |
| `client.videoV1RecordingRules` | `VideoV1RecordingRules` | 2 | `fetchRoomRecordingRule` · `updateRoomRecordingRule` |
| `client.videoV1RecordingSettingsApi` | `VideoV1RecordingSettingsApi` | 2 | `createRecordingSettings` · `fetchRecordingSettings` |
| `client.videoV1RoomApi` | `VideoV1RoomApi` | 4 | `createRoom` · `fetchRoom` · `listRoom` · `updateRoom` |
| `client.videoV1RoomRecording` | `VideoV1RoomRecording` | 3 | `deleteRoomRecording` · `fetchRoomRecording` · `listRoomRecording` |
| `client.videoV1SubscribeRules` | `VideoV1SubscribeRules` | 2 | `fetchRoomParticipantSubscribeRule` · `updateRoomParticipantSubscribeRule` |
| `client.videoV1SubscribedTrack` | `VideoV1SubscribedTrack` | 2 | `fetchRoomParticipantSubscribedTrack` · `listRoomParticipantSubscribedTrack` |
| `client.videoV1Transcriptions` | `VideoV1Transcriptions` | 4 | `createRoomTranscriptions` · `fetchRoomTranscriptions` · `listRoomTranscriptions` · `updateRoomTranscriptions` |
| `client.conversationsV1AddressConfiguration` | `ConversationsV1AddressConfiguration` | 5 | `createConfigurationAddress` · `deleteConfigurationAddress` · `fetchConfigurationAddress` · `listConfigurationAddress` · `updateConfigurationAddress` |
| `client.conversationsV1Binding` | `ConversationsV1Binding` | 3 | `deleteServiceBinding` · `fetchServiceBinding` · `listServiceBinding` |
| `client.conversationsV1ConfigurationApi` | `ConversationsV1ConfigurationApi` | 4 | `fetchConfiguration` · `fetchServiceConfiguration` · `updateConfiguration` · `updateServiceConfiguration` |
| `client.conversationsV1ConversationApi` | `ConversationsV1ConversationApi` | 10 | `createConversation` · `createServiceConversation` · `deleteConversation` · `deleteServiceConversation` · `fetchConversation` · `fetchServiceConversation` · `listConversation` · `listServiceConversation` · `updateConversation` · `updateServiceConversation` |
| `client.conversationsV1ConversationWithParticipantsApi` | `ConversationsV1ConversationWithParticipantsApi` | 2 | `createConversationWithParticipants` · `createServiceConversationWithParticipants` |
| `client.conversationsV1CredentialApi` | `ConversationsV1CredentialApi` | 5 | `createCredential` · `deleteCredential` · `fetchCredential` · `listCredential` · `updateCredential` |
| `client.conversationsV1DeliveryReceipt` | `ConversationsV1DeliveryReceipt` | 4 | `fetchConversationMessageReceipt` · `fetchServiceConversationMessageReceipt` · `listConversationMessageReceipt` · `listServiceConversationMessageReceipt` |
| `client.conversationsV1Message` | `ConversationsV1Message` | 10 | `createConversationMessage` · `createServiceConversationMessage` · `deleteConversationMessage` · `deleteServiceConversationMessage` · `fetchConversationMessage` · `fetchServiceConversationMessage` · `listConversationMessage` · `listServiceConversationMessage` · `updateConversationMessage` · `updateServiceConversationMessage` |
| `client.conversationsV1Notification` | `ConversationsV1Notification` | 2 | `fetchServiceNotification` · `updateServiceNotification` |
| `client.conversationsV1Participant` | `ConversationsV1Participant` | 10 | `createConversationParticipant` · `createServiceConversationParticipant` · `deleteConversationParticipant` · `deleteServiceConversationParticipant` · `fetchConversationParticipant` · `fetchServiceConversationParticipant` · `listConversationParticipant` · `listServiceConversationParticipant` · `updateConversationParticipant` · `updateServiceConversationParticipant` |
| `client.conversationsV1ParticipantConversationApi` | `ConversationsV1ParticipantConversationApi` | 2 | `listParticipantConversation` · `listServiceParticipantConversation` |
| `client.conversationsV1RoleApi` | `ConversationsV1RoleApi` | 10 | `createRole` · `createServiceRole` · `deleteRole` · `deleteServiceRole` · `fetchRole` · `fetchServiceRole` · `listRole` · `listServiceRole` · `updateRole` · `updateServiceRole` |
| `client.conversationsV1ServiceApi` | `ConversationsV1ServiceApi` | 4 | `createService3` · `deleteService3` · `fetchService3` · `listService3` |
| `client.conversationsV1UserApi` | `ConversationsV1UserApi` | 10 | `createServiceUser` · `createUser` · `deleteServiceUser` · `deleteUser` · `fetchServiceUser` · `fetchUser` · `listServiceUser` · `listUser` · `updateServiceUser` · `updateUser` |
| `client.conversationsV1UserConversation` | `ConversationsV1UserConversation` | 8 | `deleteServiceUserConversation` · `deleteUserConversation` · `fetchServiceUserConversation` · `fetchUserConversation` · `listServiceUserConversation` · `listUserConversation` · `updateServiceUserConversation` · `updateUserConversation` |
| `client.conversationsV1Webhook` | `ConversationsV1Webhook` | 14 | `createConversationScopedWebhook` · `createServiceConversationScopedWebhook` · `deleteConversationScopedWebhook` · `deleteServiceConversationScopedWebhook` · `fetchConfigurationWebhook` · `fetchConversationScopedWebhook` · `fetchServiceConversationScopedWebhook` · `fetchServiceWebhookConfiguration` · `listConversationScopedWebhook` · `listServiceConversationScopedWebhook` · `updateConfigurationWebhook` · `updateConversationScopedWebhook` · `updateServiceConversationScopedWebhook` · `updateServiceWebhookConfiguration` |
| `client.conversationsV2ConfigurationApi` | `ConversationsV2ConfigurationApi` | 5 | `createConfiguration` · `deleteConfiguration` · `fetchConfiguration2` · `listConfiguration` · `updateConfiguration2` |
| `client.conversationsV2ConversationApi` | `ConversationsV2ConversationApi` | 6 | `createConversationWithConfig` · `deleteConversationAsync` · `fetchConversation2` · `listConversationByAccount` · `patchConversationById` · `updateConversationById` |
| `client.conversationsV2ParticipantApi` | `ConversationsV2ParticipantApi` | 4 | `createParticipantInConversation` · `fetchParticipant2` · `listParticipantByConversation` · `updateParticipantInConversation` |
| `client.conversationsV2CommunicationApi` | `ConversationsV2CommunicationApi` | 3 | `createCommunicationInConversation` · `fetchCommunication` · `listCommunicationByConversation` |
| `client.conversationsV2ActionApi` | `ConversationsV2ActionApi` | 2 | `createConversationAction` · `fetchConversationAction` |
| `client.conversationsV2Operation` | `ConversationsV2Operation` | 1 | `fetchOperationStatus` |
| `client.taskrouterV1Activity` | `TaskrouterV1Activity` | 5 | `createActivity` · `deleteActivity` · `fetchActivity` · `listActivity` · `updateActivity` |
| `client.taskrouterV1Event` | `TaskrouterV1Event` | 2 | `fetchEvent` · `listEvent` |
| `client.taskrouterV1Task` | `TaskrouterV1Task` | 5 | `createTask` · `deleteTask` · `fetchTask` · `listTask` · `updateTask` |
| `client.taskrouterV1TaskChannel` | `TaskrouterV1TaskChannel` | 5 | `createTaskChannel` · `deleteTaskChannel` · `fetchTaskChannel` · `listTaskChannel` · `updateTaskChannel` |
| `client.taskrouterV1TaskQueue` | `TaskrouterV1TaskQueue` | 5 | `createTaskQueue` · `deleteTaskQueue` · `fetchTaskQueue` · `listTaskQueue` · `updateTaskQueue` |
| `client.taskrouterV1TaskQueueBulkRealTimeStatistics` | `TaskrouterV1TaskQueueBulkRealTimeStatistics` | 1 | `createTaskQueueBulkRealTimeStatistics` |
| `client.taskrouterV1TaskQueueCumulativeStatistics` | `TaskrouterV1TaskQueueCumulativeStatistics` | 1 | `fetchTaskQueueCumulativeStatistics` |
| `client.taskrouterV1TaskQueueRealTimeStatistics` | `TaskrouterV1TaskQueueRealTimeStatistics` | 1 | `fetchTaskQueueRealTimeStatistics` |
| `client.taskrouterV1TaskQueueStatistics` | `TaskrouterV1TaskQueueStatistics` | 1 | `fetchTaskQueueStatistics` |
| `client.taskrouterV1TaskQueuesStatistics` | `TaskrouterV1TaskQueuesStatistics` | 1 | `listTaskQueuesStatistics` |
| `client.taskrouterV1TaskReservation` | `TaskrouterV1TaskReservation` | 3 | `fetchTaskReservation` · `listTaskReservation` · `updateTaskReservation` |
| `client.taskrouterV1Worker` | `TaskrouterV1Worker` | 5 | `createWorker` · `deleteWorker` · `fetchWorker` · `listWorker` · `updateWorker` |
| `client.taskrouterV1WorkerChannel` | `TaskrouterV1WorkerChannel` | 3 | `fetchWorkerChannel` · `listWorkerChannel` · `updateWorkerChannel` |
| `client.taskrouterV1WorkerReservation` | `TaskrouterV1WorkerReservation` | 3 | `fetchWorkerReservation` · `listWorkerReservation` · `updateWorkerReservation` |
| `client.taskrouterV1WorkerStatistics` | `TaskrouterV1WorkerStatistics` | 1 | `fetchWorkerInstanceStatistics` |
| `client.taskrouterV1WorkersCumulativeStatistics` | `TaskrouterV1WorkersCumulativeStatistics` | 1 | `fetchWorkersCumulativeStatistics` |
| `client.taskrouterV1WorkersRealTimeStatistics` | `TaskrouterV1WorkersRealTimeStatistics` | 1 | `fetchWorkersRealTimeStatistics` |
| `client.taskrouterV1WorkersStatistics` | `TaskrouterV1WorkersStatistics` | 1 | `fetchWorkerStatistics` |
| `client.taskrouterV1Workflow` | `TaskrouterV1Workflow` | 5 | `createWorkflow` · `deleteWorkflow` · `fetchWorkflow` · `listWorkflow` · `updateWorkflow` |
| `client.taskrouterV1WorkflowCumulativeStatistics` | `TaskrouterV1WorkflowCumulativeStatistics` | 1 | `fetchWorkflowCumulativeStatistics` |
| `client.taskrouterV1WorkflowRealTimeStatistics` | `TaskrouterV1WorkflowRealTimeStatistics` | 1 | `fetchWorkflowRealTimeStatistics` |
| `client.taskrouterV1WorkflowStatistics` | `TaskrouterV1WorkflowStatistics` | 1 | `fetchWorkflowStatistics` |
| `client.taskrouterV1WorkspaceApi` | `TaskrouterV1WorkspaceApi` | 5 | `createWorkspace` · `deleteWorkspace` · `fetchWorkspace` · `listWorkspace` · `updateWorkspace` |
| `client.taskrouterV1WorkspaceCumulativeStatistics` | `TaskrouterV1WorkspaceCumulativeStatistics` | 1 | `fetchWorkspaceCumulativeStatistics` |
| `client.taskrouterV1WorkspaceRealTimeStatistics` | `TaskrouterV1WorkspaceRealTimeStatistics` | 1 | `fetchWorkspaceRealTimeStatistics` |
| `client.taskrouterV1WorkspaceStatistics` | `TaskrouterV1WorkspaceStatistics` | 1 | `fetchWorkspaceStatistics` |
| `client.trusthubV1ComplianceInquiries` | `TrusthubV1ComplianceInquiries` | 2 | `createComplianceInquiry` · `updateComplianceInquiry` |
| `client.trusthubV1ComplianceRegistrationInquiries` | `TrusthubV1ComplianceRegistrationInquiries` | 2 | `createComplianceRegistration` · `updateComplianceRegistration` |
| `client.trusthubV1ComplianceTollfreeInquiries` | `TrusthubV1ComplianceTollfreeInquiries` | 1 | `createComplianceTollfreeInquiry` |
| `client.trusthubV1CustomerProfiles` | `TrusthubV1CustomerProfiles` | 5 | `createCustomerProfile` · `deleteCustomerProfile` · `fetchCustomerProfile` · `listCustomerProfile` · `updateCustomerProfile` |
| `client.trusthubV1CustomerProfilesChannelEndpointAssignment` | `TrusthubV1CustomerProfilesChannelEndpointAssignment` | 4 | `createCustomerProfileChannelEndpointAssignment` · `deleteCustomerProfileChannelEndpointAssignment` · `fetchCustomerProfileChannelEndpointAssignment` · `listCustomerProfileChannelEndpointAssignment` |
| `client.trusthubV1CustomerProfilesEntityAssignments` | `TrusthubV1CustomerProfilesEntityAssignments` | 4 | `createCustomerProfileEntityAssignment` · `deleteCustomerProfileEntityAssignment` · `fetchCustomerProfileEntityAssignment` · `listCustomerProfileEntityAssignment` |
| `client.trusthubV1CustomerProfilesEvaluations` | `TrusthubV1CustomerProfilesEvaluations` | 3 | `createCustomerProfileEvaluation` · `fetchCustomerProfileEvaluation` · `listCustomerProfileEvaluation` |
| `client.trusthubV1EndUserApi` | `TrusthubV1EndUserApi` | 5 | `createEndUser2` · `deleteEndUser2` · `fetchEndUser2` · `listEndUser2` · `updateEndUser2` |
| `client.trusthubV1EndUserType` | `TrusthubV1EndUserType` | 2 | `fetchEndUserType2` · `listEndUserType2` |
| `client.trusthubV1PoliciesApi` | `TrusthubV1PoliciesApi` | 2 | `fetchPolicies` · `listPolicies` |
| `client.trusthubV1SupportingDocumentApi` | `TrusthubV1SupportingDocumentApi` | 5 | `createSupportingDocument2` · `deleteSupportingDocument2` · `fetchSupportingDocument2` · `listSupportingDocument2` · `updateSupportingDocument2` |
| `client.trusthubV1SupportingDocumentType` | `TrusthubV1SupportingDocumentType` | 2 | `fetchSupportingDocumentType2` · `listSupportingDocumentType2` |
| `client.trusthubV1TrustProducts` | `TrusthubV1TrustProducts` | 5 | `createTrustProduct` · `deleteTrustProduct` · `fetchTrustProduct` · `listTrustProduct` · `updateTrustProduct` |
| `client.trusthubV1TrustProductsChannelEndpointAssignment` | `TrusthubV1TrustProductsChannelEndpointAssignment` | 4 | `createTrustProductChannelEndpointAssignment` · `deleteTrustProductChannelEndpointAssignment` · `fetchTrustProductChannelEndpointAssignment` · `listTrustProductChannelEndpointAssignment` |
| `client.trusthubV1TrustProductsEntityAssignments` | `TrusthubV1TrustProductsEntityAssignments` | 4 | `createTrustProductEntityAssignment` · `deleteTrustProductEntityAssignment` · `fetchTrustProductEntityAssignment` · `listTrustProductEntityAssignment` |
| `client.trusthubV1TrustProductsEvaluations` | `TrusthubV1TrustProductsEvaluations` | 3 | `createTrustProductEvaluation` · `fetchTrustProductEvaluation` · `listTrustProductEvaluation` |
| `client.proxyV1Interaction` | `ProxyV1Interaction` | 3 | `deleteInteraction` · `fetchInteraction` · `listInteraction` |
| `client.proxyV1MessageInteraction` | `ProxyV1MessageInteraction` | 3 | `createMessageInteraction` · `fetchMessageInteraction` · `listMessageInteraction` |
| `client.proxyV1Participant` | `ProxyV1Participant` | 4 | `createParticipant2` · `deleteParticipant2` · `fetchParticipant3` · `listParticipant2` |
| `client.proxyV1PhoneNumber` | `ProxyV1PhoneNumber` | 5 | `createPhoneNumber2` · `deletePhoneNumber2` · `fetchPhoneNumber4` · `listPhoneNumber2` · `updatePhoneNumber` |
| `client.proxyV1ServiceApi` | `ProxyV1ServiceApi` | 5 | `createService4` · `deleteService4` · `fetchService4` · `listService4` · `updateService3` |
| `client.proxyV1Session` | `ProxyV1Session` | 5 | `createSession` · `deleteSession` · `fetchSession` · `listSession` · `updateSession` |
| `client.studioV1Engagement` | `StudioV1Engagement` | 4 | `createEngagement` · `deleteEngagement` · `fetchEngagement` · `listEngagement` |
| `client.studioV1EngagementContext` | `StudioV1EngagementContext` | 1 | `fetchEngagementContext` |
| `client.studioV1Execution` | `StudioV1Execution` | 5 | `createExecution` · `deleteExecution` · `fetchExecution` · `listExecution` · `updateExecution` |
| `client.studioV1ExecutionContext` | `StudioV1ExecutionContext` | 1 | `fetchExecutionContext` |
| `client.studioV1ExecutionStep` | `StudioV1ExecutionStep` | 2 | `fetchExecutionStep` · `listExecutionStep` |
| `client.studioV1ExecutionStepContext` | `StudioV1ExecutionStepContext` | 1 | `fetchExecutionStepContext` |
| `client.studioV1FlowApi` | `StudioV1FlowApi` | 3 | `deleteFlow` · `fetchFlow` · `listFlow` |
| `client.studioV1Step` | `StudioV1Step` | 2 | `fetchStep` · `listStep` |
| `client.studioV1StepContext` | `StudioV1StepContext` | 1 | `fetchStepContext` |
| `client.studioV2Execution` | `StudioV2Execution` | 5 | `createExecution2` · `deleteExecution2` · `fetchExecution2` · `listExecution2` · `updateExecution2` |
| `client.studioV2ExecutionContext` | `StudioV2ExecutionContext` | 1 | `fetchExecutionContext2` |
| `client.studioV2ExecutionStep` | `StudioV2ExecutionStep` | 2 | `fetchExecutionStep2` · `listExecutionStep2` |
| `client.studioV2ExecutionStepContext` | `StudioV2ExecutionStepContext` | 1 | `fetchExecutionStepContext2` |
| `client.studioV2FlowApi` | `StudioV2FlowApi` | 5 | `createFlow` · `deleteFlow2` · `fetchFlow2` · `listFlow2` · `updateFlow` |
| `client.studioV2FlowRevision` | `StudioV2FlowRevision` | 2 | `fetchFlowRevision` · `listFlowRevision` |
| `client.studioV2FlowTestUserApi` | `StudioV2FlowTestUserApi` | 2 | `fetchTestUser` · `updateTestUser` |
| `client.studioV2FlowValidateApi` | `StudioV2FlowValidateApi` | 1 | `updateFlowValidate` |
| `client.syncV1Document` | `SyncV1Document` | 5 | `createDocument` · `deleteDocument` · `fetchDocument` · `listDocument` · `updateDocument` |
| `client.syncV1DocumentPermission` | `SyncV1DocumentPermission` | 4 | `deleteDocumentPermission` · `fetchDocumentPermission` · `listDocumentPermission` · `updateDocumentPermission` |
| `client.syncV1ServiceApi` | `SyncV1ServiceApi` | 5 | `createService5` · `deleteService5` · `fetchService5` · `listService5` · `updateService4` |
| `client.syncV1StreamMessage` | `SyncV1StreamMessage` | 1 | `createStreamMessage` |
| `client.syncV1SyncList` | `SyncV1SyncList` | 5 | `createSyncList` · `deleteSyncList` · `fetchSyncList` · `listSyncList` · `updateSyncList` |
| `client.syncV1SyncListItem` | `SyncV1SyncListItem` | 5 | `createSyncListItem` · `deleteSyncListItem` · `fetchSyncListItem` · `listSyncListItem` · `updateSyncListItem` |
| `client.syncV1SyncListPermission` | `SyncV1SyncListPermission` | 4 | `deleteSyncListPermission` · `fetchSyncListPermission` · `listSyncListPermission` · `updateSyncListPermission` |
| `client.syncV1SyncMap` | `SyncV1SyncMap` | 5 | `createSyncMap` · `deleteSyncMap` · `fetchSyncMap` · `listSyncMap` · `updateSyncMap` |
| `client.syncV1SyncMapItem` | `SyncV1SyncMapItem` | 5 | `createSyncMapItem` · `deleteSyncMapItem` · `fetchSyncMapItem` · `listSyncMapItem` · `updateSyncMapItem` |
| `client.syncV1SyncMapPermission` | `SyncV1SyncMapPermission` | 4 | `deleteSyncMapPermission` · `fetchSyncMapPermission` · `listSyncMapPermission` · `updateSyncMapPermission` |
| `client.syncV1SyncStream` | `SyncV1SyncStream` | 5 | `createSyncStream` · `deleteSyncStream` · `fetchSyncStream` · `listSyncStream` · `updateSyncStream` |
| `client.flexV1Assessments` | `FlexV1Assessments` | 3 | `createInsightsAssessments` · `listInsightsAssessments` · `updateInsightsAssessments` |
| `client.flexV1ChannelApi` | `FlexV1ChannelApi` | 4 | `createChannel` · `deleteChannel` · `fetchChannel` · `listChannel` |
| `client.flexV1ConfigurationApi` | `FlexV1ConfigurationApi` | 2 | `fetchConfiguration3` · `updateConfiguration3` |
| `client.flexV1ConfiguredPlugin` | `FlexV1ConfiguredPlugin` | 2 | `fetchConfiguredPlugin` · `listConfiguredPlugin` |
| `client.flexV1FlexFlowApi` | `FlexV1FlexFlowApi` | 5 | `createFlexFlow` · `deleteFlexFlow` · `fetchFlexFlow` · `listFlexFlow` · `updateFlexFlow` |
| `client.flexV1InsightsAssessmentsCommentApi` | `FlexV1InsightsAssessmentsCommentApi` | 2 | `createInsightsAssessmentsComment` · `listInsightsAssessmentsComment` |
| `client.flexV1InsightsConversationsApi` | `FlexV1InsightsConversationsApi` | 1 | `listInsightsConversations` |
| `client.flexV1InsightsQuestionnairesApi` | `FlexV1InsightsQuestionnairesApi` | 5 | `createInsightsQuestionnaires` · `deleteInsightsQuestionnaires` · `fetchInsightsQuestionnaires` · `listInsightsQuestionnaires` · `updateInsightsQuestionnaires` |
| `client.flexV1InsightsQuestionnairesCategoryApi` | `FlexV1InsightsQuestionnairesCategoryApi` | 4 | `createInsightsQuestionnairesCategory` · `deleteInsightsQuestionnairesCategory` · `listInsightsQuestionnairesCategory` · `updateInsightsQuestionnairesCategory` |
| `client.flexV1InsightsQuestionnairesQuestionApi` | `FlexV1InsightsQuestionnairesQuestionApi` | 4 | `createInsightsQuestionnairesQuestion` · `deleteInsightsQuestionnairesQuestion` · `listInsightsQuestionnairesQuestion` · `updateInsightsQuestionnairesQuestion` |
| `client.flexV1InsightsSegmentsApi` | `FlexV1InsightsSegmentsApi` | 1 | `listInsightsSegments` |
| `client.flexV1InsightsSessionApi` | `FlexV1InsightsSessionApi` | 1 | `createInsightsSession` |
| `client.flexV1InsightsSettingsAnswerSetsApi` | `FlexV1InsightsSettingsAnswerSetsApi` | 1 | `fetchInsightsSettingsAnswersets` |
| `client.flexV1InsightsSettingsCommentApi` | `FlexV1InsightsSettingsCommentApi` | 1 | `fetchInsightsSettingsComment` |
| `client.flexV1InsightsUserRolesApi` | `FlexV1InsightsUserRolesApi` | 1 | `fetchInsightsUserRoles` |
| `client.flexV1InteractionApi` | `FlexV1InteractionApi` | 3 | `createInteraction` · `fetchInteraction2` · `updateInteraction` |
| `client.flexV1InteractionChannel` | `FlexV1InteractionChannel` | 3 | `fetchInteractionChannel` · `listInteractionChannel` · `updateInteractionChannel` |
| `client.flexV1InteractionChannelInvite` | `FlexV1InteractionChannelInvite` | 2 | `createInteractionChannelInvite` · `listInteractionChannelInvite` |
| `client.flexV1InteractionChannelParticipant` | `FlexV1InteractionChannelParticipant` | 3 | `createInteractionChannelParticipant` · `listInteractionChannelParticipant` · `updateInteractionChannelParticipant` |
| `client.flexV1InteractionTransfer` | `FlexV1InteractionTransfer` | 3 | `createInteractionTransfer` · `fetchInteractionTransfer` · `updateInteractionTransfer` |
| `client.flexV1PluginApi` | `FlexV1PluginApi` | 4 | `createPlugin` · `fetchPlugin` · `listPlugin` · `updatePlugin` |
| `client.flexV1PluginArchiveApi` | `FlexV1PluginArchiveApi` | 1 | `updatePluginArchive` |
| `client.flexV1PluginConfigurationApi` | `FlexV1PluginConfigurationApi` | 3 | `createPluginConfiguration` · `fetchPluginConfiguration` · `listPluginConfiguration` |
| `client.flexV1PluginConfigurationArchiveApi` | `FlexV1PluginConfigurationArchiveApi` | 1 | `updatePluginConfigurationArchive` |
| `client.flexV1PluginReleaseApi` | `FlexV1PluginReleaseApi` | 3 | `createPluginRelease` · `fetchPluginRelease` · `listPluginRelease` |
| `client.flexV1PluginVersionArchiveApi` | `FlexV1PluginVersionArchiveApi` | 1 | `updatePluginVersionArchive` |
| `client.flexV1PluginVersions` | `FlexV1PluginVersions` | 3 | `createPluginVersion` · `fetchPluginVersion` · `listPluginVersion` |
| `client.flexV1ProvisioningStatusApi` | `FlexV1ProvisioningStatusApi` | 1 | `fetchProvisioningStatus` |
| `client.flexV1WebChannelApi` | `FlexV1WebChannelApi` | 5 | `createWebChannel` · `deleteWebChannel` · `fetchWebChannel` · `listWebChannel` · `updateWebChannel` |
| `client.flexV2FlexUserApi` | `FlexV2FlexUserApi` | 2 | `fetchFlexUser` · `updateFlexUser` |
| `client.flexV2WebChannels` | `FlexV2WebChannels` | 1 | `createWebChannel2` |
| `client.insightsV1Annotation` | `InsightsV1Annotation` | 2 | `fetchAnnotation` · `updateAnnotation` |
| `client.insightsV1CallApi` | `InsightsV1CallApi` | 1 | `fetchCall2` |
| `client.insightsV1CallSummariesApi` | `InsightsV1CallSummariesApi` | 1 | `listCallSummaries` |
| `client.insightsV1CallSummaryApi` | `InsightsV1CallSummaryApi` | 1 | `fetchSummary` |
| `client.insightsV1ConferenceApi` | `InsightsV1ConferenceApi` | 2 | `fetchConference2` · `listConference2` |
| `client.insightsV1ConferenceParticipant` | `InsightsV1ConferenceParticipant` | 2 | `fetchConferenceParticipant` · `listConferenceParticipant` |
| `client.insightsV1Event` | `InsightsV1Event` | 1 | `listEvent2` |
| `client.insightsV1Metric` | `InsightsV1Metric` | 1 | `listMetric` |
| `client.insightsV1Participant` | `InsightsV1Participant` | 2 | `fetchVideoParticipantSummary` · `listVideoParticipantSummary` |
| `client.insightsV1Room` | `InsightsV1Room` | 2 | `fetchVideoRoomSummary` · `listVideoRoomSummary` |
| `client.insightsV1Setting` | `InsightsV1Setting` | 2 | `fetchAccountSettings` · `updateAccountSettings` |
| `client.insightsV1CreateAccountReport` | `InsightsV1CreateAccountReport` | 1 | `createAccountReport` |
| `client.insightsV1GetAccountReport` | `InsightsV1GetAccountReport` | 1 | `fetchAccountReport` |
| `client.insightsV1CreateInboundPhoneNumbersReport` | `InsightsV1CreateInboundPhoneNumbersReport` | 1 | `createInboundPhoneNumbersReport` |
| `client.insightsV1GetInboundPhoneNumbersReport` | `InsightsV1GetInboundPhoneNumbersReport` | 1 | `listInboundPhoneNumbersReport` |
| `client.insightsV1CreateOutboundPhoneNumbersReport` | `InsightsV1CreateOutboundPhoneNumbersReport` | 1 | `createOutboundPhoneNumbersReport` |
| `client.insightsV1GetOutboundPhoneNumbersReport` | `InsightsV1GetOutboundPhoneNumbersReport` | 1 | `listOutboundPhoneNumbersReport` |
| `client.twilioInsights` | `TwilioInsights` | 3 | `createQueryResults` · `fetchMetadata` · `fetchQueryResults` |

11 operations are methods on the client itself: `client.createBulkLookup` · `client.createLookupPhoneNumberOverrides` · `client.deleteLookupPhoneNumberOverrides` · `client.deleteLookupRateLimit` · `client.fetchLookupAccountRateLimits` · `client.fetchLookupPhoneNumberOverrides` · `client.fetchLookupRateLimit` · `client.updateChallengePasskeys` · `client.updateLookupPhoneNumberOverrides` · `client.updateLookupRateLimit` · `client.updatePasskeysFactor`.

Every operation has the same call shape — `op(request, options?)`, one **flat, channel-blind** request object first and `RequestOptions` (`{ signal }`) second — and returns `ApiPromise<T, E>`.

⚠ **The request type name is not uniformly `<Operation>Request`.** 2 operations take `<Operation>RequestParams` instead: `createShortCodeApplication`, `createHostedNumbersHostedNumberOrder`. Take the name from the operation's **Signature** bullet on its map page; never construct it from the method name.

## SDK map — look up first, open the file second

The SDK ships a generated map, and `package.json`'s `files` list includes it, so **installing the package gives you the map** — no clone is needed. It sits at the package root, the directory holding `package.json` and the `src/` tree:

- **`sdk-map.md`** — the index: client construction with the full `ClientOptions` table, the *Not on this SDK* table, the two error families with `ApiResult` and `.asApiResult()`, wire serialization for every channel, **the full enum table with every member and its wire value**, servers and auth, runtime and packaging, and the link table into the operations pages.
- **`map/operations/<resource>.md`** — one page per resource, one `###` block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire** (verb and route), **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms** — then a **Fields** table giving every request field its channel, wire name, type, required flag and default, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions.

Locate the installed package before you rely on a lookup:

```bash
node -e "console.log(require.resolve('twilio/package.json'))"
```

Failing that it is at `node_modules/twilio/`. **If the package is not installed, there is no map and no source to read** — mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory.

Every `Source` path on the map is relative to that package root, so `src/models/<file>.ts` opens as written from there — the package ships its `src/` tree, so the path resolves inside `node_modules/twilio/` exactly as the map writes it. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

**The map is the locator; the source files are the shapes.** Read the map first — signatures, routes, request fields with their channels and defaults, return types, error arms, enum values, and which file declares a type are all answered there without opening a single `.ts` file. Then open the one file the map names for what it deliberately does not carry: a model's members, whether each is required, optional or nullable. The map says so itself — *"Shapes live only in the source … Do not derive the path from the type name."*

**`sdk-map.md` carries the invariants every operation block assumes, so read it before any `map/operations/` page**; the pages are written to be read beside it. And **silence means the default**: the index states what holds for every operation — the call shape, the flat channel-blind request object, the `ApiPromise<T, E>` return, the default server group, no pagination and no streaming — and a block departs from one only by saying so. Take the default and move on rather than opening the source to confirm it.

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted header actually selects — the map will not settle it. Read that operation's entry in `api-reference.md` at the package root, keyed by the same signature, *before* writing the sheet row, and record what you found. A value you already "know" for a field the map types as a plain `string` is a lookup, not a recall — the memory ban applies to it.

## Contract facts — the map first, then the source file

**Seven of these are map lookups — don't open a source file for them:** an operation's signature; its request fields with channel, wire name, required flag and default; its return type; its error subclass and the arms with the status each covers; the `ClientOptions` fields and their defaults; the environments, base URLs and auth wiring; **and every enum's members with their wire values**, which `sdk-map.md` tabulates in full.

The table below covers everything else, and the full body behind a map row. Paths are relative to `node_modules/twilio/`:

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

1. **Client construction & lifetime** — load **typescript-client-initialization** before you write `new TwilioClient(…)`. (*The signature won't tell you:* every option is optional, so a client built with no arguments compiles and talks to the default environment with no credential; the client must be **long-lived and app-scoped**, never rebuilt per request, because the resource getters live on it; there is no `close()` or `dispose()` — it owns no pool, only a `fetch`; and when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.)
2. **Authentication** — load **typescript-authentication** before you set credentials. The scheme is `accountSidAuthToken` on `ClientOptions`. (*The signature won't tell you:* the field is optional — omit it and every request goes out unauthenticated with no failure at construction; and a 401 invalidates the cache without retrying the current call. Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **typescript-calling-endpoints** before the first `client.<resource>.<operation>(…)` call. (*The signature won't tell you:* the request object is **flat and channel-blind** — a field named `body` *is* the whole request body and every other field is fanned out to path, query or header by the SDK, so nothing is nested by channel; **an omitted field that has a default is still sent, with that default**; **128 operations resolve to `undefined`**; and `.asApiResult()` must be called on the value the operation returned, because `ApiPromise` overrides `Symbol.species` and `.then()`/`.catch()` hand back a plain `Promise` with the method gone.)
4. **Models** — load **typescript-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* models are plain `type`s built from object literals — no constructor, no builder; `f?: T` means omit the key, while `f: T | null` is **required and nullable** and `null` is a distinct value; enums are **open** (`const` companion plus a union admitting `(string & {})`), so the schema validates the base type only and an unknown server value round-trips instead of throwing — use `.values` to test membership yourself; and every type has a schema companion usable in both directions.)
5. **Error handling** — load **typescript-error-handling** before you write any `try/catch`. (*The signature won't tell you:* there are **two disjoint families** — `ResponseError` and its per-operation subclasses for an API error status, and the `TwilioError` set (`ConnectionError`, `TimeoutError`, `AbortError`, `SdkError`, `SchemaError`, `AuthError`) for no usable response — and neither is `instanceof` the other, so a complete catch needs both arms; **arm tags are schema-derived, not statuses** (see the sheet checklist below); a malformed 2xx body rejects with `SchemaError`, not `ResponseError`, and `.asApiResult()` does not convert it; and a missing response field the schema permits is silently `undefined` rather than any error at all.)
6. **Configuration & resilience** — load **typescript-configuration-resilience** when you set the base URL, timeouts, proxies, TLS, or logging. (*The signature won't tell you:* **the SDK performs no retries at all** — a failed call rejects once, so retry/backoff is entirely yours to build or deliberately omit; **there is no logging and there are no hooks, middleware or interceptors** — `ClientOptions.fetch` is the single extension point for all of it; `timeout` is client-wide with **no per-request timeout**, and a non-finite or non-positive value is not "no timeout" but a fallback to the transport's own ceiling; and a `fetch` replacement that drops `init.signal` makes both the timeout and every `RequestOptions.signal` inert.)
7. **Testing** — load **typescript-testing** before you stub the SDK. (*The signature won't tell you:* the seam is **`ClientOptions.fetch`**, not the client class and not the resource classes — whose constructors take unexported engine internals, so they cannot be instantiated in a test; stub bodies in **wire shape** and let the SDK decode them; assert on the request the SDK actually built, headers included; and cover the failure kinds a `ResponseError`-only test misses, `SchemaError` above all.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a contract sheet for the Twilio TypeScript SDK is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone.

1. **Which host each deployment talks to**, and where that is set. This SDK declares one environment, `ServerEnvironment.Production`, so any other host is a `serverOptions` base-URL override rather than an environment member — give the override path on the sheet.
2. **128 operations resolve to `undefined`** — `await` gives you nothing to inspect, so **`.asApiResult()` is the only way to observe their status and headers** — decide the mode at write time, not by retrofit.
3. **The exact request type name per operation**, taken from the **Signature** bullet — 2 operations take `<Operation>RequestParams`, not `<Operation>Request`.
4. **Every request field with its channel, wire name and default**, because the request object is flat and channel-blind and the SDK fans fields out. An omitted field that has a default is still sent with that default, so a defaulted header shapes the response whether or not the sheet mentions it. Any caller-supplied idempotency or request-id field is the ONLY idempotency this SDK has: it injects none and `RequestOptions` is `{ signal }` only.
5. **Required vs optional vs required-nullable** for every model member the task sets — `f: T` required, `f?: T` omit the key, `f: T | null` required and nullable. And that under `exactOptionalPropertyTypes` an absent optional is **omitted or spread**, never assigned `undefined`.
6. **The error arms for each operation in scope, with the status each covers — and the warning that arm tags are schema-derived, not status codes.** Every operation rejects with its own `ResponseError` subclass narrowed on `err.payload.kind`, and a tag comes from the arm's **body schema**: an arm whose body is a direct model reference is named after that model in lower camel (`"apiError"`), and every other body — a primitive, an array, a map, or no content — is named `"error{Status}"` (`"error400"`, `"error4XX"`, `"errorDefault"`), with a numeric suffix on the second of two arms that would otherwise land on the same name. The same tag means different statuses on different operations, and the same status carries different tags — so a tag is only meaningful beside the arm table it came from, and a shared helper that switches on `kind` across operations is a bug. 39 of 898 operations declare typed error bodies; the rest reject with the base `ResponseError`. Every operation also carries an always-present `"undeclared"` arm holding `rawBody: ArrayBuffer`, for which **matcher precedence** matters: an exact numeric status is looked up across the whole table first, and only then does the first covering wildcard or range win.
7. **That a malformed or drifted 2xx body rejects with `SchemaError`, not `ResponseError`, in both response modes** — `.asApiResult()` converts an HTTP error status, never a Family B failure. Any sheet row for a call whose result is used must name the members the implementer has to assert on, because a thin or truncated body decodes without complaint and the hole surfaces later.
8. **That the SDK performs no retries, no logging, no pagination and no streaming at all**, and that `ClientOptions.fetch` is the one seam where any of it can be added — so whatever the task needs there is yours to build or deliberately omit. Say which.
9. **That `Error`, `Event`, `Response` imported from this package are model types, not the globals of those names** — every sheet that references one should carry the alias it will be imported under. The error base is re-exported as `TwilioError` for the same reason.
10. A **REQUIRED READING** block naming the `typescript-*` companions that govern the steps, with inline `MUST load` pointers.

