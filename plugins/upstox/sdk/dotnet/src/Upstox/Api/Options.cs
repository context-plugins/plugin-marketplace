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
using Upstox.Requests.Options;

namespace Upstox.Api;

public sealed class Options
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Options(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get option contracts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetOptionContractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOptionContractsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the option contracts
    /// </remarks>
    public Task<GetOptionContractResponse> GetOptionContracts(GetOptionContractsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/option/contract"),
            [],
            [new Param("instrument_key", request.InstrumentKey), new Param("expiry_date", request.ExpiryDate)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetOptionContractResponse>(),
            GetOptionContractsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get option chain
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetOptionChainResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPutCallOptionChainError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the option chain
    /// </remarks>
    public Task<GetOptionChainResponse> GetPutCallOptionChain(GetPutCallOptionChainRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/option/chain"),
            [],
            [new Param("instrument_key", request.InstrumentKey), new Param("expiry_date", request.ExpiryDate)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetOptionChainResponse>(),
            GetPutCallOptionChainError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
