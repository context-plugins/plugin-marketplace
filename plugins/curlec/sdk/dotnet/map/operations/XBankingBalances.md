<!-- Generated file — do not edit; regenerated with the SDK. -->

# XBankingBalances — operations

Accessor: `client.XBankingBalances` · Source: `src/Curlec/Api/XBankingBalances.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchBankingBalances

- **Auth**: `options.BasicAuth` OR `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` (scopes: `read_only`)
- **Signature**: `FetchBankingBalances(FetchBankingBalancesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `account_type` ← `AccountType`, `bank_code` ← `BankCode`
- **Returns**: `BankingBalancesResponse`
- **Error**: `ApiException<FetchBankingBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FetchBankingBalancesRequest` | `src/Curlec/Requests/XBankingBalances/FetchBankingBalancesRequest.cs` |
| `AccountType1` | `src/Curlec/Models/Enums/AccountType1.cs` |
| `BankingBalancesResponse` | `src/Curlec/Models/BankingBalancesResponse.cs` |
| `FetchBankingBalancesError` | `src/Curlec/Errors/FetchBankingBalancesError.cs` |
| `Error` | `src/Curlec/Models/Error.cs` |

