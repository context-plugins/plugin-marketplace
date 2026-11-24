<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `basiq/apis/reports.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.reports.createreport

- **Route**: `POST /reports`
- **Auth**: `services_token`
- **Signature**: `def createreport(body: ReportsRequest | ReportsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ReportsResponse`
- **Returns (raw)**: `ApiResult[ReportsResponse, CreatereportErrorBody]`
- **Error**: `CreatereportErrorBody` — **Case A (typed)**
- **Error arms**: `ReportsResponse12` [400] · `Reports403Error1` [403] · `Reports404Error1` [404] · `Reports500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportsRequest` | `basiq/models/reports_request.py` |
| `ReportsRequestDict` | `basiq/models/reports_request.py` |
| `ReportsResponse` | `basiq/models/reports_response.py` |
| `CreatereportErrorBody` | `basiq/errors/createreport_error.py` |
| `ReportsResponse12` | `basiq/models/unions/reports_response12.py` |
| `Reports403Error1` | `basiq/models/reports403_error1.py` |
| `Reports404Error1` | `basiq/models/reports404_error1.py` |
| `Reports500Error1` | `basiq/models/reports500_error1.py` |

### client.reports.delete_report

- **Route**: `DELETE /reports/{id}`
- **Auth**: `services_token`
- **Signature**: `def delete_report(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteReportErrorBody]`
- **Error**: `DeleteReportErrorBody` — **Case A (typed)**
- **Error arms**: `Reports400Error21` [400] · `Reports403Error31` [403] · `Reports404Error31` [404] · `Reports500Error31` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteReportErrorBody` | `basiq/errors/delete_report_error.py` |
| `Reports400Error21` | `basiq/models/reports400_error21.py` |
| `Reports403Error31` | `basiq/models/reports403_error31.py` |
| `Reports404Error31` | `basiq/models/reports404_error31.py` |
| `Reports500Error31` | `basiq/models/reports500_error31.py` |

### client.reports.list_report_types

- **Route**: `GET /reports/types`
- **Auth**: `services_token`
- **Signature**: `def list_report_types(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ReportsTypesResponse`
- **Returns (raw)**: `ApiResult[ReportsTypesResponse, ListReportTypesErrorBody]`
- **Error**: `ListReportTypesErrorBody` — **Case A (typed)**
- **Error arms**: `ReportsTypes400Error1` [400] · `ReportsTypes403Error1` [403] · `ReportsTypes404Error1` [404] · `ReportsTypes500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportsTypesResponse` | `basiq/models/reports_types_response.py` |
| `ListReportTypesErrorBody` | `basiq/errors/list_report_types_error.py` |
| `ReportsTypes400Error1` | `basiq/models/reports_types400_error1.py` |
| `ReportsTypes403Error1` | `basiq/models/reports_types403_error1.py` |
| `ReportsTypes404Error1` | `basiq/models/reports_types404_error1.py` |
| `ReportsTypes500Error1` | `basiq/models/reports_types500_error1.py` |

### client.reports.listallreports

- **Route**: `GET /reports`
- **Auth**: `services_token`
- **Signature**: `def listallreports(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ReportsResponse2`
- **Returns (raw)**: `ApiResult[ReportsResponse2, ListallreportsErrorBody]`
- **Error**: `ListallreportsErrorBody` — **Case A (typed)**
- **Error arms**: `Reports400Error1` [400] · `Reports403Error21` [403] · `Reports404Error21` [404] · `Reports500Error21` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportsResponse2` | `basiq/models/reports_response2.py` |
| `ListallreportsErrorBody` | `basiq/errors/listallreports_error.py` |
| `Reports400Error1` | `basiq/models/reports400_error1.py` |
| `Reports403Error21` | `basiq/models/reports403_error21.py` |
| `Reports404Error21` | `basiq/models/reports404_error21.py` |
| `Reports500Error21` | `basiq/models/reports500_error21.py` |

### client.reports.retrieve_report

- **Route**: `GET /reports/{id}`
- **Auth**: `services_token`
- **Signature**: `def retrieve_report(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, RetrieveReportErrorBody]`
- **Error**: `RetrieveReportErrorBody` — **Case A (typed)**
- **Error arms**: `Reports400Error21` [400] · `Reports403Error31` [403] · `Reports404Error31` [404] · `Reports500Error31` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RetrieveReportErrorBody` | `basiq/errors/retrieve_report_error.py` |
| `Reports400Error21` | `basiq/models/reports400_error21.py` |
| `Reports403Error31` | `basiq/models/reports403_error31.py` |
| `Reports404Error31` | `basiq/models/reports404_error31.py` |
| `Reports500Error31` | `basiq/models/reports500_error31.py` |

### client.reports.retrieve_report_transactions

- **Route**: `GET /reports/{reportId}/transactions`
- **Auth**: `services_token`
- **Signature**: `def retrieve_report_transactions(report_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `report_id`
- **Params**: `report_id` — path `reportId` · `filter_` — query `filter`
- **Returns (parsed)**: `TransactionsContainerObject`
- **Returns (raw)**: `ApiResult[TransactionsContainerObject, RetrieveReportTransactionsErrorBody]`
- **Error**: `RetrieveReportTransactionsErrorBody` — **Case A (typed)**
- **Error arms**: `ReportsTransactions400Error1` [400] · `ReportsTransactions403Error1` [403] · `ReportsTransactions404Error1` [404] · `ReportsTransactions500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransactionsContainerObject` | `basiq/models/transactions_container_object.py` |
| `RetrieveReportTransactionsErrorBody` | `basiq/errors/retrieve_report_transactions_error.py` |
| `ReportsTransactions400Error1` | `basiq/models/reports_transactions400_error1.py` |
| `ReportsTransactions403Error1` | `basiq/models/reports_transactions403_error1.py` |
| `ReportsTransactions404Error1` | `basiq/models/reports_transactions404_error1.py` |
| `ReportsTransactions500Error1` | `basiq/models/reports_transactions500_error1.py` |

### client.reports.retrieve_specific_report_type

- **Route**: `GET /reports/types/{reportTypeId}`
- **Auth**: `services_token`
- **Signature**: `def retrieve_specific_report_type(report_type_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `report_type_id`
- **Params**: `report_type_id` — path `reportTypeId`
- **Returns (parsed)**: `ReportsTypesResponse`
- **Returns (raw)**: `ApiResult[ReportsTypesResponse, RetrieveSpecificReportTypeErrorBody]`
- **Error**: `RetrieveSpecificReportTypeErrorBody` — **Case A (typed)**
- **Error arms**: `ReportsTypes400Error1` [400] · `ReportsTypes403Error1` [403] · `ReportsTypes404Error1` [404] · `ReportsTypes500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportsTypesResponse` | `basiq/models/reports_types_response.py` |
| `RetrieveSpecificReportTypeErrorBody` | `basiq/errors/retrieve_specific_report_type_error.py` |
| `ReportsTypes400Error1` | `basiq/models/reports_types400_error1.py` |
| `ReportsTypes403Error1` | `basiq/models/reports_types403_error1.py` |
| `ReportsTypes404Error1` | `basiq/models/reports_types404_error1.py` |
| `ReportsTypes500Error1` | `basiq/models/reports_types500_error1.py` |

