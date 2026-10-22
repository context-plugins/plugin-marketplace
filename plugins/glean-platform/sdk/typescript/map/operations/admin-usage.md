<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminUsage — operations

Accessor: `client.adminUsage` · Source: `src/resources/admin-usage.ts` · 11 operations · Request and error types: namespace `AdminUsage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-platform-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### platformAdminUsageLimitsBatch

- **Signature**: `platformAdminUsageLimitsBatch(request: AdminUsage.PlatformAdminUsageLimitsBatchRequest, options?: RequestOptions): ApiPromise<PlatformBatchUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsBatchError>`
- **Wire**: `POST /api/admin/usage/limits/batch`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformBatchUsageLimitsResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageLimitsBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminUsage.PlatformAdminUsageLimitsBatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformUsageLimit[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformUsageLimit` | `platformUsageLimitSchema` | `src/models/platform-usage-limit.ts` |
| `PlatformBatchUsageLimitsResponse` | `platformBatchUsageLimitsResponseSchema` | `src/models/platform-batch-usage-limits-response.ts` |

### platformAdminUsageLimitsEvaluate

- **Signature**: `platformAdminUsageLimitsEvaluate(request: AdminUsage.PlatformAdminUsageLimitsEvaluateRequest, options?: RequestOptions): ApiPromise<PlatformEvaluateUsageLimitResponse, AdminUsage.PlatformAdminUsageLimitsEvaluateError>`
- **Wire**: `POST /api/admin/usage/limits/evaluate`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformEvaluateUsageLimitResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageLimitsEvaluateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminUsage.PlatformAdminUsageLimitsEvaluateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformEvaluateUsageLimitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformEvaluateUsageLimitRequest` | `platformEvaluateUsageLimitRequestSchema` | `src/models/platform-evaluate-usage-limit-request.ts` |
| `PlatformEvaluateUsageLimitResponse` | `platformEvaluateUsageLimitResponseSchema` | `src/models/platform-evaluate-usage-limit-response.ts` |

### platformAdminUsageLimitsList

- **Signature**: `platformAdminUsageLimitsList(request: AdminUsage.PlatformAdminUsageLimitsListRequest, options?: RequestOptions): ApiPromise<PlatformListUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsListError>`
- **Wire**: `GET /api/admin/usage/limits`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformListUsageLimitsResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageLimitsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminUsage.PlatformAdminUsageLimitsListRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |
| `cursor` | `query` | — | `string` | no | — |
| `filters` | `query` | — | `Filter[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Filter` | `filterSchema` | `src/models/filter.ts` |
| `PlatformListUsageLimitsResponse` | `platformListUsageLimitsResponseSchema` | `src/models/platform-list-usage-limits-response.ts` |

### platformAdminUsageLimitsReset

- **Signature**: `platformAdminUsageLimitsReset(request: AdminUsage.PlatformAdminUsageLimitsResetRequest, options?: RequestOptions): ApiPromise<PlatformResetUsageLimitsResponse, AdminUsage.PlatformAdminUsageLimitsResetError>`
- **Wire**: `POST /api/admin/usage/limits/reset`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformResetUsageLimitsResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageLimitsResetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminUsage.PlatformAdminUsageLimitsResetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformUsageLimitKey` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformUsageLimitKey` | `platformUsageLimitKeySchema` | `src/models/platform-usage-limit-key.ts` |
| `PlatformResetUsageLimitsResponse` | `platformResetUsageLimitsResponseSchema` | `src/models/platform-reset-usage-limits-response.ts` |

### platformAdminUsageLimitsUpsert

- **Signature**: `platformAdminUsageLimitsUpsert(request: AdminUsage.PlatformAdminUsageLimitsUpsertRequest, options?: RequestOptions): ApiPromise<PlatformUpsertUsageLimitResponse, AdminUsage.PlatformAdminUsageLimitsUpsertError>`
- **Wire**: `POST /api/admin/usage/limits`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformUpsertUsageLimitResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageLimitsUpsertError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminUsage.PlatformAdminUsageLimitsUpsertRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformUsageLimit` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformUsageLimit` | `platformUsageLimitSchema` | `src/models/platform-usage-limit.ts` |
| `PlatformUpsertUsageLimitResponse` | `platformUpsertUsageLimitResponseSchema` | `src/models/platform-upsert-usage-limit-response.ts` |

### platformAdminUsageRequestsCreate

- **Signature**: `platformAdminUsageRequestsCreate(request: AdminUsage.PlatformAdminUsageRequestsCreateRequest, options?: RequestOptions): ApiPromise<PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsCreateError>`
- **Wire**: `POST /api/admin/usage/limit-increase-requests`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformRequestResponse1`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageRequestsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminUsage.PlatformAdminUsageRequestsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformAgentRequestCreate1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformAgentRequestCreate1` | `platformAgentRequestCreate1Schema` | `src/models/platform-agent-request-create1.ts` |
| `PlatformRequestResponse1` | `platformRequestResponse1Schema` | `src/models/platform-request-response1.ts` |

### platformAdminUsageRequestsGet

- **Signature**: `platformAdminUsageRequestsGet(request: AdminUsage.PlatformAdminUsageRequestsGetRequest, options?: RequestOptions): ApiPromise<PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsGetError>`
- **Wire**: `GET /api/admin/usage/limit-increase-requests/{request_id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformRequestResponse1`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageRequestsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminUsage.PlatformAdminUsageRequestsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `requestId` | `path` | `request_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformRequestResponse1` | `platformRequestResponse1Schema` | `src/models/platform-request-response1.ts` |

### platformAdminUsageRequestsList

- **Signature**: `platformAdminUsageRequestsList(request: AdminUsage.PlatformAdminUsageRequestsListRequest, options?: RequestOptions): ApiPromise<PlatformRequestListResponse1, AdminUsage.PlatformAdminUsageRequestsListError>`
- **Wire**: `GET /api/admin/usage/limit-increase-requests`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformRequestListResponse1`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageRequestsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminUsage.PlatformAdminUsageRequestsListRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `pageSize` | `query` | `page_size` | `number` | no | `20` |
| `cursor` | `query` | — | `string` | no | — |
| `filters` | `query` | — | `PlatformRequestFilter1[]` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformRequestFilter1` | `platformRequestFilter1Schema` | `src/models/platform-request-filter1.ts` |
| `PlatformRequestListResponse1` | `platformRequestListResponse1Schema` | `src/models/platform-request-list-response1.ts` |

### platformAdminUsageRequestsUpdate

- **Signature**: `platformAdminUsageRequestsUpdate(request: AdminUsage.PlatformAdminUsageRequestsUpdateRequest, options?: RequestOptions): ApiPromise<PlatformRequestResponse1, AdminUsage.PlatformAdminUsageRequestsUpdateError>`
- **Wire**: `PATCH /api/admin/usage/limit-increase-requests/{request_id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformRequestResponse1`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageRequestsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error409"` [409] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminUsage.PlatformAdminUsageRequestsUpdateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `requestId` | `path` | `request_id` | `string` | yes |
| `body` | `body` | — | `PlatformAdministrativeRequestUpdate1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformAdministrativeRequestUpdate1` | `platformAdministrativeRequestUpdate1Schema` | `src/models/platform-administrative-request-update1.ts` |
| `PlatformRequestResponse1` | `platformRequestResponse1Schema` | `src/models/platform-request-response1.ts` |

### platformAdminUsageSettingsGet

- **Signature**: `platformAdminUsageSettingsGet(options?: RequestOptions): ApiPromise<PlatformUsageSettingsResponse, AdminUsage.PlatformAdminUsageSettingsGetError>`
- **Wire**: `GET /api/admin/usage/settings`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlatformUsageSettingsResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageSettingsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformUsageSettingsResponse` | `platformUsageSettingsResponseSchema` | `src/models/platform-usage-settings-response.ts` |

### platformAdminUsageSettingsUpdate

- **Signature**: `platformAdminUsageSettingsUpdate(request: AdminUsage.PlatformAdminUsageSettingsUpdateRequest, options?: RequestOptions): ApiPromise<PlatformUsageSettingsResponse, AdminUsage.PlatformAdminUsageSettingsUpdateError>`
- **Wire**: `PATCH /api/admin/usage/settings`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlatformUsageSettingsResponse`
- **Error**: `GleanPlatformApiError` with `kind: "api"`, an instance of `AdminUsage.PlatformAdminUsageSettingsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error408"` [408] no body · `"error413"` [413] no body · `"error429"` [429] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminUsage.PlatformAdminUsageSettingsUpdateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlatformUsageSettingsUpdateRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlatformUsageSettingsUpdateRequest2` | `platformUsageSettingsUpdateRequest2Schema` | `src/models/unions/platform-usage-settings-update-request2.ts` |
| `PlatformUsageSettingsResponse` | `platformUsageSettingsResponseSchema` | `src/models/platform-usage-settings-response.ts` |

