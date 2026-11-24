<!-- Generated file — do not edit; regenerated with the SDK. -->

# Responses — operations

Accessor: `client.responses` · Source: `src/resources/responses.ts` · 7 operations · Request and error types: namespace `Responses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `fillo`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteResponse

- **Signature**: `deleteResponse(request: Responses.DeleteResponseRequest, options?: RequestOptions): ApiPromise<ApiV1ManageResponsesResponse, Responses.DeleteResponseError>`
- **Wire**: `DELETE /api/v1/manage/responses/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageResponsesResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Responses.DeleteResponseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Responses.DeleteResponseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageResponsesResponse` | `apiV1ManageResponsesResponseSchema` | `src/models/api-v1-manage-responses-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### exportFormResponses

- **Signature**: `exportFormResponses(request: Responses.ExportFormResponsesRequest, options?: RequestOptions): ApiPromise<string, Responses.ExportFormResponsesError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/responses/export`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `FilloError` with `kind: "api"`, an instance of `Responses.ExportFormResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Responses.ExportFormResponsesRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `range` | `query` | `Range` | no |
| `q` | `query` | `string` | no |
| `source` | `query` | `string` | no |
| `respondent` | `query` | `string` | no |
| `where` | `query` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Range` | `rangeSchema` | `src/models/range.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getResponse

- **Signature**: `getResponse(request: Responses.GetResponseRequest, options?: RequestOptions): ApiPromise<ResponseDetail, Responses.GetResponseError>`
- **Wire**: `GET /api/v1/manage/responses/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResponseDetail`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Responses.GetResponseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Responses.GetResponseRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseDetail` | `responseDetailSchema` | `src/models/response-detail.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listFormDrafts

- **Signature**: `listFormDrafts(request: Responses.ListFormDraftsRequest, options?: RequestOptions): ApiPromise<FormDrafts, Responses.ListFormDraftsError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/drafts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FormDrafts`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Responses.ListFormDraftsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Responses.ListFormDraftsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FormDrafts` | `formDraftsSchema` | `src/models/form-drafts.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listFormResponses

- **Signature**: `listFormResponses(request: Responses.ListFormResponsesRequest, options?: RequestOptions): ApiPromise<ResponsePage, Responses.ListFormResponsesError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/responses`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResponsePage`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Responses.ListFormResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Responses.ListFormResponsesRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `form` | `path` | `string` | yes | — |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |
| `range` | `query` | `Range` | no | — |
| `q` | `query` | `string` | no | — |
| `source` | `query` | `string` | no | — |
| `respondent` | `query` | `string` | no | — |
| `where` | `query` | `string[]` | no | — |
| `held` | `query` | `Held` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Range` | `rangeSchema` | `src/models/range.ts` |
| `Held` | `heldSchema` | `src/models/held.ts` |
| `ResponsePage` | `responsePageSchema` | `src/models/response-page.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### releaseHeldResponses

- **Signature**: `releaseHeldResponses(request: Responses.ReleaseHeldResponsesRequest, options?: RequestOptions): ApiPromise<ApiV1ManageFormsResponsesReleaseResponse, Responses.ReleaseHeldResponsesError>`
- **Wire**: `POST /api/v1/manage/forms/{form}/responses/release`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ManageFormsResponsesReleaseResponse`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Responses.ReleaseHeldResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [413] `Error` · `"error6"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Responses.ReleaseHeldResponsesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `form` | `path` | `string` | yes |
| `body` | `body` | `ApiV1ManageFormsResponsesReleaseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ManageFormsResponsesReleaseRequest` | `apiV1ManageFormsResponsesReleaseRequestSchema` | `src/models/api-v1-manage-forms-responses-release-request.ts` |
| `ApiV1ManageFormsResponsesReleaseResponse` | `apiV1ManageFormsResponsesReleaseResponseSchema` | `src/models/api-v1-manage-forms-responses-release-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### summarizeFormResponses

- **Signature**: `summarizeFormResponses(request: Responses.SummarizeFormResponsesRequest, options?: RequestOptions): ApiPromise<ResponseSummary, Responses.SummarizeFormResponsesError>`
- **Wire**: `GET /api/v1/manage/forms/{form}/responses/summary`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResponseSummary`
- **Error**: `FilloError` with `kind: "api"`, an instance of `Responses.SummarizeFormResponsesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Responses.SummarizeFormResponsesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `form` | `path` | `string` | yes | — |
| `exclude` | `query` | `string` | no | — |
| `recent` | `query` | `number` | no | `5` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseSummary` | `responseSummarySchema` | `src/models/response-summary.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

