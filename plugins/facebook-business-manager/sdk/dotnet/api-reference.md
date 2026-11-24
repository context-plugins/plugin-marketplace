# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [FacebookBusinessManagerClient](src/FacebookBusinessManager/FacebookBusinessManagerClient.cs)

## AdAccounts

> Source: [AdAccounts](src/FacebookBusinessManager/Api/AdAccounts.cs)

<details>
<summary><code>Task&lt;AdAccount&gt; GetAdAccount(GetAdAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific ad account including settings, spend limits, and status information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdAccounts.GetAdAccount(new GetAdAccountRequest
    {
        AdAccountId = "some example string",
    });
    // TODO: Handle 'response' of type AdAccount
}
catch (ApiException<GetAdAccountError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAdAccountRequest](src/FacebookBusinessManager/Requests/AdAccounts/GetAdAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdAccount](src/FacebookBusinessManager/Models/AdAccount.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetAdAccountError](src/FacebookBusinessManager/Errors/GetAdAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AdCreatives

> Source: [AdCreatives](src/FacebookBusinessManager/Api/AdCreatives.cs)

<details>
<summary><code>Task&lt;CreateResponse&gt; CreateAdCreative(CreateAdCreativeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ad creative with image, video, copy, and call-to-action configurations for use in ads.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdCreatives.CreateAdCreative(new CreateAdCreativeRequest
    {
        AdAccountId = "some example string",
        Body = new AdCreativeCreate { Name = "some example string", ObjectStorySpec = objectStorySpec },
    });
    // TODO: Handle 'response' of type CreateResponse
}
catch (ApiException<CreateAdCreativeError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAdCreativeRequest](src/FacebookBusinessManager/Requests/AdCreatives/CreateAdCreativeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](src/FacebookBusinessManager/Models/CreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[CreateAdCreativeError](src/FacebookBusinessManager/Errors/CreateAdCreativeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdCreativeList&gt; ListAdCreatives(ListAdCreativesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all ad creatives for the specified ad account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdCreatives.ListAdCreatives(new ListAdCreativesRequest
    {
        AdAccountId = "some example string",
    });
    // TODO: Handle 'response' of type AdCreativeList
}
catch (ApiException<ListAdCreativesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAdCreativesRequest](src/FacebookBusinessManager/Requests/AdCreatives/ListAdCreativesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdCreativeList](src/FacebookBusinessManager/Models/AdCreativeList.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[ListAdCreativesError](src/FacebookBusinessManager/Errors/ListAdCreativesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AdImages

> Source: [AdImages](src/FacebookBusinessManager/Api/AdImages.cs)

<details>
<summary><code>Task&lt;ActAdimagesResponse&gt; UploadAdImage(UploadAdImageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads an image to the ad account image library for use in ad creatives. Accepts image file bytes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdImages.UploadAdImage(new UploadAdImageRequest
    {
        AdAccountId = "some example string",
    });
    // TODO: Handle 'response' of type ActAdimagesResponse
}
catch (ApiException<UploadAdImageError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadAdImageRequest](src/FacebookBusinessManager/Requests/AdImages/UploadAdImageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ActAdimagesResponse](src/FacebookBusinessManager/Models/ActAdimagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[UploadAdImageError](src/FacebookBusinessManager/Errors/UploadAdImageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AdSets

> Source: [AdSets](src/FacebookBusinessManager/Api/AdSets.cs)

<details>
<summary><code>Task&lt;CreateResponse&gt; CreateAdSet(CreateAdSetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ad set within a campaign. Defines targeting, budget, schedule, optimization goal, and bid strategy.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdSets.CreateAdSet(new CreateAdSetRequest
    {
        AdAccountId = "some example string",
        Body = new AdSetCreate
        {
            Name = "some example string",
            CampaignId = "some example string",
            OptimizationGoal = OptimizationGoal1.LinkClicks,
            BillingEvent = BillingEvent1.Impressions,
            Targeting = targeting,
            Status = Status1.Active,
        },
    });
    // TODO: Handle 'response' of type CreateResponse
}
catch (ApiException<CreateAdSetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAdSetRequest](src/FacebookBusinessManager/Requests/AdSets/CreateAdSetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](src/FacebookBusinessManager/Models/CreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[CreateAdSetError](src/FacebookBusinessManager/Errors/CreateAdSetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdSet&gt; GetAdSet(GetAdSetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific ad set including targeting, budget, scheduling, and optimization settings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdSets.GetAdSet(new GetAdSetRequest { AdSetId = "some example string" });
    // TODO: Handle 'response' of type AdSet
}
catch (ApiException<GetAdSetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAdSetRequest](src/FacebookBusinessManager/Requests/AdSets/GetAdSetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdSet](src/FacebookBusinessManager/Models/AdSet.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetAdSetError](src/FacebookBusinessManager/Errors/GetAdSetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdSetList&gt; ListAdSets(ListAdSetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all ad sets for the specified ad account. Returns targeting, budget, scheduling, and optimization configurations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdSets.ListAdSets(new ListAdSetsRequest { AdAccountId = "some example string" });
    // TODO: Handle 'response' of type AdSetList
}
catch (ApiException<ListAdSetsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAdSetsRequest](src/FacebookBusinessManager/Requests/AdSets/ListAdSetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdSetList](src/FacebookBusinessManager/Models/AdSetList.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[ListAdSetsError](src/FacebookBusinessManager/Errors/ListAdSetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponse&gt; UpdateAdSet(UpdateAdSetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing ad set. Supports modifying targeting, budget, schedule, and optimization settings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdSets.UpdateAdSet(new UpdateAdSetRequest
    {
        AdSetId = "some example string",
        Body = new AdSetUpdate(),
    });
    // TODO: Handle 'response' of type SuccessResponse
}
catch (ApiException<UpdateAdSetError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateAdSetRequest](src/FacebookBusinessManager/Requests/AdSets/UpdateAdSetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](src/FacebookBusinessManager/Models/SuccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[UpdateAdSetError](src/FacebookBusinessManager/Errors/UpdateAdSetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Ads

> Source: [Ads](src/FacebookBusinessManager/Api/Ads.cs)

<details>
<summary><code>Task&lt;CreateResponse&gt; CreateAd(CreateAdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new ad within an ad set. Associates an ad creative with targeting and delivery settings defined at the ad set level.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ads.CreateAd(new CreateAdRequest
    {
        AdAccountId = "some example string",
        Body = new AdCreate
        {
            Name = "some example string",
            AdsetId = "some example string",
            Creative = new Creative { CreativeId = "some example string" },
            Status = StatusFacebookBusinessManagerFacebookMarketingAdsApi.Active,
        },
    });
    // TODO: Handle 'response' of type CreateResponse
}
catch (ApiException<CreateAdError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAdRequest](src/FacebookBusinessManager/Requests/Ads/CreateAdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](src/FacebookBusinessManager/Models/CreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[CreateAdError](src/FacebookBusinessManager/Errors/CreateAdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Ad&gt; GetAd(GetAdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific ad including its creative, status, and configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ads.GetAd(new GetAdRequest { AdId = "some example string" });
    // TODO: Handle 'response' of type Ad
}
catch (ApiException<GetAdError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAdRequest](src/FacebookBusinessManager/Requests/Ads/GetAdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Ad](src/FacebookBusinessManager/Models/Ad.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetAdError](src/FacebookBusinessManager/Errors/GetAdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdList&gt; ListAds(ListAdsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all ads for the specified ad account. Returns ad configurations including creative associations and status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ads.ListAds(new ListAdsRequest { AdAccountId = "some example string" });
    // TODO: Handle 'response' of type AdList
}
catch (ApiException<ListAdsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListAdsRequest](src/FacebookBusinessManager/Requests/Ads/ListAdsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdList](src/FacebookBusinessManager/Models/AdList.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[ListAdsError](src/FacebookBusinessManager/Errors/ListAdsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](src/FacebookBusinessManager/Api/Campaigns.cs)

<details>
<summary><code>Task&lt;CreateResponse&gt; CreateCampaign(CreateCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new advertising campaign in the specified ad account. Requires at minimum a name, objective, and status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.CreateCampaign(new CreateCampaignRequest
    {
        AdAccountId = "some example string",
        Body = new CampaignCreate
        {
            Name = "some example string",
            Objective = Objective.OutcomeAwareness,
            Status = Status2.Active,
            SpecialAdCategories = ["some example string"],
        },
    });
    // TODO: Handle 'response' of type CreateResponse
}
catch (ApiException<CreateCampaignError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCampaignRequest](src/FacebookBusinessManager/Requests/Campaigns/CreateCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](src/FacebookBusinessManager/Models/CreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[CreateCampaignError](src/FacebookBusinessManager/Errors/CreateCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponse&gt; DeleteCampaign(DeleteCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an advertising campaign. This sets the campaign status to DELETED and it will no longer serve ads.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.DeleteCampaign(new DeleteCampaignRequest
    {
        CampaignId = "some example string",
    });
    // TODO: Handle 'response' of type SuccessResponse
}
catch (ApiException<DeleteCampaignError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCampaignRequest](src/FacebookBusinessManager/Requests/Campaigns/DeleteCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](src/FacebookBusinessManager/Models/SuccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[DeleteCampaignError](src/FacebookBusinessManager/Errors/DeleteCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Campaign&gt; GetCampaign(GetCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific campaign by its ID, including configuration, status, and objective.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.GetCampaign(new GetCampaignRequest { CampaignId = "some example string" });
    // TODO: Handle 'response' of type Campaign
}
catch (ApiException<GetCampaignError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCampaignRequest](src/FacebookBusinessManager/Requests/Campaigns/GetCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Campaign](src/FacebookBusinessManager/Models/Campaign.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetCampaignError](src/FacebookBusinessManager/Errors/GetCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignList&gt; ListCampaigns(ListCampaignsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all campaigns for the specified ad account. Returns a paginated list of campaign objects with their configurations and status information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.ListCampaigns(new ListCampaignsRequest
    {
        AdAccountId = "some example string",
    });
    // TODO: Handle 'response' of type CampaignList
}
catch (ApiException<ListCampaignsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCampaignsRequest](src/FacebookBusinessManager/Requests/Campaigns/ListCampaignsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignList](src/FacebookBusinessManager/Models/CampaignList.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[ListCampaignsError](src/FacebookBusinessManager/Errors/ListCampaignsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponse&gt; UpdateCampaign(UpdateCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing campaign. Supports modifying name, status, budget, and other campaign-level settings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.UpdateCampaign(new UpdateCampaignRequest
    {
        CampaignId = "some example string",
        Body = new CampaignUpdate(),
    });
    // TODO: Handle 'response' of type SuccessResponse
}
catch (ApiException<UpdateCampaignError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateCampaignRequest](src/FacebookBusinessManager/Requests/Campaigns/UpdateCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponse](src/FacebookBusinessManager/Models/SuccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[UpdateCampaignError](src/FacebookBusinessManager/Errors/UpdateCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CommentsApi

> Source: [CommentsApi](src/FacebookBusinessManager/Api/CommentsApi.cs)

<details>
<summary><code>Task&lt;CreateResponse&gt; CreateComment(CreateCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Posts a comment on a Page post as the Page. Requires a page access token with pages_manage_engagement permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentsApi.CreateComment(new CreateCommentRequest
    {
        PostId = "some example string",
        Body = new CommentsRequest { Message = "some example string" },
    });
    // TODO: Handle 'response' of type CreateResponse
}
catch (ApiException<CreateCommentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCommentRequest](src/FacebookBusinessManager/Requests/CommentsApi/CreateCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](src/FacebookBusinessManager/Models/CreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[CreateCommentError](src/FacebookBusinessManager/Errors/CreateCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi&gt; DeleteComment(DeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a comment from a Page post. The Page must own the comment or the post the comment is on.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentsApi.DeleteComment(new DeleteCommentRequest
    {
        CommentId = "some example string",
    });
    // TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
}
catch (ApiException<DeleteCommentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteCommentRequest](src/FacebookBusinessManager/Requests/CommentsApi/DeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/FacebookBusinessManager/Models/SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[DeleteCommentError](src/FacebookBusinessManager/Errors/DeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CommentList&gt; GetPostComments(GetPostCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves comments on a specific post. Supports pagination and filtering by order.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentsApi.GetPostComments(new GetPostCommentsRequest
    {
        PostId = "some example string",
    });
    // TODO: Handle 'response' of type CommentList
}
catch (ApiException<GetPostCommentsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPostCommentsRequest](src/FacebookBusinessManager/Requests/CommentsApi/GetPostCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommentList](src/FacebookBusinessManager/Models/CommentList.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetPostCommentsError](src/FacebookBusinessManager/Errors/GetPostCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomAudiences

> Source: [CustomAudiences](src/FacebookBusinessManager/Api/CustomAudiences.cs)

<details>
<summary><code>Task&lt;CreateResponse&gt; CreateCustomAudience(CreateCustomAudienceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom audience for ad targeting. Supports customer file audiences, website custom audiences, app activity audiences, and lookalike audiences.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomAudiences.CreateCustomAudience(new CreateCustomAudienceRequest
    {
        AdAccountId = "some example string",
        Body = new CustomAudienceCreate { Name = "some example string", Subtype = Subtype1.Custom },
    });
    // TODO: Handle 'response' of type CreateResponse
}
catch (ApiException<CreateCustomAudienceError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateCustomAudienceRequest](src/FacebookBusinessManager/Requests/CustomAudiences/CreateCustomAudienceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](src/FacebookBusinessManager/Models/CreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[CreateCustomAudienceError](src/FacebookBusinessManager/Errors/CreateCustomAudienceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomAudienceList&gt; ListCustomAudiences(ListCustomAudiencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all custom audiences for the specified ad account. Returns audience configurations and approximate sizes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomAudiences.ListCustomAudiences(new ListCustomAudiencesRequest
    {
        AdAccountId = "some example string",
    });
    // TODO: Handle 'response' of type CustomAudienceList
}
catch (ApiException<ListCustomAudiencesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListCustomAudiencesRequest](src/FacebookBusinessManager/Requests/CustomAudiences/ListCustomAudiencesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomAudienceList](src/FacebookBusinessManager/Models/CustomAudienceList.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[ListCustomAudiencesError](src/FacebookBusinessManager/Errors/ListCustomAudiencesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](src/FacebookBusinessManager/Api/Insights.cs)

<details>
<summary><code>Task&lt;InsightsResponse&gt; GetAdAccountInsights(GetAdAccountInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves performance insights and analytics for the specified ad account. Supports date range filtering, breakdowns, and action breakdowns.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetAdAccountInsights(new GetAdAccountInsightsRequest
    {
        AdAccountId = "some example string",
    });
    // TODO: Handle 'response' of type InsightsResponse
}
catch (ApiException<GetAdAccountInsightsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAdAccountInsightsRequest](src/FacebookBusinessManager/Requests/Insights/GetAdAccountInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsResponse](src/FacebookBusinessManager/Models/InsightsResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetAdAccountInsightsError](src/FacebookBusinessManager/Errors/GetAdAccountInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsightsResponse&gt; GetCampaignInsights(GetCampaignInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves performance insights for a specific campaign including impressions, clicks, spend, and conversion metrics.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Insights.GetCampaignInsights(new GetCampaignInsightsRequest
    {
        CampaignId = "some example string",
    });
    // TODO: Handle 'response' of type InsightsResponse
}
catch (ApiException<GetCampaignInsightsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCampaignInsightsRequest](src/FacebookBusinessManager/Requests/Insights/GetCampaignInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsResponse](src/FacebookBusinessManager/Models/InsightsResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetCampaignInsightsError](src/FacebookBusinessManager/Errors/GetCampaignInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PageInsights

> Source: [PageInsights](src/FacebookBusinessManager/Api/PageInsights.cs)

<details>
<summary><code>Task&lt;PageInsightsResponse&gt; GetPageInsights(GetPageInsightsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves analytics metrics for the Facebook Page including reach, impressions, engagement, and audience demographics.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PageInsights.GetPageInsights(new GetPageInsightsRequest
    {
        PageId = "some example string",
        Metric = "some example string",
    });
    // TODO: Handle 'response' of type PageInsightsResponse
}
catch (ApiException<GetPageInsightsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPageInsightsRequest](src/FacebookBusinessManager/Requests/PageInsights/GetPageInsightsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PageInsightsResponse](src/FacebookBusinessManager/Models/PageInsightsResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetPageInsightsError](src/FacebookBusinessManager/Errors/GetPageInsightsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pages

> Source: [Pages](src/FacebookBusinessManager/Api/Pages.cs)

<details>
<summary><code>Task&lt;Page&gt; GetPage(GetPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about a Facebook Page including name, category, description, fan count, and other metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pages.GetPage(new GetPageRequest { PageId = "some example string" });
    // TODO: Handle 'response' of type Page
}
catch (ApiException<GetPageError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPageRequest](src/FacebookBusinessManager/Requests/Pages/GetPageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](src/FacebookBusinessManager/Models/Page.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetPageError](src/FacebookBusinessManager/Errors/GetPageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi&gt; SubscribePageApp(SubscribePageAppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Installs a Webhooks-configured app on the Page so the app can receive real-time updates about changes to the Page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pages.SubscribePageApp(new SubscribePageAppRequest
    {
        PageId = "some example string",
        Body = new SubscribedAppsRequest { SubscribedFields = ["some example string"] },
    });
    // TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
}
catch (ApiException<SubscribePageAppError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SubscribePageAppRequest](src/FacebookBusinessManager/Requests/Pages/SubscribePageAppRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/FacebookBusinessManager/Models/SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[SubscribePageAppError](src/FacebookBusinessManager/Errors/SubscribePageAppError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Photos

> Source: [Photos](src/FacebookBusinessManager/Api/Photos.cs)

<details>
<summary><code>Task&lt;CreateResponse&gt; UploadPagePhoto(UploadPagePhotoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a photo to the Facebook Page. Can be published directly or uploaded as unpublished for later use in posts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Photos.UploadPagePhoto(new UploadPagePhotoRequest
    {
        PageId = "some example string",
        Body = new PhotosRequest(),
    });
    // TODO: Handle 'response' of type CreateResponse
}
catch (ApiException<UploadPagePhotoError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadPagePhotoRequest](src/FacebookBusinessManager/Requests/Photos/UploadPagePhotoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](src/FacebookBusinessManager/Models/CreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[UploadPagePhotoError](src/FacebookBusinessManager/Errors/UploadPagePhotoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Posts

> Source: [Posts](src/FacebookBusinessManager/Api/Posts.cs)

<details>
<summary><code>Task&lt;CreateResponse&gt; CreatePagePost(CreatePagePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes a new post to the Facebook Page feed. Supports text posts, link shares, and scheduled posts. Requires a page access token with pages_manage_posts permission.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.CreatePagePost(new CreatePagePostRequest
    {
        PageId = "some example string",
        Body = new PostCreate(),
    });
    // TODO: Handle 'response' of type CreateResponse
}
catch (ApiException<CreatePagePostError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePagePostRequest](src/FacebookBusinessManager/Requests/Posts/CreatePagePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](src/FacebookBusinessManager/Models/CreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[CreatePagePostError](src/FacebookBusinessManager/Errors/CreatePagePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi&gt; DeletePost(DeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a post from the Facebook Page. This action cannot be undone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.DeletePost(new DeletePostRequest { PostId = "some example string" });
    // TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
}
catch (ApiException<DeletePostError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeletePostRequest](src/FacebookBusinessManager/Requests/Posts/DeletePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/FacebookBusinessManager/Models/SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[DeletePostError](src/FacebookBusinessManager/Errors/DeletePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostList&gt; GetPageFeed(GetPageFeedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the feed of posts on a Facebook Page. Includes posts published by the page and posts by visitors if allowed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.GetPageFeed(new GetPageFeedRequest { PageId = "some example string" });
    // TODO: Handle 'response' of type PostList
}
catch (ApiException<GetPageFeedError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPageFeedRequest](src/FacebookBusinessManager/Requests/Posts/GetPageFeedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostList](src/FacebookBusinessManager/Models/PostList.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetPageFeedError](src/FacebookBusinessManager/Errors/GetPageFeedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Post&gt; GetPost(GetPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific post including message, attachments, reactions, and engagement counts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.GetPost(new GetPostRequest { PostId = "some example string" });
    // TODO: Handle 'response' of type Post
}
catch (ApiException<GetPostError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPostRequest](src/FacebookBusinessManager/Requests/Posts/GetPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Post](src/FacebookBusinessManager/Models/Post.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[GetPostError](src/FacebookBusinessManager/Errors/GetPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi&gt; UpdatePost(UpdatePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing post on the Page. Only the message field can be updated after publishing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.UpdatePost(new UpdatePostRequest
    {
        PostId = "some example string",
        Body = new RequestModel(),
    });
    // TODO: Handle 'response' of type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi
}
catch (ApiException<UpdatePostError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePostRequest](src/FacebookBusinessManager/Requests/Posts/UpdatePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi](src/FacebookBusinessManager/Models/SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[UpdatePostError](src/FacebookBusinessManager/Errors/UpdatePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Videos

> Source: [Videos](src/FacebookBusinessManager/Api/Videos.cs)

<details>
<summary><code>Task&lt;CreateResponse&gt; UploadPageVideo(UploadPageVideoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a video to the Facebook Page. Supports direct upload via URL or resumable upload for large files.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Videos.UploadPageVideo(new UploadPageVideoRequest
    {
        PageId = "some example string",
        Body = new VideosRequest(),
    });
    // TODO: Handle 'response' of type CreateResponse
}
catch (ApiException<UploadPageVideoError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadPageVideoRequest](src/FacebookBusinessManager/Requests/Videos/UploadPageVideoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateResponse](src/FacebookBusinessManager/Models/CreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/FacebookBusinessManager/Core/Exceptions/ApiException.cs)&lt;[UploadPageVideoError](src/FacebookBusinessManager/Errors/UploadPageVideoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

