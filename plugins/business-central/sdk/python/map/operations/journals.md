<!-- Generated file — do not edit; regenerated with the SDK. -->

# Journals — operations

Accessor: `client.journals` · Source: `dynamics_365_business_central/apis/journals.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.journals.create_journal

- **Route**: `POST /companies({company_id})/journals`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_journal(company_id: UUID, body: JournalCreate | JournalCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `body`
- **Params**: `company_id` — path · `body` — JSON body
- **Returns (parsed)**: `Journal`
- **Returns (raw)**: `ApiResult[Journal, CreateJournalErrorBody]`
- **Error**: `CreateJournalErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JournalCreate` | `dynamics_365_business_central/models/journal_create.py` |
| `JournalCreateDict` | `dynamics_365_business_central/models/journal_create.py` |
| `Journal` | `dynamics_365_business_central/models/journal.py` |
| `CreateJournalErrorBody` | `dynamics_365_business_central/errors/create_journal_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.journals.list_journal_lines

- **Route**: `GET /companies({company_id})/journals({journal_id})/journalLines`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_journal_lines(company_id: UUID, journal_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `journal_id`
- **Params**: `company_id` — path · `journal_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiJournalsApiJournalLinesResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiJournalsApiJournalLinesResponse, ListJournalLinesErrorBody]`
- **Error**: `ListJournalLinesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiJournalsApiJournalLinesResponse` | `dynamics_365_business_central/models/companies_api_journals_api_journal_lines_response.py` |
| `ListJournalLinesErrorBody` | `dynamics_365_business_central/errors/list_journal_lines_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.journals.list_journals

- **Route**: `GET /companies({company_id})/journals`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_journals(company_id: UUID, *, top: int | None = None, skip: int | None = None, filter_: str | None = None, select: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path · `top` — query `$top` · `skip` — query `$skip` · `filter_` — query `$filter` · `select` — query `$select`
- **Returns (parsed)**: `CompaniesApiJournalsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiJournalsResponse, ListJournalsErrorBody]`
- **Error**: `ListJournalsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiJournalsResponse` | `dynamics_365_business_central/models/companies_api_journals_response.py` |
| `ListJournalsErrorBody` | `dynamics_365_business_central/errors/list_journals_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

