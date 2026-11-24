<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stories — operations

Accessor: `client.stories` · Source: `shortcut/apis/stories.py` · 23 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.stories.create_multiple_stories

- **Route**: `POST /api/v3/stories/bulk`
- **Auth**: `api_token`
- **Signature**: `def create_multiple_stories(body: CreateStories | CreateStoriesDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[StorySlim]`
- **Returns (raw)**: `ApiResult[list[StorySlim], CreateMultipleStoriesErrorBody]`
- **Error**: `CreateMultipleStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateStories` | `shortcut/models/create_stories.py` |
| `CreateStoriesDict` | `shortcut/models/create_stories.py` |
| `StorySlim` | `shortcut/models/story_slim.py` |
| `CreateMultipleStoriesErrorBody` | `shortcut/errors/create_multiple_stories_error.py` |

### client.stories.create_story

- **Route**: `POST /api/v3/stories`
- **Auth**: `api_token`
- **Signature**: `def create_story(body: CreateStoryParams | CreateStoryParamsDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Story`
- **Returns (raw)**: `ApiResult[Story, CreateStoryErrorBody]`
- **Error**: `CreateStoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateStoryParams` | `shortcut/models/create_story_params.py` |
| `CreateStoryParamsDict` | `shortcut/models/create_story_params.py` |
| `Story` | `shortcut/models/story.py` |
| `CreateStoryErrorBody` | `shortcut/errors/create_story_error.py` |

### client.stories.create_story_comment

- **Route**: `POST /api/v3/stories/{story-public-id}/comments`
- **Auth**: `api_token`
- **Signature**: `def create_story_comment(story_public_id: int, body: CreateStoryComment | CreateStoryCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `body`
- **Params**: `story_public_id` — path `story-public-id` · `body` — JSON body
- **Returns (parsed)**: `StoryComment`
- **Returns (raw)**: `ApiResult[StoryComment, CreateStoryCommentErrorBody]`
- **Error**: `CreateStoryCommentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateStoryComment` | `shortcut/models/create_story_comment.py` |
| `CreateStoryCommentDict` | `shortcut/models/create_story_comment.py` |
| `StoryComment` | `shortcut/models/story_comment.py` |
| `CreateStoryCommentErrorBody` | `shortcut/errors/create_story_comment_error.py` |

### client.stories.create_story_from_template

- **Route**: `POST /api/v3/stories/from-template`
- **Auth**: `api_token`
- **Signature**: `def create_story_from_template(body: CreateStoryFromTemplateParams | CreateStoryFromTemplateParamsDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Story`
- **Returns (raw)**: `ApiResult[Story, CreateStoryFromTemplateErrorBody]`
- **Error**: `CreateStoryFromTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateStoryFromTemplateParams` | `shortcut/models/create_story_from_template_params.py` |
| `CreateStoryFromTemplateParamsDict` | `shortcut/models/create_story_from_template_params.py` |
| `Story` | `shortcut/models/story.py` |
| `CreateStoryFromTemplateErrorBody` | `shortcut/errors/create_story_from_template_error.py` |

### client.stories.create_story_reaction

- **Route**: `POST /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`
- **Auth**: `api_token`
- **Signature**: `def create_story_reaction(story_public_id: int, comment_public_id: int, body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `comment_public_id`, `body`
- **Params**: `story_public_id` — path `story-public-id` · `comment_public_id` — path `comment-public-id` · `body` — JSON body
- **Returns (parsed)**: `list[StoryReaction]`
- **Returns (raw)**: `ApiResult[list[StoryReaction], CreateStoryReactionErrorBody]`
- **Error**: `CreateStoryReactionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateOrDeleteStoryReaction` | `shortcut/models/create_or_delete_story_reaction.py` |
| `CreateOrDeleteStoryReactionDict` | `shortcut/models/create_or_delete_story_reaction.py` |
| `StoryReaction` | `shortcut/models/story_reaction.py` |
| `CreateStoryReactionErrorBody` | `shortcut/errors/create_story_reaction_error.py` |

### client.stories.create_task

- **Route**: `POST /api/v3/stories/{story-public-id}/tasks`
- **Auth**: `api_token`
- **Signature**: `def create_task(story_public_id: int, body: CreateTask | CreateTaskDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `body`
- **Params**: `story_public_id` — path `story-public-id` · `body` — JSON body
- **Returns (parsed)**: `Task`
- **Returns (raw)**: `ApiResult[Task, CreateTaskErrorBody]`
- **Error**: `CreateTaskErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateTask` | `shortcut/models/create_task.py` |
| `CreateTaskDict` | `shortcut/models/create_task.py` |
| `Task` | `shortcut/models/task.py` |
| `CreateTaskErrorBody` | `shortcut/errors/create_task_error.py` |

### client.stories.delete_multiple_stories

- **Route**: `DELETE /api/v3/stories/bulk`
- **Auth**: `api_token`
- **Signature**: `def delete_multiple_stories(body: DeleteStories | DeleteStoriesDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteMultipleStoriesErrorBody]`
- **Error**: `DeleteMultipleStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteStories` | `shortcut/models/delete_stories.py` |
| `DeleteStoriesDict` | `shortcut/models/delete_stories.py` |
| `DeleteMultipleStoriesErrorBody` | `shortcut/errors/delete_multiple_stories_error.py` |

### client.stories.delete_story

- **Route**: `DELETE /api/v3/stories/{story-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_story(story_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`
- **Params**: `story_public_id` — path `story-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteStoryErrorBody]`
- **Error**: `DeleteStoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteStoryErrorBody` | `shortcut/errors/delete_story_error.py` |

### client.stories.delete_story_comment

- **Route**: `DELETE /api/v3/stories/{story-public-id}/comments/{comment-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_story_comment(story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `comment_public_id`
- **Params**: `story_public_id` — path `story-public-id` · `comment_public_id` — path `comment-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteStoryCommentErrorBody]`
- **Error**: `DeleteStoryCommentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteStoryCommentErrorBody` | `shortcut/errors/delete_story_comment_error.py` |

### client.stories.delete_story_reaction

- **Route**: `DELETE /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions`
- **Auth**: `api_token`
- **Signature**: `def delete_story_reaction(story_public_id: int, comment_public_id: int, body: CreateOrDeleteStoryReaction | CreateOrDeleteStoryReactionDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `comment_public_id`, `body`
- **Params**: `story_public_id` — path `story-public-id` · `comment_public_id` — path `comment-public-id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteStoryReactionErrorBody]`
- **Error**: `DeleteStoryReactionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateOrDeleteStoryReaction` | `shortcut/models/create_or_delete_story_reaction.py` |
| `CreateOrDeleteStoryReactionDict` | `shortcut/models/create_or_delete_story_reaction.py` |
| `DeleteStoryReactionErrorBody` | `shortcut/errors/delete_story_reaction_error.py` |

### client.stories.delete_task

- **Route**: `DELETE /api/v3/stories/{story-public-id}/tasks/{task-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_task(story_public_id: int, task_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `task_public_id`
- **Params**: `story_public_id` — path `story-public-id` · `task_public_id` — path `task-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteTaskErrorBody]`
- **Error**: `DeleteTaskErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteTaskErrorBody` | `shortcut/errors/delete_task_error.py` |

### client.stories.get_story

- **Route**: `GET /api/v3/stories/{story-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_story(story_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`
- **Params**: `story_public_id` — path `story-public-id`
- **Returns (parsed)**: `Story`
- **Returns (raw)**: `ApiResult[Story, GetStoryErrorBody]`
- **Error**: `GetStoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Story` | `shortcut/models/story.py` |
| `GetStoryErrorBody` | `shortcut/errors/get_story_error.py` |

### client.stories.get_story_comment

- **Route**: `GET /api/v3/stories/{story-public-id}/comments/{comment-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_story_comment(story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `comment_public_id`
- **Params**: `story_public_id` — path `story-public-id` · `comment_public_id` — path `comment-public-id`
- **Returns (parsed)**: `StoryComment`
- **Returns (raw)**: `ApiResult[StoryComment, GetStoryCommentErrorBody]`
- **Error**: `GetStoryCommentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StoryComment` | `shortcut/models/story_comment.py` |
| `GetStoryCommentErrorBody` | `shortcut/errors/get_story_comment_error.py` |

### client.stories.get_task

- **Route**: `GET /api/v3/stories/{story-public-id}/tasks/{task-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_task(story_public_id: int, task_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `task_public_id`
- **Params**: `story_public_id` — path `story-public-id` · `task_public_id` — path `task-public-id`
- **Returns (parsed)**: `Task`
- **Returns (raw)**: `ApiResult[Task, GetTaskErrorBody]`
- **Error**: `GetTaskErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Task` | `shortcut/models/task.py` |
| `GetTaskErrorBody` | `shortcut/errors/get_task_error.py` |

### client.stories.list_story_comment

- **Route**: `GET /api/v3/stories/{story-public-id}/comments`
- **Auth**: `api_token`
- **Signature**: `def list_story_comment(story_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`
- **Params**: `story_public_id` — path `story-public-id`
- **Returns (parsed)**: `list[StoryComment]`
- **Returns (raw)**: `ApiResult[list[StoryComment], ListStoryCommentErrorBody]`
- **Error**: `ListStoryCommentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StoryComment` | `shortcut/models/story_comment.py` |
| `ListStoryCommentErrorBody` | `shortcut/errors/list_story_comment_error.py` |

### client.stories.list_story_sub_tasks

- **Route**: `GET /api/v3/stories/{story-public-id}/sub-tasks`
- **Auth**: `api_token`
- **Signature**: `def list_story_sub_tasks(story_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`
- **Params**: `story_public_id` — path `story-public-id`
- **Returns (parsed)**: `list[StorySlim]`
- **Returns (raw)**: `ApiResult[list[StorySlim], ListStorySubTasksErrorBody]`
- **Error**: `ListStorySubTasksErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StorySlim` | `shortcut/models/story_slim.py` |
| `ListStorySubTasksErrorBody` | `shortcut/errors/list_story_sub_tasks_error.py` |

### client.stories.query_stories

- **Route**: `POST /api/v3/stories/search`
- **Auth**: `api_token`
- **Signature**: `def query_stories(body: SearchStories | SearchStoriesDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[StorySlim]`
- **Returns (raw)**: `ApiResult[list[StorySlim], QueryStoriesErrorBody]`
- **Error**: `QueryStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `SearchStories` | `shortcut/models/search_stories.py` |
| `SearchStoriesDict` | `shortcut/models/search_stories.py` |
| `StorySlim` | `shortcut/models/story_slim.py` |
| `QueryStoriesErrorBody` | `shortcut/errors/query_stories_error.py` |

### client.stories.story_history

- **Route**: `GET /api/v3/stories/{story-public-id}/history`
- **Auth**: `api_token`
- **Signature**: `def story_history(story_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`
- **Params**: `story_public_id` — path `story-public-id`
- **Returns (parsed)**: `list[History]`
- **Returns (raw)**: `ApiResult[list[History], StoryHistoryErrorBody]`
- **Error**: `StoryHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `History` | `shortcut/models/history.py` |
| `StoryHistoryErrorBody` | `shortcut/errors/story_history_error.py` |

### client.stories.unlink_comment_thread_from_slack

- **Route**: `POST /api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack`
- **Auth**: `api_token`
- **Signature**: `def unlink_comment_thread_from_slack(story_public_id: int, comment_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `comment_public_id`
- **Params**: `story_public_id` — path `story-public-id` · `comment_public_id` — path `comment-public-id`
- **Returns (parsed)**: `StoryComment`
- **Returns (raw)**: `ApiResult[StoryComment, UnlinkCommentThreadFromSlackErrorBody]`
- **Error**: `UnlinkCommentThreadFromSlackErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StoryComment` | `shortcut/models/story_comment.py` |
| `UnlinkCommentThreadFromSlackErrorBody` | `shortcut/errors/unlink_comment_thread_from_slack_error.py` |

### client.stories.update_multiple_stories

- **Route**: `PUT /api/v3/stories/bulk`
- **Auth**: `api_token`
- **Signature**: `def update_multiple_stories(body: UpdateStories | UpdateStoriesDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[StorySlim]`
- **Returns (raw)**: `ApiResult[list[StorySlim], UpdateMultipleStoriesErrorBody]`
- **Error**: `UpdateMultipleStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateStories` | `shortcut/models/update_stories.py` |
| `UpdateStoriesDict` | `shortcut/models/update_stories.py` |
| `StorySlim` | `shortcut/models/story_slim.py` |
| `UpdateMultipleStoriesErrorBody` | `shortcut/errors/update_multiple_stories_error.py` |

### client.stories.update_story

- **Route**: `PUT /api/v3/stories/{story-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_story(story_public_id: int, body: UpdateStory | UpdateStoryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `body`
- **Params**: `story_public_id` — path `story-public-id` · `body` — JSON body
- **Returns (parsed)**: `Story`
- **Returns (raw)**: `ApiResult[Story, UpdateStoryErrorBody]`
- **Error**: `UpdateStoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateStory` | `shortcut/models/update_story.py` |
| `UpdateStoryDict` | `shortcut/models/update_story.py` |
| `Story` | `shortcut/models/story.py` |
| `UpdateStoryErrorBody` | `shortcut/errors/update_story_error.py` |

### client.stories.update_story_comment

- **Route**: `PUT /api/v3/stories/{story-public-id}/comments/{comment-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_story_comment(story_public_id: int, comment_public_id: int, body: UpdateStoryComment | UpdateStoryCommentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `comment_public_id`, `body`
- **Params**: `story_public_id` — path `story-public-id` · `comment_public_id` — path `comment-public-id` · `body` — JSON body
- **Returns (parsed)**: `StoryComment`
- **Returns (raw)**: `ApiResult[StoryComment, UpdateStoryCommentErrorBody]`
- **Error**: `UpdateStoryCommentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateStoryComment` | `shortcut/models/update_story_comment.py` |
| `UpdateStoryCommentDict` | `shortcut/models/update_story_comment.py` |
| `StoryComment` | `shortcut/models/story_comment.py` |
| `UpdateStoryCommentErrorBody` | `shortcut/errors/update_story_comment_error.py` |

### client.stories.update_task

- **Route**: `PUT /api/v3/stories/{story-public-id}/tasks/{task-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_task(story_public_id: int, task_public_id: int, body: UpdateTask | UpdateTaskDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `story_public_id`, `task_public_id`, `body`
- **Params**: `story_public_id` — path `story-public-id` · `task_public_id` — path `task-public-id` · `body` — JSON body
- **Returns (parsed)**: `Task`
- **Returns (raw)**: `ApiResult[Task, UpdateTaskErrorBody]`
- **Error**: `UpdateTaskErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateTask` | `shortcut/models/update_task.py` |
| `UpdateTaskDict` | `shortcut/models/update_task.py` |
| `Task` | `shortcut/models/task.py` |
| `UpdateTaskErrorBody` | `shortcut/errors/update_task_error.py` |

