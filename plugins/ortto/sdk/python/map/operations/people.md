<!-- Generated file — do not edit; regenerated with the SDK. -->

# People — operations

Accessor: `client.people` · Source: `ortto/apis/people.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.people.delete_people

- **Route**: `POST /person/delete`
- **Auth**: `api_key_auth`
- **Signature**: `def delete_people(body: PersonDeleteRequest | PersonDeleteRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeletePeopleErrorBody]`
- **Error**: `DeletePeopleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PersonDeleteRequest` | `ortto/models/person_delete_request.py` |
| `PersonDeleteRequestDict` | `ortto/models/person_delete_request.py` |
| `DeletePeopleErrorBody` | `ortto/errors/delete_people_error.py` |
| `Error` | `ortto/models/error.py` |

### client.people.get_people

- **Route**: `POST /person/get`
- **Auth**: `api_key_auth`
- **Signature**: `def get_people(body: PersonGetRequest | PersonGetRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PersonGetResponse`
- **Returns (raw)**: `ApiResult[PersonGetResponse, GetPeopleErrorBody]`
- **Error**: `GetPeopleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PersonGetRequest` | `ortto/models/person_get_request.py` |
| `PersonGetRequestDict` | `ortto/models/person_get_request.py` |
| `PersonGetResponse` | `ortto/models/person_get_response.py` |
| `GetPeopleErrorBody` | `ortto/errors/get_people_error.py` |
| `Error` | `ortto/models/error.py` |

### client.people.get_people_by_ids

- **Route**: `POST /person/get-by-ids`
- **Auth**: `api_key_auth`
- **Signature**: `def get_people_by_ids(body: PersonGetByIdsRequest | PersonGetByIdsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PersonGetResponse`
- **Returns (raw)**: `ApiResult[PersonGetResponse, GetPeopleByIdsErrorBody]`
- **Error**: `GetPeopleByIdsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PersonGetByIdsRequest` | `ortto/models/person_get_by_ids_request.py` |
| `PersonGetByIdsRequestDict` | `ortto/models/person_get_by_ids_request.py` |
| `PersonGetResponse` | `ortto/models/person_get_response.py` |
| `GetPeopleByIdsErrorBody` | `ortto/errors/get_people_by_ids_error.py` |
| `Error` | `ortto/models/error.py` |

### client.people.merge_people

- **Route**: `POST /person/merge`
- **Auth**: `api_key_auth`
- **Signature**: `def merge_people(body: PersonMergeRequest | PersonMergeRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PersonMergeResponse`
- **Returns (raw)**: `ApiResult[PersonMergeResponse, MergePeopleErrorBody]`
- **Error**: `MergePeopleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PersonMergeRequest` | `ortto/models/person_merge_request.py` |
| `PersonMergeRequestDict` | `ortto/models/person_merge_request.py` |
| `PersonMergeResponse` | `ortto/models/person_merge_response.py` |
| `MergePeopleErrorBody` | `ortto/errors/merge_people_error.py` |
| `Error` | `ortto/models/error.py` |

