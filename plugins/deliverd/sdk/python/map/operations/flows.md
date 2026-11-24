<!-- Generated file — do not edit; regenerated with the SDK. -->

# Flows — operations

Accessor: `client.flows` · Source: `deliverd/apis/flows.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.flows.get_api_v1_flows

- **Route**: `GET /api/v1/flows`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_flows(*, limit: int | None = None, cursor: str | None = None, status: StatusDeliverdDevFlowsApiOrStr | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `status` — query · `external_id` — query `externalId`
- **Returns (parsed)**: `ApiV1FlowsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1FlowsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusDeliverdDevFlowsApiOrStr` | `deliverd/models/enums/status_deliverd_dev_flows_api.py` |
| `ApiV1FlowsResponse1` | `deliverd/models/api_v1_flows_response1.py` |

### client.flows.get_api_v1_flows_by_id

- **Route**: `GET /api/v1/flows/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_flows_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1FlowsResponse`
- **Returns (raw)**: `ApiResult[ApiV1FlowsResponse, GetApiV1FlowsByIdErrorBody]`
- **Error**: `GetApiV1FlowsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1FlowsResponse` | `deliverd/models/api_v1_flows_response.py` |
| `GetApiV1FlowsByIdErrorBody` | `deliverd/errors/get_api_v1_flows_by_id_error.py` |

### client.flows.get_api_v1_flows_by_id_evidence

- **Route**: `GET /api/v1/flows/{id}/evidence`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_flows_by_id_evidence(id_: UUID, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `format_` — query `format`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], GetApiV1FlowsByIdEvidenceErrorBody]`
- **Error**: `GetApiV1FlowsByIdEvidenceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `deliverd/models/enums/format.py` |
| `GetApiV1FlowsByIdEvidenceErrorBody` | `deliverd/errors/get_api_v1_flows_by_id_evidence_error.py` |

### client.flows.post_api_v1_flows

- **Route**: `POST /api/v1/flows`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_flows(*, body: ApiV1FlowsRequest | ApiV1FlowsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1FlowsResponse`
- **Returns (raw)**: `ApiResult[ApiV1FlowsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1FlowsRequest` | `deliverd/models/api_v1_flows_request.py` |
| `ApiV1FlowsRequestDict` | `deliverd/models/api_v1_flows_request.py` |
| `ApiV1FlowsResponse` | `deliverd/models/api_v1_flows_response.py` |

### client.flows.post_api_v1_flows_by_id_cancel

- **Route**: `POST /api/v1/flows/{id}/cancel`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_flows_by_id_cancel(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1FlowsCancelResponse`
- **Returns (raw)**: `ApiResult[ApiV1FlowsCancelResponse, PostApiV1FlowsByIdCancelErrorBody]`
- **Error**: `PostApiV1FlowsByIdCancelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1FlowsCancelResponse` | `deliverd/models/api_v1_flows_cancel_response.py` |
| `PostApiV1FlowsByIdCancelErrorBody` | `deliverd/errors/post_api_v1_flows_by_id_cancel_error.py` |

### client.flows.post_api_v1_flows_by_id_complete

- **Route**: `POST /api/v1/flows/{id}/complete`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_flows_by_id_complete(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1FlowsCompleteResponse`
- **Returns (raw)**: `ApiResult[ApiV1FlowsCompleteResponse, PostApiV1FlowsByIdCompleteErrorBody]`
- **Error**: `PostApiV1FlowsByIdCompleteErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1FlowsCompleteResponse` | `deliverd/models/api_v1_flows_complete_response.py` |
| `PostApiV1FlowsByIdCompleteErrorBody` | `deliverd/errors/post_api_v1_flows_by_id_complete_error.py` |

