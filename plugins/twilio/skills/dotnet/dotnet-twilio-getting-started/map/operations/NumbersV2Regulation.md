# NumbersV2Regulation — operations

Accessor: `client.NumbersV2Regulation` · Source: `Api/NumbersV2Regulation.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchRegulation
- **HTTP**: `GET /v2/RegulatoryCompliance/Regulations/{Sid}` (Default5 (numbers))
- **Notes**: Fetch specific Regulation Instance.
- **Signature**: `FetchRegulation(string sid, bool? includeConstraints, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeConstraints` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `IncludeConstraints` ← `includeConstraints`
- **Returns**: `NumbersV2RegulatoryComplianceRegulation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListRegulation
- **HTTP**: `GET /v2/RegulatoryCompliance/Regulations` (Default5 (numbers))
- **Notes**: Retrieve a list of all Regulations.
- **Signature**: `ListRegulation(RegulationEnumEndUserType? endUserType, string? isoCountry, string? numberType, bool? includeConstraints, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`endUserType` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `EndUserType` ← `endUserType`, `IsoCountry` ← `isoCountry`, `NumberType` ← `numberType`, `IncludeConstraints` ← `includeConstraints`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRegulationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
