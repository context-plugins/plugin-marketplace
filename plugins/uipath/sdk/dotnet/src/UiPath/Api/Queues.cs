using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.Queues;

namespace UiPath.Api;

/// <summary>
/// Manage transaction queues for distributing work items to robots
/// </summary>
public sealed class Queues
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Queues(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Create a Queue Definition
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueueDefinition"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateQueueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new queue definition in the current folder. The queue definition specifies the queue name, maximum retry count, whether to accept only unique references, and enforcement settings.
    /// </remarks>
    public Task<QueueDefinition> CreateQueue(CreateQueueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/QueueDefinitions"),
            [],
            [],
            [
                new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QueueDefinition>(),
            CreateQueueError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Queue Definitions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataQueueDefinitionCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListQueuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all queue definitions in the current folder. Queue definitions describe named queues used for distributing transaction items to robots, including retry settings, unique reference enforcement, and SLA configurations.
    /// </remarks>
    public Task<ODataQueueDefinitionCollection> ListQueues(ListQueuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/QueueDefinitions"),
            [],
            [new Param("$filter", request.Filter), new Param("$top", request.Top), new Param("$skip", request.Skip)],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataQueueDefinitionCollection>(),
            ListQueuesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
