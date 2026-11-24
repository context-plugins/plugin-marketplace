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
using DoiT.Requests.Sharing;

namespace DoiT.Api;

/// <summary>
/// Manage permissions associated with specified Cloud Analytics resources.
/// </summary>
public sealed class Sharing
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Sharing(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get resource permissions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResourcePermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetResourcePermissionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the permissions associated with the specified Cloud Analytics resource.
    /// Supports Allocations, Alerts, Budgets, and Reports.
    /// </remarks>
    public Task<ResourcePermissionsResponse> GetResourcePermission(GetResourcePermissionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sharing/v1/{resourceType}/{resourceId}"),
            [
                new TemplateParam("resourceType", request.ResourceType),
                new TemplateParam("resourceId", request.ResourceId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResourcePermissionsResponse>(),
            GetResourcePermissionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update resource permissions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResourcePermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateResourcePermissionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the permissions associated with the specified Cloud Analytics resource.
    /// Supports Allocations, Alerts, Budgets, and Reports.
    /// </remarks>
    public Task<ResourcePermissionsResponse> UpdateResourcePermission(UpdateResourcePermissionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sharing/v1/{resourceType}/{resourceId}"),
            [
                new TemplateParam("resourceType", request.ResourceType),
                new TemplateParam("resourceId", request.ResourceId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ResourcePermissionsResponse>(),
            UpdateResourcePermissionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
