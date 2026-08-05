# ServiceorchestrationDevices — operations

Accessor: `client.ServiceorchestrationDevices` · Source: `Api/ServiceorchestrationDevices.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeviceInfoServiceGetConfigurations
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/devices/{devId}/configurations` (Default)
- **Notes**: Return the configurations for that device This includes all router-configure , and active assurance per device configurations. The non-filtered output is a list of object containing the attributes type, key, key_type, valye and value_content_type The type is one of device, last_paa_applied, last_paa_test and represent the configured application. key is the device uuid (follows the order GetConfigurations), value and value_content_type are the data configured.
- **Signature**: `DeviceInfoServiceGetConfigurations(string orgId, string devId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeviceInfoServiceGetConfigurationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeviceInfoServiceGetDevices
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/devices` (Default)
- **Notes**: Retrieves a list of Devices configured by Foghornassociated with an Organization .
- **Signature**: `DeviceInfoServiceGetDevices(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DevicesInfoIsTheInformationForAGivenDevice>`
- **Error**: `SdkException<DeviceInfoServiceGetDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeviceInfoServiceGetInstances
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/devices/{devId}/instances` (Default)
- **Notes**: Get all Service Instances ( SIs ) associated with a Device of an Organization including the meta information from the latest SO per SI . Since the number of SIs per customer can be large, the orchestration engine allows you to divide the full SI list over a number of requests. By using the pagination header information, you can specify the index of the first object ( current-offset ) and number of objects ( per-page ) to return per request. The results can also be sorted based on the ( sort-attribute header) in ascending or descending order ( sort-desc header). Additionally, the filter query parameter can be used to further limit the amount of returned information. See filter for more details.
- **Signature**: `DeviceInfoServiceGetInstances(string orgId, string devId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeviceInfoServiceGetInstancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
