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
using Perigon.Requests.AiAdvancedSearch;

namespace Perigon.Api;

/// <summary>
/// These endpoints enable semantic search beyond traditional keyword matching, content summarization, and advanced information retrieval across articles
/// </summary>
public sealed class AiAdvancedSearch
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AiAdvancedSearch(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search Summarizer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummarySearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchSummarizerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Produce one concise summary from up to 100 articles matching the supplied filters. Use the prompt and summarization fields to control which insights are highlighted. When method is CLUSTERS, article-only parameters such as articleId, page, sortBy, watchlist, reprintGroupId, exclusion filters, prefixTaxonomy, and highlighting options are ignored.
    /// </remarks>
    public Task<SummarySearchResult> SearchSummarizer(SearchSummarizerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/summarize"),
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
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SummarySearchResult>(),
            SearchSummarizerError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
