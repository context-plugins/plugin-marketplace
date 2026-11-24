<!-- Generated file — do not edit; regenerated with the SDK. -->

# Shipping — operations

Accessor: `client.Shipping` · Source: `src/DynamicFeed/Api/Shipping.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ShippingEpShippingGet

- **Signature**: `ShippingEpShippingGet(ShippingEpShippingGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `scope` ← `Scope`, `query` ← `Query`, `region` ← `Region`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<ShippingEpShippingGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ShippingEpShippingGetRequest` | `src/DynamicFeed/Requests/Shipping/ShippingEpShippingGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `ShippingEpShippingGetError` | `src/DynamicFeed/Errors/ShippingEpShippingGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

