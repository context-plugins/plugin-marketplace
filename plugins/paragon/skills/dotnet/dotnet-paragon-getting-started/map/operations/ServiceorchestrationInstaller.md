# ServiceorchestrationInstaller — operations

Accessor: `client.ServiceorchestrationInstaller` · Source: `Api/ServiceorchestrationInstaller.cs` · 15 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### OrderServiceGetAllInstances1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/instances` (Default)
- **Notes**: Get all Service Instances for an Organization irrespective of Customer. This includes the meta information and status from the latest SO per SI . Since the number of SIs per organization can be large, the orchestration engine allows you to divide the full SI list over a number of requests. By using the pagination header information, you can specify the index of the first object ( current-offset ) and number of objects( per-page ) to return per request. Additionally, the filter query parameter can be used to further limit the amount of returned information. See filter in Get Service Instances for more details.
- **Signature**: `OrderServiceGetAllInstances1(string orgId, string? filter, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetAllInstances1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetAllOrders1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/orders` (Default)
- **Notes**: Get all service orders for an Organization (including history) irrespective of customer. If multiple orders were executed against an SI , the list will contain multiple entries for the same SI - one per SO. Since the number of SOs in the Organization can be large, the orchestration engine allows you to divide the full SO list over a number of requests. By using the pagination header information, you can specify the index of the first object ( current-offset ) and number of objects( per-page ) to return per request. Additionally, the filter query parameter can be used to further limit the amount of returned information. See filter in Get Service Instances for more details. For example, the list in the Sample Response is using the following filter `.[]|{"instance_name": ."instance_id","design_id":."design_id", "status":."fh_config", "upload_time":."upload_time", operation: ."operation"}`
- **Signature**: `OrderServiceGetAllOrders1(string orgId, string? filter, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetAllOrders1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCandidateHistoryEntries1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/candidates/{objId}/history` (Default)
- **Notes**: Get draft history for the specified instance
- **Signature**: `OrderServiceGetCandidateHistoryEntries1(string orgId, string objId, string? filter, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetCandidateHistoryEntries1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCandidateHistory1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/candidates/{objId}/history/{historyId}` (Default)
- **Notes**: Get draft history for the specified history entry
- **Signature**: `OrderServiceGetCandidateHistory1(string orgId, string objId, string historyId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetCandidateHistory1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCandidate1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/candidates/{objId}` (Default)
- **Notes**: Get Candidate Instance
- **Signature**: `OrderServiceGetCandidate1(string orgId, string objId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetCandidate1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCandidates1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/customers/{custId}/candidates` (Default)
- **Notes**: Get Candidates for a customer
- **Signature**: `OrderServiceGetCandidates1(string orgId, string custId, string? filter, bool? onlyNewCandidates, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `only_new_candidates` ← `onlyNewCandidates`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetCandidates1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetConfigurations1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/customers/{custId}/instances/{instId}/configurations` (Default)
- **Notes**: Return all configurations that have been applied in the network as a result of provisioning this SI . This includes all devices , active assurance and insights configurations.
- **Signature**: `OrderServiceGetConfigurations1(string orgId, string custId, string instId, string? filter, bool? dryRun, bool? diff, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `dryRun` — nullable, no default → **must pass explicitly**
  - `diff` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `dryRun` ← `dryRun`, `diff` ← `diff`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetConfigurations1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCustomer1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/customers/{custId}` (Default)
- **Notes**: Get a Customer of an Organization given the customer name or UUID.
- **Signature**: `OrderServiceGetCustomer1(string orgId, string custId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Customer`
- **Error**: `SdkException<OrderServiceGetCustomer1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCustomers1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/customers` (Default)
- **Notes**: Retrieves a list of Customers associated with an Organization .
- **Signature**: `OrderServiceGetCustomers1(string orgId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<CustomerList>`
- **Error**: `SdkException<OrderServiceGetCustomers1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetInstance1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/customers/{custId}/instances/{instId}` (Default)
- **Notes**: Get a Specific Service Instance ( SI ) of a Customer including the meta information from the latest uploaded SO . Use filter to control the list of attributes returned (if desired). If no filter is defined, the full SI/SO is returned. The provided Request Sample shows the result of the example filter.
- **Signature**: `OrderServiceGetInstance1(string orgId, string custId, string instId, string? filter, string? namedFilter, string? args, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `namedFilter` — nullable, no default → **must pass explicitly**
  - `args` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `namedFilter` ← `namedFilter`, `args` ← `args`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetInstance1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetInstances1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/customers/{custId}/instances` (Default)
- **Notes**: Get all Service Instances ( SIs ) associated with a Customer of an Organization including the meta information from the latest SO per SI . Since the number of SIs per customer can be large, the orchestration engine allows you to divide the full SI list over a number of requests. By using the pagination header information, you can specify the index of the first object ( current-offset ) and number of objects ( per-page ) to return per request. The results can also be sorted based on the ( sort-attribute header) in ascending or descending order ( sort-desc header). Additionally, the filter query parameter can be used to further limit the amount of returned information. See filter for more details.
- **Signature**: `OrderServiceGetInstances1(string orgId, string custId, string? filter, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetInstances1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetOrder1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/customers/{custId}/instances/{instId}/orders/{ordId}` (Default)
- **Notes**: Get a specific history service order for a Service Instance given the order_id.
- **Signature**: `OrderServiceGetOrder1(string orgId, string custId, string instId, string ordId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetOrder1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetOrders1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/customers/{custId}/instances/{instId}/orders` (Default)
- **Notes**: Get the Service Order history of a Service Instance. The returned list does NOT include the current service order.
- **Signature**: `OrderServiceGetOrders1(string orgId, string custId, string instId, string? filter, string? namedFilter, string? args, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `namedFilter` ← `namedFilter`, `args` ← `args`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetOrders1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetOrgCandidates1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/candidates` (Default)
- **Notes**: Get all candidates across all customers for the given organization.
- **Signature**: `OrderServiceGetOrgCandidates1(string orgId, string? filter, bool? onlyNewCandidates, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `only_new_candidates` ← `onlyNewCandidates`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetOrgCandidates1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceValidateCandidate1
- **HTTP**: `GET /service-orchestration/api/v1/installer/orgs/{org_id}/order/candidates/{objId}/validation-state` (Default)
- **Notes**: Validate Candidate Instance.
- **Signature**: `OrderServiceValidateCandidate1(string orgId, string objId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ValidateCandidateResponseHasABooleanWhichIndicatesIfThereAreErrorsAndDetailsOfTheErro`
- **Error**: `SdkException<OrderServiceValidateCandidate1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
