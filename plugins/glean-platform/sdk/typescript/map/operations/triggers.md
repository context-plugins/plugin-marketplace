<!-- Generated file — do not edit; regenerated with the SDK. -->

# Triggers — operations

Accessor: `client.triggers` · Source: `src/resources/triggers.ts` · 10 operations · Request and error types: namespace `Triggers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### platformTriggerPresetsEventsSearch

- **Signature**: `platformTriggerPresetsEventsSearch(request: Triggers.PlatformTriggerPresetsEventsSearchRequest, options?: RequestOptions): ApiPromise<PlatformTriggerEventSearchResponse, Triggers.PlatformTriggerPresetsEventsSearchError>`
- **Wire**: `POST /api/trigger-presets/{preset_id}/events/search`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformTriggerEventSearchResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Triggers.PlatformTriggerPresetsEventsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Triggers.PlatformTriggerPresetsEventsSearchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `string` | yes |
| `body` | `body` | — | `PlatformTriggerPresetEventSearchRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformTriggerPresetEventSearchRequest` | `platformTriggerPresetEventSearchRequestSchema` | `src/models/platform-trigger-preset-event-search-request.ts` |
| `PlatformTriggerEventSearchResponse` | `platformTriggerEventSearchResponseSchema` | `src/models/platform-trigger-event-search-response.ts` |

### platformTriggerPresetsGet

- **Signature**: `platformTriggerPresetsGet(request: Triggers.PlatformTriggerPresetsGetRequest, options?: RequestOptions): ApiPromise<PlatformTriggerPresetGetResponse, Triggers.PlatformTriggerPresetsGetError>`
- **Wire**: `GET /api/trigger-presets/{preset_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformTriggerPresetGetResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Triggers.PlatformTriggerPresetsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Triggers.PlatformTriggerPresetsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformTriggerPresetGetResponse` | `platformTriggerPresetGetResponseSchema` | `src/models/platform-trigger-preset-get-response.ts` |

### platformTriggerPresetsInputValuesList

- **Signature**: `platformTriggerPresetsInputValuesList(request: Triggers.PlatformTriggerPresetsInputValuesListRequest, options?: RequestOptions): ApiPromise<PlatformTriggerPresetInputValueListResponse, Triggers.PlatformTriggerPresetsInputValuesListError>`
- **Wire**: `GET /api/trigger-presets/{preset_id}/input-values`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformTriggerPresetInputValueListResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Triggers.PlatformTriggerPresetsInputValuesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Triggers.PlatformTriggerPresetsInputValuesListRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `presetId` | `path` | `preset_id` | `string` | yes |
| `field` | `query` | — | `string` | yes |
| `query` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformTriggerPresetInputValueListResponse` | `platformTriggerPresetInputValueListResponseSchema` | `src/models/platform-trigger-preset-input-value-list-response.ts` |

### platformTriggerPresetsList

- **Signature**: `platformTriggerPresetsList(request: Triggers.PlatformTriggerPresetsListRequest, options?: RequestOptions): ApiPromise<PlatformTriggerPresetListResponse, Triggers.PlatformTriggerPresetsListError>`
- **Wire**: `GET /api/trigger-presets`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformTriggerPresetListResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Triggers.PlatformTriggerPresetsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Triggers.PlatformTriggerPresetsListRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `datasource` | `query` | — | `string` | no | — |
| `pageSize` | `query` | `page_size` | `number` | no | `50` |
| `cursor` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformTriggerPresetListResponse` | `platformTriggerPresetListResponseSchema` | `src/models/platform-trigger-preset-list-response.ts` |

### platformTriggersCreate

- **Signature**: `platformTriggersCreate(request: Triggers.PlatformTriggersCreateRequest, options?: RequestOptions): ApiPromise<PlatformTriggerCreateResponse, Triggers.PlatformTriggersCreateError>`
- **Wire**: `POST /api/triggers`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformTriggerCreateResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Triggers.PlatformTriggersCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Triggers.PlatformTriggersCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformTriggerCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformTriggerCreateRequest` | `platformTriggerCreateRequestSchema` | `src/models/platform-trigger-create-request.ts` |
| `PlatformTriggerCreateResponse` | `platformTriggerCreateResponseSchema` | `src/models/platform-trigger-create-response.ts` |

### platformTriggersDelete

- **Signature**: `platformTriggersDelete(request: Triggers.PlatformTriggersDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Triggers.PlatformTriggersDeleteError>`
- **Wire**: `DELETE /api/triggers/{trigger_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Triggers.PlatformTriggersDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Triggers.PlatformTriggersDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `triggerId` | `path` | `trigger_id` | `string` | yes |

### platformTriggersEventsSearch

- **Signature**: `platformTriggersEventsSearch(request: Triggers.PlatformTriggersEventsSearchRequest, options?: RequestOptions): ApiPromise<PlatformTriggerEventSearchResponse, Triggers.PlatformTriggersEventsSearchError>`
- **Wire**: `POST /api/triggers/{trigger_id}/events/search`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformTriggerEventSearchResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Triggers.PlatformTriggersEventsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Triggers.PlatformTriggersEventsSearchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `triggerId` | `path` | `trigger_id` | `string` | yes |
| `body` | `body` | — | `PlatformTriggerEventSearchRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformTriggerEventSearchRequest` | `platformTriggerEventSearchRequestSchema` | `src/models/platform-trigger-event-search-request.ts` |
| `PlatformTriggerEventSearchResponse` | `platformTriggerEventSearchResponseSchema` | `src/models/platform-trigger-event-search-response.ts` |

### platformTriggersGet

- **Signature**: `platformTriggersGet(request: Triggers.PlatformTriggersGetRequest, options?: RequestOptions): ApiPromise<PlatformTriggerGetResponse, Triggers.PlatformTriggersGetError>`
- **Wire**: `GET /api/triggers/{trigger_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformTriggerGetResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Triggers.PlatformTriggersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Triggers.PlatformTriggersGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `triggerId` | `path` | `trigger_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformTriggerGetResponse` | `platformTriggerGetResponseSchema` | `src/models/platform-trigger-get-response.ts` |

### platformTriggersList

- **Signature**: `platformTriggersList(request: Triggers.PlatformTriggersListRequest, options?: RequestOptions): ApiPromise<PlatformTriggerListResponse, Triggers.PlatformTriggersListError>`
- **Wire**: `GET /api/triggers`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformTriggerListResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Triggers.PlatformTriggersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Triggers.PlatformTriggersListRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageSize` | `query` | `page_size` | `number` | no | `50` |
| `cursor` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformTriggerListResponse` | `platformTriggerListResponseSchema` | `src/models/platform-trigger-list-response.ts` |

### platformTriggersUpdate

- **Signature**: `platformTriggersUpdate(request: Triggers.PlatformTriggersUpdateRequest, options?: RequestOptions): ApiPromise<PlatformTriggerGetResponse, Triggers.PlatformTriggersUpdateError>`
- **Wire**: `PATCH /api/triggers/{trigger_id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformTriggerGetResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `Triggers.PlatformTriggersUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Triggers.PlatformTriggersUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `triggerId` | `path` | `trigger_id` | `string` | yes |
| `body` | `body` | — | `PlatformTriggerUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformTriggerUpdateRequest` | `platformTriggerUpdateRequestSchema` | `src/models/platform-trigger-update-request.ts` |
| `PlatformTriggerGetResponse` | `platformTriggerGetResponseSchema` | `src/models/platform-trigger-get-response.ts` |

