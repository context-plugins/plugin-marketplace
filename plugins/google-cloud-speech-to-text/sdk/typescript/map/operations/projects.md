<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 10 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-speech-to-text`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### speechProjectsLocationsCustomClassesCreate

- **Signature**: `speechProjectsLocationsCustomClassesCreate(request: Projects.SpeechProjectsLocationsCustomClassesCreateRequest, options?: RequestOptions): ApiPromise<CustomClass, Projects.SpeechProjectsLocationsCustomClassesCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/customClasses`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomClass`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Projects.SpeechProjectsLocationsCustomClassesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SpeechProjectsLocationsCustomClassesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `CreateCustomClassRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomClassRequest` | `createCustomClassRequestSchema` | `src/models/create-custom-class-request.ts` |
| `CustomClass` | `customClassSchema` | `src/models/custom-class.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechProjectsLocationsCustomClassesDelete

- **Signature**: `speechProjectsLocationsCustomClassesDelete(request: Projects.SpeechProjectsLocationsCustomClassesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.SpeechProjectsLocationsCustomClassesDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Projects.SpeechProjectsLocationsCustomClassesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SpeechProjectsLocationsCustomClassesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `customClassesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechProjectsLocationsCustomClassesGet

- **Signature**: `speechProjectsLocationsCustomClassesGet(request: Projects.SpeechProjectsLocationsCustomClassesGetRequest, options?: RequestOptions): ApiPromise<CustomClass, Projects.SpeechProjectsLocationsCustomClassesGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomClass`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Projects.SpeechProjectsLocationsCustomClassesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SpeechProjectsLocationsCustomClassesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `customClassesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomClass` | `customClassSchema` | `src/models/custom-class.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechProjectsLocationsCustomClassesList

- **Signature**: `speechProjectsLocationsCustomClassesList(request: Projects.SpeechProjectsLocationsCustomClassesListRequest, options?: RequestOptions): ApiPromise<ListCustomClassesResponse, Projects.SpeechProjectsLocationsCustomClassesListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/customClasses`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomClassesResponse`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Projects.SpeechProjectsLocationsCustomClassesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SpeechProjectsLocationsCustomClassesListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCustomClassesResponse` | `listCustomClassesResponseSchema` | `src/models/list-custom-classes-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechProjectsLocationsCustomClassesPatch

- **Signature**: `speechProjectsLocationsCustomClassesPatch(request: Projects.SpeechProjectsLocationsCustomClassesPatchRequest, options?: RequestOptions): ApiPromise<CustomClass, Projects.SpeechProjectsLocationsCustomClassesPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomClass`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Projects.SpeechProjectsLocationsCustomClassesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SpeechProjectsLocationsCustomClassesPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `customClassesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `CustomClass` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomClass` | `customClassSchema` | `src/models/custom-class.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechProjectsLocationsPhraseSetsCreate

- **Signature**: `speechProjectsLocationsPhraseSetsCreate(request: Projects.SpeechProjectsLocationsPhraseSetsCreateRequest, options?: RequestOptions): ApiPromise<PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsCreateError>`
- **Wire**: `POST /v1/projects/{projectsId}/locations/{locationsId}/phraseSets`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PhraseSet`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Projects.SpeechProjectsLocationsPhraseSetsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SpeechProjectsLocationsPhraseSetsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `body` | `body` | `CreatePhraseSetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreatePhraseSetRequest` | `createPhraseSetRequestSchema` | `src/models/create-phrase-set-request.ts` |
| `PhraseSet` | `phraseSetSchema` | `src/models/phrase-set.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechProjectsLocationsPhraseSetsDelete

- **Signature**: `speechProjectsLocationsPhraseSetsDelete(request: Projects.SpeechProjectsLocationsPhraseSetsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Projects.SpeechProjectsLocationsPhraseSetsDeleteError>`
- **Wire**: `DELETE /v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Projects.SpeechProjectsLocationsPhraseSetsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SpeechProjectsLocationsPhraseSetsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `phraseSetsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechProjectsLocationsPhraseSetsGet

- **Signature**: `speechProjectsLocationsPhraseSetsGet(request: Projects.SpeechProjectsLocationsPhraseSetsGetRequest, options?: RequestOptions): ApiPromise<PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsGetError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PhraseSet`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Projects.SpeechProjectsLocationsPhraseSetsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SpeechProjectsLocationsPhraseSetsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `phraseSetsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PhraseSet` | `phraseSetSchema` | `src/models/phrase-set.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechProjectsLocationsPhraseSetsList

- **Signature**: `speechProjectsLocationsPhraseSetsList(request: Projects.SpeechProjectsLocationsPhraseSetsListRequest, options?: RequestOptions): ApiPromise<ListPhraseSetResponse, Projects.SpeechProjectsLocationsPhraseSetsListError>`
- **Wire**: `GET /v1/projects/{projectsId}/locations/{locationsId}/phraseSets`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPhraseSetResponse`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Projects.SpeechProjectsLocationsPhraseSetsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SpeechProjectsLocationsPhraseSetsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPhraseSetResponse` | `listPhraseSetResponseSchema` | `src/models/list-phrase-set-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### speechProjectsLocationsPhraseSetsPatch

- **Signature**: `speechProjectsLocationsPhraseSetsPatch(request: Projects.SpeechProjectsLocationsPhraseSetsPatchRequest, options?: RequestOptions): ApiPromise<PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsPatchError>`
- **Wire**: `PATCH /v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PhraseSet`
- **Error**: `GoogleCloudSpeechToTextError` with `kind: "api"`, an instance of `Projects.SpeechProjectsLocationsPhraseSetsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.SpeechProjectsLocationsPhraseSetsPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectsId` | `path` | `string` | yes |
| `locationsId` | `path` | `string` | yes |
| `phraseSetsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `PhraseSet` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PhraseSet` | `phraseSetSchema` | `src/models/phrase-set.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

