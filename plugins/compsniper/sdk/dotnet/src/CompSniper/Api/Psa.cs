using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core;
using CompSniper.Core.Exceptions;
using CompSniper.Core.Models;
using CompSniper.Core.Request;
using CompSniper.Core.Response;
using CompSniper.Errors;
using CompSniper.Models;
using CompSniper.Requests.Psa;

namespace CompSniper.Api;

public sealed class Psa
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Psa(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// PSA graded card prices by grade, recent sales and population report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PsaCardResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPsaCardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// For one PSA card: sold prices by grade (sales, average, min, max, latest), recent individual sales with grading company, grade and cert number, the population report with gem rate, and a price summary. Send specId from /v1/psa/search, or a keyword and the best match is used (others listed in otherMatches). One successful call uses one request; a card PSA does not have returns 404 not_found and is not charged.
    /// </remarks>
    public Task<V1PsaCardResponse> GetPsaCard(GetPsaCardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/psa/card"),
            [],
            [
                new Param("specId", request.SpecId),
                new Param("keyword", request.Keyword),
                new Param("count", request.Count),
                new Param("timeRange", request.TimeRange),
                new Param("grade", request.Grade),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PsaCardResponse>(),
            GetPsaCardError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// PSA population of every card in a set, by grade
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PsaSetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPsaSetPopulationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One call returns every card in a PSA set with its number, name, variety, specId and population for every grade (Authentic, then 1 to 10 including half grades), plus totals for the set. Send headingId from /v1/psa/sets or the set's PSA population page url. Large sets can take 10 to 20 seconds.
    /// </remarks>
    public Task<V1PsaSetResponse> GetPsaSetPopulation(GetPsaSetPopulationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/psa/set"),
            [],
            [new Param("headingId", request.HeadingId), new Param("url", request.Url)],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PsaSetResponse>(),
            GetPsaSetPopulationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Find PSA sets or list every set for a game
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PsaSetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPsaSetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a game to list every PSA set for that game, newest first and paged; add keyword or year to narrow it. Without game, keyword searches set names across all games. Each set has the headingId used by /v1/psa/set.
    /// </remarks>
    public Task<V1PsaSetsResponse> ListPsaSets(ListPsaSetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/psa/sets"),
            [],
            [
                new Param("game", request.Game),
                new Param("keyword", request.Keyword),
                new Param("year", request.Year),
                new Param("count", request.Count),
                new Param("page", request.Page),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PsaSetsResponse>(),
            ListPsaSetsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Find a PSA graded card and its specId
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PsaSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchPsaCardsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search PSA's card catalog (sports and trading cards) by name, set and number. Each match has the specId used by /v1/psa/card. One successful call uses one request.
    /// </remarks>
    public Task<V1PsaSearchResponse> SearchPsaCards(SearchPsaCardsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/psa/search"),
            [],
            [new Param("keyword", request.Keyword), new Param("count", request.Count), new Param("page", request.Page)],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PsaSearchResponse>(),
            SearchPsaCardsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
