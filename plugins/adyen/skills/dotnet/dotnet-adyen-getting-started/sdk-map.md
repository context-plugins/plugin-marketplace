<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Adyen (.NET)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, error types, and server/auth wiring **by lookup**. Model shapes and enum values are *not* duplicated here — the map names the file declaring each type; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Adyen |
| Root namespace | `Adyen` |
| Target framework | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| API spec version | `72` |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are **repo-root-relative**, not relative to the page that carries them — open them as-is from the repo root, from any page.

---

## Getting a client

```csharp
var httpClient = new HttpClient();
// TODO: configure more client options here
var options =
    new AdyenClientOptions
    {
        BasicAuth = new BasicAuthCredentials
        {
            Username = "YOUR_USERNAME",
            Password = "YOUR_PASSWORD",
        },
        ApiKeyAuth = "YOUR_API_KEY",
        ClientKey = "YOUR_API_KEY",
        Environment = ServerEnvironment.Test,
    };
var client = new AdyenClient(httpClient, options);
```

DI alternative (`services.AddAdyenClient`):

```csharp
services.AddAdyenClient(options =>
    {
        options.BasicAuth =
            new BasicAuthCredentials
            {
                Username = "YOUR_USERNAME",
                Password = "YOUR_PASSWORD",
            };
        options.ApiKeyAuth = "YOUR_API_KEY";
        options.ClientKey = "YOUR_API_KEY";
        options.Environment = ServerEnvironment.Test;
        // TODO: configure more client options here
    });
```

Every API group is a property on the client (e.g. `client.ApiCredentialsCompanyLevel`). Source: `AdyenClient.cs`. The only constructor is `AdyenClient(HttpClient httpClient, AdyenClientOptions options)`.

All `AdyenClientOptions` properties (source: `AdyenClientOptions.cs`):

| Property | Type |
| --- | --- |
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `ApiKeyAuth` | `string?` |
| `BasicAuth` | `BasicAuthCredentials?` |
| `ClientKey` | `string?` |

`RetryOptions` members (namespace `Adyen.Core.Configuration` — add `using Adyen.Core.Configuration;`; source: `Core/Configuration/RetryOptions.cs`; all members are `required`, so build a full instance or start from `RetryOptions.Default()`):

| Member | Type |
| --- | --- |
| `StatusCodesToRetry` | `IReadOnlyList<HttpStatusCode>` |
| `HttpMethodsToRetry` | `IReadOnlyList<HttpMethod>` |
| `MaxRetries` | `int` |
| `Delay` | `TimeSpan` |
| `Timeout` | `TimeSpan?` |
| `BackOffFactor` | `int` |
| `UseExponentialBackoff` | `bool` |
| `MaxJitter` | `TimeSpan` |
| `OnRetry` | `Action<RetryAttempt>?` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**. On an error status the SDK throws `SdkException<TError>` (`Core/Exceptions/SdkException.cs`) exposing `.Error` of type `TError`. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class with status-specific `TryGet…(out …)` accessors (each returns `true` when that shape is present) plus the inherited `TryGetRawError(out RawError)` fallback. The operation blocks name the exact `TryGet…` methods and the HTTP status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`Core/ErrorResponse/RawError.cs`): `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`.

Core error types (`Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
| --- | --- | --- |
| `ApiError` — abstract base of the 420 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `Core/ErrorResponse/RawError.cs` |

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions — no special handling. The operation's **Type sources** table gives the file that declares each one; read field names, declared types, and JSON wire names there, as for any other model.

```csharp
try
{
    var response = await client.ApiCredentialsCompanyLevel.GetCompaniesCompanyIdApiCredentials(companyId,
        pageNumber,
        pageSize);
}
catch (SdkException<GetCompaniesCompanyIdApiCredentialsError> ex)
{
    // Case A — typed error
    if (ex.Error.TryGetRestServiceError(out var error))
    {
        // Handle 400, 401, 403, 422, 500
    }
    else if (ex.Error.TryGetRawError(out var raw))
    {
        // Any other error status
    }
}
catch (SdkException<RawError> ex)
{
    // Case B — raw error
    // ex.Error.StatusCode, ex.Error.ReadAsString(), ex.Error.ReadAsJson<T>()
}
```

**No-throw (`…Result`) variants: absent across this SDK** — every operation is throw-only. Of **449 operations**, **420 are Case A (typed)** and **29 are Case B (raw)**.

---

## Operations — by controller (93 groups, 449 operations)

Each links to a sub-page with one row per operation: signature with must-pass-explicitly params and defaults, query-param wire names, return type, error Case A/B, and Case A's typed accessors with their statuses. Each operation also carries a **Type sources** table — every type it names, with the file that declares it — so resolving a body, return, or error payload to its source is a lookup, never a search. `RawError` is excluded there (its members and path are above); an operation with no table names nothing but primitives and `RawError`.

**Each row states what is specific to its operation. Everything below holds for EVERY operation unless that operation's row says otherwise, so a row silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A row appears only when |
| --- | --- | --- |
| **Throw-only** — no `…Result`/no-throw variant exists anywhere in this SDK | this page, Error-handling model | a no-throw sibling exists (none do at this SDK version) |
| **No pagination** — the operation returns a single response, not a `Pageable` | here | pagination is offered — the block carries a **Pagination** bullet naming the posture (page-, offset-, cursor- or link-based, or the `page`-without-page-size case) |
| **Case B error accessors are always these four** — `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | the `RawError` row above | never — a `Case B` label always implies exactly these four; Case A rows list their own typed accessors |
| **Server group `Default`** — base URL per Servers & auth below | here | the operation is on another group — its block carries a **Server group** bullet |
| **Parameter names are literal** — signatures are generated code verbatim; in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`) | here | never — it always holds |

**The HTTP verb and route live on the operation itself**, in the source file named at the top of its operations page. This map is method-first: the C# method is the interface you call. When something wire-level needs the route — reproducing a raw request, pointing the client at a mock, reading a provider-side log — read it from that file; do not reconstruct it from memory or infer it from the method name.

**The endpoint's behavioural prose lives there too**, as the XML `<remarks>` on the method. Rows here give you the contract — names, types, shapes, errors. Where an operation's *semantics* decide what you must pass — a parameter whose value changes server-side behaviour, an ordering or exclusivity rule between fields — that is what `<remarks>` settles; read it there rather than filling it in from memory.

| Controller (`client.X`) | Ops | Page |
| --- | --- | --- |
| `client` (root) | 18 | [map/operations/AdyenClient.md](map/operations/AdyenClient.md) |
| `ApiCredentialsCompanyLevel` | 4 | [map/operations/ApiCredentialsCompanyLevel.md](map/operations/ApiCredentialsCompanyLevel.md) |
| `ApiCredentialsMerchantLevel` | 4 | [map/operations/ApiCredentialsMerchantLevel.md](map/operations/ApiCredentialsMerchantLevel.md) |
| `ApiKeyCompanyLevel` | 1 | [map/operations/ApiKeyCompanyLevel.md](map/operations/ApiKeyCompanyLevel.md) |
| `ApiKeyMerchantLevel` | 1 | [map/operations/ApiKeyMerchantLevel.md](map/operations/ApiKeyMerchantLevel.md) |
| `AccountCompanyLevel` | 3 | [map/operations/AccountCompanyLevel.md](map/operations/AccountCompanyLevel.md) |
| `AccountMerchantLevel` | 4 | [map/operations/AccountMerchantLevel.md](map/operations/AccountMerchantLevel.md) |
| `AccountStoreLevel` | 8 | [map/operations/AccountStoreLevel.md](map/operations/AccountStoreLevel.md) |
| `AccountVerification` | 2 | [map/operations/AccountVerification.md](map/operations/AccountVerification.md) |
| `AccountHolders` | 16 | [map/operations/AccountHolders.md](map/operations/AccountHolders.md) |
| `Accounts` | 3 | [map/operations/Accounts.md](map/operations/Accounts.md) |
| `AllowedOriginsCompanyLevel` | 4 | [map/operations/AllowedOriginsCompanyLevel.md](map/operations/AllowedOriginsCompanyLevel.md) |
| `AllowedOriginsMerchantLevel` | 4 | [map/operations/AllowedOriginsMerchantLevel.md](map/operations/AllowedOriginsMerchantLevel.md) |
| `AndroidFilesCompanyLevel` | 6 | [map/operations/AndroidFilesCompanyLevel.md](map/operations/AndroidFilesCompanyLevel.md) |
| `AuthorizedCardUsers` | 4 | [map/operations/AuthorizedCardUsers.md](map/operations/AuthorizedCardUsers.md) |
| `BalanceAccounts` | 5 | [map/operations/BalanceAccounts.md](map/operations/BalanceAccounts.md) |
| `BalanceTransfers` | 1 | [map/operations/BalanceTransfers.md](map/operations/BalanceTransfers.md) |
| `Balances` | 5 | [map/operations/Balances.md](map/operations/Balances.md) |
| `BalancesOverview` | 2 | [map/operations/BalancesOverview.md](map/operations/BalancesOverview.md) |
| `BankAccountValidation` | 1 | [map/operations/BankAccountValidation.md](map/operations/BankAccountValidation.md) |
| `BusinessLinesApi` | 4 | [map/operations/BusinessLinesApi.md](map/operations/BusinessLinesApi.md) |
| `Capital` | 3 | [map/operations/Capital.md](map/operations/Capital.md) |
| `CardOrders` | 2 | [map/operations/CardOrders.md](map/operations/CardOrders.md) |
| `CashOutApi` | 1 | [map/operations/CashOutApi.md](map/operations/CashOutApi.md) |
| `ClientKeyCompanyLevel` | 1 | [map/operations/ClientKeyCompanyLevel.md](map/operations/ClientKeyCompanyLevel.md) |
| `ClientKeyMerchantLevel` | 1 | [map/operations/ClientKeyMerchantLevel.md](map/operations/ClientKeyMerchantLevel.md) |
| `CustomPayoutSchedulesSweeps` | 5 | [map/operations/CustomPayoutSchedulesSweeps.md](map/operations/CustomPayoutSchedulesSweeps.md) |
| `DirectDebitMandates` | 4 | [map/operations/DirectDebitMandates.md](map/operations/DirectDebitMandates.md) |
| `DisputeAttachments` | 4 | [map/operations/DisputeAttachments.md](map/operations/DisputeAttachments.md) |
| `Documents` | 4 | [map/operations/Documents.md](map/operations/Documents.md) |
| `DonationCampaigns` | 6 | [map/operations/DonationCampaigns.md](map/operations/DonationCampaigns.md) |
| `Donations` | 2 | [map/operations/Donations.md](map/operations/Donations.md) |
| `DynamicOffers` | 3 | [map/operations/DynamicOffers.md](map/operations/DynamicOffers.md) |
| `General` | 41 | [map/operations/General.md](map/operations/General.md) |
| `GrantAccounts` | 2 | [map/operations/GrantAccounts.md](map/operations/GrantAccounts.md) |
| `GrantOffersApi` | 4 | [map/operations/GrantOffersApi.md](map/operations/GrantOffersApi.md) |
| `GrantsApi` | 6 | [map/operations/GrantsApi.md](map/operations/GrantsApi.md) |
| `HostedOnboarding` | 3 | [map/operations/HostedOnboarding.md](map/operations/HostedOnboarding.md) |
| `HostedOnboardingPage` | 1 | [map/operations/HostedOnboardingPage.md](map/operations/HostedOnboardingPage.md) |
| `Initialization` | 3 | [map/operations/Initialization.md](map/operations/Initialization.md) |
| `InstantPayouts` | 1 | [map/operations/InstantPayouts.md](map/operations/InstantPayouts.md) |
| `LegalEntities` | 7 | [map/operations/LegalEntities.md](map/operations/LegalEntities.md) |
| `ManageScaDevices` | 6 | [map/operations/ManageScaDevices.md](map/operations/ManageScaDevices.md) |
| `ManageCardPin` | 3 | [map/operations/ManageCardPin.md](map/operations/ManageCardPin.md) |
| `ManagedPayoutSchedules` | 8 | [map/operations/ManagedPayoutSchedules.md](map/operations/ManagedPayoutSchedules.md) |
| `Modifications` | 14 | [map/operations/Modifications.md](map/operations/Modifications.md) |
| `MyApiCredential` | 6 | [map/operations/MyApiCredential.md](map/operations/MyApiCredential.md) |
| `NetworkTokens` | 2 | [map/operations/NetworkTokens.md](map/operations/NetworkTokens.md) |
| `Orders` | 3 | [map/operations/Orders.md](map/operations/Orders.md) |
| `PciComplianceQuestionnairePage` | 1 | [map/operations/PciComplianceQuestionnairePage.md](map/operations/PciComplianceQuestionnairePage.md) |
| `PciQuestionnaires` | 5 | [map/operations/PciQuestionnaires.md](map/operations/PciQuestionnaires.md) |
| `PaymentInstrumentGroups` | 3 | [map/operations/PaymentInstrumentGroups.md](map/operations/PaymentInstrumentGroups.md) |
| `PaymentInstruments` | 9 | [map/operations/PaymentInstruments.md](map/operations/PaymentInstruments.md) |
| `PaymentLinks` | 3 | [map/operations/PaymentLinks.md](map/operations/PaymentLinks.md) |
| `PaymentMethodsMerchantLevel` | 6 | [map/operations/PaymentMethodsMerchantLevel.md](map/operations/PaymentMethodsMerchantLevel.md) |
| `Payments` | 14 | [map/operations/Payments.md](map/operations/Payments.md) |
| `PaymentsApp` | 5 | [map/operations/PaymentsApp.md](map/operations/PaymentsApp.md) |
| `PayoutSettingsMerchantLevel` | 5 | [map/operations/PayoutSettingsMerchantLevel.md](map/operations/PayoutSettingsMerchantLevel.md) |
| `Platform` | 3 | [map/operations/Platform.md](map/operations/Platform.md) |
| `RaiseDisputes` | 4 | [map/operations/RaiseDisputes.md](map/operations/RaiseDisputes.md) |
| `Rates` | 1 | [map/operations/Rates.md](map/operations/Rates.md) |
| `RecurringApi` | 4 | [map/operations/RecurringApi.md](map/operations/RecurringApi.md) |
| `RecurringTopUps` | 4 | [map/operations/RecurringTopUps.md](map/operations/RecurringTopUps.md) |
| `Reviewing` | 2 | [map/operations/Reviewing.md](map/operations/Reviewing.md) |
| `ScaAssociationManagement` | 3 | [map/operations/ScaAssociationManagement.md](map/operations/ScaAssociationManagement.md) |
| `ScaDeviceManagement` | 4 | [map/operations/ScaDeviceManagement.md](map/operations/ScaDeviceManagement.md) |
| `SessionAuthentication` | 2 | [map/operations/SessionAuthentication.md](map/operations/SessionAuthentication.md) |
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
| `IDealProfiles` | 3 | [map/operations/IDealProfiles.md](map/operations/IDealProfiles.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every file under `Models/` and `Errors/` declares exactly one public type, named after the file, and no two share a name — so a type name *is* its path. Take it from the operation's **Type sources** table, or build it from the kind's directory below. Never grep for a type.

| Group | Count | Directory (file = `<TypeName>.cs`) |
| --- | --- | --- |
| Records (plain `record` data models) | 2053 | `Models/` |
| Unions (`OneOf`) — variant factories + `TryGet…` | 15 | `Models/OneOf/` |
| Unions (`AnyOf`) — variant factories + `TryGet…` | 14 | `Models/AnyOf/` |
| Compositions (`AllOf`) — constituent types as `required` properties | 25 | `Models/AllOf/` |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — C# member names + wire values | 522 | `Models/Enums/` |
| Typed error classes (`: ApiError`, one per Case A operation) | 420 | `Errors/` |

Conventions: records are immutable, `init`-only; `required` properties must be set in the object initializer; `T?` is optional. A field's wire name is its `[JsonPropertyName]` and often differs from the C# name (`AmountInCents` ↔ `amount_in_cents`) — read it off the property, don't derive it. `OneOf`/`AnyOf` unions wrap `Optional<T>` variants — build via static factory or implicit conversion, read via `TryGet…(out …)`; `AllOf` compositions are not unions — every constituent is a `required` property, so set them all. Enums are **not** C# enums — build with `Type.FromValue("wire")` or the static members, whose names are PascalCase even when the wire value isn't (`CollectionMethod.Invoice`, not `.invoice`).

Namespaces by content type (add `using` accordingly):

| Contents | Namespace |
| --- | --- |
| Client & options (root) | `Adyen` |
| Operation controllers (`Api/`) | `Adyen.Api` |
| Records (`Models/`) | `Adyen.Models` |
| Enums (`Models/Enums/`) | `Adyen.Models.Enums` |
| OneOf unions (`Models/OneOf/`) | `Adyen.Models.OneOf` |
| AnyOf unions (`Models/AnyOf/`) | `Adyen.Models.AnyOf` |
| AllOf compositions (`Models/AllOf/`) | `Adyen.Models.AllOf` |
| Error classes (`Errors/`) | `Adyen.Errors` |

---

## Servers & auth

**API key (header `X-API-Key`).** Set `options.ApiKeyAuth = "<api_key>"`; sent as the `X-API-Key` request header.

**Basic auth.** Set `options.BasicAuth = new BasicAuthCredentials { Username = …, Password = … }`.

**API key (query `clientKey`).** Set `options.ClientKey = "<api_key>"`; sent as the `clientKey` query parameter.

**Environments.** `options.Environment` selects the target environment (`Servers/ServerEnvironment.cs`):

| Environment | Value | Hosting |
| --- | --- | --- |
| `ServerEnvironment.Test` *(default)* | `Test` | Adyen test environment. Adyen's live endpoints are merchant-prefixed ({prefix}-checkout-live.adyenpayments.com), so no static live URL is correct here - point the client's BaseUrl at the merchant's own live host instead. |

**29 server groups.** Base-URL templates and override points (`options.Server.…`):

| Group | `Test` base URL | Override point |
| --- | --- | --- |
| `Default` | `https://checkout-test.adyen.com/v72` | `options.Server.Default.Test.BaseUrl` |
| `Default1` | `https://pal-test.adyen.com/pal/servlet/Payment/v68` | `options.Server.Default1.Test.BaseUrl` |
| `Default2` | `https://pal-test.adyen.com/pal/servlet/Recurring/v68` | `options.Server.Default2.Test.BaseUrl` |
| `Default3` | `https://pal-test.adyen.com/pal/servlet/Payout/v68` | `options.Server.Default3.Test.BaseUrl` |
| `Default4` | `https://pal-test.adyen.com/pal/servlet/BinLookup/v54` | `options.Server.Default4.Test.BaseUrl` |
| `Default5` | `https://pal-test.adyen.com/pal/servlet/StoredValue/v46` | `options.Server.Default5.Test.BaseUrl` |
| `Default6` | `https://ca-test.adyen.com/ca/services/DataProtectionService/v1` | `options.Server.Default6.Test.BaseUrl` |
| `Default7` | `https://balanceplatform-api-test.adyen.com/fx/api/v1` | `options.Server.Default7.Test.BaseUrl` |
| `Default8` | `https://pal-test.adyen.com/pal/services/TestCard/v1` | `options.Server.Default8.Test.BaseUrl` |
| `Default9` | `https://management-test.adyen.com/v3` | `options.Server.Default9.Test.BaseUrl` |
| `Default10` | `https://cal-test.adyen.com/cal/services/Account/v6` | `options.Server.Default10.Test.BaseUrl` |
| `Default11` | `https://balance-control-test.adyen.com/balance-control/api/v2` | `options.Server.Default11.Test.BaseUrl` |
| `Default12` | `https://cal-test.adyen.com/cal/services/Notification/v6` | `options.Server.Default12.Test.BaseUrl` |
| `Default13` | `https://balanceplatform-api-test.adyen.com/bcl/v2` | `options.Server.Default13.Test.BaseUrl` |
| `Default14` | `https://balanceplatform-api-test.adyen.com/btl/v4` | `options.Server.Default14.Test.BaseUrl` |
| `Default15` | `https://balanceplatform-api-test.adyen.com/capital/v1` | `options.Server.Default15.Test.BaseUrl` |
| `Default16` | `https://cal-test.adyen.com/cal/services/Fund/v6` | `options.Server.Default16.Test.BaseUrl` |
| `Default17` | `https://test.adyen.com/authe/api/v1` | `options.Server.Default17.Test.BaseUrl` |
| `Default18` | `https://kyc-test.adyen.com/lem/v4` | `options.Server.Default18.Test.BaseUrl` |
| `Default19` | `https://cal-test.adyen.com/cal/services/Hop/v6` | `options.Server.Default19.Test.BaseUrl` |
| `Default20` | `https://balanceplatform-api-test.adyen.com/a2aissuer-api/v1` | `options.Server.Default20.Test.BaseUrl` |
| `Default21` | `https://obgateway-test.adyen.com/obgateway/v1` | `options.Server.Default21.Test.BaseUrl` |
| `Default22` | `https://ca-test.adyen.com/ca/services/DisputeService/v30` | `options.Server.Default22.Test.BaseUrl` |
| `Default23` | `https://balanceplatform-api-test.adyen.com/btl/api/v4` | `options.Server.Default23.Test.BaseUrl` |
| `Default24` | `https://device-api-test.adyen.com/v1` | `options.Server.Default24.Test.BaseUrl` |
| `Default25` | `https://softposconfig-test.adyen.com/softposconfig/v3` | `options.Server.Default25.Test.BaseUrl` |
| `Default26` | `https://management-test.adyen.com/v1` | `options.Server.Default26.Test.BaseUrl` |
| `Default27` | `https://checkout-test.adyen.com/checkout/possdk/v68` | `options.Server.Default27.Test.BaseUrl` |
| `Default28` | `https://postfmapi-test.adyen.com/postfmapi/terminal/v1` | `options.Server.Default28.Test.BaseUrl` |

Retry/resilience is configurable via `options.Retry` (`RetryOptions`, backed by Polly).

