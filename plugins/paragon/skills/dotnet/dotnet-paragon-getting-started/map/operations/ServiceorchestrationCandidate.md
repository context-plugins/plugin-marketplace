# ServiceorchestrationCandidate — operations

Accessor: `client.ServiceorchestrationCandidate` · Source: `Api/ServiceorchestrationCandidate.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### OrderServiceCommitCandidate
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/order/candidates/{objId}/commit` (Default)
- **Notes**: Commit Candidate Instance.
- **Signature**: `OrderServiceCommitCandidate(string orgId, string objId, bool? executeWorkflow, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `executeWorkflow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `execute_workflow` ← `executeWorkflow`
- **Returns**: `object`
- **Error**: `SdkException<OrderServiceCommitCandidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceCreateCandidateFromInstance
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/order/instances/{objId}/candidates` (Default)
- **Notes**: Create Candidate for a service instance given its UUID
- **Signature**: `OrderServiceCreateCandidateFromInstance(string orgId, string objId, string? description, string? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `description` — nullable, no default → **must pass explicitly**
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `description` ← `description`, `version` ← `version`
- **Returns**: `ObjectIdIdentifiesAnObjectWithinAnOrgUsingTheObjectUuid`
- **Error**: `SdkException<OrderServiceCreateCandidateFromInstanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceCreateNewCandidate
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/order/candidates` (Default)
- **Notes**: Create New Candidate by supplying new candidate information
- **Signature**: `OrderServiceCreateNewCandidate(string orgId, bool? validation, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validation` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validation` ← `validation`
- **Returns**: `ObjectIdIdentifiesAnObjectWithinAnOrgUsingTheObjectUuid`
- **Error**: `SdkException<OrderServiceCreateNewCandidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceDecommissionCandidate
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/order/candidates/{objId}/decommission` (Default)
- **Notes**: Delete Candidate Execution.
- **Signature**: `OrderServiceDecommissionCandidate(string orgId, string objId, bool? executeWorkflow, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `executeWorkflow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `execute_workflow` ← `executeWorkflow`
- **Returns**: `object`
- **Error**: `SdkException<OrderServiceDecommissionCandidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceDeleteCandidate
- **HTTP**: `DELETE /service-orchestration/api/v1/orgs/{org_id}/order/candidates/{objId}` (Default)
- **Notes**: Delete Candidate Instance.
- **Signature**: `OrderServiceDeleteCandidate(string orgId, string objId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<OrderServiceDeleteCandidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCandidate
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/candidates/{objId}` (Default)
- **Notes**: Get Candidate Instance
- **Signature**: `OrderServiceGetCandidate(string orgId, string objId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetCandidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCandidateHistory
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/candidates/{objId}/history/{historyId}` (Default)
- **Notes**: Get draft history for the specified history entry
- **Signature**: `OrderServiceGetCandidateHistory(string orgId, string objId, string historyId, string? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetCandidateHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCandidateHistoryEntries
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/candidates/{objId}/history` (Default)
- **Notes**: Get draft history for the specified instance
- **Signature**: `OrderServiceGetCandidateHistoryEntries(string orgId, string objId, string? filter, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetCandidateHistoryEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetCandidates
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/customers/{custId}/candidates` (Default)
- **Notes**: Get Candidates for a customer
- **Signature**: `OrderServiceGetCandidates(string orgId, string custId, string? filter, bool? onlyNewCandidates, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `only_new_candidates` ← `onlyNewCandidates`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetCandidatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceGetOrgCandidates
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/candidates` (Default)
- **Notes**: Get all candidates across all customers for the given organization.
- **Signature**: `OrderServiceGetOrgCandidates(string orgId, string? filter, bool? onlyNewCandidates, string? perPage, string? currentOffset, string? sortAttribute, bool? sortDesc, string? dbFilterParameters, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`filter` … `dbFilterParameters`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`, `only_new_candidates` ← `onlyNewCandidates`
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServiceGetOrgCandidatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServicePatchCandidate
- **HTTP**: `PATCH /service-orchestration/api/v1/orgs/{org_id}/order/candidates/{objId}` (Default)
- **Notes**: Patch Candidate Instance.
- **Signature**: `OrderServicePatchCandidate(string orgId, string objId, bool? validation, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validation` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validation` ← `validation`
- **Returns**: `object`
- **Error**: `SdkException<OrderServicePatchCandidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServicePlace
- **HTTP**: `POST /service-orchestration/api/v1/orgs/{org_id}/order/candidates/{objId}/place` (Default)
- **Notes**: Run placement keep (resources marked as Adding, no resource released not committed) after validation and lock of the Service Instance. This API call should be used to tentatively allocate resources. Multiple calls MAY allocate different resources, therefore may block resource allocation for other services. If the candidate is deleted, then resource allocations are released.
- **Signature**: `OrderServicePlace(string orgId, string objId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<object>`
- **Error**: `SdkException<OrderServicePlaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceUpdateCandidate
- **HTTP**: `PUT /service-orchestration/api/v1/orgs/{org_id}/order/candidates/{objId}` (Default)
- **Notes**: Update Candidate Instance.
- **Signature**: `OrderServiceUpdateCandidate(string orgId, string objId, bool? validation, object body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `validation` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `validation` ← `validation`
- **Returns**: `object`
- **Error**: `SdkException<OrderServiceUpdateCandidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderServiceValidateCandidate
- **HTTP**: `GET /service-orchestration/api/v1/orgs/{org_id}/order/candidates/{objId}/validation-state` (Default)
- **Notes**: Validate Candidate Instance.
- **Signature**: `OrderServiceValidateCandidate(string orgId, string objId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ValidateCandidateResponseHasABooleanWhichIndicatesIfThereAreErrorsAndDetailsOfTheErro`
- **Error**: `SdkException<OrderServiceValidateCandidateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGooglerpcStatus(out GooglerpcStatus)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
