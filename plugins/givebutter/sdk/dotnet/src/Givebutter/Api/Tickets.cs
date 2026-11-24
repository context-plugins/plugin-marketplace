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
using Givebutter.Requests.Tickets;

namespace Givebutter.Api;

public sealed class Tickets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tickets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List all tickets
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TicketsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<V1TicketsResponse> TicketsIndex(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tickets"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TicketsResponse>(),
            RawErrorResponse.Instance,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a ticket
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TicketResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TicketsShowError"/> when the server returns an error response.</exception>
    public Task<TicketResource> TicketsShow(TicketsShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tickets/{ticket}"),
            [new TemplateParam("ticket", request.Ticket)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TicketResource>(),
            TicketsShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
