using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.ContentTypes;

namespace Contentstack.Api;

/// <summary>
/// Content types define the structure of content entries in a Contentstack stack. They specify the fields and their data types that entries must conform to.
/// </summary>
public sealed class ContentTypes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ContentTypes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a content type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContentType2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateContentTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new content type in the stack with a defined schema of fields. The schema determines the structure of all entries created from this content type.
    /// </remarks>
    public Task<ContentType2> CreateContentType(CreateContentTypeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types"),
            [],
            [],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContentType2>(),
            CreateContentTypeError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a content type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteContentTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a content type from the stack. All entries of this content type must be deleted before the content type can be removed.
    /// </remarks>
    public Task DeleteContentType(DeleteContentTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}"),
            [new TemplateParam("content_type_uid", request.ContentTypeUid)],
            [],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteContentTypeError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get all content types
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContentTypeList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllContentTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves comprehensive information of all content types available in a stack. Supports include_count parameter to return the total count of content types.
    /// </remarks>
    public Task<ContentTypeList> GetAllContentTypes(GetAllContentTypesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types"),
            [],
            [new Param("include_count", request.IncludeCount)],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContentTypeList>(),
            GetAllContentTypesError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a single content type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContentType"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSingleContentTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed information for a specific content type identified by its UID, including all field definitions and schema metadata.
    /// </remarks>
    public Task<ContentType> GetSingleContentType(GetSingleContentTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}"),
            [new TemplateParam("content_type_uid", request.ContentTypeUid)],
            [new Param("version", request.Version)],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContentType>(),
            GetSingleContentTypeError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a content type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContentType2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateContentTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the schema and options of an existing content type. Changes to the schema may affect existing entries that use this content type.
    /// </remarks>
    public Task<ContentType2> UpdateContentType(UpdateContentTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/content_types/{content_type_uid}"),
            [new TemplateParam("content_type_uid", request.ContentTypeUid)],
            [],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContentType2>(),
            UpdateContentTypeError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);
}
