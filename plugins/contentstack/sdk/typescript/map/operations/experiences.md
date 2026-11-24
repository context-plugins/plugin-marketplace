<!-- Generated file — do not edit; regenerated with the SDK. -->

# Experiences — operations

Accessor: `client.experiences` · Source: `src/resources/experiences.ts` · 7 operations · Request and error types: namespace `Experiences`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createExperience

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createExperience(request: Experiences.CreateExperienceRequestParams, options?: RequestOptions): ApiPromise<Experience, Experiences.CreateExperienceError>`
- **Wire**: `POST /experiences`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Experience`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Experiences.CreateExperienceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [400] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiences.CreateExperienceRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `body` | `body` | — | `CreateExperienceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateExperienceRequest` | `createExperienceRequestSchema` | `src/models/create-experience-request.ts` |
| `Experience` | `experienceSchema` | `src/models/experience.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### deleteExperience

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteExperience(request: Experiences.DeleteExperienceRequest, options?: RequestOptions): ApiPromise<undefined, Experiences.DeleteExperienceError>`
- **Wire**: `DELETE /experiences/{id}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Experiences.DeleteExperienceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [404] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiences.DeleteExperienceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### getAllExperiences

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllExperiences(request: Experiences.GetAllExperiencesRequest, options?: RequestOptions): ApiPromise<ExperienceList, Experiences.GetAllExperiencesError>`
- **Wire**: `GET /experiences`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExperienceList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Experiences.GetAllExperiencesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiences.GetAllExperiencesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExperienceList` | `experienceListSchema` | `src/models/experience-list.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### getExperience

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getExperience(request: Experiences.GetExperienceRequest, options?: RequestOptions): ApiPromise<Experience, Experiences.GetExperienceError>`
- **Wire**: `GET /experiences/{id}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Experience`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Experiences.GetExperienceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [404] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiences.GetExperienceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Experience` | `experienceSchema` | `src/models/experience.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### getExperiencePriority

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getExperiencePriority(request: Experiences.GetExperiencePriorityRequest, options?: RequestOptions): ApiPromise<ExperiencePriority, Experiences.GetExperiencePriorityError>`
- **Wire**: `GET /experiences/priority`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExperiencePriority`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Experiences.GetExperiencePriorityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiences.GetExperiencePriorityRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExperiencePriority` | `experiencePrioritySchema` | `src/models/experience-priority.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### updateExperience

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateExperience(request: Experiences.UpdateExperienceRequest, options?: RequestOptions): ApiPromise<Experience, Experiences.UpdateExperienceError>`
- **Wire**: `PUT /experiences/{id}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Experience`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Experiences.UpdateExperienceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [400] `ErrorContentstackPersonalizeManagementAttributesApi` · `"errorContentstackPersonalizeManagementAttributesApi2"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiences.UpdateExperienceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `body` | `body` | — | `CreateExperienceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateExperienceRequest` | `createExperienceRequestSchema` | `src/models/create-experience-request.ts` |
| `Experience` | `experienceSchema` | `src/models/experience.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

### updateExperiencePriority

- **Server**: `defaultContentstackPersonalizeManagementAttributesApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateExperiencePriority(request: Experiences.UpdateExperiencePriorityRequest, options?: RequestOptions): ApiPromise<ExperiencePriority, Experiences.UpdateExperiencePriorityError>`
- **Wire**: `PUT /experiences/priority`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExperiencePriority`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Experiences.UpdateExperiencePriorityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorContentstackPersonalizeManagementAttributesApi"` [401] `ErrorContentstackPersonalizeManagementAttributesApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Experiences.UpdateExperiencePriorityRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xProjectUid` | `header` | `x-project-uid` | `string` | yes |
| `body` | `body` | — | `ExperiencePriority` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExperiencePriority` | `experiencePrioritySchema` | `src/models/experience-priority.ts` |
| `ErrorContentstackPersonalizeManagementAttributesApi` | `errorContentstackPersonalizeManagementAttributesApiSchema` | `src/models/error-contentstack-personalize-management-attributes-api.ts` |

