using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Instacart.Core;
using Instacart.Core.Exceptions;
using Instacart.Core.Models;
using Instacart.Core.Request;
using Instacart.Core.Response;
using Instacart.Errors;
using Instacart.Models;
using Instacart.Requests.Replacements;

namespace Instacart.Api;

/// <summary>
/// Endpoints for managing item replacements suggested by shoppers during order fulfillment.
/// </summary>
public sealed class Replacements
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Replacements(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Approve or reject an item replacement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReplacementResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateItemReplacementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Approves or rejects a replacement suggested by the shopper for a specific order item. If the customer approves the replacement, specify the status as APPROVED. If the customer rejects the replacement, specify the status as REJECTED. Items with a rejected replacement are automatically refunded.
    /// </remarks>
    public Task<ReplacementResponse> UpdateItemReplacement(UpdateItemReplacementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/post_checkout/orders/{order_id}/items/{order_item_id}/replacement"),
            [new TemplateParam("order_id", request.OrderId), new TemplateParam("order_item_id", request.OrderItemId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ReplacementResponse>(),
            UpdateItemReplacementError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
