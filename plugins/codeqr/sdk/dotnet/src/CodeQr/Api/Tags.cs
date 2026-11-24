using System;
using System.Collections.Generic;
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
using CodeQr.Requests.Tags;

namespace CodeQr.Api;

public sealed class Tags
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tags(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a new tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Tag"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTagError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new tag for the authenticated project.
    /// </remarks>
    public Task<Tag> CreateTag(CreateTagRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Tag>(),
            CreateTagError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteTagError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a tag from the workspace. All existing links will still work, but they will no longer be associated with this tag.
    /// </remarks>
    public Task<TagsResponse> DeleteTag(DeleteTagRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<TagsResponse>(),
            DeleteTagError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a list of tags
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Tag"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of tags for the authenticated workspace.
    /// </remarks>
    public Task<IReadOnlyList<Tag>> GetTags(GetTagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags"),
            [],
            [
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("search", request.Search),
                new Param("ids", request.Ids),
                new Param("page", request.Page),
                new Param("pageSize", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Tag>>(),
            GetTagsError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Tag"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTagError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a tag in the workspace.
    /// </remarks>
    public Task<Tag> UpdateTag(UpdateTagRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tags/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Tag>(),
            UpdateTagError.Response,
            _auth.Token,
            requestOptions,
            cancellationToken);
}
