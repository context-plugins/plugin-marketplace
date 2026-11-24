<!-- Generated file — do not edit; regenerated with the SDK. -->

# Knowledge — operations

Accessor: `client.Knowledge` · Source: `src/Deliverd/Api/Knowledge.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiV1Knowledge

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Knowledge(GetApiV1KnowledgeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `kind` ← `Kind`, `status` ← `Status`, `workspaceId` ← `WorkspaceId`, `flowId` ← `FlowId`, `limit` ← `Limit`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1KnowledgeRequest` | `src/Deliverd/Requests/Knowledge/GetApiV1KnowledgeRequest.cs` |
| `KindDeliverdDevKnowledgeApi` | `src/Deliverd/Models/Enums/KindDeliverdDevKnowledgeApi.cs` |
| `StatusDeliverdDevKnowledgeApi` | `src/Deliverd/Models/Enums/StatusDeliverdDevKnowledgeApi.cs` |

### GetApiV1KnowledgeAgentsMd

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1KnowledgeAgentsMd(GetApiV1KnowledgeAgentsMdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `workspaceId` ← `WorkspaceId`
- **Returns**: `string`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1KnowledgeAgentsMdRequest` | `src/Deliverd/Requests/Knowledge/GetApiV1KnowledgeAgentsMdRequest.cs` |

### GetApiV1KnowledgeById

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1KnowledgeById(GetApiV1KnowledgeByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<GetApiV1KnowledgeByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiV1KnowledgeByIdRequest` | `src/Deliverd/Requests/Knowledge/GetApiV1KnowledgeByIdRequest.cs` |
| `GetApiV1KnowledgeByIdError` | `src/Deliverd/Errors/GetApiV1KnowledgeByIdError.cs` |

### GetApiV1KnowledgeExport

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1KnowledgeExport(GetApiV1KnowledgeExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `format` ← `Format`, `status` ← `Status`, `workspaceId` ← `WorkspaceId`
- **Returns**: `string`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1KnowledgeExportRequest` | `src/Deliverd/Requests/Knowledge/GetApiV1KnowledgeExportRequest.cs` |
| `FormatDeliverdDevKnowledgeApi` | `src/Deliverd/Models/Enums/FormatDeliverdDevKnowledgeApi.cs` |
| `StatusDeliverdDevKnowledgeApi` | `src/Deliverd/Models/Enums/StatusDeliverdDevKnowledgeApi.cs` |

### PatchApiV1KnowledgeById

- **Auth**: `options.BearerAuth`
- **Signature**: `PatchApiV1KnowledgeById(PatchApiV1KnowledgeByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PatchApiV1KnowledgeByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PatchApiV1KnowledgeByIdRequest` | `src/Deliverd/Requests/Knowledge/PatchApiV1KnowledgeByIdRequest.cs` |
| `ApiV1KnowledgeRequest1` | `src/Deliverd/Models/ApiV1KnowledgeRequest1.cs` |
| `PatchApiV1KnowledgeByIdError` | `src/Deliverd/Errors/PatchApiV1KnowledgeByIdError.cs` |

### PostApiV1Knowledge

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Knowledge(PostApiV1KnowledgeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1KnowledgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1KnowledgeRequest` | `src/Deliverd/Requests/Knowledge/PostApiV1KnowledgeRequest.cs` |
| `ApiV1KnowledgeRequest` | `src/Deliverd/Models/ApiV1KnowledgeRequest.cs` |
| `PostApiV1KnowledgeError` | `src/Deliverd/Errors/PostApiV1KnowledgeError.cs` |

### PostApiV1KnowledgeImport

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1KnowledgeImport(PostApiV1KnowledgeImportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyDictionary<string, object>`
- **Error**: `ApiException<PostApiV1KnowledgeImportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1KnowledgeImportRequest` | `src/Deliverd/Requests/Knowledge/PostApiV1KnowledgeImportRequest.cs` |
| `ApiV1KnowledgeImportRequest` | `src/Deliverd/Models/ApiV1KnowledgeImportRequest.cs` |
| `PostApiV1KnowledgeImportError` | `src/Deliverd/Errors/PostApiV1KnowledgeImportError.cs` |

