using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using NordicFinancialNews.Core;
using NordicFinancialNews.Core.Exceptions;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Core.Request;
using NordicFinancialNews.Core.Response;
using NordicFinancialNews.Errors;
using NordicFinancialNews.Models;
using NordicFinancialNews.Requests.EventTypes;

namespace NordicFinancialNews.Api;

public sealed class EventTypes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal EventTypes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Event Types
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1EventTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1EventTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all active event types, grouped by category (in the categories' defined order) and ordered by slug within each. Event type slugs are the values for the <c>event_type</c> filter on <c>GET /api/v1/events</c>.
    /// </remarks>
    public Task<ApiV1EventTypesResponse> GetApiV1EventTypes(GetApiV1EventTypesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/event_types"),
            [],
            [new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1EventTypesResponse>(),
            GetApiV1EventTypesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
