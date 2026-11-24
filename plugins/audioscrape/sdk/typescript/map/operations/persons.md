<!-- Generated file — do not edit; regenerated with the SDK. -->

# Persons — operations

Accessor: `client.persons` · Source: `src/resources/persons.ts` · 2 operations · Request and error types: namespace `Persons`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPersonV1

- **Signature**: `getPersonV1(request: Persons.GetPersonV1Request, options?: RequestOptions): ApiPromise<PersonDetail, Persons.GetPersonV1Error>`
- **Wire**: `GET /api/persons/{person_slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PersonDetail`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Persons.GetPersonV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Persons.GetPersonV1Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `personSlug` | `path` | `person_slug` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonDetail` | `personDetailSchema` | `src/models/person-detail.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### searchPersonsV1

- **Signature**: `searchPersonsV1(request?: Persons.SearchPersonsV1Request, options?: RequestOptions): ApiPromise<PersonList, Persons.SearchPersonsV1Error>`
- **Wire**: `GET /api/persons`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PersonList`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Persons.SearchPersonsV1Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Persons.SearchPersonsV1Request` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonList` | `personListSchema` | `src/models/person-list.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

