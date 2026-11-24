<!-- Generated file — do not edit; regenerated with the SDK. -->

# Instruments — operations

Accessor: `client.Instruments` · Source: `src/Upstox/Api/Instruments.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchInstrument

- **Auth**: `options.Oauth2`
- **Signature**: `SearchInstrument(SearchInstrumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Query`
- **Query params (wire ← C#)**: `query` ← `Query`, `exchanges` ← `Exchanges`, `segments` ← `Segments`, `instrument_types` ← `InstrumentTypes`, `expiry` ← `Expiry`, `atm_offset` ← `AtmOffset`, `page_number` ← `PageNumber`, `records` ← `Records`
- **Returns**: `SearchInstrumentResponse`
- **Error**: `ApiException<SearchInstrumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchInstrumentRequest` | `src/Upstox/Requests/Instruments/SearchInstrumentRequest.cs` |
| `SearchInstrumentResponse` | `src/Upstox/Models/SearchInstrumentResponse.cs` |
| `SearchInstrumentError` | `src/Upstox/Errors/SearchInstrumentError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

