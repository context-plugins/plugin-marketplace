# ConsumerRegistration — operations

Accessor: `client.ConsumerRegistration` · Source: `Api/ConsumerRegistration.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelOptin
- **HTTP**: `POST /optin/3.0/cancel-optin` (Default)
- **Signature**: `CancelOptin(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChargePlusOptin
- **HTTP**: `POST /billing/3.0/charge-plus-optin` (Default)
- **Signature**: `ChargePlusOptin(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CheckEligibility
- **HTTP**: `POST /optin/3.0/check-eligibility` (Default)
- **Signature**: `CheckEligibility(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConfirmOptin
- **HTTP**: `POST /optin/3.0/confirm-optin` (Default)
- **Signature**: `ConfirmOptin(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ConfirmVerifyDevice
- **HTTP**: `POST /optin/3.0/confirm-verify-device` (Default)
- **Signature**: `ConfirmVerifyDevice(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetMsisdnNetwork
- **HTTP**: `POST /optin/3.0/msisdn-network` (Default)
- **Signature**: `GetMsisdnNetwork(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOptinInfo
- **HTTP**: `GET /optin/3.0/optin-info/{merchantId}` (Default)
- **Signature**: `GetOptinInfo(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Optin
- **HTTP**: `POST /optin/3.0/optin` (Default)
- **Notes**: The `optin` API call is one of two ways to initiate the opt-in process. The other is `optin-info`, which uses cached information when available. While `optin` can be used to initiate all opt-ins, it is only _required_ for the following cases: - One-time Pin (OTP) opt-ins – to trigger sending an OTP SMS to the device. - Carrier gateway opt-ins* – when `optin-info` does not return a static URL and a unique URL must be generated per opt-in. After a successful `optin` call, the opt-in typically enters the `pending-validate` status. Supported Optin Types `otp` – Sends a one-time PIN to the consumer via SMS, confirmed via `confirm-optin`. `hosted` – Redirects the consumer to an issuer-provided UI for verification. `carrier-gw`* – Verifies the consumer via a ping through the carrier gateway. `silent-mo`* – Verifies the consumer by sending a silent SMS from the device. _*These optin types are use-case specific and not required for most integrations. Only include them if explicitly directed._ Related Methods The `optin` method is used in conjunction with the following to complete consumer approval: - `validate-optin` – Validates the phone number (billing account) the consumer is registering as a payment method. - `submit-optin-parameters` – Submits carrier-specific parameters such as an account PIN, if required. - `confirm-optin` – Finalizes the opt-in and activates it for billing. OTP Optin Defaults For OTP-based opt-ins using Boku-managed PINs, the following defaults apply: - PIN length: 4 digits - Validity period: 300 seconds - Maximum attempts: 3 (_Note: Carrier-managed PINs may follow different rules_).
- **Signature**: `Optin(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### QueryOptin
- **HTTP**: `POST /optin/3.0/query-optin` (Default)
- **Signature**: `QueryOptin(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ResendOtp
- **HTTP**: `POST /optin/3.0/resend-otp` (Default)
- **Signature**: `ResendOtp(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ValidateOptin
- **HTTP**: `POST /optin/3.0/validate-optin` (Default)
- **Signature**: `ValidateOptin(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### VerifyDevice
- **HTTP**: `POST /optin/3.0/verify-device` (Default)
- **Signature**: `VerifyDevice(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
