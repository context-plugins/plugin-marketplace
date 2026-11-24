using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Givebutter.Core;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Exceptions;
using Givebutter.Core.Models;
using Givebutter.Core.Request;
using Givebutter.Core.Response;
using Givebutter.Errors;
using Givebutter.Models;
using Givebutter.Requests.Pledges;

namespace Givebutter.Api;

public sealed class Pledges
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Pledges(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List all pledges
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PledgesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<V1PledgesResponse> PledgesIndex(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/pledges"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PledgesResponse>(),
            RawErrorResponse.Instance,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a pledge
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PledgeResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PledgesShowError"/> when the server returns an error response.</exception>
    public Task<PledgeResource> PledgesShow(PledgesShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/pledges/{pledge}"),
            [new TemplateParam("pledge", request.Pledge)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PledgeResource>(),
            PledgesShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
