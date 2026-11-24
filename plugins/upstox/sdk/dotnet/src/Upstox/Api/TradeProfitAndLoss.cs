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
using Upstox.Requests.TradeProfitAndLoss;

namespace Upstox.Api;

public sealed class TradeProfitAndLoss
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TradeProfitAndLoss(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get profit and loss on trades
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetProfitAndLossChargesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetProfitAndLossChargesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API gives the charges incurred by users for their trades
    /// </remarks>
    public Task<GetProfitAndLossChargesResponse> GetProfitAndLossCharges(GetProfitAndLossChargesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trade/profit-loss/charges"),
            [],
            [
                new Param("segment", request.Segment),
                new Param("financial_year", request.FinancialYear),
                new Param("from_date", request.FromDate),
                new Param("to_date", request.ToDate),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetProfitAndLossChargesResponse>(),
            GetProfitAndLossChargesError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Trade-wise Profit and Loss Report Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetTradeWiseProfitAndLossDataResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTradeWiseProfitAndLossDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API gives the data of the realised Profit and Loss report requested by a user
    /// </remarks>
    public Task<GetTradeWiseProfitAndLossDataResponse> GetTradeWiseProfitAndLossData(GetTradeWiseProfitAndLossDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trade/profit-loss/data"),
            [],
            [
                new Param("segment", request.Segment),
                new Param("financial_year", request.FinancialYear),
                new Param("page_number", request.PageNumber),
                new Param("page_size", request.PageSize),
                new Param("from_date", request.FromDate),
                new Param("to_date", request.ToDate),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetTradeWiseProfitAndLossDataResponse>(),
            GetTradeWiseProfitAndLossDataError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get profit and loss meta data on trades
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetTradeWiseProfitAndLossMetaDataResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTradeWiseProfitAndLossMetaDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API gives the data of the realised Profit and Loss report requested by a user
    /// </remarks>
    public Task<GetTradeWiseProfitAndLossMetaDataResponse> GetTradeWiseProfitAndLossMetaData(GetTradeWiseProfitAndLossMetaDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/trade/profit-loss/metadata"),
            [],
            [
                new Param("segment", request.Segment),
                new Param("financial_year", request.FinancialYear),
                new Param("from_date", request.FromDate),
                new Param("to_date", request.ToDate),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetTradeWiseProfitAndLossMetaDataResponse>(),
            GetTradeWiseProfitAndLossMetaDataError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
