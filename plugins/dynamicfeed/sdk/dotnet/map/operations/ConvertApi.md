<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConvertApi — operations

Accessor: `client.ConvertApi` · Source: `src/DynamicFeed/Api/ConvertApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ConvertEpConvertGet

- **Signature**: `ConvertEpConvertGet(ConvertEpConvertGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `amount` ← `Amount`, `from_currency` ← `FromCurrency`, `to_currency` ← `ToCurrency`
- **Returns**: `object`
- **Error**: `ApiException<ConvertEpConvertGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ConvertEpConvertGetRequest` | `src/DynamicFeed/Requests/ConvertApi/ConvertEpConvertGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `ConvertEpConvertGetError` | `src/DynamicFeed/Errors/ConvertEpConvertGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

