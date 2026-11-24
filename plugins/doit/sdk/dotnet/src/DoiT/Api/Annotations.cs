using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Annotations;

namespace DoiT.Api;

/// <summary>
/// Custom notes added to cost data to provide contextual information.
/// </summary>
public sealed class Annotations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Annotations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an annotation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnnotationListItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAnnotationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new annotation.
    /// </remarks>
    public Task<AnnotationListItem> CreateAnnotation(CreateAnnotationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/annotations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AnnotationListItem>(),
            CreateAnnotationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an annotation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAnnotationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the annotation specified by the Id.
    /// </remarks>
    public Task<object> DeleteAnnotation(DeleteAnnotationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/annotations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteAnnotationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve an annotation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnnotationListItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAnnotationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an annotation by the specified Id.
    /// </remarks>
    public Task<AnnotationListItem> GetAnnotation(GetAnnotationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/annotations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnnotationListItem>(),
            GetAnnotationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List annotations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsV1AnnotationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAnnotationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of annotations that your account has access to.
    /// Annotations are listed in reverse chronological order by default.
    /// </remarks>
    public Task<AnalyticsV1AnnotationsResponse> ListAnnotations(ListAnnotationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/annotations"),
            [],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("filter", request.Filter),
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsV1AnnotationsResponse>(),
            ListAnnotationsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an annotation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnnotationListItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAnnotationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the annotation specified by the Id.
    /// </remarks>
    public Task<AnnotationListItem> UpdateAnnotation(UpdateAnnotationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/annotations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AnnotationListItem>(),
            UpdateAnnotationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
