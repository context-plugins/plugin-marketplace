using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AppstoreSpy.Core;
using AppstoreSpy.Core.Exceptions;
using AppstoreSpy.Core.Extensions;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Core.Request;
using AppstoreSpy.Core.Response;
using AppstoreSpy.Errors;
using AppstoreSpy.Models;
using AppstoreSpy.Requests.AppStore;

namespace AppstoreSpy.Api;

/// <summary>
/// App Store apps and developers: lookup, search, reviews, rankings, similar apps, download and revenue estimates and reference data.
/// </summary>
public sealed class AppStore
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AppStore(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search App Store developers by structured filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IosDevListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DevFilterSearchIosDevelopersQueryPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches App Store developers by a structured JSON filter, with paging and sorting. <c>GET /ios/developers</c> covers the free-text equivalent.
    /// </remarks>
    public Task<IosDevListResponse> DevFilterSearchIosDevelopersQueryPost(DevFilterSearchIosDevelopersQueryPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/developers/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IosDevListResponse>(),
            DevFilterSearchIosDevelopersQueryPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search App Store developers by query
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="IosDev"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DevSearchIosDevelopersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Free-text search across App Store developers using a <c>field:value</c> query such as <c>hq_country:US</c>. To filter on structured criteria, use <c>POST /ios/developers/query</c>.
    /// </remarks>
    public Task<IReadOnlyList<IosDev>> DevSearchIosDevelopersGet(DevSearchIosDevelopersGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/developers"),
            [],
            [
                new Param("q", request.Q),
                new Param("fields", request.Fields),
                new Param("sort", request.Sort),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<IosDev>>(),
            DevSearchIosDevelopersGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get App Store app by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IosApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAppDetailsIosAppsIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full App Store listing for a single app, looked up by its numeric App Store id. Use <c>country</c> to select the storefront and <c>language</c> for the metadata language; <c>fields</c> limits the response to the columns you need.
    /// </remarks>
    public Task<IosApp> GetAppDetailsIosAppsIdGet(GetAppDetailsIosAppsIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/apps/{id}"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("fields", request.Fields),
                new Param("country", request.Country),
                new Param("language", request.Language),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IosApp>(),
            GetAppDetailsIosAppsIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search App Store apps by query
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="IosApp"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAppSearchIosAppsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Free-text search across App Store listings, returning a ranked list of matching apps. To filter on structured criteria such as revenue, downloads or category, use <c>POST /ios/apps/query</c>.
    /// </remarks>
    public Task<IReadOnlyList<IosApp>> GetAppSearchIosAppsGet(GetAppSearchIosAppsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/apps"),
            [],
            [
                new Param("q", request.Q),
                new Param("country", request.Country),
                new Param("fields", request.Fields),
                new Param("sort", request.Sort),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<IosApp>>(),
            GetAppSearchIosAppsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Apps Estimates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="DevAppsEstimates"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAppsEstimatesIosDevelopersIdEstimatesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Google Play apps estimates
    /// </remarks>
    public Task<IReadOnlyList<DevAppsEstimates>> GetAppsEstimatesIosDevelopersIdEstimatesGet(GetAppsEstimatesIosDevelopersIdEstimatesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/developers/{id}/estimates"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("start", request.Start?.ToDate()),
                new Param("end", request.End?.ToDate()),
                new Param("fill_gaps", request.FillGaps),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<DevAppsEstimates>>(),
            GetAppsEstimatesIosDevelopersIdEstimatesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Apps Estimates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="AppsEstimates"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAppsEstimatesIosEstimatesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get App Store apps estimates
    /// </remarks>
    public Task<IReadOnlyList<AppsEstimates>> GetAppsEstimatesIosEstimatesGet(GetAppsEstimatesIosEstimatesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/estimates"),
            [],
            [
                new Param("id", request.Id),
                new Param("start", request.Start?.ToDate()),
                new Param("end", request.End?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<AppsEstimates>>(),
            GetAppsEstimatesIosEstimatesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Aggregate App Store developers by HQ country
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DevCountryAggregatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCountryAggregatesIosAggregatesCountriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Per-country totals over all App Store developers: developer count, published apps, and sums of monthly downloads/revenue estimates. The category_type split assigns each developer's totals to their dominant category type. Sorted by downloads descending.
    /// </remarks>
    public Task<DevCountryAggregatesResponse> GetCountryAggregatesIosAggregatesCountriesGet(GetCountryAggregatesIosAggregatesCountriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/aggregates/countries"),
            [],
            [new Param("category_type", request.CategoryType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DevCountryAggregatesResponse>(),
            GetCountryAggregatesIosAggregatesCountriesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get App Store developer by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IosDev"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDeveloperIosDevelopersIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the App Store developer record for a single developer id, including the developer's publisher identifiers and headquarters country.
    /// </remarks>
    public Task<IosDev> GetDeveloperIosDevelopersIdGet(GetDeveloperIosDevelopersIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/developers/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IosDev>(),
            GetDeveloperIosDevelopersIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Filter Search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IosAppListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFilterSearchIosAppsQueryPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// |<b>Fields</b>||||
    /// |---|---|---|---|
    /// |<b>Name</b> |<b>Type</b> |<b>Sort</b>|<b>Description</b>|
    /// |name |string |- |Name|
    /// |bundle |string |- |Bundle|
    /// |description_full |string |- |Full Description|
    /// |published |boolean |- |Published|
    /// |listing_visible |boolean |- |Published in request country|
    /// |category |string |- |Сategory|
    /// |category_type |string |- |Type|
    /// |revenue_month |integer |+ |Monthly Revenue|
    /// |revenue_lifetime |integer |- |Lifetime Revenue|
    /// |downloads_month |integer |+ |Monthly Downloads|
    /// |downloads_lifetime|integer |- |Lifetime Downloads|
    /// |update_date |date ISO8601|+ |Last Updated|
    /// |release_date |date ISO8601|+ |Release date|
    /// |developer_name |string |- |Developer name|
    /// |description_short|string |- |Short description|
    /// |whatsnew |string |- |Whatsnew|
    /// |icon |string |- |Image|
    /// |video |string |- |Trailer|
    /// |screenshots |[]string |- |Screenshots|
    /// |screenshots_duo_inner|[]string|- |iPhone Duo inner display screenshots|
    /// |screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots|
    /// |removal_date |date ISO8601|+ |Removal date|
    /// |version |string |- |Version|
    /// |size |float |- |Size|
    /// |rating_count |integer |+ |Ratings|
    /// |rating_value |float |+ |Rating in request country|
    /// |review_count |integer |+ |Reviews|
    /// |rating_avg |float |+ |Rating|
    /// |iap |boolean |- |Inapp|
    /// |copyright |string |- |Copyright|
    /// |seller |string |- |Seller|
    /// |chart_info |object |+ |App's chart info: category, collection, country, position for today|
    /// <para>
    /// |<b>Filters</b>|||
    /// |---|---|---|
    /// |<b>Name</b>|<b>Type</b>|<b>Description</b>|
    /// |name|string|Name|
    /// |published|boolean|Published|
    /// |category_type|string|APP or GAME|
    /// |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
    /// |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
    /// |update_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
    /// |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
    /// |rating_count|ValueRange|{"gte": 1000, "lte": 5000}|
    /// |developer|string|Developer name|
    /// |developer_id|string|Developer id|
    /// |active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
    /// |category|string|App Store category: "TRAVEL", "EDUCATION", "GAMES_STRATEGY", "LIFESTYLE" etc|
    /// |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
    /// |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
    /// |with_ads|boolean|With Ads|
    /// |advertised|boolean|Advertised|
    /// </para>
    /// </remarks>
    public Task<IosAppListResponse> GetFilterSearchIosAppsQueryPost(GetFilterSearchIosAppsQueryPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/apps/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IosAppListResponse>(),
            GetFilterSearchIosAppsQueryPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get App Store rankings data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiResponseListModelsResponsesResponseIosRankingItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIosRankingsIosRankingsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns App Store chart positions over a date range, filtered by storefront, category, collection and platform. One row per app per chart per day.
    /// </remarks>
    public Task<ApiResponseListModelsResponsesResponseIosRankingItem> GetIosRankingsIosRankingsGet(GetIosRankingsIosRankingsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/rankings"),
            [],
            [
                new Param("date_start", request.DateStart?.ToDate()),
                new Param("date_end", request.DateEnd?.ToDate()),
                new Param("app", request.App),
                new Param("platform", request.Platform),
                new Param("country", request.Country),
                new Param("category", request.Category),
                new Param("collection", request.Collection),
                new Param("rank_start", request.RankStart),
                new Param("rank_end", request.RankEnd),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiResponseListModelsResponsesResponseIosRankingItem>(),
            GetIosRankingsIosRankingsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Ios app available countries
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoreCountries"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlayAppCountriesIosInfoCountriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This query returns the list of App Store storefronts available as a <c>country</c> parameter.
    /// </remarks>
    public Task<StoreCountries> GetPlayAppCountriesIosInfoCountriesGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/info/countries"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StoreCountries>(),
            GetPlayAppCountriesIosInfoCountriesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Ios app available languages
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoreLanguages"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPlayAppLanguagesIosInfoLanguagesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This query returns the list of metadata languages available as a <c>language</c> parameter.
    /// </remarks>
    public Task<StoreLanguages> GetPlayAppLanguagesIosInfoLanguagesGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/info/languages"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StoreLanguages>(),
            GetPlayAppLanguagesIosInfoLanguagesGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Queue a recrawl of an App Store app
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecrawlIosAppsIdRecrawlGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Queues a fresh crawl of one App Store app for the given storefront and language. Returns 200 once the job is accepted; the updated data appears on the app endpoints after the crawl completes.
    /// </remarks>
    public Task GetRecrawlIosAppsIdRecrawlGet(GetRecrawlIosAppsIdRecrawlGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/apps/{id}/recrawl"),
            [new TemplateParam("id", request.Id)],
            [new Param("country", request.Country), new Param("language", request.Language)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRecrawlIosAppsIdRecrawlGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get App Store app reviews by app ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="IosReview"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReviewsIosAppsIdReviewsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns user reviews for a single App Store app. Reviews are storefront-specific, so <c>country</c> changes which set is returned.
    /// </remarks>
    public Task<IReadOnlyList<IosReview>> GetReviewsIosAppsIdReviewsGet(GetReviewsIosAppsIdReviewsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/apps/{id}/reviews"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("country", request.Country),
                new Param("fields", request.Fields),
                new Param("limit", request.Limit),
                new Param("sort", request.Sort),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<IosReview>>(),
            GetReviewsIosAppsIdReviewsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get similar App Store apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IosAppListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSimilarIosAppsSimilarPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the apps App Store lists as similar to the given app. Set <c>link</c> to the reverse direction to get the apps that list the given app as similar to them instead.
    /// </remarks>
    public Task<IosAppListResponse> GetSimilarIosAppsSimilarPost(GetSimilarIosAppsSimilarPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/apps/similar"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IosAppListResponse>(),
            GetSimilarIosAppsSimilarPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarise App Store apps matching a filter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSummaryIosAppsSummaryPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns aggregate totals for the set of App Store apps matching a structured filter, without returning the apps themselves. Takes the same filter body as <c>POST /ios/apps/query</c>.
    /// </remarks>
    public Task<SummaryResponse> GetSummaryIosAppsSummaryPost(GetSummaryIosAppsSummaryPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ios/apps/summary"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SummaryResponse>(),
            GetSummaryIosAppsSummaryPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
