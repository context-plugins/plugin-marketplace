<!-- Generated file — do not edit; regenerated with the SDK. -->

# EventsControllerV2 — operations

Accessor: `client.EventsControllerV2` · Source: `src/Upstox/Api/EventsControllerV2.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PublishEvent

- **Signature**: `PublishEvent(PublishEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EventResponse`
- **Error**: `ApiException<PublishEventError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublishEventRequest` | `src/Upstox/Requests/EventsControllerV2/PublishEventRequest.cs` |
| `EventRequest` | `src/Upstox/Models/EventRequest.cs` |
| `EventResponse` | `src/Upstox/Models/EventResponse.cs` |
| `PublishEventError` | `src/Upstox/Errors/PublishEventError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

