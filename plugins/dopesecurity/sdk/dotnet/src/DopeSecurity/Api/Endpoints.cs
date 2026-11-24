using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DopeSecurity.Core;
using DopeSecurity.Core.Exceptions;
using DopeSecurity.Core.Models;
using DopeSecurity.Core.Request;
using DopeSecurity.Core.Response;
using DopeSecurity.Errors;
using DopeSecurity.Models;
using DopeSecurity.Requests.Endpoints;

namespace DopeSecurity.Api;

/// <summary>
/// Everything about your endpoints
/// </summary>
public sealed class Endpoints
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Endpoints(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List and Search Endpoints
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EndpointsSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchEndpointsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this API to get a list of all endpoints, or search for those matching a query parameter.
    /// <para>
    /// Note:
    /// - To return a list of all endpoints do not include any additional parameter.
    /// - Only one of the optional parameters is allowed to be specified per request.
    /// - Results are returned in pages using cursor based pagination and ordered by the <c>lastSeen</c> property.
    /// </para>
    /// </remarks>
    public Task<EndpointsSearchResponse> SearchEndpoints(SearchEndpointsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/endpoints/search"),
            [],
            [
                new Param("id", request.Id),
                new Param("emailId", request.EmailId),
                new Param("deviceName", request.DeviceName),
                new Param("userId", request.UserId),
                new Param("osVersion", request.OsVersion),
                new Param("status", request.Status, SerializationFormat.Csv),
                new Param("debugState", request.DebugState, SerializationFormat.Csv),
                new Param("fallbackMode", request.FallbackMode),
                new Param("locationId", request.LocationId),
                new Param("agentVersion", request.AgentVersion),
                new Param("first", request.First),
                new Param("after", request.After),
                new Param("order", request.Order),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EndpointsSearchResponse>(),
            SearchEndpointsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
