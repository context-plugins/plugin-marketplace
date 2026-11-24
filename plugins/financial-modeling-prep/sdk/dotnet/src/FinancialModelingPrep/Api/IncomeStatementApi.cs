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
using FinancialModelingPrep.Models;
using FinancialModelingPrep.Requests.IncomeStatementApi;

namespace FinancialModelingPrep.Api;

public sealed class IncomeStatementApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal IncomeStatementApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get company income statement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="IncomeStatement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<IncomeStatement>> GetIncomeStatement(GetIncomeStatementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/income-statement/{symbol}"),
            [new TemplateParam("symbol", request.Symbol)],
            [new Param("period", request.Period), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<IncomeStatement>>(),
            RawErrorResponse.Instance,
            _auth.ApiKeyQuery,
            requestOptions,
            cancellationToken);
}
