<!-- Generated file — do not edit; regenerated with the SDK. -->

# ObjectRevisions — operations

Accessor: `client.ObjectRevisions` · Source: `src/Cosmic/Api/ObjectRevisions.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateObjectRevision

- **Auth**: `options.WriteKey`
- **Signature**: `CreateObjectRevision(CreateObjectRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `ObjectId`, `Body`
- **Returns**: `RevisionResponse`
- **Error**: `ApiException<CreateObjectRevisionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateObjectRevisionRequest` | `src/Cosmic/Requests/ObjectRevisions/CreateObjectRevisionRequest.cs` |
| `RevisionCreate` | `src/Cosmic/Models/RevisionCreate.cs` |
| `RevisionResponse` | `src/Cosmic/Models/RevisionResponse.cs` |
| `CreateObjectRevisionError` | `src/Cosmic/Errors/CreateObjectRevisionError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### GetObjectRevision

- **Auth**: `options.ReadKey`
- **Signature**: `GetObjectRevision(GetObjectRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `ObjectId`, `RevisionId`
- **Query params (wire ← C#)**: `read_key` ← `ReadKey`, `preview_token` ← `PreviewToken`, `props` ← `Props`, `useCache` ← `UseCache`, `pretty` ← `Pretty`
- **Returns**: `RevisionResponse`
- **Error**: `ApiException<GetObjectRevisionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetObjectRevisionRequest` | `src/Cosmic/Requests/ObjectRevisions/GetObjectRevisionRequest.cs` |
| `RevisionResponse` | `src/Cosmic/Models/RevisionResponse.cs` |
| `GetObjectRevisionError` | `src/Cosmic/Errors/GetObjectRevisionError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### ListObjectRevisions

- **Auth**: `options.ReadKey`
- **Signature**: `ListObjectRevisions(ListObjectRevisionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Slug`, `ObjectId`
- **Query params (wire ← C#)**: `read_key` ← `ReadKey`, `preview_token` ← `PreviewToken`, `props` ← `Props`, `sort` ← `Sort`, `limit` ← `Limit`, `skip` ← `Skip`, `useCache` ← `UseCache`, `pretty` ← `Pretty`
- **Returns**: `RevisionListResponse`
- **Error**: `ApiException<ListObjectRevisionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 402, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListObjectRevisionsRequest` | `src/Cosmic/Requests/ObjectRevisions/ListObjectRevisionsRequest.cs` |
| `SortCosmicRestApiV3ObjectRevisionsApi` | `src/Cosmic/Models/Enums/SortCosmicRestApiV3ObjectRevisionsApi.cs` |
| `RevisionListResponse` | `src/Cosmic/Models/RevisionListResponse.cs` |
| `ListObjectRevisionsError` | `src/Cosmic/Errors/ListObjectRevisionsError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

