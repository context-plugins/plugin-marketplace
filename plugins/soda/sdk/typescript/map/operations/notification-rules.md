<!-- Generated file — do not edit; regenerated with the SDK. -->

# NotificationRules — operations

Accessor: `client.notificationRules` · Source: `src/resources/notification-rules.ts` · 4 operations · Request and error types: namespace `NotificationRules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1NotificationRulesNotificationRuleId

- **Signature**: `deleteApiV1NotificationRulesNotificationRuleId(request: NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdRequest, options?: RequestOptions): ApiPromise<PublicApiDeleteNotificationRuleResponse, NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdError>`
- **Wire**: `DELETE /api/v1/notificationRules/{notificationRuleId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiDeleteNotificationRuleResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NotificationRules.DeleteApiV1NotificationRulesNotificationRuleIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `notificationRuleId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiDeleteNotificationRuleResponse` | `publicApiDeleteNotificationRuleResponseSchema` | `src/models/public-api-delete-notification-rule-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1NotificationRules

- **Signature**: `getApiV1NotificationRules(request?: NotificationRules.GetApiV1NotificationRulesRequest, options?: RequestOptions): ApiPromise<PublicApiListNotificationRulesResponse, NotificationRules.GetApiV1NotificationRulesError>`
- **Wire**: `GET /api/v1/notificationRules`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiListNotificationRulesResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `NotificationRules.GetApiV1NotificationRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NotificationRules.GetApiV1NotificationRulesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiListNotificationRulesResponse` | `publicApiListNotificationRulesResponseSchema` | `src/models/public-api-list-notification-rules-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1NotificationRules

- **Signature**: `postApiV1NotificationRules(request: NotificationRules.PostApiV1NotificationRulesRequest, options?: RequestOptions): ApiPromise<PublicApiNotificationRuleDto, NotificationRules.PostApiV1NotificationRulesError>`
- **Wire**: `POST /api/v1/notificationRules`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiNotificationRuleDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `NotificationRules.PostApiV1NotificationRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NotificationRules.PostApiV1NotificationRulesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PublicApiNotificationRuleRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiNotificationRuleRequestDto` | `publicApiNotificationRuleRequestDtoSchema` | `src/models/public-api-notification-rule-request-dto.ts` |
| `PublicApiNotificationRuleDto` | `publicApiNotificationRuleDtoSchema` | `src/models/public-api-notification-rule-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postApiV1NotificationRulesNotificationRuleId

- **Signature**: `postApiV1NotificationRulesNotificationRuleId(request: NotificationRules.PostApiV1NotificationRulesNotificationRuleIdRequest, options?: RequestOptions): ApiPromise<PublicApiNotificationRuleDto, NotificationRules.PostApiV1NotificationRulesNotificationRuleIdError>`
- **Wire**: `POST /api/v1/notificationRules/{notificationRuleId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublicApiNotificationRuleDto`
- **Error**: `SodaError` with `kind: "api"`, an instance of `NotificationRules.PostApiV1NotificationRulesNotificationRuleIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NotificationRules.PostApiV1NotificationRulesNotificationRuleIdRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `notificationRuleId` | `path` | `string` | yes |
| `body` | `body` | `PublicApiNotificationRuleRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiNotificationRuleRequestDto` | `publicApiNotificationRuleRequestDtoSchema` | `src/models/public-api-notification-rule-request-dto.ts` |
| `PublicApiNotificationRuleDto` | `publicApiNotificationRuleDtoSchema` | `src/models/public-api-notification-rule-dto.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

