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
using Perigon.Requests.SourceGroups;

namespace Perigon.Api;

/// <summary>
/// Manage custom source groups for organizing and filtering news sources. Source groups allow grouping domains together for use in search queries and monitors.
/// </summary>
public sealed class SourceGroups
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SourceGroups(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create source group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourceGroupResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSourceGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new source group under the organization associated with the API key.
    /// </remarks>
    public Task<SourceGroupResult> CreateSourceGroup(CreateSourceGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/sourceGroups"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SourceGroupResult>(),
            CreateSourceGroupError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete source group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourceGroupResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSourceGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a source group owned by the organization associated with the API key.
    /// </remarks>
    public Task<SourceGroupResult> DeleteSourceGroup(DeleteSourceGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/sourceGroups/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SourceGroupResult>(),
            DeleteSourceGroupError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get source group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourceGroupResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSourceGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a source group by ID. Only returns source groups owned by the organization associated with the API key.
    /// </remarks>
    public Task<SourceGroupResult> GetSourceGroup(GetSourceGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/sourceGroups/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SourceGroupResult>(),
            GetSourceGroupError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List source groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourceGroupListResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSourceGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List source groups owned by the organization associated with the API key, as well as publicly visible source groups. Supports filtering by name and domain.
    /// </remarks>
    public Task<SourceGroupListResult> ListSourceGroups(ListSourceGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/sourceGroups"),
            [],
            [
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("name", request.Name),
                new Param("domain", request.Domain),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("nulls", request.Nulls),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SourceGroupListResult>(),
            ListSourceGroupsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resolve source groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourceGroupResolveResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ResolveSourceGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve source groups by name. For each name, returns the organization's private source group if one exists, otherwise falls back to the matching public source group.
    /// </remarks>
    public Task<SourceGroupResolveResult> ResolveSourceGroups(ResolveSourceGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/sourceGroups/resolve"),
            [],
            [new Param("name", request.Name)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SourceGroupResolveResult>(),
            ResolveSourceGroupsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update source group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SourceGroupResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSourceGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially update a source group owned by the organization associated with the API key. Only provided fields will be updated.
    /// </remarks>
    public Task<SourceGroupResult> UpdateSourceGroup(UpdateSourceGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/sourceGroups/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SourceGroupResult>(),
            UpdateSourceGroupError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
