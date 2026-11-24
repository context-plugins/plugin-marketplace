<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.Jobs` · Source: `src/StayingApi/Api/Jobs.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PollJob

- **Auth**: `options.BearerAuth`
- **Signature**: `PollJob(PollJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `JobResponse`
- **Error**: `ApiException<PollJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PollJobRequest` | `src/StayingApi/Requests/Jobs/PollJobRequest.cs` |
| `JobResponse` | `src/StayingApi/Models/AnyOf/JobResponse.cs` |
| `PollJobError` | `src/StayingApi/Errors/PollJobError.cs` |
| `ErrorEnvelope` | `src/StayingApi/Models/ErrorEnvelope.cs` |

