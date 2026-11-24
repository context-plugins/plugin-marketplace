<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignalApi — operations

Accessor: `client.SignalApi` · Source: `src/Jid/Api/SignalApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Signal

- **Signature**: `Signal(SignalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `tz` ← `Tz`
- **Returns**: `V1SignalResponse`
- **Error**: `ApiException<SignalError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SignalRequest` | `src/Jid/Requests/SignalApi/SignalRequest.cs` |
| `V1SignalResponse` | `src/Jid/Models/V1SignalResponse.cs` |
| `SignalError` | `src/Jid/Errors/SignalError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

