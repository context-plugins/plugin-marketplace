<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncSequences — operations

Accessor: `client.SyncSequences` · Source: `src/Hightouch/Api/SyncSequences.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSyncSequenceRun

- **Auth**: `options.BearerAuth`
- **Signature**: `GetSyncSequenceRun(GetSyncSequenceRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncSequenceRunId`
- **Returns**: `SyncSequenceStatusOutput`
- **Error**: `ApiException<GetSyncSequenceRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSyncSequenceRunRequest` | `src/Hightouch/Requests/SyncSequences/GetSyncSequenceRunRequest.cs` |
| `SyncSequenceStatusOutput` | `src/Hightouch/Models/SyncSequenceStatusOutput.cs` |
| `GetSyncSequenceRunError` | `src/Hightouch/Errors/GetSyncSequenceRunError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

### TriggerSequenceRun

- **Auth**: `options.BearerAuth`
- **Signature**: `TriggerSequenceRun(TriggerSequenceRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SyncSequenceId`
- **Returns**: `TriggerSequenceRunOutput`
- **Error**: `ApiException<TriggerSequenceRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TriggerSequenceRunRequest` | `src/Hightouch/Requests/SyncSequences/TriggerSequenceRunRequest.cs` |
| `TriggerSequenceRunOutput` | `src/Hightouch/Models/TriggerSequenceRunOutput.cs` |
| `TriggerSequenceRunError` | `src/Hightouch/Errors/TriggerSequenceRunError.cs` |
| `ValidateErrorJson` | `src/Hightouch/Models/ValidateErrorJson.cs` |

