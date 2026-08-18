<!-- Generated file — do not edit; regenerated with the SDK. -->

# BalancesOverview — operations

Accessor: `client.BalancesOverview` · Source: `Api/BalancesOverview.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBalanceOverviewCompaniesCompanyAccountCodeBalances
- **Server group**: `Default11`
- **Signature**: `GetBalanceOverviewCompaniesCompanyAccountCodeBalances(string companyAccountCode, string currency, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `currency` ← `currency`
- **Returns**: `CompanyBalances`
- **Error**: `SdkException<GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CompanyBalances` | `Models/CompanyBalances.cs` |
| `GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError` | `Errors/GetBalanceOverviewCompaniesCompanyAccountCodeBalancesError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalanceOverviewMerchantsMerchantAccountCodeBalances
- **Server group**: `Default11`
- **Signature**: `GetBalanceOverviewMerchantsMerchantAccountCodeBalances(string merchantAccountCode, string currency, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `currency` ← `currency`
- **Returns**: `MerchantBalance`
- **Error**: `SdkException<GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `MerchantBalance` | `Models/MerchantBalance.cs` |
| `GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError` | `Errors/GetBalanceOverviewMerchantsMerchantAccountCodeBalancesError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

