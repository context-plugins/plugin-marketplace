<!-- Generated file — do not edit; regenerated with the SDK. -->

# NlWeb — operations

Accessor: `client.NlWeb` · Source: `src/AgentReady/Api/NlWeb.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AskGet

- **Signature**: `AskGet(AskGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Query`
- **Query params (wire ← C#)**: `query` ← `Query`, `mode` ← `Mode`, `itemType` ← `ItemType`, `stream` ← `Stream`
- **Returns**: `AskResponse1`
- **Error**: `ApiException<AskGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AskGetRequest` | `src/AgentReady/Requests/NlWeb/AskGetRequest.cs` |
| `Mode` | `src/AgentReady/Models/Enums/Mode.cs` |
| `ItemType3` | `src/AgentReady/Models/Enums/ItemType3.cs` |
| `Stream` | `src/AgentReady/Models/Enums/Stream.cs` |
| `AskResponse1` | `src/AgentReady/Models/AnyOf/AskResponse1.cs` |
| `AskGetError` | `src/AgentReady/Errors/AskGetError.cs` |
| `Error` | `src/AgentReady/Models/Error.cs` |

### AskPost

- **Signature**: `AskPost(AskPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AskResponse1`
- **Error**: `ApiException<AskPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 429, 500, 503] · `TryGetAskResponse1([NotNullWhen(true)] out AskResponse1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AskPostRequest` | `src/AgentReady/Requests/NlWeb/AskPostRequest.cs` |
| `AskRequest` | `src/AgentReady/Models/AskRequest.cs` |
| `AskResponse1` | `src/AgentReady/Models/AnyOf/AskResponse1.cs` |
| `AskPostError` | `src/AgentReady/Errors/AskPostError.cs` |
| `Error` | `src/AgentReady/Models/Error.cs` |

