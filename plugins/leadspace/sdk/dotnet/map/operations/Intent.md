<!-- Generated file — do not edit; regenerated with the SDK. -->

# Intent — operations

Accessor: `client.Intent` · Source: `src/Leadspace/Api/Intent.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ScoreCompanyIntent

- **Auth**: `options.BearerAuth`
- **Signature**: `ScoreCompanyIntent(ScoreCompanyIntentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IntentAccepted`
- **Error**: `ApiException<ScoreCompanyIntentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 427, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ScoreCompanyIntentRequest` | `src/Leadspace/Requests/Intent/ScoreCompanyIntentRequest.cs` |
| `IntentRequest` | `src/Leadspace/Models/IntentRequest.cs` |
| `IntentAccepted` | `src/Leadspace/Models/IntentAccepted.cs` |
| `ScoreCompanyIntentError` | `src/Leadspace/Errors/ScoreCompanyIntentError.cs` |
| `Error` | `src/Leadspace/Models/Error.cs` |

