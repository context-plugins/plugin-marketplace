# SDK map — mist (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | mist |
| Root namespace/module | `MistApi` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `77a1d53` (`77a1d53be8ba20fad04c7cd6a2adf2ea7cabffae`, tagged `77a1d53`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/mist-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using MistApi;
using MistApi.Servers; // ServerEnvironment lives here

var options = new MistApiClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new MistApiClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddMistApiClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`MistApiClient.cs`.

<!-- crawler:client-options -->
All `MistApiClientOptions` properties (source: `MistApiClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `ApiToken` | `string?` |
| `BasicAuth` | `BasicAuthCredentials?` |
| `CsrfToken` | `string?` |

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

- `MistApiClient(HttpClient httpClient, MistApiClientOptions options)`
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
| `ApiError` — abstract base of all 984 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **1006 operations**, **984 are Case A (typed)** and **22 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (203 groups, 1006 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `Admins` | 4 | [map/operations/Admins.md](map/operations/Admins.md) |
| `AdminsLogin` | 2 | [map/operations/AdminsLogin.md](map/operations/AdminsLogin.md) |
| `AdminsLoginOauth2` | 3 | [map/operations/AdminsLoginOauth2.md](map/operations/AdminsLoginOauth2.md) |
| `AdminsLogout` | 1 | [map/operations/AdminsLogout.md](map/operations/AdminsLogout.md) |
| `AdminsLookup` | 1 | [map/operations/AdminsLookup.md](map/operations/AdminsLookup.md) |
| `AdminsRecoverPassword` | 2 | [map/operations/AdminsRecoverPassword.md](map/operations/AdminsRecoverPassword.md) |
| `ConstantsDefinitions` | 16 | [map/operations/ConstantsDefinitions.md](map/operations/ConstantsDefinitions.md) |
| `ConstantsEvents` | 7 | [map/operations/ConstantsEvents.md](map/operations/ConstantsEvents.md) |
| `ConstantsModels` | 4 | [map/operations/ConstantsModels.md](map/operations/ConstantsModels.md) |
| `Installer` | 23 | [map/operations/Installer.md](map/operations/Installer.md) |
| `Msps` | 5 | [map/operations/Msps.md](map/operations/Msps.md) |
| `MspsAdmins` | 7 | [map/operations/MspsAdmins.md](map/operations/MspsAdmins.md) |
| `MspsInventory` | 1 | [map/operations/MspsInventory.md](map/operations/MspsInventory.md) |
| `MspsLicenses` | 4 | [map/operations/MspsLicenses.md](map/operations/MspsLicenses.md) |
| `MspsLogo` | 2 | [map/operations/MspsLogo.md](map/operations/MspsLogo.md) |
| `MspsLogs` | 2 | [map/operations/MspsLogs.md](map/operations/MspsLogs.md) |
| `MspsMarvis` | 1 | [map/operations/MspsMarvis.md](map/operations/MspsMarvis.md) |
| `MspsOrgGroups` | 5 | [map/operations/MspsOrgGroups.md](map/operations/MspsOrgGroups.md) |
| `MspsOrgs` | 8 | [map/operations/MspsOrgs.md](map/operations/MspsOrgs.md) |
| `MspsSles` | 1 | [map/operations/MspsSles.md](map/operations/MspsSles.md) |
| `MspsSso` | 8 | [map/operations/MspsSso.md](map/operations/MspsSso.md) |
| `MspsSsoRoles` | 4 | [map/operations/MspsSsoRoles.md](map/operations/MspsSsoRoles.md) |
| `MspsTickets` | 2 | [map/operations/MspsTickets.md](map/operations/MspsTickets.md) |
| `Orgs` | 5 | [map/operations/Orgs.md](map/operations/Orgs.md) |
| `OrgsAdmins` | 6 | [map/operations/OrgsAdmins.md](map/operations/OrgsAdmins.md) |
| `OrgsAdvancedAntiMalwareProfiles` | 5 | [map/operations/OrgsAdvancedAntiMalwareProfiles.md](map/operations/OrgsAdvancedAntiMalwareProfiles.md) |
| `OrgsAlarms` | 9 | [map/operations/OrgsAlarms.md](map/operations/OrgsAlarms.md) |
| `OrgsAlarmTemplates` | 8 | [map/operations/OrgsAlarmTemplates.md](map/operations/OrgsAlarmTemplates.md) |
| `OrgsAntivirusProfiles` | 5 | [map/operations/OrgsAntivirusProfiles.md](map/operations/OrgsAntivirusProfiles.md) |
| `OrgsApiTokens` | 5 | [map/operations/OrgsApiTokens.md](map/operations/OrgsApiTokens.md) |
| `OrgsApTemplates` | 5 | [map/operations/OrgsApTemplates.md](map/operations/OrgsApTemplates.md) |
| `OrgsAssetFilters` | 5 | [map/operations/OrgsAssetFilters.md](map/operations/OrgsAssetFilters.md) |
| `OrgsAssets` | 6 | [map/operations/OrgsAssets.md](map/operations/OrgsAssets.md) |
| `OrgsCert` | 5 | [map/operations/OrgsCert.md](map/operations/OrgsCert.md) |
| `OrgsClientsMarvis` | 1 | [map/operations/OrgsClientsMarvis.md](map/operations/OrgsClientsMarvis.md) |
| `OrgsClientsNac` | 4 | [map/operations/OrgsClientsNac.md](map/operations/OrgsClientsNac.md) |
| `OrgsClientsSdk` | 1 | [map/operations/OrgsClientsSdk.md](map/operations/OrgsClientsSdk.md) |
| `OrgsClientsWan` | 4 | [map/operations/OrgsClientsWan.md](map/operations/OrgsClientsWan.md) |
| `OrgsClientsWired` | 2 | [map/operations/OrgsClientsWired.md](map/operations/OrgsClientsWired.md) |
| `OrgsClientsWireless` | 6 | [map/operations/OrgsClientsWireless.md](map/operations/OrgsClientsWireless.md) |
| `OrgsCrl` | 1 | [map/operations/OrgsCrl.md](map/operations/OrgsCrl.md) |
| `OrgsDeviceProfiles` | 7 | [map/operations/OrgsDeviceProfiles.md](map/operations/OrgsDeviceProfiles.md) |
| `OrgsDevices` | 10 | [map/operations/OrgsDevices.md](map/operations/OrgsDevices.md) |
| `OrgsDevicesOthers` | 8 | [map/operations/OrgsDevicesOthers.md](map/operations/OrgsDevicesOthers.md) |
| `OrgsDevicesSsr` | 1 | [map/operations/OrgsDevicesSsr.md](map/operations/OrgsDevicesSsr.md) |
| `OrgsEvents` | 3 | [map/operations/OrgsEvents.md](map/operations/OrgsEvents.md) |
| `OrgsEvpnTopologies` | 5 | [map/operations/OrgsEvpnTopologies.md](map/operations/OrgsEvpnTopologies.md) |
| `OrgsGatewayTemplates` | 5 | [map/operations/OrgsGatewayTemplates.md](map/operations/OrgsGatewayTemplates.md) |
| `OrgsGuests` | 6 | [map/operations/OrgsGuests.md](map/operations/OrgsGuests.md) |
| `OrgsIdpProfiles` | 5 | [map/operations/OrgsIdpProfiles.md](map/operations/OrgsIdpProfiles.md) |
| `OrgsIntegrationCradlepoint` | 5 | [map/operations/OrgsIntegrationCradlepoint.md](map/operations/OrgsIntegrationCradlepoint.md) |
| `OrgsIntegrationJse` | 4 | [map/operations/OrgsIntegrationJse.md](map/operations/OrgsIntegrationJse.md) |
| `OrgsIntegrationJuniper` | 2 | [map/operations/OrgsIntegrationJuniper.md](map/operations/OrgsIntegrationJuniper.md) |
| `OrgsIntegrationSkyAtp` | 6 | [map/operations/OrgsIntegrationSkyAtp.md](map/operations/OrgsIntegrationSkyAtp.md) |
| `OrgsIntegrationZscaler` | 3 | [map/operations/OrgsIntegrationZscaler.md](map/operations/OrgsIntegrationZscaler.md) |
| `OrgsInventory` | 9 | [map/operations/OrgsInventory.md](map/operations/OrgsInventory.md) |
| `OrgsJsi` | 6 | [map/operations/OrgsJsi.md](map/operations/OrgsJsi.md) |
| `OrgsLicenses` | 5 | [map/operations/OrgsLicenses.md](map/operations/OrgsLicenses.md) |
| `OrgsLinkedApplications` | 4 | [map/operations/OrgsLinkedApplications.md](map/operations/OrgsLinkedApplications.md) |
| `OrgsLogs` | 2 | [map/operations/OrgsLogs.md](map/operations/OrgsLogs.md) |
| `OrgsMaps` | 2 | [map/operations/OrgsMaps.md](map/operations/OrgsMaps.md) |
| `OrgsMarvis` | 1 | [map/operations/OrgsMarvis.md](map/operations/OrgsMarvis.md) |
| `OrgsMarvisInvites` | 5 | [map/operations/OrgsMarvisInvites.md](map/operations/OrgsMarvisInvites.md) |
| `OrgsMxClusters` | 5 | [map/operations/OrgsMxClusters.md](map/operations/OrgsMxClusters.md) |
| `OrgsMxEdges` | 21 | [map/operations/OrgsMxEdges.md](map/operations/OrgsMxEdges.md) |
| `OrgsMxTunnels` | 5 | [map/operations/OrgsMxTunnels.md](map/operations/OrgsMxTunnels.md) |
| `OrgsNacCrl` | 3 | [map/operations/OrgsNacCrl.md](map/operations/OrgsNacCrl.md) |
| `OrgsNacFingerprints` | 2 | [map/operations/OrgsNacFingerprints.md](map/operations/OrgsNacFingerprints.md) |
| `OrgsNacIdp` | 1 | [map/operations/OrgsNacIdp.md](map/operations/OrgsNacIdp.md) |
| `OrgsNacPortals` | 11 | [map/operations/OrgsNacPortals.md](map/operations/OrgsNacPortals.md) |
| `OrgsNacRules` | 5 | [map/operations/OrgsNacRules.md](map/operations/OrgsNacRules.md) |
| `OrgsNacTags` | 5 | [map/operations/OrgsNacTags.md](map/operations/OrgsNacTags.md) |
| `OrgsNetworks` | 5 | [map/operations/OrgsNetworks.md](map/operations/OrgsNetworks.md) |
| `OrgsNetworkTemplates` | 5 | [map/operations/OrgsNetworkTemplates.md](map/operations/OrgsNetworkTemplates.md) |
| `OrgsPremiumAnalytics` | 1 | [map/operations/OrgsPremiumAnalytics.md](map/operations/OrgsPremiumAnalytics.md) |
| `OrgsPskPortals` | 11 | [map/operations/OrgsPskPortals.md](map/operations/OrgsPskPortals.md) |
| `OrgsPsks` | 9 | [map/operations/OrgsPsks.md](map/operations/OrgsPsks.md) |
| `OrgsRfTemplates` | 5 | [map/operations/OrgsRfTemplates.md](map/operations/OrgsRfTemplates.md) |
| `OrgsScep` | 5 | [map/operations/OrgsScep.md](map/operations/OrgsScep.md) |
| `OrgsSdkInvites` | 9 | [map/operations/OrgsSdkInvites.md](map/operations/OrgsSdkInvites.md) |
| `OrgsSdkTemplates` | 5 | [map/operations/OrgsSdkTemplates.md](map/operations/OrgsSdkTemplates.md) |
| `OrgsSecIntelProfiles` | 5 | [map/operations/OrgsSecIntelProfiles.md](map/operations/OrgsSecIntelProfiles.md) |
| `OrgsSecurityPolicies` | 5 | [map/operations/OrgsSecurityPolicies.md](map/operations/OrgsSecurityPolicies.md) |
| `OrgsServicePolicies` | 5 | [map/operations/OrgsServicePolicies.md](map/operations/OrgsServicePolicies.md) |
| `OrgsServices` | 5 | [map/operations/OrgsServices.md](map/operations/OrgsServices.md) |
| `OrgsSetting` | 6 | [map/operations/OrgsSetting.md](map/operations/OrgsSetting.md) |
| `OrgsSitegroups` | 5 | [map/operations/OrgsSitegroups.md](map/operations/OrgsSitegroups.md) |
| `OrgsSites` | 4 | [map/operations/OrgsSites.md](map/operations/OrgsSites.md) |
| `OrgsSiteTemplates` | 5 | [map/operations/OrgsSiteTemplates.md](map/operations/OrgsSiteTemplates.md) |
| `OrgsSles` | 2 | [map/operations/OrgsSles.md](map/operations/OrgsSles.md) |
| `OrgsSso` | 8 | [map/operations/OrgsSso.md](map/operations/OrgsSso.md) |
| `OrgsSsoRoles` | 5 | [map/operations/OrgsSsoRoles.md](map/operations/OrgsSsoRoles.md) |
| `OrgsStats` | 1 | [map/operations/OrgsStats.md](map/operations/OrgsStats.md) |
| `OrgsStatsAssets` | 3 | [map/operations/OrgsStatsAssets.md](map/operations/OrgsStatsAssets.md) |
| `OrgsStatsBgpPeers` | 2 | [map/operations/OrgsStatsBgpPeers.md](map/operations/OrgsStatsBgpPeers.md) |
| `OrgsStatsDevices` | 1 | [map/operations/OrgsStatsDevices.md](map/operations/OrgsStatsDevices.md) |
| `OrgsStatsMxEdges` | 2 | [map/operations/OrgsStatsMxEdges.md](map/operations/OrgsStatsMxEdges.md) |
| `OrgsStatsOtherDevices` | 1 | [map/operations/OrgsStatsOtherDevices.md](map/operations/OrgsStatsOtherDevices.md) |
| `OrgsStatsPorts` | 2 | [map/operations/OrgsStatsPorts.md](map/operations/OrgsStatsPorts.md) |
| `OrgsStatsSites` | 1 | [map/operations/OrgsStatsSites.md](map/operations/OrgsStatsSites.md) |
| `OrgsStatsTunnels` | 2 | [map/operations/OrgsStatsTunnels.md](map/operations/OrgsStatsTunnels.md) |
| `OrgsStatsVpnPeers` | 2 | [map/operations/OrgsStatsVpnPeers.md](map/operations/OrgsStatsVpnPeers.md) |
| `OrgsTickets` | 8 | [map/operations/OrgsTickets.md](map/operations/OrgsTickets.md) |
| `OrgsUiSettings` | 5 | [map/operations/OrgsUiSettings.md](map/operations/OrgsUiSettings.md) |
| `OrgsUserMacs` | 8 | [map/operations/OrgsUserMacs.md](map/operations/OrgsUserMacs.md) |
| `OrgsVars` | 1 | [map/operations/OrgsVars.md](map/operations/OrgsVars.md) |
| `OrgsVpns` | 5 | [map/operations/OrgsVpns.md](map/operations/OrgsVpns.md) |
| `OrgsWebhooks` | 8 | [map/operations/OrgsWebhooks.md](map/operations/OrgsWebhooks.md) |
| `OrgsWlans` | 8 | [map/operations/OrgsWlans.md](map/operations/OrgsWlans.md) |
| `OrgsWlanTemplates` | 6 | [map/operations/OrgsWlanTemplates.md](map/operations/OrgsWlanTemplates.md) |
| `OrgsWxRules` | 5 | [map/operations/OrgsWxRules.md](map/operations/OrgsWxRules.md) |
| `OrgsWxTags` | 7 | [map/operations/OrgsWxTags.md](map/operations/OrgsWxTags.md) |
| `OrgsWxTunnels` | 5 | [map/operations/OrgsWxTunnels.md](map/operations/OrgsWxTunnels.md) |
| `SamplesWebhooks` | 23 | [map/operations/SamplesWebhooks.md](map/operations/SamplesWebhooks.md) |
| `SelfAccount` | 7 | [map/operations/SelfAccount.md](map/operations/SelfAccount.md) |
| `SelfAlarms` | 1 | [map/operations/SelfAlarms.md](map/operations/SelfAlarms.md) |
| `SelfApiToken` | 5 | [map/operations/SelfApiToken.md](map/operations/SelfApiToken.md) |
| `SelfAuditLogs` | 1 | [map/operations/SelfAuditLogs.md](map/operations/SelfAuditLogs.md) |
| `SelfMfa` | 2 | [map/operations/SelfMfa.md](map/operations/SelfMfa.md) |
| `SelfOauth2` | 2 | [map/operations/SelfOauth2.md](map/operations/SelfOauth2.md) |
| `Sites` | 3 | [map/operations/Sites.md](map/operations/Sites.md) |
| `SitesAdvancedAntiMalwareProfiles` | 1 | [map/operations/SitesAdvancedAntiMalwareProfiles.md](map/operations/SitesAdvancedAntiMalwareProfiles.md) |
| `SitesAlarms` | 10 | [map/operations/SitesAlarms.md](map/operations/SitesAlarms.md) |
| `SitesAnomaly` | 3 | [map/operations/SitesAnomaly.md](map/operations/SitesAnomaly.md) |
| `SitesAntivirusProfiles` | 1 | [map/operations/SitesAntivirusProfiles.md](map/operations/SitesAntivirusProfiles.md) |
| `SitesApplications` | 1 | [map/operations/SitesApplications.md](map/operations/SitesApplications.md) |
| `SitesApTemplates` | 1 | [map/operations/SitesApTemplates.md](map/operations/SitesApTemplates.md) |
| `SitesAssetFilters` | 5 | [map/operations/SitesAssetFilters.md](map/operations/SitesAssetFilters.md) |
| `SitesAssets` | 6 | [map/operations/SitesAssets.md](map/operations/SitesAssets.md) |
| `SitesBeacons` | 5 | [map/operations/SitesBeacons.md](map/operations/SitesBeacons.md) |
| `SitesClientsNac` | 4 | [map/operations/SitesClientsNac.md](map/operations/SitesClientsNac.md) |
| `SitesClientsWan` | 4 | [map/operations/SitesClientsWan.md](map/operations/SitesClientsWan.md) |
| `SitesClientsWired` | 2 | [map/operations/SitesClientsWired.md](map/operations/SitesClientsWired.md) |
| `SitesClientsWireless` | 7 | [map/operations/SitesClientsWireless.md](map/operations/SitesClientsWireless.md) |
| `SitesDeviceProfiles` | 1 | [map/operations/SitesDeviceProfiles.md](map/operations/SitesDeviceProfiles.md) |
| `SitesDevices` | 17 | [map/operations/SitesDevices.md](map/operations/SitesDevices.md) |
| `SitesDevicesOthers` | 3 | [map/operations/SitesDevicesOthers.md](map/operations/SitesDevicesOthers.md) |
| `SitesDevicesWanCluster` | 3 | [map/operations/SitesDevicesWanCluster.md](map/operations/SitesDevicesWanCluster.md) |
| `SitesDevicesWired` | 2 | [map/operations/SitesDevicesWired.md](map/operations/SitesDevicesWired.md) |
| `SitesDevicesWiredVirtualChassis` | 6 | [map/operations/SitesDevicesWiredVirtualChassis.md](map/operations/SitesDevicesWiredVirtualChassis.md) |
| `SitesDevicesWireless` | 3 | [map/operations/SitesDevicesWireless.md](map/operations/SitesDevicesWireless.md) |
| `SitesEvents` | 3 | [map/operations/SitesEvents.md](map/operations/SitesEvents.md) |
| `SitesEvpnTopologies` | 5 | [map/operations/SitesEvpnTopologies.md](map/operations/SitesEvpnTopologies.md) |
| `SitesGatewayTemplates` | 1 | [map/operations/SitesGatewayTemplates.md](map/operations/SitesGatewayTemplates.md) |
| `SitesGuests` | 7 | [map/operations/SitesGuests.md](map/operations/SitesGuests.md) |
| `SitesIdpProfiles` | 1 | [map/operations/SitesIdpProfiles.md](map/operations/SitesIdpProfiles.md) |
| `SitesInsights` | 3 | [map/operations/SitesInsights.md](map/operations/SitesInsights.md) |
| `SitesJse` | 1 | [map/operations/SitesJse.md](map/operations/SitesJse.md) |
| `SitesLicenses` | 1 | [map/operations/SitesLicenses.md](map/operations/SitesLicenses.md) |
| `SitesLocation` | 8 | [map/operations/SitesLocation.md](map/operations/SitesLocation.md) |
| `SitesMaps` | 11 | [map/operations/SitesMaps.md](map/operations/SitesMaps.md) |
| `SitesMapsAutoPlacement` | 9 | [map/operations/SitesMapsAutoPlacement.md](map/operations/SitesMapsAutoPlacement.md) |
| `SitesMapsAutoZone` | 3 | [map/operations/SitesMapsAutoZone.md](map/operations/SitesMapsAutoZone.md) |
| `SitesMxEdges` | 7 | [map/operations/SitesMxEdges.md](map/operations/SitesMxEdges.md) |
| `SitesNetworks` | 1 | [map/operations/SitesNetworks.md](map/operations/SitesNetworks.md) |
| `SitesNetworkTemplates` | 1 | [map/operations/SitesNetworkTemplates.md](map/operations/SitesNetworkTemplates.md) |
| `SitesPsks` | 7 | [map/operations/SitesPsks.md](map/operations/SitesPsks.md) |
| `SitesRfdiags` | 7 | [map/operations/SitesRfdiags.md](map/operations/SitesRfdiags.md) |
| `SitesRfTemplates` | 1 | [map/operations/SitesRfTemplates.md](map/operations/SitesRfTemplates.md) |
| `SitesRogues` | 5 | [map/operations/SitesRogues.md](map/operations/SitesRogues.md) |
| `SitesRrm` | 4 | [map/operations/SitesRrm.md](map/operations/SitesRrm.md) |
| `SitesRssiZones` | 5 | [map/operations/SitesRssiZones.md](map/operations/SitesRssiZones.md) |
| `SitesSecIntelProfiles` | 1 | [map/operations/SitesSecIntelProfiles.md](map/operations/SitesSecIntelProfiles.md) |
| `SitesServicePolicies` | 1 | [map/operations/SitesServicePolicies.md](map/operations/SitesServicePolicies.md) |
| `SitesServices` | 3 | [map/operations/SitesServices.md](map/operations/SitesServices.md) |
| `SitesSetting` | 9 | [map/operations/SitesSetting.md](map/operations/SitesSetting.md) |
| `SitesSiteTemplates` | 1 | [map/operations/SitesSiteTemplates.md](map/operations/SitesSiteTemplates.md) |
| `SitesSkyatp` | 2 | [map/operations/SitesSkyatp.md](map/operations/SitesSkyatp.md) |
| `SitesSles` | 17 | [map/operations/SitesSles.md](map/operations/SitesSles.md) |
| `SitesSpectrumAnalysis` | 3 | [map/operations/SitesSpectrumAnalysis.md](map/operations/SitesSpectrumAnalysis.md) |
| `SitesStats` | 1 | [map/operations/SitesStats.md](map/operations/SitesStats.md) |
| `SitesStatsApps` | 1 | [map/operations/SitesStatsApps.md](map/operations/SitesStatsApps.md) |
| `SitesStatsAssets` | 7 | [map/operations/SitesStatsAssets.md](map/operations/SitesStatsAssets.md) |
| `SitesStatsBeacons` | 1 | [map/operations/SitesStatsBeacons.md](map/operations/SitesStatsBeacons.md) |
| `SitesStatsBgpPeers` | 2 | [map/operations/SitesStatsBgpPeers.md](map/operations/SitesStatsBgpPeers.md) |
| `SitesStatsCalls` | 5 | [map/operations/SitesStatsCalls.md](map/operations/SitesStatsCalls.md) |
| `SitesStatsClientsSdk` | 2 | [map/operations/SitesStatsClientsSdk.md](map/operations/SitesStatsClientsSdk.md) |
| `SitesStatsClientsWireless` | 4 | [map/operations/SitesStatsClientsWireless.md](map/operations/SitesStatsClientsWireless.md) |
| `SitesStatsDevices` | 5 | [map/operations/SitesStatsDevices.md](map/operations/SitesStatsDevices.md) |
| `SitesStatsDiscoveredSwitches` | 4 | [map/operations/SitesStatsDiscoveredSwitches.md](map/operations/SitesStatsDiscoveredSwitches.md) |
| `SitesStatsMxEdges` | 2 | [map/operations/SitesStatsMxEdges.md](map/operations/SitesStatsMxEdges.md) |
| `SitesStatsPorts` | 2 | [map/operations/SitesStatsPorts.md](map/operations/SitesStatsPorts.md) |
| `SitesStatsWxRules` | 1 | [map/operations/SitesStatsWxRules.md](map/operations/SitesStatsWxRules.md) |
| `SitesStatsZones` | 4 | [map/operations/SitesStatsZones.md](map/operations/SitesStatsZones.md) |
| `SitesSyntheticTests` | 5 | [map/operations/SitesSyntheticTests.md](map/operations/SitesSyntheticTests.md) |
| `SitesUiSettings` | 6 | [map/operations/SitesUiSettings.md](map/operations/SitesUiSettings.md) |
| `SitesVBeacons` | 5 | [map/operations/SitesVBeacons.md](map/operations/SitesVBeacons.md) |
| `SitesVpns` | 1 | [map/operations/SitesVpns.md](map/operations/SitesVpns.md) |
| `SitesWanUsages` | 2 | [map/operations/SitesWanUsages.md](map/operations/SitesWanUsages.md) |
| `SitesWebhooks` | 8 | [map/operations/SitesWebhooks.md](map/operations/SitesWebhooks.md) |
| `SitesWlans` | 9 | [map/operations/SitesWlans.md](map/operations/SitesWlans.md) |
| `SitesWxRules` | 6 | [map/operations/SitesWxRules.md](map/operations/SitesWxRules.md) |
| `SitesWxTags` | 6 | [map/operations/SitesWxTags.md](map/operations/SitesWxTags.md) |
| `SitesWxTunnels` | 5 | [map/operations/SitesWxTunnels.md](map/operations/SitesWxTunnels.md) |
| `SitesZones` | 7 | [map/operations/SitesZones.md](map/operations/SitesZones.md) |
| `UtilitiesCommon` | 25 | [map/operations/UtilitiesCommon.md](map/operations/UtilitiesCommon.md) |
| `UtilitiesLan` | 11 | [map/operations/UtilitiesLan.md](map/operations/UtilitiesLan.md) |
| `UtilitiesLocation` | 1 | [map/operations/UtilitiesLocation.md](map/operations/UtilitiesLocation.md) |
| `UtilitiesMxEdge` | 1 | [map/operations/UtilitiesMxEdge.md](map/operations/UtilitiesMxEdge.md) |
| `UtilitiesPcaps` | 9 | [map/operations/UtilitiesPcaps.md](map/operations/UtilitiesPcaps.md) |
| `UtilitiesUpgrade` | 22 | [map/operations/UtilitiesUpgrade.md](map/operations/UtilitiesUpgrade.md) |
| `UtilitiesWan` | 14 | [map/operations/UtilitiesWan.md](map/operations/UtilitiesWan.md) |
| `UtilitiesWiFi` | 14 | [map/operations/UtilitiesWiFi.md](map/operations/UtilitiesWiFi.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 1181 | [`AamwProfile` … `ConstApplicationDefinition`](map/models/records-1-Aa-Co.md) · [`ConstAppSubcategoryDefinition` … `GatewayWanProbeOverride`](map/models/records-2-Co-Ga.md) · [`Guest` … `OrgServicePolicy`](map/models/records-3-Gu-Or.md) · [`OrgSetting` … `ResponseOrgSuppressAlarm`](map/models/records-4-Or-Re.md) · [`ResponseOrgSuppressAlarmItem` … `SiteSettingCriticalUrlMonitoringMonitor`](map/models/records-5-Re-Si.md) · [`SiteSettingDerived` … `StatsDeviceOtherVendorSpecificPort`](map/models/records-6-Si-St.md) · [`StatsGateway` … `TicketAttachment`](map/models/records-7-St-Ti.md) · [`TicketComment` … `WirelessClientSession`](map/models/records-8-Ti-Wi.md) · [`Wlan` … `ZoneVertexM`](map/models/records-9-Wl-Zo.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 65 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 451 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `MistApi` |
| Operation controllers (`Api/`) | `MistApi.Api` |
| Records (`Models/`) | `MistApi.Models` |
| Enums (`Models/Enums/`) | `MistApi.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `MistApi.Models.AnyOf` |
| Error classes (`Errors/`) | `MistApi.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `MistApiClientOptions` (source: `MistApiClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `ApiToken` | `string?` | Like many other API providers, it’s also possible to generate API Tokens to be used (in HTTP Header) for authentication. An API token ties to a Admin with equal or less privileges. <para> <b>Format</b>: API Token value format is <c>Token {apitoken}</c> </para> <para> <b>Notes</b>: * an API token generated for a specific admin has the same privilege as the user * an API token will be automatically removed if not used for &gt; 90 days * SSO admins cannot generate these API tokens. Refer Org level API tokens which can have privileges of a specific Org/Site for more information. </para> |
| `BasicAuth` | `BasicAuthCredentials?` | While our current UI uses Session / Cookie-based authentication, it’s also possible to do Basic Auth. |
| `CsrfToken` | `string?` | This protects the website against <see href="https://en.wikipedia.org/wiki/Cross-site_request_forgery">Cross Site Request Forgery</see>, all the POST / PUT / DELETE APIs needs to have CSRF token in the AJAX Request header when using Login/Password authentication (with or without MFA) <para>  The CSRF Token is sent back by Mist in the Cookies from the Login Response API Call: <c>cookies[csrftoken]</c> </para> <para> The CSRF Token must be added in the HTTP Request Headers: <code> X-CSRFToken: vwvBuq9qkqaKh7lu8tNc0gkvBfEaLAmx </code> </para> |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.MistGlobal01`, `ServerEnvironment.MistGlobal02`, `ServerEnvironment.MistGlobal03`, `ServerEnvironment.MistGlobal04`, `ServerEnvironment.MistGlobal05`, `ServerEnvironment.MistEmea01`, `ServerEnvironment.MistEmea02`, `ServerEnvironment.MistEmea03`, `ServerEnvironment.MistEmea04`, `ServerEnvironment.MistApac01`, `ServerEnvironment.MistApac02`, `ServerEnvironment.MistApac03`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
