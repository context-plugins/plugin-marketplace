using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cosmic.Core;
using Cosmic.Core.Exceptions;
using Cosmic.Core.Models;
using Cosmic.Core.Request;
using Cosmic.Core.Response;
using Cosmic.Errors;
using Cosmic.Models;
using Cosmic.Requests.ObjectRevisions;

namespace Cosmic.Api;

/// <summary>
/// Revisions are the version history of an Object. They can be created and read, but never edited or deleted.
/// </summary>
public sealed class ObjectRevisions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ObjectRevisions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add a revision to an Object
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RevisionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateObjectRevisionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new revision of an Object without publishing it. The revision is created with status <c>draft</c>; publish it by updating the Object itself with <c>status: published</c>. Use this to stage an edit for review rather than changing live content.
    /// </remarks>
    public Task<RevisionResponse> CreateObjectRevision(CreateObjectRevisionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/objects/{object_id}/revisions"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("object_id", request.ObjectId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RevisionResponse>(),
            CreateObjectRevisionError.Response,
            _auth.WriteKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a single revision
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RevisionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetObjectRevisionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve one revision of an Object by its id, including the <c>metadata</c> values as they were at that point in history.
    /// </remarks>
    public Task<RevisionResponse> GetObjectRevision(GetObjectRevisionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/objects/{object_id}/revisions/{revision_id}"),
            [
                new TemplateParam("slug", request.Slug),
                new TemplateParam("object_id", request.ObjectId),
                new TemplateParam("revision_id", request.RevisionId),
            ],
            [
                new Param("read_key", request.ReadKey),
                new Param("preview_token", request.PreviewToken),
                new Param("props", request.Props),
                new Param("useCache", request.UseCache),
                new Param("pretty", request.Pretty),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RevisionResponse>(),
            GetObjectRevisionError.Response,
            _auth.ReadKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List an Object's revisions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RevisionListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListObjectRevisionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the version history of an Object, newest first by default. Revisions are immutable.
    /// </remarks>
    public Task<RevisionListResponse> ListObjectRevisions(ListObjectRevisionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/objects/{object_id}/revisions"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("object_id", request.ObjectId)],
            [
                new Param("read_key", request.ReadKey),
                new Param("preview_token", request.PreviewToken),
                new Param("props", request.Props),
                new Param("sort", request.Sort),
                new Param("limit", request.Limit),
                new Param("skip", request.Skip),
                new Param("useCache", request.UseCache),
                new Param("pretty", request.Pretty),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RevisionListResponse>(),
            ListObjectRevisionsError.Response,
            _auth.ReadKey,
            requestOptions,
            cancellationToken);
}
