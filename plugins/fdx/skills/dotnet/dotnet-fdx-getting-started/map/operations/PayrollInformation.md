# PayrollInformation — operations

Accessor: `client.PayrollInformation` · Source: `Api/PayrollInformation.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPayrollReport
- **HTTP**: `GET /payroll/reports/{reportId}` (Payroll (financialdataexchange-prod))
- **Notes**: Retrieve the employee's specified payroll report
- **Signature**: `GetPayrollReport(string reportId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PayrollReportEntity`
- **Error**: `SdkException<GetPayrollReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPayrollReports
- **HTTP**: `GET /payroll/reports` (Payroll (financialdataexchange-prod))
- **Notes**: Search for the employee's latest payroll report
- **Signature**: `GetPayrollReports(PayrollReportType reportType, ResultType? resultType, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `resultType` — nullable, no default → **must pass explicitly**
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `reportType` ← `reportType`, `resultType` ← `resultType`
- **Returns**: `PayrollReportListEntity`
- **Error**: `SdkException<GetPayrollReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 401, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
