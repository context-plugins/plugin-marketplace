using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Perigon.Core;
using Perigon.Core.Exceptions;
using Perigon.Core.Models;
using Perigon.Core.Request;
using Perigon.Core.Response;
using Perigon.Errors;
using Perigon.Models;
using Perigon.Requests.ContactPoints;

namespace Perigon.Api;

/// <summary>
/// Manage contact points used to deliver monitor notifications. Contact points define where and how monitor events are delivered (e.g. webhooks). Only WEBHOOK contact points can be created and managed via the API.
/// </summary>
public sealed class ContactPoints
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ContactPoints(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create contact point
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactPointResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateContactPointError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new contact point under the organization associated with the API key. Only WEBHOOK contact points can be created via the API.
    /// </remarks>
    public Task<ContactPointResult> CreateContactPoint(CreateContactPointRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/contactPoints"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactPointResult>(),
            CreateContactPointError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete contact point
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactPointResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteContactPointError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a contact point owned by the organization associated with the API key. Contact points with historical notifications are archived rather than hard-deleted.
    /// </remarks>
    public Task<ContactPointResult> DeleteContactPoint(DeleteContactPointRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/contactPoints/{uuid}"),
            [new TemplateParam("uuid", request.Uuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ContactPointResult>(),
            DeleteContactPointError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get contact point
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactPointResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactPointError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a contact point by UUID. Only returns contact points owned by the organization associated with the API key. FASTN contact points are not accessible via this endpoint.
    /// </remarks>
    public Task<ContactPointResult> GetContactPoint(GetContactPointRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/contactPoints/{uuid}"),
            [new TemplateParam("uuid", request.Uuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContactPointResult>(),
            GetContactPointError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List contact points
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactPointListResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListContactPointsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List contact points owned by the organization associated with the API key. Supports filtering by status and type. FASTN contact points are excluded from results.
    /// </remarks>
    public Task<ContactPointListResult> ListContactPoints(ListContactPointsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/contactPoints"),
            [],
            [
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("status", request.Status),
                new Param("type", request.Type),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("nulls", request.Nulls),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContactPointListResult>(),
            ListContactPointsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update contact point
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactPointResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateContactPointError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially update a contact point owned by the organization associated with the API key. Only provided fields will be updated.
    /// </remarks>
    public Task<ContactPointResult> UpdateContactPoint(UpdateContactPointRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/contactPoints/{uuid}"),
            [new TemplateParam("uuid", request.Uuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactPointResult>(),
            UpdateContactPointError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
