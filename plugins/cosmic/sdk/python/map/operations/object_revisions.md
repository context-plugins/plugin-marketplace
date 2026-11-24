<!-- Generated file — do not edit; regenerated with the SDK. -->

# ObjectRevisions — operations

Accessor: `client.object_revisions` · Source: `cosmic/apis/object_revisions.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.object_revisions.create_object_revision

- **Route**: `POST /buckets/{slug}/objects/{object_id}/revisions`
- **Auth**: `write_key`
- **Signature**: `def create_object_revision(slug: str, object_id: str, body: RevisionCreate | RevisionCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `object_id`, `body`
- **Params**: `slug` — path · `object_id` — path · `body` — JSON body
- **Returns (parsed)**: `RevisionResponse`
- **Returns (raw)**: `ApiResult[RevisionResponse, CreateObjectRevisionErrorBody]`
- **Error**: `CreateObjectRevisionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RevisionCreate` | `cosmic/models/revision_create.py` |
| `RevisionCreateDict` | `cosmic/models/revision_create.py` |
| `RevisionResponse` | `cosmic/models/revision_response.py` |
| `CreateObjectRevisionErrorBody` | `cosmic/errors/create_object_revision_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.object_revisions.get_object_revision

- **Route**: `GET /buckets/{slug}/objects/{object_id}/revisions/{revision_id}`
- **Auth**: `read_key`
- **Signature**: `def get_object_revision(slug: str, object_id: str, revision_id: str, *, read_key: str | None = None, preview_token: str | None = None, props: str | None = None, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `object_id`, `revision_id`
- **Params**: `slug` — path · `object_id` — path · `revision_id` — path · `read_key` — query · `preview_token` — query · `props` — query · `use_cache` — query `useCache` · `pretty` — query
- **Returns (parsed)**: `RevisionResponse`
- **Returns (raw)**: `ApiResult[RevisionResponse, GetObjectRevisionErrorBody]`
- **Error**: `GetObjectRevisionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RevisionResponse` | `cosmic/models/revision_response.py` |
| `GetObjectRevisionErrorBody` | `cosmic/errors/get_object_revision_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.object_revisions.list_object_revisions

- **Route**: `GET /buckets/{slug}/objects/{object_id}/revisions`
- **Auth**: `read_key`
- **Signature**: `def list_object_revisions(slug: str, object_id: str, *, read_key: str | None = None, preview_token: str | None = None, props: str | None = None, sort: SortCosmicRestApiV3ObjectRevisionsApiOrStr | None = SortCosmicRestApiV3ObjectRevisionsApi.CREATED_AT2, limit: int | None = 1000, skip: int | None = 0, use_cache: bool | None = True, pretty: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `slug`, `object_id`
- **Params**: `slug` — path · `object_id` — path · `read_key` — query · `preview_token` — query · `props` — query · `sort` — query · `limit` — query · `skip` — query · `use_cache` — query `useCache` · `pretty` — query
- **Returns (parsed)**: `RevisionListResponse`
- **Returns (raw)**: `ApiResult[RevisionListResponse, ListObjectRevisionsErrorBody]`
- **Error**: `ListObjectRevisionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortCosmicRestApiV3ObjectRevisionsApiOrStr` | `cosmic/models/enums/sort_cosmic_rest_api_v3_object_revisions_api.py` |
| `RevisionListResponse` | `cosmic/models/revision_list_response.py` |
| `ListObjectRevisionsErrorBody` | `cosmic/errors/list_object_revisions_error.py` |
| `Error` | `cosmic/models/error.py` |

