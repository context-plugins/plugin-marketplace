<!-- Generated file — do not edit; regenerated with the SDK. -->

# User — operations

Accessor: `client.user` · Source: `src/resources/user.ts` · 3 operations · Request and error types: namespace `User`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProductivityStatsApiV1TasksCompletedStatsGet

- **Signature**: `getProductivityStatsApiV1TasksCompletedStatsGet(options?: RequestOptions): ApiPromise<ProductivityStatsResponse, User.GetProductivityStatsApiV1TasksCompletedStatsGetError>`
- **Wire**: `GET /api/v1/tasks/completed/stats`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProductivityStatsResponse`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `User.GetProductivityStatsApiV1TasksCompletedStatsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductivityStatsResponse` | `productivityStatsResponseSchema` | `src/models/productivity-stats-response.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateNotificationSettingApiV1NotificationSettingPut

- **Signature**: `updateNotificationSettingApiV1NotificationSettingPut(request: User.UpdateNotificationSettingApiV1NotificationSettingPutRequest, options?: RequestOptions): ApiPromise<Record<string, boolean>, User.UpdateNotificationSettingApiV1NotificationSettingPutError>`
- **Wire**: `PUT /api/v1/notification_setting`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, boolean>` — a bare `application/json` map; the success type *is* the map
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `User.UpdateNotificationSettingApiV1NotificationSettingPutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `User.UpdateNotificationSettingApiV1NotificationSettingPutRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body20` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body20` | `body20Schema` | `src/models/body20.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### userInfoApiV1UserGet

- **Signature**: `userInfoApiV1UserGet(options?: RequestOptions): ApiPromise<UserSyncView, User.UserInfoApiV1UserGetError>`
- **Wire**: `GET /api/v1/user`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `User.UserInfoApiV1UserGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `UserSyncView` | `userSyncViewSchema` | `src/models/user-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

