<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.custom_fields` · Source: `beehiiv/apis/custom_fields.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.custom_fields.create4

- **Route**: `POST /publications/{publicationId}/custom_fields`
- **Server**: `default`
- **Signature**: `def create4(publication_id: str, authorization: str, *, body: PublicationsCustomFieldsRequest | PublicationsCustomFieldsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomFieldResponse`
- **Returns (raw)**: `ApiResult[CustomFieldResponse, Create4ErrorBody]`
- **Error**: `Create4ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsCustomFieldsRequest` | `beehiiv/models/publications_custom_fields_request.py` |
| `PublicationsCustomFieldsRequestDict` | `beehiiv/models/publications_custom_fields_request.py` |
| `CustomFieldResponse` | `beehiiv/models/custom_field_response.py` |
| `Create4ErrorBody` | `beehiiv/errors/create4_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.custom_fields.delete

- **Route**: `DELETE /publications/{publicationId}/custom_fields/{id}`
- **Server**: `default`
- **Signature**: `def delete(publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `id_`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomFieldsDeleteResponse`
- **Returns (raw)**: `ApiResult[CustomFieldsDeleteResponse, DeleteErrorBody]`
- **Error**: `DeleteErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomFieldsDeleteResponse` | `beehiiv/models/custom_fields_delete_response.py` |
| `DeleteErrorBody` | `beehiiv/errors/delete_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.custom_fields.index10

- **Route**: `GET /publications/{publicationId}/custom_fields`
- **Server**: `default`
- **Signature**: `def index10(publication_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomFieldIndexResponse`
- **Returns (raw)**: `ApiResult[CustomFieldIndexResponse, Index10ErrorBody]`
- **Error**: `Index10ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomFieldIndexResponse` | `beehiiv/models/custom_field_index_response.py` |
| `Index10ErrorBody` | `beehiiv/errors/index10_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.custom_fields.patch2

- **Route**: `PATCH /publications/{publicationId}/custom_fields/{id}`
- **Server**: `default`
- **Signature**: `def patch2(publication_id: str, id_: str, authorization: str, *, body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `id_`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomFieldsPatchResponse`
- **Returns (raw)**: `ApiResult[CustomFieldsPatchResponse, Patch2ErrorBody]`
- **Error**: `Patch2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsCustomFieldsRequest1` | `beehiiv/models/publications_custom_fields_request1.py` |
| `PublicationsCustomFieldsRequest1Dict` | `beehiiv/models/publications_custom_fields_request1.py` |
| `CustomFieldsPatchResponse` | `beehiiv/models/custom_fields_patch_response.py` |
| `Patch2ErrorBody` | `beehiiv/errors/patch2_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.custom_fields.put2

- **Route**: `PUT /publications/{publicationId}/custom_fields/{id}`
- **Server**: `default`
- **Signature**: `def put2(publication_id: str, id_: str, authorization: str, *, body: PublicationsCustomFieldsRequest1 | PublicationsCustomFieldsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `id_`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CustomFieldResponse`
- **Returns (raw)**: `ApiResult[CustomFieldResponse, Put2ErrorBody]`
- **Error**: `Put2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicationsCustomFieldsRequest1` | `beehiiv/models/publications_custom_fields_request1.py` |
| `PublicationsCustomFieldsRequest1Dict` | `beehiiv/models/publications_custom_fields_request1.py` |
| `CustomFieldResponse` | `beehiiv/models/custom_field_response.py` |
| `Put2ErrorBody` | `beehiiv/errors/put2_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.custom_fields.show7

- **Route**: `GET /publications/{publicationId}/custom_fields/{id}`
- **Server**: `default`
- **Signature**: `def show7(publication_id: str, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `id_`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `id_` — path `id` · `authorization` — header `Authorization`
- **Returns (parsed)**: `CustomFieldResponse`
- **Returns (raw)**: `ApiResult[CustomFieldResponse, Show7ErrorBody]`
- **Error**: `Show7ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CustomFieldResponse` | `beehiiv/models/custom_field_response.py` |
| `Show7ErrorBody` | `beehiiv/errors/show7_error.py` |
| `Error` | `beehiiv/models/error.py` |

