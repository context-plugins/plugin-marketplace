using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cloro.Core;
using Cloro.Core.Exceptions;
using Cloro.Core.Models;
using Cloro.Core.Request;
using Cloro.Core.Response;
using Cloro.Errors;
using Cloro.Models;
using Cloro.Requests.StatesApi;

namespace Cloro.Api;

public sealed class StatesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal StatesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List of states
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="V1StatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of US states supported for state-level geo-targeting. Only US is currently supported — other country values return an empty array.
    /// </remarks>
    public Task<IReadOnlyList<V1StatesResponse>> GetStates(GetStatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/states"),
            [],
            [new Param("country", request.Country)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<V1StatesResponse>>(),
            GetStatesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
