<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClassificationsApi — operations

Accessor: `client.classifications_api` · Source: `bill/apis/classifications_api.py` · 70 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.classifications_api.archive_classification_accounting_class

- **Route**: `POST /v3/classifications/accounting-classes/{id}/archive`
- **Server**: `default`
- **Signature**: `def archive_classification_accounting_class(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationAccountingClassResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationAccountingClassResponseDto, ArchiveClassificationAccountingClassErrorBody]`
- **Error**: `ArchiveClassificationAccountingClassErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationAccountingClassResponseDto` | `bill/models/classification_accounting_class_response_dto.py` |
| `ArchiveClassificationAccountingClassErrorBody` | `bill/errors/archive_classification_accounting_class_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.archive_classification_chart_of_accounts

- **Route**: `POST /v3/classifications/chart-of-accounts/{id}/archive`
- **Server**: `default`
- **Signature**: `def archive_classification_chart_of_accounts(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationChartOfAccountsResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationChartOfAccountsResponseDto, ArchiveClassificationChartOfAccountsErrorBody]`
- **Error**: `ArchiveClassificationChartOfAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationChartOfAccountsResponseDto` | `bill/models/classification_chart_of_accounts_response_dto.py` |
| `ArchiveClassificationChartOfAccountsErrorBody` | `bill/errors/archive_classification_chart_of_accounts_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.archive_classification_department

- **Route**: `POST /v3/classifications/departments/{id}/archive`
- **Server**: `default`
- **Signature**: `def archive_classification_department(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationDepartmentResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationDepartmentResponseDto, ArchiveClassificationDepartmentErrorBody]`
- **Error**: `ArchiveClassificationDepartmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationDepartmentResponseDto` | `bill/models/classification_department_response_dto.py` |
| `ArchiveClassificationDepartmentErrorBody` | `bill/errors/archive_classification_department_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.archive_classification_employee

- **Route**: `POST /v3/classifications/employees/{id}/archive`
- **Server**: `default`
- **Signature**: `def archive_classification_employee(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationEmployeeResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationEmployeeResponseDto, ArchiveClassificationEmployeeErrorBody]`
- **Error**: `ArchiveClassificationEmployeeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationEmployeeResponseDto` | `bill/models/classification_employee_response_dto.py` |
| `ArchiveClassificationEmployeeErrorBody` | `bill/errors/archive_classification_employee_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.archive_classification_item

- **Route**: `POST /v3/classifications/items/{id}/archive`
- **Server**: `default`
- **Signature**: `def archive_classification_item(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationItemResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationItemResponseDto, ArchiveClassificationItemErrorBody]`
- **Error**: `ArchiveClassificationItemErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationItemResponseDto` | `bill/models/classification_item_response_dto.py` |
| `ArchiveClassificationItemErrorBody` | `bill/errors/archive_classification_item_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.archive_classification_job

- **Route**: `POST /v3/classifications/jobs/{id}/archive`
- **Server**: `default`
- **Signature**: `def archive_classification_job(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationJobResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationJobResponseDto, ArchiveClassificationJobErrorBody]`
- **Error**: `ArchiveClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationJobResponseDto` | `bill/models/classification_job_response_dto.py` |
| `ArchiveClassificationJobErrorBody` | `bill/errors/archive_classification_job_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.archive_classification_location

- **Route**: `POST /v3/classifications/locations/{id}/archive`
- **Server**: `default`
- **Signature**: `def archive_classification_location(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationLocationResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationLocationResponseDto, ArchiveClassificationLocationErrorBody]`
- **Error**: `ArchiveClassificationLocationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationLocationResponseDto` | `bill/models/classification_location_response_dto.py` |
| `ArchiveClassificationLocationErrorBody` | `bill/errors/archive_classification_location_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_archive_classification_accounting_class

- **Route**: `POST /v3/classifications/accounting-classes/bulk/archive`
- **Server**: `default`
- **Signature**: `def bulk_archive_classification_accounting_class(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationAccountingClassBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationAccountingClassBulkResponseDto, BulkArchiveClassificationAccountingClassErrorBody]`
- **Error**: `BulkArchiveClassificationAccountingClassErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationAccountingClassBulkResponseDto` | `bill/models/classification_accounting_class_bulk_response_dto.py` |
| `BulkArchiveClassificationAccountingClassErrorBody` | `bill/errors/bulk_archive_classification_accounting_class_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_archive_classification_chart_of_accounts

- **Route**: `POST /v3/classifications/chart-of-accounts/bulk/archive`
- **Server**: `default`
- **Signature**: `def bulk_archive_classification_chart_of_accounts(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationChartOfAccountsBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkArchiveClassificationChartOfAccountsErrorBody]`
- **Error**: `BulkArchiveClassificationChartOfAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationChartOfAccountsBulkResponseDto` | `bill/models/classification_chart_of_accounts_bulk_response_dto.py` |
| `BulkArchiveClassificationChartOfAccountsErrorBody` | `bill/errors/bulk_archive_classification_chart_of_accounts_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_archive_classification_department

- **Route**: `POST /v3/classifications/departments/bulk/archive`
- **Server**: `default`
- **Signature**: `def bulk_archive_classification_department(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationDepartmentBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationDepartmentBulkResponseDto, BulkArchiveClassificationDepartmentErrorBody]`
- **Error**: `BulkArchiveClassificationDepartmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationDepartmentBulkResponseDto` | `bill/models/classification_department_bulk_response_dto.py` |
| `BulkArchiveClassificationDepartmentErrorBody` | `bill/errors/bulk_archive_classification_department_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_archive_classification_employee

- **Route**: `POST /v3/classifications/employees/bulk/archive`
- **Server**: `default`
- **Signature**: `def bulk_archive_classification_employee(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationEmployeeBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationEmployeeBulkResponseDto, BulkArchiveClassificationEmployeeErrorBody]`
- **Error**: `BulkArchiveClassificationEmployeeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationEmployeeBulkResponseDto` | `bill/models/classification_employee_bulk_response_dto.py` |
| `BulkArchiveClassificationEmployeeErrorBody` | `bill/errors/bulk_archive_classification_employee_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_archive_classification_item

- **Route**: `POST /v3/classifications/items/bulk/archive`
- **Server**: `default`
- **Signature**: `def bulk_archive_classification_item(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationItemBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationItemBulkResponseDto, BulkArchiveClassificationItemErrorBody]`
- **Error**: `BulkArchiveClassificationItemErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationItemBulkResponseDto` | `bill/models/classification_item_bulk_response_dto.py` |
| `BulkArchiveClassificationItemErrorBody` | `bill/errors/bulk_archive_classification_item_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_archive_classification_job

- **Route**: `POST /v3/classifications/jobs/bulk/archive`
- **Server**: `default`
- **Signature**: `def bulk_archive_classification_job(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationJobBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationJobBulkResponseDto, BulkArchiveClassificationJobErrorBody]`
- **Error**: `BulkArchiveClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationJobBulkResponseDto` | `bill/models/classification_job_bulk_response_dto.py` |
| `BulkArchiveClassificationJobErrorBody` | `bill/errors/bulk_archive_classification_job_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_archive_classification_location

- **Route**: `POST /v3/classifications/locations/bulk/archive`
- **Server**: `default`
- **Signature**: `def bulk_archive_classification_location(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationLocationBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationLocationBulkResponseDto, BulkArchiveClassificationLocationErrorBody]`
- **Error**: `BulkArchiveClassificationLocationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationLocationBulkResponseDto` | `bill/models/classification_location_bulk_response_dto.py` |
| `BulkArchiveClassificationLocationErrorBody` | `bill/errors/bulk_archive_classification_location_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_create_classification_accounting_class

- **Route**: `POST /v3/classifications/accounting-classes/bulk`
- **Server**: `default`
- **Signature**: `def bulk_create_classification_accounting_class(body: list[CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationAccountingClassBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationAccountingClassBulkResponseDto, BulkCreateClassificationAccountingClassErrorBody]`
- **Error**: `BulkCreateClassificationAccountingClassErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationAccountingClassRequestDto` | `bill/models/create_classification_accounting_class_request_dto.py` |
| `CreateClassificationAccountingClassRequestDtoDict` | `bill/models/create_classification_accounting_class_request_dto.py` |
| `ClassificationAccountingClassBulkResponseDto` | `bill/models/classification_accounting_class_bulk_response_dto.py` |
| `BulkCreateClassificationAccountingClassErrorBody` | `bill/errors/bulk_create_classification_accounting_class_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_create_classification_chart_of_accounts

- **Route**: `POST /v3/classifications/chart-of-accounts/bulk`
- **Server**: `default`
- **Signature**: `def bulk_create_classification_chart_of_accounts(body: list[CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationChartOfAccountsBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkCreateClassificationChartOfAccountsErrorBody]`
- **Error**: `BulkCreateClassificationChartOfAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationChartOfAccountsRequestDto` | `bill/models/create_classification_chart_of_accounts_request_dto.py` |
| `CreateClassificationChartOfAccountsRequestDtoDict` | `bill/models/create_classification_chart_of_accounts_request_dto.py` |
| `ClassificationChartOfAccountsBulkResponseDto` | `bill/models/classification_chart_of_accounts_bulk_response_dto.py` |
| `BulkCreateClassificationChartOfAccountsErrorBody` | `bill/errors/bulk_create_classification_chart_of_accounts_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_create_classification_department

- **Route**: `POST /v3/classifications/departments/bulk`
- **Server**: `default`
- **Signature**: `def bulk_create_classification_department(body: list[CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationDepartmentBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationDepartmentBulkResponseDto, BulkCreateClassificationDepartmentErrorBody]`
- **Error**: `BulkCreateClassificationDepartmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationDepartmentRequestDto` | `bill/models/create_classification_department_request_dto.py` |
| `CreateClassificationDepartmentRequestDtoDict` | `bill/models/create_classification_department_request_dto.py` |
| `ClassificationDepartmentBulkResponseDto` | `bill/models/classification_department_bulk_response_dto.py` |
| `BulkCreateClassificationDepartmentErrorBody` | `bill/errors/bulk_create_classification_department_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_create_classification_employee

- **Route**: `POST /v3/classifications/employees/bulk`
- **Server**: `default`
- **Signature**: `def bulk_create_classification_employee(body: list[CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationEmployeeBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationEmployeeBulkResponseDto, BulkCreateClassificationEmployeeErrorBody]`
- **Error**: `BulkCreateClassificationEmployeeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationEmployeeRequestDto` | `bill/models/create_classification_employee_request_dto.py` |
| `CreateClassificationEmployeeRequestDtoDict` | `bill/models/create_classification_employee_request_dto.py` |
| `ClassificationEmployeeBulkResponseDto` | `bill/models/classification_employee_bulk_response_dto.py` |
| `BulkCreateClassificationEmployeeErrorBody` | `bill/errors/bulk_create_classification_employee_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_create_classification_item

- **Route**: `POST /v3/classifications/items/bulk`
- **Server**: `default`
- **Signature**: `def bulk_create_classification_item(body: list[CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationItemBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationItemBulkResponseDto, BulkCreateClassificationItemErrorBody]`
- **Error**: `BulkCreateClassificationItemErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationItemRequestDto` | `bill/models/create_classification_item_request_dto.py` |
| `CreateClassificationItemRequestDtoDict` | `bill/models/create_classification_item_request_dto.py` |
| `ClassificationItemBulkResponseDto` | `bill/models/classification_item_bulk_response_dto.py` |
| `BulkCreateClassificationItemErrorBody` | `bill/errors/bulk_create_classification_item_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_create_classification_job

- **Route**: `POST /v3/classifications/jobs/bulk`
- **Server**: `default`
- **Signature**: `def bulk_create_classification_job(body: list[CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationJobBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationJobBulkResponseDto, BulkCreateClassificationJobErrorBody]`
- **Error**: `BulkCreateClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationJobRequestDto` | `bill/models/create_classification_job_request_dto.py` |
| `CreateClassificationJobRequestDtoDict` | `bill/models/create_classification_job_request_dto.py` |
| `ClassificationJobBulkResponseDto` | `bill/models/classification_job_bulk_response_dto.py` |
| `BulkCreateClassificationJobErrorBody` | `bill/errors/bulk_create_classification_job_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_create_classification_location

- **Route**: `POST /v3/classifications/locations/bulk`
- **Server**: `default`
- **Signature**: `def bulk_create_classification_location(body: list[CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationLocationBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationLocationBulkResponseDto, BulkCreateClassificationLocationErrorBody]`
- **Error**: `BulkCreateClassificationLocationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationLocationRequestDto` | `bill/models/create_classification_location_request_dto.py` |
| `CreateClassificationLocationRequestDtoDict` | `bill/models/create_classification_location_request_dto.py` |
| `ClassificationLocationBulkResponseDto` | `bill/models/classification_location_bulk_response_dto.py` |
| `BulkCreateClassificationLocationErrorBody` | `bill/errors/bulk_create_classification_location_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_restore_classification_accounting_class

- **Route**: `POST /v3/classifications/accounting-classes/bulk/restore`
- **Server**: `default`
- **Signature**: `def bulk_restore_classification_accounting_class(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationAccountingClassBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationAccountingClassBulkResponseDto, BulkRestoreClassificationAccountingClassErrorBody]`
- **Error**: `BulkRestoreClassificationAccountingClassErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationAccountingClassBulkResponseDto` | `bill/models/classification_accounting_class_bulk_response_dto.py` |
| `BulkRestoreClassificationAccountingClassErrorBody` | `bill/errors/bulk_restore_classification_accounting_class_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_restore_classification_chart_of_accounts

- **Route**: `POST /v3/classifications/chart-of-accounts/bulk/restore`
- **Server**: `default`
- **Signature**: `def bulk_restore_classification_chart_of_accounts(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationChartOfAccountsBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkRestoreClassificationChartOfAccountsErrorBody]`
- **Error**: `BulkRestoreClassificationChartOfAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationChartOfAccountsBulkResponseDto` | `bill/models/classification_chart_of_accounts_bulk_response_dto.py` |
| `BulkRestoreClassificationChartOfAccountsErrorBody` | `bill/errors/bulk_restore_classification_chart_of_accounts_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_restore_classification_department

- **Route**: `POST /v3/classifications/departments/bulk/restore`
- **Server**: `default`
- **Signature**: `def bulk_restore_classification_department(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationDepartmentBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationDepartmentBulkResponseDto, BulkRestoreClassificationDepartmentErrorBody]`
- **Error**: `BulkRestoreClassificationDepartmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationDepartmentBulkResponseDto` | `bill/models/classification_department_bulk_response_dto.py` |
| `BulkRestoreClassificationDepartmentErrorBody` | `bill/errors/bulk_restore_classification_department_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_restore_classification_employee

- **Route**: `POST /v3/classifications/employees/bulk/restore`
- **Server**: `default`
- **Signature**: `def bulk_restore_classification_employee(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationEmployeeBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationEmployeeBulkResponseDto, BulkRestoreClassificationEmployeeErrorBody]`
- **Error**: `BulkRestoreClassificationEmployeeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationEmployeeBulkResponseDto` | `bill/models/classification_employee_bulk_response_dto.py` |
| `BulkRestoreClassificationEmployeeErrorBody` | `bill/errors/bulk_restore_classification_employee_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_restore_classification_item

- **Route**: `POST /v3/classifications/items/bulk/restore`
- **Server**: `default`
- **Signature**: `def bulk_restore_classification_item(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationItemBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationItemBulkResponseDto, BulkRestoreClassificationItemErrorBody]`
- **Error**: `BulkRestoreClassificationItemErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationItemBulkResponseDto` | `bill/models/classification_item_bulk_response_dto.py` |
| `BulkRestoreClassificationItemErrorBody` | `bill/errors/bulk_restore_classification_item_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_restore_classification_job

- **Route**: `POST /v3/classifications/jobs/bulk/restore`
- **Server**: `default`
- **Signature**: `def bulk_restore_classification_job(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationJobBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationJobBulkResponseDto, BulkRestoreClassificationJobErrorBody]`
- **Error**: `BulkRestoreClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationJobBulkResponseDto` | `bill/models/classification_job_bulk_response_dto.py` |
| `BulkRestoreClassificationJobErrorBody` | `bill/errors/bulk_restore_classification_job_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_restore_classification_location

- **Route**: `POST /v3/classifications/locations/bulk/restore`
- **Server**: `default`
- **Signature**: `def bulk_restore_classification_location(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationLocationBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationLocationBulkResponseDto, BulkRestoreClassificationLocationErrorBody]`
- **Error**: `BulkRestoreClassificationLocationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationLocationBulkResponseDto` | `bill/models/classification_location_bulk_response_dto.py` |
| `BulkRestoreClassificationLocationErrorBody` | `bill/errors/bulk_restore_classification_location_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_update_classification_accounting_class

- **Route**: `PATCH /v3/classifications/accounting-classes/bulk`
- **Server**: `default`
- **Signature**: `def bulk_update_classification_accounting_class(body: list[UpdateClassificationAccountingClassWithIdRequestDto | UpdateClassificationAccountingClassWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationAccountingClassBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationAccountingClassBulkResponseDto, BulkUpdateClassificationAccountingClassErrorBody]`
- **Error**: `BulkUpdateClassificationAccountingClassErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationAccountingClassWithIdRequestDto` | `bill/models/update_classification_accounting_class_with_id_request_dto.py` |
| `UpdateClassificationAccountingClassWithIdRequestDtoDict` | `bill/models/update_classification_accounting_class_with_id_request_dto.py` |
| `ClassificationAccountingClassBulkResponseDto` | `bill/models/classification_accounting_class_bulk_response_dto.py` |
| `BulkUpdateClassificationAccountingClassErrorBody` | `bill/errors/bulk_update_classification_accounting_class_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_update_classification_chart_of_accounts

- **Route**: `PATCH /v3/classifications/chart-of-accounts/bulk`
- **Server**: `default`
- **Signature**: `def bulk_update_classification_chart_of_accounts(body: list[UpdateClassificationChartOfAccountsWithIdRequestDto | UpdateClassificationChartOfAccountsWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationChartOfAccountsBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkUpdateClassificationChartOfAccountsErrorBody]`
- **Error**: `BulkUpdateClassificationChartOfAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationChartOfAccountsWithIdRequestDto` | `bill/models/update_classification_chart_of_accounts_with_id_request_dto.py` |
| `UpdateClassificationChartOfAccountsWithIdRequestDtoDict` | `bill/models/update_classification_chart_of_accounts_with_id_request_dto.py` |
| `ClassificationChartOfAccountsBulkResponseDto` | `bill/models/classification_chart_of_accounts_bulk_response_dto.py` |
| `BulkUpdateClassificationChartOfAccountsErrorBody` | `bill/errors/bulk_update_classification_chart_of_accounts_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_update_classification_department

- **Route**: `PATCH /v3/classifications/departments/bulk`
- **Server**: `default`
- **Signature**: `def bulk_update_classification_department(body: list[UpdateClassificationDepartmentWithIdRequestDto | UpdateClassificationDepartmentWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationDepartmentBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationDepartmentBulkResponseDto, BulkUpdateClassificationDepartmentErrorBody]`
- **Error**: `BulkUpdateClassificationDepartmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationDepartmentWithIdRequestDto` | `bill/models/update_classification_department_with_id_request_dto.py` |
| `UpdateClassificationDepartmentWithIdRequestDtoDict` | `bill/models/update_classification_department_with_id_request_dto.py` |
| `ClassificationDepartmentBulkResponseDto` | `bill/models/classification_department_bulk_response_dto.py` |
| `BulkUpdateClassificationDepartmentErrorBody` | `bill/errors/bulk_update_classification_department_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_update_classification_employee

- **Route**: `PATCH /v3/classifications/employees/bulk`
- **Server**: `default`
- **Signature**: `def bulk_update_classification_employee(body: list[UpdateClassificationEmployeeWithIdRequestDto | UpdateClassificationEmployeeWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationEmployeeBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationEmployeeBulkResponseDto, BulkUpdateClassificationEmployeeErrorBody]`
- **Error**: `BulkUpdateClassificationEmployeeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationEmployeeWithIdRequestDto` | `bill/models/update_classification_employee_with_id_request_dto.py` |
| `UpdateClassificationEmployeeWithIdRequestDtoDict` | `bill/models/update_classification_employee_with_id_request_dto.py` |
| `ClassificationEmployeeBulkResponseDto` | `bill/models/classification_employee_bulk_response_dto.py` |
| `BulkUpdateClassificationEmployeeErrorBody` | `bill/errors/bulk_update_classification_employee_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_update_classification_item

- **Route**: `PATCH /v3/classifications/items/bulk`
- **Server**: `default`
- **Signature**: `def bulk_update_classification_item(body: list[UpdateClassificationItemWithIdRequestDto | UpdateClassificationItemWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationItemBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationItemBulkResponseDto, BulkUpdateClassificationItemErrorBody]`
- **Error**: `BulkUpdateClassificationItemErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationItemWithIdRequestDto` | `bill/models/update_classification_item_with_id_request_dto.py` |
| `UpdateClassificationItemWithIdRequestDtoDict` | `bill/models/update_classification_item_with_id_request_dto.py` |
| `ClassificationItemBulkResponseDto` | `bill/models/classification_item_bulk_response_dto.py` |
| `BulkUpdateClassificationItemErrorBody` | `bill/errors/bulk_update_classification_item_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_update_classification_job

- **Route**: `PATCH /v3/classifications/jobs/bulk`
- **Server**: `default`
- **Signature**: `def bulk_update_classification_job(body: list[UpdateClassificationJobWithIdRequestDto | UpdateClassificationJobWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationJobBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationJobBulkResponseDto, BulkUpdateClassificationJobErrorBody]`
- **Error**: `BulkUpdateClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationJobWithIdRequestDto` | `bill/models/update_classification_job_with_id_request_dto.py` |
| `UpdateClassificationJobWithIdRequestDtoDict` | `bill/models/update_classification_job_with_id_request_dto.py` |
| `ClassificationJobBulkResponseDto` | `bill/models/classification_job_bulk_response_dto.py` |
| `BulkUpdateClassificationJobErrorBody` | `bill/errors/bulk_update_classification_job_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.bulk_update_classification_location

- **Route**: `PATCH /v3/classifications/locations/bulk`
- **Server**: `default`
- **Signature**: `def bulk_update_classification_location(body: list[UpdateClassificationLocationWithIdRequestDto | UpdateClassificationLocationWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationLocationBulkResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationLocationBulkResponseDto, BulkUpdateClassificationLocationErrorBody]`
- **Error**: `BulkUpdateClassificationLocationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationLocationWithIdRequestDto` | `bill/models/update_classification_location_with_id_request_dto.py` |
| `UpdateClassificationLocationWithIdRequestDtoDict` | `bill/models/update_classification_location_with_id_request_dto.py` |
| `ClassificationLocationBulkResponseDto` | `bill/models/classification_location_bulk_response_dto.py` |
| `BulkUpdateClassificationLocationErrorBody` | `bill/errors/bulk_update_classification_location_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.create_classification_accounting_class

- **Route**: `POST /v3/classifications/accounting-classes`
- **Server**: `default`
- **Signature**: `def create_classification_accounting_class(body: CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationAccountingClassResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationAccountingClassResponseDto, CreateClassificationAccountingClassErrorBody]`
- **Error**: `CreateClassificationAccountingClassErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationAccountingClassRequestDto` | `bill/models/create_classification_accounting_class_request_dto.py` |
| `CreateClassificationAccountingClassRequestDtoDict` | `bill/models/create_classification_accounting_class_request_dto.py` |
| `ClassificationAccountingClassResponseDto` | `bill/models/classification_accounting_class_response_dto.py` |
| `CreateClassificationAccountingClassErrorBody` | `bill/errors/create_classification_accounting_class_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.create_classification_chart_of_accounts

- **Route**: `POST /v3/classifications/chart-of-accounts`
- **Server**: `default`
- **Signature**: `def create_classification_chart_of_accounts(body: CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationChartOfAccountsResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationChartOfAccountsResponseDto, CreateClassificationChartOfAccountsErrorBody]`
- **Error**: `CreateClassificationChartOfAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationChartOfAccountsRequestDto` | `bill/models/create_classification_chart_of_accounts_request_dto.py` |
| `CreateClassificationChartOfAccountsRequestDtoDict` | `bill/models/create_classification_chart_of_accounts_request_dto.py` |
| `ClassificationChartOfAccountsResponseDto` | `bill/models/classification_chart_of_accounts_response_dto.py` |
| `CreateClassificationChartOfAccountsErrorBody` | `bill/errors/create_classification_chart_of_accounts_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.create_classification_department

- **Route**: `POST /v3/classifications/departments`
- **Server**: `default`
- **Signature**: `def create_classification_department(body: CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationDepartmentResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationDepartmentResponseDto, CreateClassificationDepartmentErrorBody]`
- **Error**: `CreateClassificationDepartmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationDepartmentRequestDto` | `bill/models/create_classification_department_request_dto.py` |
| `CreateClassificationDepartmentRequestDtoDict` | `bill/models/create_classification_department_request_dto.py` |
| `ClassificationDepartmentResponseDto` | `bill/models/classification_department_response_dto.py` |
| `CreateClassificationDepartmentErrorBody` | `bill/errors/create_classification_department_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.create_classification_employee

- **Route**: `POST /v3/classifications/employees`
- **Server**: `default`
- **Signature**: `def create_classification_employee(body: CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationEmployeeResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationEmployeeResponseDto, CreateClassificationEmployeeErrorBody]`
- **Error**: `CreateClassificationEmployeeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationEmployeeRequestDto` | `bill/models/create_classification_employee_request_dto.py` |
| `CreateClassificationEmployeeRequestDtoDict` | `bill/models/create_classification_employee_request_dto.py` |
| `ClassificationEmployeeResponseDto` | `bill/models/classification_employee_response_dto.py` |
| `CreateClassificationEmployeeErrorBody` | `bill/errors/create_classification_employee_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.create_classification_item

- **Route**: `POST /v3/classifications/items`
- **Server**: `default`
- **Signature**: `def create_classification_item(body: CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationItemResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationItemResponseDto, CreateClassificationItemErrorBody]`
- **Error**: `CreateClassificationItemErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationItemRequestDto` | `bill/models/create_classification_item_request_dto.py` |
| `CreateClassificationItemRequestDtoDict` | `bill/models/create_classification_item_request_dto.py` |
| `ClassificationItemResponseDto` | `bill/models/classification_item_response_dto.py` |
| `CreateClassificationItemErrorBody` | `bill/errors/create_classification_item_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.create_classification_job

- **Route**: `POST /v3/classifications/jobs`
- **Server**: `default`
- **Signature**: `def create_classification_job(body: CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationJobResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationJobResponseDto, CreateClassificationJobErrorBody]`
- **Error**: `CreateClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationJobRequestDto` | `bill/models/create_classification_job_request_dto.py` |
| `CreateClassificationJobRequestDtoDict` | `bill/models/create_classification_job_request_dto.py` |
| `ClassificationJobResponseDto` | `bill/models/classification_job_response_dto.py` |
| `CreateClassificationJobErrorBody` | `bill/errors/create_classification_job_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.create_classification_location

- **Route**: `POST /v3/classifications/locations`
- **Server**: `default`
- **Signature**: `def create_classification_location(body: CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationLocationResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationLocationResponseDto, CreateClassificationLocationErrorBody]`
- **Error**: `CreateClassificationLocationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateClassificationLocationRequestDto` | `bill/models/create_classification_location_request_dto.py` |
| `CreateClassificationLocationRequestDtoDict` | `bill/models/create_classification_location_request_dto.py` |
| `ClassificationLocationResponseDto` | `bill/models/classification_location_response_dto.py` |
| `CreateClassificationLocationErrorBody` | `bill/errors/create_classification_location_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.get_classification_accounting_class

- **Route**: `GET /v3/classifications/accounting-classes/{id}`
- **Server**: `default`
- **Signature**: `def get_classification_accounting_class(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationAccountingClassResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationAccountingClassResponseDto, GetClassificationAccountingClassErrorBody]`
- **Error**: `GetClassificationAccountingClassErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationAccountingClassResponseDto` | `bill/models/classification_accounting_class_response_dto.py` |
| `GetClassificationAccountingClassErrorBody` | `bill/errors/get_classification_accounting_class_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.get_classification_chart_of_accounts

- **Route**: `GET /v3/classifications/chart-of-accounts/{id}`
- **Server**: `default`
- **Signature**: `def get_classification_chart_of_accounts(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationChartOfAccountsResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationChartOfAccountsResponseDto, GetClassificationChartOfAccountsErrorBody]`
- **Error**: `GetClassificationChartOfAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationChartOfAccountsResponseDto` | `bill/models/classification_chart_of_accounts_response_dto.py` |
| `GetClassificationChartOfAccountsErrorBody` | `bill/errors/get_classification_chart_of_accounts_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.get_classification_department

- **Route**: `GET /v3/classifications/departments/{id}`
- **Server**: `default`
- **Signature**: `def get_classification_department(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationDepartmentResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationDepartmentResponseDto, GetClassificationDepartmentErrorBody]`
- **Error**: `GetClassificationDepartmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationDepartmentResponseDto` | `bill/models/classification_department_response_dto.py` |
| `GetClassificationDepartmentErrorBody` | `bill/errors/get_classification_department_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.get_classification_employee

- **Route**: `GET /v3/classifications/employees/{id}`
- **Server**: `default`
- **Signature**: `def get_classification_employee(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationEmployeeResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationEmployeeResponseDto, GetClassificationEmployeeErrorBody]`
- **Error**: `GetClassificationEmployeeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationEmployeeResponseDto` | `bill/models/classification_employee_response_dto.py` |
| `GetClassificationEmployeeErrorBody` | `bill/errors/get_classification_employee_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.get_classification_item

- **Route**: `GET /v3/classifications/items/{id}`
- **Server**: `default`
- **Signature**: `def get_classification_item(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationItemResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationItemResponseDto, GetClassificationItemErrorBody]`
- **Error**: `GetClassificationItemErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationItemResponseDto` | `bill/models/classification_item_response_dto.py` |
| `GetClassificationItemErrorBody` | `bill/errors/get_classification_item_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.get_classification_job

- **Route**: `GET /v3/classifications/jobs/{id}`
- **Server**: `default`
- **Signature**: `def get_classification_job(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationJobResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationJobResponseDto, GetClassificationJobErrorBody]`
- **Error**: `GetClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationJobResponseDto` | `bill/models/classification_job_response_dto.py` |
| `GetClassificationJobErrorBody` | `bill/errors/get_classification_job_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.get_classification_location

- **Route**: `GET /v3/classifications/locations/{id}`
- **Server**: `default`
- **Signature**: `def get_classification_location(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationLocationResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationLocationResponseDto, GetClassificationLocationErrorBody]`
- **Error**: `GetClassificationLocationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationLocationResponseDto` | `bill/models/classification_location_response_dto.py` |
| `GetClassificationLocationErrorBody` | `bill/errors/get_classification_location_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.list_classification_accounting_classes

- **Route**: `GET /v3/classifications/accounting-classes`
- **Server**: `default`
- **Signature**: `def list_classification_accounting_classes(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoClassificationAccountingClassResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoClassificationAccountingClassResponseDto, ListClassificationAccountingClassesErrorBody]`
- **Error**: `ListClassificationAccountingClassesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoClassificationAccountingClassResponseDto` | `bill/models/list_response_dto_classification_accounting_class_response_dto.py` |
| `ListClassificationAccountingClassesErrorBody` | `bill/errors/list_classification_accounting_classes_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.list_classification_chart_of_accounts

- **Route**: `GET /v3/classifications/chart-of-accounts`
- **Server**: `default`
- **Signature**: `def list_classification_chart_of_accounts(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoClassificationChartOfAccountsResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoClassificationChartOfAccountsResponseDto, ListClassificationChartOfAccountsErrorBody]`
- **Error**: `ListClassificationChartOfAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoClassificationChartOfAccountsResponseDto` | `bill/models/list_response_dto_classification_chart_of_accounts_response_dto.py` |
| `ListClassificationChartOfAccountsErrorBody` | `bill/errors/list_classification_chart_of_accounts_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.list_classification_departments

- **Route**: `GET /v3/classifications/departments`
- **Server**: `default`
- **Signature**: `def list_classification_departments(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoClassificationDepartmentResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoClassificationDepartmentResponseDto, ListClassificationDepartmentsErrorBody]`
- **Error**: `ListClassificationDepartmentsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoClassificationDepartmentResponseDto` | `bill/models/list_response_dto_classification_department_response_dto.py` |
| `ListClassificationDepartmentsErrorBody` | `bill/errors/list_classification_departments_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.list_classification_employees

- **Route**: `GET /v3/classifications/employees`
- **Server**: `default`
- **Signature**: `def list_classification_employees(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoClassificationEmployeeResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoClassificationEmployeeResponseDto, ListClassificationEmployeesErrorBody]`
- **Error**: `ListClassificationEmployeesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoClassificationEmployeeResponseDto` | `bill/models/list_response_dto_classification_employee_response_dto.py` |
| `ListClassificationEmployeesErrorBody` | `bill/errors/list_classification_employees_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.list_classification_items

- **Route**: `GET /v3/classifications/items`
- **Server**: `default`
- **Signature**: `def list_classification_items(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoClassificationItemResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoClassificationItemResponseDto, ListClassificationItemsErrorBody]`
- **Error**: `ListClassificationItemsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoClassificationItemResponseDto` | `bill/models/list_response_dto_classification_item_response_dto.py` |
| `ListClassificationItemsErrorBody` | `bill/errors/list_classification_items_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.list_classification_jobs

- **Route**: `GET /v3/classifications/jobs`
- **Server**: `default`
- **Signature**: `def list_classification_jobs(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoClassificationJobResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoClassificationJobResponseDto, ListClassificationJobsErrorBody]`
- **Error**: `ListClassificationJobsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoClassificationJobResponseDto` | `bill/models/list_response_dto_classification_job_response_dto.py` |
| `ListClassificationJobsErrorBody` | `bill/errors/list_classification_jobs_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.list_classification_locations

- **Route**: `GET /v3/classifications/locations`
- **Server**: `default`
- **Signature**: `def list_classification_locations(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoClassificationLocationResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoClassificationLocationResponseDto, ListClassificationLocationsErrorBody]`
- **Error**: `ListClassificationLocationsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoClassificationLocationResponseDto` | `bill/models/list_response_dto_classification_location_response_dto.py` |
| `ListClassificationLocationsErrorBody` | `bill/errors/list_classification_locations_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.restore_classification_accounting_class

- **Route**: `POST /v3/classifications/accounting-classes/{id}/restore`
- **Server**: `default`
- **Signature**: `def restore_classification_accounting_class(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationAccountingClassResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationAccountingClassResponseDto, RestoreClassificationAccountingClassErrorBody]`
- **Error**: `RestoreClassificationAccountingClassErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationAccountingClassResponseDto` | `bill/models/classification_accounting_class_response_dto.py` |
| `RestoreClassificationAccountingClassErrorBody` | `bill/errors/restore_classification_accounting_class_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.restore_classification_chart_of_accounts

- **Route**: `POST /v3/classifications/chart-of-accounts/{id}/restore`
- **Server**: `default`
- **Signature**: `def restore_classification_chart_of_accounts(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationChartOfAccountsResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationChartOfAccountsResponseDto, RestoreClassificationChartOfAccountsErrorBody]`
- **Error**: `RestoreClassificationChartOfAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationChartOfAccountsResponseDto` | `bill/models/classification_chart_of_accounts_response_dto.py` |
| `RestoreClassificationChartOfAccountsErrorBody` | `bill/errors/restore_classification_chart_of_accounts_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.restore_classification_department

- **Route**: `POST /v3/classifications/departments/{id}/restore`
- **Server**: `default`
- **Signature**: `def restore_classification_department(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationDepartmentResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationDepartmentResponseDto, RestoreClassificationDepartmentErrorBody]`
- **Error**: `RestoreClassificationDepartmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationDepartmentResponseDto` | `bill/models/classification_department_response_dto.py` |
| `RestoreClassificationDepartmentErrorBody` | `bill/errors/restore_classification_department_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.restore_classification_employee

- **Route**: `POST /v3/classifications/employees/{id}/restore`
- **Server**: `default`
- **Signature**: `def restore_classification_employee(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationEmployeeResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationEmployeeResponseDto, RestoreClassificationEmployeeErrorBody]`
- **Error**: `RestoreClassificationEmployeeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationEmployeeResponseDto` | `bill/models/classification_employee_response_dto.py` |
| `RestoreClassificationEmployeeErrorBody` | `bill/errors/restore_classification_employee_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.restore_classification_item

- **Route**: `POST /v3/classifications/items/{id}/restore`
- **Server**: `default`
- **Signature**: `def restore_classification_item(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationItemResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationItemResponseDto, RestoreClassificationItemErrorBody]`
- **Error**: `RestoreClassificationItemErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationItemResponseDto` | `bill/models/classification_item_response_dto.py` |
| `RestoreClassificationItemErrorBody` | `bill/errors/restore_classification_item_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.restore_classification_job

- **Route**: `POST /v3/classifications/jobs/{id}/restore`
- **Server**: `default`
- **Signature**: `def restore_classification_job(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationJobResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationJobResponseDto, RestoreClassificationJobErrorBody]`
- **Error**: `RestoreClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationJobResponseDto` | `bill/models/classification_job_response_dto.py` |
| `RestoreClassificationJobErrorBody` | `bill/errors/restore_classification_job_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.restore_classification_location

- **Route**: `POST /v3/classifications/locations/{id}/restore`
- **Server**: `default`
- **Signature**: `def restore_classification_location(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ClassificationLocationResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationLocationResponseDto, RestoreClassificationLocationErrorBody]`
- **Error**: `RestoreClassificationLocationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClassificationLocationResponseDto` | `bill/models/classification_location_response_dto.py` |
| `RestoreClassificationLocationErrorBody` | `bill/errors/restore_classification_location_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.update_classification_accounting_class

- **Route**: `PATCH /v3/classifications/accounting-classes/{id}`
- **Server**: `default`
- **Signature**: `def update_classification_accounting_class(id_: str, body: UpdateClassificationAccountingClassRequestDto | UpdateClassificationAccountingClassRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationAccountingClassResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationAccountingClassResponseDto, UpdateClassificationAccountingClassErrorBody]`
- **Error**: `UpdateClassificationAccountingClassErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationAccountingClassRequestDto` | `bill/models/update_classification_accounting_class_request_dto.py` |
| `UpdateClassificationAccountingClassRequestDtoDict` | `bill/models/update_classification_accounting_class_request_dto.py` |
| `ClassificationAccountingClassResponseDto` | `bill/models/classification_accounting_class_response_dto.py` |
| `UpdateClassificationAccountingClassErrorBody` | `bill/errors/update_classification_accounting_class_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.update_classification_chart_of_accounts

- **Route**: `PATCH /v3/classifications/chart-of-accounts/{id}`
- **Server**: `default`
- **Signature**: `def update_classification_chart_of_accounts(id_: str, body: UpdateClassificationChartOfAccountsRequestDto | UpdateClassificationChartOfAccountsRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationChartOfAccountsResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationChartOfAccountsResponseDto, UpdateClassificationChartOfAccountsErrorBody]`
- **Error**: `UpdateClassificationChartOfAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationChartOfAccountsRequestDto` | `bill/models/update_classification_chart_of_accounts_request_dto.py` |
| `UpdateClassificationChartOfAccountsRequestDtoDict` | `bill/models/update_classification_chart_of_accounts_request_dto.py` |
| `ClassificationChartOfAccountsResponseDto` | `bill/models/classification_chart_of_accounts_response_dto.py` |
| `UpdateClassificationChartOfAccountsErrorBody` | `bill/errors/update_classification_chart_of_accounts_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.update_classification_department

- **Route**: `PATCH /v3/classifications/departments/{id}`
- **Server**: `default`
- **Signature**: `def update_classification_department(id_: str, body: UpdateClassificationDepartmentRequestDto | UpdateClassificationDepartmentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationDepartmentResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationDepartmentResponseDto, UpdateClassificationDepartmentErrorBody]`
- **Error**: `UpdateClassificationDepartmentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationDepartmentRequestDto` | `bill/models/update_classification_department_request_dto.py` |
| `UpdateClassificationDepartmentRequestDtoDict` | `bill/models/update_classification_department_request_dto.py` |
| `ClassificationDepartmentResponseDto` | `bill/models/classification_department_response_dto.py` |
| `UpdateClassificationDepartmentErrorBody` | `bill/errors/update_classification_department_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.update_classification_employee

- **Route**: `PATCH /v3/classifications/employees/{id}`
- **Server**: `default`
- **Signature**: `def update_classification_employee(id_: str, body: UpdateClassificationEmployeeRequestDto | UpdateClassificationEmployeeRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationEmployeeResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationEmployeeResponseDto, UpdateClassificationEmployeeErrorBody]`
- **Error**: `UpdateClassificationEmployeeErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationEmployeeRequestDto` | `bill/models/update_classification_employee_request_dto.py` |
| `UpdateClassificationEmployeeRequestDtoDict` | `bill/models/update_classification_employee_request_dto.py` |
| `ClassificationEmployeeResponseDto` | `bill/models/classification_employee_response_dto.py` |
| `UpdateClassificationEmployeeErrorBody` | `bill/errors/update_classification_employee_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.update_classification_item

- **Route**: `PATCH /v3/classifications/items/{id}`
- **Server**: `default`
- **Signature**: `def update_classification_item(id_: str, body: UpdateClassificationItemRequestDto | UpdateClassificationItemRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationItemResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationItemResponseDto, UpdateClassificationItemErrorBody]`
- **Error**: `UpdateClassificationItemErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationItemRequestDto` | `bill/models/update_classification_item_request_dto.py` |
| `UpdateClassificationItemRequestDtoDict` | `bill/models/update_classification_item_request_dto.py` |
| `ClassificationItemResponseDto` | `bill/models/classification_item_response_dto.py` |
| `UpdateClassificationItemErrorBody` | `bill/errors/update_classification_item_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.update_classification_job

- **Route**: `PATCH /v3/classifications/jobs/{id}`
- **Server**: `default`
- **Signature**: `def update_classification_job(id_: str, body: UpdateClassificationJobRequestDto | UpdateClassificationJobRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationJobResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationJobResponseDto, UpdateClassificationJobErrorBody]`
- **Error**: `UpdateClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationJobRequestDto` | `bill/models/update_classification_job_request_dto.py` |
| `UpdateClassificationJobRequestDtoDict` | `bill/models/update_classification_job_request_dto.py` |
| `ClassificationJobResponseDto` | `bill/models/classification_job_response_dto.py` |
| `UpdateClassificationJobErrorBody` | `bill/errors/update_classification_job_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.classifications_api.update_classification_location

- **Route**: `PATCH /v3/classifications/locations/{id}`
- **Server**: `default`
- **Signature**: `def update_classification_location(id_: str, body: UpdateClassificationLocationRequestDto | UpdateClassificationLocationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ClassificationLocationResponseDto`
- **Returns (raw)**: `ApiResult[ClassificationLocationResponseDto, UpdateClassificationLocationErrorBody]`
- **Error**: `UpdateClassificationLocationErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateClassificationLocationRequestDto` | `bill/models/update_classification_location_request_dto.py` |
| `UpdateClassificationLocationRequestDtoDict` | `bill/models/update_classification_location_request_dto.py` |
| `ClassificationLocationResponseDto` | `bill/models/classification_location_response_dto.py` |
| `UpdateClassificationLocationErrorBody` | `bill/errors/update_classification_location_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

