<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.Documents` · Source: `src/Shortcut/Api/Documents.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDoc

- **Auth**: `options.ApiToken`
- **Signature**: `CreateDoc(CreateDocRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DocSlim`
- **Error**: `ApiException<CreateDocError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDocRequest` | `src/Shortcut/Requests/Documents/CreateDocRequest.cs` |
| `CreateDoc` | `src/Shortcut/Models/CreateDoc.cs` |
| `DocSlim` | `src/Shortcut/Models/DocSlim.cs` |
| `CreateDocError` | `src/Shortcut/Errors/CreateDocError.cs` |
| `DisabledFeatureError` | `src/Shortcut/Models/DisabledFeatureError.cs` |

### DeleteDoc

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteDoc(DeleteDocRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocPublicId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDocError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDocRequest` | `src/Shortcut/Requests/Documents/DeleteDocRequest.cs` |
| `GetDoc` | `src/Shortcut/Models/GetDoc.cs` |
| `DeleteDocError` | `src/Shortcut/Errors/DeleteDocError.cs` |
| `DisabledFeatureError` | `src/Shortcut/Models/DisabledFeatureError.cs` |

### GetDoc

- **Auth**: `options.ApiToken`
- **Signature**: `GetDoc(GetDocRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocPublicId`
- **Query params (wire ← C#)**: `content_format` ← `ContentFormat`
- **Returns**: `Doc`
- **Error**: `ApiException<GetDocError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDocRequest` | `src/Shortcut/Requests/Documents/GetDocRequest.cs` |
| `ContentFormat3` | `src/Shortcut/Models/Enums/ContentFormat3.cs` |
| `Doc` | `src/Shortcut/Models/Doc.cs` |
| `GetDocError` | `src/Shortcut/Errors/GetDocError.cs` |
| `DisabledFeatureError` | `src/Shortcut/Models/DisabledFeatureError.cs` |

### LinkDocumentToEpic

- **Auth**: `options.ApiToken`
- **Signature**: `LinkDocumentToEpic(LinkDocumentToEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocPublicId`, `EpicPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<LinkDocumentToEpicError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404] · `TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value)` [403] · `TryGetUnprocessableError([NotNullWhen(true)] out UnprocessableError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LinkDocumentToEpicRequest` | `src/Shortcut/Requests/Documents/LinkDocumentToEpicRequest.cs` |
| `LinkDocumentToEpicError` | `src/Shortcut/Errors/LinkDocumentToEpicError.cs` |
| `DisabledFeatureError` | `src/Shortcut/Models/DisabledFeatureError.cs` |
| `UnprocessableError` | `src/Shortcut/Models/UnprocessableError.cs` |

### ListDocs

- **Auth**: `options.ApiToken`
- **Signature**: `ListDocs(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<DocSlim>`
- **Error**: `ApiException<ListDocsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DocSlim` | `src/Shortcut/Models/DocSlim.cs` |
| `ListDocsError` | `src/Shortcut/Errors/ListDocsError.cs` |
| `DisabledFeatureError` | `src/Shortcut/Models/DisabledFeatureError.cs` |

### ListDocumentEpics

- **Auth**: `options.ApiToken`
- **Signature**: `ListDocumentEpics(ListDocumentEpicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocPublicId`
- **Returns**: `IReadOnlyList<EpicSlim>`
- **Error**: `ApiException<ListDocumentEpicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDocumentEpicsRequest` | `src/Shortcut/Requests/Documents/ListDocumentEpicsRequest.cs` |
| `EpicSlim` | `src/Shortcut/Models/EpicSlim.cs` |
| `ListDocumentEpicsError` | `src/Shortcut/Errors/ListDocumentEpicsError.cs` |
| `DisabledFeatureError` | `src/Shortcut/Models/DisabledFeatureError.cs` |

### UnlinkDocumentFromEpic

- **Auth**: `options.ApiToken`
- **Signature**: `UnlinkDocumentFromEpic(UnlinkDocumentFromEpicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocPublicId`, `EpicPublicId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UnlinkDocumentFromEpicError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnlinkDocumentFromEpicRequest` | `src/Shortcut/Requests/Documents/UnlinkDocumentFromEpicRequest.cs` |
| `UnlinkDocumentFromEpicError` | `src/Shortcut/Errors/UnlinkDocumentFromEpicError.cs` |
| `DisabledFeatureError` | `src/Shortcut/Models/DisabledFeatureError.cs` |

### UpdateDoc

- **Auth**: `options.ApiToken`
- **Signature**: `UpdateDoc(UpdateDocRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `DocPublicId`, `Body`
- **Returns**: `Doc`
- **Error**: `ApiException<UpdateDocError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 422] · `TryGetDisabledFeatureError([NotNullWhen(true)] out DisabledFeatureError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDocRequest` | `src/Shortcut/Requests/Documents/UpdateDocRequest.cs` |
| `UpdateDoc` | `src/Shortcut/Models/UpdateDoc.cs` |
| `Doc` | `src/Shortcut/Models/Doc.cs` |
| `UpdateDocError` | `src/Shortcut/Errors/UpdateDocError.cs` |
| `DisabledFeatureError` | `src/Shortcut/Models/DisabledFeatureError.cs` |

