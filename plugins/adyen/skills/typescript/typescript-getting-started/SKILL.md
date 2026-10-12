---
name: "typescript-getting-started"
description: "Adyen TypeScript SDK identity and lookup layer (TypeScript/JavaScript only) — install, the single import specifier `adyen`, the server environments and the base-URL knob, the auth pattern, the SDK map that ships inside the installed package (`sdk-map.md` + `map/operations/`) and how to traverse it, and the file table naming the one source file owning each fact the map leaves to the source. Load this before answering any Adyen TypeScript SDK contract question or writing any SDK code."
---

# Getting started with the Adyen TypeScript SDK

> **Who this skill is for.** This is the **lookup layer** for anyone writing Adyen TypeScript SDK code — it is yours to follow directly and fully. Ground every contract fact here (in the SDK map, and in the source files it names) rather than in recall, and carry those facts onto a contract sheet before you implement. Load `typescript-integrate-adyen` for the workflow that wraps this skill.

This is the **SDK-specific** entry point. For general patterns that apply to any APIMatic-generated TypeScript SDK (client construction, auth, calling endpoints, models, error handling, resilience, testing), see the companion API-agnostic skills: `typescript-client-initialization`, `typescript-authentication`, `typescript-calling-endpoints`, `typescript-models`, `typescript-error-handling`, `typescript-configuration-resilience` and `typescript-testing`.

**This page and those companion skills are complementary — load both.** This page is authoritative for the SDK's *identity and surface* (what to install, what to import, the resources, which file owns which fact); the companion skills are the *usage layer* on top — the best-practice way to call each piece and the gotchas a signature cannot show. Reading a file in the installed package does not remove the need to load the skill for that step, so at each step below, load the companion *and* confirm names against the installed package.

## SDK identity

Verified against `package.json` and `sdk-map.md` of the generated package at version `72.0.0`. **Re-verify after a version bump** — this page is a snapshot, not a live read.

| Fact | Value |
| --- | --- |
| API | Adyen |
| Package name (what you install, and what you import) | `adyen` — **not on npm**; built from source (see *Install*) |
| Import specifier | `adyen` — the package root is the **only** entry; deep imports do not resolve |
| Source repository | https://github.com/context-plugins/adyen-typescript-sdk (branch `main` — the ref this map documents) |
| Version | `72.0.0` (API spec version `72`) |
| Client class | `AdyenClient` (`src/client.ts`) — one class, no sync/async split |
| Options type | `ClientOptions` (`src/client-options.ts`) — types only, no resolver beside it |
| Client construction | `new AdyenClient(options: ClientOptions = {})` — the argument is optional, as is **every** field on it, so `new AdyenClient()` compiles. Fields: `serverOptions` · `retry` · `fetch` · `apiKeyAuth` · `basicAuth` · `clientKey`. `retry` is the `RetryOptions` policy; its defaults retry a GET, HEAD, PUT or OPTIONS call up to `3` times and bound each attempt by `retry.timeout` = `60_000` ms, and every one of them can be changed |
| Auth | **API key (header)** — set `ClientOptions.apiKeyAuth`<br>**HTTP Basic** — set `ClientOptions.basicAuth`<br>**API key (query)** — set `ClientOptions.clientKey` |
| Environments | no selector — one environment, so none is emitted; 29 server groups |
| Base-URL config | `serverOptions.<group>.baseUrl` (`src/servers.ts`) |
| Log environment variable | `ADYEN_CLIENT_LOG` |
| Node floor | `>=20.3` (`engines.node`) |
| Runtime dependency | `zod` (`^4.1.0`), imported as `zod/v4-mini` — the only one |
| Module format | dual ESM + CommonJS folder dialects (`dist/esm`, `dist/commonjs`) behind one export |
| Typing | the package ships its own `.d.ts` and is generated under strict TypeScript. Callers get full inference — **a type error against this SDK is a real contract violation, not noise** |
| Surface | 449 operations · 92 resources · 2046 models · 522 open enums · 21 unions · 420 per-operation error subclasses |

The table above is **orientation, not a copy-paste recipe** — it gives you the names and facts (install, import specifier, the auth *pattern*, the base-URL knob), while the actual integration code comes from the companion skills. Load each one as you reach its step (see **Integration workflow** below) and confirm its types against the installed package.

## Install

Install the package straight from the repository the plugin records for it, as it is not published to npm:

```bash
npm install git+https://github.com/context-plugins/adyen-typescript-sdk#main
```

The installed package carries everything its `files` list packs — `src/`, `sdk-map.md` and the pages under `map/operations/` — so **every lookup on this page works as soon as the install finishes**. **Make sure the installed package is built**, as the source on GitHub is not pre-built.

Do not vendor its `src/` into your project, point `tsconfig` `paths` at a throwaway clone, or import from `dist/` directly. Installing the package properly is what makes the `exports` map, the shipped `.d.ts` chain and the dual-dialect resolution behave the way the SDK expects — **and it is what puts the SDK map inside `node_modules`, which is where every lookup below reads it from**. Requires Node `>=20.3` (`engines.node`).

## Imports — one entry, and only one

**Every** public name is re-exported from the package root — the client, `ClientOptions`, 2589 model types with the schema value beside each, the error classes, and the runtime types (`ApiPromise`, `ApiResult`, `RequestOptions`, `RetryOptions`, `RequestRetryOptions`, `ErrorPayload`, `Declared`, `Schema`, `EnumSchema`, `Encoded`).

```ts
import { AdyenClient, ApiError, AdyenError } from "adyen";
import type { ClientOptions, AchDirectDebit } from "adyen";
```

Things the specifier alone will not tell you:

- **Deep imports do not resolve.** The `exports` map exposes `.` and `./package.json` and nothing else, so `adyen/models/…` fails (`TS2307`) even though the file exists in the shipped `src/`. Every `Source` path on the SDK map is where to **read** a shape, never what to import.
- **⚠ The SDK exports a model type literally named `Event`** (`src/models/event.ts`, schema `eventSchema`). Import it unaliased and it **shadows the global `Event`** for the rest of the file. Alias it: `import type { Event as SdkEvent } from "adyen"`.
- **⚠ The SDK exports a model type literally named `File`** (`src/models/file.ts`, schema `fileSchema`). Import it unaliased and it **shadows the global `File`** for the rest of the file. Alias it: `import type { File as SdkFile } from "adyen"`.
- **⚠ The SDK exports a model type literally named `Response`** (`src/models/response.ts`, schema `responseSchema`). Import it unaliased and it **shadows the global `Response`** for the rest of the file. Alias it: `import type { Response as SdkResponse } from "adyen"`.
- **From CommonJS**, the typed spelling is `import sdk = require("adyen")`. A plain `require` destructure runs but yields `any`.
- **`instanceof` is reliable within one dialect.** A process that loads both (`import` in one file, `require` in another) gets two independent copies of every error class, and `instanceof` across that boundary is `false` — narrow on `err.kind` / `err.payload.kind` / `err.name` there.

Under `verbatimModuleSyntax`, names carrying no runtime value (`ClientOptions`, every model type) must be imported with `import type`. Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional field rather than assigning `undefined` to it.

## Hosts

This API declares one environment, so the SDK has **no environment selector** — there is no `ServerEnvironment` type and no field to set (`src/servers.ts`). The host below is the only one the SDK knows, and the override in the last column is the only way to reach another.

| Group | Base URL | Override at |
| --- | --- | --- |
| `default` | `https://checkout-test.adyen.com/v72` | `serverOptions.default.baseUrl` |
| `default1` | `https://pal-test.adyen.com/pal/servlet/Payment/v68` | `serverOptions.default1.baseUrl` |
| `default2` | `https://pal-test.adyen.com/pal/servlet/Recurring/v68` | `serverOptions.default2.baseUrl` |
| `default3` | `https://pal-test.adyen.com/pal/servlet/Payout/v68` | `serverOptions.default3.baseUrl` |
| `default4` | `https://pal-test.adyen.com/pal/servlet/BinLookup/v54` | `serverOptions.default4.baseUrl` |
| `default5` | `https://pal-test.adyen.com/pal/servlet/StoredValue/v46` | `serverOptions.default5.baseUrl` |
| `default6` | `https://ca-test.adyen.com/ca/services/DataProtectionService/v1` | `serverOptions.default6.baseUrl` |
| `default7` | `https://balanceplatform-api-test.adyen.com/fx/api/v1` | `serverOptions.default7.baseUrl` |
| `default8` | `https://pal-test.adyen.com/pal/services/TestCard/v1` | `serverOptions.default8.baseUrl` |
| `default9` | `https://management-test.adyen.com/v3` | `serverOptions.default9.baseUrl` |
| `default10` | `https://cal-test.adyen.com/cal/services/Account/v6` | `serverOptions.default10.baseUrl` |
| `default11` | `https://balance-control-test.adyen.com/balance-control/api/v2` | `serverOptions.default11.baseUrl` |
| `default12` | `https://cal-test.adyen.com/cal/services/Notification/v6` | `serverOptions.default12.baseUrl` |
| `default13` | `https://balanceplatform-api-test.adyen.com/bcl/v2` | `serverOptions.default13.baseUrl` |
| `default14` | `https://balanceplatform-api-test.adyen.com/btl/v4` | `serverOptions.default14.baseUrl` |
| `default15` | `https://balanceplatform-api-test.adyen.com/capital/v1` | `serverOptions.default15.baseUrl` |
| `default16` | `https://cal-test.adyen.com/cal/services/Fund/v6` | `serverOptions.default16.baseUrl` |
| `default17` | `https://test.adyen.com/authe/api/v1` | `serverOptions.default17.baseUrl` |
| `default18` | `https://kyc-test.adyen.com/lem/v4` | `serverOptions.default18.baseUrl` |
| `default19` | `https://cal-test.adyen.com/cal/services/Hop/v6` | `serverOptions.default19.baseUrl` |
| `default20` | `https://balanceplatform-api-test.adyen.com/a2aissuer-api/v1` | `serverOptions.default20.baseUrl` |
| `default21` | `https://obgateway-test.adyen.com/obgateway/v1` | `serverOptions.default21.baseUrl` |
| `default22` | `https://ca-test.adyen.com/ca/services/DisputeService/v30` | `serverOptions.default22.baseUrl` |
| `default23` | `https://balanceplatform-api-test.adyen.com/btl/api/v4` | `serverOptions.default23.baseUrl` |
| `default24` | `https://device-api-test.adyen.com/v1` | `serverOptions.default24.baseUrl` |
| `default25` | `https://softposconfig-test.adyen.com/softposconfig/v3` | `serverOptions.default25.baseUrl` |
| `default26` | `https://management-test.adyen.com/v1` | `serverOptions.default26.baseUrl` |
| `default27` | `https://checkout-test.adyen.com/checkout/possdk/v68` | `serverOptions.default27.baseUrl` |
| `default28` | `https://postfmapi-test.adyen.com/postfmapi/terminal/v1` | `serverOptions.default28.baseUrl` |

Consequences to state on every contract sheet that touches configuration:

- ⚠ **This SDK declares exactly one environment**, so it emits no `ServerEnvironment` at all and reaching any other host is a `serverOptions` base-URL override — `serverOptions: { default: { baseUrl: "…" } }`. Nothing in the options then records **which** deployment this is, which is exactly the shape of configuration that gets a live secret pointed at a test host or the reverse. Make the intent explicit where the client is built, and verify it.
- An override merges with the built-in default **key by key**; a `baseUrl` override replaces the template verbatim, template variable values are percent-encoded into it; server variables are filled in once, as the client is built, and only the path parameters expand per request.
- Each operation is bound to one server group at generation time. A map block carries a **Server** bullet only when its group is not `default`.

## Auth pattern (3 schemes)

Authentication is **per operation**: every operation declares the requirement it enforces and the SDK sends exactly that. Each block on a map page carries an **Auth** bullet, `none` included. There is no client-global switch and no per-call override. 364 of the 449 operations require a credential and 85 are public.

| `ClientOptions` field | Scheme kind | What the SDK sends |
| --- | --- | --- |
| `apiKeyAuth` | API key (header) | header `X-API-Key: <key>` |
| `basicAuth` | HTTP Basic | `Authorization: Basic <base64 of username:password>` |
| `clientKey` | API key (query) | query `clientKey=<key>` |

```ts
const client = new AdyenClient({
  apiKeyAuth: process.env.API_KEY!,
  basicAuth: { username: process.env.API_USERNAME!, password: process.env.API_PASSWORD! },
  clientKey: process.env.API_KEY!,
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
| `client.payments` | `Payments` | 14 | `getSessionsSessionId` · `postAuthorise` · `postAuthorise3D` · `postAuthorise3Ds2` · `postCardDetails` · `postGetAuthenticationResult` · `postPaymentMethods` · `postPayments` · `postPaymentsCancel` · `postPaymentsConfirm` · `postPaymentsDetails` · `postPaymentsDetails1` · `postRetrieve3Ds2Result` · `postSessions` |
| `client.donations` | `Donations` | 2 | `postDonationCampaigns` · `postDonations` |
| `client.paymentLinks` | `PaymentLinks` | 3 | `getPaymentLinksLinkId` · `patchPaymentLinksLinkId` · `postPaymentLinks` |
| `client.modifications` | `Modifications` | 14 | `postAdjustAuthorisation` · `postCancel` · `postCancelOrRefund` · `postCancels` · `postCapture` · `postDonate` · `postPaymentsPaymentPspReferenceAmountUpdates` · `postPaymentsPaymentPspReferenceCancels` · `postPaymentsPaymentPspReferenceCaptures` · `postPaymentsPaymentPspReferenceRefunds` · `postPaymentsPaymentPspReferenceReversals` · `postRefund` · `postTechnicalCancel` · `postVoidPendingRefund` |
| `client.recurringApi` | `RecurringApi` | 4 | `deleteStoredPaymentMethodsStoredPaymentMethodId` · `getStoredPaymentMethods` · `postForward` · `postStoredPaymentMethods` |
| `client.orders` | `Orders` | 3 | `postOrders` · `postOrdersCancel` · `postPaymentMethodsBalance` |
| `client.utility` | `Utility` | 4 | `postApplePaySessions` · `postOriginKeys` · `postPaypalUpdateOrder` · `postValidateShopperId` |
| `client.general` | `General` | 41 | `postAcceptDispute` · `postAccountHolderBalance` · `postAccountHolderTransactionList` · `postAssignTerminals` · `postChangeStatus` · `postCheckBalance` · `postCreateNotificationConfiguration` · `postCreatePermit` · `postCreateTestCardRanges` · `postDebitAccountHolder` · `postDefendDispute` · `postDeleteDisputeDefenseDocument` · `postDeleteNotificationConfigurations` · `postDisable` · `postDisablePermit` · `postFindTerminal` · `postGet3DsAvailability` · `postGetCostEstimate` · `postGetNotificationConfiguration` · `postGetNotificationConfigurationList` · `postGetStoresUnderAccount` · `postGetTerminalDetails` · `postGetTerminalsUnderAccount` · `postIssue` · `postListRecurringDetails` · `postLoad` · `postMergeBalance` · `postNotifyShopper` · `postPayoutAccountHolder` · `postRefundFundsTransfer` · `postRefundNotPaidOutTransfers` · `postRequestSubjectErasure` · `postRetrieveApplicableDefenseReasons` · `postScheduleAccountUpdater` · `postSessions3` · `postSetupBeneficiary` · `postSupplyDefenseDocument` · `postTestNotificationConfiguration` · `postTransferFunds` · `postUpdateNotificationConfiguration` · `postVoidTransaction` |
| `client.initialization` | `Initialization` | 3 | `postStoreDetail` · `postStoreDetailAndSubmitThirdParty` · `postSubmitThirdParty` |
| `client.reviewing` | `Reviewing` | 2 | `postConfirmThirdParty` · `postDeclineThirdParty` |
| `client.instantPayouts` | `InstantPayouts` | 1 | `postPayout` |
| `client.rates` | `Rates` | 1 | `postRatesCalculate` |
| `client.accountCompanyLevel` | `AccountCompanyLevel` | 3 | `getCompanies` · `getCompaniesCompanyId` · `getCompaniesCompanyIdMerchants` |
| `client.accountMerchantLevel` | `AccountMerchantLevel` | 4 | `getMerchants` · `getMerchantsMerchantId` · `postMerchants` · `postMerchantsMerchantIdActivate` |
| `client.accountStoreLevel` | `AccountStoreLevel` | 8 | `getMerchantsMerchantIdStores` · `getMerchantsMerchantIdStoresStoreId` · `getStores` · `getStoresStoreId` · `patchMerchantsMerchantIdStoresStoreId` · `patchStoresStoreId` · `postMerchantsMerchantIdStores` · `postStores` |
| `client.payoutSettingsMerchantLevel` | `PayoutSettingsMerchantLevel` | 5 | `deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId` · `getMerchantsMerchantIdPayoutSettings` · `getMerchantsMerchantIdPayoutSettingsPayoutSettingsId` · `patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId` · `postMerchantsMerchantIdPayoutSettings` |
| `client.usersCompanyLevel` | `UsersCompanyLevel` | 4 | `getCompaniesCompanyIdUsers` · `getCompaniesCompanyIdUsersUserId` · `patchCompaniesCompanyIdUsersUserId` · `postCompaniesCompanyIdUsers` |
| `client.usersMerchantLevel` | `UsersMerchantLevel` | 4 | `getMerchantsMerchantIdUsers` · `getMerchantsMerchantIdUsersUserId` · `patchMerchantsMerchantIdUsersUserId` · `postMerchantsMerchantIdUsers` |
| `client.myApiCredential` | `MyApiCredential` | 6 | `deleteMeAllowedOriginsOriginId` · `getMe` · `getMeAllowedOrigins` · `getMeAllowedOriginsOriginId` · `postMeAllowedOrigins` · `postMeGenerateClientKey` |
| `client.apiCredentialsCompanyLevel` | `ApiCredentialsCompanyLevel` | 4 | `getCompaniesCompanyIdApiCredentials` · `getCompaniesCompanyIdApiCredentialsApiCredentialId` · `patchCompaniesCompanyIdApiCredentialsApiCredentialId` · `postCompaniesCompanyIdApiCredentials` |
| `client.apiCredentialsMerchantLevel` | `ApiCredentialsMerchantLevel` | 4 | `getMerchantsMerchantIdApiCredentials` · `getMerchantsMerchantIdApiCredentialsApiCredentialId` · `patchMerchantsMerchantIdApiCredentialsApiCredentialId` · `postMerchantsMerchantIdApiCredentials` |
| `client.apiKeyCompanyLevel` | `ApiKeyCompanyLevel` | 1 | `postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey` |
| `client.apiKeyMerchantLevel` | `ApiKeyMerchantLevel` | 1 | `postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey` |
| `client.clientKeyCompanyLevel` | `ClientKeyCompanyLevel` | 1 | `postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey` |
| `client.clientKeyMerchantLevel` | `ClientKeyMerchantLevel` | 1 | `postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey` |
| `client.allowedOriginsCompanyLevel` | `AllowedOriginsCompanyLevel` | 4 | `deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId` · `getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins` · `getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId` · `postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins` |
| `client.allowedOriginsMerchantLevel` | `AllowedOriginsMerchantLevel` | 4 | `deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId` · `getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins` · `getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId` · `postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins` |
| `client.webhooksCompanyLevel` | `WebhooksCompanyLevel` | 7 | `deleteCompaniesCompanyIdWebhooksWebhookId` · `getCompaniesCompanyIdWebhooks` · `getCompaniesCompanyIdWebhooksWebhookId` · `patchCompaniesCompanyIdWebhooksWebhookId` · `postCompaniesCompanyIdWebhooks` · `postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac` · `postCompaniesCompanyIdWebhooksWebhookIdTest` |
| `client.webhooksMerchantLevel` | `WebhooksMerchantLevel` | 7 | `deleteMerchantsMerchantIdWebhooksWebhookId` · `getMerchantsMerchantIdWebhooks` · `getMerchantsMerchantIdWebhooksWebhookId` · `patchMerchantsMerchantIdWebhooksWebhookId` · `postMerchantsMerchantIdWebhooks` · `postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac` · `postMerchantsMerchantIdWebhooksWebhookIdTest` |
| `client.paymentMethodsMerchantLevel` | `PaymentMethodsMerchantLevel` | 6 | `getMerchantsMerchantIdPaymentMethodSettings` · `getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId` · `getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains` · `patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId` · `postMerchantsMerchantIdPaymentMethodSettings` · `postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains` |
| `client.terminalsTerminalLevel` | `TerminalsTerminalLevel` | 2 | `getTerminals` · `postTerminalsTerminalIdReassign` |
| `client.terminalActionsCompanyLevel` | `TerminalActionsCompanyLevel` | 2 | `getCompaniesCompanyIdTerminalActions` · `getCompaniesCompanyIdTerminalActionsActionId` |
| `client.terminalActionsTerminalLevel` | `TerminalActionsTerminalLevel` | 1 | `postTerminalsScheduleActions` |
| `client.terminalOrdersCompanyLevel` | `TerminalOrdersCompanyLevel` | 10 | `getCompaniesCompanyIdBillingEntities` · `getCompaniesCompanyIdShippingLocations` · `getCompaniesCompanyIdTerminalModels` · `getCompaniesCompanyIdTerminalOrders` · `getCompaniesCompanyIdTerminalOrdersOrderId` · `getCompaniesCompanyIdTerminalProducts` · `patchCompaniesCompanyIdTerminalOrdersOrderId` · `postCompaniesCompanyIdShippingLocations` · `postCompaniesCompanyIdTerminalOrders` · `postCompaniesCompanyIdTerminalOrdersOrderIdCancel` |
| `client.terminalOrdersMerchantLevel` | `TerminalOrdersMerchantLevel` | 10 | `getMerchantsMerchantIdBillingEntities` · `getMerchantsMerchantIdShippingLocations` · `getMerchantsMerchantIdTerminalModels` · `getMerchantsMerchantIdTerminalOrders` · `getMerchantsMerchantIdTerminalOrdersOrderId` · `getMerchantsMerchantIdTerminalProducts` · `patchMerchantsMerchantIdTerminalOrdersOrderId` · `postMerchantsMerchantIdShippingLocations` · `postMerchantsMerchantIdTerminalOrders` · `postMerchantsMerchantIdTerminalOrdersOrderIdCancel` |
| `client.terminalSettingsCompanyLevel` | `TerminalSettingsCompanyLevel` | 4 | `getCompaniesCompanyIdTerminalLogos` · `getCompaniesCompanyIdTerminalSettings` · `patchCompaniesCompanyIdTerminalLogos` · `patchCompaniesCompanyIdTerminalSettings` |
| `client.terminalSettingsMerchantLevel` | `TerminalSettingsMerchantLevel` | 4 | `getMerchantsMerchantIdTerminalLogos` · `getMerchantsMerchantIdTerminalSettings` · `patchMerchantsMerchantIdTerminalLogos` · `patchMerchantsMerchantIdTerminalSettings` |
| `client.terminalSettingsStoreLevel` | `TerminalSettingsStoreLevel` | 8 | `getMerchantsMerchantIdStoresReferenceTerminalLogos` · `getMerchantsMerchantIdStoresReferenceTerminalSettings` · `getStoresStoreIdTerminalLogos` · `getStoresStoreIdTerminalSettings` · `patchMerchantsMerchantIdStoresReferenceTerminalLogos` · `patchMerchantsMerchantIdStoresReferenceTerminalSettings` · `patchStoresStoreIdTerminalLogos` · `patchStoresStoreIdTerminalSettings` |
| `client.terminalSettingsTerminalLevel` | `TerminalSettingsTerminalLevel` | 4 | `getTerminalsTerminalIdTerminalLogos` · `getTerminalsTerminalIdTerminalSettings` · `patchTerminalsTerminalIdTerminalLogos` · `patchTerminalsTerminalIdTerminalSettings` |
| `client.androidFilesCompanyLevel` | `AndroidFilesCompanyLevel` | 6 | `getCompaniesCompanyIdAndroidApps` · `getCompaniesCompanyIdAndroidAppsId` · `getCompaniesCompanyIdAndroidCertificates` · `patchCompaniesCompanyIdAndroidAppsId` · `postCompaniesCompanyIdAndroidApps` · `postCompaniesCompanyIdAndroidCertificates` |
| `client.splitConfigurationMerchantLevel` | `SplitConfigurationMerchantLevel` | 9 | `deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId` · `deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId` · `getMerchantsMerchantIdSplitConfigurations` · `getMerchantsMerchantIdSplitConfigurationsSplitConfigurationId` · `patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId` · `patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId` · `patchMerchantsSplitConfigurationsRulesSplitLogic` · `postMerchantsMerchantIdSplitConfigurations` · `postMerchantsMerchantIdSplitConfigurationsSplitConfigurationId` |
| `client.donationCampaigns` | `DonationCampaigns` | 6 | `deleteCompaniesCompanyIdCampaignManagementDonationCampaignId` · `getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId` · `patchCompaniesCompanyIdCampaignManagementDonationCampaignId` · `postCompaniesCompanyIdCampaignManagement` · `postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus` · `postCompaniesCompanyIdNonprofits` |
| `client.accountHolders` | `AccountHolders` | 16 | `getAccountHoldersId` · `getAccountHoldersIdBalanceAccounts` · `getAccountHoldersIdTaxFormSummary` · `getAccountHoldersIdTaxForms` · `getAccountHoldersIdTransactionRules` · `patchAccountHoldersId` · `postAccountHolders` · `postCloseAccountHolder` · `postCloseStores` · `postCreateAccountHolder` · `postGetAccountHolder` · `postGetTaxForm` · `postSuspendAccountHolder` · `postUnSuspendAccountHolder` · `postUpdateAccountHolder` · `postUpdateAccountHolderState` |
| `client.accounts` | `Accounts` | 3 | `postCloseAccount` · `postCreateAccount` · `postUpdateAccount` |
| `client.verification` | `Verification` | 8 | `postCheckAccountHolder` · `postDeleteBankAccounts` · `postDeleteLegalArrangements` · `postDeletePayoutMethods` · `postDeleteShareholders` · `postDeleteSignatories` · `postGetUploadedDocuments` · `postUploadDocument` |
| `client.balancesOverview` | `BalancesOverview` | 2 | `getBalanceOverviewCompaniesCompanyAccountCodeBalances` · `getBalanceOverviewMerchantsMerchantAccountCodeBalances` |
| `client.balanceTransfers` | `BalanceTransfers` | 1 | `postBalanceTransfers` |
| `client.platform` | `Platform` | 3 | `getBalancePlatformsId` · `getBalancePlatformsIdAccountHolders` · `getBalancePlatformsIdTransactionRules` |
| `client.balanceAccounts` | `BalanceAccounts` | 5 | `getBalanceAccountsId` · `getBalanceAccountsIdPaymentInstruments` · `getBalanceAccountsIdTransactionRules` · `patchBalanceAccountsId` · `postBalanceAccounts` |
| `client.balances` | `Balances` | 5 | `deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId` · `getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings` · `getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId` · `patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingId` · `postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettings` |
| `client.managedPayoutSchedules` | `ManagedPayoutSchedules` | 8 | `deleteBalanceAccountsBalanceAccountIdPayoutSchedulesId` · `getBalanceAccountsBalanceAccountIdPayoutSchedules` · `getBalanceAccountsBalanceAccountIdPayoutSchedulesId` · `getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutions` · `getBalancePlatformsBalancePlatformIdPayoutSchedules` · `getBalancePlatformsBalancePlatformIdPayoutSchedulesId` · `patchBalanceAccountsBalanceAccountIdPayoutSchedulesId` · `postBalanceAccountsBalanceAccountIdPayoutSchedules` |
| `client.customPayoutSchedulesSweeps` | `CustomPayoutSchedulesSweeps` | 5 | `deleteBalanceAccountsBalanceAccountIdSweepsSweepId` · `getBalanceAccountsBalanceAccountIdSweeps` · `getBalanceAccountsBalanceAccountIdSweepsSweepId` · `patchBalanceAccountsBalanceAccountIdSweepsSweepId` · `postBalanceAccountsBalanceAccountIdSweeps` |
| `client.authorizedCardUsers` | `AuthorizedCardUsers` | 4 | `deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers` · `getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers` · `patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers` · `postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsers` |
| `client.recurringTopUps` | `RecurringTopUps` | 4 | `deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId` · `getBalanceAccountsBalanceAccountIdRecurringTopUps` · `patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpId` · `postBalanceAccountsBalanceAccountIdRecurringTopUps` |
| `client.paymentInstruments` | `PaymentInstruments` | 9 | `getPaymentInstrumentsId` · `getPaymentInstrumentsIdNetworkTokenActivationData` · `getPaymentInstrumentsIdNetworkTokens` · `getPaymentInstrumentsIdReveal` · `getPaymentInstrumentsIdTransactionRules` · `patchPaymentInstrumentsId` · `postPaymentInstruments` · `postPaymentInstrumentsIdNetworkTokenActivationData` · `postPaymentInstrumentsReveal` |
| `client.paymentInstrumentGroups` | `PaymentInstrumentGroups` | 3 | `getPaymentInstrumentGroupsId` · `getPaymentInstrumentGroupsIdTransactionRules` · `postPaymentInstrumentGroups` |
| `client.transactionRules` | `TransactionRules` | 4 | `deleteTransactionRulesTransactionRuleId` · `getTransactionRulesTransactionRuleId` · `patchTransactionRulesTransactionRuleId` · `postTransactionRules` |
| `client.bankAccountValidation` | `BankAccountValidation` | 1 | `postValidateBankAccountIdentification` |
| `client.networkTokens` | `NetworkTokens` | 2 | `getNetworkTokensNetworkTokenId` · `patchNetworkTokensNetworkTokenId` |
| `client.grantAccounts` | `GrantAccounts` | 2 | `getGrantAccountsId` · `getGrantAccountsId1` |
| `client.grantOffersApi` | `GrantOffersApi` | 4 | `getGrantOffers` · `getGrantOffersGrantOfferId` · `getGrantOffersId` · `getGrantOffers1` |
| `client.cardOrders` | `CardOrders` | 2 | `getCardorders` · `getCardordersIdItems` |
| `client.directDebitMandates` | `DirectDebitMandates` | 4 | `getMandates` · `getMandatesMandateId` · `patchMandatesMandateId` · `postMandatesMandateIdCancel` |
| `client.manageCardPin` | `ManageCardPin` | 3 | `getPublicKey` · `postPinsChange` · `postPinsReveal` |
| `client.transferRoutes` | `TransferRoutes` | 1 | `postTransferRoutesCalculate` |
| `client.scaDeviceManagement` | `ScaDeviceManagement` | 4 | `deleteScaDevicesDeviceId` · `patchScaDevicesDeviceId` · `postScaDevices` · `postScaDevicesDeviceIdScaAssociations` |
| `client.transferLimitsBalanceAccountLevel` | `TransferLimitsBalanceAccountLevel` | 6 | `deleteBalanceAccountsIdTransferLimitsTransferLimitId` · `getBalanceAccountsIdTransferLimits` · `getBalanceAccountsIdTransferLimitsCurrent` · `getBalanceAccountsIdTransferLimitsTransferLimitId` · `postBalanceAccountsIdTransferLimits` · `postBalanceAccountsIdTransferLimitsApprove` |
| `client.transferLimitsBalancePlatformLevel` | `TransferLimitsBalancePlatformLevel` | 4 | `deleteBalancePlatformsIdTransferLimitsTransferLimitId` · `getBalancePlatformsIdTransferLimits` · `getBalancePlatformsIdTransferLimitsTransferLimitId` · `postBalancePlatformsIdTransferLimits` |
| `client.manageScaDevices` | `ManageScaDevices` | 6 | `deleteRegisteredDevicesId` · `getRegisteredDevices` · `patchRegisteredDevicesDeviceIdAssociations` · `patchRegisteredDevicesId` · `postRegisteredDevices` · `postRegisteredDevicesDeviceIdAssociations` |
| `client.scaAssociationManagement` | `ScaAssociationManagement` | 3 | `deleteScaAssociations` · `getScaAssociations` · `patchScaAssociations` |
| `client.transfers` | `Transfers` | 6 | `getTransfers` · `getTransfersId` · `postTransfers` · `postTransfersApprove` · `postTransfersCancel` · `postTransfersTransferIdReturns` |
| `client.transactions` | `Transactions` | 2 | `getTransactions` · `getTransactionsId` |
| `client.capital` | `Capital` | 3 | `getGrants` · `getGrantsId` · `postGrants` |
| `client.cashOutApi` | `CashOutApi` | 1 | `postCashouts` |
| `client.dynamicOffers` | `DynamicOffers` | 3 | `getDynamicOffers` · `postDynamicOffersIdCalculate` · `postDynamicOffersIdGrantOffer` |
| `client.grantsApi` | `GrantsApi` | 6 | `getGrantsGrantId` · `getGrantsGrantIdDisbursements` · `getGrantsGrantIdDisbursementsDisbursementId` · `getGrants2` · `patchGrantsGrantIdDisbursementsDisbursementId` · `postGrants2` |
| `client.sessionAuthentication` | `SessionAuthentication` | 2 | `postAuthCertificate` · `postSessions2` |
| `client.legalEntities` | `LegalEntities` | 7 | `getLegalEntitiesId` · `getLegalEntitiesIdBusinessLines` · `patchLegalEntitiesId` · `postLegalEntities` · `postLegalEntitiesIdCheckVerificationErrors` · `postLegalEntitiesIdConfirmDataReview` · `postLegalEntitiesIdRequestPeriodicReview` |
| `client.transferInstruments` | `TransferInstruments` | 4 | `deleteTransferInstrumentsId` · `getTransferInstrumentsId` · `patchTransferInstrumentsId` · `postTransferInstruments` |
| `client.businessLinesApi` | `BusinessLinesApi` | 4 | `deleteBusinessLinesId` · `getBusinessLinesId` · `patchBusinessLinesId` · `postBusinessLines` |
| `client.documents` | `Documents` | 4 | `deleteDocumentsId` · `getDocumentsId` · `patchDocumentsId` · `postDocuments` |
| `client.termsOfService` | `TermsOfService` | 5 | `getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereference` · `getLegalEntitiesIdTermsOfServiceAcceptanceInfos` · `getLegalEntitiesIdTermsOfServiceStatus` · `patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid` · `postLegalEntitiesIdTermsOfService` |
| `client.pciQuestionnaires` | `PciQuestionnaires` | 5 | `getLegalEntitiesIdPciQuestionnaires` · `getLegalEntitiesIdPciQuestionnairesPciid` · `postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates` · `postLegalEntitiesIdPciQuestionnairesSignPciTemplates` · `postLegalEntitiesIdPciQuestionnairesSigningRequired` |
| `client.taxEDeliveryConsent` | `TaxEDeliveryConsent` | 2 | `postLegalEntitiesIdCheckTaxElectronicDeliveryConsent` · `postLegalEntitiesIdSetTaxElectronicDeliveryConsent` |
| `client.hostedOnboarding` | `HostedOnboarding` | 3 | `getThemes` · `getThemesId` · `postLegalEntitiesIdOnboardingLinks` |
| `client.hostedOnboardingPage` | `HostedOnboardingPage` | 1 | `postGetOnboardingUrl` |
| `client.pciComplianceQuestionnairePage` | `PciComplianceQuestionnairePage` | 1 | `postGetPciQuestionnaireUrl` |
| `client.iDealProfiles` | `IDealProfiles` | 3 | `postIdealProfileAuthLink` · `postIdealProfileAuthenticate` · `postIdealProfileRegister` |
| `client.accountVerification` | `AccountVerification` | 2 | `getAccountVerificationReportsCode` · `postAccountVerificationRoutes` |
| `client.disputeAttachments` | `DisputeAttachments` | 4 | `deleteDisputesDisputeIdAttachmentsAttachmentId` · `getDisputesDisputeIdAttachments` · `getDisputesDisputeIdAttachmentsAttachmentId` · `postDisputesDisputeIdAttachments` |
| `client.raiseDisputes` | `RaiseDisputes` | 4 | `getDisputes` · `getDisputesId` · `patchDisputesId` · `postDisputes` |
| `client.paymentsApp` | `PaymentsApp` | 5 | `getMerchantsMerchantIdPaymentsApps` · `getMerchantsMerchantIdStoresStoreIdPaymentsApps` · `postMerchantsMerchantIdGeneratePaymentsAppBoardingToken` · `postMerchantsMerchantIdPaymentsAppsInstallationIdRevoke` · `postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken` |

18 operations are methods on the client itself: `client.abortRequest` · `client.adminRequest` · `client.balanceInquiryRequest` · `client.cardAcquisitionRequest` · `client.cardReaderApduRequest` · `client.diagnosisRequest` · `client.displayRequest` · `client.enableServiceRequest` · `client.getTotalsRequest` · `client.inputRequest` · `client.loginRequest` · `client.logoutRequest` · `client.paymentRequest` · `client.printRequest` · `client.reconciliationRequest` · `client.reversalRequest` · `client.storedValueRequest` · `client.transactionStatusRequest`.

Every operation has the same call shape — `op(request, options?)`, one **flat, channel-blind** request object first and `RequestOptions` (`{ signal, retry, logging }`) second — and returns `ApiPromise<T, E>`.

⚠ **The request type name is not uniformly `<Operation>Request`.** A name that collides inside its namespace is promoted to `<Operation>RequestParams` instead — no operation in this SDK takes that spelling at this version. Take the name from the operation's **Signature** bullet on its map page; never construct it from the method name.

## SDK map — look up first, open the file second

The SDK ships a generated map, and `package.json`'s `files` list includes it, so **installing the package gives you the map** — no clone is needed. It sits at the package root, the directory holding `package.json` and the `src/` tree:

- **`sdk-map.md`** — the index: client construction with the full `ClientOptions` table, the *Not on this SDK* table, the one error family with `ApiResult` and `.asApiResult()`, wire serialization for every channel, servers and auth, runtime and packaging, and the link table into the operations pages.
- **`map/operations/<resource>.md`** — one page per resource, one `###` block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire** (verb and route), **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms** — then a **Fields** table giving every request field its channel, wire name, type, required flag and default, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions.

Locate the installed package before you rely on a lookup:

```bash
node -e "console.log(require.resolve('adyen/package.json'))"
```

Failing that it is at `node_modules/adyen/`. **If the resolve fails, or the directory it prints carries no `sdk-map.md`, the map is still in the SDK's own repository** — <https://github.com/context-plugins/adyen-typescript-sdk>, branch `main`. A registry id is a claim on a shared index rather than proof of identity, so it can resolve to an unrelated package or to a release predating the map; the repository is the copy that is this SDK by construction. Read it there, and if neither route yields a map, mark the fact `UNVERIFIED` and say what would settle it rather than answering from memory.

Every `Source` path on the map is relative to that package root, so `src/models/<file>.ts` opens as written from there — the package ships its `src/` tree, so the path resolves inside `node_modules/adyen/` exactly as the map writes it. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

**The map is the locator; the source files are the shapes.** Read the map first — signatures, routes, request fields with their channels and defaults, return types, error arms, and which file declares a type are all answered there without opening a single `.ts` file. Then open the one file the map names for what it deliberately does not carry: a model's members, whether each is required, optional or nullable, and an enum's members with their wire values — the `as const` object in the enum's own file (for an enum inside a model, the file the model imports it from). The map says so itself — *"Shapes live only in the source … Do not derive the path from the type name."*

**`sdk-map.md` carries the invariants every operation block assumes, so read it before any `map/operations/` page**; the pages are written to be read beside it. And **silence means the default**: the index states what holds for every operation — the call shape, the flat channel-blind request object, the `ApiPromise<T, E>` return, the default server group, no pagination and no streaming — and a block departs from one only by saying so. Take the default and move on rather than opening the source to confirm it.

**The map carries shapes; what an operation *means* lives elsewhere.** When *what* to pass depends on meaning — which values a field accepts beyond its type, a rule that couples two fields, what a defaulted header actually selects — the map will not settle it. Read that operation's entry in `api-reference.md` at the package root, keyed by the same signature, *before* writing the sheet row, and record what you found. A value you already "know" for a field the map types as a plain `string` is a lookup, not a recall — the memory ban applies to it.

## Contract facts — the map first, then the source file

**Six of these are map lookups — don't open a source file for them:** an operation's signature; its request fields with channel, wire name, required flag and default; its return type; its error subclass and the arms with the status each covers; the `ClientOptions` fields and their defaults; and the environments, base URLs and auth wiring.

The table below covers everything else, and the full body behind a map row. Paths are relative to `node_modules/adyen/`:

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

Whether this API's **request** models carry fields you must never log — card or bank numbers, personal data, message content — is a shape question: each request model's declaring file (the map's **Type sources** table names it) lists every field. If the scope touches such a field, four generator facts decide your logging posture (all in `typescript-configuration-resilience`): a JSON request body is logged **verbatim** when `logRequestBody` is on, with no redaction; a form body is masked only by deny-list; a per-call `RequestOptions.logging` level turns the request body on for that call, whatever the client set; and leaving `ClientOptions.logging` without a `logger` or a `level` arms the `ADYEN_CLIENT_LOG` environment variable, which turns logging and both header switches on with no code change and no deploy — though never the body. So on any build that can carry such a field: `logRequestBody` stays off, no call on those paths passes a per-call level, `ClientOptions.logging.level` is set explicitly in production, and your own diagnostics never echo a request body on those paths.

The SDK never logs a response body, but your own code may. Responses are often safer — many APIs return masked variants of what requests carry raw — but that too is a model-shape fact: check the response model's file before assuming.

## Integration workflow — load the companion skill at each step

Before you write the code for each step, load the named companion skill — even if you have already read the relevant file. Each step calls out the trap the signature hides (in *parens*). A typical integration reaches them in this order:

1. **Client construction & lifetime** — load **typescript-client-initialization** before you write `new AdyenClient(…)`. (*The signature won't tell you:* every option is optional, so a client built with no arguments compiles and talks to the default environment with no credential; the client must be **long-lived and app-scoped**, never rebuilt per request, because the resource getters live on it; there is no `close()` or `dispose()` — it owns no pool, only a `fetch`; and when no `fetch` is reachable the **constructor** throws `ConfigurationError`, not the first call.)
2. **Authentication** — load **typescript-authentication** before you set credentials. The 3 schemes are `apiKeyAuth`, `basicAuth`, `clientKey` on `ClientOptions`. (*The signature won't tell you:* the field is optional — omit it and every request goes out unauthenticated with no failure at construction; and a 401 invalidates the cache without retrying the current call. Load secrets from the environment or a secret store, never hardcode.)
3. **Calling an endpoint** — load **typescript-calling-endpoints** before the first `client.<resource>.<operation>(…)` call. (*The signature won't tell you:* the request object is **flat and channel-blind** — a field named `body` *is* the whole request body and every other field is fanned out to path, query or header by the SDK, so nothing is nested by channel; **an omitted field that has a default is still sent, with that default**; **30 operations resolve to `undefined`**; and `.asApiResult()` must be called on the value the operation returned, because `ApiPromise` overrides `Symbol.species` and `.then()`/`.catch()` hand back a plain `Promise` with the method gone.)
4. **Models** — load **typescript-models** the moment a request/response member is not a plain string or number. (*The signature won't tell you:* models are plain `type`s built from object literals — no constructor, no builder; `f?: T` means omit the key, while `f: T | null` is **required and nullable** and `null` is a distinct value; enums are **open** (`const` companion plus a union admitting `(string & {})`), so the schema validates the base type only and an unknown server value round-trips instead of throwing — use `.values` to test membership yourself; and every type has a schema companion usable in both directions.)
5. **Error handling** — load **typescript-error-handling** before you write any `try/catch`. (*The signature won't tell you:* every operational failure is **one family**, `AdyenError`, narrowed on `err.kind` — `"api"` is an API error status, carried by `ApiError` and its per-operation subclasses — while four throwables sit outside it (`ConfigurationError` from the constructor, `SchemaError` from a codec called directly, a `TypeError` for a bug, and a caller abort's own `reason`), so a `catch` that tests the family has to rethrow the rest; **arm tags are schema-derived, not statuses** (see the sheet checklist below); a malformed 2xx body rejects with `DecodeError`, not `ApiError`, and `.asApiResult()` does not convert it; and a missing response field the schema permits is silently `undefined` rather than any error at all.)
6. **Configuration & resilience** — load **typescript-configuration-resilience** when you set the base URL, timeouts, retries, proxies, TLS, or logging. (*The signature won't tell you:* **retrying is on by default** — the default policy retries a GET, HEAD, PUT or OPTIONS call on `408`, `429`, `500`, `502`, `503` and `504` and on a dropped connection or timeout, and every one of those is a `RetryOptions` field you can change; a write is repeated only when `httpMethodsToRetry` names its method; `retry: { maxRetries: 0 }` turns it off, one call overrides it through `RequestOptions.retry`, and a `401` is not retried by default; `retry.timeout` bounds **one attempt**, up to its response headers, not the whole call, and `0` is a zero-length deadline while a value `setTimeout` cannot honour falls back to the default; **logging is off by default** — `ClientOptions.logging` turns it on with a `logger` or a `level`, and so does the `ADYEN_CLIENT_LOG` environment variable when code sets neither, but a request body is logged only when code sets `logRequestBody`, and then a JSON body **verbatim**, with no redaction; **there are no hooks, middleware or interceptors** — `ClientOptions.fetch` is the one transport extension point, `onRetry` being the only built-in callback; and a `fetch` replacement is called with the attempt's `Request` and no `init`, so one that does not forward that `Request`, or its `signal`, makes both each attempt's timeout and every `RequestOptions.signal` inert.)
7. **Testing** — load **typescript-testing** before you stub the SDK. (*The signature won't tell you:* the seam is **`ClientOptions.fetch`**, not the client class and not the resource classes — whose constructors take unexported engine internals, so they cannot be instantiated in a test; stub bodies in **wire shape** and let the SDK decode them; assert on the request the SDK actually built, headers included; and cover the failure kinds an `ApiError`-only test misses, `DecodeError` above all.)

## What a contract sheet must carry for this SDK

Beyond the usual signatures and model members, a contract sheet for the Adyen TypeScript SDK is incomplete without these, because each one is a decision the implementer cannot make correctly from the signature alone.

1. **Which host each deployment talks to**, and where that is set. This SDK declares one environment and emits no `ServerEnvironment`, so any other host is a `serverOptions` base-URL override rather than an environment member — give the override path on the sheet.
2. **30 operations resolve to `undefined`** — `await` gives you nothing to inspect, so **`.asApiResult()` is the only way to observe their status and headers** — decide the mode at write time, not by retrofit.
3. **The exact request type name per operation**, taken from the **Signature** bullet.
4. **Every request field with its channel, wire name and default**, because the request object is flat and channel-blind and the SDK fans fields out. An omitted field that has a default is still sent with that default, so a defaulted header shapes the response whether or not the sheet mentions it. The generator injects an `Idempotency-Key` on every non-GET operation that does not declare that header itself — minted once per call and invisible to you. Every retry of that call re-sends the **same** key, which is what makes naming a write in `httpMethodsToRetry` safe where the provider deduplicates on it; but the next call mints a new one, so a call your own code repeats is two submissions. Any caller-supplied idempotency or request-id field is the only idempotency that spans calls, and `RequestOptions` is `{ signal, retry, logging }` only.
5. **Required vs optional vs required-nullable** for every model member the task sets — `f: T` required, `f?: T` omit the key, `f: T | null` required and nullable. And that under `exactOptionalPropertyTypes` an absent optional is **omitted or spread**, never assigned `undefined`.
6. **The error arms for each operation in scope, with the status each covers — and the warning that arm tags are schema-derived, not status codes.** Every operation rejects with its own `ApiError` subclass narrowed on `err.payload.kind`, and a tag comes from the arm's **body schema**: an arm whose body is a direct model reference is named after that model in lower camel (`"validationError"`), and every other body — a primitive, an array, a map, or no content — is named `"error{Status}"` (`"error400"`, `"error4XX"`, `"errorDefault"`), with a numeric suffix on the second of two arms that would otherwise land on the same name. The same tag means different statuses on different operations, and the same status carries different tags — so a tag is only meaningful beside the arm table it came from, and a shared helper that switches on `kind` across operations is a bug. 420 of 449 operations declare typed error bodies; the rest reject with the base `ApiError`. Every operation also carries an always-present `"undeclared"` arm holding `rawBody: ArrayBuffer`, for which **matcher precedence** matters: an exact numeric status is looked up across the whole table first, then the first covering range, and last a `"default"` arm where the spec declared one — whose body, if it does not fit, falls to `"undeclared"` rather than throwing.
7. **That a malformed or drifted 2xx body rejects with `DecodeError`, not `ApiError`, in both response modes** — `.asApiResult()` converts an HTTP error status, never any other failure. Any sheet row for a call whose result is used must name the members the implementer has to assert on, because a thin or truncated body decodes without complaint and the hole surfaces later.
8. **The retry policy this integration needs.** Retrying is on by default — `ClientOptions.retry` sets it for the client and `RequestOptions.retry` overrides it per call — so the sheet says whether the defaults fit, which writes (if any) join `httpMethodsToRetry`, since a write is repeated only when the policy names its method, and the per-attempt timeout.
9. **The logging this integration needs.** Logging is off by default — `ClientOptions.logging` sets it for the client and `RequestOptions.logging` sets one call's level — so the sheet says whether it stays off and, where it is on, the level, the logger, and whether headers and the request body are logged: a JSON request body is logged verbatim, with no redaction.
10. **That the SDK performs no pagination and no streaming at all**, and that `ClientOptions.fetch` is the one seam where either can be added — so whatever the task needs there is yours to build or deliberately omit. Say which.
11. **That `Event`, `File`, `Response` imported from this package are model types, not the globals of those names** — every sheet that references one should carry the alias it will be imported under. The error base is re-exported as `AdyenError` for the same reason.
12. A **REQUIRED READING** block naming the `typescript-*` companions that govern the steps, with inline `MUST load` pointers.

