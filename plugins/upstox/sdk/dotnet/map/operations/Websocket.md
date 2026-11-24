<!-- Generated file — do not edit; regenerated with the SDK. -->

# Websocket — operations

Accessor: `client.Websocket` · Source: `src/Upstox/Api/Websocket.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMarketDataFeed

- **Auth**: `options.Oauth2`
- **Signature**: `GetMarketDataFeed(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetMarketDataFeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMarketDataFeedError` | `src/Upstox/Errors/GetMarketDataFeedError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetMarketDataFeedAuthorize

- **Auth**: `options.Oauth2`
- **Signature**: `GetMarketDataFeedAuthorize(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `WebsocketAuthRedirectResponse`
- **Error**: `ApiException<GetMarketDataFeedAuthorizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WebsocketAuthRedirectResponse` | `src/Upstox/Models/WebsocketAuthRedirectResponse.cs` |
| `GetMarketDataFeedAuthorizeError` | `src/Upstox/Errors/GetMarketDataFeedAuthorizeError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetPortfolioStreamFeed

- **Auth**: `options.Oauth2`
- **Signature**: `GetPortfolioStreamFeed(GetPortfolioStreamFeedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `update_types` ← `UpdateTypes`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetPortfolioStreamFeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPortfolioStreamFeedRequest` | `src/Upstox/Requests/Websocket/GetPortfolioStreamFeedRequest.cs` |
| `GetPortfolioStreamFeedError` | `src/Upstox/Errors/GetPortfolioStreamFeedError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetPortfolioStreamFeedAuthorize

- **Auth**: `options.Oauth2`
- **Signature**: `GetPortfolioStreamFeedAuthorize(GetPortfolioStreamFeedAuthorizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `update_types` ← `UpdateTypes`
- **Returns**: `WebsocketAuthRedirectResponse`
- **Error**: `ApiException<GetPortfolioStreamFeedAuthorizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPortfolioStreamFeedAuthorizeRequest` | `src/Upstox/Requests/Websocket/GetPortfolioStreamFeedAuthorizeRequest.cs` |
| `WebsocketAuthRedirectResponse` | `src/Upstox/Models/WebsocketAuthRedirectResponse.cs` |
| `GetPortfolioStreamFeedAuthorizeError` | `src/Upstox/Errors/GetPortfolioStreamFeedAuthorizeError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

