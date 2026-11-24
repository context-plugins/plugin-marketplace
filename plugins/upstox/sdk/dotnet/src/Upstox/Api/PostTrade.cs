using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.PostTrade;

namespace Upstox.Api;

public sealed class PostTrade
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PostTrade(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get historical trades
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TradeHistoryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTradesByDateRangeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API retrieves the trade history for a specified time interval.
    /// </remarks>
    public Task<TradeHistoryResponse> GetTradesByDateRange(GetTradesByDateRangeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/charges/historical-trades"),
            [],
            [
                new Param("start_date", request.StartDate),
                new Param("end_date", request.EndDate),
                new Param("page_number", request.PageNumber),
                new Param("page_size", request.PageSize),
                new Param("segment", request.Segment),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TradeHistoryResponse>(),
            GetTradesByDateRangeError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
