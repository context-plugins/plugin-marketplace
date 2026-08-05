# VerifyV2Challenge — operations

Accessor: `client.VerifyV2Challenge` · Source: `Api/VerifyV2Challenge.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateChallenge
- **HTTP**: `POST /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges` (Default13 (verify))
- **Notes**: Create a new Challenge for the Factor
- **Signature**: `CreateChallenge(string serviceSid, string identity, string factorSid, DateTimeOffset? expirationDate, string? detailsMessage, IReadOnlyList<object>? detailsFields, object? hiddenDetails, string? authPayload, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`expirationDate` … `authPayload`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FactorSid` ← `factorSid`, `ExpirationDate` ← `expirationDate`, `Details.Message` ← `detailsMessage`, `Details.Fields` ← `detailsFields`, `HiddenDetails` ← `hiddenDetails`, `AuthPayload` ← `authPayload`
- **Returns**: `VerifyV2ServiceEntityChallenge`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchChallenge
- **HTTP**: `GET /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}` (Default13 (verify))
- **Notes**: Fetch a specific Challenge.
- **Signature**: `FetchChallenge(string serviceSid, string identity, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VerifyV2ServiceEntityChallenge`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListChallenge
- **HTTP**: `GET /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges` (Default13 (verify))
- **Notes**: Retrieve a list of all Challenges for a Factor.
- **Signature**: `ListChallenge(string serviceSid, string identity, string? factorSid, ChallengeEnumChallengeStatuses? status, ConversationMessageEnumOrderType? order, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`factorSid` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FactorSid` ← `factorSid`, `Status` ← `status`, `Order` ← `order`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListChallengeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateChallenge
- **HTTP**: `POST /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}` (Default13 (verify))
- **Notes**: Verify a specific Challenge.
- **Signature**: `UpdateChallenge(string serviceSid, string identity, string sid, string? authPayload, object? metadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `authPayload` — nullable, no default → **must pass explicitly**
  - `metadata` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `AuthPayload` ← `authPayload`, `Metadata` ← `metadata`
- **Returns**: `VerifyV2ServiceEntityChallenge`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
