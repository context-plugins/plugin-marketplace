<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stories — operations

Accessor: `client.stories` · Source: `src/resources/stories.ts` · 5 operations · Request and error types: namespace `Stories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createStoryForTask

- **Signature**: `createStoryForTask(request: Stories.CreateStoryForTaskRequest, options?: RequestOptions): ApiPromise<TasksStoriesResponse1, Stories.CreateStoryForTaskError>`
- **Wire**: `POST /tasks/{task_gid}/stories`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TasksStoriesResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Stories.CreateStoryForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.CreateStoryForTaskRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `TasksStoriesRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksStoriesRequest` | `tasksStoriesRequestSchema` | `src/models/tasks-stories-request.ts` |
| `TasksStoriesResponse1` | `tasksStoriesResponse1Schema` | `src/models/tasks-stories-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteStory

- **Signature**: `deleteStory(request: Stories.DeleteStoryRequest, options?: RequestOptions): ApiPromise<StoriesResponse2, Stories.DeleteStoryError>`
- **Wire**: `DELETE /stories/{story_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoriesResponse2`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Stories.DeleteStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.DeleteStoryRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `storyGid` | `path` | `story_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoriesResponse2` | `storiesResponse2Schema` | `src/models/stories-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getStoriesForTask

- **Signature**: `getStoriesForTask(request: Stories.GetStoriesForTaskRequest, options?: RequestOptions): ApiPromise<TasksStoriesResponse, Stories.GetStoriesForTaskError>`
- **Wire**: `GET /tasks/{task_gid}/stories`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TasksStoriesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Stories.GetStoriesForTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.GetStoriesForTaskRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `taskGid` | `path` | `task_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TasksStoriesResponse` | `tasksStoriesResponseSchema` | `src/models/tasks-stories-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getStory

- **Signature**: `getStory(request: Stories.GetStoryRequest, options?: RequestOptions): ApiPromise<StoriesResponse, Stories.GetStoryError>`
- **Wire**: `GET /stories/{story_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoriesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Stories.GetStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.GetStoryRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `storyGid` | `path` | `story_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoriesResponse` | `storiesResponseSchema` | `src/models/stories-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateStory

- **Signature**: `updateStory(request: Stories.UpdateStoryRequest, options?: RequestOptions): ApiPromise<StoriesResponse, Stories.UpdateStoryError>`
- **Wire**: `PUT /stories/{story_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoriesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `Stories.UpdateStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.UpdateStoryRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `storyGid` | `path` | `story_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `StoriesRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoriesRequest` | `storiesRequestSchema` | `src/models/stories-request.ts` |
| `StoriesResponse` | `storiesResponseSchema` | `src/models/stories-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

