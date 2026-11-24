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
using Hightouch.Models.AnyOf;
using Hightouch.Requests.Destinations;

namespace Hightouch.Api;

public sealed class Destinations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Destinations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DestinationsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDestinationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new destination
    /// </remarks>
    public Task<DestinationsResponse1> CreateDestination(CreateDestinationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/destinations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DestinationsResponse1>(),
            CreateDestinationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Destination"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDestinationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a destination based on its Hightouch ID
    /// </remarks>
    public Task<Destination> GetDestination(GetDestinationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/destinations/{destinationId}"),
            [new TemplateParam("destinationId", request.DestinationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Destination>(),
            GetDestinationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Destinations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DestinationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDestinationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the destinations in the user's workspace
    /// </remarks>
    public Task<DestinationsResponse> ListDestination(ListDestinationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/destinations"),
            [],
            [
                new Param("name", request.Name),
                new Param("slug", request.Slug),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("orderBy", request.OrderBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DestinationsResponse>(),
            ListDestinationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Destination
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DestinationsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDestinationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing destination
    /// <para>
    /// Patch a destination based on its Hightouch ID
    /// </para>
    /// </remarks>
    public Task<DestinationsResponse1> UpdateDestination(UpdateDestinationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/destinations/{destinationId}"),
            [new TemplateParam("destinationId", request.DestinationId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DestinationsResponse1>(),
            UpdateDestinationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
