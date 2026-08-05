# VerifyV2Factor — operations

Accessor: `client.VerifyV2Factor` · Source: `Api/VerifyV2Factor.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteFactor
- **HTTP**: `DELETE /v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}` (Default13 (verify))
- **Notes**: Delete a specific Factor.
- **Signature**: `DeleteFactor(string serviceSid, string identity, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchFactor
- **HTTP**: `GET /v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}` (Default13 (verify))
- **Notes**: Fetch a specific Factor.
- **Signature**: `FetchFactor(string serviceSid, string identity, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2ServiceEntityFactor`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListFactor
- **HTTP**: `GET /v2/Services/{ServiceSid}/Entities/{Identity}/Factors` (Default13 (verify))
- **Notes**: Retrieve a list of all Factors for an Entity.
- **Signature**: `ListFactor(string serviceSid, string identity, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListFactorResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateFactor
- **HTTP**: `POST /v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}` (Default13 (verify))
- **Notes**: Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
- **Signature**: `UpdateFactor(string serviceSid, string identity, string sid, string? authPayload, string? friendlyName, string? configNotificationToken, string? configSdkVersion, int? configTimeStep, int? configSkew, int? configCodeLength, FactorEnumTotpAlgorithms? configAlg, string? configNotificationPlatform, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`authPayload` … `configNotificationPlatform`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AuthPayload` ← `authPayload`, `FriendlyName` ← `friendlyName`, `Config.NotificationToken` ← `configNotificationToken`, `Config.SdkVersion` ← `configSdkVersion`, `Config.TimeStep` ← `configTimeStep`, `Config.Skew` ← `configSkew`, `Config.CodeLength` ← `configCodeLength`, `Config.Alg` ← `configAlg`, `Config.NotificationPlatform` ← `configNotificationPlatform`
- **Returns**: `VerifyV2ServiceEntityFactor`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
