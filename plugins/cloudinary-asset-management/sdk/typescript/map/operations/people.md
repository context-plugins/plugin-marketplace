<!-- Generated file — do not edit; regenerated with the SDK. -->

# People — operations

Accessor: `client.people` · Source: `src/resources/people.ts` · 4 operations · Request and error types: namespace `People`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloudinary-asset-management-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPerson

- **Signature**: `getPerson(request: People.GetPersonRequest, options?: RequestOptions): ApiPromise<PersonResponse, People.GetPersonError>`
- **Wire**: `GET /v1_1/{cloud_name}/people/{person_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PersonResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `People.GetPersonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.GetPersonRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `personId` | `path` | `person_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersonResponse` | `personResponseSchema` | `src/models/person-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### inspectPeoplePermissions

- **Signature**: `inspectPeoplePermissions(request: People.InspectPeoplePermissionsRequest, options?: RequestOptions): ApiPromise<PeopleInspectResponse, People.InspectPeoplePermissionsError>`
- **Wire**: `POST /v1_1/{cloud_name}/people/inspect`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PeopleInspectResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `People.InspectPeoplePermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.InspectPeoplePermissionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `body` | `body` | — | `PeopleInspectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PeopleInspectRequest` | `peopleInspectRequestSchema` | `src/models/people-inspect-request.ts` |
| `PeopleInspectResponse` | `peopleInspectResponseSchema` | `src/models/people-inspect-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### listPeople

- **Signature**: `listPeople(request: People.ListPeopleRequest, options?: RequestOptions): ApiPromise<PeopleListResponse, People.ListPeopleError>`
- **Wire**: `GET /v1_1/{cloud_name}/people`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PeopleListResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `People.ListPeopleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.ListPeopleRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes | — |
| `maxResults` | `query` | `max_results` | `number` | no | `50` |
| `nextCursor` | `query` | `next_cursor` | `string` | no | — |
| `nameStatus` | `query` | `name_status` | `NameStatus` | no | `NameStatus.All` |
| `namePrefix` | `query` | `name_prefix` | `string` | no | — |
| `status` | `query` | — | `PersonStatus` | no | — |
| `sortBy` | `query` | `sort_by` | `SortBy1` | no | `SortBy1.Name` |
| `direction` | `query` | — | `DirectionEnum` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `NameStatus` | `nameStatusSchema` | `src/models/name-status.ts` |
| `PersonStatus` | `personStatusSchema` | `src/models/person-status.ts` |
| `SortBy1` | `sortBy1Schema` | `src/models/sort-by1.ts` |
| `DirectionEnum` | `directionEnumSchema` | `src/models/direction-enum.ts` |
| `PeopleListResponse` | `peopleListResponseSchema` | `src/models/people-list-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### updatePerson

- **Signature**: `updatePerson(request: People.UpdatePersonRequestParams, options?: RequestOptions): ApiPromise<UpdatePersonResponse, People.UpdatePersonError>`
- **Wire**: `PUT /v1_1/{cloud_name}/people/{person_id}`
- **Auth**: any of `basicAuth`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdatePersonResponse`
- **Error**: `CloudinaryAssetManagementApiError` with `kind: "api"`, an instance of `People.UpdatePersonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [403] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `People.UpdatePersonRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cloudName` | `path` | `cloud_name` | `string` | yes |
| `personId` | `path` | `person_id` | `string` | yes |
| `body` | `body` | — | `UpdatePersonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePersonRequest` | `updatePersonRequestSchema` | `src/models/update-person-request.ts` |
| `UpdatePersonResponse` | `updatePersonResponseSchema` | `src/models/update-person-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

