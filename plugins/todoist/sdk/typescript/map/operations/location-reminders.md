<!-- Generated file — do not edit; regenerated with the SDK. -->

# LocationReminders — operations

Accessor: `client.locationReminders` · Source: `src/resources/location-reminders.ts` · 5 operations · Request and error types: namespace `LocationReminders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `todoist-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createLocationReminderApiV1LocationRemindersPost

- **Signature**: `createLocationReminderApiV1LocationRemindersPost(request: LocationReminders.CreateLocationReminderApiV1LocationRemindersPostRequest, options?: RequestOptions): ApiPromise<NotificationLocationSyncView, LocationReminders.CreateLocationReminderApiV1LocationRemindersPostError>`
- **Wire**: `POST /api/v1/location_reminders`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotificationLocationSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `LocationReminders.CreateLocationReminderApiV1LocationRemindersPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LocationReminders.CreateLocationReminderApiV1LocationRemindersPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Body16` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body16` | `body16Schema` | `src/models/body16.ts` |
| `NotificationLocationSyncView` | `notificationLocationSyncViewSchema` | `src/models/notification-location-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### deleteLocationReminderApiV1LocationRemindersReminderIdDelete

- **Signature**: `deleteLocationReminderApiV1LocationRemindersReminderIdDelete(request: LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError>`
- **Wire**: `DELETE /api/v1/location_reminders/{reminder_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LocationReminders.DeleteLocationReminderApiV1LocationRemindersReminderIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reminderId` | `path` | `reminder_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getLocationReminderApiV1LocationRemindersReminderIdGet

- **Signature**: `getLocationReminderApiV1LocationRemindersReminderIdGet(request: LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetRequest, options?: RequestOptions): ApiPromise<NotificationLocationSyncView, LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetError>`
- **Wire**: `GET /api/v1/location_reminders/{reminder_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationLocationSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LocationReminders.GetLocationReminderApiV1LocationRemindersReminderIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reminderId` | `path` | `reminder_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationLocationSyncView` | `notificationLocationSyncViewSchema` | `src/models/notification-location-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### getLocationRemindersApiV1LocationRemindersGet

- **Signature**: `getLocationRemindersApiV1LocationRemindersGet(request?: LocationReminders.GetLocationRemindersApiV1LocationRemindersGetRequest, options?: RequestOptions): ApiPromise<PaginatedList7, LocationReminders.GetLocationRemindersApiV1LocationRemindersGetError>`
- **Wire**: `GET /api/v1/location_reminders`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedList7`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `LocationReminders.GetLocationRemindersApiV1LocationRemindersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LocationReminders.GetLocationRemindersApiV1LocationRemindersGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `taskId` | `query` | `task_id` | `string` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaginatedList7` | `paginatedList7Schema` | `src/models/paginated-list7.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

### updateLocationReminderApiV1LocationRemindersReminderIdPost

- **Signature**: `updateLocationReminderApiV1LocationRemindersReminderIdPost(request: LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostRequest, options?: RequestOptions): ApiPromise<NotificationLocationSyncView, LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostError>`
- **Wire**: `POST /api/v1/location_reminders/{reminder_id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotificationLocationSyncView`
- **Error**: `TodoistApiError` with `kind: "api"`, an instance of `LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"todoistError"` [400] `TodoistError` · `"todoistError2"` [401] `TodoistError` · `"todoistError3"` [403] `TodoistError` · `"todoistError4"` [404] `TodoistError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `LocationReminders.UpdateLocationReminderApiV1LocationRemindersReminderIdPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reminderId` | `path` | `reminder_id` | `string` | yes |
| `body` | `body` | — | `Body31` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Body31` | `body31Schema` | `src/models/body31.ts` |
| `NotificationLocationSyncView` | `notificationLocationSyncViewSchema` | `src/models/notification-location-sync-view.ts` |
| `TodoistError` | `todoistErrorSchema` | `src/models/todoist-error.ts` |

