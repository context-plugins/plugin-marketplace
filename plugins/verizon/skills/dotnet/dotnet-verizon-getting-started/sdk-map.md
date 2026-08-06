# SDK map — verizon (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | verizon |
| Root namespace/module | `Verizon` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `373cf91` (`373cf91a86a8d7a49569c1a4c22d3a959e26825d`, tagged `373cf91`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/verizon-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using Verizon;
using Verizon.Servers; // ServerEnvironment lives here

var options = new VerizonClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new VerizonClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddVerizonClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`VerizonClient.cs`.

<!-- crawler:client-options -->
All `VerizonClientOptions` properties (source: `VerizonClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `ThingspaceOauth` | `OAuth2ClientCredentials?` |
| `ThingspaceOauthTokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` |
| `VzM2MToken` | `string?` |
| `SessionToken` | `string?` |
| `ThingspaceOauth1` | `OAuth2ClientCredentials?` |
| `ThingspaceOauth1TokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` |

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

- `VerizonClient(HttpClient httpClient, VerizonClientOptions options)`
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
| `ApiError` — abstract base of all 229 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **314 operations**, **229 are Case A (typed)** and **85 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (88 groups, 314 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `AccountDevices` | 2 | [map/operations/AccountDevices.md](map/operations/AccountDevices.md) |
| `AccountRequests` | 1 | [map/operations/AccountRequests.md](map/operations/AccountRequests.md) |
| `Accounts` | 3 | [map/operations/Accounts.md](map/operations/Accounts.md) |
| `AccountServiceController` | 1 | [map/operations/AccountServiceController.md](map/operations/AccountServiceController.md) |
| `AccountSubscriptions` | 1 | [map/operations/AccountSubscriptions.md](map/operations/AccountSubscriptions.md) |
| `AnomalySettings` | 3 | [map/operations/AnomalySettings.md](map/operations/AnomalySettings.md) |
| `AnomalyTriggers` | 5 | [map/operations/AnomalyTriggers.md](map/operations/AnomalyTriggers.md) |
| `AnomalyTriggersV2` | 3 | [map/operations/AnomalyTriggersV2.md](map/operations/AnomalyTriggersV2.md) |
| `Billing` | 4 | [map/operations/Billing.md](map/operations/Billing.md) |
| `CampaignsV2` | 7 | [map/operations/CampaignsV2.md](map/operations/CampaignsV2.md) |
| `CampaignsV3` | 5 | [map/operations/CampaignsV3.md](map/operations/CampaignsV3.md) |
| `ClientLogging` | 6 | [map/operations/ClientLogging.md](map/operations/ClientLogging.md) |
| `CloudConnectorDevices` | 6 | [map/operations/CloudConnectorDevices.md](map/operations/CloudConnectorDevices.md) |
| `CloudConnectorSubscriptions` | 3 | [map/operations/CloudConnectorSubscriptions.md](map/operations/CloudConnectorSubscriptions.md) |
| `ConfigurationFiles` | 2 | [map/operations/ConfigurationFiles.md](map/operations/ConfigurationFiles.md) |
| `ConnectivityCallbacks` | 3 | [map/operations/ConnectivityCallbacks.md](map/operations/ConnectivityCallbacks.md) |
| `CreatePricePlanTriggers` | 1 | [map/operations/CreatePricePlanTriggers.md](map/operations/CreatePricePlanTriggers.md) |
| `DeviceActions` | 7 | [map/operations/DeviceActions.md](map/operations/DeviceActions.md) |
| `DeviceCredentialManagement` | 4 | [map/operations/DeviceCredentialManagement.md](map/operations/DeviceCredentialManagement.md) |
| `DeviceDiagnostics` | 2 | [map/operations/DeviceDiagnostics.md](map/operations/DeviceDiagnostics.md) |
| `DeviceGroups` | 5 | [map/operations/DeviceGroups.md](map/operations/DeviceGroups.md) |
| `DeviceLocationCallbacks` | 4 | [map/operations/DeviceLocationCallbacks.md](map/operations/DeviceLocationCallbacks.md) |
| `DeviceManagement` | 29 | [map/operations/DeviceManagement.md](map/operations/DeviceManagement.md) |
| `DeviceMonitoring` | 2 | [map/operations/DeviceMonitoring.md](map/operations/DeviceMonitoring.md) |
| `DeviceProfileManagement` | 4 | [map/operations/DeviceProfileManagement.md](map/operations/DeviceProfileManagement.md) |
| `DeviceReports` | 3 | [map/operations/DeviceReports.md](map/operations/DeviceReports.md) |
| `DeviceRoleController` | 1 | [map/operations/DeviceRoleController.md](map/operations/DeviceRoleController.md) |
| `DeviceServiceManagement` | 2 | [map/operations/DeviceServiceManagement.md](map/operations/DeviceServiceManagement.md) |
| `DevicesLocations` | 6 | [map/operations/DevicesLocations.md](map/operations/DevicesLocations.md) |
| `DevicesLocationSubscriptions` | 2 | [map/operations/DevicesLocationSubscriptions.md](map/operations/DevicesLocationSubscriptions.md) |
| `DeviceSmsMessaging` | 4 | [map/operations/DeviceSmsMessaging.md](map/operations/DeviceSmsMessaging.md) |
| `DiagnosticsCallbacks` | 3 | [map/operations/DiagnosticsCallbacks.md](map/operations/DiagnosticsCallbacks.md) |
| `DiagnosticsFactoryReset` | 1 | [map/operations/DiagnosticsFactoryReset.md](map/operations/DiagnosticsFactoryReset.md) |
| `DiagnosticsHistory` | 1 | [map/operations/DiagnosticsHistory.md](map/operations/DiagnosticsHistory.md) |
| `DiagnosticsObservations` | 2 | [map/operations/DiagnosticsObservations.md](map/operations/DiagnosticsObservations.md) |
| `DiagnosticsSettings` | 1 | [map/operations/DiagnosticsSettings.md](map/operations/DiagnosticsSettings.md) |
| `DiagnosticsSubscriptions` | 1 | [map/operations/DiagnosticsSubscriptions.md](map/operations/DiagnosticsSubscriptions.md) |
| `EtxappConfiguration` | 5 | [map/operations/EtxappConfiguration.md](map/operations/EtxappConfiguration.md) |
| `Etxregistration` | 7 | [map/operations/Etxregistration.md](map/operations/Etxregistration.md) |
| `EUiccDeviceProfileManagement` | 5 | [map/operations/EUiccDeviceProfileManagement.md](map/operations/EUiccDeviceProfileManagement.md) |
| `Exclusions` | 6 | [map/operations/Exclusions.md](map/operations/Exclusions.md) |
| `FirmwareV1` | 5 | [map/operations/FirmwareV1.md](map/operations/FirmwareV1.md) |
| `FirmwareV3` | 3 | [map/operations/FirmwareV3.md](map/operations/FirmwareV3.md) |
| `GbiDeviceActions5` | 3 | [map/operations/GbiDeviceActions5.md](map/operations/GbiDeviceActions5.md) |
| `GlobalReporting` | 2 | [map/operations/GlobalReporting.md](map/operations/GlobalReporting.md) |
| `HplDeviceManagement` | 1 | [map/operations/HplDeviceManagement.md](map/operations/HplDeviceManagement.md) |
| `HyperPreciseLocationCallbacks` | 3 | [map/operations/HyperPreciseLocationCallbacks.md](map/operations/HyperPreciseLocationCallbacks.md) |
| `IntelligenceServiceController` | 2 | [map/operations/IntelligenceServiceController.md](map/operations/IntelligenceServiceController.md) |
| `ManagingESimProfiles` | 10 | [map/operations/ManagingESimProfiles.md](map/operations/ManagingESimProfiles.md) |
| `MapMessageController` | 4 | [map/operations/MapMessageController.md](map/operations/MapMessageController.md) |
| `PromotionPeriodInformation` | 2 | [map/operations/PromotionPeriodInformation.md](map/operations/PromotionPeriodInformation.md) |
| `Pwn` | 7 | [map/operations/Pwn.md](map/operations/Pwn.md) |
| `RetrieveRatePlanList` | 1 | [map/operations/RetrieveRatePlanList.md](map/operations/RetrieveRatePlanList.md) |
| `RetrieveTheTriggers` | 4 | [map/operations/RetrieveTheTriggers.md](map/operations/RetrieveTheTriggers.md) |
| `SensorInsightsDeviceProfile` | 4 | [map/operations/SensorInsightsDeviceProfile.md](map/operations/SensorInsightsDeviceProfile.md) |
| `SensorInsightsDevices` | 6 | [map/operations/SensorInsightsDevices.md](map/operations/SensorInsightsDevices.md) |
| `SensorInsightsGateways` | 1 | [map/operations/SensorInsightsGateways.md](map/operations/SensorInsightsGateways.md) |
| `SensorInsightsHealthScore` | 2 | [map/operations/SensorInsightsHealthScore.md](map/operations/SensorInsightsHealthScore.md) |
| `SensorInsightsNotificationGroups` | 6 | [map/operations/SensorInsightsNotificationGroups.md](map/operations/SensorInsightsNotificationGroups.md) |
| `SensorInsightsRules` | 2 | [map/operations/SensorInsightsRules.md](map/operations/SensorInsightsRules.md) |
| `SensorInsightsSensors` | 5 | [map/operations/SensorInsightsSensors.md](map/operations/SensorInsightsSensors.md) |
| `SensorInsightsSmartAlertMetrics` | 1 | [map/operations/SensorInsightsSmartAlertMetrics.md](map/operations/SensorInsightsSmartAlertMetrics.md) |
| `SensorInsightsSmartAlerts` | 3 | [map/operations/SensorInsightsSmartAlerts.md](map/operations/SensorInsightsSmartAlerts.md) |
| `SensorInsightsUsers` | 4 | [map/operations/SensorInsightsUsers.md](map/operations/SensorInsightsUsers.md) |
| `ServerLogging` | 1 | [map/operations/ServerLogging.md](map/operations/ServerLogging.md) |
| `ServicePlans` | 1 | [map/operations/ServicePlans.md](map/operations/ServicePlans.md) |
| `SessionManagement` | 3 | [map/operations/SessionManagement.md](map/operations/SessionManagement.md) |
| `SimActions` | 3 | [map/operations/SimActions.md](map/operations/SimActions.md) |
| `SimSecureForIoTLicenses` | 2 | [map/operations/SimSecureForIoTLicenses.md](map/operations/SimSecureForIoTLicenses.md) |
| `Sms` | 3 | [map/operations/Sms.md](map/operations/Sms.md) |
| `SoftwareManagementCallbacksV1` | 3 | [map/operations/SoftwareManagementCallbacksV1.md](map/operations/SoftwareManagementCallbacksV1.md) |
| `SoftwareManagementCallbacksV2` | 4 | [map/operations/SoftwareManagementCallbacksV2.md](map/operations/SoftwareManagementCallbacksV2.md) |
| `SoftwareManagementCallbacksV3` | 4 | [map/operations/SoftwareManagementCallbacksV3.md](map/operations/SoftwareManagementCallbacksV3.md) |
| `SoftwareManagementLicensesV1` | 5 | [map/operations/SoftwareManagementLicensesV1.md](map/operations/SoftwareManagementLicensesV1.md) |
| `SoftwareManagementLicensesV2` | 6 | [map/operations/SoftwareManagementLicensesV2.md](map/operations/SoftwareManagementLicensesV2.md) |
| `SoftwareManagementLicensesV3` | 3 | [map/operations/SoftwareManagementLicensesV3.md](map/operations/SoftwareManagementLicensesV3.md) |
| `SoftwareManagementReportsV1` | 3 | [map/operations/SoftwareManagementReportsV1.md](map/operations/SoftwareManagementReportsV1.md) |
| `SoftwareManagementReportsV2` | 5 | [map/operations/SoftwareManagementReportsV2.md](map/operations/SoftwareManagementReportsV2.md) |
| `SoftwareManagementReportsV3` | 3 | [map/operations/SoftwareManagementReportsV3.md](map/operations/SoftwareManagementReportsV3.md) |
| `SoftwareManagementSubscriptionsV1` | 2 | [map/operations/SoftwareManagementSubscriptionsV1.md](map/operations/SoftwareManagementSubscriptionsV1.md) |
| `SoftwareManagementSubscriptionsV2` | 1 | [map/operations/SoftwareManagementSubscriptionsV2.md](map/operations/SoftwareManagementSubscriptionsV2.md) |
| `SoftwareManagementSubscriptionsV3` | 1 | [map/operations/SoftwareManagementSubscriptionsV3.md](map/operations/SoftwareManagementSubscriptionsV3.md) |
| `Targets` | 5 | [map/operations/Targets.md](map/operations/Targets.md) |
| `ThingSpaceQualityOfServiceApiActions` | 2 | [map/operations/ThingSpaceQualityOfServiceApiActions.md](map/operations/ThingSpaceQualityOfServiceApiActions.md) |
| `UpdatePricePlanTriggers` | 1 | [map/operations/UpdatePricePlanTriggers.md](map/operations/UpdatePricePlanTriggers.md) |
| `UpdateTriggers` | 1 | [map/operations/UpdateTriggers.md](map/operations/UpdateTriggers.md) |
| `UsageTriggerManagement` | 3 | [map/operations/UsageTriggerManagement.md](map/operations/UsageTriggerManagement.md) |
| `WirelessNetworkPerformance` | 5 | [map/operations/WirelessNetworkPerformance.md](map/operations/WirelessNetworkPerformance.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 802 | [`Acceleration` … `DeleteTargetRequest`](map/models/records-1-Ac-De.md) · [`DenmPayload` … `FotaV3CallbackRegistrationRequest`](map/models/records-2-De-Fo.md) · [`FotaV3CallbackRegistrationResult` … `RatePlanGroup`](map/models/records-3-Fo-Ra.md) · [`Rateplantype2` … `V2TimeWindow`](map/models/records-4-Ra-V2.md) · [`V2TriggersRequest` … `WrongWayDrivingCauseCode`](map/models/records-5-V2-Wr.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 57 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 61 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `Verizon` |
| Operation controllers (`Api/`) | `Verizon.Api` |
| Records (`Models/`) | `Verizon.Models` |
| Enums (`Models/Enums/`) | `Verizon.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `Verizon.Models.AnyOf` |
| Error classes (`Errors/`) | `Verizon.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `VerizonClientOptions` (source: `VerizonClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `ThingspaceOauth` | `OAuth2ClientCredentials?` | This is the ThingSpace token, from <see href="https://thingspace.verizon.com/documentation/api-documentation.html#/http/quick-start/credentials-and-tokens">Credentials and Tokens</see> is used |
| `ThingspaceOauthTokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` | — |
| `VzM2MToken` | `string?` | M2M Session Token (<see href="$e/Session%20Management/StartConnectivityManagementSession">How to generate an M2M session token?</see>) |
| `SessionToken` | `string?` | This is the Session/M2M token needed to authenticate the user. It should be acquired by using the ThingSpace APIs. For detail on how to obtain a Session/M2M token please refer to the - <see href="https://thingspace.verizon.com/documentation/api-documentation.html#/http/quick-start/credentials-and-tokens/obtaining-a-vz-m2m-sessiontoken-programmatically">ThingSpace Quick Start Guide - Obtaining a VZ-M2M Session Token Programmatically</see> - or the <see href="https://www.youtube.com/watch?v=QPJQFT3637w">ThingSpace API Video Guide 1</see> and <see href="https://www.youtube.com/watch?v=hc9udGp4P_s">ThingSpace API Video Guide 2</see> |
| `ThingspaceOauth1` | `OAuth2ClientCredentials?` | This is where the ThingSpace access token, from <see href="https://thingspace.verizon.com/documentation/api-documentation.html#/http/quick-start/credentials-and-tokens">Credentials and Tokens</see> is used |
| `ThingspaceOauth1TokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`, `ServerEnvironment.Staging`, `ServerEnvironment.Dev`, `ServerEnvironment.Qa`, `ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
