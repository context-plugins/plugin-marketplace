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
using FinancialModelingPrep.Requests.Profile;

namespace FinancialModelingPrep.Api;

public sealed class Profile
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Profile(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get company profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CompanyProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<IReadOnlyList<CompanyProfile>> GetCompanyProfile(GetCompanyProfileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/profile/{symbol}"),
            [new TemplateParam("symbol", request.Symbol)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CompanyProfile>>(),
            RawErrorResponse.Instance,
            _auth.ApiKeyQuery,
            requestOptions,
            cancellationToken);
}
