# IssueApi — operations

Accessor: `client.IssueApi` · Source: `Api/IssueApi.cs` · 72 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### IssueAddAssignees
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/assignees` (Server1)
- **Signature**: `IssueAddAssignees(string owner, string repo, long index, IssueAssigneesOption body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Issue`
- **Error**: `SdkException<IssueAddAssigneesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueAddLabel
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/labels` (Server1)
- **Signature**: `IssueAddLabel(string owner, string repo, long index, IssueLabelsOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Label>`
- **Error**: `SdkException<IssueAddLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueAddSubscription
- **HTTP**: `PUT /repos/{owner}/{repo}/issues/{index}/subscriptions/{user}` (Server1)
- **Signature**: `IssueAddSubscription(string owner, string repo, long index, string user, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueAddSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueAddTime
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/times` (Server1)
- **Signature**: `IssueAddTime(string owner, string repo, long index, AddTimeOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TrackedTime`
- **Error**: `SdkException<IssueAddTimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueCheckAssignee
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/assignees/{assignee}` (Server1)
- **Signature**: `IssueCheckAssignee(string owner, string repo, long index, string assignee, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueCheckAssigneeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueCheckSubscription
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/subscriptions/check` (Server1)
- **Signature**: `IssueCheckSubscription(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WatchInfo`
- **Error**: `SdkException<IssueCheckSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueClearLabels
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/labels` (Server1)
- **Signature**: `IssueClearLabels(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueClearLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueCreateComment
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/comments` (Server1)
- **Signature**: `IssueCreateComment(string owner, string repo, long index, CreateIssueCommentOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Comment`
- **Error**: `SdkException<IssueCreateCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueCreateIssue
- **HTTP**: `POST /repos/{owner}/{repo}/issues` (Server1)
- **Signature**: `IssueCreateIssue(string owner, string repo, CreateIssueOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Issue`
- **Error**: `SdkException<IssueCreateIssueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 412, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueCreateIssueAttachment
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/assets` (Server1)
- **Signature**: `IssueCreateIssueAttachment(string owner, string repo, long index, string? name, BinaryContent attachment, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `Attachment`
- **Error**: `SdkException<IssueCreateIssueAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404, 413, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueCreateIssueBlocking
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/blocks` (Server1)
- **Signature**: `IssueCreateIssueBlocking(string owner, string repo, string index, IssueMeta? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Issue`
- **Error**: `SdkException<IssueCreateIssueBlockingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueCreateIssueCommentAttachment
- **HTTP**: `POST /repos/{owner}/{repo}/issues/comments/{id}/assets` (Server1)
- **Signature**: `IssueCreateIssueCommentAttachment(string owner, string repo, long id, string? name, BinaryContent attachment, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `Attachment`
- **Error**: `SdkException<IssueCreateIssueCommentAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404, 413, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueCreateIssueDependencies
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/dependencies` (Server1)
- **Signature**: `IssueCreateIssueDependencies(string owner, string repo, string index, IssueMeta? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Issue`
- **Error**: `SdkException<IssueCreateIssueDependenciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueCreateLabel
- **HTTP**: `POST /repos/{owner}/{repo}/labels` (Server1)
- **Signature**: `IssueCreateLabel(string owner, string repo, CreateLabelOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Label`
- **Error**: `SdkException<IssueCreateLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueCreateMilestone
- **HTTP**: `POST /repos/{owner}/{repo}/milestones` (Server1)
- **Signature**: `IssueCreateMilestone(string owner, string repo, CreateMilestoneOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Milestone`
- **Error**: `SdkException<IssueCreateMilestoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDelete
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}` (Server1)
- **Signature**: `IssueDelete(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteComment
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/comments/{id}` (Server1)
- **Signature**: `IssueDeleteComment(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteCommentDeprecated
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/comments/{id}` (Server1)
- **Signature**: `IssueDeleteCommentDeprecated(string owner, string repo, int index, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteCommentDeprecatedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteCommentReaction
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/comments/{id}/reactions` (Server1)
- **Signature**: `IssueDeleteCommentReaction(string owner, string repo, long id, EditReactionOption? content, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `content` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteCommentReactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteIssueAttachment
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}` (Server1)
- **Signature**: `IssueDeleteIssueAttachment(string owner, string repo, long index, long attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteIssueAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteIssueCommentAttachment
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}` (Server1)
- **Signature**: `IssueDeleteIssueCommentAttachment(string owner, string repo, long id, long attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteIssueCommentAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteIssueReaction
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/reactions` (Server1)
- **Signature**: `IssueDeleteIssueReaction(string owner, string repo, long index, EditReactionOption? content, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `content` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteIssueReactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteLabel
- **HTTP**: `DELETE /repos/{owner}/{repo}/labels/{id}` (Server1)
- **Signature**: `IssueDeleteLabel(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteMilestone
- **HTTP**: `DELETE /repos/{owner}/{repo}/milestones/{id}` (Server1)
- **Signature**: `IssueDeleteMilestone(string owner, string repo, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteMilestoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteStopWatch
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/stopwatch/delete` (Server1)
- **Signature**: `IssueDeleteStopWatch(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteStopWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteSubscription
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/subscriptions/{user}` (Server1)
- **Signature**: `IssueDeleteSubscription(string owner, string repo, long index, string user, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteSubscriptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueDeleteTime
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/times/{id}` (Server1)
- **Signature**: `IssueDeleteTime(string owner, string repo, long index, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueDeleteTimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueEditComment
- **HTTP**: `PATCH /repos/{owner}/{repo}/issues/comments/{id}` (Server1)
- **Signature**: `IssueEditComment(string owner, string repo, long id, EditIssueCommentOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Comment`
- **Error**: `SdkException<IssueEditCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueEditCommentDeprecated
- **HTTP**: `PATCH /repos/{owner}/{repo}/issues/{index}/comments/{id}` (Server1)
- **Signature**: `IssueEditCommentDeprecated(string owner, string repo, int index, long id, EditIssueCommentOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Comment`
- **Error**: `SdkException<IssueEditCommentDeprecatedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueEditIssue
- **HTTP**: `PATCH /repos/{owner}/{repo}/issues/{index}` (Server1)
- **Signature**: `IssueEditIssue(string owner, string repo, long index, EditIssueOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Issue`
- **Error**: `SdkException<IssueEditIssueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 412] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueEditIssueAttachment
- **HTTP**: `PATCH /repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}` (Server1)
- **Signature**: `IssueEditIssueAttachment(string owner, string repo, long index, long attachmentId, EditAttachmentOptions? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachment`
- **Error**: `SdkException<IssueEditIssueAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueEditIssueCommentAttachment
- **HTTP**: `PATCH /repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}` (Server1)
- **Signature**: `IssueEditIssueCommentAttachment(string owner, string repo, long id, long attachmentId, EditAttachmentOptions? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Attachment`
- **Error**: `SdkException<IssueEditIssueCommentAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueEditIssueDeadline
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/deadline` (Server1)
- **Signature**: `IssueEditIssueDeadline(string owner, string repo, long index, EditDeadlineOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IssueDeadline`
- **Error**: `SdkException<IssueEditIssueDeadlineError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueEditLabel
- **HTTP**: `PATCH /repos/{owner}/{repo}/labels/{id}` (Server1)
- **Signature**: `IssueEditLabel(string owner, string repo, long id, EditLabelOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Label`
- **Error**: `SdkException<IssueEditLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueEditMilestone
- **HTTP**: `PATCH /repos/{owner}/{repo}/milestones/{id}` (Server1)
- **Signature**: `IssueEditMilestone(string owner, string repo, string id, EditMilestoneOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Milestone`
- **Error**: `SdkException<IssueEditMilestoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueGetComment
- **HTTP**: `GET /repos/{owner}/{repo}/issues/comments/{id}` (Server1)
- **Signature**: `IssueGetComment(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Comment`
- **Error**: `SdkException<IssueGetCommentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueGetCommentReactions
- **HTTP**: `GET /repos/{owner}/{repo}/issues/comments/{id}/reactions` (Server1)
- **Signature**: `IssueGetCommentReactions(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Reaction>`
- **Error**: `SdkException<IssueGetCommentReactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueGetComments
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/comments` (Server1)
- **Signature**: `IssueGetComments(string owner, string repo, long index, DateTimeOffset? since, DateTimeOffset? before, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `since` — nullable, no default → **must pass explicitly**
  - `before` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `since` ← `since`, `before` ← `before`
- **Returns**: `IReadOnlyList<Comment>`
- **Error**: `SdkException<IssueGetCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueGetCommentsAndTimeline
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/timeline` (Server1)
- **Signature**: `IssueGetCommentsAndTimeline(string owner, string repo, long index, DateTimeOffset? since, int? page, int? limit, DateTimeOffset? before, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`since` … `before`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `since` ← `since`, `page` ← `page`, `limit` ← `limit`, `before` ← `before`
- **Returns**: `IReadOnlyList<TimelineComment>`
- **Error**: `SdkException<IssueGetCommentsAndTimelineError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueGetIssue
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}` (Server1)
- **Signature**: `IssueGetIssue(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Issue`
- **Error**: `SdkException<IssueGetIssueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueGetIssueAttachment
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}` (Server1)
- **Signature**: `IssueGetIssueAttachment(string owner, string repo, long index, long attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachment`
- **Error**: `SdkException<IssueGetIssueAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueGetIssueCommentAttachment
- **HTTP**: `GET /repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}` (Server1)
- **Signature**: `IssueGetIssueCommentAttachment(string owner, string repo, long id, long attachmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Attachment`
- **Error**: `SdkException<IssueGetIssueCommentAttachmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueGetIssueReactions
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/reactions` (Server1)
- **Signature**: `IssueGetIssueReactions(string owner, string repo, long index, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Reaction>`
- **Error**: `SdkException<IssueGetIssueReactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueGetLabel
- **HTTP**: `GET /repos/{owner}/{repo}/labels/{id}` (Server1)
- **Signature**: `IssueGetLabel(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Label`
- **Error**: `SdkException<IssueGetLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueGetLabels
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/labels` (Server1)
- **Signature**: `IssueGetLabels(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Label>`
- **Error**: `SdkException<IssueGetLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueGetMilestone
- **HTTP**: `GET /repos/{owner}/{repo}/milestones/{id}` (Server1)
- **Signature**: `IssueGetMilestone(string owner, string repo, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Milestone`
- **Error**: `SdkException<IssueGetMilestoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueGetMilestonesList
- **HTTP**: `GET /repos/{owner}/{repo}/milestones` (Server1)
- **Signature**: `IssueGetMilestonesList(string owner, string repo, string? state, string? name, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`state` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `state` ← `state`, `name` ← `name`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Milestone>`
- **Error**: `SdkException<IssueGetMilestonesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueGetRepoComments
- **HTTP**: `GET /repos/{owner}/{repo}/issues/comments` (Server1)
- **Signature**: `IssueGetRepoComments(string owner, string repo, DateTimeOffset? since, DateTimeOffset? before, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`since` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `since` ← `since`, `before` ← `before`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Comment>`
- **Error**: `SdkException<IssueGetRepoCommentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueListBlocks
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/blocks` (Server1)
- **Signature**: `IssueListBlocks(string owner, string repo, string index, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Issue>`
- **Error**: `SdkException<IssueListBlocksError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueListIssueAttachments
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/assets` (Server1)
- **Signature**: `IssueListIssueAttachments(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Attachment>`
- **Error**: `SdkException<IssueListIssueAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueListIssueCommentAttachments
- **HTTP**: `GET /repos/{owner}/{repo}/issues/comments/{id}/assets` (Server1)
- **Signature**: `IssueListIssueCommentAttachments(string owner, string repo, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Attachment>`
- **Error**: `SdkException<IssueListIssueCommentAttachmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueListIssueDependencies
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/dependencies` (Server1)
- **Signature**: `IssueListIssueDependencies(string owner, string repo, string index, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Issue>`
- **Error**: `SdkException<IssueListIssueDependenciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueListIssues
- **HTTP**: `GET /repos/{owner}/{repo}/issues` (Server1)
- **Signature**: `IssueListIssues(string owner, string repo, State9? state, string? labels, string? q, Type5? type, string? milestones, DateTimeOffset? since, DateTimeOffset? before, string? createdBy, string? assignedBy, string? mentionedBy, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`state` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `state` ← `state`, `labels` ← `labels`, `q` ← `q`, `type` ← `type`, `milestones` ← `milestones`, `since` ← `since`, `before` ← `before`, `created_by` ← `createdBy`, `assigned_by` ← `assignedBy`, `mentioned_by` ← `mentionedBy`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Issue>`
- **Error**: `SdkException<IssueListIssuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueListLabels
- **HTTP**: `GET /repos/{owner}/{repo}/labels` (Server1)
- **Signature**: `IssueListLabels(string owner, string repo, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Label>`
- **Error**: `SdkException<IssueListLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueLockIssue
- **HTTP**: `PUT /repos/{owner}/{repo}/issues/{index}/lock` (Server1)
- **Signature**: `IssueLockIssue(string owner, string repo, long index, LockIssueOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueLockIssueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssuePostCommentReaction
- **HTTP**: `POST /repos/{owner}/{repo}/issues/comments/{id}/reactions` (Server1)
- **Signature**: `IssuePostCommentReaction(string owner, string repo, long id, EditReactionOption? content, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `content` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Reaction`
- **Error**: `SdkException<IssuePostCommentReactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssuePostIssueReaction
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/reactions` (Server1)
- **Signature**: `IssuePostIssueReaction(string owner, string repo, long index, EditReactionOption? content, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `content` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Reaction`
- **Error**: `SdkException<IssuePostIssueReactionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueRemoveAssignees
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/assignees` (Server1)
- **Signature**: `IssueRemoveAssignees(string owner, string repo, long index, IssueAssigneesOption body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Issue`
- **Error**: `SdkException<IssueRemoveAssigneesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueRemoveIssueBlocking
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/blocks` (Server1)
- **Signature**: `IssueRemoveIssueBlocking(string owner, string repo, string index, IssueMeta? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Issue`
- **Error**: `SdkException<IssueRemoveIssueBlockingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueRemoveIssueDependencies
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/dependencies` (Server1)
- **Signature**: `IssueRemoveIssueDependencies(string owner, string repo, string index, IssueMeta? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Issue`
- **Error**: `SdkException<IssueRemoveIssueDependenciesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 423] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueRemoveLabel
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/labels/{id}` (Server1)
- **Signature**: `IssueRemoveLabel(string owner, string repo, long index, long id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueRemoveLabelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueReplaceLabels
- **HTTP**: `PUT /repos/{owner}/{repo}/issues/{index}/labels` (Server1)
- **Signature**: `IssueReplaceLabels(string owner, string repo, long index, IssueLabelsOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Label>`
- **Error**: `SdkException<IssueReplaceLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueResetTime
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/times` (Server1)
- **Signature**: `IssueResetTime(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueResetTimeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueSearchIssues
- **HTTP**: `GET /repos/issues/search` (Server1)
- **Signature**: `IssueSearchIssues(State9? state, string? labels, string? milestones, string? q, Type5? type, DateTimeOffset? since, DateTimeOffset? before, string? owner, string? createdBy, string? team, int? limit, bool? assigned = false, bool? created = false, bool? mentioned = false, bool? reviewRequested = false, bool? reviewed = false, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`state` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `assigned` = false, `created` = false, `mentioned` = false, `reviewRequested` = false, `reviewed` = false, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `state` ← `state`, `labels` ← `labels`, `milestones` ← `milestones`, `q` ← `q`, `type` ← `type`, `since` ← `since`, `before` ← `before`, `assigned` ← `assigned`, `created` ← `created`, `mentioned` ← `mentioned`, `review_requested` ← `reviewRequested`, `reviewed` ← `reviewed`, `owner` ← `owner`, `created_by` ← `createdBy`, `team` ← `team`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Issue>`
- **Error**: `SdkException<IssueSearchIssuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueStartStopWatch
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/stopwatch/start` (Server1)
- **Signature**: `IssueStartStopWatch(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueStartStopWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueStopStopWatch
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/stopwatch/stop` (Server1)
- **Signature**: `IssueStopStopWatch(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueStopStopWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404, 409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IssueSubscriptions
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/subscriptions` (Server1)
- **Signature**: `IssueSubscriptions(string owner, string repo, long index, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<User>`
- **Error**: `SdkException<IssueSubscriptionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueTrackedTimes
- **HTTP**: `GET /repos/{owner}/{repo}/issues/{index}/times` (Server1)
- **Signature**: `IssueTrackedTimes(string owner, string repo, long index, string? user, DateTimeOffset? since, DateTimeOffset? before, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`user` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `user` ← `user`, `since` ← `since`, `before` ← `before`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<TrackedTime>`
- **Error**: `SdkException<IssueTrackedTimesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### IssueUnlockIssue
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/lock` (Server1)
- **Signature**: `IssueUnlockIssue(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<IssueUnlockIssueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MoveIssuePin
- **HTTP**: `PATCH /repos/{owner}/{repo}/issues/{index}/pin/{position}` (Server1)
- **Signature**: `MoveIssuePin(string owner, string repo, long index, long position, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<MoveIssuePinError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PinIssue
- **HTTP**: `POST /repos/{owner}/{repo}/issues/{index}/pin` (Server1)
- **Signature**: `PinIssue(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PinIssueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnpinIssue
- **HTTP**: `DELETE /repos/{owner}/{repo}/issues/{index}/pin` (Server1)
- **Signature**: `UnpinIssue(string owner, string repo, long index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnpinIssueError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
