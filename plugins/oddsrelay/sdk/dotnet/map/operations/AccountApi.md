<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountApi — operations

Accessor: `client.AccountApi` · Source: `src/OddsRelay/Api/AccountApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPricing

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader`
- **Signature**: `GetPricing(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PriceTable`
- **Error**: `ApiException<GetPricingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400([NotNullWhen(true)] out Error400? value)` [400] · `TryGetError401([NotNullWhen(true)] out Error401? value)` [401] · `TryGetError403([NotNullWhen(true)] out Error403? value)` [403] · `TryGetError429([NotNullWhen(true)] out Error429? value)` [429] · `TryGetError500([NotNullWhen(true)] out Error500? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503([NotNullWhen(true)] out Error503? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PriceTable` | `src/OddsRelay/Models/PriceTable.cs` |
| `GetPricingError` | `src/OddsRelay/Errors/GetPricingError.cs` |
| `Error400` | `src/OddsRelay/Models/Error400.cs` |
| `Error401` | `src/OddsRelay/Models/Error401.cs` |
| `Error403` | `src/OddsRelay/Models/Error403.cs` |
| `Error429` | `src/OddsRelay/Models/Error429.cs` |
| `Error500` | `src/OddsRelay/Models/Error500.cs` |
| `Error503` | `src/OddsRelay/Models/Error503.cs` |

### GetUsage

- **Auth**: `options.BearerAuth` OR `options.ApiKeyHeader`
- **Signature**: `GetUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Usage`
- **Error**: `ApiException<GetUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError400([NotNullWhen(true)] out Error400? value)` [400] · `TryGetError401([NotNullWhen(true)] out Error401? value)` [401] · `TryGetError403([NotNullWhen(true)] out Error403? value)` [403] · `TryGetError429([NotNullWhen(true)] out Error429? value)` [429] · `TryGetError500([NotNullWhen(true)] out Error500? value)` [500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetError503([NotNullWhen(true)] out Error503? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Usage` | `src/OddsRelay/Models/Usage.cs` |
| `GetUsageError` | `src/OddsRelay/Errors/GetUsageError.cs` |
| `Error400` | `src/OddsRelay/Models/Error400.cs` |
| `Error401` | `src/OddsRelay/Models/Error401.cs` |
| `Error403` | `src/OddsRelay/Models/Error403.cs` |
| `Error429` | `src/OddsRelay/Models/Error429.cs` |
| `Error500` | `src/OddsRelay/Models/Error500.cs` |
| `Error503` | `src/OddsRelay/Models/Error503.cs` |

