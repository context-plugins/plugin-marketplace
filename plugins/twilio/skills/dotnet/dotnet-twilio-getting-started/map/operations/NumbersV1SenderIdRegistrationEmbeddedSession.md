# NumbersV1SenderIdRegistrationEmbeddedSession — operations

Accessor: `client.NumbersV1SenderIdRegistrationEmbeddedSession` · Source: `Api/NumbersV1SenderIdRegistrationEmbeddedSession.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSenderIdRegistrationEmbeddedSession
- **HTTP**: `POST /v1/SenderIdRegistrations/{BundleSid}/EmbeddedSessions` (Default5 (numbers))
- **Notes**: Creates a new embedded Persona inquiry session for an existing registration in DRAFT or TWILIO_REJECTED status. Use this to resume an incomplete registration or resubmit a rejected one.
- **Signature**: `CreateSenderIdRegistrationEmbeddedSession(string bundleSid, NumbersV1CreateEmbeddedSessionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NumbersV1CreateEmbeddedSessionResponse`
- **Error**: `SdkException<CreateSenderIdRegistrationEmbeddedSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
