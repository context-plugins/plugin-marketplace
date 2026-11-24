using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CodeQr.Core;
using CodeQr.Core.Exceptions;
using CodeQr.Core.Models;
using CodeQr.Core.Request;
using CodeQr.Core.Response;
using CodeQr.Errors;
using CodeQr.Models;
using CodeQr.Requests.Track;

namespace CodeQr.Api;

public sealed class Track
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Track(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Track a lead
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TrackLeadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TrackLeadError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Track a lead for a short link.
    /// </remarks>
    public Task<TrackLeadResponse> TrackLead(TrackLeadOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/track/lead"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TrackLeadResponse>(),
            TrackLeadError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Track a sale
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TrackSaleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TrackSaleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Track a sale for a short link.
    /// </remarks>
    public Task<TrackSaleResponse> TrackSale(TrackSaleOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/track/sale"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TrackSaleResponse>(),
            TrackSaleError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);
}
