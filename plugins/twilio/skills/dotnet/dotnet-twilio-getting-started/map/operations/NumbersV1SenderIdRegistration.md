# NumbersV1SenderIdRegistration — operations

Accessor: `client.NumbersV1SenderIdRegistration` · Source: `Api/NumbersV1SenderIdRegistration.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSenderIdRegistration
- **HTTP**: `POST /v1/SenderIdRegistrations` (Default7 (numbers))
- **Notes**: Creates a new sender ID registration and initializes an embedded Persona inquiry session. Returns registration details and embedded session credentials for rendering the Compliance Embeddable UI.
- **Signature**: `CreateSenderIdRegistration(NumbersV1CreateEmbeddedRegistrationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1CreateEmbeddedRegistrationResponse`
- **Error**: `SdkException<CreateSenderIdRegistrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
