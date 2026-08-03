# SDK map — Adyen (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | Adyen |
| Root namespace/module | `Adyen` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `25de759` (`25de75989762c46000d739f5a169614a2ac3cd90`, tagged `25de759`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/adyen-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using Adyen;
using Adyen.Servers; // ServerEnvironment lives here

var options = new AdyenClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new AdyenClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddAdyenClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`AdyenClient.cs`.

<!-- crawler:client-options -->
All `AdyenClientOptions` properties (source: `AdyenClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `ApiKeyAuth` | `string?` |
| `BasicAuth` | `BasicAuthCredentials?` |
| `ClientKey` | `string?` |

`RetryOptions` members (source: `Core/Configuration/RetryOptions.cs`; build a full instance — all members are `required` — or start from `RetryOptions.Default()`):

| Member | Type |
|---|---|
| `StatusCodesToRetry` | `IReadOnlyList<HttpStatusCode>` |
| `HttpMethodsToRetry` | `IReadOnlyList<HttpMethod>` |
| `MaxRetries` | `int` |
| `Delay` | `TimeSpan` |
| `Timeout` | `TimeSpan?` |
| `BackOffFactor` | `int` |
| `UseExponentialBackoff` | `bool` |
| `MaxJitter` | `TimeSpan` |
| `OnRetry` | `Action<RetryAttempt>?` |

Client constructor(s):

- `AdyenClient(HttpClient httpClient, AdyenClientOptions options)`
<!-- /crawler:client-options -->

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**. On an error status the SDK throws `SdkException<TError>`
(`Core/Exceptions/SdkException.cs`) exposing `.Error` of type `TError`. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class with status-specific
  `TryGet…(out …)` accessors (returns `true` when that shape is present) plus the inherited
  `TryGetRawError(out RawError)` fallback. The per-operation rows name the exact `TryGet…` methods and the HTTP
  status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`Core/ErrorResponse/RawError.cs`): `StatusCode`,
  `ReadAsString()`, `ReadAsJson<T>()`, `ReadAsBytes()`.

<!-- gen:error-core -->
Core error types (`Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
|---|---|---|
| `ApiError` — abstract base of all 416 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `Core/ErrorResponse/RawError.cs` |

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions: field names, declared types, and JSON wire names live on the records pages / `unions.md` like any other model.
<!-- /gen:error-core -->

```csharp
try { var resp = await client.{ApiGroup}.{Operation}(body); }
catch (SdkException<{Operation}Error> ex)              // Case A
{
    if (ex.Error.TryGetSomeShape(out var typed))      { /* handle that status */ }
    else if (ex.Error.TryGetRawError(out var raw))    { /* other statuses */ }
}
catch (SdkException<RawError> ex)                     // Case B
{
    var status = ex.Error.StatusCode;
    var body   = ex.Error.ReadAsString();
}
```

<!-- crawler:op-stats -->
**No-throw ("`…Result`") variants: absent across this SDK** — every operation is throw-only.
Of **428 operations**, **416 are Case A (typed)** and **12 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (93 groups, 428 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `AccountCompanyLevel` | 3 | [map/operations/AccountCompanyLevel.md](map/operations/AccountCompanyLevel.md) |
| `AccountHolders` | 16 | [map/operations/AccountHolders.md](map/operations/AccountHolders.md) |
| `AccountMerchantLevel` | 4 | [map/operations/AccountMerchantLevel.md](map/operations/AccountMerchantLevel.md) |
| `Accounts` | 3 | [map/operations/Accounts.md](map/operations/Accounts.md) |
| `AccountStoreLevel` | 8 | [map/operations/AccountStoreLevel.md](map/operations/AccountStoreLevel.md) |
| `AccountVerification` | 2 | [map/operations/AccountVerification.md](map/operations/AccountVerification.md) |
| `AllowedOriginsCompanyLevel` | 4 | [map/operations/AllowedOriginsCompanyLevel.md](map/operations/AllowedOriginsCompanyLevel.md) |
| `AllowedOriginsMerchantLevel` | 4 | [map/operations/AllowedOriginsMerchantLevel.md](map/operations/AllowedOriginsMerchantLevel.md) |
| `AndroidFilesCompanyLevel` | 6 | [map/operations/AndroidFilesCompanyLevel.md](map/operations/AndroidFilesCompanyLevel.md) |
| `ApiCredentialsCompanyLevel` | 4 | [map/operations/ApiCredentialsCompanyLevel.md](map/operations/ApiCredentialsCompanyLevel.md) |
| `ApiCredentialsMerchantLevel` | 4 | [map/operations/ApiCredentialsMerchantLevel.md](map/operations/ApiCredentialsMerchantLevel.md) |
| `ApiKeyCompanyLevel` | 1 | [map/operations/ApiKeyCompanyLevel.md](map/operations/ApiKeyCompanyLevel.md) |
| `ApiKeyMerchantLevel` | 1 | [map/operations/ApiKeyMerchantLevel.md](map/operations/ApiKeyMerchantLevel.md) |
| `AuthorizedCardUsers` | 4 | [map/operations/AuthorizedCardUsers.md](map/operations/AuthorizedCardUsers.md) |
| `BalanceAccounts` | 5 | [map/operations/BalanceAccounts.md](map/operations/BalanceAccounts.md) |
| `BalancesApi` | 5 | [map/operations/BalancesApi.md](map/operations/BalancesApi.md) |
| `BalancesOverview` | 2 | [map/operations/BalancesOverview.md](map/operations/BalancesOverview.md) |
| `BalanceTransfers` | 1 | [map/operations/BalanceTransfers.md](map/operations/BalanceTransfers.md) |
| `BankAccountValidation` | 1 | [map/operations/BankAccountValidation.md](map/operations/BankAccountValidation.md) |
| `BusinessLinesApi` | 4 | [map/operations/BusinessLinesApi.md](map/operations/BusinessLinesApi.md) |
| `Capital` | 1 | [map/operations/Capital.md](map/operations/Capital.md) |
| `CardOrders` | 2 | [map/operations/CardOrders.md](map/operations/CardOrders.md) |
| `CashOutApi` | 1 | [map/operations/CashOutApi.md](map/operations/CashOutApi.md) |
| `ClientKeyCompanyLevel` | 1 | [map/operations/ClientKeyCompanyLevel.md](map/operations/ClientKeyCompanyLevel.md) |
| `ClientKeyMerchantLevel` | 1 | [map/operations/ClientKeyMerchantLevel.md](map/operations/ClientKeyMerchantLevel.md) |
| `CloudEndpointsAndConnection` | 4 | [map/operations/CloudEndpointsAndConnection.md](map/operations/CloudEndpointsAndConnection.md) |
| `CustomPayoutSchedulesSweeps` | 5 | [map/operations/CustomPayoutSchedulesSweeps.md](map/operations/CustomPayoutSchedulesSweeps.md) |
| `DirectDebitMandates` | 4 | [map/operations/DirectDebitMandates.md](map/operations/DirectDebitMandates.md) |
| `DisputeAttachments` | 4 | [map/operations/DisputeAttachments.md](map/operations/DisputeAttachments.md) |
| `Documents` | 4 | [map/operations/Documents.md](map/operations/Documents.md) |
| `DonationCampaigns` | 6 | [map/operations/DonationCampaigns.md](map/operations/DonationCampaigns.md) |
| `Donations` | 2 | [map/operations/Donations.md](map/operations/Donations.md) |
| `DynamicOffers` | 3 | [map/operations/DynamicOffers.md](map/operations/DynamicOffers.md) |
| `General` | 40 | [map/operations/General.md](map/operations/General.md) |
| `GrantAccounts` | 1 | [map/operations/GrantAccounts.md](map/operations/GrantAccounts.md) |
| `GrantOffersApi` | 3 | [map/operations/GrantOffersApi.md](map/operations/GrantOffersApi.md) |
| `GrantsApi` | 6 | [map/operations/GrantsApi.md](map/operations/GrantsApi.md) |
| `HostedOnboarding` | 3 | [map/operations/HostedOnboarding.md](map/operations/HostedOnboarding.md) |
| `HostedOnboardingPage` | 1 | [map/operations/HostedOnboardingPage.md](map/operations/HostedOnboardingPage.md) |
| `IDealProfiles` | 3 | [map/operations/IDealProfiles.md](map/operations/IDealProfiles.md) |
| `Initialization` | 3 | [map/operations/Initialization.md](map/operations/Initialization.md) |
| `InstantPayouts` | 1 | [map/operations/InstantPayouts.md](map/operations/InstantPayouts.md) |
| `LegalEntities` | 7 | [map/operations/LegalEntities.md](map/operations/LegalEntities.md) |
| `ManageCardPin` | 3 | [map/operations/ManageCardPin.md](map/operations/ManageCardPin.md) |
| `ManagedPayoutSchedules` | 8 | [map/operations/ManagedPayoutSchedules.md](map/operations/ManagedPayoutSchedules.md) |
| `ManageScaDevices` | 6 | [map/operations/ManageScaDevices.md](map/operations/ManageScaDevices.md) |
| `Modifications` | 14 | [map/operations/Modifications.md](map/operations/Modifications.md) |
| `MyApiCredential` | 6 | [map/operations/MyApiCredential.md](map/operations/MyApiCredential.md) |
| `NetworkTokens` | 2 | [map/operations/NetworkTokens.md](map/operations/NetworkTokens.md) |
| `Orders` | 3 | [map/operations/Orders.md](map/operations/Orders.md) |
| `PaymentInstrumentGroups` | 3 | [map/operations/PaymentInstrumentGroups.md](map/operations/PaymentInstrumentGroups.md) |
| `PaymentInstruments` | 9 | [map/operations/PaymentInstruments.md](map/operations/PaymentInstruments.md) |
| `PaymentLinks` | 3 | [map/operations/PaymentLinks.md](map/operations/PaymentLinks.md) |
| `PaymentMethodsMerchantLevel` | 6 | [map/operations/PaymentMethodsMerchantLevel.md](map/operations/PaymentMethodsMerchantLevel.md) |
| `Payments` | 13 | [map/operations/Payments.md](map/operations/Payments.md) |
| `PaymentsApp` | 5 | [map/operations/PaymentsApp.md](map/operations/PaymentsApp.md) |
| `PayoutSettingsMerchantLevel` | 5 | [map/operations/PayoutSettingsMerchantLevel.md](map/operations/PayoutSettingsMerchantLevel.md) |
| `PciComplianceQuestionnairePage` | 1 | [map/operations/PciComplianceQuestionnairePage.md](map/operations/PciComplianceQuestionnairePage.md) |
| `PciQuestionnaires` | 5 | [map/operations/PciQuestionnaires.md](map/operations/PciQuestionnaires.md) |
| `Platform` | 3 | [map/operations/Platform.md](map/operations/Platform.md) |
| `RaiseDisputes` | 4 | [map/operations/RaiseDisputes.md](map/operations/RaiseDisputes.md) |
| `Rates` | 1 | [map/operations/Rates.md](map/operations/Rates.md) |
| `RecurringApi` | 4 | [map/operations/RecurringApi.md](map/operations/RecurringApi.md) |
| `RecurringTopUps` | 4 | [map/operations/RecurringTopUps.md](map/operations/RecurringTopUps.md) |
| `Reviewing` | 2 | [map/operations/Reviewing.md](map/operations/Reviewing.md) |
| `ScaAssociationManagement` | 3 | [map/operations/ScaAssociationManagement.md](map/operations/ScaAssociationManagement.md) |
| `ScaDeviceManagement` | 4 | [map/operations/ScaDeviceManagement.md](map/operations/ScaDeviceManagement.md) |
| `SessionAuthentication` | 1 | [map/operations/SessionAuthentication.md](map/operations/SessionAuthentication.md) |
| `SplitConfigurationMerchantLevel` | 9 | [map/operations/SplitConfigurationMerchantLevel.md](map/operations/SplitConfigurationMerchantLevel.md) |
| `TaxEDeliveryConsent` | 2 | [map/operations/TaxEDeliveryConsent.md](map/operations/TaxEDeliveryConsent.md) |
| `TerminalActionsCompanyLevel` | 2 | [map/operations/TerminalActionsCompanyLevel.md](map/operations/TerminalActionsCompanyLevel.md) |
| `TerminalActionsTerminalLevel` | 1 | [map/operations/TerminalActionsTerminalLevel.md](map/operations/TerminalActionsTerminalLevel.md) |
| `TerminalOrdersCompanyLevel` | 10 | [map/operations/TerminalOrdersCompanyLevel.md](map/operations/TerminalOrdersCompanyLevel.md) |
| `TerminalOrdersMerchantLevel` | 10 | [map/operations/TerminalOrdersMerchantLevel.md](map/operations/TerminalOrdersMerchantLevel.md) |
| `TerminalSettingsCompanyLevel` | 4 | [map/operations/TerminalSettingsCompanyLevel.md](map/operations/TerminalSettingsCompanyLevel.md) |
| `TerminalSettingsMerchantLevel` | 4 | [map/operations/TerminalSettingsMerchantLevel.md](map/operations/TerminalSettingsMerchantLevel.md) |
| `TerminalSettingsStoreLevel` | 8 | [map/operations/TerminalSettingsStoreLevel.md](map/operations/TerminalSettingsStoreLevel.md) |
| `TerminalSettingsTerminalLevel` | 4 | [map/operations/TerminalSettingsTerminalLevel.md](map/operations/TerminalSettingsTerminalLevel.md) |
| `TerminalsTerminalLevel` | 2 | [map/operations/TerminalsTerminalLevel.md](map/operations/TerminalsTerminalLevel.md) |
| `TermsOfService` | 5 | [map/operations/TermsOfService.md](map/operations/TermsOfService.md) |
| `TransactionRules` | 4 | [map/operations/TransactionRules.md](map/operations/TransactionRules.md) |
| `Transactions` | 2 | [map/operations/Transactions.md](map/operations/Transactions.md) |
| `TransferInstruments` | 4 | [map/operations/TransferInstruments.md](map/operations/TransferInstruments.md) |
| `TransferLimitsBalanceAccountLevel` | 6 | [map/operations/TransferLimitsBalanceAccountLevel.md](map/operations/TransferLimitsBalanceAccountLevel.md) |
| `TransferLimitsBalancePlatformLevel` | 4 | [map/operations/TransferLimitsBalancePlatformLevel.md](map/operations/TransferLimitsBalancePlatformLevel.md) |
| `TransferRoutes` | 1 | [map/operations/TransferRoutes.md](map/operations/TransferRoutes.md) |
| `Transfers` | 6 | [map/operations/Transfers.md](map/operations/Transfers.md) |
| `UsersCompanyLevel` | 4 | [map/operations/UsersCompanyLevel.md](map/operations/UsersCompanyLevel.md) |
| `UsersMerchantLevel` | 4 | [map/operations/UsersMerchantLevel.md](map/operations/UsersMerchantLevel.md) |
| `Utility` | 4 | [map/operations/Utility.md](map/operations/Utility.md) |
| `Verification` | 8 | [map/operations/Verification.md](map/operations/Verification.md) |
| `WebhooksCompanyLevel` | 7 | [map/operations/WebhooksCompanyLevel.md](map/operations/WebhooksCompanyLevel.md) |
| `WebhooksMerchantLevel` | 7 | [map/operations/WebhooksMerchantLevel.md](map/operations/WebhooksMerchantLevel.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 2539 | [`AbortRequest` … `AdditionalDataRisk`](map/models/records-1-Ab-Ad.md) · [`AdditionalDataRiskStandalone` … `BalanceAccountsPayoutSchedulesExecutions422Error`](map/models/records-2-Ad-Ba.md) · [`BalanceAccountsPayoutSchedulesExecutions422Error1` … `BankIdentification`](map/models/records-3-Ba-Ba.md) · [`BaseAmount` … `CashOutInfoCounterparty`](map/models/records-4-Ba-Ca.md) · [`CashOutInfoCounterparty1` … `CreateAllowedOriginRequest`](map/models/records-5-Ca-Cr.md) · [`CreateApiCredentialResponse` … `Donation1`](map/models/records-6-Cr-Do.md) · [`DonationAmount` … `GetUploadedDocumentsRequest`](map/models/records-7-Do-Ge.md) · [`GetUploadedDocumentsResponse` … `LegalArrangementDetail`](map/models/records-8-Ge-Le.md) · [`LegalArrangementEntityDetail` … `MerchantsGeneratePaymentsAppBoardingToken400Error`](map/models/records-9-Le-Me.md) · [`MerchantsGeneratePaymentsAppBoardingToken400Error1` … `OtherInfo`](map/models/records-10-Me-Ot.md) · [`OtherInfo1` … `PaymentRequest`](map/models/records-11-Ot-Pa.md) · [`PaymentRequest1` … `Previous`](map/models/records-12-Pa-Pr.md) · [`PrintOutput` … `SaleToIssuerData2`](map/models/records-13-Pr-Sa.md) · [`SaleToPoirequest` … `StoreDetailAndSubmitResponse`](map/models/records-14-Sa-St.md) · [`StoreDetailRequest` … `ThreeDs2RequestData11`](map/models/records-15-St-Th.md) · [`ThreeDs2RequestData2` … `TransferRoute`](map/models/records-16-Th-Tr.md) · [`TransferRouteRequest` … `Zip`](map/models/records-17-Tr-Zi.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 27 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 592 | [map/models/enums.md](map/models/enums.md) |
<!-- /gen:models-table -->

Model conventions: records are immutable with `init`-only setters; `required` properties must be set in the
object initializer; nullable (`T?`) properties are optional. Each record field is listed as
`CSharpName (wire_name): Type` — the parenthesized name is the JSON wire name (`[JsonPropertyName]`).
Unions wrap `Optional<T>` variants — construct via a static factory or implicit
conversion, read back via `TryGet…(out …)`. Enums are **not** C# enums — build with `Type.FromValue("wire")`
or the static members (enums.md lists the literal member names: `SomeEnum.SomeMember`, not
`SomeEnum.some_member`).

<!-- gen:namespaces -->
Namespaces by content type (add `using` accordingly):

| Contents | Namespace(s) |
|---|---|
| Client & options (root) | `Adyen` |
| Operation controllers (`Api/`) | `Adyen.Api` |
| Records (`Models/`) | `Adyen.Models` |
| Enums (`Models/Enums/`) | `Adyen.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `Adyen.Models.AnyOf` |
| Error classes (`Errors/`) | `Adyen.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `AdyenClientOptions` (source: `AdyenClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `ApiKeyAuth` | `string?` | — |
| `BasicAuth` | `BasicAuthCredentials?` | — |
| `ClientKey` | `string?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`, `ServerEnvironment.Environment2`, `ServerEnvironment.Environment3`, `ServerEnvironment.Environment4`, `ServerEnvironment.Environment5`, `ServerEnvironment.Environment6`, `ServerEnvironment.Environment7`, `ServerEnvironment.Environment8`, `ServerEnvironment.Environment9`, `ServerEnvironment.Environment10`, `ServerEnvironment.Environment11`, `ServerEnvironment.Environment12`, `ServerEnvironment.Environment13`, `ServerEnvironment.Environment14`, `ServerEnvironment.Environment15`, `ServerEnvironment.Environment16`, `ServerEnvironment.Environment17`, `ServerEnvironment.Environment18`, `ServerEnvironment.Environment19`, `ServerEnvironment.Environment20`, `ServerEnvironment.Environment21`, `ServerEnvironment.Environment22`, `ServerEnvironment.Environment23`, `ServerEnvironment.Environment24`, `ServerEnvironment.Environment25`, `ServerEnvironment.Environment26`, `ServerEnvironment.Environment27`, `ServerEnvironment.Environment28`, `ServerEnvironment.Environment29`, `ServerEnvironment.Environment30`, `ServerEnvironment.Environment31`, `ServerEnvironment.Environment32`, `ServerEnvironment.Environment33`, `ServerEnvironment.Environment34`, `ServerEnvironment.Environment35`, `ServerEnvironment.Environment36`, `ServerEnvironment.Environment37`, `ServerEnvironment.Environment38`, `ServerEnvironment.Environment39`, `ServerEnvironment.Environment40`, `ServerEnvironment.Environment41`, `ServerEnvironment.Environment42`, `ServerEnvironment.Environment43`, `ServerEnvironment.Environment44`, `ServerEnvironment.Environment45`, `ServerEnvironment.Environment46`, `ServerEnvironment.Environment47`, `ServerEnvironment.Environment48`, `ServerEnvironment.Environment49`, `ServerEnvironment.Environment50`, `ServerEnvironment.Environment51`, `ServerEnvironment.Environment52`, `ServerEnvironment.Environment53`, `ServerEnvironment.Environment54`, `ServerEnvironment.Environment55`, `ServerEnvironment.Environment56`, `ServerEnvironment.Environment57`, `ServerEnvironment.Environment58`, `ServerEnvironment.Environment59`, `ServerEnvironment.Environment60`, `ServerEnvironment.Environment61`, `ServerEnvironment.Environment62`, `ServerEnvironment.Environment63`, `ServerEnvironment.Environment64`, `ServerEnvironment.Environment65`, `ServerEnvironment.Environment66`, `ServerEnvironment.Environment67`, `ServerEnvironment.Environment68`, `ServerEnvironment.Environment69`, `ServerEnvironment.Environment70`, `ServerEnvironment.Environment71`, `ServerEnvironment.Environment72`, `ServerEnvironment.Environment73`, `ServerEnvironment.Environment74`, `ServerEnvironment.Environment75`, `ServerEnvironment.Environment76`, `ServerEnvironment.Environment77`, `ServerEnvironment.Environment78`, `ServerEnvironment.Environment79`, `ServerEnvironment.Environment80`, `ServerEnvironment.Environment81`, `ServerEnvironment.Environment82`, `ServerEnvironment.Environment83`, `ServerEnvironment.Environment84`, `ServerEnvironment.Environment85`, `ServerEnvironment.Environment86`, `ServerEnvironment.Environment87`, `ServerEnvironment.Environment88`, `ServerEnvironment.Environment89`, `ServerEnvironment.Environment90`, `ServerEnvironment.Environment91`, `ServerEnvironment.Environment92`, `ServerEnvironment.Environment93`, `ServerEnvironment.Environment94`, `ServerEnvironment.Environment95`, `ServerEnvironment.Environment96`, `ServerEnvironment.Environment97`, `ServerEnvironment.Environment98`, `ServerEnvironment.Environment99`, `ServerEnvironment.Environment100`, `ServerEnvironment.Environment101`, `ServerEnvironment.Environment102`, `ServerEnvironment.Environment103`, `ServerEnvironment.Environment104`, `ServerEnvironment.Environment105`, `ServerEnvironment.Environment106`, `ServerEnvironment.Environment107`, `ServerEnvironment.Environment108`, `ServerEnvironment.Environment109`, `ServerEnvironment.Environment110`, `ServerEnvironment.Environment111`, `ServerEnvironment.Environment112`, `ServerEnvironment.Environment113`, `ServerEnvironment.Environment114`, `ServerEnvironment.Environment115`, `ServerEnvironment.Environment116`, `ServerEnvironment.Environment117`, `ServerEnvironment.Environment118`, `ServerEnvironment.Environment119`, `ServerEnvironment.Environment120`, `ServerEnvironment.Environment121`, `ServerEnvironment.Environment122`, `ServerEnvironment.Environment123`, `ServerEnvironment.Environment124`, `ServerEnvironment.Environment125`, `ServerEnvironment.Environment126`, `ServerEnvironment.Environment127`, `ServerEnvironment.Environment128`, `ServerEnvironment.Environment129`, `ServerEnvironment.Environment130`, `ServerEnvironment.Environment131`, `ServerEnvironment.Environment132`, `ServerEnvironment.Environment133`, `ServerEnvironment.Environment134`, `ServerEnvironment.Environment135`, `ServerEnvironment.Environment136`, `ServerEnvironment.Environment137`, `ServerEnvironment.Environment138`, `ServerEnvironment.Environment139`, `ServerEnvironment.Environment140`, `ServerEnvironment.Environment141`, `ServerEnvironment.Environment142`, `ServerEnvironment.Environment143`, `ServerEnvironment.Environment144`, `ServerEnvironment.Environment145`, `ServerEnvironment.Environment146`, `ServerEnvironment.Environment147`, `ServerEnvironment.Environment148`, `ServerEnvironment.Environment149`, `ServerEnvironment.Environment150`, `ServerEnvironment.Environment151`, `ServerEnvironment.Environment152`, `ServerEnvironment.Environment153`, `ServerEnvironment.Environment154`, `ServerEnvironment.Environment155`, `ServerEnvironment.Environment156`, `ServerEnvironment.Environment157`, `ServerEnvironment.Environment158`, `ServerEnvironment.Environment159`, `ServerEnvironment.Environment160`, `ServerEnvironment.Environment161`, `ServerEnvironment.Environment162`, `ServerEnvironment.Environment163`, `ServerEnvironment.Environment164`, `ServerEnvironment.Environment165`, `ServerEnvironment.Environment166`, `ServerEnvironment.Environment167`, `ServerEnvironment.Environment168`, `ServerEnvironment.Environment169`, `ServerEnvironment.Environment170`, `ServerEnvironment.Environment171`, `ServerEnvironment.Environment172`, `ServerEnvironment.Environment173`, `ServerEnvironment.Environment174`, `ServerEnvironment.Environment175`, `ServerEnvironment.Environment176`, `ServerEnvironment.Environment177`, `ServerEnvironment.Environment178`, `ServerEnvironment.Environment179`, `ServerEnvironment.Environment180`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
