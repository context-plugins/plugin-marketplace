# BalancesOverview — operations

Accessor: `client.BalancesOverview` · Source: `Api/BalancesOverview.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetBalanceOverviewCompaniesCompanyAccountCodeBalances
- **HTTP**: `GET /balanceOverview/companies/{companyAccountCode}/balances` (Default11 (balance-control-test))
- **Notes**: Returns an array with details about the balances available for all merchant accounts under your company account. For each merchant account, the response returns the following: Available funds : The funds in the merchant account that have been settled and are available for use. Pending balance : The funds in the merchant account that have not been settled yet. Next payout amount : The amount that will be settled to your bank account with the next payout. Reserve : The available amount to cover refunds, payouts, chargebacks, and other operational expenses that cannot be covered by your in-process funds. Deposit : The amount withheld by Adyen to cover potential losses and liabilities due to payment processing.
- **Signature**: `GetBalanceOverviewCompaniesCompanyAccountCodeBalances(string companyAccountCode, string currency, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `currency` ← `currency`
- **Returns**: `CompanyBalances`
- **Error**: `SdkException<GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBalanceOverviewMerchantsMerchantAccountCodeBalances
- **HTTP**: `GET /balanceOverview/merchants/{merchantAccountCode}/balances` (Default11 (balance-control-test))
- **Notes**: Returns an overview of the different balances available for the merchant account. This includes details about the following: Available funds : The funds in the merchant account that have been settled and are available for use. Pending balance : The funds in the merchant account that have not been settled yet. Next payout amount : The amount that will be settled to your bank account with the next payout. Reserve : The available amount to cover refunds, payouts, chargebacks, and other operational expenses that cannot be covered by your in-process funds. Deposit : The amount withheld by Adyen to cover potential losses and liabilities due to payment processing.
- **Signature**: `GetBalanceOverviewMerchantsMerchantAccountCodeBalances(string merchantAccountCode, string currency, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `currency` ← `currency`
- **Returns**: `MerchantBalance`
- **Error**: `SdkException<GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
