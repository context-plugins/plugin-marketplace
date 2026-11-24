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
using Cosmic.Requests.Objects;

namespace Cosmic.Api;

/// <summary>
/// Objects are the basic building blocks of content. Every Object belongs to an Object type and carries its field values under <c>metadata</c>.
/// </summary>
public sealed class Objects
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Objects(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Batch create, update, and delete Objects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchObjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Perform up to 25 Object operations in a single request. Each operation succeeds or fails independently, so inspect the <c>status</c> of every entry in the response rather than relying on the HTTP status alone. Prefer this over repeated single-Object calls when changing many Objects.
    /// </remarks>
    public Task<BatchResponse> BatchObjects(BatchObjectsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/objects/batch"),
            [new TemplateParam("slug", request.Slug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchResponse>(),
            BatchObjectsError.Response,
            _auth.WriteKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an Object
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObjectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateObjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a single Object. <c>title</c> and <c>type</c> are required; the <c>slug</c> is derived from the title when omitted. Values in <c>metadata</c> must satisfy any validation configured on the Object type's Metafields. To create several Objects at once, use the batch endpoint instead of looping over this one.
    /// </remarks>
    public Task<ObjectResponse> CreateObject(CreateObjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/objects"),
            [new TemplateParam("slug", request.Slug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ObjectResponse>(),
            CreateObjectError.Response,
            _auth.WriteKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an Object
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteObjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an Object from the Bucket. This is destructive and not reversible through the API: confirm with the user before calling it.
    /// </remarks>
    public Task<MessageResponse> DeleteObject(DeleteObjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/objects/{object_id}"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("object_id", request.ObjectId)],
            [new Param("trigger_webhook", request.TriggerWebhook)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteObjectError.Response,
            _auth.WriteKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an Object by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObjectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetObjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single Object by its id. To fetch by slug instead, query the Objects list endpoint with <c>query={"type":"...","slug":"..."}</c>.
    /// </remarks>
    public Task<ObjectResponse> GetObject(GetObjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/objects/{object_id}"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("object_id", request.ObjectId)],
            [
                new Param("read_key", request.ReadKey),
                new Param("preview_token", request.PreviewToken),
                new Param("props", request.Props),
                new Param("status", request.Status),
                new Param("depth", request.Depth),
                new Param("useCache", request.UseCache),
                new Param("pretty", request.Pretty),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ObjectResponse>(),
            GetObjectError.Response,
            _auth.ReadKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List and query Objects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObjectListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListObjectsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Query Objects in the Bucket. This is the main read endpoint and also the way to fetch a single Object by slug: pass <c>query={"type":"posts","slug":"my-post"}</c> and read the first element of <c>objects</c>.
    /// <para>
    /// The <c>query</c> parameter is a URL-encoded JSON object following MongoDB comparison and logical operator syntax. Use <c>props</c> to limit the response to the fields you need, which matters because the API rejects responses over roughly 6 MB with a 413. Use <c>depth</c> to resolve Object Relationship Metafields into nested Objects. For large collections, prefer cursor pagination with <c>after</c> over large <c>skip</c> offsets.
    /// </para>
    /// </remarks>
    public Task<ObjectListResponse> ListObjects(ListObjectsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/objects"),
            [new TemplateParam("slug", request.Slug)],
            [
                new Param("read_key", request.ReadKey),
                new Param("preview_token", request.PreviewToken),
                new Param("query", request.Query),
                new Param("props", request.Props),
                new Param("status", request.Status),
                new Param("sort", request.Sort),
                new Param("limit", request.Limit),
                new Param("skip", request.Skip),
                new Param("depth", request.Depth),
                new Param("after", request.After),
                new Param("useCache", request.UseCache),
                new Param("pretty", request.Pretty),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ObjectListResponse>(),
            ListObjectsError.Response,
            _auth.ReadKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an Object
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObjectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateObjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an Object in place. Only the properties you send are changed, and within <c>metadata</c> only the keys you send are changed, so you can update a single Metafield without resending the rest. Set <c>status</c> to <c>published</c> to publish a draft.
    /// </remarks>
    public Task<ObjectResponse> UpdateObject(UpdateObjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/objects/{object_id}"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("object_id", request.ObjectId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ObjectResponse>(),
            UpdateObjectError.Response,
            _auth.WriteKey,
            requestOptions,
            cancellationToken);
}
