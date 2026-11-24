<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountApi — operations

Accessor: `client.AccountApi` · Source: `src/StayingApi/Api/AccountApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Account

- **Auth**: `options.BearerAuth`
- **Signature**: `Account(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AccountEnvelope`
- **Error**: `ApiException<AccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AccountEnvelope` | `src/StayingApi/Models/AccountEnvelope.cs` |
| `AccountError` | `src/StayingApi/Errors/AccountError.cs` |
| `ErrorEnvelope` | `src/StayingApi/Models/ErrorEnvelope.cs` |

