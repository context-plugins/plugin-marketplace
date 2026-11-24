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
using UiPath.Requests.QueueItems;

namespace UiPath.Api;

/// <summary>
/// Manage individual queue transaction items and their processing state
/// </summary>
public sealed class QueueItems
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal QueueItems(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Add a Queue Item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueueItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddQueueItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a new transaction item to a specified queue. The item can include specific content (custom key-value data), priority level, deadline, postpone time, and a unique reference string. Returns the created queue item with its assigned ID and key.
    /// </remarks>
    public Task<QueueItem> AddQueueItem(AddQueueItemOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/QueueItems"),
            [],
            [],
            [
                new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QueueItem>(),
            AddQueueItemError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Queue Items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ODataQueueItemCollection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListQueueItemsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of queue transaction items. Items can be filtered by queue name, status, review status, and priority. Supports OData filtering, ordering, and pagination.
    /// </remarks>
    public Task<ODataQueueItemCollection> ListQueueItems(ListQueueItemsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/odata/QueueItems"),
            [],
            [
                new Param("$filter", request.Filter),
                new Param("$orderby", request.Orderby),
                new Param("$top", request.Top),
                new Param("$skip", request.Skip),
            ],
            [new HeaderParam("X-UIPATH-OrganizationUnitId", request.XUipathOrganizationUnitId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ODataQueueItemCollection>(),
            ListQueueItemsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
