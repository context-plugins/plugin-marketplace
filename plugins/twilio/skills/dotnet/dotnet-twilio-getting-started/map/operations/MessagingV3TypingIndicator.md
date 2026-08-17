<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV3TypingIndicator — operations

Accessor: `client.MessagingV3TypingIndicator` · Source: `Api/MessagingV3TypingIndicator.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateV3TypingIndicator

- **Server group**: `Default1`
- **Signature**: `CreateV3TypingIndicator(TypingIndicatorRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `V2IndicatorsTypingJsonResponse`
- **Error**: `SdkException<CreateV3TypingIndicatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TypingIndicatorRequest` | `Models/OneOf/TypingIndicatorRequest.cs` |
| `V2IndicatorsTypingJsonResponse` | `Models/V2IndicatorsTypingJsonResponse.cs` |
| `CreateV3TypingIndicatorError` | `Errors/CreateV3TypingIndicatorError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

