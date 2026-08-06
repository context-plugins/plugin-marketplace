# LookupsV1PhoneNumberApi — operations

Accessor: `client.LookupsV1PhoneNumberApi` · Source: `Api/LookupsV1PhoneNumberApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchPhoneNumber2
- **HTTP**: `GET /v1/PhoneNumbers/{PhoneNumber}` (Default4 (lookups))
- **Signature**: `FetchPhoneNumber2(string phoneNumber, string? countryCode, IReadOnlyList<string>? type, IReadOnlyList<string>? addOns, object? addOnsData, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`countryCode` … `addOnsData`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CountryCode` ← `countryCode`, `Type` ← `type`, `AddOns` ← `addOns`, `AddOnsData` ← `addOnsData`
- **Returns**: `LookupsV1PhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
