<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ipo — operations

Accessor: `client.Ipo` · Source: `src/Upstox/Api/Ipo.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ApplyForIpo

- **Auth**: `options.Oauth2`
- **Signature**: `ApplyForIpo(ApplyForIpoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IpoApplyResponse`
- **Error**: `ApiException<ApplyForIpoError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 404, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApplyForIpoRequest` | `src/Upstox/Requests/Ipo/ApplyForIpoRequest.cs` |
| `IpoApplyRequest` | `src/Upstox/Models/IpoApplyRequest.cs` |
| `IpoApplyResponse` | `src/Upstox/Models/IpoApplyResponse.cs` |
| `ApplyForIpoError` | `src/Upstox/Errors/ApplyForIpoError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### CancelIpoOrder

- **Auth**: `options.Oauth2`
- **Signature**: `CancelIpoOrder(CancelIpoOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`
- **Returns**: `IpoCancelResponse`
- **Error**: `ApiException<CancelIpoOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 404, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelIpoOrderRequest` | `src/Upstox/Requests/Ipo/CancelIpoOrderRequest.cs` |
| `IpoCancelResponse` | `src/Upstox/Models/IpoCancelResponse.cs` |
| `CancelIpoOrderError` | `src/Upstox/Errors/CancelIpoOrderError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetIpoDetails

- **Auth**: `options.Oauth2`
- **Signature**: `GetIpoDetails(GetIpoDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IpoDetailsResponse`
- **Error**: `ApiException<GetIpoDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIpoDetailsRequest` | `src/Upstox/Requests/Ipo/GetIpoDetailsRequest.cs` |
| `IpoDetailsResponse` | `src/Upstox/Models/IpoDetailsResponse.cs` |
| `GetIpoDetailsError` | `src/Upstox/Errors/GetIpoDetailsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetIpoListing

- **Auth**: `options.Oauth2`
- **Signature**: `GetIpoListing(GetIpoListingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `issue_type` ← `IssueType`, `page_number` ← `PageNumber`, `records` ← `Records`
- **Returns**: `IpoListingResponse`
- **Error**: `ApiException<GetIpoListingError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIpoListingRequest` | `src/Upstox/Requests/Ipo/GetIpoListingRequest.cs` |
| `Status9` | `src/Upstox/Models/Enums/Status9.cs` |
| `IssueType3` | `src/Upstox/Models/Enums/IssueType3.cs` |
| `IpoListingResponse` | `src/Upstox/Models/IpoListingResponse.cs` |
| `GetIpoListingError` | `src/Upstox/Errors/GetIpoListingError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetIpoOrderById

- **Auth**: `options.Oauth2`
- **Signature**: `GetIpoOrderById(GetIpoOrderByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`
- **Returns**: `IpoOrderDetailResponse`
- **Error**: `ApiException<GetIpoOrderByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 404, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIpoOrderByIdRequest` | `src/Upstox/Requests/Ipo/GetIpoOrderByIdRequest.cs` |
| `IpoOrderDetailResponse` | `src/Upstox/Models/IpoOrderDetailResponse.cs` |
| `GetIpoOrderByIdError` | `src/Upstox/Errors/GetIpoOrderByIdError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetIpoOrders

- **Auth**: `options.Oauth2`
- **Signature**: `GetIpoOrders(GetIpoOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page_number` ← `PageNumber`, `records` ← `Records`
- **Returns**: `IpoOrderResponse`
- **Error**: `ApiException<GetIpoOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIpoOrdersRequest` | `src/Upstox/Requests/Ipo/GetIpoOrdersRequest.cs` |
| `IpoOrderResponse` | `src/Upstox/Models/IpoOrderResponse.cs` |
| `GetIpoOrdersError` | `src/Upstox/Errors/GetIpoOrdersError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

