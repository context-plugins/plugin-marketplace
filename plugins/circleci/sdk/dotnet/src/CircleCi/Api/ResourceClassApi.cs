using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CircleCi.Core;
using CircleCi.Core.Exceptions;
using CircleCi.Core.Models;
using CircleCi.Core.Request;
using CircleCi.Core.Response;
using CircleCi.Errors;
using CircleCi.Models;
using CircleCi.Requests.ResourceClassApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for managing runner resource classes, which define the compute resources available for self-hosted runner jobs.
/// </summary>
public sealed class ResourceClassApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ResourceClassApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a resource class
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResourceClassCreation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateResourceClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new resource class for the specified namespace. Returns a resource class token that is only displayed once and cannot be retrieved again. This token is used by runner agents to authenticate.
    /// </remarks>
    public Task<ResourceClassCreation> CreateResourceClass(CreateResourceClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runner/resource-class"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ResourceClassCreation>(),
            CreateResourceClassError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a resource class
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteResourceClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a resource class. This will prevent any runners using this resource class from picking up new tasks.
    /// </remarks>
    public Task DeleteResourceClass(DeleteResourceClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runner/resource-class/{resource-class}"),
            [new TemplateParam("resource-class", request.ResourceClass)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteResourceClassError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a resource class
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResourceClass"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetResourceClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns details about a specific resource class.
    /// </remarks>
    public Task<ResourceClass> GetResourceClass(GetResourceClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runner/resource-class/{resource-class}"),
            [new TemplateParam("resource-class", request.ResourceClass)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResourceClass>(),
            GetResourceClassError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List resource classes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunnerResourceClassResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListResourceClassesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of runner resource classes for the specified namespace. Resource classes define the compute resources available for self-hosted runner jobs.
    /// </remarks>
    public Task<RunnerResourceClassResponse> ListResourceClasses(ListResourceClassesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runner/resource-class"),
            [],
            [new Param("namespace", request.Namespace)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RunnerResourceClassResponse>(),
            ListResourceClassesError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
