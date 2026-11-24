<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserTaskLists — operations

Accessor: `client.userTaskLists` · Source: `src/resources/user-task-lists.ts` · 2 operations · Request and error types: namespace `UserTaskLists`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getUserTaskList

- **Signature**: `getUserTaskList(request: UserTaskLists.GetUserTaskListRequest, options?: RequestOptions): ApiPromise<UserTaskListsResponse, UserTaskLists.GetUserTaskListError>`
- **Wire**: `GET /user_task_lists/{user_task_list_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserTaskListsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `UserTaskLists.GetUserTaskListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserTaskLists.GetUserTaskListRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `userTaskListGid` | `path` | `user_task_list_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserTaskListsResponse` | `userTaskListsResponseSchema` | `src/models/user-task-lists-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getUserTaskListForUser

- **Signature**: `getUserTaskListForUser(request: UserTaskLists.GetUserTaskListForUserRequest, options?: RequestOptions): ApiPromise<UsersUserTaskListResponse, UserTaskLists.GetUserTaskListForUserError>`
- **Wire**: `GET /users/{user_gid}/user_task_list`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersUserTaskListResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `UserTaskLists.GetUserTaskListForUserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `UserTaskLists.GetUserTaskListForUserRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `userGid` | `path` | `user_gid` | `string` | yes | — |
| `workspace` | `query` | — | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersUserTaskListResponse` | `usersUserTaskListResponseSchema` | `src/models/users-user-task-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

