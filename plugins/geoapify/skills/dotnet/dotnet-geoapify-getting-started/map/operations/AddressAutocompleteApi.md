# AddressAutocompleteApi — operations

Accessor: `client.AddressAutocompleteApi` · Source: `Api/AddressAutocompleteApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAddressAutocomplete
- **HTTP**: `GET /geocode/autocomplete` (Default (api))
- **Notes**: This endpoint returns a list of suggested addresses and associated location details (such as country, city, street, and more) based on the partial text provided by the user. It helps implement autocomplete functionality for address inputs, enhancing user experience by offering real-time suggestions.
- **Signature**: `GetAddressAutocomplete(string text, string apiKey, Format? format, Type3? type, int? limit, string? lang, string? filter, string? bias, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`format` … `bias`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `text` ← `text`, `apiKey` ← `apiKey`, `format` ← `format`, `type` ← `type`, `limit` ← `limit`, `lang` ← `lang`, `filter` ← `filter`, `bias` ← `bias`
- **Returns**: `GeocodeAutocompleteResponse`
- **Error**: `SdkException<GetAddressAutocompleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
