using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Justtrack.Core;
using Justtrack.Core.Exceptions;
using Justtrack.Core.Models;
using Justtrack.Core.Request;
using Justtrack.Core.Response;
using Justtrack.Errors;
using Justtrack.Models;
using Justtrack.Requests.Bids;

namespace Justtrack.Api;

/// <summary>
/// Bidding operates as a distributed transaction.
/// </summary>
public sealed class Bids
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Bids(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch current bids with status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBidsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostManagementV1BidsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides with the bids within justtrack. In addition, it exposes the status of the latest operation associated with the bid.
    /// The following filter combinations are eligible:
    /// - networkId + campaignId
    /// - networkId + campaignId + countryCode
    /// - networkId + campaignId + countryCode + sourceId
    /// - networkId + adSetId
    /// - networkId + adSetId + countryCode
    /// - networkId + adSetId + countryCode + sourceId
    /// </remarks>
    public Task<ListBidsResponse> PostManagementV1Bids(PostManagementV1BidsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/bids"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListBidsResponse>(),
            PostManagementV1BidsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload bids
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostManagementV1BidsUploadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// With this API you can upload a batch of bids, similar to the CSV upload. The same hierarchy, rules, and limitations apply.
    /// </remarks>
    public Task<object> PostManagementV1BidsUpload(PostManagementV1BidsUploadRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/bids/upload"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            PostManagementV1BidsUploadError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
