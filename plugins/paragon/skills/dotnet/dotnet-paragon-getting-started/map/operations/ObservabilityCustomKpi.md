# ObservabilityCustomKpi — operations

Accessor: `client.ObservabilityCustomKpi` · Source: `Api/ObservabilityCustomKpi.cs` · 17 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteHelperFile
- **HTTP**: `DELETE /insights/api/v1/orgs/{org_id}/files/helper-files/{file_name}` (Default)
- **Notes**: Delete the given helper file
- **Signature**: `DeleteHelperFile(Guid orgId, string fileName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DetailStatus`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetHelperFile
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/files/helper-files/{file_name}` (Default)
- **Notes**: Get the content of the given helper file
- **Signature**: `GetHelperFile(Guid orgId, string fileName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrievesAllTheHelperFiles
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/files/helper-files` (Default)
- **Notes**: Retrieves all the helper files created by the user.
- **Signature**: `RetrievesAllTheHelperFiles(Guid orgId, string? sort, string? filters, int? pageNumber = 1, int? limit = 0, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `sort` — nullable, no default → **must pass explicitly**
  - `filters` — nullable, no default → **must pass explicitly**
  - defaults: `pageNumber` = 1, `limit` = 0, `requestOptions` = null
- **Query params (wire ← C#)**: `sort` ← `sort`, `filters` ← `filters`, `pageNumber` ← `pageNumber`, `limit` ← `limit`
- **Returns**: `HelperFiles`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UploadTheGivenHelperFile
- **HTTP**: `POST /insights/api/v1/orgs/{org_id}/files/helper-files/{file_name}` (Default)
- **Notes**: Upload the given helper file
- **Signature**: `UploadTheGivenHelperFile(Guid orgId, string fileName, BinaryContent? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `DetailStatus`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateInstanceForOrgTopicRuleDevice
- **HTTP**: `POST /insights/api/v1/orgs/{org_id}/topics/{topic_name}/rules/{rule_name}/instances/{instance_id}/device/{device_id}` (Default)
- **Notes**: Create or update a device instance with the provided details. If the device instance already exists, the existing configuration will be updated with the new content. If it does not exist, a new device instance will be created under the specified organization, topic, and rule.
- **Signature**: `CreateInstanceForOrgTopicRuleDevice(Guid orgId, string topicName, string ruleName, string instanceId, string deviceId, InsightsApiV1OrgsTopicsRulesRuleNameInstancesInstanceIdDeviceDeviceIdRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsApiV1OrgsTopicsRulesRuleNameInstancesInstanceIdDeviceDeviceIdResponse`
- **Error**: `SdkException<CreateInstanceForOrgTopicRuleDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInstanceForOrgTopicRuleDevice
- **HTTP**: `DELETE /insights/api/v1/orgs/{org_id}/topics/{topic_name}/rules/{rule_name}/instances/{instance_id}/device/{device_id}` (Default)
- **Notes**: Remove a specific device instance based on the provided organization, topic, rule, and instance identifiers. This operation deletes the associated configurations and ensures that the device is no longer instantiated under the given conditions.
- **Signature**: `DeleteInstanceForOrgTopicRuleDevice(Guid orgId, string topicName, string ruleName, string instanceId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsApiV1OrgsTopicsRulesRuleNameInstancesInstanceIdDeviceDeviceIdResponse`
- **Error**: `SdkException<DeleteInstanceForOrgTopicRuleDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteRuleInstantiationsByOrgInstanceId
- **HTTP**: `DELETE /insights/api/v1/orgs/{org_id}/instances/{instance_id}` (Default)
- **Notes**: Delete all the rules instantiated with the instance id by specific organization
- **Signature**: `DeleteRuleInstantiationsByOrgInstanceId(Guid orgId, string instanceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsApiV1OrgsInstancesResponse2`
- **Error**: `SdkException<DeleteRuleInstantiationsByOrgInstanceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTopicRuleRuleById
- **HTTP**: `DELETE /insights/api/v1/orgs/{org_id}/topics/{topic_name}/rules/{rule_name}` (Default)
- **Notes**: Delete a rule by `rule-name`. Delete will fail if the rule is instantiated by any devices.
- **Signature**: `DeleteTopicRuleRuleById(Guid orgId, string topicName, string ruleName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsApiV1OrgsTopicsRulesRuleNameResponse2`
- **Error**: `SdkException<DeleteTopicRuleRuleByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveAllInstancesSummaryByOrg
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/instances/summary` (Default)
- **Notes**: Get all the instances summary by organization
- **Signature**: `RetrieveAllInstancesSummaryByOrg(Guid orgId, int? pageNumber, int? limit, string? sort, string? filters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageNumber` … `filters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `limit` ← `limit`, `sort` ← `sort`, `filters` ← `filters`
- **Returns**: `InsightsApiV1OrgsInstancesSummaryResponse`
- **Error**: `SdkException<RetrieveAllInstancesSummaryByOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveCustomTopicRuleInstancesSummaryByOrg
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/rules/summary` (Default)
- **Notes**: Get all the custom rule instance summary by organization.
- **Signature**: `RetrieveCustomTopicRuleInstancesSummaryByOrg(Guid orgId, int? pageNumber, int? limit, string? sort, string? filters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageNumber` … `filters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `limit` ← `limit`, `sort` ← `sort`, `filters` ← `filters`
- **Returns**: `InsightsApiV1OrgsRulesSummaryResponse`
- **Error**: `SdkException<RetrieveCustomTopicRuleInstancesSummaryByOrgError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveInstanceForOrgTopicRuleDevice
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/topics/{topic_name}/rules/{rule_name}/instances/{instance_id}/device/{device_id}` (Default)
- **Notes**: Retrieve detailed information about a specific device instance. This operation fetches the configuration and other related details of the device based on the provided organization, topic, rule, and instance identifiers.
- **Signature**: `RetrieveInstanceForOrgTopicRuleDevice(Guid orgId, string topicName, string ruleName, string instanceId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsApiV1OrgsTopicsRulesRuleNameInstancesInstanceIdDeviceDeviceIdResponse4`
- **Error**: `SdkException<RetrieveInstanceForOrgTopicRuleDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveOrgTopicRules
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/topics/{topic_name}/rules` (Default)
- **Notes**: Get all the rules names which fall under the topic passed. if topic is default rule names for topic will be fetched from default topics else from custom topics.
- **Signature**: `RetrieveOrgTopicRules(Guid orgId, string topicName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<RetrieveOrgTopicRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveOrgTopicTopics
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/topics` (Default)
- **Notes**: Get the configuration details of a topic by the `topic-name`.
- **Signature**: `RetrieveOrgTopicTopics(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<RetrieveOrgTopicTopicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveRuleInstantiationsByOrgInstanceId
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/instances/{instance_id}` (Default)
- **Notes**: Get all the rules instantiated with the instance id by specific organization
- **Signature**: `RetrieveRuleInstantiationsByOrgInstanceId(Guid orgId, string instanceId, bool? detail, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `detail` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `detail` ← `detail`
- **Returns**: `InsightsApiV1OrgsInstancesResponse`
- **Error**: `SdkException<RetrieveRuleInstantiationsByOrgInstanceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveTopicRuleRuleById
- **HTTP**: `GET /insights/api/v1/orgs/{org_id}/topics/{topic_name}/rules/{rule_name}` (Default)
- **Notes**: Get the configuration details of a rule by `rule-name`.
- **Signature**: `RetrieveTopicRuleRuleById(Guid orgId, string topicName, string ruleName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsApiV1OrgsTopicsRulesRuleNameResponse`
- **Error**: `SdkException<RetrieveTopicRuleRuleByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInstanceForOrgTopicRuleDevice
- **HTTP**: `PUT /insights/api/v1/orgs/{org_id}/topics/{topic_name}/rules/{rule_name}/instances/{instance_id}/device/{device_id}` (Default)
- **Notes**: Update or create a device instance associated with the specified organization, topic, and rule. If the device already exists, its configuration will be updated with the provided content. If the device does not exist, a new instance will be created with the provided details.
- **Signature**: `UpdateInstanceForOrgTopicRuleDevice(Guid orgId, string topicName, string ruleName, string instanceId, string deviceId, InsightsApiV1OrgsTopicsRulesRuleNameInstancesInstanceIdDeviceDeviceIdRequest1 body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsApiV1OrgsTopicsRulesRuleNameInstancesInstanceIdDeviceDeviceIdResponse`
- **Error**: `SdkException<UpdateInstanceForOrgTopicRuleDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadAndAddCustomRule
- **HTTP**: `POST /insights/api/v1/orgs/{org_id}/topics/{topic_name}/upload-rule` (Default)
- **Notes**: Upload the custom rule-file.
- **Signature**: `UploadAndAddCustomRule(Guid orgId, string topicName, BinaryContent? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InsightsApiV1OrgsTopicsUploadRuleResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
