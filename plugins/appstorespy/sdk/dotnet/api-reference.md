# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AppstoreSpyClient](src/AppstoreSpy/AppstoreSpyClient.cs)

## AppStore

> Source: [AppStore](src/AppstoreSpy/Api/AppStore.cs)

<details>
<summary><code>Task&lt;IosDevListResponse&gt; DevFilterSearchIosDevelopersQueryPost(DevFilterSearchIosDevelopersQueryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches App Store developers by a structured JSON filter, with paging and sorting. `GET /ios/developers` covers the free-text equivalent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.DevFilterSearchIosDevelopersQueryPost(
        new DevFilterSearchIosDevelopersQueryPostRequest
        {
            Body = new IosDevSearchBody
            {
                Limit = 2,
                Sort = DevSortEnum.Revenue2,
                Fields = [
                    "id",
                    "name",
                    "seller_name",
                    "hq_country",
                    "category",
                    "type",
                    "total_apps",
                    "revenue",
                    "downloads",
                ],
                Filter = new SearchFilterDevIos
                {
                    HqCountry = ["SE"],
                    Type = TypeEnum.App,
                    TotalApps = new ValueRange { Gte = 2 },
                },
            },
        });
    // TODO: Handle 'response' of type IosDevListResponse
}
catch (ApiException<DevFilterSearchIosDevelopersQueryPostError> ex)
{
    if (ex.Error.TryGetIosDevelopersQuery401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosDevelopersQuery401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DevFilterSearchIosDevelopersQueryPostRequest](src/AppstoreSpy/Requests/AppStore/DevFilterSearchIosDevelopersQueryPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IosDevListResponse](src/AppstoreSpy/Models/IosDevListResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[DevFilterSearchIosDevelopersQueryPostError](src/AppstoreSpy/Errors/DevFilterSearchIosDevelopersQueryPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;IosDev&gt;&gt; DevSearchIosDevelopersGet(DevSearchIosDevelopersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across App Store developers using a `field:value` query such as `hq_country:US`. To filter on structured criteria, use `POST /ios/developers/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.DevSearchIosDevelopersGet(new DevSearchIosDevelopersGetRequest
    {
        Q = "hq_country:US",
        Sort = "-total_apps,-installs",
    });
    // TODO: Handle 'response' of type IReadOnlyList<IosDev>
}
catch (ApiException<DevSearchIosDevelopersGetError> ex)
{
    if (ex.Error.TryGetIosDevelopers401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosDevelopers401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DevSearchIosDevelopersGetRequest](src/AppstoreSpy/Requests/AppStore/DevSearchIosDevelopersGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[IosDev](src/AppstoreSpy/Models/IosDev.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[DevSearchIosDevelopersGetError](src/AppstoreSpy/Errors/DevSearchIosDevelopersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IosApp&gt; GetAppDetailsIosAppsIdGet(GetAppDetailsIosAppsIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full App Store listing for a single app, looked up by its numeric App Store id. Use `country` to select the storefront and `language` for the metadata language; `fields` limits the response to the columns you need.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetAppDetailsIosAppsIdGet(new GetAppDetailsIosAppsIdGetRequest
    {
        Id = "333903271",
    });
    // TODO: Handle 'response' of type IosApp
}
catch (ApiException<GetAppDetailsIosAppsIdGetError> ex)
{
    if (ex.Error.TryGetIosApps401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosApps401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAppDetailsIosAppsIdGetRequest](src/AppstoreSpy/Requests/AppStore/GetAppDetailsIosAppsIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IosApp](src/AppstoreSpy/Models/IosApp.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetAppDetailsIosAppsIdGetError](src/AppstoreSpy/Errors/GetAppDetailsIosAppsIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;IosApp&gt;&gt; GetAppSearchIosAppsGet(GetAppSearchIosAppsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across App Store listings, returning a ranked list of matching apps. To filter on structured criteria such as revenue, downloads or category, use `POST /ios/apps/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetAppSearchIosAppsGet(new GetAppSearchIosAppsGetRequest
    {
        Q = "Twitter",
        Sort = "-revenue",
    });
    // TODO: Handle 'response' of type IReadOnlyList<IosApp>
}
catch (ApiException<GetAppSearchIosAppsGetError> ex)
{
    if (ex.Error.TryGetIosApps401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosApps401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAppSearchIosAppsGetRequest](src/AppstoreSpy/Requests/AppStore/GetAppSearchIosAppsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[IosApp](src/AppstoreSpy/Models/IosApp.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetAppSearchIosAppsGetError](src/AppstoreSpy/Errors/GetAppSearchIosAppsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;DevAppsEstimates&gt;&gt; GetAppsEstimatesIosDevelopersIdEstimatesGet(GetAppsEstimatesIosDevelopersIdEstimatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps estimates

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGet(
        new GetAppsEstimatesIosDevelopersIdEstimatesGetRequest { Id = "296415947" });
    // TODO: Handle 'response' of type IReadOnlyList<DevAppsEstimates>
}
catch (ApiException<GetAppsEstimatesIosDevelopersIdEstimatesGetError> ex)
{
    if (ex.Error.TryGetIosDevelopersEstimates401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosDevelopersEstimates401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAppsEstimatesIosDevelopersIdEstimatesGetRequest](src/AppstoreSpy/Requests/AppStore/GetAppsEstimatesIosDevelopersIdEstimatesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[DevAppsEstimates](src/AppstoreSpy/Models/DevAppsEstimates.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetAppsEstimatesIosDevelopersIdEstimatesGetError](src/AppstoreSpy/Errors/GetAppsEstimatesIosDevelopersIdEstimatesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;AppsEstimates&gt;&gt; GetAppsEstimatesIosEstimatesGet(GetAppsEstimatesIosEstimatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get App Store apps estimates

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetAppsEstimatesIosEstimatesGet(new GetAppsEstimatesIosEstimatesGetRequest
    {
        Id = "333903271",
    });
    // TODO: Handle 'response' of type IReadOnlyList<AppsEstimates>
}
catch (ApiException<GetAppsEstimatesIosEstimatesGetError> ex)
{
    if (ex.Error.TryGetIosEstimates401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosEstimates401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAppsEstimatesIosEstimatesGetRequest](src/AppstoreSpy/Requests/AppStore/GetAppsEstimatesIosEstimatesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[AppsEstimates](src/AppstoreSpy/Models/AppsEstimates.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetAppsEstimatesIosEstimatesGetError](src/AppstoreSpy/Errors/GetAppsEstimatesIosEstimatesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DevCountryAggregatesResponse&gt; GetCountryAggregatesIosAggregatesCountriesGet(GetCountryAggregatesIosAggregatesCountriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per-country totals over all App Store developers: developer count, published apps, and sums of monthly downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category type. Sorted by downloads descending.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetCountryAggregatesIosAggregatesCountriesGet(
        new GetCountryAggregatesIosAggregatesCountriesGetRequest());
    // TODO: Handle 'response' of type DevCountryAggregatesResponse
}
catch (ApiException<GetCountryAggregatesIosAggregatesCountriesGetError> ex)
{
    if (ex.Error.TryGetIosAggregatesCountries401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosAggregatesCountries401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCountryAggregatesIosAggregatesCountriesGetRequest](src/AppstoreSpy/Requests/AppStore/GetCountryAggregatesIosAggregatesCountriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DevCountryAggregatesResponse](src/AppstoreSpy/Models/DevCountryAggregatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetCountryAggregatesIosAggregatesCountriesGetError](src/AppstoreSpy/Errors/GetCountryAggregatesIosAggregatesCountriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IosDev&gt; GetDeveloperIosDevelopersIdGet(GetDeveloperIosDevelopersIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the App Store developer record for a single developer id, including the developer's publisher identifiers and headquarters country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetDeveloperIosDevelopersIdGet(new GetDeveloperIosDevelopersIdGetRequest
    {
        Id = "1641486560",
    });
    // TODO: Handle 'response' of type IosDev
}
catch (ApiException<GetDeveloperIosDevelopersIdGetError> ex)
{
    if (ex.Error.TryGetIosDevelopers401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosDevelopers401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDeveloperIosDevelopersIdGetRequest](src/AppstoreSpy/Requests/AppStore/GetDeveloperIosDevelopersIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IosDev](src/AppstoreSpy/Models/IosDev.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetDeveloperIosDevelopersIdGetError](src/AppstoreSpy/Errors/GetDeveloperIosDevelopersIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IosAppListResponse&gt; GetFilterSearchIosAppsQueryPost(GetFilterSearchIosAppsQueryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

|**Fields**||||
|---|---|---|---|
|**Name** |**Type** |**Sort**|**Description**|
|name |string |- |Name|
|bundle |string |- |Bundle|
|description_full |string |- |Full Description|
|published |boolean |- |Published|
|listing_visible |boolean |- |Published in request country|
|category |string |- |Сategory|
|category_type |string |- |Type|
|revenue_month |integer |+ |Monthly Revenue|
|revenue_lifetime |integer |- |Lifetime Revenue|
|downloads_month |integer |+ |Monthly Downloads|
|downloads_lifetime|integer |- |Lifetime Downloads|
|update_date |date ISO8601|+ |Last Updated|
|release_date |date ISO8601|+ |Release date|
|developer_name |string |- |Developer name|
|description_short|string |- |Short description|
|whatsnew |string |- |Whatsnew|
|icon |string |- |Image|
|video |string |- |Trailer|
|screenshots |[]string |- |Screenshots|
|screenshots_duo_inner|[]string|- |iPhone Duo inner display screenshots|
|screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots|
|removal_date |date ISO8601|+ |Removal date|
|version |string |- |Version|
|size |float |- |Size|
|rating_count |integer |+ |Ratings|
|rating_value |float |+ |Rating in request country|
|review_count |integer |+ |Reviews|
|rating_avg |float |+ |Rating|
|iap |boolean |- |Inapp|
|copyright |string |- |Copyright|
|seller |string |- |Seller|
|chart_info |object |+ |App's chart info: category, collection, country, position for today|

|**Filters**|||
|---|---|---|
|**Name**|**Type**|**Description**|
|name|string|Name|
|published|boolean|Published|
|category_type|string|APP or GAME|
|revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|update_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|rating_count|ValueRange|{"gte": 1000, "lte": 5000}|
|developer|string|Developer name|
|developer_id|string|Developer id|
|active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
|category|string|App Store category: "TRAVEL", "EDUCATION", "GAMES_STRATEGY", "LIFESTYLE" etc|
|review_count|ValueRange|{"gte": 1000, "lte": 5000}|
|rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
|with_ads|boolean|With Ads|
|advertised|boolean|Advertised|

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetFilterSearchIosAppsQueryPost(new GetFilterSearchIosAppsQueryPostRequest
    {
        Body = new IosAppSearchBody
        {
            Limit = 2,
            Sort = IosSortEnum.DownloadsMonth2,
            Fields = ["id", "name", "developer_name", "category", "downloads_month", "revenue_month", "rating_value"],
            Filter = new SearchFilterIos { Published = true, DeveloperId = "324684583" },
        },
    });
    // TODO: Handle 'response' of type IosAppListResponse
}
catch (ApiException<GetFilterSearchIosAppsQueryPostError> ex)
{
    if (ex.Error.TryGetIosAppsQuery401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosAppsQuery401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFilterSearchIosAppsQueryPostRequest](src/AppstoreSpy/Requests/AppStore/GetFilterSearchIosAppsQueryPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IosAppListResponse](src/AppstoreSpy/Models/IosAppListResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetFilterSearchIosAppsQueryPostError](src/AppstoreSpy/Errors/GetFilterSearchIosAppsQueryPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiResponseListModelsResponsesResponseIosRankingItem&gt; GetIosRankingsIosRankingsGet(GetIosRankingsIosRankingsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns App Store chart positions over a date range, filtered by storefront, category, collection and platform. One row per app per chart per day.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetIosRankingsIosRankingsGet(new GetIosRankingsIosRankingsGetRequest());
    // TODO: Handle 'response' of type ApiResponseListModelsResponsesResponseIosRankingItem
}
catch (ApiException<GetIosRankingsIosRankingsGetError> ex)
{
    if (ex.Error.TryGetIosRankings401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosRankings401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIosRankingsIosRankingsGetRequest](src/AppstoreSpy/Requests/AppStore/GetIosRankingsIosRankingsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiResponseListModelsResponsesResponseIosRankingItem](src/AppstoreSpy/Models/ApiResponseListModelsResponsesResponseIosRankingItem.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetIosRankingsIosRankingsGetError](src/AppstoreSpy/Errors/GetIosRankingsIosRankingsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoreCountries&gt; GetPlayAppCountriesIosInfoCountriesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of App Store storefronts available as a `country` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetPlayAppCountriesIosInfoCountriesGet();
    // TODO: Handle 'response' of type StoreCountries
}
catch (ApiException<GetPlayAppCountriesIosInfoCountriesGetError> ex)
{
    if (ex.Error.TryGetIosInfoCountries401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosInfoCountries401Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoreCountries](src/AppstoreSpy/Models/StoreCountries.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetPlayAppCountriesIosInfoCountriesGetError](src/AppstoreSpy/Errors/GetPlayAppCountriesIosInfoCountriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoreLanguages&gt; GetPlayAppLanguagesIosInfoLanguagesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of metadata languages available as a `language` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetPlayAppLanguagesIosInfoLanguagesGet();
    // TODO: Handle 'response' of type StoreLanguages
}
catch (ApiException<GetPlayAppLanguagesIosInfoLanguagesGetError> ex)
{
    if (ex.Error.TryGetIosInfoLanguages401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosInfoLanguages401Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoreLanguages](src/AppstoreSpy/Models/StoreLanguages.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetPlayAppLanguagesIosInfoLanguagesGetError](src/AppstoreSpy/Errors/GetPlayAppLanguagesIosInfoLanguagesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRecrawlIosAppsIdRecrawlGet(GetRecrawlIosAppsIdRecrawlGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues a fresh crawl of one App Store app for the given storefront and language. Returns 200 once the job is accepted; the updated data appears on the app endpoints after the crawl completes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AppStore.GetRecrawlIosAppsIdRecrawlGet(new GetRecrawlIosAppsIdRecrawlGetRequest { Id = "333903271" });
}
catch (ApiException<GetRecrawlIosAppsIdRecrawlGetError> ex)
{
    if (ex.Error.TryGetIosAppsRecrawl401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosAppsRecrawl401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRecrawlIosAppsIdRecrawlGetRequest](src/AppstoreSpy/Requests/AppStore/GetRecrawlIosAppsIdRecrawlGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetRecrawlIosAppsIdRecrawlGetError](src/AppstoreSpy/Errors/GetRecrawlIosAppsIdRecrawlGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;IosReview&gt;&gt; GetReviewsIosAppsIdReviewsGet(GetReviewsIosAppsIdReviewsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns user reviews for a single App Store app. Reviews are storefront-specific, so `country` changes which set is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetReviewsIosAppsIdReviewsGet(new GetReviewsIosAppsIdReviewsGetRequest
    {
        Id = "333903271",
        Sort = "rating,-date",
    });
    // TODO: Handle 'response' of type IReadOnlyList<IosReview>
}
catch (ApiException<GetReviewsIosAppsIdReviewsGetError> ex)
{
    if (ex.Error.TryGetIosAppsReviews401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosAppsReviews401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetReviewsIosAppsIdReviewsGetRequest](src/AppstoreSpy/Requests/AppStore/GetReviewsIosAppsIdReviewsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[IosReview](src/AppstoreSpy/Models/IosReview.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetReviewsIosAppsIdReviewsGetError](src/AppstoreSpy/Errors/GetReviewsIosAppsIdReviewsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IosAppListResponse&gt; GetSimilarIosAppsSimilarPost(GetSimilarIosAppsSimilarPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the apps App Store lists as similar to the given app. Set `link` to the reverse direction to get the apps that list the given app as similar to them instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetSimilarIosAppsSimilarPost(new GetSimilarIosAppsSimilarPostRequest
    {
        Body = new IosSimilarSearchBody
        {
            Limit = 2,
            Sort = IosSortEnum.DownloadsMonth2,
            Fields = ["id", "name", "developer_name", "category", "downloads_month", "rating_value"],
            Filter = new SearchFilterIos { Published = true },
            Id = "310633997",
            Link = SimilarEnum.To,
        },
    });
    // TODO: Handle 'response' of type IosAppListResponse
}
catch (ApiException<GetSimilarIosAppsSimilarPostError> ex)
{
    if (ex.Error.TryGetIosAppsSimilar401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosAppsSimilar401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSimilarIosAppsSimilarPostRequest](src/AppstoreSpy/Requests/AppStore/GetSimilarIosAppsSimilarPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IosAppListResponse](src/AppstoreSpy/Models/IosAppListResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetSimilarIosAppsSimilarPostError](src/AppstoreSpy/Errors/GetSimilarIosAppsSimilarPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummaryResponse&gt; GetSummaryIosAppsSummaryPost(GetSummaryIosAppsSummaryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns aggregate totals for the set of App Store apps matching a structured filter, without returning the apps themselves. Takes the same filter body as `POST /ios/apps/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AppStore.GetSummaryIosAppsSummaryPost(new GetSummaryIosAppsSummaryPostRequest
    {
        Body = new IosSummarySearchBody { Filter = new SearchFilterIos { Published = true } },
    });
    // TODO: Handle 'response' of type SummaryResponse
}
catch (ApiException<GetSummaryIosAppsSummaryPostError> ex)
{
    if (ex.Error.TryGetIosAppsSummary401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosAppsSummary401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSummaryIosAppsSummaryPostRequest](src/AppstoreSpy/Requests/AppStore/GetSummaryIosAppsSummaryPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummaryResponse](src/AppstoreSpy/Models/SummaryResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetSummaryIosAppsSummaryPostError](src/AppstoreSpy/Errors/GetSummaryIosAppsSummaryPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/AppstoreSpy/Api/Events.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Event&gt;&gt; GetEventsPlayLiveopsGet(GetEventsPlayLiveopsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one country. Responds 202 while a fresh crawl is in progress.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Events.GetEventsPlayLiveopsGet(new GetEventsPlayLiveopsGetRequest
    {
        App = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<Event>
}
catch (ApiException<GetEventsPlayLiveopsGetError> ex)
{
    if (ex.Error.TryGetPlayLiveops401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayLiveops401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEventsPlayLiveopsGetRequest](src/AppstoreSpy/Requests/Events/GetEventsPlayLiveopsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Event](src/AppstoreSpy/Models/Event.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetEventsPlayLiveopsGetError](src/AppstoreSpy/Errors/GetEventsPlayLiveopsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GooglePlay

> Source: [GooglePlay](src/AppstoreSpy/Api/GooglePlay.cs)

<details>
<summary><code>Task&lt;PlayDevListResponse&gt; DevFilterSearchPlayDevelopersQueryPost(DevFilterSearchPlayDevelopersQueryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches Google Play developers by a structured JSON filter, with paging and sorting. `GET /play/developers` covers the free-text equivalent.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.DevFilterSearchPlayDevelopersQueryPost(
        new DevFilterSearchPlayDevelopersQueryPostRequest
        {
            Body = new PlayDevSearchBody
            {
                Limit = 2,
                Sort = DevSortEnum.Revenue2,
                Fields = ["id", "name", "hq_country", "category", "type", "total_apps", "revenue", "downloads"],
                Filter = new SearchFilterDevPlay
                {
                    HqCountry = ["SE"],
                    Type = TypeEnum.App,
                    TotalApps = new ValueRange { Gte = 2 },
                },
            },
        });
    // TODO: Handle 'response' of type PlayDevListResponse
}
catch (ApiException<DevFilterSearchPlayDevelopersQueryPostError> ex)
{
    if (ex.Error.TryGetPlayDevelopersQuery401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayDevelopersQuery401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DevFilterSearchPlayDevelopersQueryPostRequest](src/AppstoreSpy/Requests/GooglePlay/DevFilterSearchPlayDevelopersQueryPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlayDevListResponse](src/AppstoreSpy/Models/PlayDevListResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[DevFilterSearchPlayDevelopersQueryPostError](src/AppstoreSpy/Errors/DevFilterSearchPlayDevelopersQueryPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;PlayDev&gt;&gt; DevSearchPlayDevelopersGet(DevSearchPlayDevelopersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across Google Play developers using a `field:value` query such as `hq_country:US`. To filter on structured criteria, use `POST /play/developers/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.DevSearchPlayDevelopersGet(new DevSearchPlayDevelopersGetRequest
    {
        Q = "hq_country:US",
        Sort = "-total_apps,-installs",
    });
    // TODO: Handle 'response' of type IReadOnlyList<PlayDev>
}
catch (ApiException<DevSearchPlayDevelopersGetError> ex)
{
    if (ex.Error.TryGetPlayDevelopers401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayDevelopers401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DevSearchPlayDevelopersGetRequest](src/AppstoreSpy/Requests/GooglePlay/DevSearchPlayDevelopersGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[PlayDev](src/AppstoreSpy/Models/PlayDev.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[DevSearchPlayDevelopersGetError](src/AppstoreSpy/Errors/DevSearchPlayDevelopersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlayApp&gt; GetAppDetailsPlayAppsIdGet(GetAppDetailsPlayAppsIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full Google Play listing for a single app, looked up by its bundle id. Use `country` to select the storefront and `language` for the metadata language; `fields` limits the response to the columns you need.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetAppDetailsPlayAppsIdGet(new GetAppDetailsPlayAppsIdGetRequest
    {
        Id = "com.twitter.android",
    });
    // TODO: Handle 'response' of type PlayApp
}
catch (ApiException<GetAppDetailsPlayAppsIdGetError> ex)
{
    if (ex.Error.TryGetPlayApps401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayApps401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAppDetailsPlayAppsIdGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetAppDetailsPlayAppsIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlayApp](src/AppstoreSpy/Models/PlayApp.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetAppDetailsPlayAppsIdGetError](src/AppstoreSpy/Errors/GetAppDetailsPlayAppsIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;PlayApp&gt;&gt; GetAppSearchPlayAppsGet(GetAppSearchPlayAppsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Free-text search across Google Play listings, returning a ranked list of matching apps. To filter on structured criteria such as revenue, installs or category, use `POST /play/apps/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetAppSearchPlayAppsGet(new GetAppSearchPlayAppsGetRequest
    {
        Q = "X",
        Sort = "-installs_exact,-revenue",
    });
    // TODO: Handle 'response' of type IReadOnlyList<PlayApp>
}
catch (ApiException<GetAppSearchPlayAppsGetError> ex)
{
    if (ex.Error.TryGetPlayApps401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayApps401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAppSearchPlayAppsGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetAppSearchPlayAppsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[PlayApp](src/AppstoreSpy/Models/PlayApp.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetAppSearchPlayAppsGetError](src/AppstoreSpy/Errors/GetAppSearchPlayAppsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;DevAppsEstimates&gt;&gt; GetAppsEstimatesPlayDevelopersIdEstimatesGet(GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps estimates

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGet(
        new GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest { Id = "7022973042396704692" });
    // TODO: Handle 'response' of type IReadOnlyList<DevAppsEstimates>
}
catch (ApiException<GetAppsEstimatesPlayDevelopersIdEstimatesGetError> ex)
{
    if (ex.Error.TryGetPlayDevelopersEstimates401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayDevelopersEstimates401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[DevAppsEstimates](src/AppstoreSpy/Models/DevAppsEstimates.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetAppsEstimatesPlayDevelopersIdEstimatesGetError](src/AppstoreSpy/Errors/GetAppsEstimatesPlayDevelopersIdEstimatesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;AppsEstimates&gt;&gt; GetAppsEstimatesPlayEstimatesGet(GetAppsEstimatesPlayEstimatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps estimates

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetAppsEstimatesPlayEstimatesGet(new GetAppsEstimatesPlayEstimatesGetRequest
    {
        Id = "com.twitter.android",
    });
    // TODO: Handle 'response' of type IReadOnlyList<AppsEstimates>
}
catch (ApiException<GetAppsEstimatesPlayEstimatesGetError> ex)
{
    if (ex.Error.TryGetPlayEstimates401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayEstimates401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAppsEstimatesPlayEstimatesGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetAppsEstimatesPlayEstimatesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[AppsEstimates](src/AppstoreSpy/Models/AppsEstimates.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetAppsEstimatesPlayEstimatesGetError](src/AppstoreSpy/Errors/GetAppsEstimatesPlayEstimatesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;AppsDailyInstalls&gt;&gt; GetAppsInstallsDailyPlayAppsIdInstallsDailyGet(GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Google Play apps daily installs.

`ipd` is derived from the cumulative install total: each increase is spread evenly across the elapsed days since the total last changed, so collection gaps and lagging reports are amortised rather than reported as a single-day spike. Values are raw and never negative.

By default these are unsmoothed figures. AppstoreSpy's Daily Installs chart additionally applies a moving average for readability. Pass `smooth=true` to get that series: a centered, triangular-weighted 9-day moving average of `ipd` (weights 1,2,3,4,5,4,3,2,1; days without data are skipped and the weights renormalised). Neighbouring days outside `start`/`end` are included in the window, so the first and last days are smoothed the same way as the rest.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGet(
        new GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest { Id = "com.twitter.android" });
    // TODO: Handle 'response' of type IReadOnlyList<AppsDailyInstalls>
}
catch (ApiException<GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError> ex)
{
    if (ex.Error.TryGetPlayAppsInstallsDaily401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayAppsInstallsDaily401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[AppsDailyInstalls](src/AppstoreSpy/Models/AppsDailyInstalls.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError](src/AppstoreSpy/Errors/GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DevCountryAggregatesResponse&gt; GetCountryAggregatesPlayAggregatesCountriesGet(GetCountryAggregatesPlayAggregatesCountriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per-country totals over all Google Play developers: developer count, published apps, and sums of monthly downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category type. Sorted by downloads descending.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGet(
        new GetCountryAggregatesPlayAggregatesCountriesGetRequest());
    // TODO: Handle 'response' of type DevCountryAggregatesResponse
}
catch (ApiException<GetCountryAggregatesPlayAggregatesCountriesGetError> ex)
{
    if (ex.Error.TryGetPlayAggregatesCountries401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayAggregatesCountries401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCountryAggregatesPlayAggregatesCountriesGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetCountryAggregatesPlayAggregatesCountriesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DevCountryAggregatesResponse](src/AppstoreSpy/Models/DevCountryAggregatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetCountryAggregatesPlayAggregatesCountriesGetError](src/AppstoreSpy/Errors/GetCountryAggregatesPlayAggregatesCountriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlayDev&gt; GetDeveloperPlayDevelopersIdGet(GetDeveloperPlayDevelopersIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Google Play developer record for a single developer id, including the developer's publisher identifiers and headquarters country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetDeveloperPlayDevelopersIdGet(new GetDeveloperPlayDevelopersIdGetRequest
    {
        Id = "6891936352065498609",
    });
    // TODO: Handle 'response' of type PlayDev
}
catch (ApiException<GetDeveloperPlayDevelopersIdGetError> ex)
{
    if (ex.Error.TryGetPlayDevelopers401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayDevelopers401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDeveloperPlayDevelopersIdGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetDeveloperPlayDevelopersIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlayDev](src/AppstoreSpy/Models/PlayDev.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetDeveloperPlayDevelopersIdGetError](src/AppstoreSpy/Errors/GetDeveloperPlayDevelopersIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Event&gt;&gt; GetEventsPlayLiveopsGet2(GetEventsPlayLiveopsGet2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one app in one country. Responds 202 while a fresh crawl is in progress.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetEventsPlayLiveopsGet2(new GetEventsPlayLiveopsGet2Request
    {
        App = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<Event>
}
catch (ApiException<GetEventsPlayLiveopsGet2Error> ex)
{
    if (ex.Error.TryGetPlayLiveops401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayLiveops401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEventsPlayLiveopsGet2Request](src/AppstoreSpy/Requests/GooglePlay/GetEventsPlayLiveopsGet2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Event](src/AppstoreSpy/Models/Event.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetEventsPlayLiveopsGet2Error](src/AppstoreSpy/Errors/GetEventsPlayLiveopsGet2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlayAppListResponse&gt; GetFilterSearchPlayAppsQueryPost(GetFilterSearchPlayAppsQueryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

|**Fields**||||
|---|---|---|---|
|**Name** |**Type** |**Sort**|**Description**|
|name |string |- |Name|
|bundle |string |- |Bundle|
|description_full |string |- |Description|
|published |boolean |- |Published|
|listing_visible |boolean |- |Published in request country|
|category |string |- |Category|
|category_type |string |- |Type|
|revenue_month |integer |+ |Monthly Revenue|
|revenue_lifetime |integer |- |Lifetime Revenue|
|downloads_month |integer |+ |Monthly Downloads|
|downloads_lifetime|integer |- |Lifetime Downloads|
|update_date |date ISO8601|+ |Last Updated|
|release_date |date ISO8601|+ |Release date|
|developer_name |string |- |Developer name|
|description_short|string |- |Short description|
|whatsnew |string |- |Whatsnew|
|icon |string |- |Image|
|video |string |- |Trailer|
|screenshots |[]string |- |Screenshots|
|feature_graphic |string |- |Feature graphic|
|removal_date |date ISO8601|+ |Removal date|
|version |string |- |Version|
|size |float |- |Size|
|downloads_daily |integer |+ |Daily Installs|
|downloads_exact |integer |+ |Total Installs|
|downloads_mark |integer |+ |Installs|
|rating_count |integer |+ |Ratings|
|rating_value |float |+ |Rating in request country|
|review_count |integer |+ |Reviews|
|rating_avg |float |+ |Rating|
|iap |boolean |- |Inapp|
|editorial |boolean |- |Editor's choise|
|hosts |[]string |- |Hosts|
|chart_info |object |+ |App's chart info: category, collection, country, position for today|

|**Filters**|||
|---|---|---|
|**Name**|**Type**|**Description**|
|name|string|Name|
|published|boolean|Published|
|category_type|string|APP or GAME|
|revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|update_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|rating_count|ValueRange|{"gte": 1000, "lte": 5000}|
|developer|string|Developer name|
|developer_id|string|Developer id|
|editorial|boolean|Editor's choise|
|iap|boolean|Inapp|
|active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
|category|string|Google Play category: "GAME_ARCADE", "SOCIAL", "ART_AND_DESIGN", "LIFESTYLE" etc|
|downloads_mark|integer|100, 500, 1000, 5000, 10000 etc|
|downloads_daily|ValueRange|{"gte": 1000, "lte": 5000}|
|downloads_exact|ValueRange|{"gte": 1000, "lte": 5000}|
|review_count|ValueRange|{"gte": 1000, "lte": 5000}|
|similar_apps|string|"com.twitter.android" - Twitter similar apps|
|reverse_similar_apps|string|"com.twitter.android" - Apps with Twitter in similar's list|
|rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
|hosts|string||
|with_ads|boolean|With Ads|
|advertised|boolean|Advertised|

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetFilterSearchPlayAppsQueryPost(new GetFilterSearchPlayAppsQueryPostRequest
    {
        Body = new PlayAppSearchBody
        {
            Limit = 2,
            Sort = PlaySortEnum.DownloadsMonth2,
            Fields = ["id", "name", "developer_name", "category", "downloads_month", "revenue_month", "rating_value"],
            Filter = new SearchFilterPlay { Published = true, DeveloperId = "6523013212965523194" },
        },
    });
    // TODO: Handle 'response' of type PlayAppListResponse
}
catch (ApiException<GetFilterSearchPlayAppsQueryPostError> ex)
{
    if (ex.Error.TryGetPlayAppsQuery401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayAppsQuery401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFilterSearchPlayAppsQueryPostRequest](src/AppstoreSpy/Requests/GooglePlay/GetFilterSearchPlayAppsQueryPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlayAppListResponse](src/AppstoreSpy/Models/PlayAppListResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetFilterSearchPlayAppsQueryPostError](src/AppstoreSpy/Errors/GetFilterSearchPlayAppsQueryPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlayListing&gt; GetListingPlayAppsIdListingGet(GetListingPlayAppsIdListingGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the store listing of one app for a country and language exactly as Google Play serves it: title, short and full description, what's new, icon, feature graphic, trailer and screenshots. Any language Google Play Console accepts can be requested. The listing is crawled on demand and kept; `freshness` sets how old a kept listing may be before it is crawled again. A call waits for a running crawl for up to about 30 seconds and answers 202 with the crawl state if it is still running; repeat the same request to get the listing. Pass `wait=false` to get the 202 immediately. Repeated requests for the same listing share one crawl. `translated` tells whether Google Play machine-translated the texts instead of showing a translation the developer supplied. The call that queues a crawl costs the crawl price, even when it answers 202; a call served from a kept listing, including a kept not-found, costs the read price; a 202 to a call that found the crawl already running costs nothing, and so do a 400, a 422, a 429 and any 5xx, a failed crawl (502) included.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetListingPlayAppsIdListingGet(new GetListingPlayAppsIdListingGetRequest
    {
        Id = "com.twitter.android",
    });
    // TODO: Handle 'response' of type PlayListing
}
catch (ApiException<GetListingPlayAppsIdListingGetError> ex)
{
    if (ex.Error.TryGetPlayAppsListing401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayAppsListing401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetListingPlayAppsIdListingGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetListingPlayAppsIdListingGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlayListing](src/AppstoreSpy/Models/PlayListing.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetListingPlayAppsIdListingGetError](src/AppstoreSpy/Errors/GetListingPlayAppsIdListingGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoreCountries&gt; GetPlayAppCountriesPlayInfoCountriesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of Google Play app available countries.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetPlayAppCountriesPlayInfoCountriesGet();
    // TODO: Handle 'response' of type StoreCountries
}
catch (ApiException<GetPlayAppCountriesPlayInfoCountriesGetError> ex)
{
    if (ex.Error.TryGetPlayInfoCountries401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayInfoCountries401Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoreCountries](src/AppstoreSpy/Models/StoreCountries.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetPlayAppCountriesPlayInfoCountriesGetError](src/AppstoreSpy/Errors/GetPlayAppCountriesPlayInfoCountriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoreLanguages&gt; GetPlayAppLanguagesPlayInfoLanguagesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This query returns the list of Google Play app available languages.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetPlayAppLanguagesPlayInfoLanguagesGet();
    // TODO: Handle 'response' of type StoreLanguages
}
catch (ApiException<GetPlayAppLanguagesPlayInfoLanguagesGetError> ex)
{
    if (ex.Error.TryGetPlayInfoLanguages401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayInfoLanguages401Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoreLanguages](src/AppstoreSpy/Models/StoreLanguages.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetPlayAppLanguagesPlayInfoLanguagesGetError](src/AppstoreSpy/Errors/GetPlayAppLanguagesPlayInfoLanguagesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiResponseListModelsResponsesResponsePlayRankingItem&gt; GetPlayRankingsPlayRankingsGet(GetPlayRankingsPlayRankingsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Google Play chart positions over a date range, filtered by country, category and collection. One row per app per chart per day.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetPlayRankingsPlayRankingsGet(new GetPlayRankingsPlayRankingsGetRequest());
    // TODO: Handle 'response' of type ApiResponseListModelsResponsesResponsePlayRankingItem
}
catch (ApiException<GetPlayRankingsPlayRankingsGetError> ex)
{
    if (ex.Error.TryGetPlayRankings401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayRankings401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPlayRankingsPlayRankingsGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetPlayRankingsPlayRankingsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiResponseListModelsResponsesResponsePlayRankingItem](src/AppstoreSpy/Models/ApiResponseListModelsResponsesResponsePlayRankingItem.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetPlayRankingsPlayRankingsGetError](src/AppstoreSpy/Errors/GetPlayRankingsPlayRankingsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetRecrawlPlayAppsIdRecrawlGet(GetRecrawlPlayAppsIdRecrawlGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Queues a fresh crawl of one Google Play app for the given country and language. Returns 200 once the job is accepted; the updated data appears on the app endpoints after the crawl completes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.GooglePlay.GetRecrawlPlayAppsIdRecrawlGet(new GetRecrawlPlayAppsIdRecrawlGetRequest
    {
        Id = "com.twitter.android",
    });
}
catch (ApiException<GetRecrawlPlayAppsIdRecrawlGetError> ex)
{
    if (ex.Error.TryGetPlayAppsRecrawl401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayAppsRecrawl401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRecrawlPlayAppsIdRecrawlGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetRecrawlPlayAppsIdRecrawlGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetRecrawlPlayAppsIdRecrawlGetError](src/AppstoreSpy/Errors/GetRecrawlPlayAppsIdRecrawlGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;PlayReview&gt;&gt; GetReviewsPlayAppsIdReviewsGet(GetReviewsPlayAppsIdReviewsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns user reviews for a single Google Play app. Reviews are country- and language-specific, so `country` and `language` change which set is returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetReviewsPlayAppsIdReviewsGet(new GetReviewsPlayAppsIdReviewsGetRequest
    {
        Id = "com.twitter.android",
        Language = AppLanguages.EnUs,
        Sort = "stars,-likes",
    });
    // TODO: Handle 'response' of type IReadOnlyList<PlayReview>
}
catch (ApiException<GetReviewsPlayAppsIdReviewsGetError> ex)
{
    if (ex.Error.TryGetPlayAppsReviews401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayAppsReviews401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetReviewsPlayAppsIdReviewsGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetReviewsPlayAppsIdReviewsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[PlayReview](src/AppstoreSpy/Models/PlayReview.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetReviewsPlayAppsIdReviewsGetError](src/AppstoreSpy/Errors/GetReviewsPlayAppsIdReviewsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlayAppListResponse&gt; GetSimilarPlayAppsSimilarPost(GetSimilarPlayAppsSimilarPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the apps Google Play lists as similar to the given app. Set `link` to the reverse direction to get the apps that list the given app as similar to them instead.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetSimilarPlayAppsSimilarPost(new GetSimilarPlayAppsSimilarPostRequest
    {
        Body = new SimilarSearchBody
        {
            Limit = 2,
            Sort = PlaySortEnum.DownloadsMonth2,
            Fields = ["id", "name", "developer_name", "category", "downloads_month", "rating_value"],
            Filter = new SearchFilterPlay { Published = true },
            Id = "com.whatsapp",
            Link = SimilarEnum.To,
        },
    });
    // TODO: Handle 'response' of type PlayAppListResponse
}
catch (ApiException<GetSimilarPlayAppsSimilarPostError> ex)
{
    if (ex.Error.TryGetPlayAppsSimilar401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayAppsSimilar401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSimilarPlayAppsSimilarPostRequest](src/AppstoreSpy/Requests/GooglePlay/GetSimilarPlayAppsSimilarPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlayAppListResponse](src/AppstoreSpy/Models/PlayAppListResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetSimilarPlayAppsSimilarPostError](src/AppstoreSpy/Errors/GetSimilarPlayAppsSimilarPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Suggest&gt; GetSuggestsPlaySuggestionsGet(GetSuggestsPlaySuggestionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with a partial result while a fresh crawl is in progress; `freshness` sets how old a cached result may be before it is recrawled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetSuggestsPlaySuggestionsGet(new GetSuggestsPlaySuggestionsGetRequest
    {
        Q = "some example string",
    });
    // TODO: Handle 'response' of type Suggest
}
catch (ApiException<GetSuggestsPlaySuggestionsGetError> ex)
{
    if (ex.Error.TryGetPlaySuggestions401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlaySuggestions401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSuggestsPlaySuggestionsGetRequest](src/AppstoreSpy/Requests/GooglePlay/GetSuggestsPlaySuggestionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Suggest](src/AppstoreSpy/Models/Suggest.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetSuggestsPlaySuggestionsGetError](src/AppstoreSpy/Errors/GetSuggestsPlaySuggestionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SummaryResponse&gt; GetSummaryPlayAppsSummaryPost(GetSummaryPlayAppsSummaryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns aggregate totals for the set of Google Play apps matching a structured filter, without returning the apps themselves. Takes the same filter body as `POST /play/apps/query`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GooglePlay.GetSummaryPlayAppsSummaryPost(new GetSummaryPlayAppsSummaryPostRequest
    {
        Body = new SummarySearchBody { Filter = new SearchFilterPlay { Published = true } },
    });
    // TODO: Handle 'response' of type SummaryResponse
}
catch (ApiException<GetSummaryPlayAppsSummaryPostError> ex)
{
    if (ex.Error.TryGetPlayAppsSummary401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlayAppsSummary401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSummaryPlayAppsSummaryPostRequest](src/AppstoreSpy/Requests/GooglePlay/GetSummaryPlayAppsSummaryPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SummaryResponse](src/AppstoreSpy/Models/SummaryResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetSummaryPlayAppsSummaryPostError](src/AppstoreSpy/Errors/GetSummaryPlayAppsSummaryPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/AppstoreSpy/Api/Jobs.cs)

<details>
<summary><code>Task&lt;SearchResult&gt; CreateSearchJobsSearchPost(CreateSearchJobsSearchPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a keyword crawl job for one search term in one store and country. Returns the created job immediately; poll `GET /jobs/search` with the returned id to collect the results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.CreateSearchJobsSearchPost(new CreateSearchJobsSearchPostRequest
    {
        Body = new SearchCreate
        {
            Store = "play",
            Term = "spotify",
            Country = "US",
            Lang = "en_US",
            IdUser = "spotify",
            Limit = 5,
        },
    });
    // TODO: Handle 'response' of type SearchResult
}
catch (ApiException<CreateSearchJobsSearchPostError> ex)
{
    if (ex.Error.TryGetJobsSearch401Error1(out var error))
    {
        // TODO: Handle 'error' of type JobsSearch401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSearchJobsSearchPostRequest](src/AppstoreSpy/Requests/Jobs/CreateSearchJobsSearchPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResult](src/AppstoreSpy/Models/SearchResult.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[CreateSearchJobsSearchPostError](src/AppstoreSpy/Errors/CreateSearchJobsSearchPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;SearchResult&gt;&gt; GetSearchJobsSearchGet(GetSearchJobsSearchGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the keyword crawl jobs you have submitted, filtered by store, term, country or last-updated window. Each result carries the job's current state and, once finished, its results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Jobs.GetSearchJobsSearchGet(new GetSearchJobsSearchGetRequest
    {
        UpdatedGte = DateTimeOffset.Parse("2020-01-01T00:00:00Z"),
        UpdatedLte = DateTimeOffset.Parse("2022-01-01T00:00:00Z"),
    });
    // TODO: Handle 'response' of type IReadOnlyList<SearchResult>
}
catch (ApiException<GetSearchJobsSearchGetError> ex)
{
    if (ex.Error.TryGetJobsSearch401Error1(out var error))
    {
        // TODO: Handle 'error' of type JobsSearch401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSearchJobsSearchGetRequest](src/AppstoreSpy/Requests/Jobs/GetSearchJobsSearchGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[SearchResult](src/AppstoreSpy/Models/SearchResult.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetSearchJobsSearchGetError](src/AppstoreSpy/Errors/GetSearchJobsSearchGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SearchFilterV2

> Source: [SearchFilterV2](src/AppstoreSpy/Api/SearchFilterV2.cs)

<details>
<summary><code>Task&lt;IosAppListResponse&gt; GetFilterSearchIosAppsQueryPost2(GetFilterSearchIosAppsQueryPost2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

|**Fields**||||
|---|---|---|---|
|**Name** |**Type** |**Sort**|**Description**|
|name |string |- |Name|
|bundle |string |- |Bundle|
|description_full |string |- |Full Description|
|published |boolean |- |Published|
|listing_visible |boolean |- |Published in request country|
|category |string |- |Сategory|
|category_type |string |- |Type|
|revenue_month |integer |+ |Monthly Revenue|
|revenue_lifetime |integer |- |Lifetime Revenue|
|downloads_month |integer |+ |Monthly Downloads|
|downloads_lifetime|integer |- |Lifetime Downloads|
|update_date |date ISO8601|+ |Last Updated|
|release_date |date ISO8601|+ |Release date|
|developer_name |string |- |Developer name|
|description_short|string |- |Short description|
|whatsnew |string |- |Whatsnew|
|icon |string |- |Image|
|video |string |- |Trailer|
|screenshots |[]string |- |Screenshots|
|screenshots_duo_inner|[]string|- |iPhone Duo inner display screenshots|
|screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots|
|removal_date |date ISO8601|+ |Removal date|
|version |string |- |Version|
|size |float |- |Size|
|rating_count |integer |+ |Ratings|
|rating_value |float |+ |Rating in request country|
|review_count |integer |+ |Reviews|
|rating_avg |float |+ |Rating|
|iap |boolean |- |Inapp|
|copyright |string |- |Copyright|
|seller |string |- |Seller|
|chart_info |object |+ |App's chart info: category, collection, country, position for today|

|**Filters**|||
|---|---|---|
|**Name**|**Type**|**Description**|
|name|string|Name|
|published|boolean|Published|
|category_type|string|APP or GAME|
|revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
|update_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
|rating_count|ValueRange|{"gte": 1000, "lte": 5000}|
|developer|string|Developer name|
|developer_id|string|Developer id|
|active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
|category|string|App Store category: "TRAVEL", "EDUCATION", "GAMES_STRATEGY", "LIFESTYLE" etc|
|review_count|ValueRange|{"gte": 1000, "lte": 5000}|
|rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
|with_ads|boolean|With Ads|
|advertised|boolean|Advertised|

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SearchFilterV2.GetFilterSearchIosAppsQueryPost2(
        new GetFilterSearchIosAppsQueryPost2Request
        {
            Body = new IosAppSearchBody
            {
                Limit = 2,
                Sort = IosSortEnum.DownloadsMonth2,
                Fields = [
                    "id",
                    "name",
                    "developer_name",
                    "category",
                    "downloads_month",
                    "revenue_month",
                    "rating_value",
                ],
                Filter = new SearchFilterIos { Published = true, DeveloperId = "324684583" },
            },
        });
    // TODO: Handle 'response' of type IosAppListResponse
}
catch (ApiException<GetFilterSearchIosAppsQueryPost2Error> ex)
{
    if (ex.Error.TryGetIosAppsQuery401Error1(out var error))
    {
        // TODO: Handle 'error' of type IosAppsQuery401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFilterSearchIosAppsQueryPost2Request](src/AppstoreSpy/Requests/SearchFilterV2/GetFilterSearchIosAppsQueryPost2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IosAppListResponse](src/AppstoreSpy/Models/IosAppListResponse.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetFilterSearchIosAppsQueryPost2Error](src/AppstoreSpy/Errors/GetFilterSearchIosAppsQueryPost2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Suggestions

> Source: [Suggestions](src/AppstoreSpy/Api/Suggestions.cs)

<details>
<summary><code>Task&lt;Suggest&gt; GetSuggestsPlaySuggestionsGet2(GetSuggestsPlaySuggestionsGet2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with a partial result while a fresh crawl is in progress; `freshness` sets how old a cached result may be before it is recrawled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Suggestions.GetSuggestsPlaySuggestionsGet2(new GetSuggestsPlaySuggestionsGet2Request
    {
        Q = "some example string",
    });
    // TODO: Handle 'response' of type Suggest
}
catch (ApiException<GetSuggestsPlaySuggestionsGet2Error> ex)
{
    if (ex.Error.TryGetPlaySuggestions401Error1(out var error))
    {
        // TODO: Handle 'error' of type PlaySuggestions401Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSuggestsPlaySuggestionsGet2Request](src/AppstoreSpy/Requests/Suggestions/GetSuggestsPlaySuggestionsGet2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Suggest](src/AppstoreSpy/Models/Suggest.cs)</code>

**OnError**: <code>[ApiException](src/AppstoreSpy/Core/Exceptions/ApiException.cs)&lt;[GetSuggestsPlaySuggestionsGet2Error](src/AppstoreSpy/Errors/GetSuggestsPlaySuggestionsGet2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

