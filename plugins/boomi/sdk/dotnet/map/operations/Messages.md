<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.Messages` · Source: `src/Boomi/Api/Messages.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PublishMessages

- **Server group**: `DefaultBoomiEventStreamsRestMessagesApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `PublishMessages(PublishMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublishResponse`
- **Error**: `ApiException<PublishMessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiEventStreamsRestMessagesApi([NotNullWhen(true)] out ErrorResponseBoomiEventStreamsRestMessagesApi? value)` [400, 401] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublishMessagesRequest` | `src/Boomi/Requests/Messages/PublishMessagesRequest.cs` |
| `RequestModel` | `src/Boomi/Models/AnyOf/RequestModel.cs` |
| `PublishResponse` | `src/Boomi/Models/PublishResponse.cs` |
| `PublishMessagesError` | `src/Boomi/Errors/PublishMessagesError.cs` |
| `ErrorResponseBoomiEventStreamsRestMessagesApi` | `src/Boomi/Models/ErrorResponseBoomiEventStreamsRestMessagesApi.cs` |

