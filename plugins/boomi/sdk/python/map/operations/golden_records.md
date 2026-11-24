<!-- Generated file — do not edit; regenerated with the SDK. -->

# GoldenRecords — operations

Accessor: `client.golden_records` · Source: `boomi/apis/golden_records.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.golden_records.list_golden_records

- **Route**: `GET /repositories/{repositoryId}/universes/{universeId}/records`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def list_golden_records(repository_id: str, universe_id: str, *, page_size: int | None = 100, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repository_id`, `universe_id`
- **Params**: `repository_id` — path `repositoryId` · `universe_id` — path `universeId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `RepositoriesUniversesRecordsResponse`
- **Returns (raw)**: `ApiResult[RepositoriesUniversesRecordsResponse, ListGoldenRecordsErrorBody]`
- **Error**: `ListGoldenRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoriesUniversesRecordsResponse` | `boomi/models/repositories_universes_records_response.py` |
| `ListGoldenRecordsErrorBody` | `boomi/errors/list_golden_records_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

