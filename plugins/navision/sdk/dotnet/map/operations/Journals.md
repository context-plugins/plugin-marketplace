<!-- Generated file — do not edit; regenerated with the SDK. -->

# Journals — operations

Accessor: `client.Journals` · Source: `src/MicrosoftDynamicsNav/Api/Journals.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateJournal

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `CreateJournal(CreateJournalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `Body`
- **Returns**: `Journal`
- **Error**: `ApiException<CreateJournalError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateJournalRequest` | `src/MicrosoftDynamicsNav/Requests/Journals/CreateJournalRequest.cs` |
| `JournalCreate` | `src/MicrosoftDynamicsNav/Models/JournalCreate.cs` |
| `Journal` | `src/MicrosoftDynamicsNav/Models/Journal.cs` |
| `CreateJournalError` | `src/MicrosoftDynamicsNav/Errors/CreateJournalError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### ListJournalLines

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListJournalLines(ListJournalLinesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`, `JournalId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiJournalsApiJournalLinesResponse`
- **Error**: `ApiException<ListJournalLinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListJournalLinesRequest` | `src/MicrosoftDynamicsNav/Requests/Journals/ListJournalLinesRequest.cs` |
| `CompaniesApiJournalsApiJournalLinesResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiJournalsApiJournalLinesResponse.cs` |
| `ListJournalLinesError` | `src/MicrosoftDynamicsNav/Errors/ListJournalLinesError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

### ListJournals

- **Auth**: `options.Oauth2AuthorizationCode` OR `options.Oauth2ClientCredentials` OR `options.BearerAuth`
- **Signature**: `ListJournals(ListJournalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CompanyId`
- **Query params (wire ← C#)**: `$top` ← `Top`, `$skip` ← `Skip`, `$filter` ← `Filter`, `$select` ← `Select`
- **Returns**: `CompaniesApiJournalsResponse`
- **Error**: `ApiException<ListJournalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListJournalsRequest` | `src/MicrosoftDynamicsNav/Requests/Journals/ListJournalsRequest.cs` |
| `CompaniesApiJournalsResponse` | `src/MicrosoftDynamicsNav/Models/CompaniesApiJournalsResponse.cs` |
| `ListJournalsError` | `src/MicrosoftDynamicsNav/Errors/ListJournalsError.cs` |
| `ErrorResponseModel` | `src/MicrosoftDynamicsNav/Models/ErrorResponseModel.cs` |

