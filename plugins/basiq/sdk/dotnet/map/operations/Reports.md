<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.Reports` · Source: `src/Basiq/Api/Reports.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Createreport

- **Auth**: `options.ServicesToken`
- **Signature**: `Createreport(CreatereportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ReportsResponse`
- **Error**: `ApiException<CreatereportError>` — **Case A (typed)**
- **Error accessors**: `TryGetReportsResponse12([NotNullWhen(true)] out ReportsResponse12? value)` [400] · `TryGetReports403Error1([NotNullWhen(true)] out Reports403Error1? value)` [403] · `TryGetReports404Error1([NotNullWhen(true)] out Reports404Error1? value)` [404] · `TryGetReports500Error1([NotNullWhen(true)] out Reports500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatereportRequest` | `src/Basiq/Requests/Reports/CreatereportRequest.cs` |
| `ReportsRequest` | `src/Basiq/Models/ReportsRequest.cs` |
| `ReportsResponse` | `src/Basiq/Models/ReportsResponse.cs` |
| `CreatereportError` | `src/Basiq/Errors/CreatereportError.cs` |
| `ReportsResponse12` | `src/Basiq/Models/AnyOf/ReportsResponse12.cs` |
| `Reports403Error1` | `src/Basiq/Models/Reports403Error1.cs` |
| `Reports404Error1` | `src/Basiq/Models/Reports404Error1.cs` |
| `Reports500Error1` | `src/Basiq/Models/Reports500Error1.cs` |

### DeleteReport

- **Auth**: `options.ServicesToken`
- **Signature**: `DeleteReport(DeleteReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetReports400Error21([NotNullWhen(true)] out Reports400Error21? value)` [400] · `TryGetReports403Error31([NotNullWhen(true)] out Reports403Error31? value)` [403] · `TryGetReports404Error31([NotNullWhen(true)] out Reports404Error31? value)` [404] · `TryGetReports500Error31([NotNullWhen(true)] out Reports500Error31? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteReportRequest` | `src/Basiq/Requests/Reports/DeleteReportRequest.cs` |
| `DeleteReportError` | `src/Basiq/Errors/DeleteReportError.cs` |
| `Reports400Error21` | `src/Basiq/Models/Reports400Error21.cs` |
| `Reports403Error31` | `src/Basiq/Models/Reports403Error31.cs` |
| `Reports404Error31` | `src/Basiq/Models/Reports404Error31.cs` |
| `Reports500Error31` | `src/Basiq/Models/Reports500Error31.cs` |

### ListReportTypes

- **Auth**: `options.ServicesToken`
- **Signature**: `ListReportTypes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ReportsTypesResponse`
- **Error**: `ApiException<ListReportTypesError>` — **Case A (typed)**
- **Error accessors**: `TryGetReportsTypes400Error1([NotNullWhen(true)] out ReportsTypes400Error1? value)` [400] · `TryGetReportsTypes403Error1([NotNullWhen(true)] out ReportsTypes403Error1? value)` [403] · `TryGetReportsTypes404Error1([NotNullWhen(true)] out ReportsTypes404Error1? value)` [404] · `TryGetReportsTypes500Error1([NotNullWhen(true)] out ReportsTypes500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReportsTypesResponse` | `src/Basiq/Models/ReportsTypesResponse.cs` |
| `ListReportTypesError` | `src/Basiq/Errors/ListReportTypesError.cs` |
| `ReportsTypes400Error1` | `src/Basiq/Models/ReportsTypes400Error1.cs` |
| `ReportsTypes403Error1` | `src/Basiq/Models/ReportsTypes403Error1.cs` |
| `ReportsTypes404Error1` | `src/Basiq/Models/ReportsTypes404Error1.cs` |
| `ReportsTypes500Error1` | `src/Basiq/Models/ReportsTypes500Error1.cs` |

### Listallreports

- **Auth**: `options.ServicesToken`
- **Signature**: `Listallreports(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ReportsResponse2`
- **Error**: `ApiException<ListallreportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetReports400Error1([NotNullWhen(true)] out Reports400Error1? value)` [400] · `TryGetReports403Error21([NotNullWhen(true)] out Reports403Error21? value)` [403] · `TryGetReports404Error21([NotNullWhen(true)] out Reports404Error21? value)` [404] · `TryGetReports500Error21([NotNullWhen(true)] out Reports500Error21? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ReportsResponse2` | `src/Basiq/Models/ReportsResponse2.cs` |
| `ListallreportsError` | `src/Basiq/Errors/ListallreportsError.cs` |
| `Reports400Error1` | `src/Basiq/Models/Reports400Error1.cs` |
| `Reports403Error21` | `src/Basiq/Models/Reports403Error21.cs` |
| `Reports404Error21` | `src/Basiq/Models/Reports404Error21.cs` |
| `Reports500Error21` | `src/Basiq/Models/Reports500Error21.cs` |

### RetrieveReport

- **Auth**: `options.ServicesToken`
- **Signature**: `RetrieveReport(RetrieveReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RetrieveReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetReports400Error21([NotNullWhen(true)] out Reports400Error21? value)` [400] · `TryGetReports403Error31([NotNullWhen(true)] out Reports403Error31? value)` [403] · `TryGetReports404Error31([NotNullWhen(true)] out Reports404Error31? value)` [404] · `TryGetReports500Error31([NotNullWhen(true)] out Reports500Error31? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetrieveReportRequest` | `src/Basiq/Requests/Reports/RetrieveReportRequest.cs` |
| `RetrieveReportError` | `src/Basiq/Errors/RetrieveReportError.cs` |
| `Reports400Error21` | `src/Basiq/Models/Reports400Error21.cs` |
| `Reports403Error31` | `src/Basiq/Models/Reports403Error31.cs` |
| `Reports404Error31` | `src/Basiq/Models/Reports404Error31.cs` |
| `Reports500Error31` | `src/Basiq/Models/Reports500Error31.cs` |

### RetrieveReportTransactions

- **Auth**: `options.ServicesToken`
- **Signature**: `RetrieveReportTransactions(RetrieveReportTransactionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReportId`
- **Query params (wire ← C#)**: `filter` ← `Filter`
- **Returns**: `TransactionsContainerObject`
- **Error**: `ApiException<RetrieveReportTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetReportsTransactions400Error1([NotNullWhen(true)] out ReportsTransactions400Error1? value)` [400] · `TryGetReportsTransactions403Error1([NotNullWhen(true)] out ReportsTransactions403Error1? value)` [403] · `TryGetReportsTransactions404Error1([NotNullWhen(true)] out ReportsTransactions404Error1? value)` [404] · `TryGetReportsTransactions500Error1([NotNullWhen(true)] out ReportsTransactions500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetrieveReportTransactionsRequest` | `src/Basiq/Requests/Reports/RetrieveReportTransactionsRequest.cs` |
| `TransactionsContainerObject` | `src/Basiq/Models/TransactionsContainerObject.cs` |
| `RetrieveReportTransactionsError` | `src/Basiq/Errors/RetrieveReportTransactionsError.cs` |
| `ReportsTransactions400Error1` | `src/Basiq/Models/ReportsTransactions400Error1.cs` |
| `ReportsTransactions403Error1` | `src/Basiq/Models/ReportsTransactions403Error1.cs` |
| `ReportsTransactions404Error1` | `src/Basiq/Models/ReportsTransactions404Error1.cs` |
| `ReportsTransactions500Error1` | `src/Basiq/Models/ReportsTransactions500Error1.cs` |

### RetrieveSpecificReportType

- **Auth**: `options.ServicesToken`
- **Signature**: `RetrieveSpecificReportType(RetrieveSpecificReportTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ReportTypeId`
- **Returns**: `ReportsTypesResponse`
- **Error**: `ApiException<RetrieveSpecificReportTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetReportsTypes400Error1([NotNullWhen(true)] out ReportsTypes400Error1? value)` [400] · `TryGetReportsTypes403Error1([NotNullWhen(true)] out ReportsTypes403Error1? value)` [403] · `TryGetReportsTypes404Error1([NotNullWhen(true)] out ReportsTypes404Error1? value)` [404] · `TryGetReportsTypes500Error1([NotNullWhen(true)] out ReportsTypes500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RetrieveSpecificReportTypeRequest` | `src/Basiq/Requests/Reports/RetrieveSpecificReportTypeRequest.cs` |
| `ReportsTypesResponse` | `src/Basiq/Models/ReportsTypesResponse.cs` |
| `RetrieveSpecificReportTypeError` | `src/Basiq/Errors/RetrieveSpecificReportTypeError.cs` |
| `ReportsTypes400Error1` | `src/Basiq/Models/ReportsTypes400Error1.cs` |
| `ReportsTypes403Error1` | `src/Basiq/Models/ReportsTypes403Error1.cs` |
| `ReportsTypes404Error1` | `src/Basiq/Models/ReportsTypes404Error1.cs` |
| `ReportsTypes500Error1` | `src/Basiq/Models/ReportsTypes500Error1.cs` |

