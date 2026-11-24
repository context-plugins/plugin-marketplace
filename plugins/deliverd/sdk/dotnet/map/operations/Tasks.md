<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.Tasks` · Source: `src/Deliverd/Api/Tasks.cs` · 24 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Tasks

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Tasks(GetApiV1TasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`, `status` ← `Status`, `externalId` ← `ExternalId`, `q` ← `Q`
- **Returns**: `ApiV1TasksResponse2`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1TasksRequest` | `src/Deliverd/Requests/Tasks/GetApiV1TasksRequest.cs` |
| `Status2DeliverdDevTasksApi` | `src/Deliverd/Models/Enums/Status2DeliverdDevTasksApi.cs` |
| `ApiV1TasksResponse2` | `src/Deliverd/Models/ApiV1TasksResponse2.cs` |

### GetApiV1TasksById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1TasksById(GetApiV1TasksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TasksResponse`
- **Error**: `ApiException<GetApiV1TasksByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1TasksByIdRequest` | `src/Deliverd/Requests/Tasks/GetApiV1TasksByIdRequest.cs` |
| `ApiV1TasksResponse` | `src/Deliverd/Models/ApiV1TasksResponse.cs` |
| `GetApiV1TasksByIdError` | `src/Deliverd/Errors/GetApiV1TasksByIdError.cs` |

### GetApiV1TasksByIdContext

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1TasksByIdContext(GetApiV1TasksByIdContextRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1TasksByIdContextRequest` | `src/Deliverd/Requests/Tasks/GetApiV1TasksByIdContextRequest.cs` |

### GetApiV1TasksByIdContextGiven

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1TasksByIdContextGiven(GetApiV1TasksByIdContextGivenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1TasksByIdContextGivenRequest` | `src/Deliverd/Requests/Tasks/GetApiV1TasksByIdContextGivenRequest.cs` |

### GetApiV1TasksByIdGovernance

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1TasksByIdGovernance(GetApiV1TasksByIdGovernanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<GetApiV1TasksByIdGovernanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1TasksByIdGovernanceRequest` | `src/Deliverd/Requests/Tasks/GetApiV1TasksByIdGovernanceRequest.cs` |
| `GetApiV1TasksByIdGovernanceError` | `src/Deliverd/Errors/GetApiV1TasksByIdGovernanceError.cs` |

### GetApiV1TasksByIdGovernanceGate

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1TasksByIdGovernanceGate(GetApiV1TasksByIdGovernanceGateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `action` ← `Action`
- **Returns**: `ApiV1TasksGovernanceGateResponse`
- **Error**: `ApiException<GetApiV1TasksByIdGovernanceGateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1TasksByIdGovernanceGateRequest` | `src/Deliverd/Requests/Tasks/GetApiV1TasksByIdGovernanceGateRequest.cs` |
| `ActionDeliverdDevGovernanceApi` | `src/Deliverd/Models/Enums/ActionDeliverdDevGovernanceApi.cs` |
| `ApiV1TasksGovernanceGateResponse` | `src/Deliverd/Models/ApiV1TasksGovernanceGateResponse.cs` |
| `GetApiV1TasksByIdGovernanceGateError` | `src/Deliverd/Errors/GetApiV1TasksByIdGovernanceGateError.cs` |

### GetApiV1TasksByIdGovernancePack

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1TasksByIdGovernancePack(GetApiV1TasksByIdGovernancePackRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1TasksByIdGovernancePackRequest` | `src/Deliverd/Requests/Tasks/GetApiV1TasksByIdGovernancePackRequest.cs` |

### GetApiV1TasksByIdGraph

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1TasksByIdGraph(GetApiV1TasksByIdGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TasksGraphResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1TasksByIdGraphRequest` | `src/Deliverd/Requests/Tasks/GetApiV1TasksByIdGraphRequest.cs` |
| `ApiV1TasksGraphResponse` | `src/Deliverd/Models/ApiV1TasksGraphResponse.cs` |

### PatchApiV1TasksById

- **Auth**: `options.BearerAuth`
- **Signature**: `PatchApiV1TasksById(PatchApiV1TasksByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TasksResponse`
- **Error**: `ApiException<PatchApiV1TasksByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PatchApiV1TasksByIdRequest` | `src/Deliverd/Requests/Tasks/PatchApiV1TasksByIdRequest.cs` |
| `ApiV1TasksRequest1` | `src/Deliverd/Models/ApiV1TasksRequest1.cs` |
| `ApiV1TasksResponse` | `src/Deliverd/Models/ApiV1TasksResponse.cs` |
| `PatchApiV1TasksByIdError` | `src/Deliverd/Errors/PatchApiV1TasksByIdError.cs` |

### PatchApiV1TasksByIdGovernance

- **Auth**: `options.BearerAuth`
- **Signature**: `PatchApiV1TasksByIdGovernance(PatchApiV1TasksByIdGovernanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PatchApiV1TasksByIdGovernanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 403, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PatchApiV1TasksByIdGovernanceRequest` | `src/Deliverd/Requests/Tasks/PatchApiV1TasksByIdGovernanceRequest.cs` |
| `ApiV1TasksGovernanceRequest1` | `src/Deliverd/Models/ApiV1TasksGovernanceRequest1.cs` |
| `PatchApiV1TasksByIdGovernanceError` | `src/Deliverd/Errors/PatchApiV1TasksByIdGovernanceError.cs` |

### PostApiV1Tasks

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Tasks(PostApiV1TasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1TasksResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1TasksRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksRequest.cs` |
| `ApiV1TasksRequest` | `src/Deliverd/Models/ApiV1TasksRequest.cs` |
| `ApiV1TasksResponse` | `src/Deliverd/Models/ApiV1TasksResponse.cs` |

### PostApiV1TasksByIdApply

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdApply(PostApiV1TasksByIdApplyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1TasksByIdApplyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdApplyRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdApplyRequest.cs` |
| `ApiV1TasksApplyRequest` | `src/Deliverd/Models/ApiV1TasksApplyRequest.cs` |
| `PostApiV1TasksByIdApplyError` | `src/Deliverd/Errors/PostApiV1TasksByIdApplyError.cs` |

### PostApiV1TasksByIdCancel

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdCancel(PostApiV1TasksByIdCancelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TasksCancelResponse`
- **Error**: `ApiException<PostApiV1TasksByIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdCancelRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdCancelRequest.cs` |
| `ApiV1TasksCancelRequest` | `src/Deliverd/Models/ApiV1TasksCancelRequest.cs` |
| `ApiV1TasksCancelResponse` | `src/Deliverd/Models/ApiV1TasksCancelResponse.cs` |
| `PostApiV1TasksByIdCancelError` | `src/Deliverd/Errors/PostApiV1TasksByIdCancelError.cs` |

### PostApiV1TasksByIdComplete

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdComplete(PostApiV1TasksByIdCompleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TasksCompleteResponse`
- **Error**: `ApiException<PostApiV1TasksByIdCompleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdCompleteRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdCompleteRequest.cs` |
| `ApiV1TasksCompleteRequest` | `src/Deliverd/Models/ApiV1TasksCompleteRequest.cs` |
| `ApiV1TasksCompleteResponse` | `src/Deliverd/Models/ApiV1TasksCompleteResponse.cs` |
| `PostApiV1TasksByIdCompleteError` | `src/Deliverd/Errors/PostApiV1TasksByIdCompleteError.cs` |

### PostApiV1TasksByIdFindings

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdFindings(PostApiV1TasksByIdFindingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdFindingsRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdFindingsRequest.cs` |
| `ApiV1TasksFindingsRequest` | `src/Deliverd/Models/ApiV1TasksFindingsRequest.cs` |

### PostApiV1TasksByIdFindingsByFindingIdApproval

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdFindingsByFindingIdApproval(PostApiV1TasksByIdFindingsByFindingIdApprovalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `FindingId`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1TasksByIdFindingsByFindingIdApprovalError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdFindingsByFindingIdApprovalRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdFindingsByFindingIdApprovalRequest.cs` |
| `ApiV1TasksFindingsApprovalRequest` | `src/Deliverd/Models/ApiV1TasksFindingsApprovalRequest.cs` |
| `PostApiV1TasksByIdFindingsByFindingIdApprovalError` | `src/Deliverd/Errors/PostApiV1TasksByIdFindingsByFindingIdApprovalError.cs` |

### PostApiV1TasksByIdFindingsByFindingIdKnowledge

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdFindingsByFindingIdKnowledge(PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `FindingId`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1TasksByIdFindingsByFindingIdKnowledgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest.cs` |
| `ApiV1TasksFindingsKnowledgeRequest` | `src/Deliverd/Models/ApiV1TasksFindingsKnowledgeRequest.cs` |
| `PostApiV1TasksByIdFindingsByFindingIdKnowledgeError` | `src/Deliverd/Errors/PostApiV1TasksByIdFindingsByFindingIdKnowledgeError.cs` |

### PostApiV1TasksByIdGovernance

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdGovernance(PostApiV1TasksByIdGovernanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1TasksByIdGovernanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdGovernanceRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdGovernanceRequest.cs` |
| `ApiV1TasksGovernanceRequest` | `src/Deliverd/Models/ApiV1TasksGovernanceRequest.cs` |
| `PostApiV1TasksByIdGovernanceError` | `src/Deliverd/Errors/PostApiV1TasksByIdGovernanceError.cs` |

### PostApiV1TasksByIdGovernanceControlsByKeyApproval

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdGovernanceControlsByKeyApproval(PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Key`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1TasksByIdGovernanceControlsByKeyApprovalError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest.cs` |
| `ApiV1TasksGovernanceControlsApprovalRequest` | `src/Deliverd/Models/ApiV1TasksGovernanceControlsApprovalRequest.cs` |
| `PostApiV1TasksByIdGovernanceControlsByKeyApprovalError` | `src/Deliverd/Errors/PostApiV1TasksByIdGovernanceControlsByKeyApprovalError.cs` |

### PostApiV1TasksByIdGovernanceEvidence

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdGovernanceEvidence(PostApiV1TasksByIdGovernanceEvidenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1TasksByIdGovernanceEvidenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 409, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdGovernanceEvidenceRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdGovernanceEvidenceRequest.cs` |
| `ApiV1TasksGovernanceEvidenceRequest` | `src/Deliverd/Models/ApiV1TasksGovernanceEvidenceRequest.cs` |
| `PostApiV1TasksByIdGovernanceEvidenceError` | `src/Deliverd/Errors/PostApiV1TasksByIdGovernanceEvidenceError.cs` |

### PostApiV1TasksByIdGovernanceReassessments

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdGovernanceReassessments(PostApiV1TasksByIdGovernanceReassessmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1TasksByIdGovernanceReassessmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdGovernanceReassessmentsRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdGovernanceReassessmentsRequest.cs` |
| `ApiV1TasksGovernanceReassessmentsRequest` | `src/Deliverd/Models/ApiV1TasksGovernanceReassessmentsRequest.cs` |
| `PostApiV1TasksByIdGovernanceReassessmentsError` | `src/Deliverd/Errors/PostApiV1TasksByIdGovernanceReassessmentsError.cs` |

### PostApiV1TasksByIdLinks

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdLinks(PostApiV1TasksByIdLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdLinksRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdLinksRequest.cs` |
| `ApiV1TasksLinksRequest` | `src/Deliverd/Models/ApiV1TasksLinksRequest.cs` |

### PostApiV1TasksByIdReopen

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdReopen(PostApiV1TasksByIdReopenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TasksReopenResponse`
- **Error**: `ApiException<PostApiV1TasksByIdReopenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdReopenRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdReopenRequest.cs` |
| `ApiV1TasksReopenResponse` | `src/Deliverd/Models/ApiV1TasksReopenResponse.cs` |
| `PostApiV1TasksByIdReopenError` | `src/Deliverd/Errors/PostApiV1TasksByIdReopenError.cs` |

### PostApiV1TasksByIdSideTasks

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1TasksByIdSideTasks(PostApiV1TasksByIdSideTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1TasksSideTasksResponse`
- **Error**: `ApiException<PostApiV1TasksByIdSideTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1TasksByIdSideTasksRequest` | `src/Deliverd/Requests/Tasks/PostApiV1TasksByIdSideTasksRequest.cs` |
| `ApiV1TasksSideTasksRequest` | `src/Deliverd/Models/ApiV1TasksSideTasksRequest.cs` |
| `ApiV1TasksSideTasksResponse` | `src/Deliverd/Models/ApiV1TasksSideTasksResponse.cs` |
| `PostApiV1TasksByIdSideTasksError` | `src/Deliverd/Errors/PostApiV1TasksByIdSideTasksError.cs` |

