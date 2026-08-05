# NumbersV1PortingPortabilityApi — operations

Accessor: `client.NumbersV1PortingPortabilityApi` · Source: `Api/NumbersV1PortingPortabilityApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchPortingPortability
- **HTTP**: `GET /v1/Porting/Portability/PhoneNumber/{PhoneNumber}` (Default7 (numbers))
- **Notes**: Check if a single phone number can be ported to Twilio
- **Signature**: `FetchPortingPortability(string phoneNumber, string? targetAccountSid, string? addressSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `targetAccountSid` — nullable, no default → **must pass explicitly**
  - `addressSid` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `TargetAccountSid` ← `targetAccountSid`, `AddressSid` ← `addressSid`
- **Returns**: `NumbersV1PortingPortability`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
