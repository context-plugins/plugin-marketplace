<!-- Generated file — do not edit; regenerated with the SDK. -->

# Atoms — operations

Accessor: `client.Atoms` · Source: `src/Boomi/Api/Atoms.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteAtom

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteAtom(DeleteAtomRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAtomError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAtomRequest` | `src/Boomi/Requests/Atoms/DeleteAtomRequest.cs` |
| `DeleteAtomError` | `src/Boomi/Errors/DeleteAtomError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### GetAtom

- **Auth**: `options.BasicAuth`
- **Signature**: `GetAtom(GetAtomRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Atom`
- **Error**: `ApiException<GetAtomError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAtomRequest` | `src/Boomi/Requests/Atoms/GetAtomRequest.cs` |
| `Atom` | `src/Boomi/Models/Atom.cs` |
| `GetAtomError` | `src/Boomi/Errors/GetAtomError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### QueryAtoms

- **Auth**: `options.BasicAuth`
- **Signature**: `QueryAtoms(QueryAtomsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AtomQueryResult`
- **Error**: `ApiException<QueryAtomsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryAtomsRequest` | `src/Boomi/Requests/Atoms/QueryAtomsRequest.cs` |
| `QueryRequest` | `src/Boomi/Models/QueryRequest.cs` |
| `AtomQueryResult` | `src/Boomi/Models/AtomQueryResult.cs` |
| `QueryAtomsError` | `src/Boomi/Errors/QueryAtomsError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### UpdateAtom

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateAtom(UpdateAtomRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Atom`
- **Error**: `ApiException<UpdateAtomError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateAtomRequest` | `src/Boomi/Requests/Atoms/UpdateAtomRequest.cs` |
| `AtomInput` | `src/Boomi/Models/AtomInput.cs` |
| `Atom` | `src/Boomi/Models/Atom.cs` |
| `UpdateAtomError` | `src/Boomi/Errors/UpdateAtomError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

