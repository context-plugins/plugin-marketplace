<!-- Generated file — do not edit; regenerated with the SDK. -->

# Qualify — operations

Accessor: `client.Qualify` · Source: `src/Jid/Api/Qualify.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetResults

- **Auth**: `options.Bearer`
- **Signature**: `GetResults(GetResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `V1ResultsResponse`
- **Error**: `ApiException<GetResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetResultsRequest` | `src/Jid/Requests/Qualify/GetResultsRequest.cs` |
| `V1ResultsResponse` | `src/Jid/Models/V1ResultsResponse.cs` |
| `GetResultsError` | `src/Jid/Errors/GetResultsError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

### QualifyCounterparty

- **Auth**: `options.Bearer`
- **Signature**: `QualifyCounterparty(QualifyCounterpartyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Qualification`
- **Error**: `ApiException<QualifyCounterpartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QualifyCounterpartyRequest` | `src/Jid/Requests/Qualify/QualifyCounterpartyRequest.cs` |
| `V1QualifyRequest2` | `src/Jid/Models/AnyOf/V1QualifyRequest2.cs` |
| `Qualification` | `src/Jid/Models/Qualification.cs` |
| `QualifyCounterpartyError` | `src/Jid/Errors/QualifyCounterpartyError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

### RecordOutcome

- **Auth**: `options.Bearer` OR anonymous
- **Signature**: `RecordOutcome(RecordOutcomeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1OutcomesResponse`
- **Error**: `ApiException<RecordOutcomeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 410] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecordOutcomeRequest` | `src/Jid/Requests/Qualify/RecordOutcomeRequest.cs` |
| `V1OutcomesRequest` | `src/Jid/Models/V1OutcomesRequest.cs` |
| `V1OutcomesResponse` | `src/Jid/Models/V1OutcomesResponse.cs` |
| `RecordOutcomeError` | `src/Jid/Errors/RecordOutcomeError.cs` |
| `Error` | `src/Jid/Models/Error.cs` |

