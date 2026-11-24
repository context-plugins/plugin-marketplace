<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostTrade — operations

Accessor: `client.PostTrade` · Source: `src/Upstox/Api/PostTrade.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTradesByDateRange

- **Auth**: `options.Oauth2`
- **Signature**: `GetTradesByDateRange(GetTradesByDateRangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `StartDate`, `EndDate`, `PageNumber`, `PageSize`
- **Query params (wire ← C#)**: `start_date` ← `StartDate`, `end_date` ← `EndDate`, `page_number` ← `PageNumber`, `page_size` ← `PageSize`, `segment` ← `Segment`
- **Returns**: `TradeHistoryResponse`
- **Error**: `ApiException<GetTradesByDateRangeError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTradesByDateRangeRequest` | `src/Upstox/Requests/PostTrade/GetTradesByDateRangeRequest.cs` |
| `TradeHistoryResponse` | `src/Upstox/Models/TradeHistoryResponse.cs` |
| `GetTradesByDateRangeError` | `src/Upstox/Errors/GetTradesByDateRangeError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

