<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhookEndpoints — operations

Accessor: `client.webhook_endpoints` · Source: `deliverd/apis/webhook_endpoints.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.webhook_endpoints.delete_api_v1_webhook_endpoints_by_id

- **Route**: `DELETE /api/v1/webhook-endpoints/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_api_v1_webhook_endpoints_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteApiV1WebhookEndpointsByIdErrorBody]`
- **Error**: `DeleteApiV1WebhookEndpointsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1WebhookEndpoints403Error1` [403] · `ApiV1WebhookEndpoints404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiV1WebhookEndpointsByIdErrorBody` | `deliverd/errors/delete_api_v1_webhook_endpoints_by_id_error.py` |
| `ApiV1WebhookEndpoints403Error1` | `deliverd/models/api_v1_webhook_endpoints403_error1.py` |
| `ApiV1WebhookEndpoints404Error1` | `deliverd/models/api_v1_webhook_endpoints404_error1.py` |

### client.webhook_endpoints.get_api_v1_webhook_endpoints

- **Route**: `GET /api/v1/webhook-endpoints`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_webhook_endpoints(*, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1WebhookEndpointsResponse`
- **Returns (raw)**: `ApiResult[ApiV1WebhookEndpointsResponse, GetApiV1WebhookEndpointsErrorBody]`
- **Error**: `GetApiV1WebhookEndpointsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1WebhookEndpoints403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WebhookEndpointsResponse` | `deliverd/models/api_v1_webhook_endpoints_response.py` |
| `GetApiV1WebhookEndpointsErrorBody` | `deliverd/errors/get_api_v1_webhook_endpoints_error.py` |
| `ApiV1WebhookEndpoints403Error1` | `deliverd/models/api_v1_webhook_endpoints403_error1.py` |

### client.webhook_endpoints.get_api_v1_webhook_endpoints_by_id

- **Route**: `GET /api/v1/webhook-endpoints/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_webhook_endpoints_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1WebhookEndpointsResponse2`
- **Returns (raw)**: `ApiResult[ApiV1WebhookEndpointsResponse2, GetApiV1WebhookEndpointsByIdErrorBody]`
- **Error**: `GetApiV1WebhookEndpointsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1WebhookEndpoints403Error1` [403] · `ApiV1WebhookEndpoints404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WebhookEndpointsResponse2` | `deliverd/models/api_v1_webhook_endpoints_response2.py` |
| `GetApiV1WebhookEndpointsByIdErrorBody` | `deliverd/errors/get_api_v1_webhook_endpoints_by_id_error.py` |
| `ApiV1WebhookEndpoints403Error1` | `deliverd/models/api_v1_webhook_endpoints403_error1.py` |
| `ApiV1WebhookEndpoints404Error1` | `deliverd/models/api_v1_webhook_endpoints404_error1.py` |

### client.webhook_endpoints.patch_api_v1_webhook_endpoints_by_id

- **Route**: `PATCH /api/v1/webhook-endpoints/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def patch_api_v1_webhook_endpoints_by_id(id_: UUID, *, body: ApiV1WebhookEndpointsRequest1 | ApiV1WebhookEndpointsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1WebhookEndpointsResponse2`
- **Returns (raw)**: `ApiResult[ApiV1WebhookEndpointsResponse2, PatchApiV1WebhookEndpointsByIdErrorBody]`
- **Error**: `PatchApiV1WebhookEndpointsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1WebhookEndpoints400Error1` [400] · `ApiV1WebhookEndpoints403Error1` [403] · `ApiV1WebhookEndpoints404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WebhookEndpointsRequest1` | `deliverd/models/api_v1_webhook_endpoints_request1.py` |
| `ApiV1WebhookEndpointsRequest1Dict` | `deliverd/models/api_v1_webhook_endpoints_request1.py` |
| `ApiV1WebhookEndpointsResponse2` | `deliverd/models/api_v1_webhook_endpoints_response2.py` |
| `PatchApiV1WebhookEndpointsByIdErrorBody` | `deliverd/errors/patch_api_v1_webhook_endpoints_by_id_error.py` |
| `ApiV1WebhookEndpoints400Error1` | `deliverd/models/api_v1_webhook_endpoints400_error1.py` |
| `ApiV1WebhookEndpoints403Error1` | `deliverd/models/api_v1_webhook_endpoints403_error1.py` |
| `ApiV1WebhookEndpoints404Error1` | `deliverd/models/api_v1_webhook_endpoints404_error1.py` |

### client.webhook_endpoints.post_api_v1_webhook_endpoints

- **Route**: `POST /api/v1/webhook-endpoints`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_webhook_endpoints(*, body: ApiV1WebhookEndpointsRequest | ApiV1WebhookEndpointsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1WebhookEndpointsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1WebhookEndpointsResponse1, PostApiV1WebhookEndpointsErrorBody]`
- **Error**: `PostApiV1WebhookEndpointsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1WebhookEndpoints400Error1` [400] · `ApiV1WebhookEndpoints403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WebhookEndpointsRequest` | `deliverd/models/api_v1_webhook_endpoints_request.py` |
| `ApiV1WebhookEndpointsRequestDict` | `deliverd/models/api_v1_webhook_endpoints_request.py` |
| `ApiV1WebhookEndpointsResponse1` | `deliverd/models/api_v1_webhook_endpoints_response1.py` |
| `PostApiV1WebhookEndpointsErrorBody` | `deliverd/errors/post_api_v1_webhook_endpoints_error.py` |
| `ApiV1WebhookEndpoints400Error1` | `deliverd/models/api_v1_webhook_endpoints400_error1.py` |
| `ApiV1WebhookEndpoints403Error1` | `deliverd/models/api_v1_webhook_endpoints403_error1.py` |

### client.webhook_endpoints.post_api_v1_webhook_endpoints_by_id_test

- **Route**: `POST /api/v1/webhook-endpoints/{id}/test`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_webhook_endpoints_by_id_test(id_: UUID, *, body: ApiV1WebhookEndpointsTestRequest | ApiV1WebhookEndpointsTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1WebhookEndpointsTestResponse`
- **Returns (raw)**: `ApiResult[ApiV1WebhookEndpointsTestResponse, PostApiV1WebhookEndpointsByIdTestErrorBody]`
- **Error**: `PostApiV1WebhookEndpointsByIdTestErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1WebhookEndpointsTest400Error1` [400] · `ApiV1WebhookEndpointsTest403Error1` [403] · `ApiV1WebhookEndpointsTest404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WebhookEndpointsTestRequest` | `deliverd/models/api_v1_webhook_endpoints_test_request.py` |
| `ApiV1WebhookEndpointsTestRequestDict` | `deliverd/models/api_v1_webhook_endpoints_test_request.py` |
| `ApiV1WebhookEndpointsTestResponse` | `deliverd/models/api_v1_webhook_endpoints_test_response.py` |
| `PostApiV1WebhookEndpointsByIdTestErrorBody` | `deliverd/errors/post_api_v1_webhook_endpoints_by_id_test_error.py` |
| `ApiV1WebhookEndpointsTest400Error1` | `deliverd/models/api_v1_webhook_endpoints_test400_error1.py` |
| `ApiV1WebhookEndpointsTest403Error1` | `deliverd/models/api_v1_webhook_endpoints_test403_error1.py` |
| `ApiV1WebhookEndpointsTest404Error1` | `deliverd/models/api_v1_webhook_endpoints_test404_error1.py` |

