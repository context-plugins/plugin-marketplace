<!-- Generated file — do not edit; regenerated with the SDK. -->

# MarketHolidaysAndTimings — operations

Accessor: `client.MarketHolidaysAndTimings` · Source: `src/Upstox/Api/MarketHolidaysAndTimings.cs` · 13 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetChangeOiData

- **Auth**: `options.Oauth2`
- **Signature**: `GetChangeOiData(GetChangeOiDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `Expiry`, `Date`, `Interval`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`, `expiry` ← `Expiry`, `date` ← `Date`, `interval` ← `Interval`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<GetChangeOiDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetChangeOiDataRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetChangeOiDataRequest.cs` |
| `AnalyticsResponse` | `src/Upstox/Models/AnalyticsResponse.cs` |
| `GetChangeOiDataError` | `src/Upstox/Errors/GetChangeOiDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetDiiData

- **Auth**: `options.Oauth2`
- **Signature**: `GetDiiData(GetDiiDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DataType`, `Interval`
- **Query params (wire ← C#)**: `data_type` ← `DataType`, `interval` ← `Interval`, `from` ← `From`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<GetDiiDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDiiDataRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetDiiDataRequest.cs` |
| `AnalyticsResponse` | `src/Upstox/Models/AnalyticsResponse.cs` |
| `GetDiiDataError` | `src/Upstox/Errors/GetDiiDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetExchangeTimings

- **Signature**: `GetExchangeTimings(GetExchangeTimingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Date`
- **Returns**: `GetExchangeTimingResponse`
- **Error**: `ApiException<GetExchangeTimingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetExchangeTimingsRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetExchangeTimingsRequest.cs` |
| `GetExchangeTimingResponse` | `src/Upstox/Models/GetExchangeTimingResponse.cs` |
| `GetExchangeTimingsError` | `src/Upstox/Errors/GetExchangeTimingsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetFiiData

- **Auth**: `options.Oauth2`
- **Signature**: `GetFiiData(GetFiiDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DataType`, `Interval`
- **Query params (wire ← C#)**: `data_type` ← `DataType`, `interval` ← `Interval`, `from` ← `From`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<GetFiiDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFiiDataRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetFiiDataRequest.cs` |
| `AnalyticsResponse` | `src/Upstox/Models/AnalyticsResponse.cs` |
| `GetFiiDataError` | `src/Upstox/Errors/GetFiiDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetHoliday

- **Signature**: `GetHoliday(GetHolidayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Date`
- **Returns**: `GetHolidayResponse`
- **Error**: `ApiException<GetHolidayError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetHolidayRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetHolidayRequest.cs` |
| `GetHolidayResponse` | `src/Upstox/Models/GetHolidayResponse.cs` |
| `GetHolidayError` | `src/Upstox/Errors/GetHolidayError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetHolidays

- **Signature**: `GetHolidays(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetHolidayResponse`
- **Error**: `ApiException<GetHolidaysError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetHolidayResponse` | `src/Upstox/Models/GetHolidayResponse.cs` |
| `GetHolidaysError` | `src/Upstox/Errors/GetHolidaysError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetMarketStatus

- **Auth**: `options.Oauth2`
- **Signature**: `GetMarketStatus(GetMarketStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Exchange`
- **Returns**: `GetMarketStatusResponse`
- **Error**: `ApiException<GetMarketStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMarketStatusRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetMarketStatusRequest.cs` |
| `GetMarketStatusResponse` | `src/Upstox/Models/GetMarketStatusResponse.cs` |
| `GetMarketStatusError` | `src/Upstox/Errors/GetMarketStatusError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetMaxPainData

- **Auth**: `options.Oauth2`
- **Signature**: `GetMaxPainData(GetMaxPainDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `Expiry`, `Date`, `BucketInterval`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`, `expiry` ← `Expiry`, `date` ← `Date`, `bucket_interval` ← `BucketInterval`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<GetMaxPainDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMaxPainDataRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetMaxPainDataRequest.cs` |
| `AnalyticsResponse` | `src/Upstox/Models/AnalyticsResponse.cs` |
| `GetMaxPainDataError` | `src/Upstox/Errors/GetMaxPainDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetOiData

- **Auth**: `options.Oauth2`
- **Signature**: `GetOiData(GetOiDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `Expiry`, `Date`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`, `expiry` ← `Expiry`, `date` ← `Date`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<GetOiDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOiDataRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetOiDataRequest.cs` |
| `AnalyticsResponse` | `src/Upstox/Models/AnalyticsResponse.cs` |
| `GetOiDataError` | `src/Upstox/Errors/GetOiDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetPcrData

- **Auth**: `options.Oauth2`
- **Signature**: `GetPcrData(GetPcrDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `InstrumentKey`, `Expiry`, `Date`, `BucketInterval`
- **Query params (wire ← C#)**: `instrument_key` ← `InstrumentKey`, `expiry` ← `Expiry`, `date` ← `Date`, `bucket_interval` ← `BucketInterval`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<GetPcrDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPcrDataRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetPcrDataRequest.cs` |
| `AnalyticsResponse` | `src/Upstox/Models/AnalyticsResponse.cs` |
| `GetPcrDataError` | `src/Upstox/Errors/GetPcrDataError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetSmartlistFutures

- **Auth**: `options.Oauth2`
- **Signature**: `GetSmartlistFutures(GetSmartlistFuturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `asset_type` ← `AssetType`, `category` ← `Category`, `page_number` ← `PageNumber`, `page_size` ← `PageSize`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<GetSmartlistFuturesError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSmartlistFuturesRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetSmartlistFuturesRequest.cs` |
| `AnalyticsResponse` | `src/Upstox/Models/AnalyticsResponse.cs` |
| `GetSmartlistFuturesError` | `src/Upstox/Errors/GetSmartlistFuturesError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetSmartlistMtf

- **Auth**: `options.Oauth2`
- **Signature**: `GetSmartlistMtf(GetSmartlistMtfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `page_number` ← `PageNumber`, `page_size` ← `PageSize`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<GetSmartlistMtfError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSmartlistMtfRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetSmartlistMtfRequest.cs` |
| `AnalyticsResponse` | `src/Upstox/Models/AnalyticsResponse.cs` |
| `GetSmartlistMtfError` | `src/Upstox/Errors/GetSmartlistMtfError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### GetSmartlistOptions

- **Auth**: `options.Oauth2`
- **Signature**: `GetSmartlistOptions(GetSmartlistOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `asset_type` ← `AssetType`, `category` ← `Category`, `page_number` ← `PageNumber`, `page_size` ← `PageSize`
- **Returns**: `AnalyticsResponse`
- **Error**: `ApiException<GetSmartlistOptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSmartlistOptionsRequest` | `src/Upstox/Requests/MarketHolidaysAndTimings/GetSmartlistOptionsRequest.cs` |
| `AnalyticsResponse` | `src/Upstox/Models/AnalyticsResponse.cs` |
| `GetSmartlistOptionsError` | `src/Upstox/Errors/GetSmartlistOptionsError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

