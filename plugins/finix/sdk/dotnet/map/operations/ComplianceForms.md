<!-- Generated file — do not edit; regenerated with the SDK. -->

# ComplianceForms — operations

Accessor: `client.ComplianceForms` · Source: `src/FinixApiReference/Api/ComplianceForms.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetComplianceForm

- **Auth**: `options.BasicAuth`
- **Signature**: `GetComplianceForm(GetComplianceFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ComplianceFormId`
- **Returns**: `ComplianceForm`
- **Error**: `ApiException<GetComplianceFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetComplianceFormRequest` | `src/FinixApiReference/Requests/ComplianceForms/GetComplianceFormRequest.cs` |
| `ComplianceForm` | `src/FinixApiReference/Models/ComplianceForm.cs` |
| `GetComplianceFormError` | `src/FinixApiReference/Errors/GetComplianceFormError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListComplianceForms

- **Auth**: `options.BasicAuth`
- **Signature**: `ListComplianceForms(ListComplianceFormsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `linked_to` ← `LinkedTo`, `state` ← `State`, `after_cursor` ← `AfterCursor`, `before_cursor` ← `BeforeCursor`, `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListComplianceForms`
- **Error**: `ApiException<ListComplianceFormsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListComplianceFormsRequest` | `src/FinixApiReference/Requests/ComplianceForms/ListComplianceFormsRequest.cs` |
| `State26` | `src/FinixApiReference/Models/Enums/State26.cs` |
| `ListComplianceForms` | `src/FinixApiReference/Models/ListComplianceForms.cs` |
| `ListComplianceFormsError` | `src/FinixApiReference/Errors/ListComplianceFormsError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateComplianceForm

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateComplianceForm(UpdateComplianceFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ComplianceFormId`, `Body`
- **Returns**: `ComplianceForm`
- **Error**: `ApiException<UpdateComplianceFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateComplianceFormRequest` | `src/FinixApiReference/Requests/ComplianceForms/UpdateComplianceFormRequest.cs` |
| `CompleteComplianceForm` | `src/FinixApiReference/Models/CompleteComplianceForm.cs` |
| `ComplianceForm` | `src/FinixApiReference/Models/ComplianceForm.cs` |
| `UpdateComplianceFormError` | `src/FinixApiReference/Errors/UpdateComplianceFormError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

