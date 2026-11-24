<!-- Generated file — do not edit; regenerated with the SDK. -->

# Policies — operations

Accessor: `client.policies` · Source: `deliverd/apis/policies.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.policies.get_api_v1_policies

- **Route**: `GET /api/v1/policies`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_policies(*, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1PoliciesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1PoliciesResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1PoliciesResponse1` | `deliverd/models/api_v1_policies_response1.py` |

### client.policies.post_api_v1_policies

- **Route**: `POST /api/v1/policies`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_policies(*, body: ApiV1PoliciesRequest | ApiV1PoliciesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1PoliciesResponse`
- **Returns (raw)**: `ApiResult[ApiV1PoliciesResponse, PostApiV1PoliciesErrorBody]`
- **Error**: `PostApiV1PoliciesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Policies400Error1` [400] · `ApiV1Policies403Error1` [403] · `ApiV1Policies409Error1` [409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PoliciesRequest` | `deliverd/models/api_v1_policies_request.py` |
| `ApiV1PoliciesRequestDict` | `deliverd/models/api_v1_policies_request.py` |
| `ApiV1PoliciesResponse` | `deliverd/models/api_v1_policies_response.py` |
| `PostApiV1PoliciesErrorBody` | `deliverd/errors/post_api_v1_policies_error.py` |
| `ApiV1Policies400Error1` | `deliverd/models/api_v1_policies400_error1.py` |
| `ApiV1Policies403Error1` | `deliverd/models/api_v1_policies403_error1.py` |
| `ApiV1Policies409Error1` | `deliverd/models/api_v1_policies409_error1.py` |

### client.policies.post_api_v1_policies_by_id_activate

- **Route**: `POST /api/v1/policies/{id}/activate`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_policies_by_id_activate(id_: UUID, *, body: ApiV1PoliciesActivateRequest | ApiV1PoliciesActivateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1PoliciesActivateResponse`
- **Returns (raw)**: `ApiResult[ApiV1PoliciesActivateResponse, PostApiV1PoliciesByIdActivateErrorBody]`
- **Error**: `PostApiV1PoliciesByIdActivateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PoliciesActivate403Error1` [403] · `ApiV1PoliciesActivate404Error1` [404] · `ApiV1PoliciesActivate409Error1` [409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PoliciesActivateRequest` | `deliverd/models/api_v1_policies_activate_request.py` |
| `ApiV1PoliciesActivateRequestDict` | `deliverd/models/api_v1_policies_activate_request.py` |
| `ApiV1PoliciesActivateResponse` | `deliverd/models/api_v1_policies_activate_response.py` |
| `PostApiV1PoliciesByIdActivateErrorBody` | `deliverd/errors/post_api_v1_policies_by_id_activate_error.py` |
| `ApiV1PoliciesActivate403Error1` | `deliverd/models/api_v1_policies_activate403_error1.py` |
| `ApiV1PoliciesActivate404Error1` | `deliverd/models/api_v1_policies_activate404_error1.py` |
| `ApiV1PoliciesActivate409Error1` | `deliverd/models/api_v1_policies_activate409_error1.py` |

### client.policies.post_api_v1_policies_by_id_versions

- **Route**: `POST /api/v1/policies/{id}/versions`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_policies_by_id_versions(id_: UUID, *, body: ApiV1PoliciesVersionsRequest | ApiV1PoliciesVersionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1PoliciesVersionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1PoliciesVersionsResponse, PostApiV1PoliciesByIdVersionsErrorBody]`
- **Error**: `PostApiV1PoliciesByIdVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PoliciesVersions400Error1` [400] · `ApiV1PoliciesVersions403Error1` [403] · `ApiV1PoliciesVersions404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PoliciesVersionsRequest` | `deliverd/models/api_v1_policies_versions_request.py` |
| `ApiV1PoliciesVersionsRequestDict` | `deliverd/models/api_v1_policies_versions_request.py` |
| `ApiV1PoliciesVersionsResponse` | `deliverd/models/api_v1_policies_versions_response.py` |
| `PostApiV1PoliciesByIdVersionsErrorBody` | `deliverd/errors/post_api_v1_policies_by_id_versions_error.py` |
| `ApiV1PoliciesVersions400Error1` | `deliverd/models/api_v1_policies_versions400_error1.py` |
| `ApiV1PoliciesVersions403Error1` | `deliverd/models/api_v1_policies_versions403_error1.py` |
| `ApiV1PoliciesVersions404Error1` | `deliverd/models/api_v1_policies_versions404_error1.py` |

### client.policies.post_api_v1_policies_replay

- **Route**: `POST /api/v1/policies/replay`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_policies_replay(*, body: ApiV1PoliciesReplayRequest | ApiV1PoliciesReplayRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1PoliciesReplayResponse`
- **Returns (raw)**: `ApiResult[ApiV1PoliciesReplayResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1PoliciesReplayRequest` | `deliverd/models/api_v1_policies_replay_request.py` |
| `ApiV1PoliciesReplayRequestDict` | `deliverd/models/api_v1_policies_replay_request.py` |
| `ApiV1PoliciesReplayResponse` | `deliverd/models/api_v1_policies_replay_response.py` |

### client.policies.post_api_v1_policies_simulate

- **Route**: `POST /api/v1/policies/simulate`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_policies_simulate(*, body: ApiV1PoliciesSimulateRequest | ApiV1PoliciesSimulateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1PoliciesSimulateResponse`
- **Returns (raw)**: `ApiResult[ApiV1PoliciesSimulateResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1PoliciesSimulateRequest` | `deliverd/models/api_v1_policies_simulate_request.py` |
| `ApiV1PoliciesSimulateRequestDict` | `deliverd/models/api_v1_policies_simulate_request.py` |
| `ApiV1PoliciesSimulateResponse` | `deliverd/models/api_v1_policies_simulate_response.py` |

### client.policies.post_api_v1_policies_test

- **Route**: `POST /api/v1/policies/test`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_policies_test(*, body: ApiV1PoliciesTestRequest | ApiV1PoliciesTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1PoliciesTestResponse`
- **Returns (raw)**: `ApiResult[ApiV1PoliciesTestResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1PoliciesTestRequest` | `deliverd/models/api_v1_policies_test_request.py` |
| `ApiV1PoliciesTestRequestDict` | `deliverd/models/api_v1_policies_test_request.py` |
| `ApiV1PoliciesTestResponse` | `deliverd/models/api_v1_policies_test_response.py` |

