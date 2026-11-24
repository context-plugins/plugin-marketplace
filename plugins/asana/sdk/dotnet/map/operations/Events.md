<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.Events` · Source: `src/Asana/Api/Events.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEvents

- **Auth**: `options.PersonalAccessToken` OR `options.Oauth2`
- **Signature**: `GetEvents(GetEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Resource`
- **Query params (wire ← C#)**: `resource` ← `Resource`, `sync` ← `Sync`, `opt_pretty` ← `OptPretty`, `opt_fields` ← `OptFields` (comma-separated)
- **Returns**: `EventsResponse`
- **Error**: `ApiException<GetEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEventsRequest` | `src/Asana/Requests/Events/GetEventsRequest.cs` |
| `EventsResponse` | `src/Asana/Models/EventsResponse.cs` |
| `GetEventsError` | `src/Asana/Errors/GetEventsError.cs` |
| `ErrorResponseModel` | `src/Asana/Models/ErrorResponseModel.cs` |

