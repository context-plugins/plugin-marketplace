# RouteMatrixApi — operations

Accessor: `client.RouteMatrixApi` · Source: `Api/RouteMatrixApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GenerateRouteMatrix
- **HTTP**: `POST /routematrix` (Default (api))
- **Notes**: Generates a time-distance matrix for the specified source and target locations, providing valuable data for route optimization and travel analytics. The API supports various transportation modes, including driving, walking, and cycling, making it ideal for logistics, route planning, and other mobility applications.
- **Signature**: `GenerateRouteMatrix(string apiKey, RoutematrixRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `apiKey` ← `apiKey`
- **Returns**: `RouteMatrixResponse`
- **Error**: `SdkException<GenerateRouteMatrixError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
