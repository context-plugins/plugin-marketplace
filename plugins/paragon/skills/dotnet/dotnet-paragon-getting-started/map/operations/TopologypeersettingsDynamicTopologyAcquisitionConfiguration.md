# TopologypeersettingsDynamicTopologyAcquisitionConfiguration — operations

Accessor: `client.TopologypeersettingsDynamicTopologyAcquisitionConfiguration` · Source: `Api/TopologypeersettingsDynamicTopologyAcquisitionConfiguration.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DynamicTopologyConfigurationServiceGet
- **HTTP**: `GET /topology/api/v1/orgs/{org_id}/{topology_id}/dynamic-config` (Default)
- **Notes**: Returns the dynamic topology configuration for the provided organization.
- **Signature**: `DynamicTopologyConfigurationServiceGet(string orgId, int topologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DynamicTopologyConfigurationForNowOnlyBgp`
- **Error**: `SdkException<DynamicTopologyConfigurationServiceGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DynamicTopologyConfigurationServiceUpdate
- **HTTP**: `PUT /topology/api/v1/orgs/{org_id}/{topology_id}/dynamic-config` (Default)
- **Notes**: Updates the dynamic topology configuration for the provided organization. The payload is the new configuration, for example {"bgp":{"peerAddress":["10.10.10.1"],"as":65000,"peers":[{"address":["10.10.10.2"],"as":65001}]}}. On success nothing is returned.
- **Signature**: `DynamicTopologyConfigurationServiceUpdate(string orgId, string topologyId, DynamicTopologyConfigurationForNowOnlyBgp body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<DynamicTopologyConfigurationServiceUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
