<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/Postscript/Api/Events.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomEvent

- **Auth**: `options.Sec0`
- **Signature**: `CreateCustomEvent(CreateCustomEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV2EventsResponse`
- **Error**: `ApiException<CreateCustomEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomEventRequest` | `src/Postscript/Requests/Events/CreateCustomEventRequest.cs` |
| `ApiV2EventsRequest` | `src/Postscript/Models/ApiV2EventsRequest.cs` |
| `ApiV2EventsResponse` | `src/Postscript/Models/ApiV2EventsResponse.cs` |
| `CreateCustomEventError` | `src/Postscript/Errors/CreateCustomEventError.cs` |

