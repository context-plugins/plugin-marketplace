# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [InstagramClient](src/Instagram/InstagramClient.cs)

## Comments

> Source: [Comments](src/Instagram/Api/Comments.cs)

<details>
<summary><code>Task&lt;CommentsResponse&gt; CreateComment(CreateCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Comments.CreateComment(new CreateCommentRequest
    {
        MediaId = "some example string",
        Body = new CommentsRequest { Message = "some example string", AccessToken = "some example string" },
    });
    // TODO: Handle 'response' of type CommentsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCommentRequest](src/Instagram/Requests/Comments/CreateCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentsResponse](src/Instagram/Models/CommentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RepliesResponse&gt; CreateCommentReply(CreateCommentReplyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Comments.CreateCommentReply(new CreateCommentReplyRequest
    {
        CommentId = "some example string",
        Body = new RepliesRequest { Message = "some example string", AccessToken = "some example string" },
    });
    // TODO: Handle 'response' of type RepliesResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCommentReplyRequest](src/Instagram/Requests/Comments/CreateCommentReplyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RepliesResponse](src/Instagram/Models/RepliesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponse&gt; DeleteComment(DeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Comments.DeleteComment(new DeleteCommentRequest
    {
        CommentId = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type SuccessResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCommentRequest](src/Instagram/Requests/Comments/DeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](src/Instagram/Models/SuccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Comment&gt; GetComment(GetCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Comments.GetComment(new GetCommentRequest
    {
        CommentId = "some example string",
        AccessToken = "some example string",
        Fields = "id,text,username,timestamp,like_count,hidden",
    });
    // TODO: Handle 'response' of type Comment
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCommentRequest](src/Instagram/Requests/Comments/GetCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Comment](src/Instagram/Models/Comment.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CommentList&gt; GetCommentReplies(GetCommentRepliesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Comments.GetCommentReplies(new GetCommentRepliesRequest
    {
        CommentId = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type CommentList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCommentRepliesRequest](src/Instagram/Requests/Comments/GetCommentRepliesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentList](src/Instagram/Models/CommentList.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CommentList&gt; GetMediaComments(GetMediaCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Comments.GetMediaComments(new GetMediaCommentsRequest
    {
        MediaId = "some example string",
        AccessToken = "some example string",
        Fields = "id,text,username,timestamp,like_count",
    });
    // TODO: Handle 'response' of type CommentList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMediaCommentsRequest](src/Instagram/Requests/Comments/GetMediaCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentList](src/Instagram/Models/CommentList.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponse&gt; HideComment(HideCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Comments.HideComment(new HideCommentRequest { CommentId = "some example string" });
    // TODO: Handle 'response' of type SuccessResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[HideCommentRequest](src/Instagram/Requests/Comments/HideCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](src/Instagram/Models/SuccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Hashtags

> Source: [Hashtags](src/Instagram/Api/Hashtags.cs)

<details>
<summary><code>Task&lt;MediaList&gt; GetHashtagRecentMedia(GetHashtagRecentMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Hashtags.GetHashtagRecentMedia(new GetHashtagRecentMediaRequest
    {
        HashtagId = "some example string",
        UserId = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type MediaList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetHashtagRecentMediaRequest](src/Instagram/Requests/Hashtags/GetHashtagRecentMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MediaList](src/Instagram/Models/MediaList.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MediaList&gt; GetHashtagTopMedia(GetHashtagTopMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Hashtags.GetHashtagTopMedia(new GetHashtagTopMediaRequest
    {
        HashtagId = "some example string",
        UserId = "some example string",
        AccessToken = "some example string",
        Fields = "id,caption,media_type,permalink",
    });
    // TODO: Handle 'response' of type MediaList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetHashtagTopMediaRequest](src/Instagram/Requests/Hashtags/GetHashtagTopMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MediaList](src/Instagram/Models/MediaList.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IgHashtagSearchResponse&gt; SearchHashtag(SearchHashtagRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Hashtags.SearchHashtag(new SearchHashtagRequest
    {
        Q = "photography",
        UserId = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type IgHashtagSearchResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchHashtagRequest](src/Instagram/Requests/Hashtags/SearchHashtagRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IgHashtagSearchResponse](src/Instagram/Models/IgHashtagSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/Instagram/Api/Insights.cs)

<details>
<summary><code>Task&lt;InsightsResponse&gt; GetMediaInsights(GetMediaInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Insights.GetMediaInsights(new GetMediaInsightsRequest
    {
        MediaId = "some example string",
        Metric = "impressions,reach,engagement,saved",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type InsightsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMediaInsightsRequest](src/Instagram/Requests/Insights/GetMediaInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsResponse](src/Instagram/Models/InsightsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsightsResponse&gt; GetUserInsights(GetUserInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Insights.GetUserInsights(new GetUserInsightsRequest
    {
        UserId = "some example string",
        Metric = "impressions,reach,profile_views",
        Period = Period.Day,
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type InsightsResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserInsightsRequest](src/Instagram/Requests/Insights/GetUserInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsResponse](src/Instagram/Models/InsightsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MediaApi

> Source: [MediaApi](src/Instagram/Api/MediaApi.cs)

<details>
<summary><code>Task&lt;ResponseModel&gt; DeleteMedia(DeleteMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.MediaApi.DeleteMedia(new DeleteMediaRequest
    {
        MediaId = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type ResponseModel
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteMediaRequest](src/Instagram/Requests/MediaApi/DeleteMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResponseModel](src/Instagram/Models/ResponseModel.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Media&gt; GetMedia(GetMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.MediaApi.GetMedia(new GetMediaRequest
    {
        MediaId = "some example string",
        AccessToken = "some example string",
        Fields = "id,caption,media_type,media_url,timestamp,like_count,comments_count",
    });
    // TODO: Handle 'response' of type Media
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMediaRequest](src/Instagram/Requests/MediaApi/GetMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Media](src/Instagram/Models/Media.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MediaList&gt; GetMediaChildren(GetMediaChildrenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.MediaApi.GetMediaChildren(new GetMediaChildrenRequest
    {
        MediaId = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type MediaList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMediaChildrenRequest](src/Instagram/Requests/MediaApi/GetMediaChildrenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MediaList](src/Instagram/Models/MediaList.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MediaList&gt; GetUserMedia(GetUserMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.MediaApi.GetUserMedia(new GetUserMediaRequest
    {
        UserId = "some example string",
        AccessToken = "some example string",
        Fields = "id,caption,media_type,media_url,timestamp,permalink",
        Limit = 25,
    });
    // TODO: Handle 'response' of type MediaList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserMediaRequest](src/Instagram/Requests/MediaApi/GetUserMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MediaList](src/Instagram/Models/MediaList.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MediaList&gt; GetUserStories(GetUserStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.MediaApi.GetUserStories(new GetUserStoriesRequest
    {
        UserId = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type MediaList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserStoriesRequest](src/Instagram/Requests/MediaApi/GetUserStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MediaList](src/Instagram/Models/MediaList.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponse&gt; UpdateMedia(UpdateMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.MediaApi.UpdateMedia(new UpdateMediaRequest { MediaId = "some example string" });
    // TODO: Handle 'response' of type SuccessResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateMediaRequest](src/Instagram/Requests/MediaApi/UpdateMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](src/Instagram/Models/SuccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Mentions

> Source: [Mentions](src/Instagram/Api/Mentions.cs)

<details>
<summary><code>Task&lt;MediaList&gt; GetUserTags(GetUserTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Mentions.GetUserTags(new GetUserTagsRequest
    {
        UserId = "some example string",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type MediaList
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserTagsRequest](src/Instagram/Requests/Mentions/GetUserTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MediaList](src/Instagram/Models/MediaList.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Publishing

> Source: [Publishing](src/Instagram/Api/Publishing.cs)

<details>
<summary><code>Task&lt;ContainerResponse&gt; CreateMediaContainer(CreateMediaContainerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Publishing.CreateMediaContainer(new CreateMediaContainerRequest
    {
        UserId = "some example string",
        Body = new CreateContainerRequest(),
    });
    // TODO: Handle 'response' of type ContainerResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateMediaContainerRequest](src/Instagram/Requests/Publishing/CreateMediaContainerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContainerResponse](src/Instagram/Models/ContainerResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResponseInstagramGraphPublishingApi&gt; GetContainer(GetContainerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Publishing.GetContainer(new GetContainerRequest
    {
        ContainerId = "some example string",
        AccessToken = "some example string",
        Fields = "status_code,status",
    });
    // TODO: Handle 'response' of type ResponseInstagramGraphPublishingApi
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContainerRequest](src/Instagram/Requests/Publishing/GetContainerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResponseInstagramGraphPublishingApi](src/Instagram/Models/ResponseInstagramGraphPublishingApi.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ContentPublishingLimitResponse&gt; GetContentPublishingLimit(GetContentPublishingLimitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Publishing.GetContentPublishingLimit(new GetContentPublishingLimitRequest
    {
        UserId = "some example string",
        AccessToken = "some example string",
        Fields = "config,quota_usage",
    });
    // TODO: Handle 'response' of type ContentPublishingLimitResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetContentPublishingLimitRequest](src/Instagram/Requests/Publishing/GetContentPublishingLimitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContentPublishingLimitResponse](src/Instagram/Models/ContentPublishingLimitResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MediaPublishResponse&gt; PublishMedia(PublishMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Publishing.PublishMedia(new PublishMediaRequest
    {
        UserId = "some example string",
        Body = new MediaPublishRequest { CreationId = "some example string", AccessToken = "some example string" },
    });
    // TODO: Handle 'response' of type MediaPublishResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PublishMediaRequest](src/Instagram/Requests/Publishing/PublishMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MediaPublishResponse](src/Instagram/Models/MediaPublishResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/Instagram/Api/Users.cs)

<details>
<summary><code>Task&lt;BusinessDiscoveryResponse&gt; GetBusinessDiscovery(GetBusinessDiscoveryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.GetBusinessDiscovery(new GetBusinessDiscoveryRequest
    {
        UserId = "some example string",
        Fields = "business_discovery.fields(username,media_count,followers_count)",
        AccessToken = "some example string",
    });
    // TODO: Handle 'response' of type BusinessDiscoveryResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBusinessDiscoveryRequest](src/Instagram/Requests/Users/GetBusinessDiscoveryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BusinessDiscoveryResponse](src/Instagram/Models/BusinessDiscoveryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Users.GetUser(new GetUserRequest
    {
        UserId = "17841400123456789",
        AccessToken = "some example string",
        Fields = "id,username,name,biography,followers_count,media_count",
    });
    // TODO: Handle 'response' of type User
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserRequest](src/Instagram/Requests/Users/GetUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/Instagram/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/Instagram/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Instagram/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

