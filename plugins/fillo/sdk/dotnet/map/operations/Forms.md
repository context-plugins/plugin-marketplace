<!-- Generated file — do not edit; regenerated with the SDK. -->

# Forms — operations

Accessor: `client.Forms` · Source: `src/Fillo/Api/Forms.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DiscardFormDraft

- **Auth**: `options.BearerAuth`
- **Signature**: `DiscardFormDraft(DiscardFormDraftRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Returns**: `ApiV1ManageFormsDiscardResponse`
- **Error**: `ApiException<DiscardFormDraftError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DiscardFormDraftRequest` | `src/Fillo/Requests/Forms/DiscardFormDraftRequest.cs` |
| `ApiV1ManageFormsDiscardResponse` | `src/Fillo/Models/ApiV1ManageFormsDiscardResponse.cs` |
| `DiscardFormDraftError` | `src/Fillo/Errors/DiscardFormDraftError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### DuplicateForm

- **Auth**: `options.BearerAuth`
- **Signature**: `DuplicateForm(DuplicateFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Returns**: `ApiV1ManageFormsDuplicateResponse`
- **Error**: `ApiException<DuplicateFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 410, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DuplicateFormRequest` | `src/Fillo/Requests/Forms/DuplicateFormRequest.cs` |
| `ApiV1ManageFormsDuplicateRequest` | `src/Fillo/Models/ApiV1ManageFormsDuplicateRequest.cs` |
| `ApiV1ManageFormsDuplicateResponse` | `src/Fillo/Models/ApiV1ManageFormsDuplicateResponse.cs` |
| `DuplicateFormError` | `src/Fillo/Errors/DuplicateFormError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### GetForm

- **Auth**: `options.BearerAuth`
- **Signature**: `GetForm(GetFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Query params (wire ← C#)**: `include` ← `Include`
- **Returns**: `FormDetail`
- **Error**: `ApiException<GetFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFormRequest` | `src/Fillo/Requests/Forms/GetFormRequest.cs` |
| `Include` | `src/Fillo/Models/Enums/Include.cs` |
| `FormDetail` | `src/Fillo/Models/FormDetail.cs` |
| `GetFormError` | `src/Fillo/Errors/GetFormError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListFormVersions

- **Auth**: `options.BearerAuth`
- **Signature**: `ListFormVersions(ListFormVersionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Returns**: `ApiV1ManageFormsVersionsResponse`
- **Error**: `ApiException<ListFormVersionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFormVersionsRequest` | `src/Fillo/Requests/Forms/ListFormVersionsRequest.cs` |
| `ApiV1ManageFormsVersionsResponse` | `src/Fillo/Models/ApiV1ManageFormsVersionsResponse.cs` |
| `ListFormVersionsError` | `src/Fillo/Errors/ListFormVersionsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### ListForms

- **Auth**: `options.BearerAuth`
- **Signature**: `ListForms(ListFormsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `limit` ← `Limit`
- **Returns**: `ApiV1ManageFormsResponse`
- **Error**: `ApiException<ListFormsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFormsRequest` | `src/Fillo/Requests/Forms/ListFormsRequest.cs` |
| `ApiV1ManageFormsResponse` | `src/Fillo/Models/ApiV1ManageFormsResponse.cs` |
| `ListFormsError` | `src/Fillo/Errors/ListFormsError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### RenameForm

- **Auth**: `options.BearerAuth`
- **Signature**: `RenameForm(RenameFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`, `Body`
- **Returns**: `ApiV1ManageFormsResponse1`
- **Error**: `ApiException<RenameFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RenameFormRequest` | `src/Fillo/Requests/Forms/RenameFormRequest.cs` |
| `ApiV1ManageFormsRequest` | `src/Fillo/Models/ApiV1ManageFormsRequest.cs` |
| `ApiV1ManageFormsResponse1` | `src/Fillo/Models/ApiV1ManageFormsResponse1.cs` |
| `RenameFormError` | `src/Fillo/Errors/RenameFormError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

### UnpublishForm

- **Auth**: `options.BearerAuth`
- **Signature**: `UnpublishForm(UnpublishFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Form`
- **Returns**: `ApiV1ManageFormsUnpublishResponse`
- **Error**: `ApiException<UnpublishFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 413, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnpublishFormRequest` | `src/Fillo/Requests/Forms/UnpublishFormRequest.cs` |
| `ApiV1ManageFormsUnpublishResponse` | `src/Fillo/Models/ApiV1ManageFormsUnpublishResponse.cs` |
| `UnpublishFormError` | `src/Fillo/Errors/UnpublishFormError.cs` |
| `Error` | `src/Fillo/Models/Error.cs` |

