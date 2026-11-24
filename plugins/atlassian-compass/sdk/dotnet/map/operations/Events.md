<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/AtlassianCompass/Api/Events.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCompassEvent

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateCompassEvent(CreateCompassEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateCompassEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value)` [400, 404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCompassEventRequest` | `src/AtlassianCompass/Requests/Events/CreateCompassEventRequest.cs` |
| `CreateStreamlinedEventRequest` | `src/AtlassianCompass/Models/CreateStreamlinedEventRequest.cs` |
| `CreateCompassEventError` | `src/AtlassianCompass/Errors/CreateCompassEventError.cs` |
| `ErrorResponseDto` | `src/AtlassianCompass/Models/ErrorResponseDto.cs` |

