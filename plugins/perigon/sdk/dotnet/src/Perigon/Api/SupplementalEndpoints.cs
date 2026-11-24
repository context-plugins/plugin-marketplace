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
using Perigon.Requests.SupplementalEndpoints;

namespace Perigon.Api;

/// <summary>
/// Additional endpoints for metadata and related information
/// </summary>
public sealed class SupplementalEndpoints
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SupplementalEndpoints(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Journalists by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Journalist"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetJournalistByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find additional details on a journalist by using the journalist ID found in an article response object.
    /// </remarks>
    public Task<Journalist> GetJournalistById(GetJournalistByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/journalists/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Journalist>(),
            GetJournalistByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanySearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Browse or search for companies Perigon tracks using name, domain, ticker symbol, industry, and more. Supports Boolean search logic and filtering by metadata such as country, exchange, employee count, and IPO date.
    /// </remarks>
    public Task<CompanySearchResult> SearchCompanies(SearchCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/companies/all"),
            [],
            [
                new Param("id", request.Id),
                new Param("symbol", request.Symbol),
                new Param("symbolIsin", request.SymbolIsin),
                new Param("domain", request.Domain),
                new Param("country", request.Country),
                new Param("exchange", request.Exchange),
                new Param("numEmployeesFrom", request.NumEmployeesFrom),
                new Param("numEmployeesTo", request.NumEmployeesTo),
                new Param("ipoFrom", request.IpoFrom?.ToIso8601()),
                new Param("ipoTo", request.IpoTo?.ToIso8601()),
                new Param("q", request.Q),
                new Param("name", request.Name),
                new Param("industry", request.Industry),
                new Param("sector", request.Sector),
                new Param("size", request.Size),
                new Param("page", request.Page),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompanySearchResult>(),
            SearchCompaniesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Journalists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JournalistSearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchJournalistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search journalists using broad search attributes. Our database contains over 230,000 journalists from around the world and is refreshed frequently.
    /// </remarks>
    public Task<JournalistSearchResult> SearchJournalists(SearchJournalistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/journalists/all"),
            [],
            [
                new Param("id", request.Id),
                new Param("q", request.Q),
                new Param("name", request.Name),
                new Param("twitter", request.Twitter),
                new Param("sortBy", request.SortBy),
                new Param("size", request.Size),
                new Param("page", request.Page),
                new Param("source", request.Source),
                new Param("topic", request.Topic),
                new Param("category", request.Category),
                new Param("label", request.Label),
                new Param("minMonthlyPosts", request.MinMonthlyPosts),
                new Param("maxMonthlyPosts", request.MaxMonthlyPosts),
                new Param("country", request.Country),
                new Param("locationCountry", request.LocationCountry),
                new Param("locationState", request.LocationState),
                new Param("locationCounty", request.LocationCounty),
                new Param("locationCity", request.LocationCity),
                new Param("locationArea", request.LocationArea),
                new Param("updatedAtFrom", request.UpdatedAtFrom?.ToIso8601()),
                new Param("updatedAtTo", request.UpdatedAtTo?.ToIso8601()),
                new Param("showNumResults", request.ShowNumResults),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JournalistSearchResult>(),
            SearchJournalistsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// People
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PeopleSearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchPeopleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search and retrieve additional information on known persons that exist within Perigon's entity database and as referenced in any article response object. Our database contains over 650,000 people from around the world and is refreshed frequently. People data is derived from Wikidata and includes a wikidataId field that can be used to lookup even more information on Wikidata's website.
    /// </remarks>
    public Task<PeopleSearchResult> SearchPeople(SearchPeopleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/people/all"),
            [],
            [
                new Param("name", request.Name),
                new Param("wikidataId", request.WikidataId),
                new Param("occupationId", request.OccupationId),
                new Param("occupationLabel", request.OccupationLabel),
                new Param("page", request.Page),
                new Param("size", request.Size),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PeopleSearchResult>(),
            SearchPeopleError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourceSearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchSourcesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search and filter the 200,000+ media sources available via the Perigon API. The result includes a list of individual media sources that were matched to your specific criteria.
    /// </remarks>
    public Task<SourceSearchResult> SearchSources(SearchSourcesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sources/all"),
            [],
            [
                new Param("domain", request.Domain),
                new Param("name", request.Name),
                new Param("sourceGroup", request.SourceGroup),
                new Param("sortBy", request.SortBy),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("minMonthlyVisits", request.MinMonthlyVisits),
                new Param("maxMonthlyVisits", request.MaxMonthlyVisits),
                new Param("minMonthlyPosts", request.MinMonthlyPosts),
                new Param("maxMonthlyPosts", request.MaxMonthlyPosts),
                new Param("country", request.Country),
                new Param("sourceCountry", request.SourceCountry),
                new Param("sourceState", request.SourceState),
                new Param("sourceCounty", request.SourceCounty),
                new Param("sourceCity", request.SourceCity),
                new Param("sourceLat", request.SourceLat),
                new Param("sourceLon", request.SourceLon),
                new Param("sourceMaxDistance", request.SourceMaxDistance),
                new Param("category", request.Category),
                new Param("topic", request.Topic),
                new Param("label", request.Label),
                new Param("paywall", request.Paywall),
                new Param("showSubdomains", request.ShowSubdomains),
                new Param("showNumResults", request.ShowNumResults),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SourceSearchResult>(),
            SearchSourcesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Topics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TopicSearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchTopicsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search through all available Topics that exist within the Perigon Database.
    /// </remarks>
    public Task<TopicSearchResult> SearchTopics(SearchTopicsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/topics/all"),
            [],
            [
                new Param("name", request.Name),
                new Param("category", request.Category),
                new Param("subcategory", request.Subcategory),
                new Param("page", request.Page),
                new Param("size", request.Size),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TopicSearchResult>(),
            SearchTopicsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
