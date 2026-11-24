using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core;
using CompSniper.Core.Exceptions;
using CompSniper.Core.Extensions;
using CompSniper.Core.Models;
using CompSniper.Core.Request;
using CompSniper.Core.Response;
using CompSniper.Errors;
using CompSniper.Models;
using CompSniper.Requests.SoldHistory;

namespace CompSniper.Api;

public sealed class SoldHistory
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SoldHistory(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search up to 3 years of eBay sold history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ResearchSoldResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetV1ResearchSoldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Keyword search over eBay sold history going back up to 3 years (eBay's own limit), across eight eBay sites, on every plan including free. Each page of up to 50 listing-level rows uses one request; failed requests are free. Prices are USD. History has its own cap of 20 searches per minute per account (X-History-RateLimit-* headers, 429 history_rate_limited), on top of the plan limit.
    /// </remarks>
    public Task<V1ResearchSoldResponse> GetV1ResearchSold(GetV1ResearchSoldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/research/sold"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("startDate", request.StartDate.ToDate()),
                new Param("endDate", request.EndDate.ToDate()),
                new Param("ebaySite", request.EbaySite),
                new Param("sort", request.Sort),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
                new Param("singleUnitOnly", request.SingleUnitOnly),
                new Param("allListingSites", request.AllListingSites),
                new Param("relevance", request.Relevance),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ResearchSoldResponse>(),
            GetV1ResearchSoldError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
