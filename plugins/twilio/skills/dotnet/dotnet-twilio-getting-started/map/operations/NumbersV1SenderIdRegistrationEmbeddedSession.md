<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1SenderIdRegistrationEmbeddedSession — operations

Accessor: `client.NumbersV1SenderIdRegistrationEmbeddedSession` · Source: `Api/NumbersV1SenderIdRegistrationEmbeddedSession.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSenderIdRegistrationEmbeddedSession

- **Server group**: `Default5`
- **Signature**: `CreateSenderIdRegistrationEmbeddedSession(string bundleSid, NumbersV1CreateEmbeddedSessionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV1CreateEmbeddedSessionResponse`
- **Error**: `SdkException<CreateSenderIdRegistrationEmbeddedSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersV1CreateEmbeddedSessionRequest` | `Models/NumbersV1CreateEmbeddedSessionRequest.cs` |
| `NumbersV1CreateEmbeddedSessionResponse` | `Models/NumbersV1CreateEmbeddedSessionResponse.cs` |
| `CreateSenderIdRegistrationEmbeddedSessionError` | `Errors/CreateSenderIdRegistrationEmbeddedSessionError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

