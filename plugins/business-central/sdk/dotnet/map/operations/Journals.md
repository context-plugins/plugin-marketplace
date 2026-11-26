<!-- Generated file — do not edit; regenerated with the SDK. -->

# Journals — operations

Accessor: `client.Journals` · Source: `src/Dynamics365BusinessCentral/Api/Journals.cs` · 3 operations

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
| `CreateJournalRequest` | `src/Dynamics365BusinessCentral/Requests/Journals/CreateJournalRequest.cs` |
| `JournalCreate` | `src/Dynamics365BusinessCentral/Models/JournalCreate.cs` |
| `Journal` | `src/Dynamics365BusinessCentral/Models/Journal.cs` |
| `CreateJournalError` | `src/Dynamics365BusinessCentral/Errors/CreateJournalError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

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
| `ListJournalLinesRequest` | `src/Dynamics365BusinessCentral/Requests/Journals/ListJournalLinesRequest.cs` |
| `CompaniesApiJournalsApiJournalLinesResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiJournalsApiJournalLinesResponse.cs` |
| `ListJournalLinesError` | `src/Dynamics365BusinessCentral/Errors/ListJournalLinesError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

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
| `ListJournalsRequest` | `src/Dynamics365BusinessCentral/Requests/Journals/ListJournalsRequest.cs` |
| `CompaniesApiJournalsResponse` | `src/Dynamics365BusinessCentral/Models/CompaniesApiJournalsResponse.cs` |
| `ListJournalsError` | `src/Dynamics365BusinessCentral/Errors/ListJournalsError.cs` |
| `ErrorResponseModel` | `src/Dynamics365BusinessCentral/Models/ErrorResponseModel.cs` |

