# Api20100401Payment — operations

Accessor: `client.Api20100401Payment` · Source: `Api/Api20100401Payment.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePayments
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json` (Default (api))
- **Notes**: create an instance of payments. This will start a new payments session
- **Signature**: `CreatePayments(string accountSid, string callSid, string idempotencyKey, string statusCallback, PaymentsEnumBankAccountType? bankAccountType, double? chargeAmount, string? currency, string? description, string? input, int? minPostalCodeLength, object? parameter, string? paymentConnector, PaymentsEnumPaymentMethod? paymentMethod, bool? postalCode, bool? securityCode, int? timeout, PaymentsEnumTokenType? tokenType, string? validCardTypes, string? requireMatchingInputs, Confirmation? confirmation, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`bankAccountType` … `confirmation`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `IdempotencyKey` ← `idempotencyKey`, `StatusCallback` ← `statusCallback`, `BankAccountType` ← `bankAccountType`, `ChargeAmount` ← `chargeAmount`, `Currency` ← `currency`, `Description` ← `description`, `Input` ← `input`, `MinPostalCodeLength` ← `minPostalCodeLength`, `Parameter` ← `parameter`, `PaymentConnector` ← `paymentConnector`, `PaymentMethod` ← `paymentMethod`, `PostalCode` ← `postalCode`, `SecurityCode` ← `securityCode`, `Timeout` ← `timeout`, `TokenType` ← `tokenType`, `ValidCardTypes` ← `validCardTypes`, `RequireMatchingInputs` ← `requireMatchingInputs`, `Confirmation` ← `confirmation`
- **Returns**: `ApiV2010AccountCallPayments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePayments
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json` (Default (api))
- **Notes**: update an instance of payments with different phases of payment flows.
- **Signature**: `UpdatePayments(string accountSid, string callSid, string sid, string idempotencyKey, string statusCallback, PaymentsEnumCapture? capture, PaymentsEnumStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `capture` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `IdempotencyKey` ← `idempotencyKey`, `StatusCallback` ← `statusCallback`, `Capture` ← `capture`, `Status` ← `status`
- **Returns**: `ApiV2010AccountCallPayments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
