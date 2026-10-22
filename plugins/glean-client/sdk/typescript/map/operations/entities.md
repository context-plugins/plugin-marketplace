<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entities — operations

Accessor: `client.entities` · Source: `src/resources/entities.ts` · 3 operations · Request and error types: namespace `Entities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-client-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPersonPhoto

- **Signature**: `getPersonPhoto(request: Entities.GetPersonPhotoRequest, options?: RequestOptions): ApiPromise<undefined, Entities.GetPersonPhotoError>`
- **Wire**: `GET /rest/api/v1/people/{person_id}/photo`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Entities.GetPersonPhotoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.GetPersonPhotoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `personId` | `path` | `person_id` | `string` | yes |
| `ds` | `query` | — | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |

### listentities

- **Signature**: `listentities(request: Entities.ListentitiesRequest, options?: RequestOptions): ApiPromise<ListEntitiesResponse, Entities.ListentitiesError>`
- **Wire**: `POST /rest/api/v1/listentities`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ListEntitiesResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Entities.ListentitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.ListentitiesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `ListEntitiesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEntitiesRequest` | `listEntitiesRequestSchema` | `src/models/list-entities-request.ts` |
| `ListEntitiesResponse` | `listEntitiesResponseSchema` | `src/models/list-entities-response.ts` |

### people

- **Signature**: `people(request: Entities.PeopleRequestParams, options?: RequestOptions): ApiPromise<PeopleResponse, Entities.PeopleError>`
- **Wire**: `POST /rest/api/v1/people`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PeopleResponse`
- **Error**: `GleanClientApiError` with `kind: "api"`, an instance of `Entities.PeopleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entities.PeopleRequestParams` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locale` | `query` | — | `string` | no |
| `xGleanActAs` | `header` | `X-Glean-ActAs` | `string` | no |
| `xGleanAuthType` | `header` | `X-Glean-Auth-Type` | `string` | no |
| `body` | `body` | — | `PeopleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PeopleRequest` | `peopleRequestSchema` | `src/models/people-request.ts` |
| `PeopleResponse` | `peopleResponseSchema` | `src/models/people-response.ts` |

