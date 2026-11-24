<!-- Generated file — do not edit; regenerated with the SDK. -->

# Journals — operations

Accessor: `client.journals` · Source: `src/resources/journals.ts` · 3 operations · Request and error types: namespace `Journals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `microsoft-dynamics-nav`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createJournal

- **Signature**: `createJournal(request: Journals.CreateJournalRequest, options?: RequestOptions): ApiPromise<Journal, Journals.CreateJournalError>`
- **Wire**: `POST /companies({company_id})/journals`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Journal`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Journals.CreateJournalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Journals.CreateJournalRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `JournalCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JournalCreate` | `journalCreateSchema` | `src/models/journal-create.ts` |
| `Journal` | `journalSchema` | `src/models/journal.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listJournalLines

- **Signature**: `listJournalLines(request: Journals.ListJournalLinesRequest, options?: RequestOptions): ApiPromise<CompaniesApiJournalsApiJournalLinesResponse, Journals.ListJournalLinesError>`
- **Wire**: `GET /companies({company_id})/journals({journal_id})/journalLines`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiJournalsApiJournalLinesResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Journals.ListJournalLinesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Journals.ListJournalLinesRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `journalId` | `path` | `journal_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiJournalsApiJournalLinesResponse` | `companiesApiJournalsApiJournalLinesResponseSchema` | `src/models/companies-api-journals-api-journal-lines-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listJournals

- **Signature**: `listJournals(request: Journals.ListJournalsRequest, options?: RequestOptions): ApiPromise<CompaniesApiJournalsResponse, Journals.ListJournalsError>`
- **Wire**: `GET /companies({company_id})/journals`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiJournalsResponse`
- **Error**: `MicrosoftDynamicsNavError` with `kind: "api"`, an instance of `Journals.ListJournalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Journals.ListJournalsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `select` | `query` | `$select` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiJournalsResponse` | `companiesApiJournalsResponseSchema` | `src/models/companies-api-journals-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

