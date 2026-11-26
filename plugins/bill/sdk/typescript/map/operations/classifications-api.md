<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClassificationsApi — operations

Accessor: `client.classificationsApi` · Source: `src/resources/classifications-api.ts` · 70 operations · Request and error types: namespace `ClassificationsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveClassificationAccountingClass

- **Signature**: `archiveClassificationAccountingClass(request: ClassificationsApi.ArchiveClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise<ClassificationAccountingClassResponseDto, ClassificationsApi.ArchiveClassificationAccountingClassError>`
- **Wire**: `POST /v3/classifications/accounting-classes/{id}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ArchiveClassificationAccountingClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ArchiveClassificationAccountingClassRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationAccountingClassResponseDto` | `classificationAccountingClassResponseDtoSchema` | `src/models/classification-accounting-class-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### archiveClassificationChartOfAccounts

- **Signature**: `archiveClassificationChartOfAccounts(request: ClassificationsApi.ArchiveClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise<ClassificationChartOfAccountsResponseDto, ClassificationsApi.ArchiveClassificationChartOfAccountsError>`
- **Wire**: `POST /v3/classifications/chart-of-accounts/{id}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ArchiveClassificationChartOfAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ArchiveClassificationChartOfAccountsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationChartOfAccountsResponseDto` | `classificationChartOfAccountsResponseDtoSchema` | `src/models/classification-chart-of-accounts-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### archiveClassificationDepartment

- **Signature**: `archiveClassificationDepartment(request: ClassificationsApi.ArchiveClassificationDepartmentRequest, options?: RequestOptions): ApiPromise<ClassificationDepartmentResponseDto, ClassificationsApi.ArchiveClassificationDepartmentError>`
- **Wire**: `POST /v3/classifications/departments/{id}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ArchiveClassificationDepartmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ArchiveClassificationDepartmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationDepartmentResponseDto` | `classificationDepartmentResponseDtoSchema` | `src/models/classification-department-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### archiveClassificationEmployee

- **Signature**: `archiveClassificationEmployee(request: ClassificationsApi.ArchiveClassificationEmployeeRequest, options?: RequestOptions): ApiPromise<ClassificationEmployeeResponseDto, ClassificationsApi.ArchiveClassificationEmployeeError>`
- **Wire**: `POST /v3/classifications/employees/{id}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ArchiveClassificationEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ArchiveClassificationEmployeeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationEmployeeResponseDto` | `classificationEmployeeResponseDtoSchema` | `src/models/classification-employee-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### archiveClassificationItem

- **Signature**: `archiveClassificationItem(request: ClassificationsApi.ArchiveClassificationItemRequest, options?: RequestOptions): ApiPromise<ClassificationItemResponseDto, ClassificationsApi.ArchiveClassificationItemError>`
- **Wire**: `POST /v3/classifications/items/{id}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ArchiveClassificationItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ArchiveClassificationItemRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationItemResponseDto` | `classificationItemResponseDtoSchema` | `src/models/classification-item-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### archiveClassificationJob

- **Signature**: `archiveClassificationJob(request: ClassificationsApi.ArchiveClassificationJobRequest, options?: RequestOptions): ApiPromise<ClassificationJobResponseDto, ClassificationsApi.ArchiveClassificationJobError>`
- **Wire**: `POST /v3/classifications/jobs/{id}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ArchiveClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ArchiveClassificationJobRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationJobResponseDto` | `classificationJobResponseDtoSchema` | `src/models/classification-job-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### archiveClassificationLocation

- **Signature**: `archiveClassificationLocation(request: ClassificationsApi.ArchiveClassificationLocationRequest, options?: RequestOptions): ApiPromise<ClassificationLocationResponseDto, ClassificationsApi.ArchiveClassificationLocationError>`
- **Wire**: `POST /v3/classifications/locations/{id}/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ArchiveClassificationLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ArchiveClassificationLocationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationLocationResponseDto` | `classificationLocationResponseDtoSchema` | `src/models/classification-location-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkArchiveClassificationAccountingClass

- **Signature**: `bulkArchiveClassificationAccountingClass(request: ClassificationsApi.BulkArchiveClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise<ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkArchiveClassificationAccountingClassError>`
- **Wire**: `POST /v3/classifications/accounting-classes/bulk/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkArchiveClassificationAccountingClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkArchiveClassificationAccountingClassRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationAccountingClassBulkResponseDto` | `classificationAccountingClassBulkResponseDtoSchema` | `src/models/classification-accounting-class-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkArchiveClassificationChartOfAccounts

- **Signature**: `bulkArchiveClassificationChartOfAccounts(request: ClassificationsApi.BulkArchiveClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise<ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkArchiveClassificationChartOfAccountsError>`
- **Wire**: `POST /v3/classifications/chart-of-accounts/bulk/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkArchiveClassificationChartOfAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkArchiveClassificationChartOfAccountsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationChartOfAccountsBulkResponseDto` | `classificationChartOfAccountsBulkResponseDtoSchema` | `src/models/classification-chart-of-accounts-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkArchiveClassificationDepartment

- **Signature**: `bulkArchiveClassificationDepartment(request: ClassificationsApi.BulkArchiveClassificationDepartmentRequest, options?: RequestOptions): ApiPromise<ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkArchiveClassificationDepartmentError>`
- **Wire**: `POST /v3/classifications/departments/bulk/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkArchiveClassificationDepartmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkArchiveClassificationDepartmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationDepartmentBulkResponseDto` | `classificationDepartmentBulkResponseDtoSchema` | `src/models/classification-department-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkArchiveClassificationEmployee

- **Signature**: `bulkArchiveClassificationEmployee(request: ClassificationsApi.BulkArchiveClassificationEmployeeRequest, options?: RequestOptions): ApiPromise<ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkArchiveClassificationEmployeeError>`
- **Wire**: `POST /v3/classifications/employees/bulk/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkArchiveClassificationEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkArchiveClassificationEmployeeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationEmployeeBulkResponseDto` | `classificationEmployeeBulkResponseDtoSchema` | `src/models/classification-employee-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkArchiveClassificationItem

- **Signature**: `bulkArchiveClassificationItem(request: ClassificationsApi.BulkArchiveClassificationItemRequest, options?: RequestOptions): ApiPromise<ClassificationItemBulkResponseDto, ClassificationsApi.BulkArchiveClassificationItemError>`
- **Wire**: `POST /v3/classifications/items/bulk/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkArchiveClassificationItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkArchiveClassificationItemRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationItemBulkResponseDto` | `classificationItemBulkResponseDtoSchema` | `src/models/classification-item-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkArchiveClassificationJob

- **Signature**: `bulkArchiveClassificationJob(request: ClassificationsApi.BulkArchiveClassificationJobRequest, options?: RequestOptions): ApiPromise<ClassificationJobBulkResponseDto, ClassificationsApi.BulkArchiveClassificationJobError>`
- **Wire**: `POST /v3/classifications/jobs/bulk/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkArchiveClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkArchiveClassificationJobRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationJobBulkResponseDto` | `classificationJobBulkResponseDtoSchema` | `src/models/classification-job-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkArchiveClassificationLocation

- **Signature**: `bulkArchiveClassificationLocation(request: ClassificationsApi.BulkArchiveClassificationLocationRequest, options?: RequestOptions): ApiPromise<ClassificationLocationBulkResponseDto, ClassificationsApi.BulkArchiveClassificationLocationError>`
- **Wire**: `POST /v3/classifications/locations/bulk/archive`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkArchiveClassificationLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkArchiveClassificationLocationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationLocationBulkResponseDto` | `classificationLocationBulkResponseDtoSchema` | `src/models/classification-location-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkCreateClassificationAccountingClass

- **Signature**: `bulkCreateClassificationAccountingClass(request: ClassificationsApi.BulkCreateClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise<ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkCreateClassificationAccountingClassError>`
- **Wire**: `POST /v3/classifications/accounting-classes/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkCreateClassificationAccountingClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkCreateClassificationAccountingClassRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationAccountingClassRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationAccountingClassRequestDto` | `createClassificationAccountingClassRequestDtoSchema` | `src/models/create-classification-accounting-class-request-dto.ts` |
| `ClassificationAccountingClassBulkResponseDto` | `classificationAccountingClassBulkResponseDtoSchema` | `src/models/classification-accounting-class-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkCreateClassificationChartOfAccounts

- **Signature**: `bulkCreateClassificationChartOfAccounts(request: ClassificationsApi.BulkCreateClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise<ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkCreateClassificationChartOfAccountsError>`
- **Wire**: `POST /v3/classifications/chart-of-accounts/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkCreateClassificationChartOfAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkCreateClassificationChartOfAccountsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationChartOfAccountsRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationChartOfAccountsRequestDto` | `createClassificationChartOfAccountsRequestDtoSchema` | `src/models/create-classification-chart-of-accounts-request-dto.ts` |
| `ClassificationChartOfAccountsBulkResponseDto` | `classificationChartOfAccountsBulkResponseDtoSchema` | `src/models/classification-chart-of-accounts-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkCreateClassificationDepartment

- **Signature**: `bulkCreateClassificationDepartment(request: ClassificationsApi.BulkCreateClassificationDepartmentRequest, options?: RequestOptions): ApiPromise<ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkCreateClassificationDepartmentError>`
- **Wire**: `POST /v3/classifications/departments/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkCreateClassificationDepartmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkCreateClassificationDepartmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationDepartmentRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationDepartmentRequestDto` | `createClassificationDepartmentRequestDtoSchema` | `src/models/create-classification-department-request-dto.ts` |
| `ClassificationDepartmentBulkResponseDto` | `classificationDepartmentBulkResponseDtoSchema` | `src/models/classification-department-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkCreateClassificationEmployee

- **Signature**: `bulkCreateClassificationEmployee(request: ClassificationsApi.BulkCreateClassificationEmployeeRequest, options?: RequestOptions): ApiPromise<ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkCreateClassificationEmployeeError>`
- **Wire**: `POST /v3/classifications/employees/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkCreateClassificationEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkCreateClassificationEmployeeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationEmployeeRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationEmployeeRequestDto` | `createClassificationEmployeeRequestDtoSchema` | `src/models/create-classification-employee-request-dto.ts` |
| `ClassificationEmployeeBulkResponseDto` | `classificationEmployeeBulkResponseDtoSchema` | `src/models/classification-employee-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkCreateClassificationItem

- **Signature**: `bulkCreateClassificationItem(request: ClassificationsApi.BulkCreateClassificationItemRequest, options?: RequestOptions): ApiPromise<ClassificationItemBulkResponseDto, ClassificationsApi.BulkCreateClassificationItemError>`
- **Wire**: `POST /v3/classifications/items/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkCreateClassificationItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkCreateClassificationItemRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationItemRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationItemRequestDto` | `createClassificationItemRequestDtoSchema` | `src/models/create-classification-item-request-dto.ts` |
| `ClassificationItemBulkResponseDto` | `classificationItemBulkResponseDtoSchema` | `src/models/classification-item-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkCreateClassificationJob

- **Signature**: `bulkCreateClassificationJob(request: ClassificationsApi.BulkCreateClassificationJobRequest, options?: RequestOptions): ApiPromise<ClassificationJobBulkResponseDto, ClassificationsApi.BulkCreateClassificationJobError>`
- **Wire**: `POST /v3/classifications/jobs/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkCreateClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkCreateClassificationJobRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationJobRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationJobRequestDto` | `createClassificationJobRequestDtoSchema` | `src/models/create-classification-job-request-dto.ts` |
| `ClassificationJobBulkResponseDto` | `classificationJobBulkResponseDtoSchema` | `src/models/classification-job-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkCreateClassificationLocation

- **Signature**: `bulkCreateClassificationLocation(request: ClassificationsApi.BulkCreateClassificationLocationRequest, options?: RequestOptions): ApiPromise<ClassificationLocationBulkResponseDto, ClassificationsApi.BulkCreateClassificationLocationError>`
- **Wire**: `POST /v3/classifications/locations/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkCreateClassificationLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkCreateClassificationLocationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationLocationRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationLocationRequestDto` | `createClassificationLocationRequestDtoSchema` | `src/models/create-classification-location-request-dto.ts` |
| `ClassificationLocationBulkResponseDto` | `classificationLocationBulkResponseDtoSchema` | `src/models/classification-location-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkRestoreClassificationAccountingClass

- **Signature**: `bulkRestoreClassificationAccountingClass(request: ClassificationsApi.BulkRestoreClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise<ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkRestoreClassificationAccountingClassError>`
- **Wire**: `POST /v3/classifications/accounting-classes/bulk/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkRestoreClassificationAccountingClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkRestoreClassificationAccountingClassRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationAccountingClassBulkResponseDto` | `classificationAccountingClassBulkResponseDtoSchema` | `src/models/classification-accounting-class-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkRestoreClassificationChartOfAccounts

- **Signature**: `bulkRestoreClassificationChartOfAccounts(request: ClassificationsApi.BulkRestoreClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise<ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkRestoreClassificationChartOfAccountsError>`
- **Wire**: `POST /v3/classifications/chart-of-accounts/bulk/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkRestoreClassificationChartOfAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkRestoreClassificationChartOfAccountsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationChartOfAccountsBulkResponseDto` | `classificationChartOfAccountsBulkResponseDtoSchema` | `src/models/classification-chart-of-accounts-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkRestoreClassificationDepartment

- **Signature**: `bulkRestoreClassificationDepartment(request: ClassificationsApi.BulkRestoreClassificationDepartmentRequest, options?: RequestOptions): ApiPromise<ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkRestoreClassificationDepartmentError>`
- **Wire**: `POST /v3/classifications/departments/bulk/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkRestoreClassificationDepartmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkRestoreClassificationDepartmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationDepartmentBulkResponseDto` | `classificationDepartmentBulkResponseDtoSchema` | `src/models/classification-department-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkRestoreClassificationEmployee

- **Signature**: `bulkRestoreClassificationEmployee(request: ClassificationsApi.BulkRestoreClassificationEmployeeRequest, options?: RequestOptions): ApiPromise<ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkRestoreClassificationEmployeeError>`
- **Wire**: `POST /v3/classifications/employees/bulk/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkRestoreClassificationEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkRestoreClassificationEmployeeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationEmployeeBulkResponseDto` | `classificationEmployeeBulkResponseDtoSchema` | `src/models/classification-employee-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkRestoreClassificationItem

- **Signature**: `bulkRestoreClassificationItem(request: ClassificationsApi.BulkRestoreClassificationItemRequest, options?: RequestOptions): ApiPromise<ClassificationItemBulkResponseDto, ClassificationsApi.BulkRestoreClassificationItemError>`
- **Wire**: `POST /v3/classifications/items/bulk/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkRestoreClassificationItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkRestoreClassificationItemRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationItemBulkResponseDto` | `classificationItemBulkResponseDtoSchema` | `src/models/classification-item-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkRestoreClassificationJob

- **Signature**: `bulkRestoreClassificationJob(request: ClassificationsApi.BulkRestoreClassificationJobRequest, options?: RequestOptions): ApiPromise<ClassificationJobBulkResponseDto, ClassificationsApi.BulkRestoreClassificationJobError>`
- **Wire**: `POST /v3/classifications/jobs/bulk/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkRestoreClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkRestoreClassificationJobRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationJobBulkResponseDto` | `classificationJobBulkResponseDtoSchema` | `src/models/classification-job-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkRestoreClassificationLocation

- **Signature**: `bulkRestoreClassificationLocation(request: ClassificationsApi.BulkRestoreClassificationLocationRequest, options?: RequestOptions): ApiPromise<ClassificationLocationBulkResponseDto, ClassificationsApi.BulkRestoreClassificationLocationError>`
- **Wire**: `POST /v3/classifications/locations/bulk/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkRestoreClassificationLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkRestoreClassificationLocationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationLocationBulkResponseDto` | `classificationLocationBulkResponseDtoSchema` | `src/models/classification-location-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkUpdateClassificationAccountingClass

- **Signature**: `bulkUpdateClassificationAccountingClass(request: ClassificationsApi.BulkUpdateClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise<ClassificationAccountingClassBulkResponseDto, ClassificationsApi.BulkUpdateClassificationAccountingClassError>`
- **Wire**: `PATCH /v3/classifications/accounting-classes/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkUpdateClassificationAccountingClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkUpdateClassificationAccountingClassRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationAccountingClassWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationAccountingClassWithIdRequestDto` | `updateClassificationAccountingClassWithIdRequestDtoSchema` | `src/models/update-classification-accounting-class-with-id-request-dto.ts` |
| `ClassificationAccountingClassBulkResponseDto` | `classificationAccountingClassBulkResponseDtoSchema` | `src/models/classification-accounting-class-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkUpdateClassificationChartOfAccounts

- **Signature**: `bulkUpdateClassificationChartOfAccounts(request: ClassificationsApi.BulkUpdateClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise<ClassificationChartOfAccountsBulkResponseDto, ClassificationsApi.BulkUpdateClassificationChartOfAccountsError>`
- **Wire**: `PATCH /v3/classifications/chart-of-accounts/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkUpdateClassificationChartOfAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkUpdateClassificationChartOfAccountsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationChartOfAccountsWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationChartOfAccountsWithIdRequestDto` | `updateClassificationChartOfAccountsWithIdRequestDtoSchema` | `src/models/update-classification-chart-of-accounts-with-id-request-dto.ts` |
| `ClassificationChartOfAccountsBulkResponseDto` | `classificationChartOfAccountsBulkResponseDtoSchema` | `src/models/classification-chart-of-accounts-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkUpdateClassificationDepartment

- **Signature**: `bulkUpdateClassificationDepartment(request: ClassificationsApi.BulkUpdateClassificationDepartmentRequest, options?: RequestOptions): ApiPromise<ClassificationDepartmentBulkResponseDto, ClassificationsApi.BulkUpdateClassificationDepartmentError>`
- **Wire**: `PATCH /v3/classifications/departments/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkUpdateClassificationDepartmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkUpdateClassificationDepartmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationDepartmentWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationDepartmentWithIdRequestDto` | `updateClassificationDepartmentWithIdRequestDtoSchema` | `src/models/update-classification-department-with-id-request-dto.ts` |
| `ClassificationDepartmentBulkResponseDto` | `classificationDepartmentBulkResponseDtoSchema` | `src/models/classification-department-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkUpdateClassificationEmployee

- **Signature**: `bulkUpdateClassificationEmployee(request: ClassificationsApi.BulkUpdateClassificationEmployeeRequest, options?: RequestOptions): ApiPromise<ClassificationEmployeeBulkResponseDto, ClassificationsApi.BulkUpdateClassificationEmployeeError>`
- **Wire**: `PATCH /v3/classifications/employees/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkUpdateClassificationEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkUpdateClassificationEmployeeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationEmployeeWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationEmployeeWithIdRequestDto` | `updateClassificationEmployeeWithIdRequestDtoSchema` | `src/models/update-classification-employee-with-id-request-dto.ts` |
| `ClassificationEmployeeBulkResponseDto` | `classificationEmployeeBulkResponseDtoSchema` | `src/models/classification-employee-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkUpdateClassificationItem

- **Signature**: `bulkUpdateClassificationItem(request: ClassificationsApi.BulkUpdateClassificationItemRequest, options?: RequestOptions): ApiPromise<ClassificationItemBulkResponseDto, ClassificationsApi.BulkUpdateClassificationItemError>`
- **Wire**: `PATCH /v3/classifications/items/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkUpdateClassificationItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkUpdateClassificationItemRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationItemWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationItemWithIdRequestDto` | `updateClassificationItemWithIdRequestDtoSchema` | `src/models/update-classification-item-with-id-request-dto.ts` |
| `ClassificationItemBulkResponseDto` | `classificationItemBulkResponseDtoSchema` | `src/models/classification-item-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkUpdateClassificationJob

- **Signature**: `bulkUpdateClassificationJob(request: ClassificationsApi.BulkUpdateClassificationJobRequest, options?: RequestOptions): ApiPromise<ClassificationJobBulkResponseDto, ClassificationsApi.BulkUpdateClassificationJobError>`
- **Wire**: `PATCH /v3/classifications/jobs/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkUpdateClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkUpdateClassificationJobRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationJobWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationJobWithIdRequestDto` | `updateClassificationJobWithIdRequestDtoSchema` | `src/models/update-classification-job-with-id-request-dto.ts` |
| `ClassificationJobBulkResponseDto` | `classificationJobBulkResponseDtoSchema` | `src/models/classification-job-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### bulkUpdateClassificationLocation

- **Signature**: `bulkUpdateClassificationLocation(request: ClassificationsApi.BulkUpdateClassificationLocationRequest, options?: RequestOptions): ApiPromise<ClassificationLocationBulkResponseDto, ClassificationsApi.BulkUpdateClassificationLocationError>`
- **Wire**: `PATCH /v3/classifications/locations/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.BulkUpdateClassificationLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.BulkUpdateClassificationLocationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationLocationWithIdRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationLocationWithIdRequestDto` | `updateClassificationLocationWithIdRequestDtoSchema` | `src/models/update-classification-location-with-id-request-dto.ts` |
| `ClassificationLocationBulkResponseDto` | `classificationLocationBulkResponseDtoSchema` | `src/models/classification-location-bulk-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createClassificationAccountingClass

- **Signature**: `createClassificationAccountingClass(request: ClassificationsApi.CreateClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise<ClassificationAccountingClassResponseDto, ClassificationsApi.CreateClassificationAccountingClassError>`
- **Wire**: `POST /v3/classifications/accounting-classes`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.CreateClassificationAccountingClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.CreateClassificationAccountingClassRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationAccountingClassRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationAccountingClassRequestDto` | `createClassificationAccountingClassRequestDtoSchema` | `src/models/create-classification-accounting-class-request-dto.ts` |
| `ClassificationAccountingClassResponseDto` | `classificationAccountingClassResponseDtoSchema` | `src/models/classification-accounting-class-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createClassificationChartOfAccounts

- **Signature**: `createClassificationChartOfAccounts(request: ClassificationsApi.CreateClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise<ClassificationChartOfAccountsResponseDto, ClassificationsApi.CreateClassificationChartOfAccountsError>`
- **Wire**: `POST /v3/classifications/chart-of-accounts`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.CreateClassificationChartOfAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.CreateClassificationChartOfAccountsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationChartOfAccountsRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationChartOfAccountsRequestDto` | `createClassificationChartOfAccountsRequestDtoSchema` | `src/models/create-classification-chart-of-accounts-request-dto.ts` |
| `ClassificationChartOfAccountsResponseDto` | `classificationChartOfAccountsResponseDtoSchema` | `src/models/classification-chart-of-accounts-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createClassificationDepartment

- **Signature**: `createClassificationDepartment(request: ClassificationsApi.CreateClassificationDepartmentRequest, options?: RequestOptions): ApiPromise<ClassificationDepartmentResponseDto, ClassificationsApi.CreateClassificationDepartmentError>`
- **Wire**: `POST /v3/classifications/departments`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.CreateClassificationDepartmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.CreateClassificationDepartmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationDepartmentRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationDepartmentRequestDto` | `createClassificationDepartmentRequestDtoSchema` | `src/models/create-classification-department-request-dto.ts` |
| `ClassificationDepartmentResponseDto` | `classificationDepartmentResponseDtoSchema` | `src/models/classification-department-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createClassificationEmployee

- **Signature**: `createClassificationEmployee(request: ClassificationsApi.CreateClassificationEmployeeRequest, options?: RequestOptions): ApiPromise<ClassificationEmployeeResponseDto, ClassificationsApi.CreateClassificationEmployeeError>`
- **Wire**: `POST /v3/classifications/employees`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.CreateClassificationEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.CreateClassificationEmployeeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationEmployeeRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationEmployeeRequestDto` | `createClassificationEmployeeRequestDtoSchema` | `src/models/create-classification-employee-request-dto.ts` |
| `ClassificationEmployeeResponseDto` | `classificationEmployeeResponseDtoSchema` | `src/models/classification-employee-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createClassificationItem

- **Signature**: `createClassificationItem(request: ClassificationsApi.CreateClassificationItemRequest, options?: RequestOptions): ApiPromise<ClassificationItemResponseDto, ClassificationsApi.CreateClassificationItemError>`
- **Wire**: `POST /v3/classifications/items`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.CreateClassificationItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.CreateClassificationItemRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationItemRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationItemRequestDto` | `createClassificationItemRequestDtoSchema` | `src/models/create-classification-item-request-dto.ts` |
| `ClassificationItemResponseDto` | `classificationItemResponseDtoSchema` | `src/models/classification-item-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createClassificationJob

- **Signature**: `createClassificationJob(request: ClassificationsApi.CreateClassificationJobRequest, options?: RequestOptions): ApiPromise<ClassificationJobResponseDto, ClassificationsApi.CreateClassificationJobError>`
- **Wire**: `POST /v3/classifications/jobs`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.CreateClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.CreateClassificationJobRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationJobRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationJobRequestDto` | `createClassificationJobRequestDtoSchema` | `src/models/create-classification-job-request-dto.ts` |
| `ClassificationJobResponseDto` | `classificationJobResponseDtoSchema` | `src/models/classification-job-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createClassificationLocation

- **Signature**: `createClassificationLocation(request: ClassificationsApi.CreateClassificationLocationRequest, options?: RequestOptions): ApiPromise<ClassificationLocationResponseDto, ClassificationsApi.CreateClassificationLocationError>`
- **Wire**: `POST /v3/classifications/locations`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.CreateClassificationLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.CreateClassificationLocationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `CreateClassificationLocationRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateClassificationLocationRequestDto` | `createClassificationLocationRequestDtoSchema` | `src/models/create-classification-location-request-dto.ts` |
| `ClassificationLocationResponseDto` | `classificationLocationResponseDtoSchema` | `src/models/classification-location-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getClassificationAccountingClass

- **Signature**: `getClassificationAccountingClass(request: ClassificationsApi.GetClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise<ClassificationAccountingClassResponseDto, ClassificationsApi.GetClassificationAccountingClassError>`
- **Wire**: `GET /v3/classifications/accounting-classes/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.GetClassificationAccountingClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.GetClassificationAccountingClassRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationAccountingClassResponseDto` | `classificationAccountingClassResponseDtoSchema` | `src/models/classification-accounting-class-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getClassificationChartOfAccounts

- **Signature**: `getClassificationChartOfAccounts(request: ClassificationsApi.GetClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise<ClassificationChartOfAccountsResponseDto, ClassificationsApi.GetClassificationChartOfAccountsError>`
- **Wire**: `GET /v3/classifications/chart-of-accounts/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.GetClassificationChartOfAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.GetClassificationChartOfAccountsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationChartOfAccountsResponseDto` | `classificationChartOfAccountsResponseDtoSchema` | `src/models/classification-chart-of-accounts-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getClassificationDepartment

- **Signature**: `getClassificationDepartment(request: ClassificationsApi.GetClassificationDepartmentRequest, options?: RequestOptions): ApiPromise<ClassificationDepartmentResponseDto, ClassificationsApi.GetClassificationDepartmentError>`
- **Wire**: `GET /v3/classifications/departments/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.GetClassificationDepartmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.GetClassificationDepartmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationDepartmentResponseDto` | `classificationDepartmentResponseDtoSchema` | `src/models/classification-department-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getClassificationEmployee

- **Signature**: `getClassificationEmployee(request: ClassificationsApi.GetClassificationEmployeeRequest, options?: RequestOptions): ApiPromise<ClassificationEmployeeResponseDto, ClassificationsApi.GetClassificationEmployeeError>`
- **Wire**: `GET /v3/classifications/employees/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.GetClassificationEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.GetClassificationEmployeeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationEmployeeResponseDto` | `classificationEmployeeResponseDtoSchema` | `src/models/classification-employee-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getClassificationItem

- **Signature**: `getClassificationItem(request: ClassificationsApi.GetClassificationItemRequest, options?: RequestOptions): ApiPromise<ClassificationItemResponseDto, ClassificationsApi.GetClassificationItemError>`
- **Wire**: `GET /v3/classifications/items/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.GetClassificationItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.GetClassificationItemRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationItemResponseDto` | `classificationItemResponseDtoSchema` | `src/models/classification-item-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getClassificationJob

- **Signature**: `getClassificationJob(request: ClassificationsApi.GetClassificationJobRequest, options?: RequestOptions): ApiPromise<ClassificationJobResponseDto, ClassificationsApi.GetClassificationJobError>`
- **Wire**: `GET /v3/classifications/jobs/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.GetClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.GetClassificationJobRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationJobResponseDto` | `classificationJobResponseDtoSchema` | `src/models/classification-job-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getClassificationLocation

- **Signature**: `getClassificationLocation(request: ClassificationsApi.GetClassificationLocationRequest, options?: RequestOptions): ApiPromise<ClassificationLocationResponseDto, ClassificationsApi.GetClassificationLocationError>`
- **Wire**: `GET /v3/classifications/locations/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.GetClassificationLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.GetClassificationLocationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationLocationResponseDto` | `classificationLocationResponseDtoSchema` | `src/models/classification-location-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listClassificationAccountingClasses

- **Signature**: `listClassificationAccountingClasses(request?: ClassificationsApi.ListClassificationAccountingClassesRequest, options?: RequestOptions): ApiPromise<ListResponseDtoClassificationAccountingClassResponseDto, ClassificationsApi.ListClassificationAccountingClassesError>`
- **Wire**: `GET /v3/classifications/accounting-classes`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoClassificationAccountingClassResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ListClassificationAccountingClassesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ListClassificationAccountingClassesRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoClassificationAccountingClassResponseDto` | `listResponseDtoClassificationAccountingClassResponseDtoSchema` | `src/models/list-response-dto-classification-accounting-class-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listClassificationChartOfAccounts

- **Signature**: `listClassificationChartOfAccounts(request?: ClassificationsApi.ListClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoClassificationChartOfAccountsResponseDto, ClassificationsApi.ListClassificationChartOfAccountsError>`
- **Wire**: `GET /v3/classifications/chart-of-accounts`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoClassificationChartOfAccountsResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ListClassificationChartOfAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ListClassificationChartOfAccountsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoClassificationChartOfAccountsResponseDto` | `listResponseDtoClassificationChartOfAccountsResponseDtoSchema` | `src/models/list-response-dto-classification-chart-of-accounts-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listClassificationDepartments

- **Signature**: `listClassificationDepartments(request?: ClassificationsApi.ListClassificationDepartmentsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoClassificationDepartmentResponseDto, ClassificationsApi.ListClassificationDepartmentsError>`
- **Wire**: `GET /v3/classifications/departments`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoClassificationDepartmentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ListClassificationDepartmentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ListClassificationDepartmentsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoClassificationDepartmentResponseDto` | `listResponseDtoClassificationDepartmentResponseDtoSchema` | `src/models/list-response-dto-classification-department-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listClassificationEmployees

- **Signature**: `listClassificationEmployees(request?: ClassificationsApi.ListClassificationEmployeesRequest, options?: RequestOptions): ApiPromise<ListResponseDtoClassificationEmployeeResponseDto, ClassificationsApi.ListClassificationEmployeesError>`
- **Wire**: `GET /v3/classifications/employees`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoClassificationEmployeeResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ListClassificationEmployeesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ListClassificationEmployeesRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoClassificationEmployeeResponseDto` | `listResponseDtoClassificationEmployeeResponseDtoSchema` | `src/models/list-response-dto-classification-employee-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listClassificationItems

- **Signature**: `listClassificationItems(request?: ClassificationsApi.ListClassificationItemsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoClassificationItemResponseDto, ClassificationsApi.ListClassificationItemsError>`
- **Wire**: `GET /v3/classifications/items`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoClassificationItemResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ListClassificationItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ListClassificationItemsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoClassificationItemResponseDto` | `listResponseDtoClassificationItemResponseDtoSchema` | `src/models/list-response-dto-classification-item-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listClassificationJobs

- **Signature**: `listClassificationJobs(request?: ClassificationsApi.ListClassificationJobsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoClassificationJobResponseDto, ClassificationsApi.ListClassificationJobsError>`
- **Wire**: `GET /v3/classifications/jobs`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoClassificationJobResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ListClassificationJobsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ListClassificationJobsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoClassificationJobResponseDto` | `listResponseDtoClassificationJobResponseDtoSchema` | `src/models/list-response-dto-classification-job-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listClassificationLocations

- **Signature**: `listClassificationLocations(request?: ClassificationsApi.ListClassificationLocationsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoClassificationLocationResponseDto, ClassificationsApi.ListClassificationLocationsError>`
- **Wire**: `GET /v3/classifications/locations`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoClassificationLocationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.ListClassificationLocationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.ListClassificationLocationsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoClassificationLocationResponseDto` | `listResponseDtoClassificationLocationResponseDtoSchema` | `src/models/list-response-dto-classification-location-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreClassificationAccountingClass

- **Signature**: `restoreClassificationAccountingClass(request: ClassificationsApi.RestoreClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise<ClassificationAccountingClassResponseDto, ClassificationsApi.RestoreClassificationAccountingClassError>`
- **Wire**: `POST /v3/classifications/accounting-classes/{id}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.RestoreClassificationAccountingClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.RestoreClassificationAccountingClassRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationAccountingClassResponseDto` | `classificationAccountingClassResponseDtoSchema` | `src/models/classification-accounting-class-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreClassificationChartOfAccounts

- **Signature**: `restoreClassificationChartOfAccounts(request: ClassificationsApi.RestoreClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise<ClassificationChartOfAccountsResponseDto, ClassificationsApi.RestoreClassificationChartOfAccountsError>`
- **Wire**: `POST /v3/classifications/chart-of-accounts/{id}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.RestoreClassificationChartOfAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.RestoreClassificationChartOfAccountsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationChartOfAccountsResponseDto` | `classificationChartOfAccountsResponseDtoSchema` | `src/models/classification-chart-of-accounts-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreClassificationDepartment

- **Signature**: `restoreClassificationDepartment(request: ClassificationsApi.RestoreClassificationDepartmentRequest, options?: RequestOptions): ApiPromise<ClassificationDepartmentResponseDto, ClassificationsApi.RestoreClassificationDepartmentError>`
- **Wire**: `POST /v3/classifications/departments/{id}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.RestoreClassificationDepartmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.RestoreClassificationDepartmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationDepartmentResponseDto` | `classificationDepartmentResponseDtoSchema` | `src/models/classification-department-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreClassificationEmployee

- **Signature**: `restoreClassificationEmployee(request: ClassificationsApi.RestoreClassificationEmployeeRequest, options?: RequestOptions): ApiPromise<ClassificationEmployeeResponseDto, ClassificationsApi.RestoreClassificationEmployeeError>`
- **Wire**: `POST /v3/classifications/employees/{id}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.RestoreClassificationEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.RestoreClassificationEmployeeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationEmployeeResponseDto` | `classificationEmployeeResponseDtoSchema` | `src/models/classification-employee-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreClassificationItem

- **Signature**: `restoreClassificationItem(request: ClassificationsApi.RestoreClassificationItemRequest, options?: RequestOptions): ApiPromise<ClassificationItemResponseDto, ClassificationsApi.RestoreClassificationItemError>`
- **Wire**: `POST /v3/classifications/items/{id}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.RestoreClassificationItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.RestoreClassificationItemRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationItemResponseDto` | `classificationItemResponseDtoSchema` | `src/models/classification-item-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreClassificationJob

- **Signature**: `restoreClassificationJob(request: ClassificationsApi.RestoreClassificationJobRequest, options?: RequestOptions): ApiPromise<ClassificationJobResponseDto, ClassificationsApi.RestoreClassificationJobError>`
- **Wire**: `POST /v3/classifications/jobs/{id}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.RestoreClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.RestoreClassificationJobRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationJobResponseDto` | `classificationJobResponseDtoSchema` | `src/models/classification-job-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### restoreClassificationLocation

- **Signature**: `restoreClassificationLocation(request: ClassificationsApi.RestoreClassificationLocationRequest, options?: RequestOptions): ApiPromise<ClassificationLocationResponseDto, ClassificationsApi.RestoreClassificationLocationError>`
- **Wire**: `POST /v3/classifications/locations/{id}/restore`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.RestoreClassificationLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.RestoreClassificationLocationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClassificationLocationResponseDto` | `classificationLocationResponseDtoSchema` | `src/models/classification-location-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateClassificationAccountingClass

- **Signature**: `updateClassificationAccountingClass(request: ClassificationsApi.UpdateClassificationAccountingClassRequest, options?: RequestOptions): ApiPromise<ClassificationAccountingClassResponseDto, ClassificationsApi.UpdateClassificationAccountingClassError>`
- **Wire**: `PATCH /v3/classifications/accounting-classes/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.UpdateClassificationAccountingClassError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.UpdateClassificationAccountingClassRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationAccountingClassRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationAccountingClassRequestDto` | `updateClassificationAccountingClassRequestDtoSchema` | `src/models/update-classification-accounting-class-request-dto.ts` |
| `ClassificationAccountingClassResponseDto` | `classificationAccountingClassResponseDtoSchema` | `src/models/classification-accounting-class-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateClassificationChartOfAccounts

- **Signature**: `updateClassificationChartOfAccounts(request: ClassificationsApi.UpdateClassificationChartOfAccountsRequest, options?: RequestOptions): ApiPromise<ClassificationChartOfAccountsResponseDto, ClassificationsApi.UpdateClassificationChartOfAccountsError>`
- **Wire**: `PATCH /v3/classifications/chart-of-accounts/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.UpdateClassificationChartOfAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.UpdateClassificationChartOfAccountsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationChartOfAccountsRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationChartOfAccountsRequestDto` | `updateClassificationChartOfAccountsRequestDtoSchema` | `src/models/update-classification-chart-of-accounts-request-dto.ts` |
| `ClassificationChartOfAccountsResponseDto` | `classificationChartOfAccountsResponseDtoSchema` | `src/models/classification-chart-of-accounts-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateClassificationDepartment

- **Signature**: `updateClassificationDepartment(request: ClassificationsApi.UpdateClassificationDepartmentRequest, options?: RequestOptions): ApiPromise<ClassificationDepartmentResponseDto, ClassificationsApi.UpdateClassificationDepartmentError>`
- **Wire**: `PATCH /v3/classifications/departments/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.UpdateClassificationDepartmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.UpdateClassificationDepartmentRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationDepartmentRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationDepartmentRequestDto` | `updateClassificationDepartmentRequestDtoSchema` | `src/models/update-classification-department-request-dto.ts` |
| `ClassificationDepartmentResponseDto` | `classificationDepartmentResponseDtoSchema` | `src/models/classification-department-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateClassificationEmployee

- **Signature**: `updateClassificationEmployee(request: ClassificationsApi.UpdateClassificationEmployeeRequest, options?: RequestOptions): ApiPromise<ClassificationEmployeeResponseDto, ClassificationsApi.UpdateClassificationEmployeeError>`
- **Wire**: `PATCH /v3/classifications/employees/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.UpdateClassificationEmployeeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.UpdateClassificationEmployeeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationEmployeeRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationEmployeeRequestDto` | `updateClassificationEmployeeRequestDtoSchema` | `src/models/update-classification-employee-request-dto.ts` |
| `ClassificationEmployeeResponseDto` | `classificationEmployeeResponseDtoSchema` | `src/models/classification-employee-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateClassificationItem

- **Signature**: `updateClassificationItem(request: ClassificationsApi.UpdateClassificationItemRequest, options?: RequestOptions): ApiPromise<ClassificationItemResponseDto, ClassificationsApi.UpdateClassificationItemError>`
- **Wire**: `PATCH /v3/classifications/items/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.UpdateClassificationItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.UpdateClassificationItemRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationItemRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationItemRequestDto` | `updateClassificationItemRequestDtoSchema` | `src/models/update-classification-item-request-dto.ts` |
| `ClassificationItemResponseDto` | `classificationItemResponseDtoSchema` | `src/models/classification-item-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateClassificationJob

- **Signature**: `updateClassificationJob(request: ClassificationsApi.UpdateClassificationJobRequest, options?: RequestOptions): ApiPromise<ClassificationJobResponseDto, ClassificationsApi.UpdateClassificationJobError>`
- **Wire**: `PATCH /v3/classifications/jobs/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.UpdateClassificationJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.UpdateClassificationJobRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationJobRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationJobRequestDto` | `updateClassificationJobRequestDtoSchema` | `src/models/update-classification-job-request-dto.ts` |
| `ClassificationJobResponseDto` | `classificationJobResponseDtoSchema` | `src/models/classification-job-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### updateClassificationLocation

- **Signature**: `updateClassificationLocation(request: ClassificationsApi.UpdateClassificationLocationRequest, options?: RequestOptions): ApiPromise<ClassificationLocationResponseDto, ClassificationsApi.UpdateClassificationLocationError>`
- **Wire**: `PATCH /v3/classifications/locations/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ClassificationsApi.UpdateClassificationLocationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ClassificationsApi.UpdateClassificationLocationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `UpdateClassificationLocationRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateClassificationLocationRequestDto` | `updateClassificationLocationRequestDtoSchema` | `src/models/update-classification-location-request-dto.ts` |
| `ClassificationLocationResponseDto` | `classificationLocationResponseDtoSchema` | `src/models/classification-location-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

