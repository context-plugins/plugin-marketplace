<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostCsv — operations

Accessor: `client.postCsv` · Source: `src/resources/post-csv.ts` · 5 operations · Request and error types: namespace `PostCsv`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bundle-social`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postCsvCreate

- **Signature**: `postCsvCreate(request?: PostCsv.PostCsvCreateRequest, options?: RequestOptions): ApiPromise<ApiV1PostCsvImportResponse, PostCsv.PostCsvCreateError>`
- **Wire**: `POST /api/v1/post-csv-import/`
- **Auth**: `apiKeyAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1PostCsvImportResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostCsv.PostCsvCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostCsvImport400Error1"` [400] `ApiV1PostCsvImport400Error1` · `"apiV1PostCsvImport401Error1"` [401] `ApiV1PostCsvImport401Error1` · `"apiV1PostCsvImport403Error1"` [403] `ApiV1PostCsvImport403Error1` · `"apiV1PostCsvImport404Error1"` [404] `ApiV1PostCsvImport404Error1` · `"apiV1PostCsvImport429Error1"` [429] `ApiV1PostCsvImport429Error1` · `"apiV1PostCsvImport500Error1"` [500] `ApiV1PostCsvImport500Error1` · `"apiV1PostCsvImport502Error1"` [502] `ApiV1PostCsvImport502Error1` · `"apiV1PostCsvImport503Error1"` [503] `ApiV1PostCsvImport503Error1` · `"apiV1PostCsvImport504Error1"` [504] `ApiV1PostCsvImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostCsv.PostCsvCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `file` | `form` | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostCsvImportResponse` | `apiV1PostCsvImportResponseSchema` | `src/models/api-v1-post-csv-import-response.ts` |
| `ApiV1PostCsvImport400Error1` | `apiV1PostCsvImport400Error1Schema` | `src/models/api-v1-post-csv-import400-error1.ts` |
| `ApiV1PostCsvImport401Error1` | `apiV1PostCsvImport401Error1Schema` | `src/models/api-v1-post-csv-import401-error1.ts` |
| `ApiV1PostCsvImport403Error1` | `apiV1PostCsvImport403Error1Schema` | `src/models/api-v1-post-csv-import403-error1.ts` |
| `ApiV1PostCsvImport404Error1` | `apiV1PostCsvImport404Error1Schema` | `src/models/api-v1-post-csv-import404-error1.ts` |
| `ApiV1PostCsvImport429Error1` | `apiV1PostCsvImport429Error1Schema` | `src/models/api-v1-post-csv-import429-error1.ts` |
| `ApiV1PostCsvImport500Error1` | `apiV1PostCsvImport500Error1Schema` | `src/models/api-v1-post-csv-import500-error1.ts` |
| `ApiV1PostCsvImport502Error1` | `apiV1PostCsvImport502Error1Schema` | `src/models/api-v1-post-csv-import502-error1.ts` |
| `ApiV1PostCsvImport503Error1` | `apiV1PostCsvImport503Error1Schema` | `src/models/api-v1-post-csv-import503-error1.ts` |
| `ApiV1PostCsvImport504Error1` | `apiV1PostCsvImport504Error1Schema` | `src/models/api-v1-post-csv-import504-error1.ts` |

### postCsvGetById

- **Signature**: `postCsvGetById(request: PostCsv.PostCsvGetByIdRequest, options?: RequestOptions): ApiPromise<ApiV1PostCsvImportResponse, PostCsv.PostCsvGetByIdError>`
- **Wire**: `GET /api/v1/post-csv-import/{importId}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostCsvImportResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostCsv.PostCsvGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostCsvImport400Error1"` [400] `ApiV1PostCsvImport400Error1` · `"apiV1PostCsvImport401Error1"` [401] `ApiV1PostCsvImport401Error1` · `"apiV1PostCsvImport403Error1"` [403] `ApiV1PostCsvImport403Error1` · `"apiV1PostCsvImport404Error1"` [404] `ApiV1PostCsvImport404Error1` · `"apiV1PostCsvImport429Error1"` [429] `ApiV1PostCsvImport429Error1` · `"apiV1PostCsvImport500Error1"` [500] `ApiV1PostCsvImport500Error1` · `"apiV1PostCsvImport502Error1"` [502] `ApiV1PostCsvImport502Error1` · `"apiV1PostCsvImport503Error1"` [503] `ApiV1PostCsvImport503Error1` · `"apiV1PostCsvImport504Error1"` [504] `ApiV1PostCsvImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostCsv.PostCsvGetByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `importId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostCsvImportResponse` | `apiV1PostCsvImportResponseSchema` | `src/models/api-v1-post-csv-import-response.ts` |
| `ApiV1PostCsvImport400Error1` | `apiV1PostCsvImport400Error1Schema` | `src/models/api-v1-post-csv-import400-error1.ts` |
| `ApiV1PostCsvImport401Error1` | `apiV1PostCsvImport401Error1Schema` | `src/models/api-v1-post-csv-import401-error1.ts` |
| `ApiV1PostCsvImport403Error1` | `apiV1PostCsvImport403Error1Schema` | `src/models/api-v1-post-csv-import403-error1.ts` |
| `ApiV1PostCsvImport404Error1` | `apiV1PostCsvImport404Error1Schema` | `src/models/api-v1-post-csv-import404-error1.ts` |
| `ApiV1PostCsvImport429Error1` | `apiV1PostCsvImport429Error1Schema` | `src/models/api-v1-post-csv-import429-error1.ts` |
| `ApiV1PostCsvImport500Error1` | `apiV1PostCsvImport500Error1Schema` | `src/models/api-v1-post-csv-import500-error1.ts` |
| `ApiV1PostCsvImport502Error1` | `apiV1PostCsvImport502Error1Schema` | `src/models/api-v1-post-csv-import502-error1.ts` |
| `ApiV1PostCsvImport503Error1` | `apiV1PostCsvImport503Error1Schema` | `src/models/api-v1-post-csv-import503-error1.ts` |
| `ApiV1PostCsvImport504Error1` | `apiV1PostCsvImport504Error1Schema` | `src/models/api-v1-post-csv-import504-error1.ts` |

### postCsvGetList

- **Signature**: `postCsvGetList(request?: PostCsv.PostCsvGetListRequest, options?: RequestOptions): ApiPromise<ApiV1PostCsvImportResponse1, PostCsv.PostCsvGetListError>`
- **Wire**: `GET /api/v1/post-csv-import/`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostCsvImportResponse1`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostCsv.PostCsvGetListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostCsvImport400Error1"` [400] `ApiV1PostCsvImport400Error1` · `"apiV1PostCsvImport401Error1"` [401] `ApiV1PostCsvImport401Error1` · `"apiV1PostCsvImport403Error1"` [403] `ApiV1PostCsvImport403Error1` · `"apiV1PostCsvImport404Error1"` [404] `ApiV1PostCsvImport404Error1` · `"apiV1PostCsvImport429Error1"` [429] `ApiV1PostCsvImport429Error1` · `"apiV1PostCsvImport500Error1"` [500] `ApiV1PostCsvImport500Error1` · `"apiV1PostCsvImport502Error1"` [502] `ApiV1PostCsvImport502Error1` · `"apiV1PostCsvImport503Error1"` [503] `ApiV1PostCsvImport503Error1` · `"apiV1PostCsvImport504Error1"` [504] `ApiV1PostCsvImport504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostCsv.PostCsvGetListRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostCsvImportResponse1` | `apiV1PostCsvImportResponse1Schema` | `src/models/api-v1-post-csv-import-response1.ts` |
| `ApiV1PostCsvImport400Error1` | `apiV1PostCsvImport400Error1Schema` | `src/models/api-v1-post-csv-import400-error1.ts` |
| `ApiV1PostCsvImport401Error1` | `apiV1PostCsvImport401Error1Schema` | `src/models/api-v1-post-csv-import401-error1.ts` |
| `ApiV1PostCsvImport403Error1` | `apiV1PostCsvImport403Error1Schema` | `src/models/api-v1-post-csv-import403-error1.ts` |
| `ApiV1PostCsvImport404Error1` | `apiV1PostCsvImport404Error1Schema` | `src/models/api-v1-post-csv-import404-error1.ts` |
| `ApiV1PostCsvImport429Error1` | `apiV1PostCsvImport429Error1Schema` | `src/models/api-v1-post-csv-import429-error1.ts` |
| `ApiV1PostCsvImport500Error1` | `apiV1PostCsvImport500Error1Schema` | `src/models/api-v1-post-csv-import500-error1.ts` |
| `ApiV1PostCsvImport502Error1` | `apiV1PostCsvImport502Error1Schema` | `src/models/api-v1-post-csv-import502-error1.ts` |
| `ApiV1PostCsvImport503Error1` | `apiV1PostCsvImport503Error1Schema` | `src/models/api-v1-post-csv-import503-error1.ts` |
| `ApiV1PostCsvImport504Error1` | `apiV1PostCsvImport504Error1Schema` | `src/models/api-v1-post-csv-import504-error1.ts` |

### postCsvGetRows

- **Signature**: `postCsvGetRows(request: PostCsv.PostCsvGetRowsRequest, options?: RequestOptions): ApiPromise<ApiV1PostCsvImportRowsResponse, PostCsv.PostCsvGetRowsError>`
- **Wire**: `GET /api/v1/post-csv-import/{importId}/rows`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostCsvImportRowsResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostCsv.PostCsvGetRowsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostCsvImportRows400Error1"` [400] `ApiV1PostCsvImportRows400Error1` · `"apiV1PostCsvImportRows401Error1"` [401] `ApiV1PostCsvImportRows401Error1` · `"apiV1PostCsvImportRows403Error1"` [403] `ApiV1PostCsvImportRows403Error1` · `"apiV1PostCsvImportRows404Error1"` [404] `ApiV1PostCsvImportRows404Error1` · `"apiV1PostCsvImportRows429Error1"` [429] `ApiV1PostCsvImportRows429Error1` · `"apiV1PostCsvImportRows500Error1"` [500] `ApiV1PostCsvImportRows500Error1` · `"apiV1PostCsvImportRows502Error1"` [502] `ApiV1PostCsvImportRows502Error1` · `"apiV1PostCsvImportRows503Error1"` [503] `ApiV1PostCsvImportRows503Error1` · `"apiV1PostCsvImportRows504Error1"` [504] `ApiV1PostCsvImportRows504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostCsv.PostCsvGetRowsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `importId` | `path` | `string` | yes | — |
| `status` | `query` | `Status4BundleSocialPostCsvApi` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status4BundleSocialPostCsvApi` | `status4BundleSocialPostCsvApiSchema` | `src/models/status4-bundle-social-post-csv-api.ts` |
| `ApiV1PostCsvImportRowsResponse` | `apiV1PostCsvImportRowsResponseSchema` | `src/models/api-v1-post-csv-import-rows-response.ts` |
| `ApiV1PostCsvImportRows400Error1` | `apiV1PostCsvImportRows400Error1Schema` | `src/models/api-v1-post-csv-import-rows400-error1.ts` |
| `ApiV1PostCsvImportRows401Error1` | `apiV1PostCsvImportRows401Error1Schema` | `src/models/api-v1-post-csv-import-rows401-error1.ts` |
| `ApiV1PostCsvImportRows403Error1` | `apiV1PostCsvImportRows403Error1Schema` | `src/models/api-v1-post-csv-import-rows403-error1.ts` |
| `ApiV1PostCsvImportRows404Error1` | `apiV1PostCsvImportRows404Error1Schema` | `src/models/api-v1-post-csv-import-rows404-error1.ts` |
| `ApiV1PostCsvImportRows429Error1` | `apiV1PostCsvImportRows429Error1Schema` | `src/models/api-v1-post-csv-import-rows429-error1.ts` |
| `ApiV1PostCsvImportRows500Error1` | `apiV1PostCsvImportRows500Error1Schema` | `src/models/api-v1-post-csv-import-rows500-error1.ts` |
| `ApiV1PostCsvImportRows502Error1` | `apiV1PostCsvImportRows502Error1Schema` | `src/models/api-v1-post-csv-import-rows502-error1.ts` |
| `ApiV1PostCsvImportRows503Error1` | `apiV1PostCsvImportRows503Error1Schema` | `src/models/api-v1-post-csv-import-rows503-error1.ts` |
| `ApiV1PostCsvImportRows504Error1` | `apiV1PostCsvImportRows504Error1Schema` | `src/models/api-v1-post-csv-import-rows504-error1.ts` |

### postCsvGetStatus

- **Signature**: `postCsvGetStatus(request: PostCsv.PostCsvGetStatusRequest, options?: RequestOptions): ApiPromise<ApiV1PostCsvImportStatusResponse, PostCsv.PostCsvGetStatusError>`
- **Wire**: `GET /api/v1/post-csv-import/{importId}/status`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1PostCsvImportStatusResponse`
- **Error**: `BundleSocialError` with `kind: "api"`, an instance of `PostCsv.PostCsvGetStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1PostCsvImportStatus400Error1"` [400] `ApiV1PostCsvImportStatus400Error1` · `"apiV1PostCsvImportStatus401Error1"` [401] `ApiV1PostCsvImportStatus401Error1` · `"apiV1PostCsvImportStatus403Error1"` [403] `ApiV1PostCsvImportStatus403Error1` · `"apiV1PostCsvImportStatus404Error1"` [404] `ApiV1PostCsvImportStatus404Error1` · `"apiV1PostCsvImportStatus429Error1"` [429] `ApiV1PostCsvImportStatus429Error1` · `"apiV1PostCsvImportStatus500Error1"` [500] `ApiV1PostCsvImportStatus500Error1` · `"apiV1PostCsvImportStatus502Error1"` [502] `ApiV1PostCsvImportStatus502Error1` · `"apiV1PostCsvImportStatus503Error1"` [503] `ApiV1PostCsvImportStatus503Error1` · `"apiV1PostCsvImportStatus504Error1"` [504] `ApiV1PostCsvImportStatus504Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PostCsv.PostCsvGetStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `importId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1PostCsvImportStatusResponse` | `apiV1PostCsvImportStatusResponseSchema` | `src/models/api-v1-post-csv-import-status-response.ts` |
| `ApiV1PostCsvImportStatus400Error1` | `apiV1PostCsvImportStatus400Error1Schema` | `src/models/api-v1-post-csv-import-status400-error1.ts` |
| `ApiV1PostCsvImportStatus401Error1` | `apiV1PostCsvImportStatus401Error1Schema` | `src/models/api-v1-post-csv-import-status401-error1.ts` |
| `ApiV1PostCsvImportStatus403Error1` | `apiV1PostCsvImportStatus403Error1Schema` | `src/models/api-v1-post-csv-import-status403-error1.ts` |
| `ApiV1PostCsvImportStatus404Error1` | `apiV1PostCsvImportStatus404Error1Schema` | `src/models/api-v1-post-csv-import-status404-error1.ts` |
| `ApiV1PostCsvImportStatus429Error1` | `apiV1PostCsvImportStatus429Error1Schema` | `src/models/api-v1-post-csv-import-status429-error1.ts` |
| `ApiV1PostCsvImportStatus500Error1` | `apiV1PostCsvImportStatus500Error1Schema` | `src/models/api-v1-post-csv-import-status500-error1.ts` |
| `ApiV1PostCsvImportStatus502Error1` | `apiV1PostCsvImportStatus502Error1Schema` | `src/models/api-v1-post-csv-import-status502-error1.ts` |
| `ApiV1PostCsvImportStatus503Error1` | `apiV1PostCsvImportStatus503Error1Schema` | `src/models/api-v1-post-csv-import-status503-error1.ts` |
| `ApiV1PostCsvImportStatus504Error1` | `apiV1PostCsvImportStatus504Error1Schema` | `src/models/api-v1-post-csv-import-status504-error1.ts` |

