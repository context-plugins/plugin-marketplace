<!-- Generated file — do not edit; regenerated with the SDK. -->

# Persons — operations

Accessor: `client.persons` · Source: `audioscrape/apis/persons.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.persons.get_person_v1

- **Route**: `GET /api/persons/{person_slug}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_person_v1(person_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `person_slug`
- **Params**: `person_slug` — path
- **Returns (parsed)**: `PersonDetail`
- **Returns (raw)**: `ApiResult[PersonDetail, GetPersonV1ErrorBody]`
- **Error**: `GetPersonV1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PersonDetail` | `audioscrape/models/person_detail.py` |
| `GetPersonV1ErrorBody` | `audioscrape/errors/get_person_v1_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.persons.search_persons_v1

- **Route**: `GET /api/persons`
- **Auth**: `bearer_auth`
- **Signature**: `def search_persons_v1(*, q: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `limit` — query
- **Returns (parsed)**: `PersonList`
- **Returns (raw)**: `ApiResult[PersonList, SearchPersonsV1ErrorBody]`
- **Error**: `SearchPersonsV1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PersonList` | `audioscrape/models/person_list.py` |
| `SearchPersonsV1ErrorBody` | `audioscrape/errors/search_persons_v1_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

