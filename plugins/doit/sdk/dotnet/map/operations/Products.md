<!-- Generated file — do not edit; regenerated with the SDK. -->

# Products — operations

Accessor: `client.Products` · Source: `src/DoiT/Api/Products.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListProducts

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListProducts(ListProductsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `platform` ← `Platform`
- **Returns**: `SupportV1MetadataProductsResponse`
- **Error**: `ApiException<ListProductsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProductsRequest` | `src/DoiT/Requests/Products/ListProductsRequest.cs` |
| `SupportV1MetadataProductsResponse` | `src/DoiT/Models/SupportV1MetadataProductsResponse.cs` |
| `ListProductsError` | `src/DoiT/Errors/ListProductsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

