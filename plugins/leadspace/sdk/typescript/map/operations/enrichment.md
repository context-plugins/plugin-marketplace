<!-- Generated file — do not edit; regenerated with the SDK. -->

# Enrichment — operations

Accessor: `client.enrichment` · Source: `src/resources/enrichment.ts` · 2 operations · Request and error types: namespace `Enrichment`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `leadspace`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### enrichBulkRecords

- **Signature**: `enrichBulkRecords(request: Enrichment.EnrichBulkRecordsRequest, options?: RequestOptions): ApiPromise<BulkAccepted, Enrichment.EnrichBulkRecordsError>`
- **Wire**: `POST /enrichment/enrich/bulk`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkAccepted`
- **Error**: `LeadspaceError` with `kind: "api"`, an instance of `Enrichment.EnrichBulkRecordsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorLeadspaceApiV4EnrichmentApi"` [400] `ErrorLeadspaceApiV4EnrichmentApi` · `"error401"` [401] no body · `"errorLeadspaceApiV4EnrichmentApi2"` [427] `ErrorLeadspaceApiV4EnrichmentApi` · `"errorLeadspaceApiV4EnrichmentApi3"` [500] `ErrorLeadspaceApiV4EnrichmentApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Enrichment.EnrichBulkRecordsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkEnrichmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkEnrichmentRequest` | `bulkEnrichmentRequestSchema` | `src/models/bulk-enrichment-request.ts` |
| `BulkAccepted` | `bulkAcceptedSchema` | `src/models/bulk-accepted.ts` |
| `ErrorLeadspaceApiV4EnrichmentApi` | `errorLeadspaceApiV4EnrichmentApiSchema` | `src/models/error-leadspace-api-v4-enrichment-api.ts` |

### enrichSingleRecord

- **Signature**: `enrichSingleRecord(request: Enrichment.EnrichSingleRecordRequest, options?: RequestOptions): ApiPromise<EnrichmentResult, Enrichment.EnrichSingleRecordError>`
- **Wire**: `POST /enrichment/enrich/single`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnrichmentResult`
- **Error**: `LeadspaceError` with `kind: "api"`, an instance of `Enrichment.EnrichSingleRecordError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorLeadspaceApiV4EnrichmentApi"` [400] `ErrorLeadspaceApiV4EnrichmentApi` · `"error401"` [401] no body · `"error405"` [405] no body · `"error415"` [415] no body · `"errorLeadspaceApiV4EnrichmentApi2"` [427] `ErrorLeadspaceApiV4EnrichmentApi` · `"error429"` [429] no body · `"errorLeadspaceApiV4EnrichmentApi3"` [500] `ErrorLeadspaceApiV4EnrichmentApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Enrichment.EnrichSingleRecordRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SingleEnrichmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SingleEnrichmentRequest` | `singleEnrichmentRequestSchema` | `src/models/single-enrichment-request.ts` |
| `EnrichmentResult` | `enrichmentResultSchema` | `src/models/enrichment-result.ts` |
| `ErrorLeadspaceApiV4EnrichmentApi` | `errorLeadspaceApiV4EnrichmentApiSchema` | `src/models/error-leadspace-api-v4-enrichment-api.ts` |

