<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sources — operations

Accessor: `client.sources` · Source: `boomi/apis/sources.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sources.create_source

- **Route**: `POST /repositories/{repositoryId}/sources`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def create_source(repository_id: str, body: SourceInput | SourceInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repository_id`, `body`
- **Params**: `repository_id` — path `repositoryId` · `body` — JSON body
- **Returns (parsed)**: `SourceBoomiDataHubSourcesApi`
- **Returns (raw)**: `ApiResult[SourceBoomiDataHubSourcesApi, CreateSourceErrorBody]`
- **Error**: `CreateSourceErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SourceInput` | `boomi/models/source_input.py` |
| `SourceInputDict` | `boomi/models/source_input.py` |
| `SourceBoomiDataHubSourcesApi` | `boomi/models/source_boomi_data_hub_sources_api.py` |
| `CreateSourceErrorBody` | `boomi/errors/create_source_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

### client.sources.list_sources

- **Route**: `GET /repositories/{repositoryId}/sources`
- **Auth**: `basic_auth` OR `bearer_auth`
- **Server**: `default_boomi_data_hub_golden_records_api`
- **Signature**: `def list_sources(repository_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repository_id`
- **Params**: `repository_id` — path `repositoryId`
- **Returns (parsed)**: `RepositoriesSourcesResponse`
- **Returns (raw)**: `ApiResult[RepositoriesSourcesResponse, ListSourcesErrorBody]`
- **Error**: `ListSourcesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseBoomiDataHubGoldenRecordsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RepositoriesSourcesResponse` | `boomi/models/repositories_sources_response.py` |
| `ListSourcesErrorBody` | `boomi/errors/list_sources_error.py` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `boomi/models/error_response_boomi_data_hub_golden_records_api.py` |

