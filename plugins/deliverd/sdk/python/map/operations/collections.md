<!-- Generated file — do not edit; regenerated with the SDK. -->

# Collections — operations

Accessor: `client.collections` · Source: `deliverd/apis/collections.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.collections.get_api_v1_collections

- **Route**: `GET /api/v1/collections`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_collections(*, limit: int | None = None, cursor: str | None = None, status: StatusDeliverdDevCollectionsApiOrStr | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `status` — query · `external_id` — query `externalId`
- **Returns (parsed)**: `ApiV1CollectionsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1CollectionsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusDeliverdDevCollectionsApiOrStr` | `deliverd/models/enums/status_deliverd_dev_collections_api.py` |
| `ApiV1CollectionsResponse1` | `deliverd/models/api_v1_collections_response1.py` |

### client.collections.get_api_v1_collections_by_id

- **Route**: `GET /api/v1/collections/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_collections_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1CollectionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1CollectionsResponse, GetApiV1CollectionsByIdErrorBody]`
- **Error**: `GetApiV1CollectionsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CollectionsResponse` | `deliverd/models/api_v1_collections_response.py` |
| `GetApiV1CollectionsByIdErrorBody` | `deliverd/errors/get_api_v1_collections_by_id_error.py` |

### client.collections.post_api_v1_collections

- **Route**: `POST /api/v1/collections`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_collections(*, body: ApiV1CollectionsRequest | ApiV1CollectionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1CollectionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1CollectionsResponse, PostApiV1CollectionsErrorBody]`
- **Error**: `PostApiV1CollectionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CollectionsRequest` | `deliverd/models/api_v1_collections_request.py` |
| `ApiV1CollectionsRequestDict` | `deliverd/models/api_v1_collections_request.py` |
| `ApiV1CollectionsResponse` | `deliverd/models/api_v1_collections_response.py` |
| `PostApiV1CollectionsErrorBody` | `deliverd/errors/post_api_v1_collections_error.py` |

### client.collections.post_api_v1_collections_by_id_cancel

- **Route**: `POST /api/v1/collections/{id}/cancel`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_collections_by_id_cancel(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1CollectionsCancelResponse`
- **Returns (raw)**: `ApiResult[ApiV1CollectionsCancelResponse, PostApiV1CollectionsByIdCancelErrorBody]`
- **Error**: `PostApiV1CollectionsByIdCancelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CollectionsCancelResponse` | `deliverd/models/api_v1_collections_cancel_response.py` |
| `PostApiV1CollectionsByIdCancelErrorBody` | `deliverd/errors/post_api_v1_collections_by_id_cancel_error.py` |

