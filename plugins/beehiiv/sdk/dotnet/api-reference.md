# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [BeehiivClient](src/Beehiiv/BeehiivClient.cs)

## AdNetworkOffers

> Source: [AdNetworkOffers](src/Beehiiv/Api/AdNetworkOffers.cs)

<details>
<summary><code>Task&lt;AdOfferAdvertisementsGetResponse&gt; Advertisements(AdvertisementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve the active text advertisement creatives available for an ad offer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdNetworkOffers.Advertisements(new AdvertisementsRequest
    {
        PublicationId = "some example string",
        OfferId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AdOfferAdvertisementsGetResponse
}
catch (ApiException<AdvertisementsError> ex)
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

<code>[AdvertisementsRequest](src/Beehiiv/Requests/AdNetworkOffers/AdvertisementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdOfferAdvertisementsGetResponse](src/Beehiiv/Models/AdOfferAdvertisementsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[AdvertisementsError](src/Beehiiv/Errors/AdvertisementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdOfferCreateResponse&gt; Create(CreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Draft and accept an ad offer, then insert the resulting advertisement opportunity into a post.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdNetworkOffers.Create(new CreateRequest
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AdOfferCreateResponse
}
catch (ApiException<CreateError> ex)
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

<code>[CreateRequest](src/Beehiiv/Requests/AdNetworkOffers/CreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdOfferCreateResponse](src/Beehiiv/Models/AdOfferCreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[CreateError](src/Beehiiv/Errors/CreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdOffersGetResponse&gt; Index(IndexRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve a list of ad offers available for the publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdNetworkOffers.Index(new IndexRequest
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AdOffersGetResponse
}
catch (ApiException<IndexError> ex)
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

<code>[IndexRequest](src/Beehiiv/Requests/AdNetworkOffers/IndexRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdOffersGetResponse](src/Beehiiv/Models/AdOffersGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[IndexError](src/Beehiiv/Errors/IndexError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AdNetworkReports

> Source: [AdNetworkReports](src/Beehiiv/Api/AdNetworkReports.cs)

<details>
<summary><code>Task&lt;AdNetworkReportSummary&gt; AccountSummary(AccountSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve one account-wide aggregate of advertisement performance and revenue across accessible publications.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdNetworkReports.AccountSummary(new AccountSummaryRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AdNetworkReportSummary
}
catch (ApiException<AccountSummaryError> ex)
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

<code>[AccountSummaryRequest](src/Beehiiv/Requests/AdNetworkReports/AccountSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdNetworkReportSummary](src/Beehiiv/Models/AdNetworkReportSummary.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[AccountSummaryError](src/Beehiiv/Errors/AccountSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdNetworkReportsGetResponse&gt; Index2(Index2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve advertisement performance and payment reports for the publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdNetworkReports.Index2(new Index2Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AdNetworkReportsGetResponse
}
catch (ApiException<Index2Error> ex)
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

<code>[Index2Request](src/Beehiiv/Requests/AdNetworkReports/Index2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdNetworkReportsGetResponse](src/Beehiiv/Models/AdNetworkReportsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index2Error](src/Beehiiv/Errors/Index2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AdNetworkReportSummary&gt; Summary(SummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This feature is currently in beta and the API is subject to change.

Retrieve aggregate advertisement performance and revenue for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdNetworkReports.Summary(new SummaryRequest
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AdNetworkReportSummary
}
catch (ApiException<SummaryError> ex)
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

<code>[SummaryRequest](src/Beehiiv/Requests/AdNetworkReports/SummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdNetworkReportSummary](src/Beehiiv/Models/AdNetworkReportSummary.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[SummaryError](src/Beehiiv/Errors/SummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AdvertisementOpportunities

> Source: [AdvertisementOpportunities](src/Beehiiv/Api/AdvertisementOpportunities.cs)

<details>
<summary><code>Task&lt;AdvertisementOpportunitiesGetResponse&gt; Index3(Index3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of accepted advertisement opportunities for the publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AdvertisementOpportunities.Index3(new Index3Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AdvertisementOpportunitiesGetResponse
}
catch (ApiException<Index3Error> ex)
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

<code>[Index3Request](src/Beehiiv/Requests/AdvertisementOpportunities/Index3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdvertisementOpportunitiesGetResponse](src/Beehiiv/Models/AdvertisementOpportunitiesGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index3Error](src/Beehiiv/Errors/Index3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Authorizations

> Source: [Authorizations](src/Beehiiv/Api/Authorizations.cs)

<details>
<summary><code>Task Authorize(AuthorizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts the OAuth2 authorization code flow. This endpoint redirects the user to login and consent (if needed), then redirects back to your `redirect_uri` with a `code` and `state`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Authorizations.Authorize(new AuthorizeRequest
    {
        ClientId = "some example string",
        RedirectUri = "some example string",
        ResponseType = "some example string",
    });
}
catch (ApiException<AuthorizeError> ex)
{
    if (ex.Error.TryGetOAuthError(out var error))
    {
        // TODO: Handle 'error' of type OAuthError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AuthorizeRequest](src/Beehiiv/Requests/Authorizations/AuthorizeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[AuthorizeError](src/Beehiiv/Errors/AuthorizeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Authors

> Source: [Authors](src/Beehiiv/Api/Authors.cs)

<details>
<summary><code>Task&lt;AuthorsListResponse&gt; Index4(Index4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of authors available for the publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Authors.Index4(new Index4Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AuthorsListResponse
}
catch (ApiException<Index4Error> ex)
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

<code>[Index4Request](src/Beehiiv/Requests/Authors/Index4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorsListResponse](src/Beehiiv/Models/AuthorsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index4Error](src/Beehiiv/Errors/Index4Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AuthorsGetResponse&gt; Show(ShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single author from a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Authors.Show(new ShowRequest
    {
        PublicationId = "some example string",
        AuthorId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AuthorsGetResponse
}
catch (ApiException<ShowError> ex)
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

<code>[ShowRequest](src/Beehiiv/Requests/Authors/ShowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorsGetResponse](src/Beehiiv/Models/AuthorsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[ShowError](src/Beehiiv/Errors/ShowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AutomationJourneys

> Source: [AutomationJourneys](src/Beehiiv/Api/AutomationJourneys.cs)

<details>
<summary><code>Task&lt;AutomationJourneysResponse&gt; Create2(Create2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an existing subscription to an automation flow. Requires the automation to have an active *Add by API* trigger. The specified `email` or `subscription_id` will be matched against your existing subscribers. If an existing subscriber is found, they will be enrolled immediately.
Looking to enroll new subscribers? Use the **Create Subscription** endpoint instead and specify the `automation_ids` param.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AutomationJourneys.Create2(new Create2Request
    {
        PublicationId = "some example string",
        AutomationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AutomationJourneysResponse
}
catch (ApiException<Create2Error> ex)
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

<code>[Create2Request](src/Beehiiv/Requests/AutomationJourneys/Create2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationJourneysResponse](src/Beehiiv/Models/AutomationJourneysResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create2Error](src/Beehiiv/Errors/Create2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutomationJourneysIndexResponse&gt; Index5(Index5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of automation journeys that have occurred within a specific automation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AutomationJourneys.Index5(new Index5Request
    {
        PublicationId = "some example string",
        AutomationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AutomationJourneysIndexResponse
}
catch (ApiException<Index5Error> ex)
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

<code>[Index5Request](src/Beehiiv/Requests/AutomationJourneys/Index5Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationJourneysIndexResponse](src/Beehiiv/Models/AutomationJourneysIndexResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index5Error](src/Beehiiv/Errors/Index5Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutomationJourneysResponse&gt; Show2(Show2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single automation journey by ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AutomationJourneys.Show2(new Show2Request
    {
        PublicationId = "some example string",
        AutomationId = "some example string",
        AutomationJourneyId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AutomationJourneysResponse
}
catch (ApiException<Show2Error> ex)
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

<code>[Show2Request](src/Beehiiv/Requests/AutomationJourneys/Show2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationJourneysResponse](src/Beehiiv/Models/AutomationJourneysResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show2Error](src/Beehiiv/Errors/Show2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Automations

> Source: [Automations](src/Beehiiv/Api/Automations.cs)

<details>
<summary><code>Task&lt;AutomationsListResponse&gt; Index6(Index6Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve automations for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automations.Index6(new Index6Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AutomationsListResponse
}
catch (ApiException<Index6Error> ex)
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

<code>[Index6Request](src/Beehiiv/Requests/Automations/Index6Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationsListResponse](src/Beehiiv/Models/AutomationsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index6Error](src/Beehiiv/Errors/Index6Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutomationEmailsListResponse&gt; ListEmails(ListEmailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all emails belonging to a specific automation, including engagement statistics for each email.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automations.ListEmails(new ListEmailsRequest
    {
        PublicationId = "some example string",
        AutomationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AutomationEmailsListResponse
}
catch (ApiException<ListEmailsError> ex)
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

<code>[ListEmailsRequest](src/Beehiiv/Requests/Automations/ListEmailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationEmailsListResponse](src/Beehiiv/Models/AutomationEmailsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[ListEmailsError](src/Beehiiv/Errors/ListEmailsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AutomationsGetResponse&gt; Show3(Show3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single automation for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automations.Show3(new Show3Request
    {
        PublicationId = "some example string",
        AutomationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type AutomationsGetResponse
}
catch (ApiException<Show3Error> ex)
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

<code>[Show3Request](src/Beehiiv/Requests/Automations/Show3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AutomationsGetResponse](src/Beehiiv/Models/AutomationsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show3Error](src/Beehiiv/Errors/Show3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BulkSubscriptionUpdates

> Source: [BulkSubscriptionUpdates](src/Beehiiv/Api/BulkSubscriptionUpdates.cs)

<details>
<summary><code>Task&lt;BulkSubscriptionUpdatesListResponse&gt; Index7(Index7Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Subscription Update objects for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BulkSubscriptionUpdates.Index7(new Index7Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type BulkSubscriptionUpdatesListResponse
}
catch (ApiException<Index7Error> ex)
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

<code>[Index7Request](src/Beehiiv/Requests/BulkSubscriptionUpdates/Index7Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkSubscriptionUpdatesListResponse](src/Beehiiv/Models/BulkSubscriptionUpdatesListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index7Error](src/Beehiiv/Errors/Index7Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionsPatchResponse&gt; Patch(PatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BulkSubscriptionUpdates.Patch(new PatchRequest
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionsPatchResponse
}
catch (ApiException<PatchError> ex)
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

<code>[PatchRequest](src/Beehiiv/Requests/BulkSubscriptionUpdates/PatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionsPatchResponse](src/Beehiiv/Models/SubscriptionsPatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[PatchError](src/Beehiiv/Errors/PatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PatchStatus(PatchStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update subscriptions' status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.BulkSubscriptionUpdates.PatchStatus(new PatchStatusRequest
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
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

<code>[PatchStatusRequest](src/Beehiiv/Requests/BulkSubscriptionUpdates/PatchStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Beehiiv/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionsPatchResponse&gt; Put(PutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update multiple subscriptions fields, including status, custom fields, and tiers.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BulkSubscriptionUpdates.Put(new PutRequest
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionsPatchResponse
}
catch (ApiException<PutError> ex)
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

<code>[PutRequest](src/Beehiiv/Requests/BulkSubscriptionUpdates/PutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionsPatchResponse](src/Beehiiv/Models/SubscriptionsPatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[PutError](src/Beehiiv/Errors/PutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutStatus(PutStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update subscriptions' status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.BulkSubscriptionUpdates.PutStatus(new PutStatusRequest
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
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

<code>[PutStatusRequest](src/Beehiiv/Requests/BulkSubscriptionUpdates/PutStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Beehiiv/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkSubscriptionUpdatesGetResponse&gt; Show4(Show4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single Subscription Update object for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BulkSubscriptionUpdates.Show4(new Show4Request
    {
        PublicationId = "some example string",
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type BulkSubscriptionUpdatesGetResponse
}
catch (ApiException<Show4Error> ex)
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

<code>[Show4Request](src/Beehiiv/Requests/BulkSubscriptionUpdates/Show4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkSubscriptionUpdatesGetResponse](src/Beehiiv/Models/BulkSubscriptionUpdatesGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show4Error](src/Beehiiv/Errors/Show4Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BulkSubscriptions

> Source: [BulkSubscriptions](src/Beehiiv/Api/BulkSubscriptions.cs)

<details>
<summary><code>Task&lt;BulkSubscriptionCreateResponse&gt; Create3(Create3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create new subscriptions for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BulkSubscriptions.Create3(new Create3Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type BulkSubscriptionCreateResponse
}
catch (ApiException<Create3Error> ex)
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

<code>[Create3Request](src/Beehiiv/Requests/BulkSubscriptions/Create3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkSubscriptionCreateResponse](src/Beehiiv/Models/BulkSubscriptionCreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create3Error](src/Beehiiv/Errors/Create3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ComplimentaryAccessApi

> Source: [ComplimentaryAccessApi](src/Beehiiv/Api/ComplimentaryAccessApi.cs)

<details>
<summary><code>Task&lt;IndexComplimentaryAccessResponse&gt; Index8(Index8Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all complimentary access objects belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ComplimentaryAccessApi.Index8(new Index8Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type IndexComplimentaryAccessResponse
}
catch (ApiException<Index8Error> ex)
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

<code>[Index8Request](src/Beehiiv/Requests/ComplimentaryAccessApi/Index8Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IndexComplimentaryAccessResponse](src/Beehiiv/Models/IndexComplimentaryAccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index8Error](src/Beehiiv/Errors/Index8Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ComplimentaryAccessResponse&gt; Show5(Show5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single complimentary access object belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ComplimentaryAccessApi.Show5(new Show5Request
    {
        PublicationId = "some example string",
        ComplimentaryAccessId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ComplimentaryAccessResponse
}
catch (ApiException<Show5Error> ex)
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

<code>[Show5Request](src/Beehiiv/Requests/ComplimentaryAccessApi/Show5Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ComplimentaryAccessResponse](src/Beehiiv/Models/ComplimentaryAccessResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show5Error](src/Beehiiv/Errors/Show5Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ConditionSets

> Source: [ConditionSets](src/Beehiiv/Api/ConditionSets.cs)

<details>
<summary><code>Task&lt;ConditionSetsListResponse&gt; Index9(Index9Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all active condition sets for a publication. Condition sets define reusable audience segments for targeting content to specific subscribers. Use the `purpose` parameter to filter by a specific use case.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConditionSets.Index9(new Index9Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ConditionSetsListResponse
}
catch (ApiException<Index9Error> ex)
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

<code>[Index9Request](src/Beehiiv/Requests/ConditionSets/Index9Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConditionSetsListResponse](src/Beehiiv/Models/ConditionSetsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index9Error](src/Beehiiv/Errors/Index9Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConditionSetShowResponse&gt; Show6(Show6Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single active dynamic content condition set for a publication. Use `expand[]=stats` to calculate and return the active subscriber count synchronously.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConditionSets.Show6(new Show6Request
    {
        PublicationId = "some example string",
        ConditionSetId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ConditionSetShowResponse
}
catch (ApiException<Show6Error> ex)
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

<code>[Show6Request](src/Beehiiv/Requests/ConditionSets/Show6Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConditionSetShowResponse](src/Beehiiv/Models/ConditionSetShowResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show6Error](src/Beehiiv/Errors/Show6Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](src/Beehiiv/Api/CustomFields.cs)

<details>
<summary><code>Task&lt;CustomFieldResponse&gt; Create4(Create4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a custom field on a publication, for use in subscriptions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.Create4(new Create4Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomFieldResponse
}
catch (ApiException<Create4Error> ex)
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

<code>[Create4Request](src/Beehiiv/Requests/CustomFields/Create4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponse](src/Beehiiv/Models/CustomFieldResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create4Error](src/Beehiiv/Errors/Create4Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldsDeleteResponse&gt; Delete(DeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a custom field from a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.Delete(new DeleteRequest
    {
        PublicationId = "some example string",
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomFieldsDeleteResponse
}
catch (ApiException<DeleteError> ex)
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

<code>[DeleteRequest](src/Beehiiv/Requests/CustomFields/DeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldsDeleteResponse](src/Beehiiv/Models/CustomFieldsDeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[DeleteError](src/Beehiiv/Errors/DeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldIndexResponse&gt; Index10(Index10Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all custom fields on a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.Index10(new Index10Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomFieldIndexResponse
}
catch (ApiException<Index10Error> ex)
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

<code>[Index10Request](src/Beehiiv/Requests/CustomFields/Index10Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldIndexResponse](src/Beehiiv/Models/CustomFieldIndexResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index10Error](src/Beehiiv/Errors/Index10Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldsPatchResponse&gt; Patch2(Patch2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a custom field on a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.Patch2(new Patch2Request
    {
        PublicationId = "some example string",
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomFieldsPatchResponse
}
catch (ApiException<Patch2Error> ex)
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

<code>[Patch2Request](src/Beehiiv/Requests/CustomFields/Patch2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldsPatchResponse](src/Beehiiv/Models/CustomFieldsPatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Patch2Error](src/Beehiiv/Errors/Patch2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldResponse&gt; Put2(Put2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a custom field on a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.Put2(new Put2Request
    {
        PublicationId = "some example string",
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomFieldResponse
}
catch (ApiException<Put2Error> ex)
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

<code>[Put2Request](src/Beehiiv/Requests/CustomFields/Put2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponse](src/Beehiiv/Models/CustomFieldResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Put2Error](src/Beehiiv/Errors/Put2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomFieldResponse&gt; Show7(Show7Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

View a specific custom field on a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomFields.Show7(new Show7Request
    {
        PublicationId = "some example string",
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type CustomFieldResponse
}
catch (ApiException<Show7Error> ex)
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

<code>[Show7Request](src/Beehiiv/Requests/CustomFields/Show7Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponse](src/Beehiiv/Models/CustomFieldResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show7Error](src/Beehiiv/Errors/Show7Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataDeletion

> Source: [DataDeletion](src/Beehiiv/Api/DataDeletion.cs)

<details>
<summary><code>Task&lt;DataDeletionRequestResponse&gt; Create5(Create5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.

Creates a data deletion request for a subscriber within your organization. The subscriber's data will be redacted from all publications in the organization after a 14-day safety delay. This action cannot be undone once processing begins.

API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataDeletion.Create5(new Create5Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type DataDeletionRequestResponse
}
catch (ApiException<Create5Error> ex)
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

<code>[Create5Request](src/Beehiiv/Requests/DataDeletion/Create5Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataDeletionRequestResponse](src/Beehiiv/Models/DataDeletionRequestResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create5Error](src/Beehiiv/Errors/Create5Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DataDeletionRequestIndexResponse&gt; Index11(Index11Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.

List all data deletion requests for your organization.

API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataDeletion.Index11(new Index11Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type DataDeletionRequestIndexResponse
}
catch (ApiException<Index11Error> ex)
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

<code>[Index11Request](src/Beehiiv/Requests/DataDeletion/Index11Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataDeletionRequestIndexResponse](src/Beehiiv/Models/DataDeletionRequestIndexResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index11Error](src/Beehiiv/Errors/Index11Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DataDeletionRequestResponse&gt; Show8(Show8Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This is a gated feature that requires enablement. Contact support to enable Data Deletion API access for your organization.

Retrieve the details and current status of a specific data deletion request.

API keys restricted to specific publications cannot access this endpoint and will receive a 403 response, since deletion requests apply to the entire workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataDeletion.Show8(new Show8Request
    {
        PublicationId = "some example string",
        Id = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type DataDeletionRequestResponse
}
catch (ApiException<Show8Error> ex)
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

<code>[Show8Request](src/Beehiiv/Requests/DataDeletion/Show8Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DataDeletionRequestResponse](src/Beehiiv/Models/DataDeletionRequestResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show8Error](src/Beehiiv/Errors/Show8Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Engagements

> Source: [Engagements](src/Beehiiv/Api/Engagements.cs)

<details>
<summary><code>Task&lt;PublicationEngagementsResponse&gt; Index12(Index12Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve email engagement metrics for a specific publication over a defined date range and granularity.

By default, the endpoint returns metrics for the past day, aggregated daily. The max number of days allowed is 31. All dates and times are in UTC.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Engagements.Index12(new Index12Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PublicationEngagementsResponse
}
catch (ApiException<Index12Error> ex)
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

<code>[Index12Request](src/Beehiiv/Requests/Engagements/Index12Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicationEngagementsResponse](src/Beehiiv/Models/PublicationEngagementsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index12Error](src/Beehiiv/Errors/Index12Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NewsletterListSubscriptions

> Source: [NewsletterListSubscriptions](src/Beehiiv/Api/NewsletterListSubscriptions.cs)

<details>
<summary><code>Task&lt;NewsletterListSubscriptionResponse&gt; Create6(Create6Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe a subscription to a newsletter list. Accepts either a subscription_id or email to identify the subscription.

This endpoint only enrolls **existing** subscriptions. To create a new subscription **and** enroll it in one or more newsletter lists in a single call, use the Create subscription endpoint and pass the `newsletter_list_ids` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsletterListSubscriptions.Create6(new Create6Request
    {
        PublicationId = "some example string",
        NewsletterListId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type NewsletterListSubscriptionResponse
}
catch (ApiException<Create6Error> ex)
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

<code>[Create6Request](src/Beehiiv/Requests/NewsletterListSubscriptions/Create6Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListSubscriptionResponse](src/Beehiiv/Models/NewsletterListSubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create6Error](src/Beehiiv/Errors/Create6Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsletterListSubscriptionIndexResponse&gt; Index13(Index13Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all subscriptions for a newsletter list.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsletterListSubscriptions.Index13(new Index13Request
    {
        PublicationId = "some example string",
        NewsletterListId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type NewsletterListSubscriptionIndexResponse
}
catch (ApiException<Index13Error> ex)
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

<code>[Index13Request](src/Beehiiv/Requests/NewsletterListSubscriptions/Index13Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListSubscriptionIndexResponse](src/Beehiiv/Models/NewsletterListSubscriptionIndexResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index13Error](src/Beehiiv/Errors/Index13Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsletterListSubscriptionResponse&gt; Show9(Show9Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single newsletter list subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsletterListSubscriptions.Show9(new Show9Request
    {
        PublicationId = "some example string",
        NewsletterListId = "some example string",
        NewsletterListSubscriptionId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type NewsletterListSubscriptionResponse
}
catch (ApiException<Show9Error> ex)
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

<code>[Show9Request](src/Beehiiv/Requests/NewsletterListSubscriptions/Show9Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListSubscriptionResponse](src/Beehiiv/Models/NewsletterListSubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show9Error](src/Beehiiv/Errors/Show9Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsletterListSubscriptionResponse&gt; Update(UpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a newsletter list subscription. Currently supports unsubscribing a subscription from a newsletter list.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsletterListSubscriptions.Update(new UpdateRequest
    {
        PublicationId = "some example string",
        NewsletterListId = "some example string",
        NewsletterListSubscriptionId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type NewsletterListSubscriptionResponse
}
catch (ApiException<UpdateError> ex)
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

<code>[UpdateRequest](src/Beehiiv/Requests/NewsletterListSubscriptions/UpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListSubscriptionResponse](src/Beehiiv/Models/NewsletterListSubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[UpdateError](src/Beehiiv/Errors/UpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsletterListSubscriptionResponse&gt; UpdateBySubscriptionId(UpdateBySubscriptionIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a newsletter list subscription by subscription ID. An alternative to the update endpoint when you don't have the newsletter list subscription ID. Accepts either a subscription_id or email to identify the subscription. Currently supports unsubscribing a subscription from a newsletter list.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsletterListSubscriptions.UpdateBySubscriptionId(new UpdateBySubscriptionIdRequest
    {
        PublicationId = "some example string",
        NewsletterListId = "some example string",
        SubscriptionId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type NewsletterListSubscriptionResponse
}
catch (ApiException<UpdateBySubscriptionIdError> ex)
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

<code>[UpdateBySubscriptionIdRequest](src/Beehiiv/Requests/NewsletterListSubscriptions/UpdateBySubscriptionIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListSubscriptionResponse](src/Beehiiv/Models/NewsletterListSubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[UpdateBySubscriptionIdError](src/Beehiiv/Errors/UpdateBySubscriptionIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## NewsletterLists

> Source: [NewsletterLists](src/Beehiiv/Api/NewsletterLists.cs)

<details>
<summary><code>Task&lt;NewsletterListResponse&gt; Create7(Create7Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new newsletter list for a publication. The list will be created with an active status. The slug will be auto-generated from the name if not provided.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsletterLists.Create7(new Create7Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type NewsletterListResponse
}
catch (ApiException<Create7Error> ex)
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

<code>[Create7Request](src/Beehiiv/Requests/NewsletterLists/Create7Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListResponse](src/Beehiiv/Models/NewsletterListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create7Error](src/Beehiiv/Errors/Create7Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Delete2(Delete2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a newsletter list belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.NewsletterLists.Delete2(new Delete2Request
    {
        PublicationId = "some example string",
        NewsletterListId = "some example string",
        Authorization = "some example string",
    });
}
catch (ApiException<Delete2Error> ex)
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

<code>[Delete2Request](src/Beehiiv/Requests/NewsletterLists/Delete2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Delete2Error](src/Beehiiv/Errors/Delete2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsletterListIndexResponse&gt; Index14(Index14Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all newsletter lists for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsletterLists.Index14(new Index14Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type NewsletterListIndexResponse
}
catch (ApiException<Index14Error> ex)
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

<code>[Index14Request](src/Beehiiv/Requests/NewsletterLists/Index14Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListIndexResponse](src/Beehiiv/Models/NewsletterListIndexResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index14Error](src/Beehiiv/Errors/Index14Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsletterListResponse&gt; Show10(Show10Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single newsletter list belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsletterLists.Show10(new Show10Request
    {
        PublicationId = "some example string",
        NewsletterListId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type NewsletterListResponse
}
catch (ApiException<Show10Error> ex)
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

<code>[Show10Request](src/Beehiiv/Requests/NewsletterLists/Show10Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListResponse](src/Beehiiv/Models/NewsletterListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show10Error](src/Beehiiv/Errors/Show10Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsletterListResponse&gt; Update2(Update2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a newsletter list belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.NewsletterLists.Update2(new Update2Request
    {
        PublicationId = "some example string",
        NewsletterListId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type NewsletterListResponse
}
catch (ApiException<Update2Error> ex)
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

<code>[Update2Request](src/Beehiiv/Requests/NewsletterLists/Update2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsletterListResponse](src/Beehiiv/Models/NewsletterListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Update2Error](src/Beehiiv/Errors/Update2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Podcasts

> Source: [Podcasts](src/Beehiiv/Api/Podcasts.cs)

<details>
<summary><code>Task&lt;PodcastEpisodeGetResponse&gt; GetEpisode(GetEpisodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single episode belonging to a specific podcast.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Podcasts.GetEpisode(new GetEpisodeRequest
    {
        PublicationId = "some example string",
        PodcastShowId = "some example string",
        PodcastEpisodeId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PodcastEpisodeGetResponse
}
catch (ApiException<GetEpisodeError> ex)
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

<code>[GetEpisodeRequest](src/Beehiiv/Requests/Podcasts/GetEpisodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastEpisodeGetResponse](src/Beehiiv/Models/PodcastEpisodeGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[GetEpisodeError](src/Beehiiv/Errors/GetEpisodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PodcastShowGetResponse&gt; GetPodcast(GetPodcastRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single podcast belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Podcasts.GetPodcast(new GetPodcastRequest
    {
        PublicationId = "some example string",
        PodcastShowId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PodcastShowGetResponse
}
catch (ApiException<GetPodcastError> ex)
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

<code>[GetPodcastRequest](src/Beehiiv/Requests/Podcasts/GetPodcastRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastShowGetResponse](src/Beehiiv/Models/PodcastShowGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[GetPodcastError](src/Beehiiv/Errors/GetPodcastError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PodcastEpisodesListResponse&gt; ListEpisodes(ListEpisodesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all episodes belonging to a specific podcast.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Podcasts.ListEpisodes(new ListEpisodesRequest
    {
        PublicationId = "some example string",
        PodcastShowId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PodcastEpisodesListResponse
}
catch (ApiException<ListEpisodesError> ex)
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

<code>[ListEpisodesRequest](src/Beehiiv/Requests/Podcasts/ListEpisodesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastEpisodesListResponse](src/Beehiiv/Models/PodcastEpisodesListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[ListEpisodesError](src/Beehiiv/Errors/ListEpisodesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PodcastShowsListResponse&gt; ListPodcasts(ListPodcastsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all podcasts belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Podcasts.ListPodcasts(new ListPodcastsRequest
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PodcastShowsListResponse
}
catch (ApiException<ListPodcastsError> ex)
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

<code>[ListPodcastsRequest](src/Beehiiv/Requests/Podcasts/ListPodcastsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastShowsListResponse](src/Beehiiv/Models/PodcastShowsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[ListPodcastsError](src/Beehiiv/Errors/ListPodcastsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Polls

> Source: [Polls](src/Beehiiv/Api/Polls.cs)

<details>
<summary><code>Task&lt;PollsListResponse&gt; Index15(Index15Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all polls belonging to a specific publication. Poll choices are always included. Use `expand[]=stats` to include aggregate vote counts per choice.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Polls.Index15(new Index15Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PollsListResponse
}
catch (ApiException<Index15Error> ex)
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

<code>[Index15Request](src/Beehiiv/Requests/Polls/Index15Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PollsListResponse](src/Beehiiv/Models/PollsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index15Error](src/Beehiiv/Errors/Index15Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PollResponsesListResponse&gt; ListResponses(ListResponsesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all individual subscriber responses for a specific poll with cursor-based pagination. Use this endpoint for large datasets instead of the `expand[]=poll_responses` parameter on the poll show endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Polls.ListResponses(new ListResponsesRequest
    {
        PublicationId = "some example string",
        PollId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PollResponsesListResponse
}
catch (ApiException<ListResponsesError> ex)
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

<code>[ListResponsesRequest](src/Beehiiv/Requests/Polls/ListResponsesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PollResponsesListResponse](src/Beehiiv/Models/PollResponsesListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[ListResponsesError](src/Beehiiv/Errors/ListResponsesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PollShowResponse&gt; Show11(Show11Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information about a specific poll belonging to a publication. Use `expand[]=stats` for aggregate vote counts, or `expand[]=poll_responses` for individual subscriber responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Polls.Show11(new Show11Request
    {
        PublicationId = "some example string",
        PollId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PollShowResponse
}
catch (ApiException<Show11Error> ex)
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

<code>[Show11Request](src/Beehiiv/Requests/Polls/Show11Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PollShowResponse](src/Beehiiv/Models/PollShowResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show11Error](src/Beehiiv/Errors/Show11Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PostTemplates

> Source: [PostTemplates](src/Beehiiv/Api/PostTemplates.cs)

<details>
<summary><code>Task&lt;PostTemplatesGetResponse&gt; Index16(Index16Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of post templates available for the publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostTemplates.Index16(new Index16Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PostTemplatesGetResponse
}
catch (ApiException<Index16Error> ex)
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

<code>[Index16Request](src/Beehiiv/Requests/PostTemplates/Index16Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostTemplatesGetResponse](src/Beehiiv/Models/PostTemplatesGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index16Error](src/Beehiiv/Errors/Index16Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Posts

> Source: [Posts](src/Beehiiv/Api/Posts.cs)

<details>
<summary><code>Task&lt;PostsAggregateStatsResponse&gt; AggregateStats(AggregateStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve aggregate stats for all posts

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.AggregateStats(new AggregateStatsRequest
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PostsAggregateStatsResponse
}
catch (ApiException<AggregateStatsError> ex)
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

<code>[AggregateStatsRequest](src/Beehiiv/Requests/Posts/AggregateStatsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsAggregateStatsResponse](src/Beehiiv/Models/PostsAggregateStatsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[AggregateStatsError](src/Beehiiv/Errors/AggregateStatsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostsCreateResponse&gt; Create8(Create8Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is available to publications on the Max and Enterprise plans.

Create a post for a specific publication. For a detailed walkthrough including setup, testing workflows, and working with custom HTML and templates, see the Using the Send API and Create Post Endpoint guide.

## Asynchronous creation

Post creation is processed in the background. This endpoint returns `201` immediately with the post's `id`, but the post is not finished being created at that moment. The returned `id` is stable — it is the same id the post will have once creation completes.

If you fetch the post (`GET /publications/{publicationId}/posts/{postId}`) right away, it may not exist yet. In that case the fetch returns `202` (still being created) — wait briefly and retry, honoring the `Retry-After` header. If background creation fails, the fetch returns `404` with the error code `POST_CREATION_FAILED`, so you should stop retrying, verify your request, and try creating the post again.

## Content methods

There are three ways to provide content for a post. You must provide either `blocks` or `body_content`, but not both.

### 1. Blocks

Use the `blocks` field to build your post with structured content blocks such as paragraphs, images, headings, buttons, tables, and more. Each block has a `type` and its own set of properties. This method gives you fine-grained control over individual content elements and supports features like visual settings, visibility settings, and dynamic content targeting.

### 2. Raw HTML (`body_content`)

Use the `body_content` field to provide a single string of raw HTML. The HTML is wrapped in an `htmlSnippet` block internally. This is useful when you have pre-built HTML content or are migrating from another platform.

### 3. HTML blocks within blocks

Use `type: html` blocks inside the `blocks` array to embed raw HTML snippets alongside other structured blocks. This lets you mix structured content (paragraphs, images, etc.) with custom HTML where needed.

## CSS and styling guardrails

beehiiv processes all HTML content through a sanitization pipeline. When using `body_content` or `html` blocks, be aware of the following:

- **`` tags are removed.** All `` block elements are stripped during sanitization. Do not rely on embedded stylesheets.
- **`` tags are removed.** External stylesheet references are not allowed.
- **Inline styles are preserved.** Styles applied directly to elements via the `style` attribute (e.g., `
`) are kept intact.
- **CSS classes have no effect.** While class attributes are not stripped, no corresponding stylesheets are loaded to apply them.
- **beehiiv's email template wraps your content.** Your HTML is rendered inside beehiiv's email table structure, which applies its own layout and spacing. This may affect the appearance of your content.
- **Use inline styles for all visual styling.** Since `` and `` tags are removed, inline styles on individual elements are the only reliable way to control appearance.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.Create8(new Create8Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PostsCreateResponse
}
catch (ApiException<Create8Error> ex)
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

<code>[Create8Request](src/Beehiiv/Requests/Posts/Create8Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsCreateResponse](src/Beehiiv/Models/PostsCreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create8Error](src/Beehiiv/Errors/Create8Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostProcessing&gt; Delete3(Delete3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete or Archive a post. Any post that has been confirmed will have it's status changed to `archived`. Posts in the `draft` status will be permanently deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.Delete3(new Delete3Request
    {
        PublicationId = "some example string",
        PostId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PostProcessing
}
catch (ApiException<Delete3Error> ex)
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

<code>[Delete3Request](src/Beehiiv/Requests/Posts/Delete3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostProcessing](src/Beehiiv/Models/PostProcessing.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Delete3Error](src/Beehiiv/Errors/Delete3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostsListResponse&gt; Index17(Index17Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all posts belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.Index17(new Index17Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PostsListResponse
}
catch (ApiException<Index17Error> ex)
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

<code>[Index17Request](src/Beehiiv/Requests/Posts/Index17Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsListResponse](src/Beehiiv/Models/PostsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index17Error](src/Beehiiv/Errors/Index17Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostsPreviewResponse&gt; Preview(PreviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a URL to preview a post as a given audience. The returned `preview_url` renders the post in the beehiiv app and requires a beehiiv session with access to the publication - it is not itself an HTML-returning endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.Preview(new PreviewRequest
    {
        PublicationId = "some example string",
        PostId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PostsPreviewResponse
}
catch (ApiException<PreviewError> ex)
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

<code>[PreviewRequest](src/Beehiiv/Requests/Posts/PreviewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsPreviewResponse](src/Beehiiv/Models/PostsPreviewResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[PreviewError](src/Beehiiv/Errors/PreviewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostsGetResponse&gt; Show12(Show12Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single Post belonging to a specific publication.

Posts created via the Send API are built asynchronously, so a recently created post may not exist yet. When the post is still being created, this endpoint returns `202` (still being created) with a `Retry-After` header — wait briefly and retry. If background creation failed, it returns `404` with the error code `POST_CREATION_FAILED`, indicating the post will never become available; verify your request and try creating it again.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.Show12(new Show12Request
    {
        PublicationId = "some example string",
        PostId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PostsGetResponse
}
catch (ApiException<Show12Error> ex)
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

<code>[Show12Request](src/Beehiiv/Requests/Posts/Show12Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsGetResponse](src/Beehiiv/Models/PostsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show12Error](src/Beehiiv/Errors/Show12Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostsTestSendResponse&gt; TestSend(TestSendRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a test email for a specific post to one or more email addresses. Returns the number of remaining test sends for the day and the time at which the limit resets.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.TestSend(new TestSendRequest
    {
        PublicationId = "some example string",
        PostId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PostsTestSendResponse
}
catch (ApiException<TestSendError> ex)
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

<code>[TestSendRequest](src/Beehiiv/Requests/Posts/TestSendRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsTestSendResponse](src/Beehiiv/Models/PostsTestSendResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[TestSendError](src/Beehiiv/Errors/TestSendError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostsGetResponse&gt; Update3(Update3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is available to publications on the Max and Enterprise plans.

Update an existing post for a specific publication. Only the fields provided in the request body will be updated — all other fields remain unchanged. For a detailed walkthrough of content methods and working with custom HTML, see the Using the Send API and Create Post Endpoint guide.

To update post content, provide either `blocks` or `body_content` (not both). If neither is provided, the existing content is preserved. The same content methods and CSS guardrails described in the create endpoint apply here.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Posts.Update3(new Update3Request
    {
        PublicationId = "some example string",
        PostId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PostsGetResponse
}
catch (ApiException<Update3Error> ex)
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

<code>[Update3Request](src/Beehiiv/Requests/Posts/Update3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostsGetResponse](src/Beehiiv/Models/PostsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Update3Error](src/Beehiiv/Errors/Update3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Publications

> Source: [Publications](src/Beehiiv/Api/Publications.cs)

<details>
<summary><code>Task&lt;PublicationsListResponse&gt; Index18(Index18Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all publications associated with your API key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Publications.Index18(new Index18Request { Authorization = "some example string" });
    // TODO: Handle 'response' of type PublicationsListResponse
}
catch (ApiException<Index18Error> ex)
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

<code>[Index18Request](src/Beehiiv/Requests/Publications/Index18Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicationsListResponse](src/Beehiiv/Models/PublicationsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index18Error](src/Beehiiv/Errors/Index18Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicationsGetResponse&gt; Show13(Show13Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single publication

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Publications.Show13(new Show13Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type PublicationsGetResponse
}
catch (ApiException<Show13Error> ex)
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

<code>[Show13Request](src/Beehiiv/Requests/Publications/Show13Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicationsGetResponse](src/Beehiiv/Models/PublicationsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show13Error](src/Beehiiv/Errors/Show13Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ReferralProgram

> Source: [ReferralProgram](src/Beehiiv/Api/ReferralProgram.cs)

<details>
<summary><code>Task&lt;ReferralProgramGetResponse&gt; Show14(Show14Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details about the publication's referral program, including milestones and rewards.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ReferralProgram.Show14(new Show14Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type ReferralProgramGetResponse
}
catch (ApiException<Show14Error> ex)
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

<code>[Show14Request](src/Beehiiv/Requests/ReferralProgram/Show14Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReferralProgramGetResponse](src/Beehiiv/Models/ReferralProgramGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show14Error](src/Beehiiv/Errors/Show14Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Segments

> Source: [Segments](src/Beehiiv/Api/Segments.cs)

<details>
<summary><code>Task&lt;SegmentShowResponse&gt; Create9(Create9Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new segment.

**Manual segments** — Use `subscriptions` or `emails` input to create a segment from an explicit list of subscription IDs or email addresses. The segment is processed synchronously and returns with `status: completed`. Net new email addresses will be ignored; create subscriptions using the `Create Subscription` endpoint.

**Dynamic segments** — Use `custom_fields` input to create a segment that filters subscribers by custom field values. The segment is processed asynchronously and returns with `status: pending`. Results will be available in the `List Segment Subscribers` endpoint after processing is complete.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Segments.Create9(new Create9Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SegmentShowResponse
}
catch (ApiException<Create9Error> ex)
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

<code>[Create9Request](src/Beehiiv/Requests/Segments/Create9Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentShowResponse](src/Beehiiv/Models/SegmentShowResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create9Error](src/Beehiiv/Errors/Create9Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SegmentDeleteResponse&gt; Delete4(Delete4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a segment. Deleting the segment does not effect the subscriptions in the segment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Segments.Delete4(new Delete4Request
    {
        PublicationId = "some example string",
        SegmentId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SegmentDeleteResponse
}
catch (ApiException<Delete4Error> ex)
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

<code>[Delete4Request](src/Beehiiv/Requests/Segments/Delete4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentDeleteResponse](src/Beehiiv/Models/SegmentDeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Delete4Error](src/Beehiiv/Errors/Delete4Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SegmentsGetResponse&gt; ExpandResults(ExpandResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List subscriber IDs for a segment. Returns a lightweight array of subscription IDs only, without additional subscriber details.
**Use this endpoint when you only need subscriber IDs** (e.g., for counting, ID-based lookups, or integrations with external systems). If you need full subscriber details (email, status, custom fields, etc.), use `/segments/{segmentId}/members` instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Segments.ExpandResults(new ExpandResultsRequest
    {
        PublicationId = "some example string",
        SegmentId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SegmentsGetResponse
}
catch (ApiException<ExpandResultsError> ex)
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

<code>[ExpandResultsRequest](src/Beehiiv/Requests/Segments/ExpandResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentsGetResponse](src/Beehiiv/Models/SegmentsGetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[ExpandResultsError](src/Beehiiv/Errors/ExpandResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SegmentsListResponse&gt; Index19(Index19Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about all segments belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Segments.Index19(new Index19Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SegmentsListResponse
}
catch (ApiException<Index19Error> ex)
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

<code>[Index19Request](src/Beehiiv/Requests/Segments/Index19Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentsListResponse](src/Beehiiv/Models/SegmentsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index19Error](src/Beehiiv/Errors/Index19Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SegmentMembersResponse&gt; ListMembers(ListMembersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all members in a segment with full subscription data. Each member is returned as a subscription object containing complete subscriber information and their subscription details. Supports optional expansions for stats, custom fields, tags, referrals, and premium tiers.
**Use this endpoint when you need detailed subscriber information.** If you only need subscriber IDs, use `/segments/{segmentId}/results` for a lighter-weight response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Segments.ListMembers(new ListMembersRequest
    {
        PublicationId = "some example string",
        SegmentId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SegmentMembersResponse
}
catch (ApiException<ListMembersError> ex)
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

<code>[ListMembersRequest](src/Beehiiv/Requests/Segments/ListMembersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentMembersResponse](src/Beehiiv/Models/SegmentMembersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[ListMembersError](src/Beehiiv/Errors/ListMembersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SegmentRecalculateResponse&gt; Recalculate(RecalculateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Recalculates a specific segment belonging to a publication

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Segments.Recalculate(new RecalculateRequest
    {
        PublicationId = "some example string",
        SegmentId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SegmentRecalculateResponse
}
catch (ApiException<RecalculateError> ex)
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

<code>[RecalculateRequest](src/Beehiiv/Requests/Segments/RecalculateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentRecalculateResponse](src/Beehiiv/Models/SegmentRecalculateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[RecalculateError](src/Beehiiv/Errors/RecalculateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SegmentShowResponse&gt; Show15(Show15Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a specific segment belonging to a publication

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Segments.Show15(new Show15Request
    {
        PublicationId = "some example string",
        SegmentId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SegmentShowResponse
}
catch (ApiException<Show15Error> ex)
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

<code>[Show15Request](src/Beehiiv/Requests/Segments/Show15Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SegmentShowResponse](src/Beehiiv/Models/SegmentShowResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show15Error](src/Beehiiv/Errors/Show15Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SubscriptionTags

> Source: [SubscriptionTags](src/Beehiiv/Api/SubscriptionTags.cs)

<details>
<summary><code>Task&lt;SubscriptionTagsCreateResponse&gt; Create10(Create10Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds tags to a subscription. If the tag does not exist on the publication, it will be created automatically.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SubscriptionTags.Create10(new Create10Request
    {
        PublicationId = "some example string",
        SubscriptionId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionTagsCreateResponse
}
catch (ApiException<Create10Error> ex)
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

<code>[Create10Request](src/Beehiiv/Requests/SubscriptionTags/Create10Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionTagsCreateResponse](src/Beehiiv/Models/SubscriptionTagsCreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create10Error](src/Beehiiv/Errors/Create10Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](src/Beehiiv/Api/Subscriptions.cs)

<details>
<summary><code>Task&lt;SubscriptionResponse&gt; Create11(Create11Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create new subscriptions for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.Create11(new Create11Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionResponse
}
catch (ApiException<Create11Error> ex)
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

<code>[Create11Request](src/Beehiiv/Requests/Subscriptions/Create11Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/Beehiiv/Models/SubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create11Error](src/Beehiiv/Errors/Create11Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionDeleteResponse&gt; Delete5(Delete5Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This cannot be undone. All data associated with the subscription will also be deleted. We recommend unsubscribing when possible instead of deleting. If a premium subscription is deleted they will no longer be billed. Deletes a subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.Delete5(new Delete5Request
    {
        PublicationId = "some example string",
        SubscriptionId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionDeleteResponse
}
catch (ApiException<Delete5Error> ex)
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

<code>[Delete5Request](src/Beehiiv/Requests/Subscriptions/Delete5Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionDeleteResponse](src/Beehiiv/Models/SubscriptionDeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Delete5Error](src/Beehiiv/Errors/Delete5Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionResponse&gt; GetByEmail(GetByEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Please note that this endpoint requires the email to be URL encoded. Please reference your language's documentation for the correct method of encoding. Retrieve a single subscription belonging to a specific email address in a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.GetByEmail(new GetByEmailRequest
    {
        PublicationId = "some example string",
        Email = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionResponse
}
catch (ApiException<GetByEmailError> ex)
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

<code>[GetByEmailRequest](src/Beehiiv/Requests/Subscriptions/GetByEmailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/Beehiiv/Models/SubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[GetByEmailError](src/Beehiiv/Errors/GetByEmailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionResponse&gt; GetById(GetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

In previous versions of the API, another endpoint existed to retrieve a subscription by the subscriber ID. This endpoint is now deprecated and will be removed in a future version of the API. Please use this endpoint instead. The subscription ID can be found by exporting a list of subscriptions either via the `Settings > Publications > Export Data` or by exporting a CSV in a segment. Retrieve a single subscription belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.GetById(new GetByIdRequest
    {
        PublicationId = "some example string",
        SubscriptionId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionResponse
}
catch (ApiException<GetByIdError> ex)
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

<code>[GetByIdRequest](src/Beehiiv/Requests/Subscriptions/GetByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/Beehiiv/Models/SubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[GetByIdError](src/Beehiiv/Errors/GetByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionsListResponse&gt; Index20(Index20Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all subscriptions belonging to a specific publication.

**New**: This endpoint now supports cursor-based pagination for better performance and consistency. Use the `cursor` parameter instead of `page` for new integrations.
**Deprecation Notice**: Offset-based pagination (using `page` parameter) is deprecated and limited to 100 pages maximum. Please migrate to cursor-based pagination. See our Pagination Guide for details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.Index20(new Index20Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionsListResponse
}
catch (ApiException<Index20Error> ex)
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

<code>[Index20Request](src/Beehiiv/Requests/Subscriptions/Index20Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionsListResponse](src/Beehiiv/Models/SubscriptionsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index20Error](src/Beehiiv/Errors/Index20Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionResponse&gt; Patch3(Patch3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.Patch3(new Patch3Request
    {
        PublicationId = "some example string",
        SubscriptionId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionResponse
}
catch (ApiException<Patch3Error> ex)
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

<code>[Patch3Request](src/Beehiiv/Requests/Subscriptions/Patch3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/Beehiiv/Models/SubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Patch3Error](src/Beehiiv/Errors/Patch3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionResponse&gt; Put3(Put3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.Put3(new Put3Request
    {
        PublicationId = "some example string",
        SubscriptionId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionResponse
}
catch (ApiException<Put3Error> ex)
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

<code>[Put3Request](src/Beehiiv/Requests/Subscriptions/Put3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/Beehiiv/Models/SubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Put3Error](src/Beehiiv/Errors/Put3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionResponse&gt; UpdateByEmail(UpdateByEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a single subscription by email.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Subscriptions.UpdateByEmail(new UpdateByEmailRequest
    {
        PublicationId = "some example string",
        Email = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type SubscriptionResponse
}
catch (ApiException<UpdateByEmailError> ex)
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

<code>[UpdateByEmailRequest](src/Beehiiv/Requests/Subscriptions/UpdateByEmailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponse](src/Beehiiv/Models/SubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[UpdateByEmailError](src/Beehiiv/Errors/UpdateByEmailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tiers

> Source: [Tiers](src/Beehiiv/Api/Tiers.cs)

<details>
<summary><code>Task&lt;TierResponse&gt; Create12(Create12Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new tier for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tiers.Create12(new Create12Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type TierResponse
}
catch (ApiException<Create12Error> ex)
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

<code>[Create12Request](src/Beehiiv/Requests/Tiers/Create12Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TierResponse](src/Beehiiv/Models/TierResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create12Error](src/Beehiiv/Errors/Create12Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IndexTiersResponse&gt; Index21(Index21Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all tiers belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tiers.Index21(new Index21Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type IndexTiersResponse
}
catch (ApiException<Index21Error> ex)
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

<code>[Index21Request](src/Beehiiv/Requests/Tiers/Index21Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IndexTiersResponse](src/Beehiiv/Models/IndexTiersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index21Error](src/Beehiiv/Errors/Index21Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TierResponse&gt; Patch4(Patch4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing tier belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tiers.Patch4(new Patch4Request
    {
        PublicationId = "some example string",
        TierId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type TierResponse
}
catch (ApiException<Patch4Error> ex)
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

<code>[Patch4Request](src/Beehiiv/Requests/Tiers/Patch4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TierResponse](src/Beehiiv/Models/TierResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Patch4Error](src/Beehiiv/Errors/Patch4Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TierResponse&gt; Put4(Put4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing tier belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tiers.Put4(new Put4Request
    {
        PublicationId = "some example string",
        TierId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type TierResponse
}
catch (ApiException<Put4Error> ex)
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

<code>[Put4Request](src/Beehiiv/Requests/Tiers/Put4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TierResponse](src/Beehiiv/Models/TierResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Put4Error](src/Beehiiv/Errors/Put4Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TierResponse&gt; Show16(Show16Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single tier belonging to a specific publication

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tiers.Show16(new Show16Request
    {
        PublicationId = "some example string",
        TierId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type TierResponse
}
catch (ApiException<Show16Error> ex)
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

<code>[Show16Request](src/Beehiiv/Requests/Tiers/Show16Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TierResponse](src/Beehiiv/Models/TierResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show16Error](src/Beehiiv/Errors/Show16Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tokens

> Source: [Tokens](src/Beehiiv/Api/Tokens.cs)

<details>
<summary><code>Task&lt;IntrospectionResponse&gt; Introspect(IntrospectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns whether a token is active and metadata about the token. Send parameters as `application/x-www-form-urlencoded`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tokens.Introspect(new IntrospectRequest());
    // TODO: Handle 'response' of type IntrospectionResponse
}
catch (ApiException<IntrospectError> ex)
{
    if (ex.Error.TryGetOAuthError(out var error))
    {
        // TODO: Handle 'error' of type OAuthError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IntrospectRequest](src/Beehiiv/Requests/Tokens/IntrospectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntrospectionResponse](src/Beehiiv/Models/IntrospectionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[IntrospectError](src/Beehiiv/Errors/IntrospectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;object&gt; Revoke(RevokeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes an access token or refresh token. Send parameters as `application/x-www-form-urlencoded`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tokens.Revoke(new RevokeRequest());
    // TODO: Handle 'response' of type object
}
catch (ApiException<RevokeError> ex)
{
    if (ex.Error.TryGetOAuthError(out var error))
    {
        // TODO: Handle 'error' of type OAuthError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RevokeRequest](src/Beehiiv/Requests/Tokens/RevokeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>object</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[RevokeError](src/Beehiiv/Errors/RevokeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TokenResponse&gt; Token(TokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges an authorization code for an access token, or exchanges a refresh token for a new access token. Send parameters as application/x-www-form-urlencoded.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tokens.Token(new TokenRequest());
    // TODO: Handle 'response' of type TokenResponse
}
catch (ApiException<TokenError> ex)
{
    if (ex.Error.TryGetOAuthError(out var error))
    {
        // TODO: Handle 'error' of type OAuthError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TokenRequest](src/Beehiiv/Requests/Tokens/TokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenResponse](src/Beehiiv/Models/TokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[TokenError](src/Beehiiv/Errors/TokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TokenInfoResponse&gt; TokenInfo(TokenInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metadata for the current access token.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tokens.TokenInfo(new TokenInfoRequest { Authorization = "some example string" });
    // TODO: Handle 'response' of type TokenInfoResponse
}
catch (ApiException<TokenInfoError> ex)
{
    if (ex.Error.TryGetOAuthError(out var error))
    {
        // TODO: Handle 'error' of type OAuthError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TokenInfoRequest](src/Beehiiv/Requests/Tokens/TokenInfoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenInfoResponse](src/Beehiiv/Models/TokenInfoResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[TokenInfoError](src/Beehiiv/Errors/TokenInfoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Beehiiv/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;WebhookResponse&gt; Create13(Create13Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new webhook for a given publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.Create13(new Create13Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type WebhookResponse
}
catch (ApiException<Create13Error> ex)
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

<code>[Create13Request](src/Beehiiv/Requests/WebhooksApi/Create13Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](src/Beehiiv/Models/WebhookResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Create13Error](src/Beehiiv/Errors/Create13Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksDeleteResponse&gt; Delete6(Delete6Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook subscription from a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.Delete6(new Delete6Request
    {
        PublicationId = "some example string",
        EndpointId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type WebhooksDeleteResponse
}
catch (ApiException<Delete6Error> ex)
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

<code>[Delete6Request](src/Beehiiv/Requests/WebhooksApi/Delete6Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksDeleteResponse](src/Beehiiv/Models/WebhooksDeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Delete6Error](src/Beehiiv/Errors/Delete6Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IndexWebhooksResponse&gt; Index22(Index22Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all webhooks belonging to a specific publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.Index22(new Index22Request
    {
        PublicationId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type IndexWebhooksResponse
}
catch (ApiException<Index22Error> ex)
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

<code>[Index22Request](src/Beehiiv/Requests/WebhooksApi/Index22Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IndexWebhooksResponse](src/Beehiiv/Models/IndexWebhooksResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Index22Error](src/Beehiiv/Errors/Index22Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookResponse&gt; Show17(Show17Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a specific webhook belonging to a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.Show17(new Show17Request
    {
        PublicationId = "some example string",
        EndpointId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type WebhookResponse
}
catch (ApiException<Show17Error> ex)
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

<code>[Show17Request](src/Beehiiv/Requests/WebhooksApi/Show17Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](src/Beehiiv/Models/WebhookResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Show17Error](src/Beehiiv/Errors/Show17Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhookResponse&gt; Update4(Update4Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a webhook subscription for a publication.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.Update4(new Update4Request
    {
        PublicationId = "some example string",
        EndpointId = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type WebhookResponse
}
catch (ApiException<Update4Error> ex)
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

<code>[Update4Request](src/Beehiiv/Requests/WebhooksApi/Update4Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookResponse](src/Beehiiv/Models/WebhookResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Update4Error](src/Beehiiv/Errors/Update4Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/Beehiiv/Api/Workspaces.cs)

<details>
<summary><code>Task&lt;WorkspaceIdentifyResponse&gt; Identify2(Identify2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about the workspace the OAuth or API token is associated with.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.Identify2(new Identify2Request { Authorization = "some example string" });
    // TODO: Handle 'response' of type WorkspaceIdentifyResponse
}
catch (ApiException<Identify2Error> ex)
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

<code>[Identify2Request](src/Beehiiv/Requests/Workspaces/Identify2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceIdentifyResponse](src/Beehiiv/Models/WorkspaceIdentifyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[Identify2Error](src/Beehiiv/Errors/Identify2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspacePermissionsResponse&gt; Permissions(PermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the permissions granted to the OAuth or API token for this workspace. API keys return all granular OAuth scopes. OAuth tokens return only the scopes they were authorized for.

`posts` write access is only included when the Send API feature is enabled; tokens with `posts:write` but without Send API receive `posts` as `["read"]`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.Permissions(new PermissionsRequest
    {
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type WorkspacePermissionsResponse
}
catch (ApiException<PermissionsError> ex)
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

<code>[PermissionsRequest](src/Beehiiv/Requests/Workspaces/PermissionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspacePermissionsResponse](src/Beehiiv/Models/WorkspacePermissionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[PermissionsError](src/Beehiiv/Errors/PermissionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;PublicationsBySubscriptionEmailResponseItem&gt;&gt; PublicationsBySubscriptionEmail(PublicationsBySubscriptionEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve all publications in the workspace that have a subscription for the specified email address. The workspace is determined by the provided API key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.PublicationsBySubscriptionEmail(new PublicationsBySubscriptionEmailRequest
    {
        Email = "some example string",
        Authorization = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<PublicationsBySubscriptionEmailResponseItem>
}
catch (ApiException<PublicationsBySubscriptionEmailError> ex)
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

<code>[PublicationsBySubscriptionEmailRequest](src/Beehiiv/Requests/Workspaces/PublicationsBySubscriptionEmailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[PublicationsBySubscriptionEmailResponseItem](src/Beehiiv/Models/PublicationsBySubscriptionEmailResponseItem.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[PublicationsBySubscriptionEmailError](src/Beehiiv/Errors/PublicationsBySubscriptionEmailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OauthUsers

> Source: [OauthUsers](src/Beehiiv/Api/OauthUsers.cs)

<details>
<summary><code>Task&lt;UserIdentifyResponse&gt; Identify(IdentifyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about the user who authorized the OAuth access token.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OauthUsers.Identify(new IdentifyRequest { Authorization = "some example string" });
    // TODO: Handle 'response' of type UserIdentifyResponse
}
catch (ApiException<IdentifyError> ex)
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

<code>[IdentifyRequest](src/Beehiiv/Requests/OauthUsers/IdentifyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserIdentifyResponse](src/Beehiiv/Models/UserIdentifyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Beehiiv/Core/Exceptions/ApiException.cs)&lt;[IdentifyError](src/Beehiiv/Errors/IdentifyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

