<!-- Generated file — do not edit; regenerated with the SDK. -->

# Enrichment — operations

Accessor: `client.enrichment` · Source: `leadspace/apis/enrichment.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.enrichment.enrich_bulk_records

- **Route**: `POST /enrichment/enrich/bulk`
- **Auth**: `bearer_auth`
- **Signature**: `def enrich_bulk_records(body: BulkEnrichmentRequest | BulkEnrichmentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BulkAccepted`
- **Returns (raw)**: `ApiResult[BulkAccepted, EnrichBulkRecordsErrorBody]`
- **Error**: `EnrichBulkRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorLeadspaceApiV4EnrichmentApi` [400, 427, 500] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `BulkEnrichmentRequest` | `leadspace/models/bulk_enrichment_request.py` |
| `BulkEnrichmentRequestDict` | `leadspace/models/bulk_enrichment_request.py` |
| `BulkAccepted` | `leadspace/models/bulk_accepted.py` |
| `EnrichBulkRecordsErrorBody` | `leadspace/errors/enrich_bulk_records_error.py` |
| `ErrorLeadspaceApiV4EnrichmentApi` | `leadspace/models/error_leadspace_api_v4_enrichment_api.py` |

### client.enrichment.enrich_single_record

- **Route**: `POST /enrichment/enrich/single`
- **Auth**: `bearer_auth`
- **Signature**: `def enrich_single_record(body: SingleEnrichmentRequest | SingleEnrichmentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EnrichmentResult`
- **Returns (raw)**: `ApiResult[EnrichmentResult, EnrichSingleRecordErrorBody]`
- **Error**: `EnrichSingleRecordErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorLeadspaceApiV4EnrichmentApi` [400, 427, 500] · `RawError` [401, 405, 415, 429, anything unmapped]

| Type | Source |
| --- | --- |
| `SingleEnrichmentRequest` | `leadspace/models/single_enrichment_request.py` |
| `SingleEnrichmentRequestDict` | `leadspace/models/single_enrichment_request.py` |
| `EnrichmentResult` | `leadspace/models/enrichment_result.py` |
| `EnrichSingleRecordErrorBody` | `leadspace/errors/enrich_single_record_error.py` |
| `ErrorLeadspaceApiV4EnrichmentApi` | `leadspace/models/error_leadspace_api_v4_enrichment_api.py` |

