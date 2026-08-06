# NumbersV1EligibilityApi — operations

Accessor: `client.NumbersV1EligibilityApi` · Source: `Api/NumbersV1EligibilityApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateEligibility
- **HTTP**: `POST /v1/HostedNumber/Eligibility` (Default5 (numbers))
- **Notes**: Create an eligibility check for a number that you want to host in Twilio.
- **Signature**: `CreateEligibility(object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1Eligibility`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
