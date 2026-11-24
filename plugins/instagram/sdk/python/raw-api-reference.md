# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [InstagramClient](instagram/client.py)

## Comments

> Source: [Comments](instagram/apis/comments.py)

<details>
<summary><code>def create_comment(media_id: str, body: CommentsRequest | CommentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CommentsResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a comment on an Instagram media object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.create_comment(
    "some example string", CommentsRequest(message="some example string", access_token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.comments.with_raw_response.create_comment(
    "some example string", CommentsRequest(message="some example string", access_token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>media_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CommentsRequest](instagram/models/comments_request.py) \| [CommentsRequestDict](instagram/models/comments_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[CommentsResponse](instagram/models/comments_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[CommentsResponse](instagram/models/comments_response.py)</code> -- Comment created.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_comment_reply(comment_id: str, body: RepliesRequest | RepliesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RepliesResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reply to a comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.create_comment_reply(
    "some example string", RepliesRequest(message="some example string", access_token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepliesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.comments.with_raw_response.create_comment_reply(
    "some example string", RepliesRequest(message="some example string", access_token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepliesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[RepliesRequest](instagram/models/replies_request.py) \| [RepliesRequestDict](instagram/models/replies_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[RepliesResponse](instagram/models/replies_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[RepliesResponse](instagram/models/replies_response.py)</code> -- Reply created.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_comment(comment_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a comment on your media.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.delete_comment("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.comments.with_raw_response.delete_comment("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[SuccessResponse](instagram/models/success_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponse](instagram/models/success_response.py)</code> -- Comment deleted.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_comment(comment_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Comment, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get fields on an Instagram comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.get_comment(
    "some example string", "some example string", fields="id,text,username,timestamp,like_count,hidden"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Comment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.comments.with_raw_response.get_comment(
    "some example string", "some example string", fields="id,text,username,timestamp,like_count,hidden"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Comment
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[Comment](instagram/models/comment.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Comment](instagram/models/comment.py)</code> -- Comment data.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_comment_replies(comment_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CommentList, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get replies to a comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.get_comment_replies("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.comments.with_raw_response.get_comment_replies("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[CommentList](instagram/models/comment_list.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[CommentList](instagram/models/comment_list.py)</code> -- List of reply comments.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_media_comments(media_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CommentList, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get comments on an Instagram media object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.get_media_comments(
    "some example string", "some example string", fields="id,text,username,timestamp,like_count"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.comments.with_raw_response.get_media_comments(
    "some example string", "some example string", fields="id,text,username,timestamp,like_count"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CommentList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>media_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[CommentList](instagram/models/comment_list.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[CommentList](instagram/models/comment_list.py)</code> -- List of comments.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hide_comment(comment_id: str, *, body: Request | RequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Hide or unhide a comment on your media.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.comments.with_raw_response.hide_comment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.comments.with_raw_response.hide_comment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>comment_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[Request](instagram/models/request.py) \| [RequestDict](instagram/models/request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[SuccessResponse](instagram/models/success_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponse](instagram/models/success_response.py)</code> -- Success.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Hashtags

> Source: [Hashtags](instagram/apis/hashtags.py)

<details>
<summary><code>def get_hashtag_recent_media(hashtag_id: str, user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MediaList, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the most recently published media tagged with a specific hashtag.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.hashtags.with_raw_response.get_hashtag_recent_media(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.hashtags.with_raw_response.get_hashtag_recent_media(
    "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>hashtag_id</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[MediaList](instagram/models/media_list.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MediaList](instagram/models/media_list.py)</code> -- Recent media for the hashtag.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_hashtag_top_media(hashtag_id: str, user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MediaList, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the most popular media tagged with a specific hashtag.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.hashtags.with_raw_response.get_hashtag_top_media(
    "some example string", "some example string", "some example string", fields="id,caption,media_type,permalink"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.hashtags.with_raw_response.get_hashtag_top_media(
    "some example string", "some example string", "some example string", fields="id,caption,media_type,permalink"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>hashtag_id</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[MediaList](instagram/models/media_list.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MediaList](instagram/models/media_list.py)</code> -- Top media for the hashtag.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_hashtag(q: str, user_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[IgHashtagSearchResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for a hashtag by name and get its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.hashtags.with_raw_response.search_hashtag("photography", "some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IgHashtagSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.hashtags.with_raw_response.search_hashtag(
    "photography", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type IgHashtagSearchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | The hashtag to search for (without |
| <code>user_id</code> | <code>str</code> | The ID of the user making the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[IgHashtagSearchResponse](instagram/models/ig_hashtag_search_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[IgHashtagSearchResponse](instagram/models/ig_hashtag_search_response.py)</code> -- Hashtag search results.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](instagram/apis/insights.py)

<details>
<summary><code>def get_media_insights(media_id: str, metric: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightsResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get social interaction metrics for a media object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.get_media_insights(
    "some example string", "impressions,reach,engagement,saved", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_media_insights(
    "some example string", "impressions,reach,engagement,saved", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>media_id</code> | <code>str</code> | Value sent with the request. |
| <code>metric</code> | <code>str</code> | Comma-separated list of metrics. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[InsightsResponse](instagram/models/insights_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightsResponse](instagram/models/insights_response.py)</code> -- Media insights data.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_insights(user_id: str, metric: str, period: PeriodOrStr, access_token: str, *, since: int | None = None, until: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightsResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get social interaction metrics for the account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insights.with_raw_response.get_user_insights(
    "some example string", "impressions,reach,profile_views", Period.DAY, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_user_insights(
    "some example string", "impressions,reach,profile_views", Period.DAY, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>metric</code> | <code>str</code> | Comma-separated list of metrics. |
| <code>period</code> | <code>[PeriodOrStr](instagram/models/enums/period.py)</code> | Time period for aggregation. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>since</code> | <code>int \| None</code> | Unix timestamp for start of range.<br>**Default**: <code>None</code> |
| <code>until</code> | <code>int \| None</code> | Unix timestamp for end of range.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[InsightsResponse](instagram/models/insights_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightsResponse](instagram/models/insights_response.py)</code> -- Account insights data.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MediaApi

> Source: [MediaApi](instagram/apis/media_api.py)

<details>
<summary><code>def delete_media(media_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Response, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an Instagram media object (post, story, reel, or carousel).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.media_api.with_raw_response.delete_media("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.media_api.with_raw_response.delete_media("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Response
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>media_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[Response](instagram/models/response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Response](instagram/models/response.py)</code> -- Media deleted.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_media(media_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Media, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get fields on an Instagram photo, video, story, reel, or album.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.media_api.with_raw_response.get_media(
    "some example string",
    "some example string",
    fields="id,caption,media_type,media_url,timestamp,like_count,comments_count",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Media
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.media_api.with_raw_response.get_media(
    "some example string",
    "some example string",
    fields="id,caption,media_type,media_url,timestamp,like_count,comments_count",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Media
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>media_id</code> | <code>str</code> | The IG Media ID. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[Media](instagram/models/media.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[Media](instagram/models/media.py)</code> -- Media object.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_media_children(media_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MediaList, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get media objects within a carousel album.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.media_api.with_raw_response.get_media_children("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.media_api.with_raw_response.get_media_children("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>media_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[MediaList](instagram/models/media_list.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MediaList](instagram/models/media_list.py)</code> -- List of child media.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_media(user_id: str, access_token: str, *, fields: str | None = None, limit: int | None = None, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MediaList, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a collection of IG Media objects published on the account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.media_api.with_raw_response.get_user_media(
    "some example string", "some example string", fields="id,caption,media_type,media_url,timestamp,permalink", limit=25
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.media_api.with_raw_response.get_user_media(
    "some example string", "some example string", fields="id,caption,media_type,media_url,timestamp,permalink", limit=25
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The Instagram user ID. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of results per page.<br>**Default**: <code>None</code> |
| <code>after</code> | <code>str \| None</code> | Cursor for pagination.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[MediaList](instagram/models/media_list.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MediaList](instagram/models/media_list.py)</code> -- List of media objects.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_stories(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MediaList, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a collection of story IG Media objects on the account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.media_api.with_raw_response.get_user_stories("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.media_api.with_raw_response.get_user_stories("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[MediaList](instagram/models/media_list.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MediaList](instagram/models/media_list.py)</code> -- List of story media.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_media(media_id: str, *, body: RequestInstagramGraphMediaApi | RequestInstagramGraphMediaApiDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable or disable comments on a media object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.media_api.with_raw_response.update_media("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.media_api.with_raw_response.update_media("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuccessResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>media_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[RequestInstagramGraphMediaApi](instagram/models/request_instagram_graph_media_api.py) \| [RequestInstagramGraphMediaApiDict](instagram/models/request_instagram_graph_media_api.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[SuccessResponse](instagram/models/success_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuccessResponse](instagram/models/success_response.py)</code> -- Update success.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Mentions

> Source: [Mentions](instagram/apis/mentions.py)

<details>
<summary><code>def get_user_tags(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MediaList, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get IG Media objects where the user has been tagged by other users.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.mentions.with_raw_response.get_user_tags("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.mentions.with_raw_response.get_user_tags("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[MediaList](instagram/models/media_list.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MediaList](instagram/models/media_list.py)</code> -- List of tagged media.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Publishing

> Source: [Publishing](instagram/apis/publishing.py)

<details>
<summary><code>def create_media_container(user_id: str, body: CreateContainerRequest | CreateContainerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContainerResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a media container for publishing content. Step 1 of the publishing flow.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.publishing.with_raw_response.create_media_container("some example string", CreateContainerRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContainerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.publishing.with_raw_response.create_media_container(
    "some example string", CreateContainerRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContainerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateContainerRequest](instagram/models/create_container_request.py) \| [CreateContainerRequestDict](instagram/models/create_container_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[ContainerResponse](instagram/models/container_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContainerResponse](instagram/models/container_response.py)</code> -- Container created.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_container(container_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResponseInstagramGraphPublishingApi, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the publishing status of a media container.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.publishing.with_raw_response.get_container(
    "some example string", "some example string", fields="status_code,status"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResponseInstagramGraphPublishingApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.publishing.with_raw_response.get_container(
    "some example string", "some example string", fields="status_code,status"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResponseInstagramGraphPublishingApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>container_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[ResponseInstagramGraphPublishingApi](instagram/models/response_instagram_graph_publishing_api.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResponseInstagramGraphPublishingApi](instagram/models/response_instagram_graph_publishing_api.py)</code> -- Container status.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_content_publishing_limit(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContentPublishingLimitResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get current content publishing usage and rate limit status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.publishing.with_raw_response.get_content_publishing_limit(
    "some example string", "some example string", fields="config,quota_usage"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContentPublishingLimitResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.publishing.with_raw_response.get_content_publishing_limit(
    "some example string", "some example string", fields="config,quota_usage"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContentPublishingLimitResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[ContentPublishingLimitResponse](instagram/models/content_publishing_limit_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContentPublishingLimitResponse](instagram/models/content_publishing_limit_response.py)</code> -- Publishing limit data.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def publish_media(user_id: str, body: MediaPublishRequest | MediaPublishRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MediaPublishResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a media container. Step 2 of the publishing flow.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.publishing.with_raw_response.publish_media(
    "some example string", MediaPublishRequest(creation_id="some example string", access_token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaPublishResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.publishing.with_raw_response.publish_media(
    "some example string", MediaPublishRequest(creation_id="some example string", access_token="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MediaPublishResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[MediaPublishRequest](instagram/models/media_publish_request.py) \| [MediaPublishRequestDict](instagram/models/media_publish_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[MediaPublishResponse](instagram/models/media_publish_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[MediaPublishResponse](instagram/models/media_publish_response.py)</code> -- Media published.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](instagram/apis/users.py)

<details>
<summary><code>def get_business_discovery(user_id: str, fields: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BusinessDiscoveryResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get data about other Instagram Business or Creator accounts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.get_business_discovery(
    "some example string", "business_discovery.fields(username,media_count,followers_count)", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BusinessDiscoveryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.users.with_raw_response.get_business_discovery(
    "some example string", "business_discovery.fields(username,media_count,followers_count)", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BusinessDiscoveryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>fields</code> | <code>str</code> | Must include business_discovery.fields(). |
| <code>access_token</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[BusinessDiscoveryResponse](instagram/models/business_discovery_response.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[BusinessDiscoveryResponse](instagram/models/business_discovery_response.py)</code> -- Business discovery data.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get fields and edges on an Instagram Business or Creator account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.users.with_raw_response.get_user(
    "17841400123456789", "some example string", fields="id,username,name,biography,followers_count,media_count"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.users.with_raw_response.get_user(
    "17841400123456789", "some example string", fields="id,username,name,biography,followers_count,media_count"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | The Instagram user ID. |
| <code>access_token</code> | <code>str</code> | User access token. |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to return.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](instagram/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](instagram/core/results.py)&#91;[User](instagram/models/user.py), [RawError](instagram/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](instagram/models/user.py)</code> -- User profile data.

**On `Failure`**: `error` is <code>[RawError](instagram/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

