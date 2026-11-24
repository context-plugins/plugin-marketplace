<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataStandards — operations

Accessor: `client.dataStandards` · Source: `src/resources/data-standards.ts` · 13 operations · Request and error types: namespace `DataStandards`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1DataStandardsDataStandardId

- **Signature**: `deleteApiV1DataStandardsDataStandardId(request: DataStandards.DeleteApiV1DataStandardsDataStandardIdRequest, options?: RequestOptions): ApiPromise<PublicApiDeleteDataStandardResponse, DataStandards.DeleteApiV1DataStandardsDataStandardIdError>`
- **Wire**: `DELETE /api/v1/dataStandards/{dataStandardId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDeleteDataStandardResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.DeleteApiV1DataStandardsDataStandardIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.DeleteApiV1DataStandardsDataStandardIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dataStandardId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDeleteDataStandardResponse` | `publicApiDeleteDataStandardResponseSchema` | `src/models/public-api-delete-data-standard-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DataStandards

- **Signature**: `getApiV1DataStandards(request?: DataStandards.GetApiV1DataStandardsRequest, options?: RequestOptions): ApiPromise<PublicApiListDataStandardsResponse, DataStandards.GetApiV1DataStandardsError>`
- **Wire**: `GET /api/v1/dataStandards`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListDataStandardsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.GetApiV1DataStandardsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.GetApiV1DataStandardsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |
| `search` | `query` | `string` | no |
| `size` | `query` | `number` | no |
| `sort` | `query` | `DataStandardSortFieldDto` | no |
| `status` | `query` | `DataStandardStatusDto` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataStandardSortFieldDto` | `dataStandardSortFieldDtoSchema` | `src/models/data-standard-sort-field-dto.ts` |
| `DataStandardStatusDto` | `dataStandardStatusDtoSchema` | `src/models/data-standard-status-dto.ts` |
| `PublicApiListDataStandardsResponse` | `publicApiListDataStandardsResponseSchema` | `src/models/public-api-list-data-standards-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DataStandardsActivity

- **Signature**: `getApiV1DataStandardsActivity(options?: RequestOptions): ApiPromise<PublicApiDataStandardsActivityResponse, DataStandards.GetApiV1DataStandardsActivityError>`
- **Wire**: `GET /api/v1/dataStandards/activity`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiDataStandardsActivityResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.GetApiV1DataStandardsActivityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDataStandardsActivityResponse` | `publicApiDataStandardsActivityResponseSchema` | `src/models/public-api-data-standards-activity-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DataStandardsDataStandardId

- **Signature**: `getApiV1DataStandardsDataStandardId(request: DataStandards.GetApiV1DataStandardsDataStandardIdRequest, options?: RequestOptions): ApiPromise<PublicApiGetDataStandardResponse, DataStandards.GetApiV1DataStandardsDataStandardIdError>`
- **Wire**: `GET /api/v1/dataStandards/{dataStandardId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiGetDataStandardResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.GetApiV1DataStandardsDataStandardIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.GetApiV1DataStandardsDataStandardIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dataStandardId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiGetDataStandardResponse` | `publicApiGetDataStandardResponseSchema` | `src/models/public-api-get-data-standard-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DataStandardsDataStandardIdChecks

- **Signature**: `getApiV1DataStandardsDataStandardIdChecks(request: DataStandards.GetApiV1DataStandardsDataStandardIdChecksRequest, options?: RequestOptions): ApiPromise<PublicApiListDataStandardChecksResponse, DataStandards.GetApiV1DataStandardsDataStandardIdChecksError>`
- **Wire**: `GET /api/v1/dataStandards/{dataStandardId}/checks`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListDataStandardChecksResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.GetApiV1DataStandardsDataStandardIdChecksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.GetApiV1DataStandardsDataStandardIdChecksRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dataStandardId` | `path` | `string` | yes |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiListDataStandardChecksResponse` | `publicApiListDataStandardChecksResponseSchema` | `src/models/public-api-list-data-standard-checks-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1DataStandardsDataStandardIdDatasets

- **Signature**: `getApiV1DataStandardsDataStandardIdDatasets(request: DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsRequest, options?: RequestOptions): ApiPromise<PublicApiListDataStandardDatasetsResponse, DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsError>`
- **Wire**: `GET /api/v1/dataStandards/{dataStandardId}/datasets`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListDataStandardDatasetsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.GetApiV1DataStandardsDataStandardIdDatasetsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dataStandardId` | `path` | `string` | yes |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiListDataStandardDatasetsResponse` | `publicApiListDataStandardDatasetsResponseSchema` | `src/models/public-api-list-data-standard-datasets-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DataStandards

- **Signature**: `postApiV1DataStandards(request: DataStandards.PostApiV1DataStandardsRequest, options?: RequestOptions): ApiPromise<PublicApiCreateDataStandardResponse, DataStandards.PostApiV1DataStandardsError>`
- **Wire**: `POST /api/v1/dataStandards`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiCreateDataStandardResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.PostApiV1DataStandardsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.PostApiV1DataStandardsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiDataStandardRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDataStandardRequestDto` | `publicApiDataStandardRequestDtoSchema` | `src/models/public-api-data-standard-request-dto.ts` |
| `PublicApiCreateDataStandardResponse` | `publicApiCreateDataStandardResponseSchema` | `src/models/public-api-create-data-standard-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DataStandardsActionsExecute

- **Signature**: `postApiV1DataStandardsActionsExecute(request: DataStandards.PostApiV1DataStandardsActionsExecuteRequest, options?: RequestOptions): ApiPromise<PublicApiExecuteDataStandardsResponse, DataStandards.PostApiV1DataStandardsActionsExecuteError>`
- **Wire**: `POST /api/v1/dataStandards/actions/execute`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiExecuteDataStandardsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.PostApiV1DataStandardsActionsExecuteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.PostApiV1DataStandardsActionsExecuteRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiExecuteDataStandardsRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiExecuteDataStandardsRequestDto` | `publicApiExecuteDataStandardsRequestDtoSchema` | `src/models/public-api-execute-data-standards-request-dto.ts` |
| `PublicApiExecuteDataStandardsResponse` | `publicApiExecuteDataStandardsResponseSchema` | `src/models/public-api-execute-data-standards-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DataStandardsActionsPreviewScope

- **Signature**: `postApiV1DataStandardsActionsPreviewScope(request: DataStandards.PostApiV1DataStandardsActionsPreviewScopeRequest, options?: RequestOptions): ApiPromise<PublicApiPreviewDataStandardScopeResponse, DataStandards.PostApiV1DataStandardsActionsPreviewScopeError>`
- **Wire**: `POST /api/v1/dataStandards/actions/previewScope`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiPreviewDataStandardScopeResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.PostApiV1DataStandardsActionsPreviewScopeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.PostApiV1DataStandardsActionsPreviewScopeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiPreviewDataStandardScopeRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiPreviewDataStandardScopeRequestDto` | `publicApiPreviewDataStandardScopeRequestDtoSchema` | `src/models/public-api-preview-data-standard-scope-request-dto.ts` |
| `PublicApiPreviewDataStandardScopeResponse` | `publicApiPreviewDataStandardScopeResponseSchema` | `src/models/public-api-preview-data-standard-scope-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DataStandardsActionsTest

- **Signature**: `postApiV1DataStandardsActionsTest(request: DataStandards.PostApiV1DataStandardsActionsTestRequest, options?: RequestOptions): ApiPromise<PublicApiTestDataStandardResponse, DataStandards.PostApiV1DataStandardsActionsTestError>`
- **Wire**: `POST /api/v1/dataStandards/actions/test`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiTestDataStandardResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.PostApiV1DataStandardsActionsTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.PostApiV1DataStandardsActionsTestRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiTestDataStandardRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiTestDataStandardRequestDto` | `publicApiTestDataStandardRequestDtoSchema` | `src/models/public-api-test-data-standard-request-dto.ts` |
| `PublicApiTestDataStandardResponse` | `publicApiTestDataStandardResponseSchema` | `src/models/public-api-test-data-standard-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DataStandardsDataStandardId

- **Signature**: `postApiV1DataStandardsDataStandardId(request: DataStandards.PostApiV1DataStandardsDataStandardIdRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateDataStandardResponse, DataStandards.PostApiV1DataStandardsDataStandardIdError>`
- **Wire**: `POST /api/v1/dataStandards/{dataStandardId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateDataStandardResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.PostApiV1DataStandardsDataStandardIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.PostApiV1DataStandardsDataStandardIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dataStandardId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiDataStandardRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDataStandardRequestDto` | `publicApiDataStandardRequestDtoSchema` | `src/models/public-api-data-standard-request-dto.ts` |
| `PublicApiUpdateDataStandardResponse` | `publicApiUpdateDataStandardResponseSchema` | `src/models/public-api-update-data-standard-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DataStandardsDataStandardIdActionsEvaluateScope

- **Signature**: `postApiV1DataStandardsDataStandardIdActionsEvaluateScope(request: DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest, options?: RequestOptions): ApiPromise<PublicApiEvaluateDataStandardScopeResponse, DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError>`
- **Wire**: `POST /api/v1/dataStandards/{dataStandardId}/actions/evaluateScope`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiEvaluateDataStandardScopeResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dataStandardId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiEvaluateDataStandardScopeResponse` | `publicApiEvaluateDataStandardScopeResponseSchema` | `src/models/public-api-evaluate-data-standard-scope-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1DataStandardsDataStandardIdActionsStatus

- **Signature**: `postApiV1DataStandardsDataStandardIdActionsStatus(request: DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusRequest, options?: RequestOptions): ApiPromise<PublicApiUpdateDataStandardStatusResponse, DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusError>`
- **Wire**: `POST /api/v1/dataStandards/{dataStandardId}/actions/status`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiUpdateDataStandardStatusResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataStandards.PostApiV1DataStandardsDataStandardIdActionsStatusRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `dataStandardId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiUpdateDataStandardStatusRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiUpdateDataStandardStatusRequestDto` | `publicApiUpdateDataStandardStatusRequestDtoSchema` | `src/models/public-api-update-data-standard-status-request-dto.ts` |
| `PublicApiUpdateDataStandardStatusResponse` | `publicApiUpdateDataStandardStatusResponseSchema` | `src/models/public-api-update-data-standard-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

