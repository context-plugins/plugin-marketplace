using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinancialModelingPrep.Core;
using FinancialModelingPrep.Core.ErrorResponse;
using FinancialModelingPrep.Core.Exceptions;
using FinancialModelingPrep.Core.Extensions;
using FinancialModelingPrep.Core.Models;
using FinancialModelingPrep.Core.Request;
using FinancialModelingPrep.Core.Response;
using FinancialModelingPrep.Models;
using FinancialModelingPrep.Requests.HistoricalPriceFull;

namespace FinancialModelingPrep.Api;

public sealed class HistoricalPriceFull
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal HistoricalPriceFull(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get historical end-of-day prices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="HistoricalPriceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns historical daily OHLCV data for a ticker symbol.
    /// </remarks>
    public Task<HistoricalPriceResponse> GetHistoricalPrice(GetHistoricalPriceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/historical-price-full/{symbol}"),
            [new TemplateParam("symbol", request.Symbol)],
            [new Param("from", request.From?.ToDate()), new Param("to", request.To?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<HistoricalPriceResponse>(),
            RawErrorResponse.Instance,
            _auth.ApiKeyQuery,
            requestOptions,
            cancellationToken);
}
