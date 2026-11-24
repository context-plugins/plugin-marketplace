using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Perigon.Core;
using Perigon.Core.Exceptions;
using Perigon.Core.Extensions;
using Perigon.Core.Models;
using Perigon.Core.Request;
using Perigon.Core.Response;
using Perigon.Errors;
using Perigon.Models;
using Perigon.Requests.NewsStories;

namespace Perigon.Api;

/// <summary>
/// Endpoints for accessing news articles and stories
/// </summary>
public sealed class NewsStories
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal NewsStories(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get article refresh job status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ArticleRefreshJobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetArticleRefreshJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the job status together with whatever per-article results have been computed so far. Results are immutable snapshots taken when each article was processed.
    /// </remarks>
    public Task<ArticleRefreshJobResponse> GetArticleRefreshJob(GetArticleRefreshJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/articles/refresh/jobs/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ArticleRefreshJobResponse>(),
            GetArticleRefreshJobError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Story Count Statistics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStoryCountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Count matching stories by their creation time. Results can be grouped by hour, day, week, or month and filtered by supported story attributes.
    /// </remarks>
    public Task<StatResult> GetStoryCounts(GetStoryCountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/stories/stats"),
            [],
            [
                new Param("splitBy", request.SplitBy),
                new Param("q", request.Q),
                new Param("name", request.Name),
                new Param("clusterId", request.ClusterId),
                new Param("excludeClusterId", request.ExcludeClusterId),
                new Param("from", request.From?.ToIso8601()),
                new Param("to", request.To?.ToIso8601()),
                new Param("initializedFrom", request.InitializedFrom?.ToIso8601()),
                new Param("initializedTo", request.InitializedTo?.ToIso8601()),
                new Param("updatedFrom", request.UpdatedFrom?.ToIso8601()),
                new Param("updatedTo", request.UpdatedTo?.ToIso8601()),
                new Param("topic", request.Topic),
                new Param("category", request.Category),
                new Param("taxonomy", request.Taxonomy),
                new Param("source", request.Source),
                new Param("sourceGroup", request.SourceGroup),
                new Param("minUniqueSources", request.MinUniqueSources),
                new Param("minSourceDiversity", request.MinSourceDiversity),
                new Param("personWikidataId", request.PersonWikidataId),
                new Param("personName", request.PersonName),
                new Param("companyId", request.CompanyId),
                new Param("companyName", request.CompanyName),
                new Param("companyDomain", request.CompanyDomain),
                new Param("companySymbol", request.CompanySymbol),
                new Param("companyIsin", request.CompanyIsin),
                new Param("companySymbolIsin", request.CompanySymbolIsin),
                new Param("country", request.Country),
                new Param("state", request.State),
                new Param("city", request.City),
                new Param("area", request.Area),
                new Param("minClusterSize", request.MinClusterSize),
                new Param("maxClusterSize", request.MaxClusterSize),
                new Param("nameExists", request.NameExists),
                new Param("positiveSentimentFrom", request.PositiveSentimentFrom),
                new Param("positiveSentimentTo", request.PositiveSentimentTo),
                new Param("neutralSentimentFrom", request.NeutralSentimentFrom),
                new Param("neutralSentimentTo", request.NeutralSentimentTo),
                new Param("negativeSentimentFrom", request.NegativeSentimentFrom),
                new Param("negativeSentimentTo", request.NegativeSentimentTo),
                new Param("showDuplicates", request.ShowDuplicates),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StatResult>(),
            GetStoryCountsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Story History
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoryHistoryResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStoryHistoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve previous generated versions of stories and their evolving summaries, key points, questions, and changelogs.
    /// </remarks>
    public Task<StoryHistoryResult> GetStoryHistory(GetStoryHistoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/stories/history"),
            [],
            [
                new Param("clusterId", request.ClusterId),
                new Param("from", request.From?.ToIso8601()),
                new Param("to", request.To?.ToIso8601()),
                new Param("sortBy", request.SortBy),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("changelogExists", request.ChangelogExists),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StoryHistoryResult>(),
            GetStoryHistoryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Peek cached article refresh data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ArticleRefreshPeekResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PeekArticleRefreshError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns whatever refreshed article data is already cached, on a best-effort basis, without scheduling any processing or creating a job.
    /// </remarks>
    public Task<ArticleRefreshPeekResponse> PeekArticleRefresh(PeekArticleRefreshRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/articles/refresh/peek"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ArticleRefreshPeekResponse>(),
            PeekArticleRefreshError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// All Articles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QuerySearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchArticlesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search and filter all news articles available via the Perigon API. The result includes a list of individual articles that were matched to your specific criteria.
    /// </remarks>
    public Task<QuerySearchResult> SearchArticles(SearchArticlesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/articles/all"),
            [],
            [
                new Param("q", request.Q),
                new Param("title", request.Title),
                new Param("desc", request.Desc),
                new Param("content", request.Content),
                new Param("summary", request.Summary),
                new Param("url", request.Url),
                new Param("articleId", request.ArticleId),
                new Param("clusterId", request.ClusterId),
                new Param("sortBy", request.SortBy),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("from", request.From?.ToIso8601()),
                new Param("to", request.To?.ToIso8601()),
                new Param("addDateFrom", request.AddDateFrom?.ToIso8601()),
                new Param("addDateTo", request.AddDateTo?.ToIso8601()),
                new Param("refreshDateFrom", request.RefreshDateFrom?.ToIso8601()),
                new Param("refreshDateTo", request.RefreshDateTo?.ToIso8601()),
                new Param("medium", request.Medium),
                new Param("source", request.Source),
                new Param("sourceGroup", request.SourceGroup),
                new Param("excludeSourceGroup", request.ExcludeSourceGroup),
                new Param("excludeSource", request.ExcludeSource),
                new Param("watchlist", request.Watchlist),
                new Param("excludeWatchlist", request.ExcludeWatchlist),
                new Param("paywall", request.Paywall),
                new Param("byline", request.Byline),
                new Param("author", request.Author),
                new Param("excludeAuthor", request.ExcludeAuthor),
                new Param("journalistId", request.JournalistId),
                new Param("excludeJournalistId", request.ExcludeJournalistId),
                new Param("language", request.Language),
                new Param("excludeLanguage", request.ExcludeLanguage),
                new Param("searchTranslation", request.SearchTranslation),
                new Param("label", request.Label),
                new Param("excludeLabel", request.ExcludeLabel),
                new Param("category", request.Category),
                new Param("excludeCategory", request.ExcludeCategory),
                new Param("topic", request.Topic),
                new Param("excludeTopic", request.ExcludeTopic),
                new Param("linkTo", request.LinkTo),
                new Param("showReprints", request.ShowReprints),
                new Param("reprintGroupId", request.ReprintGroupId),
                new Param("city", request.City),
                new Param("excludeCity", request.ExcludeCity),
                new Param("area", request.Area),
                new Param("state", request.State),
                new Param("excludeState", request.ExcludeState),
                new Param("county", request.County),
                new Param("excludeCounty", request.ExcludeCounty),
                new Param("locationsCountry", request.LocationsCountry),
                new Param("country", request.Country),
                new Param("excludeLocationsCountry", request.ExcludeLocationsCountry),
                new Param("location", request.Location),
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("maxDistance", request.MaxDistance),
                new Param("sourceCity", request.SourceCity),
                new Param("excludeSourceCity", request.ExcludeSourceCity),
                new Param("sourceCounty", request.SourceCounty),
                new Param("excludeSourceCounty", request.ExcludeSourceCounty),
                new Param("sourceCountry", request.SourceCountry),
                new Param("excludeSourceCountry", request.ExcludeSourceCountry),
                new Param("sourceState", request.SourceState),
                new Param("excludeSourceState", request.ExcludeSourceState),
                new Param("sourceLat", request.SourceLat),
                new Param("sourceLon", request.SourceLon),
                new Param("sourceMaxDistance", request.SourceMaxDistance),
                new Param("personWikidataId", request.PersonWikidataId),
                new Param("excludePersonWikidataId", request.ExcludePersonWikidataId),
                new Param("personName", request.PersonName),
                new Param("excludePersonName", request.ExcludePersonName),
                new Param("companyId", request.CompanyId),
                new Param("excludeCompanyId", request.ExcludeCompanyId),
                new Param("companyName", request.CompanyName),
                new Param("companyDomain", request.CompanyDomain),
                new Param("excludeCompanyDomain", request.ExcludeCompanyDomain),
                new Param("companySymbol", request.CompanySymbol),
                new Param("companyIsin", request.CompanyIsin),
                new Param("companySymbolIsin", request.CompanySymbolIsin),
                new Param("excludeCompanyIsin", request.ExcludeCompanyIsin),
                new Param("excludeCompanySymbolIsin", request.ExcludeCompanySymbolIsin),
                new Param("excludeCompanySymbol", request.ExcludeCompanySymbol),
                new Param("showNumResults", request.ShowNumResults),
                new Param("positiveSentimentFrom", request.PositiveSentimentFrom),
                new Param("positiveSentimentTo", request.PositiveSentimentTo),
                new Param("neutralSentimentFrom", request.NeutralSentimentFrom),
                new Param("neutralSentimentTo", request.NeutralSentimentTo),
                new Param("negativeSentimentFrom", request.NegativeSentimentFrom),
                new Param("negativeSentimentTo", request.NegativeSentimentTo),
                new Param("taxonomy", request.Taxonomy),
                new Param("prefixTaxonomy", request.PrefixTaxonomy),
                new Param("showHighlighting", request.ShowHighlighting),
                new Param("highlightFragmentSize", request.HighlightFragmentSize),
                new Param("highlightNumFragments", request.HighlightNumFragments),
                new Param("highlightPreTag", request.HighlightPreTag),
                new Param("highlightPostTag", request.HighlightPostTag),
                new Param("highlightQ", request.HighlightQ),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QuerySearchResult>(),
            SearchArticlesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StorySearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Track evolving narratives and top news headlines with the '<b>Stories</b>' endpoint — it returns structured clusters of related articles with summaries, key points, sentiment scores, and metadata on top people, companies, topics, countries, and categories. Use it to monitor how news stories develop over time, who and what they impact, and where they're gaining traction globally.
    /// <para>
    /// Each story represents a cluster of related articles grouped during processing. Articles are assigned to a single story, identified by the <c>clusterId</c> field. Once a story reaches five articles, a story title is automatically generated based on its content. Stories update as new coverage is processed and key details evolve.
    /// </para>
    /// <para>
    /// To fetch all articles within a specific story, query the <c>/articles/all</c> endpoint using the <c>clusterId</c> parameter.
    /// </para>
    /// </remarks>
    public Task<StorySearchResult> SearchStories(SearchStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/stories/all"),
            [],
            [
                new Param("q", request.Q),
                new Param("name", request.Name),
                new Param("clusterId", request.ClusterId),
                new Param("excludeClusterId", request.ExcludeClusterId),
                new Param("sortBy", request.SortBy),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("from", request.From?.ToIso8601()),
                new Param("to", request.To?.ToIso8601()),
                new Param("initializedFrom", request.InitializedFrom?.ToIso8601()),
                new Param("initializedTo", request.InitializedTo?.ToIso8601()),
                new Param("updatedFrom", request.UpdatedFrom?.ToIso8601()),
                new Param("updatedTo", request.UpdatedTo?.ToIso8601()),
                new Param("topic", request.Topic),
                new Param("category", request.Category),
                new Param("taxonomy", request.Taxonomy),
                new Param("source", request.Source),
                new Param("sourceGroup", request.SourceGroup),
                new Param("minUniqueSources", request.MinUniqueSources),
                new Param("minSourceDiversity", request.MinSourceDiversity),
                new Param("personWikidataId", request.PersonWikidataId),
                new Param("personName", request.PersonName),
                new Param("companyId", request.CompanyId),
                new Param("companyName", request.CompanyName),
                new Param("companyDomain", request.CompanyDomain),
                new Param("companySymbol", request.CompanySymbol),
                new Param("companyIsin", request.CompanyIsin),
                new Param("companySymbolIsin", request.CompanySymbolIsin),
                new Param("country", request.Country),
                new Param("state", request.State),
                new Param("city", request.City),
                new Param("area", request.Area),
                new Param("minClusterSize", request.MinClusterSize),
                new Param("maxClusterSize", request.MaxClusterSize),
                new Param("nameExists", request.NameExists),
                new Param("positiveSentimentFrom", request.PositiveSentimentFrom),
                new Param("positiveSentimentTo", request.PositiveSentimentTo),
                new Param("neutralSentimentFrom", request.NeutralSentimentFrom),
                new Param("neutralSentimentTo", request.NeutralSentimentTo),
                new Param("negativeSentimentFrom", request.NegativeSentimentFrom),
                new Param("negativeSentimentTo", request.NegativeSentimentTo),
                new Param("showStoryPageInfo", request.ShowStoryPageInfo),
                new Param("showNumResults", request.ShowNumResults),
                new Param("showDuplicates", request.ShowDuplicates),
                new Param("showHighlighting", request.ShowHighlighting),
                new Param("highlightFragmentSize", request.HighlightFragmentSize),
                new Param("highlightNumFragments", request.HighlightNumFragments),
                new Param("highlightPreTag", request.HighlightPreTag),
                new Param("highlightPostTag", request.HighlightPostTag),
                new Param("highlightQ", request.HighlightQ),
                new Param("expandArticles", request.ExpandArticles),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StorySearchResult>(),
            SearchStoriesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit an article refresh job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ArticleRefreshJobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubmitArticleRefreshJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits article ids for background refresh. Articles resolvable from a fresh cache are returned immediately; the rest are scheduled for processing. Poll the job status endpoint for results.
    /// </remarks>
    public Task<ArticleRefreshJobResponse> SubmitArticleRefreshJob(SubmitArticleRefreshJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/articles/refresh/jobs"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ArticleRefreshJobResponse>(),
            SubmitArticleRefreshJobError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// News (Vector)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ArticlesVectorSearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VectorSearchArticlesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Perform a natural language search over news articles from the past 6 months using semantic relevance. The result includes a list of articles most closely matched to your query intent.
    /// </remarks>
    public Task<ArticlesVectorSearchResult> VectorSearchArticles(VectorSearchArticlesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/vector/news/all"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ArticlesVectorSearchResult>(),
            VectorSearchArticlesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
