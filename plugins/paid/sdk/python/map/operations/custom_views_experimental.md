<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomViewsExperimental — operations

Accessor: `client.custom_views_experimental` · Source: `paid/apis/custom_views_experimental.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.custom_views_experimental.create_custom_view

- **Route**: `POST /experimental/views/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def create_custom_view(authorization: str, *, body: CreateCustomViewRequest | CreateCustomViewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomView`
- **Returns (raw)**: `ApiResult[CustomView, CreateCustomViewErrorBody]`
- **Error**: `CreateCustomViewErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomViewRequest` | `paid/models/create_custom_view_request.py` |
| `CreateCustomViewRequestDict` | `paid/models/create_custom_view_request.py` |
| `CustomView` | `paid/models/custom_view.py` |
| `CreateCustomViewErrorBody` | `paid/errors/create_custom_view_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.custom_views_experimental.get_custom_view

- **Route**: `GET /experimental/views/{displayId}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_custom_view(display_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `display_id`, `authorization`
- **Params**: `display_id` — path `displayId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomViewDetail`
- **Returns (raw)**: `ApiResult[CustomViewDetail, GetCustomViewErrorBody]`
- **Error**: `GetCustomViewErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomViewDetail` | `paid/models/custom_view_detail.py` |
| `GetCustomViewErrorBody` | `paid/errors/get_custom_view_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.custom_views_experimental.get_custom_view_data

- **Route**: `GET /experimental/views/{displayId}/data`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_custom_view_data(display_id: str, authorization: str, *, customer_id: str | None = None, period_kind: ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr | None = None, period_unit: ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr | None = None, period_amount: int | None = None, period_start: str | None = None, period_end: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `display_id`, `authorization`
- **Params**: `display_id` — path `displayId` · `customer_id` — query `customerId` · `period_kind` — query `periodKind` · `period_unit` — query `periodUnit` · `period_amount` — query `periodAmount` · `period_start` — query `periodStart` · `period_end` — query `periodEnd` · `authorization` — header `Authorization`
- **Returns (parsed)**: `ViewDataResponse`
- **Returns (raw)**: `ApiResult[ViewDataResponse, GetCustomViewDataErrorBody]`
- **Error**: `GetCustomViewDataErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 408, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExperimentalViewsDisplayIdDataGetParametersPeriodKindOrStr` | `paid/models/enums/experimental_views_display_id_data_get_parameters_period_kind.py` |
| `ExperimentalViewsDisplayIdDataGetParametersPeriodUnitOrStr` | `paid/models/enums/experimental_views_display_id_data_get_parameters_period_unit.py` |
| `ViewDataResponse` | `paid/models/view_data_response.py` |
| `GetCustomViewDataErrorBody` | `paid/errors/get_custom_view_data_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.custom_views_experimental.get_custom_view_embed_token

- **Route**: `GET /experimental/views/{displayId}/embed-token`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_custom_view_embed_token(display_id: str, customer_id: str, authorization: str, *, ttl_seconds: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `display_id`, `customer_id`, `authorization`
- **Params**: `display_id` — path `displayId` · `customer_id` — query `customerId` · `ttl_seconds` — query `ttlSeconds` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomViewEmbedTokenResponse`
- **Returns (raw)**: `ApiResult[CustomViewEmbedTokenResponse, GetCustomViewEmbedTokenErrorBody]`
- **Error**: `GetCustomViewEmbedTokenErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomViewEmbedTokenResponse` | `paid/models/custom_view_embed_token_response.py` |
| `GetCustomViewEmbedTokenErrorBody` | `paid/errors/get_custom_view_embed_token_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.custom_views_experimental.list_custom_views

- **Route**: `GET /experimental/views/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def list_custom_views(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomViewListResponse`
- **Returns (raw)**: `ApiResult[CustomViewListResponse, ListCustomViewsErrorBody]`
- **Error**: `ListCustomViewsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomViewListResponse` | `paid/models/custom_view_list_response.py` |
| `ListCustomViewsErrorBody` | `paid/errors/list_custom_views_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.custom_views_experimental.publish_custom_view

- **Route**: `POST /experimental/views/{displayId}/publish`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def publish_custom_view(display_id: str, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `display_id`, `authorization`
- **Params**: `display_id` — path `displayId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomView`
- **Returns (raw)**: `ApiResult[CustomView, PublishCustomViewErrorBody]`
- **Error**: `PublishCustomViewErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomView` | `paid/models/custom_view.py` |
| `PublishCustomViewErrorBody` | `paid/errors/publish_custom_view_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.custom_views_experimental.update_custom_view

- **Route**: `PATCH /experimental/views/{displayId}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def update_custom_view(display_id: str, authorization: str, *, body: UpdateCustomViewRequest | UpdateCustomViewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `display_id`, `authorization`
- **Params**: `display_id` — path `displayId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomView`
- **Returns (raw)**: `ApiResult[CustomView, UpdateCustomViewErrorBody]`
- **Error**: `UpdateCustomViewErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomViewRequest` | `paid/models/update_custom_view_request.py` |
| `UpdateCustomViewRequestDict` | `paid/models/update_custom_view_request.py` |
| `CustomView` | `paid/models/custom_view.py` |
| `UpdateCustomViewErrorBody` | `paid/errors/update_custom_view_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.custom_views_experimental.update_custom_view_period

- **Route**: `PATCH /experimental/views/{displayId}/period`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def update_custom_view_period(display_id: str, authorization: str, *, body: UpdateCustomViewPeriodRequest | UpdateCustomViewPeriodRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `display_id`, `authorization`
- **Params**: `display_id` — path `displayId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomView`
- **Returns (raw)**: `ApiResult[CustomView, UpdateCustomViewPeriodErrorBody]`
- **Error**: `UpdateCustomViewPeriodErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomViewPeriodRequest` | `paid/models/update_custom_view_period_request.py` |
| `UpdateCustomViewPeriodRequestDict` | `paid/models/update_custom_view_period_request.py` |
| `CustomView` | `paid/models/custom_view.py` |
| `UpdateCustomViewPeriodErrorBody` | `paid/errors/update_custom_view_period_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

