# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [JusttrackClient](src/Justtrack/JusttrackClient.cs)

## AppEvents

> Source: [AppEvents](src/Justtrack/Api/AppEvents.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;BatchErrorResponse&gt;&gt; PostAppEventBatch(PostAppEventBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends batches of batches of events where each inner batch is for a single app and user.
Follows a bulk processing paradigm where individual AppEventBatches in the InputBatch are processed
independently from each other. If an AppEventBatch fails to be processed, this does not affect the processing
of the other AppEventBatches in the InputBatch. For all AppEventBatches that fail an individual error status is
set for its batchId for the "207" status code. An individual AppEventBatch is processed "all or nothing".
After acceptance of a batch, there is delayed processing of it in subsequent components where additional validation happens.
This means that even though a batch was successfully accepted, not necessarily all events will pass processing.
This subsequent processing includes but is not limited to:
- deduplication
- additional semantic validation
- user identity resolution
User Identity is determined once for the whole batch for an app user combination, using the newest information which predates the newest event in the batch.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppEvents.PostAppEventBatch(new PostAppEventBatchRequest
    {
        Body = [
            new AppEventBatch
            {
                BatchId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
                App = new App { StoreId = "some example string" },
                User = new User { Id = "some example string" },
                Events = [new AppEvent { Unit = Unit.Count }],
            },
        ],
    });
    // TODO: Handle 'response' of type IReadOnlyList<BatchErrorResponse>
}
catch (ApiException<PostAppEventBatchError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostAppEventBatchRequest](src/Justtrack/Requests/AppEvents/PostAppEventBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[BatchErrorResponse](src/Justtrack/Models/BatchErrorResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PostAppEventBatchError](src/Justtrack/Errors/PostAppEventBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AppPartnerConnectionApi

> Source: [AppPartnerConnectionApi](src/Justtrack/Api/AppPartnerConnectionApi.cs)

<details>
<summary><code>Task&lt;AppPartnerConnection&gt; GetManagementV1AppByAppIdConnectionByPartnerId(GetManagementV1AppByAppIdConnectionByPartnerIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get data for existing app partner connection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerId(
        new GetManagementV1AppByAppIdConnectionByPartnerIdRequest { AppId = 1, PartnerId = 1 });
    // TODO: Handle 'response' of type AppPartnerConnection
}
catch (ApiException<GetManagementV1AppByAppIdConnectionByPartnerIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetManagementV1AppByAppIdConnectionByPartnerIdRequest](src/Justtrack/Requests/AppPartnerConnectionApi/GetManagementV1AppByAppIdConnectionByPartnerIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppPartnerConnection](src/Justtrack/Models/AppPartnerConnection.cs)</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[GetManagementV1AppByAppIdConnectionByPartnerIdError](src/Justtrack/Errors/GetManagementV1AppByAppIdConnectionByPartnerIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AppPartnerConnection&gt; PutManagementV1AppByAppIdConnectionByPartnerId(PutManagementV1AppByAppIdConnectionByPartnerIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Connect your app to a partner. If this app-partner connection already exists, update the connection details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerId(
        new PutManagementV1AppByAppIdConnectionByPartnerIdRequest { AppId = 1, PartnerId = 1 });
    // TODO: Handle 'response' of type AppPartnerConnection
}
catch (ApiException<PutManagementV1AppByAppIdConnectionByPartnerIdError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutManagementV1AppByAppIdConnectionByPartnerIdRequest](src/Justtrack/Requests/AppPartnerConnectionApi/PutManagementV1AppByAppIdConnectionByPartnerIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppPartnerConnection](src/Justtrack/Models/AppPartnerConnection.cs)</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PutManagementV1AppByAppIdConnectionByPartnerIdError](src/Justtrack/Errors/PutManagementV1AppByAppIdConnectionByPartnerIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Apps

> Source: [Apps](src/Justtrack/Api/Apps.cs)

<details>
<summary><code>Task&lt;AppOutput&gt; PostManagementV1App(PostManagementV1AppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an app.

:::info

We validate the following constraints when creating an app:

- The bundle ID must be unique to your organization, though multiple apps within your organization can have the same bundle ID if the platform is different.
- A (bundle ID, platform) pair must be unique within your organization.
- A (name, platform) pair must be unique within your organization.
- The store ID must be unique across all organizations.

:::

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apps.PostManagementV1App(new PostManagementV1AppRequest());
    // TODO: Handle 'response' of type AppOutput
}
catch (ApiException<PostManagementV1AppError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostManagementV1AppRequest](src/Justtrack/Requests/Apps/PostManagementV1AppRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AppOutput](src/Justtrack/Models/AppOutput.cs)</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PostManagementV1AppError](src/Justtrack/Errors/PostManagementV1AppError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListAppsResponse&gt; PostManagementV1Apps(PostManagementV1AppsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of your organization's apps.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apps.PostManagementV1Apps(new PostManagementV1AppsRequest());
    // TODO: Handle 'response' of type ListAppsResponse
}
catch (ApiException<PostManagementV1AppsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostManagementV1AppsRequest](src/Justtrack/Requests/Apps/PostManagementV1AppsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAppsResponse](src/Justtrack/Models/ListAppsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PostManagementV1AppsError](src/Justtrack/Errors/PostManagementV1AppsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Bids

> Source: [Bids](src/Justtrack/Api/Bids.cs)

<details>
<summary><code>Task&lt;ListBidsResponse&gt; PostManagementV1Bids(PostManagementV1BidsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides with the bids within justtrack. In addition, it exposes the status of the latest operation associated with the bid.
The following filter combinations are eligible:
- networkId + campaignId
- networkId + campaignId + countryCode
- networkId + campaignId + countryCode + sourceId
- networkId + adSetId
- networkId + adSetId + countryCode
- networkId + adSetId + countryCode + sourceId

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bids.PostManagementV1Bids(new PostManagementV1BidsRequest());
    // TODO: Handle 'response' of type ListBidsResponse
}
catch (ApiException<PostManagementV1BidsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostManagementV1BidsRequest](src/Justtrack/Requests/Bids/PostManagementV1BidsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBidsResponse](src/Justtrack/Models/ListBidsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PostManagementV1BidsError](src/Justtrack/Errors/PostManagementV1BidsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; PostManagementV1BidsUpload(PostManagementV1BidsUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

With this API you can upload a batch of bids, similar to the CSV upload. The same hierarchy, rules, and limitations apply.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bids.PostManagementV1BidsUpload(new PostManagementV1BidsUploadRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<PostManagementV1BidsUploadError> ex)
{
    if (ex.Error.TryGetUploadBidsInvalidBidResponse(out var error))
    {
        // TODO: Handle 'error' of type UploadBidsInvalidBidResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostManagementV1BidsUploadRequest](src/Justtrack/Requests/Bids/PostManagementV1BidsUploadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PostManagementV1BidsUploadError](src/Justtrack/Errors/PostManagementV1BidsUploadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Campaigns

> Source: [Campaigns](src/Justtrack/Api/Campaigns.cs)

<details>
<summary><code>Task&lt;CampaignOutput&gt; PostManagementV1Campaign(PostManagementV1CampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Typically, we automatically track campaigns in justtrack when we receive the first click or impression. However, you can also use this API to create a campaign manually.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.PostManagementV1Campaign(new PostManagementV1CampaignRequest());
    // TODO: Handle 'response' of type CampaignOutput
}
catch (ApiException<PostManagementV1CampaignError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostManagementV1CampaignRequest](src/Justtrack/Requests/Campaigns/PostManagementV1CampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignOutput](src/Justtrack/Models/CampaignOutput.cs)</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PostManagementV1CampaignError](src/Justtrack/Errors/PostManagementV1CampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CampaignOutput&gt; PostManagementV1Campaigns(PostManagementV1CampaignsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of campaigns for your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Campaigns.PostManagementV1Campaigns(new PostManagementV1CampaignsRequest());
    // TODO: Handle 'response' of type CampaignOutput
}
catch (ApiException<PostManagementV1CampaignsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostManagementV1CampaignsRequest](src/Justtrack/Requests/Campaigns/PostManagementV1CampaignsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CampaignOutput](src/Justtrack/Models/CampaignOutput.cs)</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PostManagementV1CampaignsError](src/Justtrack/Errors/PostManagementV1CampaignsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PartnerConfigurations

> Source: [PartnerConfigurations](src/Justtrack/Api/PartnerConfigurations.cs)

<details>
<summary><code>Task&lt;ListPartnerConfigurationFeaturesResponse&gt; PostManagementV1PartnerConfigurationByFeature(PostManagementV1PartnerConfigurationByFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of configured features for a given app and partner.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PartnerConfigurations.PostManagementV1PartnerConfigurationByFeature(
        new PostManagementV1PartnerConfigurationByFeatureRequest { Feature = "some example string" });
    // TODO: Handle 'response' of type ListPartnerConfigurationFeaturesResponse
}
catch (ApiException<PostManagementV1PartnerConfigurationByFeatureError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostManagementV1PartnerConfigurationByFeatureRequest](src/Justtrack/Requests/PartnerConfigurations/PostManagementV1PartnerConfigurationByFeatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPartnerConfigurationFeaturesResponse](src/Justtrack/Models/ListPartnerConfigurationFeaturesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PostManagementV1PartnerConfigurationByFeatureError](src/Justtrack/Errors/PostManagementV1PartnerConfigurationByFeatureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ListPartnerConfigurationsResponse&gt; PostManagementV1PartnerConfigurations(PostManagementV1PartnerConfigurationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of keys used to configure features for the partners that are available to your organization. You configure the values for each of these keys with the Update configurations API.

:::warning

When you configure a partner feature, you must provide values for all keys associated with that feature from this API. Without them, justtrack wouldn't be able to successfully operate or integrate with the partner.

:::

A configuration key may appear for multiple features. **You must provide a value for each feature.**

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PartnerConfigurations.PostManagementV1PartnerConfigurations(
        new PostManagementV1PartnerConfigurationsRequest());
    // TODO: Handle 'response' of type ListPartnerConfigurationsResponse
}
catch (ApiException<PostManagementV1PartnerConfigurationsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostManagementV1PartnerConfigurationsRequest](src/Justtrack/Requests/PartnerConfigurations/PostManagementV1PartnerConfigurationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPartnerConfigurationsResponse](src/Justtrack/Models/ListPartnerConfigurationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PostManagementV1PartnerConfigurationsError](src/Justtrack/Errors/PostManagementV1PartnerConfigurationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;PartnerConfigurationFeatureOutput&gt;&gt; PutManagementV1PartnerConfigurationByFeature(PutManagementV1PartnerConfigurationByFeatureRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Configure a feature for a given app and partner.

:::warning

You must provide values for all keys listed by List partner configurations.

:::

:::info

For attribution viewEventTimeFrame and clickEventTimeFrame, use ISO8601 duration-only format, i.e. `P1DT0H0M`

:::

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PartnerConfigurations.PutManagementV1PartnerConfigurationByFeature(
        new PutManagementV1PartnerConfigurationByFeatureRequest { Feature = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<PartnerConfigurationFeatureOutput>
}
catch (ApiException<PutManagementV1PartnerConfigurationByFeatureError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutManagementV1PartnerConfigurationByFeatureRequest](src/Justtrack/Requests/PartnerConfigurations/PutManagementV1PartnerConfigurationByFeatureRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[PartnerConfigurationFeatureOutput](src/Justtrack/Models/PartnerConfigurationFeatureOutput.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PutManagementV1PartnerConfigurationByFeatureError](src/Justtrack/Errors/PutManagementV1PartnerConfigurationByFeatureError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Partners

> Source: [Partners](src/Justtrack/Api/Partners.cs)

<details>
<summary><code>Task&lt;ListPartnersResponse&gt; PostManagementV1Partners(PostManagementV1PartnersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a paginated list of partners available to your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Partners.PostManagementV1Partners(new PostManagementV1PartnersRequest());
    // TODO: Handle 'response' of type ListPartnersResponse
}
catch (ApiException<PostManagementV1PartnersError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostManagementV1PartnersRequest](src/Justtrack/Requests/Partners/PostManagementV1PartnersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPartnersResponse](src/Justtrack/Models/ListPartnersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Justtrack/Core/Exceptions/ApiException.cs)&lt;[PostManagementV1PartnersError](src/Justtrack/Errors/PostManagementV1PartnersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

