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
using CompSniper.Requests.Summary;

namespace CompSniper.Api;

public sealed class Summary
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Summary(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get sold-price intelligence without listing rows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPriceSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Runs the same sold search and billing flow as /v1/scrape, but returns only the cleaned price summary, raw comparison evidence, result counts, and cache status.
    /// </remarks>
    public Task<SummaryResponse> GetPriceSummary(GetPriceSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/summary"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("count", request.Count),
                new Param("page", request.Page),
                new Param("ebaySite", request.EbaySite),
                new Param("categoryId", request.CategoryId),
                new Param("sortOrder", request.SortOrder),
                new Param("minPrice", request.MinPrice),
                new Param("maxPrice", request.MaxPrice),
                new Param("itemCondition", request.ItemCondition),
                new Param("conditionId", request.ConditionId),
                new Param("buyingFormat", request.BuyingFormat),
                new Param("sellerType", request.SellerType),
                new Param("soldAfter", request.SoldAfter?.ToDate()),
                new Param("soldBefore", request.SoldBefore?.ToDate()),
                new Param("aspectFilter", request.AspectFilter),
                new Param("exactMatch", request.ExactMatch),
                new Param("relevance", request.Relevance),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SummaryResponse>(),
            GetPriceSummaryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
