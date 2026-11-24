# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [InstagramClient](instagram/client.py)

## Comments

> Source: [Comments](instagram/apis/comments.py)

<details>
<summary><code>def create_comment(media_id: str, body: CommentsRequest | CommentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CommentsResponse</code></summary>

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
try:
    response = client.comments.create_comment(
        "some example string", CommentsRequest(message="some example string", access_token="some example string")
    )
    # TODO: Handle 'response' of type CommentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.comments.create_comment(
        "some example string", CommentsRequest(message="some example string", access_token="some example string")
    )
    # TODO: Handle 'response' of type CommentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[CommentsResponse](instagram/models/comments_response.py)</code> -- Comment created.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_comment_reply(comment_id: str, body: RepliesRequest | RepliesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RepliesResponse</code></summary>

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
try:
    response = client.comments.create_comment_reply(
        "some example string", RepliesRequest(message="some example string", access_token="some example string")
    )
    # TODO: Handle 'response' of type RepliesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.comments.create_comment_reply(
        "some example string", RepliesRequest(message="some example string", access_token="some example string")
    )
    # TODO: Handle 'response' of type RepliesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[RepliesResponse](instagram/models/replies_response.py)</code> -- Reply created.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_comment(comment_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> SuccessResponse</code></summary>

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
try:
    response = client.comments.delete_comment("some example string", "some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.comments.delete_comment("some example string", "some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[SuccessResponse](instagram/models/success_response.py)</code> -- Comment deleted.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_comment(comment_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Comment</code></summary>

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
try:
    response = client.comments.get_comment(
        "some example string", "some example string", fields="id,text,username,timestamp,like_count,hidden"
    )
    # TODO: Handle 'response' of type Comment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.comments.get_comment(
        "some example string", "some example string", fields="id,text,username,timestamp,like_count,hidden"
    )
    # TODO: Handle 'response' of type Comment
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[Comment](instagram/models/comment.py)</code> -- Comment data.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_comment_replies(comment_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CommentList</code></summary>

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
try:
    response = client.comments.get_comment_replies("some example string", "some example string")
    # TODO: Handle 'response' of type CommentList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.comments.get_comment_replies("some example string", "some example string")
    # TODO: Handle 'response' of type CommentList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[CommentList](instagram/models/comment_list.py)</code> -- List of reply comments.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_media_comments(media_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CommentList</code></summary>

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
try:
    response = client.comments.get_media_comments(
        "some example string", "some example string", fields="id,text,username,timestamp,like_count"
    )
    # TODO: Handle 'response' of type CommentList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.comments.get_media_comments(
        "some example string", "some example string", fields="id,text,username,timestamp,like_count"
    )
    # TODO: Handle 'response' of type CommentList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[CommentList](instagram/models/comment_list.py)</code> -- List of comments.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def hide_comment(comment_id: str, *, body: Request | RequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SuccessResponse</code></summary>

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
try:
    response = client.comments.hide_comment("some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.comments.hide_comment("some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[SuccessResponse](instagram/models/success_response.py)</code> -- Success.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Hashtags

> Source: [Hashtags](instagram/apis/hashtags.py)

<details>
<summary><code>def get_hashtag_recent_media(hashtag_id: str, user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MediaList</code></summary>

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
try:
    response = client.hashtags.get_hashtag_recent_media(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.hashtags.get_hashtag_recent_media(
        "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[MediaList](instagram/models/media_list.py)</code> -- Recent media for the hashtag.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_hashtag_top_media(hashtag_id: str, user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MediaList</code></summary>

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
try:
    response = client.hashtags.get_hashtag_top_media(
        "some example string", "some example string", "some example string", fields="id,caption,media_type,permalink"
    )
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.hashtags.get_hashtag_top_media(
        "some example string", "some example string", "some example string", fields="id,caption,media_type,permalink"
    )
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[MediaList](instagram/models/media_list.py)</code> -- Top media for the hashtag.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search_hashtag(q: str, user_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> IgHashtagSearchResponse</code></summary>

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
try:
    response = client.hashtags.search_hashtag("photography", "some example string", "some example string")
    # TODO: Handle 'response' of type IgHashtagSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.hashtags.search_hashtag("photography", "some example string", "some example string")
    # TODO: Handle 'response' of type IgHashtagSearchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[IgHashtagSearchResponse](instagram/models/ig_hashtag_search_response.py)</code> -- Hashtag search results.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](instagram/apis/insights.py)

<details>
<summary><code>def get_media_insights(media_id: str, metric: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> InsightsResponse</code></summary>

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
try:
    response = client.insights.get_media_insights(
        "some example string", "impressions,reach,engagement,saved", "some example string"
    )
    # TODO: Handle 'response' of type InsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.insights.get_media_insights(
        "some example string", "impressions,reach,engagement,saved", "some example string"
    )
    # TODO: Handle 'response' of type InsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[InsightsResponse](instagram/models/insights_response.py)</code> -- Media insights data.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_insights(user_id: str, metric: str, period: PeriodOrStr, access_token: str, *, since: int | None = None, until: int | None = None, request_options: RequestOptionsOrDict | None = None) -> InsightsResponse</code></summary>

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
try:
    response = client.insights.get_user_insights(
        "some example string", "impressions,reach,profile_views", Period.DAY, "some example string"
    )
    # TODO: Handle 'response' of type InsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.insights.get_user_insights(
        "some example string", "impressions,reach,profile_views", Period.DAY, "some example string"
    )
    # TODO: Handle 'response' of type InsightsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[InsightsResponse](instagram/models/insights_response.py)</code> -- Account insights data.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MediaApi

> Source: [MediaApi](instagram/apis/media_api.py)

<details>
<summary><code>def delete_media(media_id: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> Response</code></summary>

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
try:
    response = client.media_api.delete_media("some example string", "some example string")
    # TODO: Handle 'response' of type Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.media_api.delete_media("some example string", "some example string")
    # TODO: Handle 'response' of type Response
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[Response](instagram/models/response.py)</code> -- Media deleted.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_media(media_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Media</code></summary>

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
try:
    response = client.media_api.get_media(
        "some example string",
        "some example string",
        fields="id,caption,media_type,media_url,timestamp,like_count,comments_count",
    )
    # TODO: Handle 'response' of type Media
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.media_api.get_media(
        "some example string",
        "some example string",
        fields="id,caption,media_type,media_url,timestamp,like_count,comments_count",
    )
    # TODO: Handle 'response' of type Media
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[Media](instagram/models/media.py)</code> -- Media object.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_media_children(media_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MediaList</code></summary>

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
try:
    response = client.media_api.get_media_children("some example string", "some example string")
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.media_api.get_media_children("some example string", "some example string")
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[MediaList](instagram/models/media_list.py)</code> -- List of child media.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_media(user_id: str, access_token: str, *, fields: str | None = None, limit: int | None = None, after: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MediaList</code></summary>

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
try:
    response = client.media_api.get_user_media(
        "some example string",
        "some example string",
        fields="id,caption,media_type,media_url,timestamp,permalink",
        limit=25,
    )
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.media_api.get_user_media(
        "some example string",
        "some example string",
        fields="id,caption,media_type,media_url,timestamp,permalink",
        limit=25,
    )
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[MediaList](instagram/models/media_list.py)</code> -- List of media objects.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user_stories(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MediaList</code></summary>

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
try:
    response = client.media_api.get_user_stories("some example string", "some example string")
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.media_api.get_user_stories("some example string", "some example string")
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[MediaList](instagram/models/media_list.py)</code> -- List of story media.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_media(media_id: str, *, body: RequestInstagramGraphMediaApi | RequestInstagramGraphMediaApiDict | None = None, request_options: RequestOptionsOrDict | None = None) -> SuccessResponse</code></summary>

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
try:
    response = client.media_api.update_media("some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.media_api.update_media("some example string")
    # TODO: Handle 'response' of type SuccessResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[SuccessResponse](instagram/models/success_response.py)</code> -- Update success.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Mentions

> Source: [Mentions](instagram/apis/mentions.py)

<details>
<summary><code>def get_user_tags(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MediaList</code></summary>

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
try:
    response = client.mentions.get_user_tags("some example string", "some example string")
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.mentions.get_user_tags("some example string", "some example string")
    # TODO: Handle 'response' of type MediaList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[MediaList](instagram/models/media_list.py)</code> -- List of tagged media.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Publishing

> Source: [Publishing](instagram/apis/publishing.py)

<details>
<summary><code>def create_media_container(user_id: str, body: CreateContainerRequest | CreateContainerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ContainerResponse</code></summary>

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
try:
    response = client.publishing.create_media_container("some example string", CreateContainerRequest())
    # TODO: Handle 'response' of type ContainerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.publishing.create_media_container("some example string", CreateContainerRequest())
    # TODO: Handle 'response' of type ContainerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[ContainerResponse](instagram/models/container_response.py)</code> -- Container created.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_container(container_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ResponseInstagramGraphPublishingApi</code></summary>

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
try:
    response = client.publishing.get_container(
        "some example string", "some example string", fields="status_code,status"
    )
    # TODO: Handle 'response' of type ResponseInstagramGraphPublishingApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.publishing.get_container(
        "some example string", "some example string", fields="status_code,status"
    )
    # TODO: Handle 'response' of type ResponseInstagramGraphPublishingApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[ResponseInstagramGraphPublishingApi](instagram/models/response_instagram_graph_publishing_api.py)</code> -- Container status.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_content_publishing_limit(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ContentPublishingLimitResponse</code></summary>

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
try:
    response = client.publishing.get_content_publishing_limit(
        "some example string", "some example string", fields="config,quota_usage"
    )
    # TODO: Handle 'response' of type ContentPublishingLimitResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.publishing.get_content_publishing_limit(
        "some example string", "some example string", fields="config,quota_usage"
    )
    # TODO: Handle 'response' of type ContentPublishingLimitResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[ContentPublishingLimitResponse](instagram/models/content_publishing_limit_response.py)</code> -- Publishing limit data.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def publish_media(user_id: str, body: MediaPublishRequest | MediaPublishRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> MediaPublishResponse</code></summary>

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
try:
    response = client.publishing.publish_media(
        "some example string",
        MediaPublishRequest(creation_id="some example string", access_token="some example string"),
    )
    # TODO: Handle 'response' of type MediaPublishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.publishing.publish_media(
        "some example string",
        MediaPublishRequest(creation_id="some example string", access_token="some example string"),
    )
    # TODO: Handle 'response' of type MediaPublishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[MediaPublishResponse](instagram/models/media_publish_response.py)</code> -- Media published.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](instagram/apis/users.py)

<details>
<summary><code>def get_business_discovery(user_id: str, fields: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None) -> BusinessDiscoveryResponse</code></summary>

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
try:
    response = client.users.get_business_discovery(
        "some example string", "business_discovery.fields(username,media_count,followers_count)", "some example string"
    )
    # TODO: Handle 'response' of type BusinessDiscoveryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.users.get_business_discovery(
        "some example string", "business_discovery.fields(username,media_count,followers_count)", "some example string"
    )
    # TODO: Handle 'response' of type BusinessDiscoveryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[BusinessDiscoveryResponse](instagram/models/business_discovery_response.py)</code> -- Business discovery data.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

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
try:
    response = client.users.get_user(
        "17841400123456789", "some example string", fields="id,username,name,biography,followers_count,media_count"
    )
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.users.get_user(
        "17841400123456789", "some example string", fields="id,username,name,biography,followers_count,media_count"
    )
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[User](instagram/models/user.py)</code> -- User profile data.

**OnError**: <code>[ApiError](instagram/core/exceptions.py)&#91;[RawError](instagram/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

