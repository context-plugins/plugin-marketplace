<!-- Generated file — do not edit; regenerated with the SDK. -->

# JobsApi — operations

Accessor: `client.JobsApi` · Source: `src/Buildkite/Api/JobsApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetJobLog

- **Auth**: `options.BearerAuth`
- **Signature**: `GetJobLog(GetJobLogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`, `Number`, `Job`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetJobLogRequest` | `src/Buildkite/Requests/JobsApi/GetJobLogRequest.cs` |

### RetryJob

- **Auth**: `options.BearerAuth`
- **Signature**: `RetryJob(RetryJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Org`, `Pipeline`, `Number`, `Job`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RetryJobRequest` | `src/Buildkite/Requests/JobsApi/RetryJobRequest.cs` |

