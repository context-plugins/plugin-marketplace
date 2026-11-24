<!-- Generated file — do not edit; regenerated with the SDK. -->

# TradeProfitAndLoss — operations

Accessor: `client.TradeProfitAndLoss` · Source: `src/Upstox/Api/TradeProfitAndLoss.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetProfitAndLossCharges

- **Auth**: `options.Oauth2`
- **Signature**: `GetProfitAndLossCharges(GetProfitAndLossChargesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Segment`, `FinancialYear`
- **Query params (wire ← C#)**: `segment` ← `Segment`, `financial_year` ← `FinancialYear`, `from_date` ← `FromDate`, `to_date` ← `ToDate`
- **Returns**: `GetProfitAndLossChargesResponse`
- **Error**: `ApiException<GetProfitAndLossChargesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProfitAndLossChargesRequest` | `src/Upstox/Requests/TradeProfitAndLoss/GetProfitAndLossChargesRequest.cs` |
| `GetProfitAndLossChargesResponse` | `src/Upstox/Models/GetProfitAndLossChargesResponse.cs` |
| `GetProfitAndLossChargesError` | `src/Upstox/Errors/GetProfitAndLossChargesError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetTradeWiseProfitAndLossData

- **Auth**: `options.Oauth2`
- **Signature**: `GetTradeWiseProfitAndLossData(GetTradeWiseProfitAndLossDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Segment`, `FinancialYear`, `PageNumber`, `PageSize`
- **Query params (wire ← C#)**: `segment` ← `Segment`, `financial_year` ← `FinancialYear`, `page_number` ← `PageNumber`, `page_size` ← `PageSize`, `from_date` ← `FromDate`, `to_date` ← `ToDate`
- **Returns**: `GetTradeWiseProfitAndLossDataResponse`
- **Error**: `ApiException<GetTradeWiseProfitAndLossDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTradeWiseProfitAndLossDataRequest` | `src/Upstox/Requests/TradeProfitAndLoss/GetTradeWiseProfitAndLossDataRequest.cs` |
| `GetTradeWiseProfitAndLossDataResponse` | `src/Upstox/Models/GetTradeWiseProfitAndLossDataResponse.cs` |
| `GetTradeWiseProfitAndLossDataError` | `src/Upstox/Errors/GetTradeWiseProfitAndLossDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetTradeWiseProfitAndLossMetaData

- **Auth**: `options.Oauth2`
- **Signature**: `GetTradeWiseProfitAndLossMetaData(GetTradeWiseProfitAndLossMetaDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Segment`, `FinancialYear`
- **Query params (wire ← C#)**: `segment` ← `Segment`, `financial_year` ← `FinancialYear`, `from_date` ← `FromDate`, `to_date` ← `ToDate`
- **Returns**: `GetTradeWiseProfitAndLossMetaDataResponse`
- **Error**: `ApiException<GetTradeWiseProfitAndLossMetaDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTradeWiseProfitAndLossMetaDataRequest` | `src/Upstox/Requests/TradeProfitAndLoss/GetTradeWiseProfitAndLossMetaDataRequest.cs` |
| `GetTradeWiseProfitAndLossMetaDataResponse` | `src/Upstox/Models/GetTradeWiseProfitAndLossMetaDataResponse.cs` |
| `GetTradeWiseProfitAndLossMetaDataError` | `src/Upstox/Errors/GetTradeWiseProfitAndLossMetaDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

