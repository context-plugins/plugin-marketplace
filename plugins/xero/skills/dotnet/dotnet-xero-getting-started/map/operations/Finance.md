# Finance — operations

Accessor: `client.Finance` · Source: `Api/Finance.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetBankStatementAccounting
- **HTTP**: `GET /BankStatementsPlus/statements` (Default5 (api))
- **Notes**: For lenders that prefer using bank statement data as the source of truth. We provide a data point that will allow access to customer bank statements, plus for reconciled bank transactions the matching accounting, invoice and billing data as well. As customers reconcile bank statements to invoices and bills, this transaction detail will provide valuable insight for lender's assessment measures.
- **Signature**: `GetBankStatementAccounting(Guid bankAccountId, string fromDate, string toDate, bool? summaryOnly, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `summaryOnly` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `BankAccountID` ← `bankAccountId`, `FromDate` ← `fromDate`, `ToDate` ← `toDate`, `SummaryOnly` ← `summaryOnly`
- **Returns**: `BankStatementAccountingResponse`
- **Error**: `SdkException<GetBankStatementAccountingError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem(out Problem)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCashValidation
- **HTTP**: `GET /CashValidation` (Default5 (api))
- **Notes**: Summarizes the total cash position for each account for an org
- **Signature**: `GetCashValidation(string? balanceDate, string? asAtSystemDate, string? beginDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `balanceDate` — nullable, no default → **must pass explicitly**
  - `asAtSystemDate` — nullable, no default → **must pass explicitly**
  - `beginDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `balanceDate` ← `balanceDate`, `asAtSystemDate` ← `asAtSystemDate`, `beginDate` ← `beginDate`
- **Returns**: `IReadOnlyList<CashValidationResponse>`
- **Error**: `SdkException<GetCashValidationError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem(out Problem)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFinancialStatementBalanceSheet
- **HTTP**: `GET /FinancialStatements/BalanceSheet` (Default5 (api))
- **Notes**: The balance sheet report is a standard financial report which describes the financial position of an organisation at a point in time.
- **Signature**: `GetFinancialStatementBalanceSheet(string? balanceDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `balanceDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `balanceDate` ← `balanceDate`
- **Returns**: `BalanceSheetResponse`
- **Error**: `SdkException<GetFinancialStatementBalanceSheetError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem(out Problem)` [400, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFinancialStatementCashflow
- **HTTP**: `GET /FinancialStatements/Cashflow` (Default5 (api))
- **Notes**: The statement of cash flows - direct method, provides the year to date changes in operating, financing and investing cash flow activities for an organisation. Cashflow statement is not available in US region at this stage.
- **Signature**: `GetFinancialStatementCashflow(string? startDate, string? endDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startDate` — nullable, no default → **must pass explicitly**
  - `endDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startDate` ← `startDate`, `endDate` ← `endDate`
- **Returns**: `CashflowResponse`
- **Error**: `SdkException<GetFinancialStatementCashflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem(out Problem)` [400, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFinancialStatementContactsExpense
- **HTTP**: `GET /FinancialStatements/contacts/expense` (Default5 (api))
- **Notes**: The expense by contact report provides a year to date profit and loss for customers and suppliers for a given organisation, including detailed contact information.
- **Signature**: `GetFinancialStatementContactsExpense(IReadOnlyList<Guid>? contactIds, bool? includeManualJournals, string? startDate, string? endDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`contactIds` … `endDate`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `contactIds` ← `contactIds`, `includeManualJournals` ← `includeManualJournals`, `startDate` ← `startDate`, `endDate` ← `endDate`
- **Returns**: `IncomeByContactResponse`
- **Error**: `SdkException<GetFinancialStatementContactsExpenseError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem(out Problem)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFinancialStatementContactsRevenue
- **HTTP**: `GET /FinancialStatements/contacts/revenue` (Default5 (api))
- **Notes**: The revenue by contact report provides a year to date profit and loss for customers and suppliers for a given organisation, including detailed contact information.
- **Signature**: `GetFinancialStatementContactsRevenue(IReadOnlyList<Guid>? contactIds, bool? includeManualJournals, string? startDate, string? endDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`contactIds` … `endDate`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `contactIds` ← `contactIds`, `includeManualJournals` ← `includeManualJournals`, `startDate` ← `startDate`, `endDate` ← `endDate`
- **Returns**: `IncomeByContactResponse`
- **Error**: `SdkException<GetFinancialStatementContactsRevenueError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem(out Problem)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFinancialStatementProfitAndLoss
- **HTTP**: `GET /FinancialStatements/ProfitAndLoss` (Default5 (api))
- **Notes**: The profit and loss statement is a standard financial report providing detailed year to date income and expense detail for an organisation.
- **Signature**: `GetFinancialStatementProfitAndLoss(string? startDate, string? endDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startDate` — nullable, no default → **must pass explicitly**
  - `endDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startDate` ← `startDate`, `endDate` ← `endDate`
- **Returns**: `ProfitAndLossResponse`
- **Error**: `SdkException<GetFinancialStatementProfitAndLossError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem(out Problem)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFinancialStatementTrialBalance
- **HTTP**: `GET /FinancialStatements/TrialBalance` (Default5 (api))
- **Notes**: The trial balance provides a detailed list of all accounts of an organisation at a point in time, with revenue and expense items being year to date.
- **Signature**: `GetFinancialStatementTrialBalance(string? endDate, string xeroTenantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `endDate` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `endDate` ← `endDate`
- **Returns**: `TrialBalanceResponse`
- **Error**: `SdkException<GetFinancialStatementTrialBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetProblem(out Problem)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
