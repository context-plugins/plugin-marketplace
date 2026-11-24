<!-- Generated file — do not edit; regenerated with the SDK. -->

# Results — operations

Accessor: `client.results` · Source: `src/resources/results.ts` · 3 operations · Request and error types: namespace `Results`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `leadspace`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBulkEnrichmentResults

- **Signature**: `getBulkEnrichmentResults(request: Results.GetBulkEnrichmentResultsRequest, options?: RequestOptions): ApiPromise<BulkResults, Results.GetBulkEnrichmentResultsError>`
- **Wire**: `GET /v3/enrichment/results/{bulkId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkResults`
- **Error**: `LeadspaceError` with `kind: "api"`, an instance of `Results.GetBulkEnrichmentResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Results.GetBulkEnrichmentResultsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bulkId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkResults` | `bulkResultsSchema` | `src/models/bulk-results.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getDiscoveryResults

- **Signature**: `getDiscoveryResults(request: Results.GetDiscoveryResultsRequest, options?: RequestOptions): ApiPromise<DiscoveryResults, Results.GetDiscoveryResultsError>`
- **Wire**: `GET /v1/expansion/results/{bulkId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DiscoveryResults`
- **Error**: `LeadspaceError` with `kind: "api"`, an instance of `Results.GetDiscoveryResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Results.GetDiscoveryResultsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bulkId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiscoveryResults` | `discoveryResultsSchema` | `src/models/discovery-results.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getIntentResults

- **Signature**: `getIntentResults(request: Results.GetIntentResultsRequest, options?: RequestOptions): ApiPromise<IntentResults, Results.GetIntentResultsError>`
- **Wire**: `GET /v1/intent/results/{jobId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IntentResults`
- **Error**: `LeadspaceError` with `kind: "api"`, an instance of `Results.GetIntentResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Results.GetIntentResultsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IntentResults` | `intentResultsSchema` | `src/models/intent-results.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

