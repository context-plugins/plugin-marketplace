<!-- Generated file — do not edit; regenerated with the SDK. -->

# Results — operations

Accessor: `client.results` · Source: `leadspace/apis/results.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.results.get_bulk_enrichment_results

- **Route**: `GET /v3/enrichment/results/{bulkId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_bulk_enrichment_results(bulk_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bulk_id`
- **Params**: `bulk_id` — path `bulkId`
- **Returns (parsed)**: `BulkResults`
- **Returns (raw)**: `ApiResult[BulkResults, GetBulkEnrichmentResultsErrorBody]`
- **Error**: `GetBulkEnrichmentResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [500] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `BulkResults` | `leadspace/models/bulk_results.py` |
| `GetBulkEnrichmentResultsErrorBody` | `leadspace/errors/get_bulk_enrichment_results_error.py` |
| `Error` | `leadspace/models/error.py` |

### client.results.get_discovery_results

- **Route**: `GET /v1/expansion/results/{bulkId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_discovery_results(bulk_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bulk_id`
- **Params**: `bulk_id` — path `bulkId`
- **Returns (parsed)**: `DiscoveryResults`
- **Returns (raw)**: `ApiResult[DiscoveryResults, GetDiscoveryResultsErrorBody]`
- **Error**: `GetDiscoveryResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [500] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `DiscoveryResults` | `leadspace/models/discovery_results.py` |
| `GetDiscoveryResultsErrorBody` | `leadspace/errors/get_discovery_results_error.py` |
| `Error` | `leadspace/models/error.py` |

### client.results.get_intent_results

- **Route**: `GET /v1/intent/results/{jobId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_intent_results(job_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `IntentResults`
- **Returns (raw)**: `ApiResult[IntentResults, GetIntentResultsErrorBody]`
- **Error**: `GetIntentResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `IntentResults` | `leadspace/models/intent_results.py` |
| `GetIntentResultsErrorBody` | `leadspace/errors/get_intent_results_error.py` |
| `Error` | `leadspace/models/error.py` |

