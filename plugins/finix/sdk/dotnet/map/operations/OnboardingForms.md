<!-- Generated file — do not edit; regenerated with the SDK. -->

# OnboardingForms — operations

Accessor: `client.OnboardingForms` · Source: `src/FinixApiReference/Api/OnboardingForms.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateOnboardingForm

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateOnboardingForm(CreateOnboardingFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `OnboardingForm`
- **Error**: `ApiException<CreateOnboardingFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOnboardingFormRequest` | `src/FinixApiReference/Requests/OnboardingForms/CreateOnboardingFormRequest.cs` |
| `OnboardingFormsRequest` | `src/FinixApiReference/Models/AnyOf/OnboardingFormsRequest.cs` |
| `OnboardingForm` | `src/FinixApiReference/Models/OnboardingForm.cs` |
| `CreateOnboardingFormError` | `src/FinixApiReference/Errors/CreateOnboardingFormError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### CreateOnboardingFormLink

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateOnboardingFormLink(CreateOnboardingFormLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OnboardingFormId`, `Body`
- **Returns**: `OnboardingLink`
- **Error**: `ApiException<CreateOnboardingFormLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOnboardingFormLinkRequest` | `src/FinixApiReference/Requests/OnboardingForms/CreateOnboardingFormLinkRequest.cs` |
| `OnboardingLinkDetails` | `src/FinixApiReference/Models/OnboardingLinkDetails.cs` |
| `OnboardingLink` | `src/FinixApiReference/Models/OnboardingLink.cs` |
| `CreateOnboardingFormLinkError` | `src/FinixApiReference/Errors/CreateOnboardingFormLinkError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### GetOnboardingForm

- **Auth**: `options.BasicAuth`
- **Signature**: `GetOnboardingForm(GetOnboardingFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OnboardingFormId`
- **Returns**: `OnboardingForm`
- **Error**: `ApiException<GetOnboardingFormError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOnboardingFormRequest` | `src/FinixApiReference/Requests/OnboardingForms/GetOnboardingFormRequest.cs` |
| `OnboardingForm` | `src/FinixApiReference/Models/OnboardingForm.cs` |
| `GetOnboardingFormError` | `src/FinixApiReference/Errors/GetOnboardingFormError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

