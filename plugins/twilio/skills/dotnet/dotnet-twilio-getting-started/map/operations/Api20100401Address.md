# Api20100401Address — operations

Accessor: `client.Api20100401Address` · Source: `Api/Api20100401Address.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAddress
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Addresses.json` (Default (api))
- **Signature**: `CreateAddress(string accountSid, string customerName, string street, string city, string region, string postalCode, string isoCountry, string? friendlyName, bool? emergencyEnabled, bool? autoCorrectAddress, string? streetSecondary, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `streetSecondary`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CustomerName` ← `customerName`, `Street` ← `street`, `City` ← `city`, `Region` ← `region`, `PostalCode` ← `postalCode`, `IsoCountry` ← `isoCountry`, `FriendlyName` ← `friendlyName`, `EmergencyEnabled` ← `emergencyEnabled`, `AutoCorrectAddress` ← `autoCorrectAddress`, `StreetSecondary` ← `streetSecondary`
- **Returns**: `ApiV2010AccountAddress`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAddress
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json` (Default (api))
- **Signature**: `DeleteAddress(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchAddress
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json` (Default (api))
- **Signature**: `FetchAddress(string accountSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountAddress`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListAddress
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Addresses.json` (Default (api))
- **Signature**: `ListAddress(string accountSid, string? customerName, string? friendlyName, bool? emergencyEnabled, string? isoCountry, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`customerName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `CustomerName` ← `customerName`, `FriendlyName` ← `friendlyName`, `EmergencyEnabled` ← `emergencyEnabled`, `IsoCountry` ← `isoCountry`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAddressResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateAddress
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json` (Default (api))
- **Signature**: `UpdateAddress(string accountSid, string sid, string? friendlyName, string? customerName, string? street, string? city, string? region, string? postalCode, bool? emergencyEnabled, bool? autoCorrectAddress, string? streetSecondary, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`friendlyName` … `streetSecondary`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `CustomerName` ← `customerName`, `Street` ← `street`, `City` ← `city`, `Region` ← `region`, `PostalCode` ← `postalCode`, `EmergencyEnabled` ← `emergencyEnabled`, `AutoCorrectAddress` ← `autoCorrectAddress`, `StreetSecondary` ← `streetSecondary`
- **Returns**: `ApiV2010AccountAddress`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
