<!-- Generated file — do not edit; regenerated with the SDK. -->

# EventSources — operations

Accessor: `client.EventSources` · Source: `src/AmazonDevOpsGuru/Api/EventSources.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DescribeEventSourcesConfig

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeEventSourcesConfig(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DescribeEventSourcesConfigResponse`
- **Error**: `ApiException<DescribeEventSourcesConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeEventSourcesConfigResponse` | `src/AmazonDevOpsGuru/Models/DescribeEventSourcesConfigResponse.cs` |
| `DescribeEventSourcesConfigError` | `src/AmazonDevOpsGuru/Errors/DescribeEventSourcesConfigError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

### UpdateEventSourcesConfig

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateEventSourcesConfig(UpdateEventSourcesConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<UpdateEventSourcesConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEventSourcesConfigRequest` | `src/AmazonDevOpsGuru/Requests/EventSources/UpdateEventSourcesConfigRequest.cs` |
| `DescribeEventSourcesConfigResponse` | `src/AmazonDevOpsGuru/Models/DescribeEventSourcesConfigResponse.cs` |
| `UpdateEventSourcesConfigError` | `src/AmazonDevOpsGuru/Errors/UpdateEventSourcesConfigError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

