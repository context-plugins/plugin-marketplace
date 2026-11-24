using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinancialModelingPrep.Core;
using FinancialModelingPrep.Core.ErrorResponse;
using FinancialModelingPrep.Core.Exceptions;
using FinancialModelingPrep.Core.Models;
using FinancialModelingPrep.Core.Request;
using FinancialModelingPrep.Core.Response;
using FinancialModelingPrep.Requests.Ratios;

namespace FinancialModelingPrep.Api;

public sealed class Ratios
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Ratios(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get company financial ratios
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<object>> GetFinancialRatios(GetFinancialRatiosRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ratios/{symbol}"),
            [new TemplateParam("symbol", request.Symbol)],
            [new Param("period", request.Period), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<object>>(),
            RawErrorResponse.Instance,
            _auth.ApiKeyQuery,
            requestOptions,
            cancellationToken);
}
