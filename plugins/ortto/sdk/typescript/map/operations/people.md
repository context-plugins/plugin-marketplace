<!-- Generated file — do not edit; regenerated with the SDK. -->

# People — operations

Accessor: `client.people` · Source: `src/resources/people.ts` · 4 operations · Request and error types: namespace `People`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ortto`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deletePeople

- **Signature**: `deletePeople(request: People.DeletePeopleRequest, options?: RequestOptions): ApiPromise<undefined, People.DeletePeopleError>`
- **Wire**: `POST /person/delete`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `OrttoError` with `kind: "api"`, an instance of `People.DeletePeopleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.DeletePeopleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PersonDeleteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonDeleteRequest` | `personDeleteRequestSchema` | `src/models/person-delete-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPeople

- **Signature**: `getPeople(request: People.GetPeopleRequest, options?: RequestOptions): ApiPromise<PersonGetResponse, People.GetPeopleError>`
- **Wire**: `POST /person/get`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PersonGetResponse`
- **Error**: `OrttoError` with `kind: "api"`, an instance of `People.GetPeopleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.GetPeopleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PersonGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonGetRequest` | `personGetRequestSchema` | `src/models/person-get-request.ts` |
| `PersonGetResponse` | `personGetResponseSchema` | `src/models/person-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPeopleByIds

- **Signature**: `getPeopleByIds(request: People.GetPeopleByIdsRequest, options?: RequestOptions): ApiPromise<PersonGetResponse, People.GetPeopleByIdsError>`
- **Wire**: `POST /person/get-by-ids`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PersonGetResponse`
- **Error**: `OrttoError` with `kind: "api"`, an instance of `People.GetPeopleByIdsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.GetPeopleByIdsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PersonGetByIdsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonGetByIdsRequest` | `personGetByIdsRequestSchema` | `src/models/person-get-by-ids-request.ts` |
| `PersonGetResponse` | `personGetResponseSchema` | `src/models/person-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### mergePeople

- **Signature**: `mergePeople(request: People.MergePeopleRequest, options?: RequestOptions): ApiPromise<PersonMergeResponse, People.MergePeopleError>`
- **Wire**: `POST /person/merge`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PersonMergeResponse`
- **Error**: `OrttoError` with `kind: "api"`, an instance of `People.MergePeopleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.MergePeopleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PersonMergeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonMergeRequest` | `personMergeRequestSchema` | `src/models/person-merge-request.ts` |
| `PersonMergeResponse` | `personMergeResponseSchema` | `src/models/person-merge-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

