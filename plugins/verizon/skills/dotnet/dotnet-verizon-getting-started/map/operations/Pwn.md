# Pwn — operations

Accessor: `client.Pwn` · Source: `Api/Pwn.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChangePwndeviceIpaddress
- **HTTP**: `PUT /m2m/v1/devices/pwn/actions/ipaddress` (HyperPreciseCredentials (thingspace))
- **Signature**: `ChangePwndeviceIpaddress(ChangePwndeviceIpaddressRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChangePwndeviceIpaddressResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChangePwndeviceProfile
- **HTTP**: `POST /m2m/v1/devices/pwn/actions/profile` (HyperPreciseCredentials (thingspace))
- **Signature**: `ChangePwndeviceProfile(ChangePwndeviceProfileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChangePwndeviceProfileResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChangePwndeviceStateActivate
- **HTTP**: `POST /m2m/v1/devices/pwn/actions/state/activate` (HyperPreciseCredentials (thingspace))
- **Signature**: `ChangePwndeviceStateActivate(ChangePwndeviceStateActivateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChangePwndeviceStateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChangePwndeviceStateDeactivate
- **HTTP**: `POST /m2m/v1/devices/pwn/actions/state/deactivate` (HyperPreciseCredentials (thingspace))
- **Signature**: `ChangePwndeviceStateDeactivate(ChangePwndeviceStateDeactivateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChangePwndeviceStateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPwnperformanceConsent
- **HTTP**: `GET /m2m/v1/devices/pwn/performance/consent/{aname}` (HyperPreciseCredentials (thingspace))
- **Signature**: `GetPwnperformanceConsent(string aname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetPwnperformanceConsentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetProfileList
- **HTTP**: `GET /m2m/v1/devices/pwn/profiles/list/{aname}` (HyperPreciseCredentials (thingspace))
- **Signature**: `GetProfileList(string aname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PwnprofileList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Kpilist
- **HTTP**: `GET /m2m/v1/devices/pwn/kpi/list/{aname}` (HyperPreciseCredentials (thingspace))
- **Signature**: `Kpilist(string aname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `KpiinfoList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
