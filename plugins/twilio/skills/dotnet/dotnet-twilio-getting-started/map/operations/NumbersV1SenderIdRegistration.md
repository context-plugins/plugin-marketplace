<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1SenderIdRegistration — operations

Accessor: `client.NumbersV1SenderIdRegistration` · Source: `Api/NumbersV1SenderIdRegistration.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSenderIdRegistration

- **Server group**: `Default5`
- **Signature**: `CreateSenderIdRegistration(NumbersV1CreateEmbeddedRegistrationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV1CreateEmbeddedRegistrationResponse`
- **Error**: `SdkException<CreateSenderIdRegistrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `NumbersV1CreateEmbeddedRegistrationRequest` | `Models/NumbersV1CreateEmbeddedRegistrationRequest.cs` |
| `NumbersV1CreateEmbeddedRegistrationResponse` | `Models/NumbersV1CreateEmbeddedRegistrationResponse.cs` |
| `CreateSenderIdRegistrationError` | `Errors/CreateSenderIdRegistrationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

