<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stories — operations

Accessor: `client.stories` · Source: `src/resources/stories.ts` · 23 operations · Request and error types: namespace `Stories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createMultipleStories

- **Signature**: `createMultipleStories(request: Stories.CreateMultipleStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], Stories.CreateMultipleStoriesError>`
- **Wire**: `POST /api/v3/stories/bulk`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.CreateMultipleStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.CreateMultipleStoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateStories` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStories` | `createStoriesSchema` | `src/models/create-stories.ts` |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |

### createStory

- **Signature**: `createStory(request: Stories.CreateStoryRequest, options?: RequestOptions): ApiPromise<Story, Stories.CreateStoryError>`
- **Wire**: `POST /api/v3/stories`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Story`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.CreateStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.CreateStoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateStoryParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStoryParams` | `createStoryParamsSchema` | `src/models/create-story-params.ts` |
| `Story` | `storySchema` | `src/models/story.ts` |

### createStoryComment

- **Signature**: `createStoryComment(request: Stories.CreateStoryCommentRequest, options?: RequestOptions): ApiPromise<StoryComment, Stories.CreateStoryCommentError>`
- **Wire**: `POST /api/v3/stories/{story-public-id}/comments`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryComment`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.CreateStoryCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.CreateStoryCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `body` | `body` | — | `CreateStoryComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStoryComment` | `createStoryCommentSchema` | `src/models/create-story-comment.ts` |
| `StoryComment` | `storyCommentSchema` | `src/models/story-comment.ts` |

### createStoryFromTemplate

- **Signature**: `createStoryFromTemplate(request: Stories.CreateStoryFromTemplateRequest, options?: RequestOptions): ApiPromise<Story, Stories.CreateStoryFromTemplateError>`
- **Wire**: `POST /api/v3/stories/from-template`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Story`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.CreateStoryFromTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.CreateStoryFromTemplateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateStoryFromTemplateParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateStoryFromTemplateParams` | `createStoryFromTemplateParamsSchema` | `src/models/create-story-from-template-params.ts` |
| `Story` | `storySchema` | `src/models/story.ts` |

### createStoryReaction

- **Signature**: `createStoryReaction(request: Stories.CreateStoryReactionRequest, options?: RequestOptions): ApiPromise<StoryReaction[], Stories.CreateStoryReactionError>`
- **Wire**: `POST /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryReaction[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.CreateStoryReactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.CreateStoryReactionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |
| `body` | `body` | — | `CreateOrDeleteStoryReaction` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrDeleteStoryReaction` | `createOrDeleteStoryReactionSchema` | `src/models/create-or-delete-story-reaction.ts` |
| `StoryReaction` | `storyReactionSchema` | `src/models/story-reaction.ts` |

### createTask

- **Signature**: `createTask(request: Stories.CreateTaskRequest, options?: RequestOptions): ApiPromise<Task, Stories.CreateTaskError>`
- **Wire**: `POST /api/v3/stories/{story-public-id}/tasks`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Task`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.CreateTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.CreateTaskRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `body` | `body` | — | `CreateTask` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTask` | `createTaskSchema` | `src/models/create-task.ts` |
| `Task` | `taskSchema` | `src/models/task.ts` |

### deleteMultipleStories

- **Signature**: `deleteMultipleStories(request: Stories.DeleteMultipleStoriesRequest, options?: RequestOptions): ApiPromise<undefined, Stories.DeleteMultipleStoriesError>`
- **Wire**: `DELETE /api/v3/stories/bulk`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.DeleteMultipleStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.DeleteMultipleStoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteStories` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteStories` | `deleteStoriesSchema` | `src/models/delete-stories.ts` |

### deleteStory

- **Signature**: `deleteStory(request: Stories.DeleteStoryRequest, options?: RequestOptions): ApiPromise<undefined, Stories.DeleteStoryError>`
- **Wire**: `DELETE /api/v3/stories/{story-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.DeleteStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.DeleteStoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |

### deleteStoryComment

- **Signature**: `deleteStoryComment(request: Stories.DeleteStoryCommentRequest, options?: RequestOptions): ApiPromise<undefined, Stories.DeleteStoryCommentError>`
- **Wire**: `DELETE /api/v3/stories/{story-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.DeleteStoryCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.DeleteStoryCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |

### deleteStoryReaction

- **Signature**: `deleteStoryReaction(request: Stories.DeleteStoryReactionRequest, options?: RequestOptions): ApiPromise<undefined, Stories.DeleteStoryReactionError>`
- **Wire**: `DELETE /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.DeleteStoryReactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.DeleteStoryReactionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |
| `body` | `body` | — | `CreateOrDeleteStoryReaction` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrDeleteStoryReaction` | `createOrDeleteStoryReactionSchema` | `src/models/create-or-delete-story-reaction.ts` |

### deleteTask

- **Signature**: `deleteTask(request: Stories.DeleteTaskRequest, options?: RequestOptions): ApiPromise<undefined, Stories.DeleteTaskError>`
- **Wire**: `DELETE /api/v3/stories/{story-public-id}/tasks/{task-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.DeleteTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.DeleteTaskRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `taskPublicId` | `path` | `task-public-id` | `number` | yes |

### getStory

- **Signature**: `getStory(request: Stories.GetStoryRequest, options?: RequestOptions): ApiPromise<Story, Stories.GetStoryError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Story`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.GetStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.GetStoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Story` | `storySchema` | `src/models/story.ts` |

### getStoryComment

- **Signature**: `getStoryComment(request: Stories.GetStoryCommentRequest, options?: RequestOptions): ApiPromise<StoryComment, Stories.GetStoryCommentError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoryComment`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.GetStoryCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.GetStoryCommentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoryComment` | `storyCommentSchema` | `src/models/story-comment.ts` |

### getTask

- **Signature**: `getTask(request: Stories.GetTaskRequest, options?: RequestOptions): ApiPromise<Task, Stories.GetTaskError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}/tasks/{task-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Task`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.GetTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.GetTaskRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `taskPublicId` | `path` | `task-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Task` | `taskSchema` | `src/models/task.ts` |

### listStoryComment

- **Signature**: `listStoryComment(request: Stories.ListStoryCommentRequest, options?: RequestOptions): ApiPromise<StoryComment[], Stories.ListStoryCommentError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}/comments`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoryComment[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.ListStoryCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.ListStoryCommentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoryComment` | `storyCommentSchema` | `src/models/story-comment.ts` |

### listStorySubTasks

- **Signature**: `listStorySubTasks(request: Stories.ListStorySubTasksRequest, options?: RequestOptions): ApiPromise<StorySlim[], Stories.ListStorySubTasksError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}/sub-tasks`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.ListStorySubTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.ListStorySubTasksRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |

### queryStories

- **Signature**: `queryStories(request: Stories.QueryStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], Stories.QueryStoriesError>`
- **Wire**: `POST /api/v3/stories/search`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.QueryStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.QueryStoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchStories` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchStories` | `searchStoriesSchema` | `src/models/search-stories.ts` |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |

### storyHistory

- **Signature**: `storyHistory(request: Stories.StoryHistoryRequest, options?: RequestOptions): ApiPromise<History[], Stories.StoryHistoryError>`
- **Wire**: `GET /api/v3/stories/{story-public-id}/history`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `History[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.StoryHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.StoryHistoryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `History` | `historySchema` | `src/models/history.ts` |

### unlinkCommentThreadFromSlack

- **Signature**: `unlinkCommentThreadFromSlack(request: Stories.UnlinkCommentThreadFromSlackRequest, options?: RequestOptions): ApiPromise<StoryComment, Stories.UnlinkCommentThreadFromSlackError>`
- **Wire**: `POST /api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryComment`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.UnlinkCommentThreadFromSlackError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.UnlinkCommentThreadFromSlackRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StoryComment` | `storyCommentSchema` | `src/models/story-comment.ts` |

### updateMultipleStories

- **Signature**: `updateMultipleStories(request: Stories.UpdateMultipleStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], Stories.UpdateMultipleStoriesError>`
- **Wire**: `PUT /api/v3/stories/bulk`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.UpdateMultipleStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.UpdateMultipleStoriesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateStories` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStories` | `updateStoriesSchema` | `src/models/update-stories.ts` |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |

### updateStory

- **Signature**: `updateStory(request: Stories.UpdateStoryRequest, options?: RequestOptions): ApiPromise<Story, Stories.UpdateStoryError>`
- **Wire**: `PUT /api/v3/stories/{story-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Story`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.UpdateStoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.UpdateStoryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateStory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStory` | `updateStorySchema` | `src/models/update-story.ts` |
| `Story` | `storySchema` | `src/models/story.ts` |

### updateStoryComment

- **Signature**: `updateStoryComment(request: Stories.UpdateStoryCommentRequest, options?: RequestOptions): ApiPromise<StoryComment, Stories.UpdateStoryCommentError>`
- **Wire**: `PUT /api/v3/stories/{story-public-id}/comments/{comment-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StoryComment`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.UpdateStoryCommentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.UpdateStoryCommentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `commentPublicId` | `path` | `comment-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateStoryComment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateStoryComment` | `updateStoryCommentSchema` | `src/models/update-story-comment.ts` |
| `StoryComment` | `storyCommentSchema` | `src/models/story-comment.ts` |

### updateTask

- **Signature**: `updateTask(request: Stories.UpdateTaskRequest, options?: RequestOptions): ApiPromise<Task, Stories.UpdateTaskError>`
- **Wire**: `PUT /api/v3/stories/{story-public-id}/tasks/{task-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Task`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Stories.UpdateTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Stories.UpdateTaskRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `storyPublicId` | `path` | `story-public-id` | `number` | yes |
| `taskPublicId` | `path` | `task-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateTask` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTask` | `updateTaskSchema` | `src/models/update-task.ts` |
| `Task` | `taskSchema` | `src/models/task.ts` |

