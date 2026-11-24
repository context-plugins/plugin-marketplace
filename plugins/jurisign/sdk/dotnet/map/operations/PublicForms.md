<!-- Generated file — do not edit; regenerated with the SDK. -->

# PublicForms — operations

Accessor: `client.PublicForms` · Source: `src/JuriSign/Api/PublicForms.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePublicForm

- **Auth**: `options.BearerAuth`
- **Signature**: `CreatePublicForm(CreatePublicFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PublicFormsResponse1`
- **Error**: `ApiException<CreatePublicFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePublicFormRequest` | `src/JuriSign/Requests/PublicForms/CreatePublicFormRequest.cs` |
| `PublicFormsRequest` | `src/JuriSign/Models/PublicFormsRequest.cs` |
| `PublicFormsResponse1` | `src/JuriSign/Models/PublicFormsResponse1.cs` |
| `CreatePublicFormError` | `src/JuriSign/Errors/CreatePublicFormError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `ValidationError1` | `src/JuriSign/Models/ValidationError1.cs` |

### DeletePublicForm

- **Auth**: `options.BearerAuth`
- **Signature**: `DeletePublicForm(DeletePublicFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeletePublicFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePublicFormRequest` | `src/JuriSign/Requests/PublicForms/DeletePublicFormRequest.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `DeletePublicFormError` | `src/JuriSign/Errors/DeletePublicFormError.cs` |

### GetPublicForm

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPublicForm(GetPublicFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PublicFormsResponse1`
- **Error**: `ApiException<GetPublicFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPublicFormRequest` | `src/JuriSign/Requests/PublicForms/GetPublicFormRequest.cs` |
| `PublicFormsResponse1` | `src/JuriSign/Models/PublicFormsResponse1.cs` |
| `GetPublicFormError` | `src/JuriSign/Errors/GetPublicFormError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### ListPublicForms

- **Auth**: `options.BearerAuth`
- **Signature**: `ListPublicForms(ListPublicFormsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `per_page` ← `PerPage`
- **Returns**: `PublicFormsResponse`
- **Error**: `ApiException<ListPublicFormsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPublicFormsRequest` | `src/JuriSign/Requests/PublicForms/ListPublicFormsRequest.cs` |
| `PublicFormsResponse` | `src/JuriSign/Models/PublicFormsResponse.cs` |
| `ListPublicFormsError` | `src/JuriSign/Errors/ListPublicFormsError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### RotatePublicFormToken

- **Auth**: `options.BearerAuth`
- **Signature**: `RotatePublicFormToken(RotatePublicFormTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PublicFormsRotateTokenResponse`
- **Error**: `ApiException<RotatePublicFormTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RotatePublicFormTokenRequest` | `src/JuriSign/Requests/PublicForms/RotatePublicFormTokenRequest.cs` |
| `PublicFormsRotateTokenResponse` | `src/JuriSign/Models/PublicFormsRotateTokenResponse.cs` |
| `RotatePublicFormTokenError` | `src/JuriSign/Errors/RotatePublicFormTokenError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

### UpdatePublicForm

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdatePublicForm(UpdatePublicFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `PublicFormsResponse1`
- **Error**: `ApiException<UpdatePublicFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePublicFormRequest` | `src/JuriSign/Requests/PublicForms/UpdatePublicFormRequest.cs` |
| `PublicFormsRequest1` | `src/JuriSign/Models/PublicFormsRequest1.cs` |
| `PublicFormsResponse1` | `src/JuriSign/Models/PublicFormsResponse1.cs` |
| `UpdatePublicFormError` | `src/JuriSign/Errors/UpdatePublicFormError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |

