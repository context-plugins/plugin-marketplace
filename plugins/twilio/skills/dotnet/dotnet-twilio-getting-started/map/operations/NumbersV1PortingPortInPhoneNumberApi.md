# NumbersV1PortingPortInPhoneNumberApi — operations

Accessor: `client.NumbersV1PortingPortInPhoneNumberApi` · Source: `Api/NumbersV1PortingPortInPhoneNumberApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeletePortingPortInPhoneNumber
- **HTTP**: `DELETE /v1/Porting/PortIn/{PortInRequestSid}/PhoneNumber/{PhoneNumberSid}` (Default7 (numbers))
- **Notes**: Allows to cancel a port in request phone number by SID
- **Signature**: `DeletePortingPortInPhoneNumber(string portInRequestSid, string phoneNumberSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchPortingPortInPhoneNumber
- **HTTP**: `GET /v1/Porting/PortIn/{PortInRequestSid}/PhoneNumber/{PhoneNumberSid}` (Default7 (numbers))
- **Notes**: Fetch a phone number by port in request SID and phone number SID
- **Signature**: `FetchPortingPortInPhoneNumber(string portInRequestSid, string phoneNumberSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1PortingPortInPhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
