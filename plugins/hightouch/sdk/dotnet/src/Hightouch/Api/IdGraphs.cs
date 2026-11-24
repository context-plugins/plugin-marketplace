using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models;
using Hightouch.Requests.IdGraphs;

namespace Hightouch.Api;

public sealed class IdGraphs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal IdGraphs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Trigger run id graph
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TriggerRunIdrOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerRunIdGraphError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DEPRECATED: use <c>/idr/{graphId}/trigger</c> instead
    /// </remarks>
    public Task<TriggerRunIdrOutput> TriggerRunIdGraph(TriggerRunIdGraphRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/id_graphs/{graphId}/trigger"),
            [new TemplateParam("graphId", request.GraphId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TriggerRunIdrOutput>(),
            TriggerRunIdGraphError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
