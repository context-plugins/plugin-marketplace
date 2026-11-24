<!-- Generated file — do not edit; regenerated with the SDK. -->

# FeatureChangeRequests — operations

Accessor: `client.feature_change_requests` · Source: `dev_cycle/apis/feature_change_requests.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.feature_change_requests.feature_change_requests_controller_apply_feature_change_request

- **Route**: `PATCH /v2/projects/{project}/features/{feature}/change-requests/{id}/apply`
- **Server**: `default`
- **Signature**: `def feature_change_requests_controller_apply_feature_change_request(id_: str, feature: str, project: str, body: ApplyFeatureChangeRequestDto | ApplyFeatureChangeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `feature`, `project`, `body`
- **Params**: `id_` — path `id` · `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody]`
- **Error**: `FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [403, 405, anything unmapped]

| Type | Source |
| --- | --- |
| `ApplyFeatureChangeRequestDto` | `dev_cycle/models/apply_feature_change_request_dto.py` |
| `ApplyFeatureChangeRequestDtoDict` | `dev_cycle/models/apply_feature_change_request_dto.py` |
| `FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody` | `dev_cycle/errors/feature_change_requests_controller_apply_feature_change_request_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.feature_change_requests.feature_change_requests_controller_cancel_feature_change_request

- **Route**: `PATCH /v2/projects/{project}/features/{feature}/change-requests/{id}/cancel`
- **Server**: `default`
- **Signature**: `def feature_change_requests_controller_cancel_feature_change_request(id_: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `feature`, `project`
- **Params**: `id_` — path `id` · `feature` — path · `project` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody]`
- **Error**: `FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [403, 405, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody` | `dev_cycle/errors/feature_change_requests_controller_cancel_feature_change_request_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.feature_change_requests.feature_change_requests_controller_create_change_request

- **Route**: `POST /v2/projects/{project}/features/{feature}/change-requests`
- **Server**: `default`
- **Signature**: `def feature_change_requests_controller_create_change_request(feature: str, project: str, body: CreateFeatureChangeRequestDto | CreateFeatureChangeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`, `body`
- **Params**: `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureChangeRequest`
- **Returns (raw)**: `ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerCreateChangeRequestErrorBody]`
- **Error**: `FeatureChangeRequestsControllerCreateChangeRequestErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 412, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateFeatureChangeRequestDto` | `dev_cycle/models/create_feature_change_request_dto.py` |
| `CreateFeatureChangeRequestDtoDict` | `dev_cycle/models/create_feature_change_request_dto.py` |
| `FeatureChangeRequest` | `dev_cycle/models/feature_change_request.py` |
| `FeatureChangeRequestsControllerCreateChangeRequestErrorBody` | `dev_cycle/errors/feature_change_requests_controller_create_change_request_error.py` |

### client.feature_change_requests.feature_change_requests_controller_get_feature_change_request

- **Route**: `GET /v2/projects/{project}/features/{feature}/change-requests/{id}`
- **Server**: `default`
- **Signature**: `def feature_change_requests_controller_get_feature_change_request(id_: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `feature`, `project`
- **Params**: `id_` — path `id` · `feature` — path · `project` — path
- **Returns (parsed)**: `FeatureChangeRequest`
- **Returns (raw)**: `ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody]`
- **Error**: `FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [405, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureChangeRequest` | `dev_cycle/models/feature_change_request.py` |
| `FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody` | `dev_cycle/errors/feature_change_requests_controller_get_feature_change_request_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.feature_change_requests.feature_change_requests_controller_get_latest_feature_change_request

- **Route**: `GET /v2/projects/{project}/features/{feature}/change-requests/latest`
- **Server**: `default`
- **Signature**: `def feature_change_requests_controller_get_latest_feature_change_request(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path
- **Returns (parsed)**: `FeatureChangeRequest`
- **Returns (raw)**: `ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody]`
- **Error**: `FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [405, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureChangeRequest` | `dev_cycle/models/feature_change_request.py` |
| `FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody` | `dev_cycle/errors/feature_change_requests_controller_get_latest_feature_change_request_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.feature_change_requests.feature_change_requests_controller_get_pending_feature_change_requests

- **Route**: `GET /v2/projects/{project}/features/{feature}/change-requests`
- **Server**: `default`
- **Signature**: `def feature_change_requests_controller_get_pending_feature_change_requests(feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `feature`, `project`
- **Params**: `feature` — path · `project` — path
- **Returns (parsed)**: `list[FeatureChangeRequest]`
- **Returns (raw)**: `ApiResult[list[FeatureChangeRequest], FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody]`
- **Error**: `FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [405, anything unmapped]

| Type | Source |
| --- | --- |
| `FeatureChangeRequest` | `dev_cycle/models/feature_change_request.py` |
| `FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody` | `dev_cycle/errors/feature_change_requests_controller_get_pending_feature_change_requests_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.feature_change_requests.feature_change_requests_controller_review_feature_change_request

- **Route**: `PATCH /v2/projects/{project}/features/{feature}/change-requests/{id}/review`
- **Server**: `default`
- **Signature**: `def feature_change_requests_controller_review_feature_change_request(id_: str, feature: str, project: str, body: ReviewFeatureChangeRequestDto | ReviewFeatureChangeRequestDtoDict, *, apply: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `feature`, `project`, `body`
- **Params**: `id_` — path `id` · `feature` — path · `project` — path · `apply` — query · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody]`
- **Error**: `FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [403, 405, anything unmapped]

| Type | Source |
| --- | --- |
| `ReviewFeatureChangeRequestDto` | `dev_cycle/models/review_feature_change_request_dto.py` |
| `ReviewFeatureChangeRequestDtoDict` | `dev_cycle/models/review_feature_change_request_dto.py` |
| `FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody` | `dev_cycle/errors/feature_change_requests_controller_review_feature_change_request_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.feature_change_requests.feature_change_requests_controller_submit_change_request_for_review

- **Route**: `PATCH /v2/projects/{project}/features/{feature}/change-requests/{id}/submit`
- **Server**: `default`
- **Signature**: `def feature_change_requests_controller_submit_change_request_for_review(id_: str, feature: str, project: str, body: SubmitFeatureChangeRequestDto | SubmitFeatureChangeRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `feature`, `project`, `body`
- **Params**: `id_` — path `id` · `feature` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `FeatureChangeRequest`
- **Returns (raw)**: `ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody]`
- **Error**: `FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [400, 403, 405, anything unmapped]

| Type | Source |
| --- | --- |
| `SubmitFeatureChangeRequestDto` | `dev_cycle/models/submit_feature_change_request_dto.py` |
| `SubmitFeatureChangeRequestDtoDict` | `dev_cycle/models/submit_feature_change_request_dto.py` |
| `FeatureChangeRequest` | `dev_cycle/models/feature_change_request.py` |
| `FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody` | `dev_cycle/errors/feature_change_requests_controller_submit_change_request_for_review_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

