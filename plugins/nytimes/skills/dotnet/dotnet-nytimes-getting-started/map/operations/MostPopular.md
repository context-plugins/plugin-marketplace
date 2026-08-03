# MostPopular — operations

Accessor: `client.MostPopular` · Source: `Api/MostPopular.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MostEmailedArticlesOnNytimesCom
- **HTTP**: `GET /emailed/{period}.json` (Default3 (api))
- **Signature**: `MostEmailedArticlesOnNytimesCom(Period period, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MostEmailedArticlesOnNytimesComResponse`
- **Error**: `SdkException<MostEmailedArticlesOnNytimesComError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MostSharedArticlesOnNytimesComOfSpecifiedShareType
- **HTTP**: `GET /shared/{period}/{share_type}.json` (Default3 (api))
- **Signature**: `MostSharedArticlesOnNytimesComOfSpecifiedShareType(Period period, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MostSharedArticlesOnNytimesComOfSpecifiedShareTypeResponse`
- **Error**: `SdkException<MostSharedArticlesOnNytimesComOfSpecifiedShareTypeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MostSharedArticlesOnNytimesCom
- **HTTP**: `GET /shared/{period}.json` (Default3 (api))
- **Signature**: `MostSharedArticlesOnNytimesCom(Period period, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MostSharedArticlesOnNytimesComResponse`
- **Error**: `SdkException<MostSharedArticlesOnNytimesComError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MostViewedArticlesOnNytimesCom
- **HTTP**: `GET /viewed/{period}.json` (Default3 (api))
- **Signature**: `MostViewedArticlesOnNytimesCom(Period period, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MostViewedArticlesOnNytimesComResponse`
- **Error**: `SdkException<MostViewedArticlesOnNytimesComError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [401, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
