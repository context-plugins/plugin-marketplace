# SDK map — paragon (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | paragon |
| Root namespace/module | `RoutingDirector` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `5012d34` (`5012d3480087f52d17416fb99d2327c48165c993`, tagged `5012d34`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/paragon-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using RoutingDirector;
using RoutingDirector.Servers; // ServerEnvironment lives here

var options = new RoutingDirectorClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new RoutingDirectorClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddRoutingDirectorClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`RoutingDirectorClient.cs`.

<!-- crawler:client-options -->
All `RoutingDirectorClientOptions` properties (source: `RoutingDirectorClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `BasicAuth` | `BasicAuthCredentials?` |
| `ApikeyHeader` | `string?` |

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

- `RoutingDirectorClient(HttpClient httpClient, RoutingDirectorClientOptions options)`
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
| `ApiError` — abstract base of all 263 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **825 operations**, **263 are Case A (typed)** and **562 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (153 groups, 825 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `ActiveassuranceEvents` | 4 | [map/operations/ActiveassuranceEvents.md](map/operations/ActiveassuranceEvents.md) |
| `ActiveassuranceMeasurementReports` | 2 | [map/operations/ActiveassuranceMeasurementReports.md](map/operations/ActiveassuranceMeasurementReports.md) |
| `ActiveassuranceMeasurements` | 17 | [map/operations/ActiveassuranceMeasurements.md](map/operations/ActiveassuranceMeasurements.md) |
| `ActiveassuranceMetrics` | 2 | [map/operations/ActiveassuranceMetrics.md](map/operations/ActiveassuranceMetrics.md) |
| `ActiveassuranceMonitors` | 5 | [map/operations/ActiveassuranceMonitors.md](map/operations/ActiveassuranceMonitors.md) |
| `ActiveassurancePacketCaptures` | 4 | [map/operations/ActiveassurancePacketCaptures.md](map/operations/ActiveassurancePacketCaptures.md) |
| `ActiveassurancePlugins` | 8 | [map/operations/ActiveassurancePlugins.md](map/operations/ActiveassurancePlugins.md) |
| `ActiveassuranceSecrets` | 5 | [map/operations/ActiveassuranceSecrets.md](map/operations/ActiveassuranceSecrets.md) |
| `ActiveassuranceStreams` | 3 | [map/operations/ActiveassuranceStreams.md](map/operations/ActiveassuranceStreams.md) |
| `ActiveassuranceTags` | 2 | [map/operations/ActiveassuranceTags.md](map/operations/ActiveassuranceTags.md) |
| `ActiveassuranceTestAgentInterfaces` | 10 | [map/operations/ActiveassuranceTestAgentInterfaces.md](map/operations/ActiveassuranceTestAgentInterfaces.md) |
| `ActiveassuranceTestAgents` | 15 | [map/operations/ActiveassuranceTestAgents.md](map/operations/ActiveassuranceTestAgents.md) |
| `ActiveassuranceTestAgentsJunos` | 1 | [map/operations/ActiveassuranceTestAgentsJunos.md](map/operations/ActiveassuranceTestAgentsJunos.md) |
| `ActiveassuranceTestAgentSshConfigs` | 4 | [map/operations/ActiveassuranceTestAgentSshConfigs.md](map/operations/ActiveassuranceTestAgentSshConfigs.md) |
| `ActiveassuranceTests` | 10 | [map/operations/ActiveassuranceTests.md](map/operations/ActiveassuranceTests.md) |
| `ActiveassuranceTestSchedules` | 7 | [map/operations/ActiveassuranceTestSchedules.md](map/operations/ActiveassuranceTestSchedules.md) |
| `ActiveassuranceTestTemplates` | 5 | [map/operations/ActiveassuranceTestTemplates.md](map/operations/ActiveassuranceTestTemplates.md) |
| `ActiveassuranceTopology` | 4 | [map/operations/ActiveassuranceTopology.md](map/operations/ActiveassuranceTopology.md) |
| `AiopsBadCable` | 2 | [map/operations/AiopsBadCable.md](map/operations/AiopsBadCable.md) |
| `AiopsBlackhole` | 4 | [map/operations/AiopsBlackhole.md](map/operations/AiopsBlackhole.md) |
| `AiopsDeviceHealth` | 2 | [map/operations/AiopsDeviceHealth.md](map/operations/AiopsDeviceHealth.md) |
| `AiopsSmartSyslogs` | 3 | [map/operations/AiopsSmartSyslogs.md](map/operations/AiopsSmartSyslogs.md) |
| `AlertmanagerActions` | 2 | [map/operations/AlertmanagerActions.md](map/operations/AlertmanagerActions.md) |
| `AlertmanagerAlertGroups` | 5 | [map/operations/AlertmanagerAlertGroups.md](map/operations/AlertmanagerAlertGroups.md) |
| `AlertmanagerQuery` | 4 | [map/operations/AlertmanagerQuery.md](map/operations/AlertmanagerQuery.md) |
| `ApiauthenticationApiToken` | 9 | [map/operations/ApiauthenticationApiToken.md](map/operations/ApiauthenticationApiToken.md) |
| `ApiauthenticationBasicLogin` | 2 | [map/operations/ApiauthenticationBasicLogin.md](map/operations/ApiauthenticationBasicLogin.md) |
| `ApiauthenticationCsrfToken` | 1 | [map/operations/ApiauthenticationCsrfToken.md](map/operations/ApiauthenticationCsrfToken.md) |
| `ApiauthenticationTwoFactor` | 2 | [map/operations/ApiauthenticationTwoFactor.md](map/operations/ApiauthenticationTwoFactor.md) |
| `EmsConfigTemplates` | 8 | [map/operations/EmsConfigTemplates.md](map/operations/EmsConfigTemplates.md) |
| `EmsDeviceModel` | 5 | [map/operations/EmsDeviceModel.md](map/operations/EmsDeviceModel.md) |
| `EmsDeviceSoftware` | 6 | [map/operations/EmsDeviceSoftware.md](map/operations/EmsDeviceSoftware.md) |
| `EmsOrg` | 4 | [map/operations/EmsOrg.md](map/operations/EmsOrg.md) |
| `EmsOrgAdmins` | 18 | [map/operations/EmsOrgAdmins.md](map/operations/EmsOrgAdmins.md) |
| `EmsOrgAlarms` | 4 | [map/operations/EmsOrgAlarms.md](map/operations/EmsOrgAlarms.md) |
| `EmsOrgAuditLogs` | 4 | [map/operations/EmsOrgAuditLogs.md](map/operations/EmsOrgAuditLogs.md) |
| `EmsOrgBackup` | 7 | [map/operations/EmsOrgBackup.md](map/operations/EmsOrgBackup.md) |
| `EmsOrgDatacenterEdges` | 2 | [map/operations/EmsOrgDatacenterEdges.md](map/operations/EmsOrgDatacenterEdges.md) |
| `EmsOrgDeviceApplications` | 2 | [map/operations/EmsOrgDeviceApplications.md](map/operations/EmsOrgDeviceApplications.md) |
| `EmsOrgDeviceProfile` | 4 | [map/operations/EmsOrgDeviceProfile.md](map/operations/EmsOrgDeviceProfile.md) |
| `EmsOrgDynamicTopology` | 1 | [map/operations/EmsOrgDynamicTopology.md](map/operations/EmsOrgDynamicTopology.md) |
| `EmsOrgExportManager` | 12 | [map/operations/EmsOrgExportManager.md](map/operations/EmsOrgExportManager.md) |
| `EmsOrgInventory` | 2 | [map/operations/EmsOrgInventory.md](map/operations/EmsOrgInventory.md) |
| `EmsOrgLicensing` | 4 | [map/operations/EmsOrgLicensing.md](map/operations/EmsOrgLicensing.md) |
| `EmsOrgNetworkWideInventory` | 3 | [map/operations/EmsOrgNetworkWideInventory.md](map/operations/EmsOrgNetworkWideInventory.md) |
| `EmsOrgOcDevices` | 2 | [map/operations/EmsOrgOcDevices.md](map/operations/EmsOrgOcDevices.md) |
| `EmsOrgRadiusConfig` | 5 | [map/operations/EmsOrgRadiusConfig.md](map/operations/EmsOrgRadiusConfig.md) |
| `EmsOrgReplace` | 1 | [map/operations/EmsOrgReplace.md](map/operations/EmsOrgReplace.md) |
| `EmsOrgRestore` | 1 | [map/operations/EmsOrgRestore.md](map/operations/EmsOrgRestore.md) |
| `EmsOrgSetting` | 2 | [map/operations/EmsOrgSetting.md](map/operations/EmsOrgSetting.md) |
| `EmsOrgSiteGroups` | 5 | [map/operations/EmsOrgSiteGroups.md](map/operations/EmsOrgSiteGroups.md) |
| `EmsOrgSites` | 2 | [map/operations/EmsOrgSites.md](map/operations/EmsOrgSites.md) |
| `EmsOrgWebhooks` | 5 | [map/operations/EmsOrgWebhooks.md](map/operations/EmsOrgWebhooks.md) |
| `EmsSitesAlarms` | 4 | [map/operations/EmsSitesAlarms.md](map/operations/EmsSitesAlarms.md) |
| `EmsSitesDevice` | 6 | [map/operations/EmsSitesDevice.md](map/operations/EmsSitesDevice.md) |
| `EmsSitesLicensing` | 3 | [map/operations/EmsSitesLicensing.md](map/operations/EmsSitesLicensing.md) |
| `EmsSitesShell` | 1 | [map/operations/EmsSitesShell.md](map/operations/EmsSitesShell.md) |
| `InfraHealthCheck` | 4 | [map/operations/InfraHealthCheck.md](map/operations/InfraHealthCheck.md) |
| `InfraInternalHealthCheck` | 4 | [map/operations/InfraInternalHealthCheck.md](map/operations/InfraInternalHealthCheck.md) |
| `IntentsEndpointGroup` | 7 | [map/operations/IntentsEndpointGroup.md](map/operations/IntentsEndpointGroup.md) |
| `IntentsOptimizationProfile` | 4 | [map/operations/IntentsOptimizationProfile.md](map/operations/IntentsOptimizationProfile.md) |
| `IntentsPathIntent` | 5 | [map/operations/IntentsPathIntent.md](map/operations/IntentsPathIntent.md) |
| `IntentsTunnelProfile` | 17 | [map/operations/IntentsTunnelProfile.md](map/operations/IntentsTunnelProfile.md) |
| `LlmconnectorConversations` | 5 | [map/operations/LlmconnectorConversations.md](map/operations/LlmconnectorConversations.md) |
| `LlmconnectorJllmConfiguration` | 6 | [map/operations/LlmconnectorJllmConfiguration.md](map/operations/LlmconnectorJllmConfiguration.md) |
| `LlmconnectorModels` | 6 | [map/operations/LlmconnectorModels.md](map/operations/LlmconnectorModels.md) |
| `LlmconnectorTermsOfService` | 2 | [map/operations/LlmconnectorTermsOfService.md](map/operations/LlmconnectorTermsOfService.md) |
| `MultivendoremsDevice` | 7 | [map/operations/MultivendoremsDevice.md](map/operations/MultivendoremsDevice.md) |
| `MultivendoremsDeviceDeprecated` | 7 | [map/operations/MultivendoremsDeviceDeprecated.md](map/operations/MultivendoremsDeviceDeprecated.md) |
| `MultivendoremsGnmi` | 3 | [map/operations/MultivendoremsGnmi.md](map/operations/MultivendoremsGnmi.md) |
| `MultivendoremsGnmideprecated` | 3 | [map/operations/MultivendoremsGnmideprecated.md](map/operations/MultivendoremsGnmideprecated.md) |
| `MultivendoremsGnoiSystem` | 1 | [map/operations/MultivendoremsGnoiSystem.md](map/operations/MultivendoremsGnoiSystem.md) |
| `MultivendoremsGnoiSystemDeprecated` | 1 | [map/operations/MultivendoremsGnoiSystemDeprecated.md](map/operations/MultivendoremsGnoiSystemDeprecated.md) |
| `ObservabilityConfiguration` | 1 | [map/operations/ObservabilityConfiguration.md](map/operations/ObservabilityConfiguration.md) |
| `ObservabilityCustomKpi` | 17 | [map/operations/ObservabilityCustomKpi.md](map/operations/ObservabilityCustomKpi.md) |
| `ObservabilityEvents` | 2 | [map/operations/ObservabilityEvents.md](map/operations/ObservabilityEvents.md) |
| `ObservabilityHealth` | 2 | [map/operations/ObservabilityHealth.md](map/operations/ObservabilityHealth.md) |
| `ObservabilityMetadata` | 1 | [map/operations/ObservabilityMetadata.md](map/operations/ObservabilityMetadata.md) |
| `ObservabilityMetrics` | 1 | [map/operations/ObservabilityMetrics.md](map/operations/ObservabilityMetrics.md) |
| `ObservabilityNotifications` | 2 | [map/operations/ObservabilityNotifications.md](map/operations/ObservabilityNotifications.md) |
| `ObservabilityRecommendations` | 3 | [map/operations/ObservabilityRecommendations.md](map/operations/ObservabilityRecommendations.md) |
| `ObservabilityTsdbQuery` | 2 | [map/operations/ObservabilityTsdbQuery.md](map/operations/ObservabilityTsdbQuery.md) |
| `OnboardingbatchimporterImport` | 4 | [map/operations/OnboardingbatchimporterImport.md](map/operations/OnboardingbatchimporterImport.md) |
| `PathfindersettingsOrgSettings` | 22 | [map/operations/PathfindersettingsOrgSettings.md](map/operations/PathfindersettingsOrgSettings.md) |
| `PathfindersettingsSysSettings` | 22 | [map/operations/PathfindersettingsSysSettings.md](map/operations/PathfindersettingsSysSettings.md) |
| `PlannerDemands` | 10 | [map/operations/PlannerDemands.md](map/operations/PlannerDemands.md) |
| `PlannerFacilities` | 6 | [map/operations/PlannerFacilities.md](map/operations/PlannerFacilities.md) |
| `PlannerInterfaces` | 7 | [map/operations/PlannerInterfaces.md](map/operations/PlannerInterfaces.md) |
| `PlannerLinks` | 8 | [map/operations/PlannerLinks.md](map/operations/PlannerLinks.md) |
| `PlannerNodes` | 9 | [map/operations/PlannerNodes.md](map/operations/PlannerNodes.md) |
| `PlannerPlannerSimulation` | 12 | [map/operations/PlannerPlannerSimulation.md](map/operations/PlannerPlannerSimulation.md) |
| `PlannerPlannerTopology` | 19 | [map/operations/PlannerPlannerTopology.md](map/operations/PlannerPlannerTopology.md) |
| `PlannerPlannerTrafficstats` | 10 | [map/operations/PlannerPlannerTrafficstats.md](map/operations/PlannerPlannerTrafficstats.md) |
| `PlannerTeLsps` | 10 | [map/operations/PlannerTeLsps.md](map/operations/PlannerTeLsps.md) |
| `ReportgeneratorReports` | 1 | [map/operations/ReportgeneratorReports.md](map/operations/ReportgeneratorReports.md) |
| `RoutingobservabilityBgpPeers` | 2 | [map/operations/RoutingobservabilityBgpPeers.md](map/operations/RoutingobservabilityBgpPeers.md) |
| `RoutingobservabilityBgpPeerStats` | 2 | [map/operations/RoutingobservabilityBgpPeerStats.md](map/operations/RoutingobservabilityBgpPeerStats.md) |
| `RoutingobservabilityBgpPrefixes` | 3 | [map/operations/RoutingobservabilityBgpPrefixes.md](map/operations/RoutingobservabilityBgpPrefixes.md) |
| `RoutingobservabilityDevices` | 1 | [map/operations/RoutingobservabilityDevices.md](map/operations/RoutingobservabilityDevices.md) |
| `RoutingobservabilityFilters` | 3 | [map/operations/RoutingobservabilityFilters.md](map/operations/RoutingobservabilityFilters.md) |
| `RoutingobservabilityIgp` | 1 | [map/operations/RoutingobservabilityIgp.md](map/operations/RoutingobservabilityIgp.md) |
| `RoutingobservabilityJri` | 4 | [map/operations/RoutingobservabilityJri.md](map/operations/RoutingobservabilityJri.md) |
| `RoutingobservabilityReact` | 1 | [map/operations/RoutingobservabilityReact.md](map/operations/RoutingobservabilityReact.md) |
| `RoutingobservabilityRouters` | 3 | [map/operations/RoutingobservabilityRouters.md](map/operations/RoutingobservabilityRouters.md) |
| `ServiceorchestrationCandidate` | 14 | [map/operations/ServiceorchestrationCandidate.md](map/operations/ServiceorchestrationCandidate.md) |
| `ServiceorchestrationCatalog` | 8 | [map/operations/ServiceorchestrationCatalog.md](map/operations/ServiceorchestrationCatalog.md) |
| `ServiceorchestrationDevices` | 3 | [map/operations/ServiceorchestrationDevices.md](map/operations/ServiceorchestrationDevices.md) |
| `ServiceorchestrationInstaller` | 15 | [map/operations/ServiceorchestrationInstaller.md](map/operations/ServiceorchestrationInstaller.md) |
| `ServiceorchestrationOrder` | 19 | [map/operations/ServiceorchestrationOrder.md](map/operations/ServiceorchestrationOrder.md) |
| `ServiceorchestrationPlacement` | 6 | [map/operations/ServiceorchestrationPlacement.md](map/operations/ServiceorchestrationPlacement.md) |
| `ServiceorchestrationWorkflow` | 2 | [map/operations/ServiceorchestrationWorkflow.md](map/operations/ServiceorchestrationWorkflow.md) |
| `SnmptrapsExternalEndpoint` | 5 | [map/operations/SnmptrapsExternalEndpoint.md](map/operations/SnmptrapsExternalEndpoint.md) |
| `SnmptrapsExternalEndpointDeprecated` | 5 | [map/operations/SnmptrapsExternalEndpointDeprecated.md](map/operations/SnmptrapsExternalEndpointDeprecated.md) |
| `SnmptrapsManagerConfig` | 5 | [map/operations/SnmptrapsManagerConfig.md](map/operations/SnmptrapsManagerConfig.md) |
| `SnmptrapsManagerConfigDeprecated` | 5 | [map/operations/SnmptrapsManagerConfigDeprecated.md](map/operations/SnmptrapsManagerConfigDeprecated.md) |
| `StatisticsStatistics` | 4 | [map/operations/StatisticsStatistics.md](map/operations/StatisticsStatistics.md) |
| `TagsObject` | 4 | [map/operations/TagsObject.md](map/operations/TagsObject.md) |
| `TagsObjectDeprecated` | 4 | [map/operations/TagsObjectDeprecated.md](map/operations/TagsObjectDeprecated.md) |
| `TagsTag` | 5 | [map/operations/TagsTag.md](map/operations/TagsTag.md) |
| `TagsTagDeprecated` | 5 | [map/operations/TagsTagDeprecated.md](map/operations/TagsTagDeprecated.md) |
| `TopologyFacilities` | 6 | [map/operations/TopologyFacilities.md](map/operations/TopologyFacilities.md) |
| `TopologyfilterTopologyFilter` | 6 | [map/operations/TopologyfilterTopologyFilter.md](map/operations/TopologyfilterTopologyFilter.md) |
| `TopologyInterfaces` | 4 | [map/operations/TopologyInterfaces.md](map/operations/TopologyInterfaces.md) |
| `TopologyLinks` | 16 | [map/operations/TopologyLinks.md](map/operations/TopologyLinks.md) |
| `TopologyNodes` | 13 | [map/operations/TopologyNodes.md](map/operations/TopologyNodes.md) |
| `TopologyPathComputation` | 1 | [map/operations/TopologyPathComputation.md](map/operations/TopologyPathComputation.md) |
| `TopologypeersettingsDynamicTopologyAcquisitionConfiguration` | 2 | [map/operations/TopologypeersettingsDynamicTopologyAcquisitionConfiguration.md](map/operations/TopologypeersettingsDynamicTopologyAcquisitionConfiguration.md) |
| `TopologyTeContainers` | 10 | [map/operations/TopologyTeContainers.md](map/operations/TopologyTeContainers.md) |
| `TopologyTeLsps` | 13 | [map/operations/TopologyTeLsps.md](map/operations/TopologyTeLsps.md) |
| `TopologyTopologyApi` | 5 | [map/operations/TopologyTopologyApi.md](map/operations/TopologyTopologyApi.md) |
| `TrustChecklist` | 7 | [map/operations/TrustChecklist.md](map/operations/TrustChecklist.md) |
| `TrustChecklistTemplate` | 4 | [map/operations/TrustChecklistTemplate.md](map/operations/TrustChecklistTemplate.md) |
| `TrustComplianceDocument` | 5 | [map/operations/TrustComplianceDocument.md](map/operations/TrustComplianceDocument.md) |
| `TrustComplianceScan` | 6 | [map/operations/TrustComplianceScan.md](map/operations/TrustComplianceScan.md) |
| `TrustConfiguration` | 3 | [map/operations/TrustConfiguration.md](map/operations/TrustConfiguration.md) |
| `TrustDevice` | 4 | [map/operations/TrustDevice.md](map/operations/TrustDevice.md) |
| `TrustIntegritySku` | 9 | [map/operations/TrustIntegritySku.md](map/operations/TrustIntegritySku.md) |
| `TrustIntegritySoftwareProduct` | 5 | [map/operations/TrustIntegritySoftwareProduct.md](map/operations/TrustIntegritySoftwareProduct.md) |
| `TrustIntegrityStatistics` | 3 | [map/operations/TrustIntegrityStatistics.md](map/operations/TrustIntegrityStatistics.md) |
| `TrustInventory` | 7 | [map/operations/TrustInventory.md](map/operations/TrustInventory.md) |
| `TrustSchedule` | 1 | [map/operations/TrustSchedule.md](map/operations/TrustSchedule.md) |
| `TrustScoringFactor` | 4 | [map/operations/TrustScoringFactor.md](map/operations/TrustScoringFactor.md) |
| `TrustScoringPlan` | 4 | [map/operations/TrustScoringPlan.md](map/operations/TrustScoringPlan.md) |
| `TrustScoringScore` | 4 | [map/operations/TrustScoringScore.md](map/operations/TrustScoringScore.md) |
| `TrustScoringScoreAverage` | 1 | [map/operations/TrustScoringScoreAverage.md](map/operations/TrustScoringScoreAverage.md) |
| `TrustScoringValueReport` | 4 | [map/operations/TrustScoringValueReport.md](map/operations/TrustScoringValueReport.md) |
| `TrustSnapshot` | 4 | [map/operations/TrustSnapshot.md](map/operations/TrustSnapshot.md) |
| `TrustTenant` | 5 | [map/operations/TrustTenant.md](map/operations/TrustTenant.md) |
| `TrustVersion` | 1 | [map/operations/TrustVersion.md](map/operations/TrustVersion.md) |
| `TrustVulnerabilityAdvisory` | 7 | [map/operations/TrustVulnerabilityAdvisory.md](map/operations/TrustVulnerabilityAdvisory.md) |
| `TrustVulnerabilityDevice` | 2 | [map/operations/TrustVulnerabilityDevice.md](map/operations/TrustVulnerabilityDevice.md) |
| `TrustVulnerabilityPbn` | 7 | [map/operations/TrustVulnerabilityPbn.md](map/operations/TrustVulnerabilityPbn.md) |
| `TrustVulnerabilityStatistics` | 3 | [map/operations/TrustVulnerabilityStatistics.md](map/operations/TrustVulnerabilityStatistics.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 1374 | [`AcknowledgementRequest` … `ConfigurationDataSource`](map/models/records-1-Ac-Co.md) · [`ConfigureConfig` … `GnmiScalarArray`](map/models/records-2-Co-Gn.md) · [`GnmiSetResponse` … `JuniperEndpointGroupEndpointgroupsEndpointgroupTypeStaticStaticList`](map/models/records-3-Gn-Ju.md) · [`JuniperEndpointGroupEndpointgroupsEndpointgroupTypeStaticStaticListWrapper` … `LspCreateLspprimaryRsvp1`](map/models/records-4-Ju-Ls.md) · [`LspCreateLspprimarySr` … `LspLspPlannedPathPropertiesSecondaryNetconf1`](map/models/records-5-Ls-Ls.md) · [`LspLspPlannedPathPropertiesSwitchCommandPrimary` … `OptionalProperties`](map/models/records-6-Ls-Op.md) · [`Options` … `ResponseToListAlertsRequest`](map/models/records-7-Op-Re.md) · [`Result` … `TestSchedule`](map/models/records-8-Re-Te.md) · [`TestStep` … `WorkflowWorkflowQueueEntry`](map/models/records-9-Te-Wo.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 120 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 207 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `RoutingDirector` |
| Operation controllers (`Api/`) | `RoutingDirector.Api` |
| Records (`Models/`) | `RoutingDirector.Models` |
| Enums (`Models/Enums/`) | `RoutingDirector.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `RoutingDirector.Models.AnyOf` |
| Error classes (`Errors/`) | `RoutingDirector.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `RoutingDirectorClientOptions` (source: `RoutingDirectorClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `BasicAuth` | `BasicAuthCredentials?` | — |
| `ApikeyHeader` | `string?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
