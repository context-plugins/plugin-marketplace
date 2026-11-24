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
using Cosmic.Requests.ObjectTypes;

namespace Cosmic.Api;

/// <summary>
/// Object types define the content model: the Metafields, localization settings, and display options shared by every Object in the type.
/// </summary>
public sealed class ObjectTypes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ObjectTypes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an Object type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObjectTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateObjectTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new Object type, defining the content model that its Objects will follow. Only <c>title</c> is required; the <c>slug</c> is derived from the title when omitted. Define <c>metafields</c> here so that Objects created in this type can carry the corresponding <c>metadata</c> values.
    /// </remarks>
    public Task<ObjectTypeResponse> CreateObjectType(CreateObjectTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/object-types"),
            [new TemplateParam("slug", request.Slug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ObjectTypeResponse>(),
            CreateObjectTypeError.Response,
            _auth.WriteKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an Object type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteObjectTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an Object type and every Object in it. This is destructive and not reversible through the API: confirm with the user before calling it.
    /// </remarks>
    public Task<MessageResponse> DeleteObjectType(DeleteObjectTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/object-types/{type_slug}"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("type_slug", request.TypeSlug)],
            [new Param("trigger_webhook", request.TriggerWebhook)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteObjectTypeError.Response,
            _auth.WriteKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an Object type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObjectTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetObjectTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single Object type by its slug, including the full Metafield model. Use this when you already know the type and want its field definitions without listing every type in the Bucket.
    /// </remarks>
    public Task<ObjectTypeResponse> GetObjectType(GetObjectTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/object-types/{type_slug}"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("type_slug", request.TypeSlug)],
            [new Param("read_key", request.ReadKey), new Param("pretty", request.Pretty)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ObjectTypeResponse>(),
            GetObjectTypeError.Response,
            _auth.ReadKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Object types
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObjectTypeListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListObjectTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve every Object type in the Bucket, each with its full Metafield model. Use this to discover the content model before creating or querying Objects: the <c>slug</c> of each type is what you pass as <c>type</c> in Object queries, and the <c>metafields</c> array tells you which <c>metadata</c> keys an Object of that type accepts.
    /// </remarks>
    public Task<ObjectTypeListResponse> ListObjectTypes(ListObjectTypesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/object-types"),
            [new TemplateParam("slug", request.Slug)],
            [new Param("read_key", request.ReadKey), new Param("pretty", request.Pretty)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ObjectTypeListResponse>(),
            ListObjectTypesError.Response,
            _auth.ReadKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an Object type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObjectTypeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateObjectTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an Object type in place. Only the properties you send are changed. Sending <c>metafields</c> replaces the whole array, so read the type first and send the complete list rather than only the field you want to alter.
    /// </remarks>
    public Task<ObjectTypeResponse> UpdateObjectType(UpdateObjectTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/object-types/{type_slug}"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("type_slug", request.TypeSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ObjectTypeResponse>(),
            UpdateObjectTypeError.Response,
            _auth.WriteKey,
            requestOptions,
            cancellationToken);
}
