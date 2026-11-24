<!-- Generated file — do not edit; regenerated with the SDK. -->

# DecisionSessions — operations

Accessor: `client.DecisionSessions` · Source: `src/Deliverd/Api/DecisionSessions.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1DecisionSessionsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1DecisionSessionsById(GetApiV1DecisionSessionsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1DecisionSessionsResponse`
- **Error**: `ApiException<GetApiV1DecisionSessionsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1DecisionSessionsByIdRequest` | `src/Deliverd/Requests/DecisionSessions/GetApiV1DecisionSessionsByIdRequest.cs` |
| `ApiV1DecisionSessionsResponse` | `src/Deliverd/Models/ApiV1DecisionSessionsResponse.cs` |
| `GetApiV1DecisionSessionsByIdError` | `src/Deliverd/Errors/GetApiV1DecisionSessionsByIdError.cs` |

### PostApiV1DecisionSessionsByIdExpire

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1DecisionSessionsByIdExpire(PostApiV1DecisionSessionsByIdExpireRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1DecisionSessionsExpireResponse`
- **Error**: `ApiException<PostApiV1DecisionSessionsByIdExpireError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1DecisionSessionsByIdExpireRequest` | `src/Deliverd/Requests/DecisionSessions/PostApiV1DecisionSessionsByIdExpireRequest.cs` |
| `ApiV1DecisionSessionsExpireResponse` | `src/Deliverd/Models/ApiV1DecisionSessionsExpireResponse.cs` |
| `PostApiV1DecisionSessionsByIdExpireError` | `src/Deliverd/Errors/PostApiV1DecisionSessionsByIdExpireError.cs` |

