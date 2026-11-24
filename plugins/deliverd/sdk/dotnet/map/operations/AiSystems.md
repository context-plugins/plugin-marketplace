<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiSystems — operations

Accessor: `client.AiSystems` · Source: `src/Deliverd/Api/AiSystems.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1AiSystems

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1AiSystems(GetApiV1AiSystemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1AiSystemsRequest` | `src/Deliverd/Requests/AiSystems/GetApiV1AiSystemsRequest.cs` |
| `StatusDeliverdDevAiSystemsApi` | `src/Deliverd/Models/Enums/StatusDeliverdDevAiSystemsApi.cs` |

### GetApiV1AiSystemsById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1AiSystemsById(GetApiV1AiSystemsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1AiSystemsByIdRequest` | `src/Deliverd/Requests/AiSystems/GetApiV1AiSystemsByIdRequest.cs` |

### GetApiV1AiSystemsByIdTransitions

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1AiSystemsByIdTransitions(GetApiV1AiSystemsByIdTransitionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1AiSystemsByIdTransitionsRequest` | `src/Deliverd/Requests/AiSystems/GetApiV1AiSystemsByIdTransitionsRequest.cs` |

### PatchApiV1AiSystemsById

- **Auth**: `options.BearerAuth`
- **Signature**: `PatchApiV1AiSystemsById(PatchApiV1AiSystemsByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PatchApiV1AiSystemsByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PatchApiV1AiSystemsByIdRequest` | `src/Deliverd/Requests/AiSystems/PatchApiV1AiSystemsByIdRequest.cs` |
| `ApiV1AiSystemsRequest1` | `src/Deliverd/Models/ApiV1AiSystemsRequest1.cs` |
| `PatchApiV1AiSystemsByIdError` | `src/Deliverd/Errors/PatchApiV1AiSystemsByIdError.cs` |

### PostApiV1AiSystems

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1AiSystems(PostApiV1AiSystemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1AiSystemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1AiSystemsRequest` | `src/Deliverd/Requests/AiSystems/PostApiV1AiSystemsRequest.cs` |
| `ApiV1AiSystemsRequest` | `src/Deliverd/Models/ApiV1AiSystemsRequest.cs` |
| `PostApiV1AiSystemsError` | `src/Deliverd/Errors/PostApiV1AiSystemsError.cs` |

### PostApiV1AiSystemsByIdModelChange

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1AiSystemsByIdModelChange(PostApiV1AiSystemsByIdModelChangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1AiSystemsByIdModelChangeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1AiSystemsByIdModelChangeRequest` | `src/Deliverd/Requests/AiSystems/PostApiV1AiSystemsByIdModelChangeRequest.cs` |
| `ApiV1AiSystemsModelChangeRequest` | `src/Deliverd/Models/ApiV1AiSystemsModelChangeRequest.cs` |
| `PostApiV1AiSystemsByIdModelChangeError` | `src/Deliverd/Errors/PostApiV1AiSystemsByIdModelChangeError.cs` |

### PostApiV1AiSystemsByIdTransitions

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1AiSystemsByIdTransitions(PostApiV1AiSystemsByIdTransitionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1AiSystemsByIdTransitionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1AiSystemsByIdTransitionsRequest` | `src/Deliverd/Requests/AiSystems/PostApiV1AiSystemsByIdTransitionsRequest.cs` |
| `ApiV1AiSystemsTransitionsRequest` | `src/Deliverd/Models/ApiV1AiSystemsTransitionsRequest.cs` |
| `PostApiV1AiSystemsByIdTransitionsError` | `src/Deliverd/Errors/PostApiV1AiSystemsByIdTransitionsError.cs` |

