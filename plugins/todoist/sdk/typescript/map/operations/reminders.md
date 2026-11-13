<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reminders — operations

Accessor: `client.reminders` · Source: `src/resources/reminders.ts` · 5 operations · Request and error types: namespace `Reminders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createReminderApiV1RemindersPost

- **Signature**: `createReminderApiV1RemindersPost(request: Reminders.CreateReminderApiV1RemindersPostRequest, options?: RequestOptions): ApiPromise<NotificationSyncView, Reminders.CreateReminderApiV1RemindersPostError>`
- **Wire**: `POST /api/v1/reminders`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotificationSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Reminders.CreateReminderApiV1RemindersPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reminders.CreateReminderApiV1RemindersPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body28` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body28` | `body28Schema` | `src/models/body28.ts` |
| `NotificationSyncView` | `notificationSyncViewSchema` | `src/models/notification-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### deleteReminderApiV1RemindersReminderIdDelete

- **Signature**: `deleteReminderApiV1RemindersReminderIdDelete(request: Reminders.DeleteReminderApiV1RemindersReminderIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Reminders.DeleteReminderApiV1RemindersReminderIdDeleteError>`
- **Wire**: `DELETE /api/v1/reminders/{reminder_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Reminders.DeleteReminderApiV1RemindersReminderIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reminders.DeleteReminderApiV1RemindersReminderIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reminderId` | `path` | `reminder_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getReminderApiV1RemindersReminderIdGet

- **Signature**: `getReminderApiV1RemindersReminderIdGet(request: Reminders.GetReminderApiV1RemindersReminderIdGetRequest, options?: RequestOptions): ApiPromise<NotificationSyncView, Reminders.GetReminderApiV1RemindersReminderIdGetError>`
- **Wire**: `GET /api/v1/reminders/{reminder_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Reminders.GetReminderApiV1RemindersReminderIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reminders.GetReminderApiV1RemindersReminderIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reminderId` | `path` | `reminder_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationSyncView` | `notificationSyncViewSchema` | `src/models/notification-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getRemindersApiV1RemindersGet

- **Signature**: `getRemindersApiV1RemindersGet(request?: Reminders.GetRemindersApiV1RemindersGetRequest, options?: RequestOptions): ApiPromise<PaginatedList8, Reminders.GetRemindersApiV1RemindersGetError>`
- **Wire**: `GET /api/v1/reminders`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList8`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Reminders.GetRemindersApiV1RemindersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reminders.GetRemindersApiV1RemindersGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `taskId` | `query` | `task_id` | `string` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList8` | `paginatedList8Schema` | `src/models/paginated-list8.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateReminderApiV1RemindersReminderIdPost

- **Signature**: `updateReminderApiV1RemindersReminderIdPost(request: Reminders.UpdateReminderApiV1RemindersReminderIdPostRequest, options?: RequestOptions): ApiPromise<NotificationSyncView, Reminders.UpdateReminderApiV1RemindersReminderIdPostError>`
- **Wire**: `POST /api/v1/reminders/{reminder_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotificationSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `Reminders.UpdateReminderApiV1RemindersReminderIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reminders.UpdateReminderApiV1RemindersReminderIdPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reminderId` | `path` | `reminder_id` | `string` | yes |
| `body` | `body` | — | `Body3` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body3` | `body3Schema` | `src/models/body3.ts` |
| `NotificationSyncView` | `notificationSyncViewSchema` | `src/models/notification-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

