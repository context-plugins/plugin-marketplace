<!-- Generated file — do not edit; regenerated with the SDK. -->

# Billing — operations

Accessor: `client.Billing` · Source: `Api/Billing.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCreditUsage

- **Signature**: `GetCreditUsage(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TeamCreditUsageResponse`
- **Error**: `SdkException<GetCreditUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetTeamCreditUsage404Error1(out TeamCreditUsage404Error1)` [404] · `TryGetTeamCreditUsage500Error1(out TeamCreditUsage500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TeamCreditUsageResponse` | `Models/TeamCreditUsageResponse.cs` |
| `GetCreditUsageError` | `Errors/GetCreditUsageError.cs` |
| `TeamCreditUsage404Error1` | `Models/TeamCreditUsage404Error1.cs` |
| `TeamCreditUsage500Error1` | `Models/TeamCreditUsage500Error1.cs` |

### GetHistoricalCreditUsage

- **Signature**: `GetHistoricalCreditUsage(bool? byApiKey = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `byApiKey` = `false`
- **Query params (wire ← C#)**: `byApiKey` ← `byApiKey`
- **Returns**: `TeamCreditUsageHistoricalResponse`
- **Error**: `SdkException<GetHistoricalCreditUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetTeamCreditUsageHistorical500Error1(out TeamCreditUsageHistorical500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TeamCreditUsageHistoricalResponse` | `Models/TeamCreditUsageHistoricalResponse.cs` |
| `GetHistoricalCreditUsageError` | `Errors/GetHistoricalCreditUsageError.cs` |
| `TeamCreditUsageHistorical500Error1` | `Models/TeamCreditUsageHistorical500Error1.cs` |

### GetHistoricalTokenUsage

- **Signature**: `GetHistoricalTokenUsage(bool? byApiKey = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `byApiKey` = `false`
- **Query params (wire ← C#)**: `byApiKey` ← `byApiKey`
- **Returns**: `TeamTokenUsageHistoricalResponse`
- **Error**: `SdkException<GetHistoricalTokenUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetTeamTokenUsageHistorical500Error1(out TeamTokenUsageHistorical500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TeamTokenUsageHistoricalResponse` | `Models/TeamTokenUsageHistoricalResponse.cs` |
| `GetHistoricalTokenUsageError` | `Errors/GetHistoricalTokenUsageError.cs` |
| `TeamTokenUsageHistorical500Error1` | `Models/TeamTokenUsageHistorical500Error1.cs` |

### GetTokenUsage

- **Signature**: `GetTokenUsage(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TeamTokenUsageResponse`
- **Error**: `SdkException<GetTokenUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetTeamTokenUsage404Error1(out TeamTokenUsage404Error1)` [404] · `TryGetTeamTokenUsage500Error1(out TeamTokenUsage500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TeamTokenUsageResponse` | `Models/TeamTokenUsageResponse.cs` |
| `GetTokenUsageError` | `Errors/GetTokenUsageError.cs` |
| `TeamTokenUsage404Error1` | `Models/TeamTokenUsage404Error1.cs` |
| `TeamTokenUsage500Error1` | `Models/TeamTokenUsage500Error1.cs` |

