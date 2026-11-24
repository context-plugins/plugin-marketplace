<!-- Generated file — do not edit; regenerated with the SDK. -->

# Audiences — operations

Accessor: `client.audiences` · Source: `src/resources/audiences.ts` · 4 operations · Request and error types: namespace `Audiences`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAudience

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createAudience(request: Audiences.CreateAudienceRequestParams, options?: RequestOptions): ApiPromise<Audience, Audiences.CreateAudienceError>`
- **Wire**: `POST /audiences`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Audience`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Audiences.CreateAudienceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [400] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiences.CreateAudienceRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `body` | `body` | — | `CreateAudienceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAudienceRequest` | `createAudienceRequestSchema` | `src/models/create-audience-request.ts` |
| `Audience` | `audienceSchema` | `src/models/audience.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### deleteAudience

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteAudience(request: Audiences.DeleteAudienceRequest, options?: RequestOptions): ApiPromise<undefined, Audiences.DeleteAudienceError>`
- **Wire**: `DELETE /audiences/{id}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Audiences.DeleteAudienceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [404] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiences.DeleteAudienceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### getAllAudiences

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllAudiences(request: Audiences.GetAllAudiencesRequest, options?: RequestOptions): ApiPromise<AudienceList, Audiences.GetAllAudiencesError>`
- **Wire**: `GET /audiences`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AudienceList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Audiences.GetAllAudiencesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiences.GetAllAudiencesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AudienceList` | `audienceListSchema` | `src/models/audience-list.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### updateAudience

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateAudience(request: Audiences.UpdateAudienceRequest, options?: RequestOptions): ApiPromise<Audience, Audiences.UpdateAudienceError>`
- **Wire**: `PUT /audiences/{id}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Audience`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Audiences.UpdateAudienceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [400] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi3"` [404] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Audiences.UpdateAudienceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `body` | `body` | — | `CreateAudienceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateAudienceRequest` | `createAudienceRequestSchema` | `src/models/create-audience-request.ts` |
| `Audience` | `audienceSchema` | `src/models/audience.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

