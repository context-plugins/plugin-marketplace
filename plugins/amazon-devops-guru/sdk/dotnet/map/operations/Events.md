<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/AmazonDevOpsGuru/Api/Events.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListEvents

- **Auth**: `options.Sigv4`
- **Signature**: `ListEvents(ListEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListEventsResponse`
- **Error**: `ApiException<ListEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationExceptionModel([NotNullWhen(true)] out ValidationExceptionModel? value)` [400] · `TryGetAccessDeniedException([NotNullWhen(true)] out AccessDeniedException? value)` [403] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottlingException([NotNullWhen(true)] out ThrottlingException? value)` [429] · `TryGetInternalServerException([NotNullWhen(true)] out InternalServerException? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEventsRequest` | `src/AmazonDevOpsGuru/Requests/Events/ListEventsRequest.cs` |
| `EventsRequest` | `src/AmazonDevOpsGuru/Models/EventsRequest.cs` |
| `ListEventsResponse` | `src/AmazonDevOpsGuru/Models/ListEventsResponse.cs` |
| `ListEventsError` | `src/AmazonDevOpsGuru/Errors/ListEventsError.cs` |
| `ValidationExceptionModel` | `src/AmazonDevOpsGuru/Models/ValidationExceptionModel.cs` |
| `AccessDeniedException` | `src/AmazonDevOpsGuru/Models/AccessDeniedException.cs` |
| `ResourceNotFoundException` | `src/AmazonDevOpsGuru/Models/ResourceNotFoundException.cs` |
| `ThrottlingException` | `src/AmazonDevOpsGuru/Models/ThrottlingException.cs` |
| `InternalServerException` | `src/AmazonDevOpsGuru/Models/InternalServerException.cs` |

