<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `src/resources/reports.ts` · 21 operations · Request and error types: namespace `Reports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1ReportsByIdOrSlugCommentsByCommentId

- **Signature**: `deleteApiV1ReportsByIdOrSlugCommentsByCommentId(request: Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsCommentsResponse2, Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError>`
- **Wire**: `DELETE /api/v1/reports/{idOrSlug}/comments/{commentId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsCommentsResponse2`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `commentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsCommentsResponse2` | `apiV1ReportsCommentsResponse2Schema` | `src/models/api-v1-reports-comments-response2.ts` |

### deleteApiV1ReportsByIdOrSlugDataByName

- **Signature**: `deleteApiV1ReportsByIdOrSlugDataByName(request: Reports.DeleteApiV1ReportsByIdOrSlugDataByNameRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /api/v1/reports/{idOrSlug}/data/{name}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.DeleteApiV1ReportsByIdOrSlugDataByNameRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |

### deleteApiV1ReportsByIdOrSlugShare

- **Signature**: `deleteApiV1ReportsByIdOrSlugShare(request: Reports.DeleteApiV1ReportsByIdOrSlugShareRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsShareResponse1, ApiError>`
- **Wire**: `DELETE /api/v1/reports/{idOrSlug}/share`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsShareResponse1`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.DeleteApiV1ReportsByIdOrSlugShareRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ReportsShareRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsShareRequest1` | `apiV1ReportsShareRequest1Schema` | `src/models/api-v1-reports-share-request1.ts` |
| `ApiV1ReportsShareResponse1` | `apiV1ReportsShareResponse1Schema` | `src/models/api-v1-reports-share-response1.ts` |

### getApiV1Reports

- **Signature**: `getApiV1Reports(request?: Reports.GetApiV1ReportsRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsResponse, ApiError>`
- **Wire**: `GET /api/v1/reports`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ReportsResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.GetApiV1ReportsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsResponse` | `apiV1ReportsResponseSchema` | `src/models/api-v1-reports-response.ts` |

### getApiV1ReportsByIdOrSlug

- **Signature**: `getApiV1ReportsByIdOrSlug(request: Reports.GetApiV1ReportsByIdOrSlugRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsResponse4, ApiError>`
- **Wire**: `GET /api/v1/reports/{idOrSlug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ReportsResponse4`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.GetApiV1ReportsByIdOrSlugRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsResponse4` | `apiV1ReportsResponse4Schema` | `src/models/api-v1-reports-response4.ts` |

### getApiV1ReportsByIdOrSlugAnalytics

- **Signature**: `getApiV1ReportsByIdOrSlugAnalytics(request: Reports.GetApiV1ReportsByIdOrSlugAnalyticsRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsAnalyticsResponse, Reports.GetApiV1ReportsByIdOrSlugAnalyticsError>`
- **Wire**: `GET /api/v1/reports/{idOrSlug}/analytics`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ReportsAnalyticsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reports.GetApiV1ReportsByIdOrSlugAnalyticsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetApiV1ReportsByIdOrSlugAnalyticsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsAnalyticsResponse` | `apiV1ReportsAnalyticsResponseSchema` | `src/models/api-v1-reports-analytics-response.ts` |

### getApiV1ReportsByIdOrSlugComments

- **Signature**: `getApiV1ReportsByIdOrSlugComments(request: Reports.GetApiV1ReportsByIdOrSlugCommentsRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsCommentsResponse, ApiError>`
- **Wire**: `GET /api/v1/reports/{idOrSlug}/comments`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ReportsCommentsResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.GetApiV1ReportsByIdOrSlugCommentsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `status` | `query` | `Status12` | no |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status12` | `status12Schema` | `src/models/status12.ts` |
| `ApiV1ReportsCommentsResponse` | `apiV1ReportsCommentsResponseSchema` | `src/models/api-v1-reports-comments-response.ts` |

### getApiV1ReportsByIdOrSlugData

- **Signature**: `getApiV1ReportsByIdOrSlugData(request: Reports.GetApiV1ReportsByIdOrSlugDataRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsDataResponse, ApiError>`
- **Wire**: `GET /api/v1/reports/{idOrSlug}/data`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ReportsDataResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.GetApiV1ReportsByIdOrSlugDataRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsDataResponse` | `apiV1ReportsDataResponseSchema` | `src/models/api-v1-reports-data-response.ts` |

### getApiV1ReportsByIdOrSlugEvidence

- **Signature**: `getApiV1ReportsByIdOrSlugEvidence(request: Reports.GetApiV1ReportsByIdOrSlugEvidenceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Reports.GetApiV1ReportsByIdOrSlugEvidenceError>`
- **Wire**: `GET /api/v1/reports/{idOrSlug}/evidence`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reports.GetApiV1ReportsByIdOrSlugEvidenceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.GetApiV1ReportsByIdOrSlugEvidenceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `format` | `query` | `Format` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |

### getApiV1ReportsByIdOrSlugVersions

- **Signature**: `getApiV1ReportsByIdOrSlugVersions(request: Reports.GetApiV1ReportsByIdOrSlugVersionsRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsVersionsResponse2, ApiError>`
- **Wire**: `GET /api/v1/reports/{idOrSlug}/versions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ReportsVersionsResponse2`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.GetApiV1ReportsByIdOrSlugVersionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsVersionsResponse2` | `apiV1ReportsVersionsResponse2Schema` | `src/models/api-v1-reports-versions-response2.ts` |

### patchApiV1ReportsByIdOrSlug

- **Signature**: `patchApiV1ReportsByIdOrSlug(request: Reports.PatchApiV1ReportsByIdOrSlugRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsResponse3, ApiError>`
- **Wire**: `PATCH /api/v1/reports/{idOrSlug}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsResponse3`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.PatchApiV1ReportsByIdOrSlugRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ReportsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsRequest1` | `apiV1ReportsRequest1Schema` | `src/models/api-v1-reports-request1.ts` |
| `ApiV1ReportsResponse3` | `apiV1ReportsResponse3Schema` | `src/models/api-v1-reports-response3.ts` |

### postApiV1Reports

- **Signature**: `postApiV1Reports(request?: Reports.PostApiV1ReportsRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsResponse1, ApiError>`
- **Wire**: `POST /api/v1/reports`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsResponse1`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.PostApiV1ReportsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ReportsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsRequest` | `apiV1ReportsRequestSchema` | `src/models/api-v1-reports-request.ts` |
| `ApiV1ReportsResponse1` | `apiV1ReportsResponse1Schema` | `src/models/api-v1-reports-response1.ts` |

### postApiV1ReportsByIdOrSlugArchive

- **Signature**: `postApiV1ReportsByIdOrSlugArchive(request: Reports.PostApiV1ReportsByIdOrSlugArchiveRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsArchiveResponse, ApiError>`
- **Wire**: `POST /api/v1/reports/{idOrSlug}/archive`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsArchiveResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.PostApiV1ReportsByIdOrSlugArchiveRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ReportsArchiveRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsArchiveRequest` | `apiV1ReportsArchiveRequestSchema` | `src/models/api-v1-reports-archive-request.ts` |
| `ApiV1ReportsArchiveResponse` | `apiV1ReportsArchiveResponseSchema` | `src/models/api-v1-reports-archive-response.ts` |

### postApiV1ReportsByIdOrSlugComments

- **Signature**: `postApiV1ReportsByIdOrSlugComments(request: Reports.PostApiV1ReportsByIdOrSlugCommentsRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsCommentsResponse1, Reports.PostApiV1ReportsByIdOrSlugCommentsError>`
- **Wire**: `POST /api/v1/reports/{idOrSlug}/comments`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsCommentsResponse1`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reports.PostApiV1ReportsByIdOrSlugCommentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.PostApiV1ReportsByIdOrSlugCommentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ReportsCommentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsCommentsRequest` | `apiV1ReportsCommentsRequestSchema` | `src/models/api-v1-reports-comments-request.ts` |
| `ApiV1ReportsCommentsResponse1` | `apiV1ReportsCommentsResponse1Schema` | `src/models/api-v1-reports-comments-response1.ts` |

### postApiV1ReportsByIdOrSlugCopy

- **Signature**: `postApiV1ReportsByIdOrSlugCopy(request: Reports.PostApiV1ReportsByIdOrSlugCopyRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsCopyResponse, Reports.PostApiV1ReportsByIdOrSlugCopyError>`
- **Wire**: `POST /api/v1/reports/{idOrSlug}/copy`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsCopyResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reports.PostApiV1ReportsByIdOrSlugCopyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.PostApiV1ReportsByIdOrSlugCopyRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ReportsCopyRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsCopyRequest` | `apiV1ReportsCopyRequestSchema` | `src/models/api-v1-reports-copy-request.ts` |
| `ApiV1ReportsCopyResponse` | `apiV1ReportsCopyResponseSchema` | `src/models/api-v1-reports-copy-response.ts` |

### postApiV1ReportsByIdOrSlugRevisionBriefs

- **Signature**: `postApiV1ReportsByIdOrSlugRevisionBriefs(request: Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsRevisionBriefsResponse, Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsError>`
- **Wire**: `POST /api/v1/reports/{idOrSlug}/revision-briefs`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsRevisionBriefsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.PostApiV1ReportsByIdOrSlugRevisionBriefsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ReportsRevisionBriefsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsRevisionBriefsRequest` | `apiV1ReportsRevisionBriefsRequestSchema` | `src/models/api-v1-reports-revision-briefs-request.ts` |
| `ApiV1ReportsRevisionBriefsResponse` | `apiV1ReportsRevisionBriefsResponseSchema` | `src/models/api-v1-reports-revision-briefs-response.ts` |

### postApiV1ReportsByIdOrSlugRollback

- **Signature**: `postApiV1ReportsByIdOrSlugRollback(request: Reports.PostApiV1ReportsByIdOrSlugRollbackRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsRollbackResponse, Reports.PostApiV1ReportsByIdOrSlugRollbackError>`
- **Wire**: `POST /api/v1/reports/{idOrSlug}/rollback`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsRollbackResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reports.PostApiV1ReportsByIdOrSlugRollbackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.PostApiV1ReportsByIdOrSlugRollbackRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ReportsRollbackRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsRollbackRequest` | `apiV1ReportsRollbackRequestSchema` | `src/models/api-v1-reports-rollback-request.ts` |
| `ApiV1ReportsRollbackResponse` | `apiV1ReportsRollbackResponseSchema` | `src/models/api-v1-reports-rollback-response.ts` |

### postApiV1ReportsByIdOrSlugSend

- **Signature**: `postApiV1ReportsByIdOrSlugSend(request: Reports.PostApiV1ReportsByIdOrSlugSendRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsSendResponse, Reports.PostApiV1ReportsByIdOrSlugSendError>`
- **Wire**: `POST /api/v1/reports/{idOrSlug}/send`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsSendResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reports.PostApiV1ReportsByIdOrSlugSendError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.PostApiV1ReportsByIdOrSlugSendRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ReportsSendRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsSendRequest` | `apiV1ReportsSendRequestSchema` | `src/models/api-v1-reports-send-request.ts` |
| `ApiV1ReportsSendResponse` | `apiV1ReportsSendResponseSchema` | `src/models/api-v1-reports-send-response.ts` |

### postApiV1ReportsByIdOrSlugShare

- **Signature**: `postApiV1ReportsByIdOrSlugShare(request: Reports.PostApiV1ReportsByIdOrSlugShareRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsShareResponse, ApiError>`
- **Wire**: `POST /api/v1/reports/{idOrSlug}/share`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsShareResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.PostApiV1ReportsByIdOrSlugShareRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ReportsShareRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsShareRequest` | `apiV1ReportsShareRequestSchema` | `src/models/api-v1-reports-share-request.ts` |
| `ApiV1ReportsShareResponse` | `apiV1ReportsShareResponseSchema` | `src/models/api-v1-reports-share-response.ts` |

### postApiV1ReportsByIdOrSlugVersions

- **Signature**: `postApiV1ReportsByIdOrSlugVersions(request: Reports.PostApiV1ReportsByIdOrSlugVersionsRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsVersionsResponse, Reports.PostApiV1ReportsByIdOrSlugVersionsError>`
- **Wire**: `POST /api/v1/reports/{idOrSlug}/versions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsVersionsResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reports.PostApiV1ReportsByIdOrSlugVersionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1ReportsVersions409Error1"` [409] `ApiV1ReportsVersions409Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.PostApiV1ReportsByIdOrSlugVersionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ReportsVersionsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsVersionsRequest` | `apiV1ReportsVersionsRequestSchema` | `src/models/api-v1-reports-versions-request.ts` |
| `ApiV1ReportsVersionsResponse` | `apiV1ReportsVersionsResponseSchema` | `src/models/api-v1-reports-versions-response.ts` |
| `ApiV1ReportsVersions409Error1` | `apiV1ReportsVersions409Error1Schema` | `src/models/api-v1-reports-versions409-error1.ts` |

### putApiV1ReportsByIdOrSlugDataByName

- **Signature**: `putApiV1ReportsByIdOrSlugDataByName(request: Reports.PutApiV1ReportsByIdOrSlugDataByNameRequest, options?: RequestOptions): ApiPromise<ApiV1ReportsDataResponse1, Reports.PutApiV1ReportsByIdOrSlugDataByNameError>`
- **Wire**: `PUT /api/v1/reports/{idOrSlug}/data/{name}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ReportsDataResponse1`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Reports.PutApiV1ReportsByIdOrSlugDataByNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.PutApiV1ReportsByIdOrSlugDataByNameRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `idOrSlug` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ReportsDataResponse1` | `apiV1ReportsDataResponse1Schema` | `src/models/api-v1-reports-data-response1.ts` |

