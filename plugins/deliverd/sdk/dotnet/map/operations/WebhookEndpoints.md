<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhookEndpoints — operations

Accessor: `client.WebhookEndpoints` · Source: `src/Deliverd/Api/WebhookEndpoints.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1WebhookEndpointsById

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteApiV1WebhookEndpointsById(DeleteApiV1WebhookEndpointsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteApiV1WebhookEndpointsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1WebhookEndpoints403Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints403Error1? value)` [403] · `TryGetApiV1WebhookEndpoints404Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1WebhookEndpointsByIdRequest` | `src/Deliverd/Requests/WebhookEndpoints/DeleteApiV1WebhookEndpointsByIdRequest.cs` |
| `DeleteApiV1WebhookEndpointsByIdError` | `src/Deliverd/Errors/DeleteApiV1WebhookEndpointsByIdError.cs` |
| `ApiV1WebhookEndpoints403Error1` | `src/Deliverd/Models/ApiV1WebhookEndpoints403Error1.cs` |
| `ApiV1WebhookEndpoints404Error1` | `src/Deliverd/Models/ApiV1WebhookEndpoints404Error1.cs` |

### GetApiV1WebhookEndpoints

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1WebhookEndpoints(GetApiV1WebhookEndpointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `cursor` ← `Cursor`
- **Returns**: `ApiV1WebhookEndpointsResponse`
- **Error**: `ApiException<GetApiV1WebhookEndpointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1WebhookEndpoints403Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1WebhookEndpointsRequest` | `src/Deliverd/Requests/WebhookEndpoints/GetApiV1WebhookEndpointsRequest.cs` |
| `ApiV1WebhookEndpointsResponse` | `src/Deliverd/Models/ApiV1WebhookEndpointsResponse.cs` |
| `GetApiV1WebhookEndpointsError` | `src/Deliverd/Errors/GetApiV1WebhookEndpointsError.cs` |
| `ApiV1WebhookEndpoints403Error1` | `src/Deliverd/Models/ApiV1WebhookEndpoints403Error1.cs` |

### GetApiV1WebhookEndpointsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1WebhookEndpointsById(GetApiV1WebhookEndpointsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1WebhookEndpointsResponse2`
- **Error**: `ApiException<GetApiV1WebhookEndpointsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1WebhookEndpoints403Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints403Error1? value)` [403] · `TryGetApiV1WebhookEndpoints404Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1WebhookEndpointsByIdRequest` | `src/Deliverd/Requests/WebhookEndpoints/GetApiV1WebhookEndpointsByIdRequest.cs` |
| `ApiV1WebhookEndpointsResponse2` | `src/Deliverd/Models/ApiV1WebhookEndpointsResponse2.cs` |
| `GetApiV1WebhookEndpointsByIdError` | `src/Deliverd/Errors/GetApiV1WebhookEndpointsByIdError.cs` |
| `ApiV1WebhookEndpoints403Error1` | `src/Deliverd/Models/ApiV1WebhookEndpoints403Error1.cs` |
| `ApiV1WebhookEndpoints404Error1` | `src/Deliverd/Models/ApiV1WebhookEndpoints404Error1.cs` |

### PatchApiV1WebhookEndpointsById

- **Auth**: `options.BearerAuth`
- **Signature**: `PatchApiV1WebhookEndpointsById(PatchApiV1WebhookEndpointsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1WebhookEndpointsResponse2`
- **Error**: `ApiException<PatchApiV1WebhookEndpointsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1WebhookEndpoints400Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints400Error1? value)` [400] · `TryGetApiV1WebhookEndpoints403Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints403Error1? value)` [403] · `TryGetApiV1WebhookEndpoints404Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PatchApiV1WebhookEndpointsByIdRequest` | `src/Deliverd/Requests/WebhookEndpoints/PatchApiV1WebhookEndpointsByIdRequest.cs` |
| `ApiV1WebhookEndpointsRequest1` | `src/Deliverd/Models/ApiV1WebhookEndpointsRequest1.cs` |
| `ApiV1WebhookEndpointsResponse2` | `src/Deliverd/Models/ApiV1WebhookEndpointsResponse2.cs` |
| `PatchApiV1WebhookEndpointsByIdError` | `src/Deliverd/Errors/PatchApiV1WebhookEndpointsByIdError.cs` |
| `ApiV1WebhookEndpoints400Error1` | `src/Deliverd/Models/ApiV1WebhookEndpoints400Error1.cs` |
| `ApiV1WebhookEndpoints403Error1` | `src/Deliverd/Models/ApiV1WebhookEndpoints403Error1.cs` |
| `ApiV1WebhookEndpoints404Error1` | `src/Deliverd/Models/ApiV1WebhookEndpoints404Error1.cs` |

### PostApiV1WebhookEndpoints

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1WebhookEndpoints(PostApiV1WebhookEndpointsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1WebhookEndpointsResponse1`
- **Error**: `ApiException<PostApiV1WebhookEndpointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1WebhookEndpoints400Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints400Error1? value)` [400] · `TryGetApiV1WebhookEndpoints403Error1([NotNullWhen(true)] out ApiV1WebhookEndpoints403Error1? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1WebhookEndpointsRequest` | `src/Deliverd/Requests/WebhookEndpoints/PostApiV1WebhookEndpointsRequest.cs` |
| `ApiV1WebhookEndpointsRequest` | `src/Deliverd/Models/ApiV1WebhookEndpointsRequest.cs` |
| `ApiV1WebhookEndpointsResponse1` | `src/Deliverd/Models/ApiV1WebhookEndpointsResponse1.cs` |
| `PostApiV1WebhookEndpointsError` | `src/Deliverd/Errors/PostApiV1WebhookEndpointsError.cs` |
| `ApiV1WebhookEndpoints400Error1` | `src/Deliverd/Models/ApiV1WebhookEndpoints400Error1.cs` |
| `ApiV1WebhookEndpoints403Error1` | `src/Deliverd/Models/ApiV1WebhookEndpoints403Error1.cs` |

### PostApiV1WebhookEndpointsByIdTest

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1WebhookEndpointsByIdTest(PostApiV1WebhookEndpointsByIdTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1WebhookEndpointsTestResponse`
- **Error**: `ApiException<PostApiV1WebhookEndpointsByIdTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV1WebhookEndpointsTest400Error1([NotNullWhen(true)] out ApiV1WebhookEndpointsTest400Error1? value)` [400] · `TryGetApiV1WebhookEndpointsTest403Error1([NotNullWhen(true)] out ApiV1WebhookEndpointsTest403Error1? value)` [403] · `TryGetApiV1WebhookEndpointsTest404Error1([NotNullWhen(true)] out ApiV1WebhookEndpointsTest404Error1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1WebhookEndpointsByIdTestRequest` | `src/Deliverd/Requests/WebhookEndpoints/PostApiV1WebhookEndpointsByIdTestRequest.cs` |
| `ApiV1WebhookEndpointsTestRequest` | `src/Deliverd/Models/ApiV1WebhookEndpointsTestRequest.cs` |
| `ApiV1WebhookEndpointsTestResponse` | `src/Deliverd/Models/ApiV1WebhookEndpointsTestResponse.cs` |
| `PostApiV1WebhookEndpointsByIdTestError` | `src/Deliverd/Errors/PostApiV1WebhookEndpointsByIdTestError.cs` |
| `ApiV1WebhookEndpointsTest400Error1` | `src/Deliverd/Models/ApiV1WebhookEndpointsTest400Error1.cs` |
| `ApiV1WebhookEndpointsTest403Error1` | `src/Deliverd/Models/ApiV1WebhookEndpointsTest403Error1.cs` |
| `ApiV1WebhookEndpointsTest404Error1` | `src/Deliverd/Models/ApiV1WebhookEndpointsTest404Error1.cs` |

