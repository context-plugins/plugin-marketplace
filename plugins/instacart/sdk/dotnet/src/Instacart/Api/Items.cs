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
using Instacart.Requests.Items;

namespace Instacart.Api;

/// <summary>
/// Endpoints for updating item-level attributes such as pricing and availability at specific store locations. Items contain information that can vary from one store to another.
/// </summary>
public sealed class Items
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Items(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create or update items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubmissionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubmitItemsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates or sets item-level attributes for a product at a specific store location. Items contain information that can vary from one retailer store to another, such as pricing, availability, and inventory levels. Changes can take around two to three hours before they are displayed on the storefront.
    /// </remarks>
    public Task<SubmissionResponse> SubmitItems(SubmitItemsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/data_ingestion/catalog/item/submission"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubmissionResponse>(),
            SubmitItemsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
