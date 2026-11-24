<!-- Generated file — do not edit; regenerated with the SDK. -->

# People — operations

Accessor: `client.people` · Source: `surfe/apis/people.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.people.find_people_by_email

- **Route**: `POST /people/find-by-email`
- **Auth**: `bearer_auth`
- **Signature**: `def find_people_by_email(body: PeopleFindByEmailRequest | PeopleFindByEmailRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PeopleFindByEmailResponse`
- **Returns (raw)**: `ApiResult[PeopleFindByEmailResponse, FindPeopleByEmailErrorBody]`
- **Error**: `FindPeopleByEmailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PeopleFindByEmailRequest` | `surfe/models/people_find_by_email_request.py` |
| `PeopleFindByEmailRequestDict` | `surfe/models/people_find_by_email_request.py` |
| `PeopleFindByEmailResponse` | `surfe/models/people_find_by_email_response.py` |
| `FindPeopleByEmailErrorBody` | `surfe/errors/find_people_by_email_error.py` |
| `Error` | `surfe/models/error.py` |

### client.people.get_people_enrichment

- **Route**: `GET /people/enrich/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_people_enrichment(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PeopleEnrichmentResult`
- **Returns (raw)**: `ApiResult[PeopleEnrichmentResult, GetPeopleEnrichmentErrorBody]`
- **Error**: `GetPeopleEnrichmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PeopleEnrichmentResult` | `surfe/models/people_enrichment_result.py` |
| `GetPeopleEnrichmentErrorBody` | `surfe/errors/get_people_enrichment_error.py` |
| `Error` | `surfe/models/error.py` |

### client.people.search_people

- **Route**: `POST /people/search`
- **Auth**: `bearer_auth`
- **Signature**: `def search_people(body: PeopleSearchRequest | PeopleSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PeopleSearchResponse`
- **Returns (raw)**: `ApiResult[PeopleSearchResponse, SearchPeopleErrorBody]`
- **Error**: `SearchPeopleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 402, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PeopleSearchRequest` | `surfe/models/people_search_request.py` |
| `PeopleSearchRequestDict` | `surfe/models/people_search_request.py` |
| `PeopleSearchResponse` | `surfe/models/people_search_response.py` |
| `SearchPeopleErrorBody` | `surfe/errors/search_people_error.py` |
| `Error` | `surfe/models/error.py` |

### client.people.start_people_enrichment

- **Route**: `POST /people/enrich`
- **Auth**: `bearer_auth`
- **Signature**: `def start_people_enrichment(body: PeopleEnrichmentRequest | PeopleEnrichmentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EnrichmentJobAccepted`
- **Returns (raw)**: `ApiResult[EnrichmentJobAccepted, StartPeopleEnrichmentErrorBody]`
- **Error**: `StartPeopleEnrichmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 402, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PeopleEnrichmentRequest` | `surfe/models/people_enrichment_request.py` |
| `PeopleEnrichmentRequestDict` | `surfe/models/people_enrichment_request.py` |
| `EnrichmentJobAccepted` | `surfe/models/enrichment_job_accepted.py` |
| `StartPeopleEnrichmentErrorBody` | `surfe/errors/start_people_enrichment_error.py` |
| `Error` | `surfe/models/error.py` |

