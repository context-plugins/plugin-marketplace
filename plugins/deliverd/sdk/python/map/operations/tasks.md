<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `deliverd/apis/tasks.py` · 24 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.tasks.get_api_v1_tasks

- **Route**: `GET /api/v1/tasks`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_tasks(*, limit: int | None = None, cursor: str | None = None, status: Status2DeliverdDevTasksApiOrStr | None = None, external_id: str | None = None, q: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `status` — query · `external_id` — query `externalId` · `q` — query
- **Returns (parsed)**: `ApiV1TasksResponse2`
- **Returns (raw)**: `ApiResult[ApiV1TasksResponse2, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Status2DeliverdDevTasksApiOrStr` | `deliverd/models/enums/status2_deliverd_dev_tasks_api.py` |
| `ApiV1TasksResponse2` | `deliverd/models/api_v1_tasks_response2.py` |

### client.tasks.get_api_v1_tasks_by_id

- **Route**: `GET /api/v1/tasks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_tasks_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1TasksResponse`
- **Returns (raw)**: `ApiResult[ApiV1TasksResponse, GetApiV1TasksByIdErrorBody]`
- **Error**: `GetApiV1TasksByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksResponse` | `deliverd/models/api_v1_tasks_response.py` |
| `GetApiV1TasksByIdErrorBody` | `deliverd/errors/get_api_v1_tasks_by_id_error.py` |

### client.tasks.get_api_v1_tasks_by_id_context

- **Route**: `GET /api/v1/tasks/{id}/context`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_tasks_by_id_context(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

### client.tasks.get_api_v1_tasks_by_id_context_given

- **Route**: `GET /api/v1/tasks/{id}/context-given`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_tasks_by_id_context_given(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

### client.tasks.get_api_v1_tasks_by_id_governance

- **Route**: `GET /api/v1/tasks/{id}/governance`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_tasks_by_id_governance(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], GetApiV1TasksByIdGovernanceErrorBody]`
- **Error**: `GetApiV1TasksByIdGovernanceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `GetApiV1TasksByIdGovernanceErrorBody` | `deliverd/errors/get_api_v1_tasks_by_id_governance_error.py` |

### client.tasks.get_api_v1_tasks_by_id_governance_gate

- **Route**: `GET /api/v1/tasks/{id}/governance/gate`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_tasks_by_id_governance_gate(id_: UUID, *, action: ActionDeliverdDevGovernanceApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `action` — query
- **Returns (parsed)**: `ApiV1TasksGovernanceGateResponse`
- **Returns (raw)**: `ApiResult[ApiV1TasksGovernanceGateResponse, GetApiV1TasksByIdGovernanceGateErrorBody]`
- **Error**: `GetApiV1TasksByIdGovernanceGateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ActionDeliverdDevGovernanceApiOrStr` | `deliverd/models/enums/action_deliverd_dev_governance_api.py` |
| `ApiV1TasksGovernanceGateResponse` | `deliverd/models/api_v1_tasks_governance_gate_response.py` |
| `GetApiV1TasksByIdGovernanceGateErrorBody` | `deliverd/errors/get_api_v1_tasks_by_id_governance_gate_error.py` |

### client.tasks.get_api_v1_tasks_by_id_governance_pack

- **Route**: `GET /api/v1/tasks/{id}/governance/pack`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_tasks_by_id_governance_pack(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

### client.tasks.get_api_v1_tasks_by_id_graph

- **Route**: `GET /api/v1/tasks/{id}/graph`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_tasks_by_id_graph(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1TasksGraphResponse`
- **Returns (raw)**: `ApiResult[ApiV1TasksGraphResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1TasksGraphResponse` | `deliverd/models/api_v1_tasks_graph_response.py` |

### client.tasks.patch_api_v1_tasks_by_id

- **Route**: `PATCH /api/v1/tasks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def patch_api_v1_tasks_by_id(id_: UUID, *, body: ApiV1TasksRequest1 | ApiV1TasksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1TasksResponse`
- **Returns (raw)**: `ApiResult[ApiV1TasksResponse, PatchApiV1TasksByIdErrorBody]`
- **Error**: `PatchApiV1TasksByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksRequest1` | `deliverd/models/api_v1_tasks_request1.py` |
| `ApiV1TasksRequest1Dict` | `deliverd/models/api_v1_tasks_request1.py` |
| `ApiV1TasksResponse` | `deliverd/models/api_v1_tasks_response.py` |
| `PatchApiV1TasksByIdErrorBody` | `deliverd/errors/patch_api_v1_tasks_by_id_error.py` |

### client.tasks.patch_api_v1_tasks_by_id_governance

- **Route**: `PATCH /api/v1/tasks/{id}/governance`
- **Auth**: `bearer_auth`
- **Signature**: `def patch_api_v1_tasks_by_id_governance(id_: UUID, *, body: ApiV1TasksGovernanceRequest1 | ApiV1TasksGovernanceRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PatchApiV1TasksByIdGovernanceErrorBody]`
- **Error**: `PatchApiV1TasksByIdGovernanceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 403, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksGovernanceRequest1` | `deliverd/models/api_v1_tasks_governance_request1.py` |
| `ApiV1TasksGovernanceRequest1Dict` | `deliverd/models/api_v1_tasks_governance_request1.py` |
| `PatchApiV1TasksByIdGovernanceErrorBody` | `deliverd/errors/patch_api_v1_tasks_by_id_governance_error.py` |

### client.tasks.post_api_v1_tasks

- **Route**: `POST /api/v1/tasks`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks(*, body: ApiV1TasksRequest | ApiV1TasksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1TasksResponse`
- **Returns (raw)**: `ApiResult[ApiV1TasksResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1TasksRequest` | `deliverd/models/api_v1_tasks_request.py` |
| `ApiV1TasksRequestDict` | `deliverd/models/api_v1_tasks_request.py` |
| `ApiV1TasksResponse` | `deliverd/models/api_v1_tasks_response.py` |

### client.tasks.post_api_v1_tasks_by_id_apply

- **Route**: `POST /api/v1/tasks/{id}/apply`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_apply(id_: UUID, *, body: ApiV1TasksApplyRequest | ApiV1TasksApplyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1TasksByIdApplyErrorBody]`
- **Error**: `PostApiV1TasksByIdApplyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksApplyRequest` | `deliverd/models/api_v1_tasks_apply_request.py` |
| `ApiV1TasksApplyRequestDict` | `deliverd/models/api_v1_tasks_apply_request.py` |
| `PostApiV1TasksByIdApplyErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_apply_error.py` |

### client.tasks.post_api_v1_tasks_by_id_cancel

- **Route**: `POST /api/v1/tasks/{id}/cancel`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_cancel(id_: UUID, *, body: ApiV1TasksCancelRequest | ApiV1TasksCancelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1TasksCancelResponse`
- **Returns (raw)**: `ApiResult[ApiV1TasksCancelResponse, PostApiV1TasksByIdCancelErrorBody]`
- **Error**: `PostApiV1TasksByIdCancelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksCancelRequest` | `deliverd/models/api_v1_tasks_cancel_request.py` |
| `ApiV1TasksCancelRequestDict` | `deliverd/models/api_v1_tasks_cancel_request.py` |
| `ApiV1TasksCancelResponse` | `deliverd/models/api_v1_tasks_cancel_response.py` |
| `PostApiV1TasksByIdCancelErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_cancel_error.py` |

### client.tasks.post_api_v1_tasks_by_id_complete

- **Route**: `POST /api/v1/tasks/{id}/complete`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_complete(id_: UUID, *, body: ApiV1TasksCompleteRequest | ApiV1TasksCompleteRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1TasksCompleteResponse`
- **Returns (raw)**: `ApiResult[ApiV1TasksCompleteResponse, PostApiV1TasksByIdCompleteErrorBody]`
- **Error**: `PostApiV1TasksByIdCompleteErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksCompleteRequest` | `deliverd/models/api_v1_tasks_complete_request.py` |
| `ApiV1TasksCompleteRequestDict` | `deliverd/models/api_v1_tasks_complete_request.py` |
| `ApiV1TasksCompleteResponse` | `deliverd/models/api_v1_tasks_complete_response.py` |
| `PostApiV1TasksByIdCompleteErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_complete_error.py` |

### client.tasks.post_api_v1_tasks_by_id_findings

- **Route**: `POST /api/v1/tasks/{id}/findings`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_findings(id_: UUID, *, body: ApiV1TasksFindingsRequest | ApiV1TasksFindingsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1TasksFindingsRequest` | `deliverd/models/api_v1_tasks_findings_request.py` |
| `ApiV1TasksFindingsRequestDict` | `deliverd/models/api_v1_tasks_findings_request.py` |

### client.tasks.post_api_v1_tasks_by_id_findings_by_finding_id_approval

- **Route**: `POST /api/v1/tasks/{id}/findings/{findingId}/approval`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_findings_by_finding_id_approval(id_: UUID, finding_id: UUID, *, body: ApiV1TasksFindingsApprovalRequest | ApiV1TasksFindingsApprovalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `finding_id`
- **Params**: `id_` — path `id` · `finding_id` — path `findingId` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody]`
- **Error**: `PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksFindingsApprovalRequest` | `deliverd/models/api_v1_tasks_findings_approval_request.py` |
| `ApiV1TasksFindingsApprovalRequestDict` | `deliverd/models/api_v1_tasks_findings_approval_request.py` |
| `PostApiV1TasksByIdFindingsByFindingIdApprovalErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_findings_by_finding_id_approval_error.py` |

### client.tasks.post_api_v1_tasks_by_id_findings_by_finding_id_knowledge

- **Route**: `POST /api/v1/tasks/{id}/findings/{findingId}/knowledge`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_findings_by_finding_id_knowledge(id_: UUID, finding_id: UUID, *, body: ApiV1TasksFindingsKnowledgeRequest | ApiV1TasksFindingsKnowledgeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `finding_id`
- **Params**: `id_` — path `id` · `finding_id` — path `findingId` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody]`
- **Error**: `PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksFindingsKnowledgeRequest` | `deliverd/models/api_v1_tasks_findings_knowledge_request.py` |
| `ApiV1TasksFindingsKnowledgeRequestDict` | `deliverd/models/api_v1_tasks_findings_knowledge_request.py` |
| `PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_findings_by_finding_id_knowledge_error.py` |

### client.tasks.post_api_v1_tasks_by_id_governance

- **Route**: `POST /api/v1/tasks/{id}/governance`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_governance(id_: UUID, *, body: ApiV1TasksGovernanceRequest | ApiV1TasksGovernanceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceErrorBody]`
- **Error**: `PostApiV1TasksByIdGovernanceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksGovernanceRequest` | `deliverd/models/api_v1_tasks_governance_request.py` |
| `ApiV1TasksGovernanceRequestDict` | `deliverd/models/api_v1_tasks_governance_request.py` |
| `PostApiV1TasksByIdGovernanceErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_governance_error.py` |

### client.tasks.post_api_v1_tasks_by_id_governance_controls_by_key_approval

- **Route**: `POST /api/v1/tasks/{id}/governance/controls/{key}/approval`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_governance_controls_by_key_approval(id_: UUID, key: str, *, body: ApiV1TasksGovernanceControlsApprovalRequest | ApiV1TasksGovernanceControlsApprovalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `key`
- **Params**: `id_` — path `id` · `key` — path · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody]`
- **Error**: `PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksGovernanceControlsApprovalRequest` | `deliverd/models/api_v1_tasks_governance_controls_approval_request.py` |
| `ApiV1TasksGovernanceControlsApprovalRequestDict` | `deliverd/models/api_v1_tasks_governance_controls_approval_request.py` |
| `PostApiV1TasksByIdGovernanceControlsByKeyApprovalErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_governance_controls_by_key_approval_error.py` |

### client.tasks.post_api_v1_tasks_by_id_governance_evidence

- **Route**: `POST /api/v1/tasks/{id}/governance/evidence`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_governance_evidence(id_: UUID, *, body: ApiV1TasksGovernanceEvidenceRequest | ApiV1TasksGovernanceEvidenceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceEvidenceErrorBody]`
- **Error**: `PostApiV1TasksByIdGovernanceEvidenceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 409, 502, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksGovernanceEvidenceRequest` | `deliverd/models/api_v1_tasks_governance_evidence_request.py` |
| `ApiV1TasksGovernanceEvidenceRequestDict` | `deliverd/models/api_v1_tasks_governance_evidence_request.py` |
| `PostApiV1TasksByIdGovernanceEvidenceErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_governance_evidence_error.py` |

### client.tasks.post_api_v1_tasks_by_id_governance_reassessments

- **Route**: `POST /api/v1/tasks/{id}/governance/reassessments`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_governance_reassessments(id_: UUID, *, body: ApiV1TasksGovernanceReassessmentsRequest | ApiV1TasksGovernanceReassessmentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1TasksByIdGovernanceReassessmentsErrorBody]`
- **Error**: `PostApiV1TasksByIdGovernanceReassessmentsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksGovernanceReassessmentsRequest` | `deliverd/models/api_v1_tasks_governance_reassessments_request.py` |
| `ApiV1TasksGovernanceReassessmentsRequestDict` | `deliverd/models/api_v1_tasks_governance_reassessments_request.py` |
| `PostApiV1TasksByIdGovernanceReassessmentsErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_governance_reassessments_error.py` |

### client.tasks.post_api_v1_tasks_by_id_links

- **Route**: `POST /api/v1/tasks/{id}/links`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_links(id_: UUID, *, body: ApiV1TasksLinksRequest | ApiV1TasksLinksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1TasksLinksRequest` | `deliverd/models/api_v1_tasks_links_request.py` |
| `ApiV1TasksLinksRequestDict` | `deliverd/models/api_v1_tasks_links_request.py` |

### client.tasks.post_api_v1_tasks_by_id_reopen

- **Route**: `POST /api/v1/tasks/{id}/reopen`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_reopen(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1TasksReopenResponse`
- **Returns (raw)**: `ApiResult[ApiV1TasksReopenResponse, PostApiV1TasksByIdReopenErrorBody]`
- **Error**: `PostApiV1TasksByIdReopenErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksReopenResponse` | `deliverd/models/api_v1_tasks_reopen_response.py` |
| `PostApiV1TasksByIdReopenErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_reopen_error.py` |

### client.tasks.post_api_v1_tasks_by_id_side_tasks

- **Route**: `POST /api/v1/tasks/{id}/side-tasks`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_tasks_by_id_side_tasks(id_: UUID, *, body: ApiV1TasksSideTasksRequest | ApiV1TasksSideTasksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1TasksSideTasksResponse`
- **Returns (raw)**: `ApiResult[ApiV1TasksSideTasksResponse, PostApiV1TasksByIdSideTasksErrorBody]`
- **Error**: `PostApiV1TasksByIdSideTasksErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1TasksSideTasksRequest` | `deliverd/models/api_v1_tasks_side_tasks_request.py` |
| `ApiV1TasksSideTasksRequestDict` | `deliverd/models/api_v1_tasks_side_tasks_request.py` |
| `ApiV1TasksSideTasksResponse` | `deliverd/models/api_v1_tasks_side_tasks_response.py` |
| `PostApiV1TasksByIdSideTasksErrorBody` | `deliverd/errors/post_api_v1_tasks_by_id_side_tasks_error.py` |

