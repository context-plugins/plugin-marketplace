# ObservabilityHealth — operations

Accessor: `client.ObservabilityHealth` · Source: `Api/ObservabilityHealth.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetHealthStatusForTheGivenDeviceTopicRuleInstance
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/devices/{device_id}/topics/{topic_name}/rules/{rule_name}/instances/{instance_id}/health` (Default)
- **Notes**: Get health status for the given `device/topic/rule/instance`
- **Signature**: `GetHealthStatusForTheGivenDeviceTopicRuleInstance(Guid orgId, Guid deviceId, string topicName, string ruleName, string instanceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsApiV1OrgsDevicesTopicsTopicNameRulesRuleNameInstancesInstanceIdHealthResponse`
- **Error**: `SdkException<GetHealthStatusForTheGivenDeviceTopicRuleInstanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReturnsADeviceSHealthDetails
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/devices/{device_id}/health` (Default)
- **Notes**: Return health status based on the type (hardware, interface or routing)
- **Signature**: `ReturnsADeviceSHealthDetails(Guid deviceId, string orgId, string type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`
- **Returns**: `InsightsApiV1OrgsDevicesHealthResponse`
- **Error**: `SdkException<ReturnsADeviceSHealthDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetApiV1OrgsDataPublishStreamingConfigs403Error1(out ApiV1OrgsDataPublishStreamingConfigs403Error1)` [401, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
