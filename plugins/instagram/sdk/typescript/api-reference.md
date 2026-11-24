# Reference

> Source: [InstagramClient](src/client.ts)

## Comments

> Source: [Comments](src/resources/comments.ts)

<details>
<summary><code>createComment(request: Comments.CreateCommentRequest, options?: RequestOptions): ApiPromise&lt;CommentsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a comment on an Instagram media object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.createComment({
    mediaId: "some example string",
    body: { message: "some example string", accessToken: "some example string" },
  });
  // TODO: Handle 'response' of type CommentsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .createComment({
    mediaId: "some example string",
    body: { message: "some example string", accessToken: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommentsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mediaId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CommentsRequest](src/models/comments-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.createComment(request)`

- **OnSuccess**: <code>[CommentsResponse](src/models/comments-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.comments.createComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommentsResponse, ApiError&gt;</code>, with `result.value` of type <code>[CommentsResponse](src/models/comments-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCommentReply(request: Comments.CreateCommentReplyRequest, options?: RequestOptions): ApiPromise&lt;RepliesResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reply to a comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.createCommentReply({
    commentId: "some example string",
    body: { message: "some example string", accessToken: "some example string" },
  });
  // TODO: Handle 'response' of type RepliesResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .createCommentReply({
    commentId: "some example string",
    body: { message: "some example string", accessToken: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RepliesResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>string</code> | - |
| <code>body</code> | <code>[RepliesRequest](src/models/replies-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.createCommentReply(request)`

- **OnSuccess**: <code>[RepliesResponse](src/models/replies-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.comments.createCommentReply(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RepliesResponse, ApiError&gt;</code>, with `result.value` of type <code>[RepliesResponse](src/models/replies-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteComment(request: Comments.DeleteCommentRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a comment on your media.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.deleteComment({
    commentId: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .deleteComment({ commentId: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.deleteComment(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.comments.deleteComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, ApiError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getComment(request: Comments.GetCommentRequest, options?: RequestOptions): ApiPromise&lt;Comment, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get fields on an Instagram comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.getComment({
    commentId: "some example string",
    accessToken: "some example string",
    fields: "id,text,username,timestamp,like_count,hidden",
  });
  // TODO: Handle 'response' of type Comment
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .getComment({
    commentId: "some example string",
    accessToken: "some example string",
    fields: "id,text,username,timestamp,like_count,hidden",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Comment
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.getComment(request)`

- **OnSuccess**: <code>[Comment](src/models/comment.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.comments.getComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Comment, ApiError&gt;</code>, with `result.value` of type <code>[Comment](src/models/comment.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCommentReplies(request: Comments.GetCommentRepliesRequest, options?: RequestOptions): ApiPromise&lt;CommentList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get replies to a comment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.getCommentReplies({
    commentId: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type CommentList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .getCommentReplies({ commentId: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommentList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.getCommentReplies(request)`

- **OnSuccess**: <code>[CommentList](src/models/comment-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.comments.getCommentReplies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommentList, ApiError&gt;</code>, with `result.value` of type <code>[CommentList](src/models/comment-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMediaComments(request: Comments.GetMediaCommentsRequest, options?: RequestOptions): ApiPromise&lt;CommentList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get comments on an Instagram media object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.getMediaComments({
    mediaId: "some example string",
    accessToken: "some example string",
    fields: "id,text,username,timestamp,like_count",
  });
  // TODO: Handle 'response' of type CommentList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments
  .getMediaComments({
    mediaId: "some example string",
    accessToken: "some example string",
    fields: "id,text,username,timestamp,like_count",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CommentList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mediaId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.getMediaComments(request)`

- **OnSuccess**: <code>[CommentList](src/models/comment-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.comments.getMediaComments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CommentList, ApiError&gt;</code>, with `result.value` of type <code>[CommentList](src/models/comment-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>hideComment(request: Comments.HideCommentRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Hide or unhide a comment on your media.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.comments.hideComment({ commentId: "some example string" });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.comments.hideComment({ commentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>commentId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[Request](src/models/request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.comments.hideComment(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.comments.hideComment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, ApiError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Hashtags

> Source: [Hashtags](src/resources/hashtags.ts)

<details>
<summary><code>getHashtagRecentMedia(request: Hashtags.GetHashtagRecentMediaRequest, options?: RequestOptions): ApiPromise&lt;MediaList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the most recently published media tagged with a specific hashtag.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hashtags.getHashtagRecentMedia({
    hashtagId: "some example string",
    userId: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type MediaList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hashtags
  .getHashtagRecentMedia({
    hashtagId: "some example string",
    userId: "some example string",
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MediaList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>hashtagId</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hashtags.getHashtagRecentMedia(request)`

- **OnSuccess**: <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.hashtags.getHashtagRecentMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MediaList, ApiError&gt;</code>, with `result.value` of type <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getHashtagTopMedia(request: Hashtags.GetHashtagTopMediaRequest, options?: RequestOptions): ApiPromise&lt;MediaList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the most popular media tagged with a specific hashtag.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hashtags.getHashtagTopMedia({
    hashtagId: "some example string",
    userId: "some example string",
    accessToken: "some example string",
    fields: "id,caption,media_type,permalink",
  });
  // TODO: Handle 'response' of type MediaList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hashtags
  .getHashtagTopMedia({
    hashtagId: "some example string",
    userId: "some example string",
    accessToken: "some example string",
    fields: "id,caption,media_type,permalink",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MediaList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>hashtagId</code> | <code>string</code> | - |
| <code>userId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hashtags.getHashtagTopMedia(request)`

- **OnSuccess**: <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.hashtags.getHashtagTopMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MediaList, ApiError&gt;</code>, with `result.value` of type <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchHashtag(request: Hashtags.SearchHashtagRequest, options?: RequestOptions): ApiPromise&lt;IgHashtagSearchResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for a hashtag by name and get its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.hashtags.searchHashtag({
    q: "photography",
    userId: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type IgHashtagSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.hashtags
  .searchHashtag({ q: "photography", userId: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IgHashtagSearchResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>string</code> | The hashtag to search for (without |
| <code>userId</code> | <code>string</code> | The ID of the user making the request. |
| <code>accessToken</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.hashtags.searchHashtag(request)`

- **OnSuccess**: <code>[IgHashtagSearchResponse](src/models/ig-hashtag-search-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.hashtags.searchHashtag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IgHashtagSearchResponse, ApiError&gt;</code>, with `result.value` of type <code>[IgHashtagSearchResponse](src/models/ig-hashtag-search-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/resources/insights.ts)

<details>
<summary><code>getMediaInsights(request: Insights.GetMediaInsightsRequest, options?: RequestOptions): ApiPromise&lt;InsightsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get social interaction metrics for a media object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getMediaInsights({
    mediaId: "some example string",
    metric: "impressions,reach,engagement,saved",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type InsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getMediaInsights({
    mediaId: "some example string",
    metric: "impressions,reach,engagement,saved",
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mediaId</code> | <code>string</code> | - |
| <code>metric</code> | <code>string</code> | Comma-separated list of metrics. |
| <code>accessToken</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getMediaInsights(request)`

- **OnSuccess**: <code>[InsightsResponse](src/models/insights-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.insights.getMediaInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsResponse, ApiError&gt;</code>, with `result.value` of type <code>[InsightsResponse](src/models/insights-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserInsights(request: Insights.GetUserInsightsRequest, options?: RequestOptions): ApiPromise&lt;InsightsResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get social interaction metrics for the account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insights.getUserInsights({
    userId: "some example string",
    metric: "impressions,reach,profile_views",
    period: Period.Day,
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type InsightsResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insights
  .getUserInsights({
    userId: "some example string",
    metric: "impressions,reach,profile_views",
    period: Period.Day,
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InsightsResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>metric</code> | <code>string</code> | Comma-separated list of metrics. |
| <code>period</code> | <code>[Period](src/models/period.ts)</code> | Time period for aggregation. |
| <code>accessToken</code> | <code>string</code> | - |
| <code>since?</code> | <code>number</code> | Unix timestamp for start of range. |
| <code>until?</code> | <code>number</code> | Unix timestamp for end of range. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insights.getUserInsights(request)`

- **OnSuccess**: <code>[InsightsResponse](src/models/insights-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.insights.getUserInsights(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InsightsResponse, ApiError&gt;</code>, with `result.value` of type <code>[InsightsResponse](src/models/insights-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## MediaApi

> Source: [MediaApi](src/resources/media-api.ts)

<details>
<summary><code>deleteMedia(request: MediaApi.DeleteMediaRequest, options?: RequestOptions): ApiPromise&lt;Response, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Instagram media object (post, story, reel, or carousel).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mediaApi.deleteMedia({
    mediaId: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type Response
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaApi
  .deleteMedia({ mediaId: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Response
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mediaId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaApi.deleteMedia(request)`

- **OnSuccess**: <code>[Response](src/models/response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mediaApi.deleteMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Response, ApiError&gt;</code>, with `result.value` of type <code>[Response](src/models/response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMedia(request: MediaApi.GetMediaRequest, options?: RequestOptions): ApiPromise&lt;Media, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get fields on an Instagram photo, video, story, reel, or album.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mediaApi.getMedia({
    mediaId: "some example string",
    accessToken: "some example string",
    fields: "id,caption,media_type,media_url,timestamp,like_count,comments_count",
  });
  // TODO: Handle 'response' of type Media
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaApi
  .getMedia({
    mediaId: "some example string",
    accessToken: "some example string",
    fields: "id,caption,media_type,media_url,timestamp,like_count,comments_count",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Media
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mediaId</code> | <code>string</code> | The IG Media ID. |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaApi.getMedia(request)`

- **OnSuccess**: <code>[Media](src/models/media.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mediaApi.getMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Media, ApiError&gt;</code>, with `result.value` of type <code>[Media](src/models/media.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMediaChildren(request: MediaApi.GetMediaChildrenRequest, options?: RequestOptions): ApiPromise&lt;MediaList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get media objects within a carousel album.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mediaApi.getMediaChildren({
    mediaId: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type MediaList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaApi
  .getMediaChildren({ mediaId: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MediaList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mediaId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaApi.getMediaChildren(request)`

- **OnSuccess**: <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mediaApi.getMediaChildren(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MediaList, ApiError&gt;</code>, with `result.value` of type <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserMedia(request: MediaApi.GetUserMediaRequest, options?: RequestOptions): ApiPromise&lt;MediaList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a collection of IG Media objects published on the account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mediaApi.getUserMedia({
    userId: "some example string",
    accessToken: "some example string",
    fields: "id,caption,media_type,media_url,timestamp,permalink",
    limit: 25,
  });
  // TODO: Handle 'response' of type MediaList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaApi
  .getUserMedia({
    userId: "some example string",
    accessToken: "some example string",
    fields: "id,caption,media_type,media_url,timestamp,permalink",
    limit: 25,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MediaList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The Instagram user ID. |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields. |
| <code>limit?</code> | <code>number</code> | Maximum number of results per page. |
| <code>after?</code> | <code>string</code> | Cursor for pagination. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaApi.getUserMedia(request)`

- **OnSuccess**: <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mediaApi.getUserMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MediaList, ApiError&gt;</code>, with `result.value` of type <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserStories(request: MediaApi.GetUserStoriesRequest, options?: RequestOptions): ApiPromise&lt;MediaList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a collection of story IG Media objects on the account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mediaApi.getUserStories({
    userId: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type MediaList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaApi
  .getUserStories({ userId: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MediaList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaApi.getUserStories(request)`

- **OnSuccess**: <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mediaApi.getUserStories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MediaList, ApiError&gt;</code>, with `result.value` of type <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMedia(request: MediaApi.UpdateMediaRequest, options?: RequestOptions): ApiPromise&lt;SuccessResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable or disable comments on a media object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mediaApi.updateMedia({ mediaId: "some example string" });
  // TODO: Handle 'response' of type SuccessResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mediaApi.updateMedia({ mediaId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SuccessResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>mediaId</code> | <code>string</code> | - |
| <code>body?</code> | <code>[RequestInstagramGraphMediaApi](src/models/request-instagram-graph-media-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mediaApi.updateMedia(request)`

- **OnSuccess**: <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mediaApi.updateMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SuccessResponse, ApiError&gt;</code>, with `result.value` of type <code>[SuccessResponse](src/models/success-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Mentions

> Source: [Mentions](src/resources/mentions.ts)

<details>
<summary><code>getUserTags(request: Mentions.GetUserTagsRequest, options?: RequestOptions): ApiPromise&lt;MediaList, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get IG Media objects where the user has been tagged by other users.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.mentions.getUserTags({
    userId: "some example string",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type MediaList
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.mentions
  .getUserTags({ userId: "some example string", accessToken: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MediaList
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.mentions.getUserTags(request)`

- **OnSuccess**: <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.mentions.getUserTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MediaList, ApiError&gt;</code>, with `result.value` of type <code>[MediaList](src/models/media-list.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Publishing

> Source: [Publishing](src/resources/publishing.ts)

<details>
<summary><code>createMediaContainer(request: Publishing.CreateMediaContainerRequest, options?: RequestOptions): ApiPromise&lt;ContainerResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a media container for publishing content. Step 1 of the publishing flow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publishing.createMediaContainer({ userId: "some example string", body: {} });
  // TODO: Handle 'response' of type ContainerResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publishing
  .createMediaContainer({ userId: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContainerResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>body</code> | <code>[CreateContainerRequest](src/models/create-container-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publishing.createMediaContainer(request)`

- **OnSuccess**: <code>[ContainerResponse](src/models/container-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.publishing.createMediaContainer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContainerResponse, ApiError&gt;</code>, with `result.value` of type <code>[ContainerResponse](src/models/container-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContainer(request: Publishing.GetContainerRequest, options?: RequestOptions): ApiPromise&lt;ResponseInstagramGraphPublishingApi, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the publishing status of a media container.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publishing.getContainer({
    containerId: "some example string",
    accessToken: "some example string",
    fields: "status_code,status",
  });
  // TODO: Handle 'response' of type ResponseInstagramGraphPublishingApi
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publishing
  .getContainer({
    containerId: "some example string",
    accessToken: "some example string",
    fields: "status_code,status",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResponseInstagramGraphPublishingApi
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>containerId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publishing.getContainer(request)`

- **OnSuccess**: <code>[ResponseInstagramGraphPublishingApi](src/models/response-instagram-graph-publishing-api.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.publishing.getContainer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResponseInstagramGraphPublishingApi, ApiError&gt;</code>, with `result.value` of type <code>[ResponseInstagramGraphPublishingApi](src/models/response-instagram-graph-publishing-api.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getContentPublishingLimit(request: Publishing.GetContentPublishingLimitRequest, options?: RequestOptions): ApiPromise&lt;ContentPublishingLimitResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current content publishing usage and rate limit status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publishing.getContentPublishingLimit({
    userId: "some example string",
    accessToken: "some example string",
    fields: "config,quota_usage",
  });
  // TODO: Handle 'response' of type ContentPublishingLimitResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publishing
  .getContentPublishingLimit({
    userId: "some example string",
    accessToken: "some example string",
    fields: "config,quota_usage",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ContentPublishingLimitResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>accessToken</code> | <code>string</code> | - |
| <code>fields?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publishing.getContentPublishingLimit(request)`

- **OnSuccess**: <code>[ContentPublishingLimitResponse](src/models/content-publishing-limit-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.publishing.getContentPublishingLimit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ContentPublishingLimitResponse, ApiError&gt;</code>, with `result.value` of type <code>[ContentPublishingLimitResponse](src/models/content-publishing-limit-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publishMedia(request: Publishing.PublishMediaRequest, options?: RequestOptions): ApiPromise&lt;MediaPublishResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a media container. Step 2 of the publishing flow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.publishing.publishMedia({
    userId: "some example string",
    body: { creationId: "some example string", accessToken: "some example string" },
  });
  // TODO: Handle 'response' of type MediaPublishResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.publishing
  .publishMedia({
    userId: "some example string",
    body: { creationId: "some example string", accessToken: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MediaPublishResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>body</code> | <code>[MediaPublishRequest](src/models/media-publish-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.publishing.publishMedia(request)`

- **OnSuccess**: <code>[MediaPublishResponse](src/models/media-publish-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.publishing.publishMedia(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MediaPublishResponse, ApiError&gt;</code>, with `result.value` of type <code>[MediaPublishResponse](src/models/media-publish-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>getBusinessDiscovery(request: Users.GetBusinessDiscoveryRequest, options?: RequestOptions): ApiPromise&lt;BusinessDiscoveryResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get data about other Instagram Business or Creator accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getBusinessDiscovery({
    userId: "some example string",
    fields: "business_discovery.fields(username,media_count,followers_count)",
    accessToken: "some example string",
  });
  // TODO: Handle 'response' of type BusinessDiscoveryResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getBusinessDiscovery({
    userId: "some example string",
    fields: "business_discovery.fields(username,media_count,followers_count)",
    accessToken: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BusinessDiscoveryResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | - |
| <code>fields</code> | <code>string</code> | Must include business_discovery.fields(). |
| <code>accessToken</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getBusinessDiscovery(request)`

- **OnSuccess**: <code>[BusinessDiscoveryResponse](src/models/business-discovery-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.getBusinessDiscovery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BusinessDiscoveryResponse, ApiError&gt;</code>, with `result.value` of type <code>[BusinessDiscoveryResponse](src/models/business-discovery-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise&lt;User, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get fields and edges on an Instagram Business or Creator account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUser({
    userId: "17841400123456789",
    accessToken: "some example string",
    fields: "id,username,name,biography,followers_count,media_count",
  });
  // TODO: Handle 'response' of type User
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users
  .getUser({
    userId: "17841400123456789",
    accessToken: "some example string",
    fields: "id,username,name,biography,followers_count,media_count",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type User
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | The Instagram user ID. |
| <code>accessToken</code> | <code>string</code> | User access token. |
| <code>fields?</code> | <code>string</code> | Comma-separated list of fields to return. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUser(request)`

- **OnSuccess**: <code>[User](src/models/user.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.getUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;User, ApiError&gt;</code>, with `result.value` of type <code>[User](src/models/user.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[InstagramError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

