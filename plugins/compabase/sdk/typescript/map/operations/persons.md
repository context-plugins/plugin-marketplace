<!-- Generated file — do not edit; regenerated with the SDK. -->

# Persons — operations

Accessor: `client.persons` · Source: `src/resources/persons.ts` · 2 operations · Request and error types: namespace `Persons`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `compabase`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPersonsByPersonIdConnections

- **Signature**: `getPersonsByPersonIdConnections(request: Persons.GetPersonsByPersonIdConnectionsRequest, options?: RequestOptions): ApiPromise<PersonConnectionsResponse, Persons.GetPersonsByPersonIdConnectionsError>`
- **Wire**: `GET /persons/{personId}/connections`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PersonConnectionsResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Persons.GetPersonsByPersonIdConnectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Persons.GetPersonsByPersonIdConnectionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `personId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonConnectionsResponse` | `personConnectionsResponseSchema` | `src/models/person-connections-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getPersonsSearch

- **Signature**: `getPersonsSearch(request: Persons.GetPersonsSearchRequest, options?: RequestOptions): ApiPromise<PersonsSearchResponse, Persons.GetPersonsSearchError>`
- **Wire**: `GET /persons/search`
- **Auth**: any of `apiKeyAuth`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PersonsSearchResponse`
- **Error**: `CompabaseError` with `kind: "api"`, an instance of `Persons.GetPersonsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Persons.GetPersonsSearchRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `q` | `query` | `string` | yes | — |
| `limit` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonsSearchResponse` | `personsSearchResponseSchema` | `src/models/persons-search-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

