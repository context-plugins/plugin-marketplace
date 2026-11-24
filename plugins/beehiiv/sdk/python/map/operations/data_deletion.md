<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataDeletion — operations

Accessor: `client.data_deletion` · Source: `beehiiv/apis/data_deletion.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_deletion.create5

- **Route**: `POST /publications/{publicationId}/data_privacy/deletion_requests`
- **Server**: `default`
- **Signature**: `def create5(publication_id: str, authorization: str, *, body: PublicationsDataPrivacyDeletionRequestsRequest | PublicationsDataPrivacyDeletionRequestsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `DataDeletionRequestResponse`
- **Returns (raw)**: `ApiResult[DataDeletionRequestResponse, Create5ErrorBody]`
- **Error**: `Create5ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsDataPrivacyDeletionRequestsRequest` | `beehiiv/models/publications_data_privacy_deletion_requests_request.py` |
| `PublicationsDataPrivacyDeletionRequestsRequestDict` | `beehiiv/models/publications_data_privacy_deletion_requests_request.py` |
| `DataDeletionRequestResponse` | `beehiiv/models/data_deletion_request_response.py` |
| `Create5ErrorBody` | `beehiiv/errors/create5_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.data_deletion.index11

- **Route**: `GET /publications/{publicationId}/data_privacy/deletion_requests`
- **Server**: `default`
- **Signature**: `def index11(publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `DataDeletionRequestIndexResponse`
- **Returns (raw)**: `ApiResult[DataDeletionRequestIndexResponse, Index11ErrorBody]`
- **Error**: `Index11ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataDeletionRequestIndexResponse` | `beehiiv/models/data_deletion_request_index_response.py` |
| `Index11ErrorBody` | `beehiiv/errors/index11_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.data_deletion.show8

- **Route**: `GET /publications/{publicationId}/data_privacy/deletion_requests/{id}`
- **Server**: `default`
- **Signature**: `def show8(publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `id_`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `DataDeletionRequestResponse`
- **Returns (raw)**: `ApiResult[DataDeletionRequestResponse, Show8ErrorBody]`
- **Error**: `Show8ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DataDeletionRequestResponse` | `beehiiv/models/data_deletion_request_response.py` |
| `Show8ErrorBody` | `beehiiv/errors/show8_error.py` |
| `Error` | `beehiiv/models/error.py` |

