<!-- Generated file — do not edit; regenerated with the SDK. -->

# People — operations

Accessor: `client.people` · Source: `src/resources/people.ts` · 4 operations · Request and error types: namespace `People`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `surfe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### findPeopleByEmail

- **Signature**: `findPeopleByEmail(request: People.FindPeopleByEmailRequest, options?: RequestOptions): ApiPromise<PeopleFindByEmailResponse, People.FindPeopleByEmailError>`
- **Wire**: `POST /people/find-by-email`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PeopleFindByEmailResponse`
- **Error**: `SurfeError` with `kind: "api"`, an instance of `People.FindPeopleByEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.FindPeopleByEmailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PeopleFindByEmailRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PeopleFindByEmailRequest` | `peopleFindByEmailRequestSchema` | `src/models/people-find-by-email-request.ts` |
| `PeopleFindByEmailResponse` | `peopleFindByEmailResponseSchema` | `src/models/people-find-by-email-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getPeopleEnrichment

- **Signature**: `getPeopleEnrichment(request: People.GetPeopleEnrichmentRequest, options?: RequestOptions): ApiPromise<PeopleEnrichmentResult, People.GetPeopleEnrichmentError>`
- **Wire**: `GET /people/enrich/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PeopleEnrichmentResult`
- **Error**: `SurfeError` with `kind: "api"`, an instance of `People.GetPeopleEnrichmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.GetPeopleEnrichmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PeopleEnrichmentResult` | `peopleEnrichmentResultSchema` | `src/models/people-enrichment-result.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### searchPeople

- **Signature**: `searchPeople(request: People.SearchPeopleRequest, options?: RequestOptions): ApiPromise<PeopleSearchResponse, People.SearchPeopleError>`
- **Wire**: `POST /people/search`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PeopleSearchResponse`
- **Error**: `SurfeError` with `kind: "api"`, an instance of `People.SearchPeopleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [402] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.SearchPeopleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PeopleSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PeopleSearchRequest` | `peopleSearchRequestSchema` | `src/models/people-search-request.ts` |
| `PeopleSearchResponse` | `peopleSearchResponseSchema` | `src/models/people-search-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### startPeopleEnrichment

- **Signature**: `startPeopleEnrichment(request: People.StartPeopleEnrichmentRequest, options?: RequestOptions): ApiPromise<EnrichmentJobAccepted, People.StartPeopleEnrichmentError>`
- **Wire**: `POST /people/enrich`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EnrichmentJobAccepted`
- **Error**: `SurfeError` with `kind: "api"`, an instance of `People.StartPeopleEnrichmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [402] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.StartPeopleEnrichmentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PeopleEnrichmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PeopleEnrichmentRequest` | `peopleEnrichmentRequestSchema` | `src/models/people-enrichment-request.ts` |
| `EnrichmentJobAccepted` | `enrichmentJobAcceptedSchema` | `src/models/enrichment-job-accepted.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

