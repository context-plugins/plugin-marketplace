<!-- Generated file — do not edit; regenerated with the SDK. -->

# Persons — operations

Accessor: `client.persons` · Source: `compabase/apis/persons.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.persons.get_persons_by_person_id_connections

- **Route**: `GET /persons/{personId}/connections`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_persons_by_person_id_connections(person_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `person_id`
- **Params**: `person_id` — path `personId`
- **Returns (parsed)**: `PersonConnectionsResponse`
- **Returns (raw)**: `ApiResult[PersonConnectionsResponse, GetPersonsByPersonIdConnectionsErrorBody]`
- **Error**: `GetPersonsByPersonIdConnectionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PersonConnectionsResponse` | `compabase/models/person_connections_response.py` |
| `GetPersonsByPersonIdConnectionsErrorBody` | `compabase/errors/get_persons_by_person_id_connections_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.persons.get_persons_search

- **Route**: `GET /persons/search`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_persons_search(q: str, *, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`
- **Params**: `q` — query · `limit` — query
- **Returns (parsed)**: `PersonsSearchResponse`
- **Returns (raw)**: `ApiResult[PersonsSearchResponse, GetPersonsSearchErrorBody]`
- **Error**: `GetPersonsSearchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PersonsSearchResponse` | `compabase/models/persons_search_response.py` |
| `GetPersonsSearchErrorBody` | `compabase/errors/get_persons_search_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

