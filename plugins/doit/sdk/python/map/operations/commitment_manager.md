<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommitmentManager — operations

Accessor: `client.commitment_manager` · Source: `doi_t/apis/commitment_manager.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.commitment_manager.get_commitment

- **Route**: `GET /analytics/v1/commitment-manager/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_commitment(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `CommitmentExternal`
- **Returns (raw)**: `ApiResult[CommitmentExternal, GetCommitmentErrorBody]`
- **Error**: `GetCommitmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CommitmentExternal` | `doi_t/models/commitment_external.py` |
| `GetCommitmentErrorBody` | `doi_t/errors/get_commitment_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.commitment_manager.list_commitments

- **Route**: `GET /analytics/v1/commitment-manager`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_commitments(*, sort_by: SortByDoiTCommitmentManagerApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter`
- **Returns (parsed)**: `CommitmentExternalList`
- **Returns (raw)**: `ApiResult[CommitmentExternalList, ListCommitmentsErrorBody]`
- **Error**: `ListCommitmentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByDoiTCommitmentManagerApiOrStr` | `doi_t/models/enums/sort_by_doi_t_commitment_manager_api.py` |
| `SortOrderOrStr` | `doi_t/models/enums/sort_order.py` |
| `CommitmentExternalList` | `doi_t/models/commitment_external_list.py` |
| `ListCommitmentsErrorBody` | `doi_t/errors/list_commitments_error.py` |
| `Error` | `doi_t/models/error.py` |

