<!-- Generated file — do not edit; regenerated with the SDK. -->

# TreasuryYields — operations

Accessor: `client.TreasuryYields` · Source: `src/DynamicFeed/Api/TreasuryYields.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TreasuryYieldsTreasuryYieldsGet

- **Signature**: `TreasuryYieldsTreasuryYieldsGet(TreasuryYieldsTreasuryYieldsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<TreasuryYieldsTreasuryYieldsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TreasuryYieldsTreasuryYieldsGetRequest` | `src/DynamicFeed/Requests/TreasuryYields/TreasuryYieldsTreasuryYieldsGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `TreasuryYieldsTreasuryYieldsGetError` | `src/DynamicFeed/Errors/TreasuryYieldsTreasuryYieldsGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

