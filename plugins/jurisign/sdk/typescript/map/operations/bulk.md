<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bulk — operations

Accessor: `client.bulk` · Source: `src/resources/bulk.ts` · 13 operations · Request and error types: namespace `Bulk`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `juri-sign`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelBulkCampaign

- **Signature**: `cancelBulkCampaign(request: Bulk.CancelBulkCampaignRequest, options?: RequestOptions): ApiPromise<BulkCampaignsCancelResponse, Bulk.CancelBulkCampaignError>`
- **Wire**: `POST /bulk-campaigns/{id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkCampaignsCancelResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.CancelBulkCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"messageResponse3"` [422] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.CancelBulkCampaignRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCampaignsCancelResponse` | `bulkCampaignsCancelResponseSchema` | `src/models/bulk-campaigns-cancel-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### createBulkCampaign

- **Signature**: `createBulkCampaign(request: Bulk.CreateBulkCampaignRequest, options?: RequestOptions): ApiPromise<BulkCampaignsResponse1, Bulk.CreateBulkCampaignError>`
- **Wire**: `POST /bulk-campaigns`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkCampaignsResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.CreateBulkCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"validationError1"` [422] `ValidationError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.CreateBulkCampaignRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkCampaignsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCampaignsRequest` | `bulkCampaignsRequestSchema` | `src/models/bulk-campaigns-request.ts` |
| `BulkCampaignsResponse1` | `bulkCampaignsResponse1Schema` | `src/models/bulk-campaigns-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ValidationError1` | `validationError1Schema` | `src/models/validation-error1.ts` |

### createBulkTemplate

- **Signature**: `createBulkTemplate(request: Bulk.CreateBulkTemplateRequest, options?: RequestOptions): ApiPromise<BulkTemplatesResponse1, Bulk.CreateBulkTemplateError>`
- **Wire**: `POST /bulk-templates`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkTemplatesResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.CreateBulkTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"validationError1"` [422] `ValidationError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.CreateBulkTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkTemplatesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkTemplatesRequest` | `bulkTemplatesRequestSchema` | `src/models/bulk-templates-request.ts` |
| `BulkTemplatesResponse1` | `bulkTemplatesResponse1Schema` | `src/models/bulk-templates-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ValidationError1` | `validationError1Schema` | `src/models/validation-error1.ts` |

### deleteBulkCampaign

- **Signature**: `deleteBulkCampaign(request: Bulk.DeleteBulkCampaignRequest, options?: RequestOptions): ApiPromise<MessageResponse, Bulk.DeleteBulkCampaignError>`
- **Wire**: `DELETE /bulk-campaigns/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.DeleteBulkCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"messageResponse3"` [422] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.DeleteBulkCampaignRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### deleteBulkTemplate

- **Signature**: `deleteBulkTemplate(request: Bulk.DeleteBulkTemplateRequest, options?: RequestOptions): ApiPromise<MessageResponse, Bulk.DeleteBulkTemplateError>`
- **Wire**: `DELETE /bulk-templates/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.DeleteBulkTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"messageResponse3"` [422] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.DeleteBulkTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### exportBulkCampaignResults

- **Signature**: `exportBulkCampaignResults(request: Bulk.ExportBulkCampaignResultsRequest, options?: RequestOptions): ApiPromise<BulkCampaignsExportResponse, Bulk.ExportBulkCampaignResultsError>`
- **Wire**: `GET /bulk-campaigns/{id}/export`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkCampaignsExportResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.ExportBulkCampaignResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.ExportBulkCampaignResultsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCampaignsExportResponse` | `bulkCampaignsExportResponseSchema` | `src/models/bulk-campaigns-export-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### getBulkCampaign

- **Signature**: `getBulkCampaign(request: Bulk.GetBulkCampaignRequest, options?: RequestOptions): ApiPromise<BulkCampaignsResponse2, Bulk.GetBulkCampaignError>`
- **Wire**: `GET /bulk-campaigns/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkCampaignsResponse2`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.GetBulkCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.GetBulkCampaignRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCampaignsResponse2` | `bulkCampaignsResponse2Schema` | `src/models/bulk-campaigns-response2.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### getBulkTemplate

- **Signature**: `getBulkTemplate(request: Bulk.GetBulkTemplateRequest, options?: RequestOptions): ApiPromise<BulkTemplatesResponse1, Bulk.GetBulkTemplateError>`
- **Wire**: `GET /bulk-templates/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkTemplatesResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.GetBulkTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.GetBulkTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkTemplatesResponse1` | `bulkTemplatesResponse1Schema` | `src/models/bulk-templates-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### launchBulkCampaign

- **Signature**: `launchBulkCampaign(request: Bulk.LaunchBulkCampaignRequest, options?: RequestOptions): ApiPromise<BulkCampaignsLaunchResponse, Bulk.LaunchBulkCampaignError>`
- **Wire**: `POST /bulk-campaigns/{id}/launch`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkCampaignsLaunchResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.LaunchBulkCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"messageResponse3"` [422] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.LaunchBulkCampaignRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCampaignsLaunchResponse` | `bulkCampaignsLaunchResponseSchema` | `src/models/bulk-campaigns-launch-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### listBulkCampaigns

- **Signature**: `listBulkCampaigns(request?: Bulk.ListBulkCampaignsRequest, options?: RequestOptions): ApiPromise<BulkCampaignsResponse, Bulk.ListBulkCampaignsError>`
- **Wire**: `GET /bulk-campaigns`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkCampaignsResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.ListBulkCampaignsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.ListBulkCampaignsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `status` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCampaignsResponse` | `bulkCampaignsResponseSchema` | `src/models/bulk-campaigns-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### listBulkTemplates

- **Signature**: `listBulkTemplates(options?: RequestOptions): ApiPromise<BulkTemplatesResponse, Bulk.ListBulkTemplatesError>`
- **Wire**: `GET /bulk-templates`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BulkTemplatesResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.ListBulkTemplatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkTemplatesResponse` | `bulkTemplatesResponseSchema` | `src/models/bulk-templates-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### retryBulkCampaign

- **Signature**: `retryBulkCampaign(request: Bulk.RetryBulkCampaignRequest, options?: RequestOptions): ApiPromise<BulkCampaignsRetryResponse, Bulk.RetryBulkCampaignError>`
- **Wire**: `POST /bulk-campaigns/{id}/retry`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkCampaignsRetryResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.RetryBulkCampaignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"messageResponse3"` [422] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.RetryBulkCampaignRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCampaignsRetryResponse` | `bulkCampaignsRetryResponseSchema` | `src/models/bulk-campaigns-retry-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### updateBulkTemplate

- **Signature**: `updateBulkTemplate(request: Bulk.UpdateBulkTemplateRequest, options?: RequestOptions): ApiPromise<BulkTemplatesResponse1, Bulk.UpdateBulkTemplateError>`
- **Wire**: `PUT /bulk-templates/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkTemplatesResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Bulk.UpdateBulkTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bulk.UpdateBulkTemplateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `BulkTemplatesRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkTemplatesRequest1` | `bulkTemplatesRequest1Schema` | `src/models/bulk-templates-request1.ts` |
| `BulkTemplatesResponse1` | `bulkTemplatesResponse1Schema` | `src/models/bulk-templates-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

