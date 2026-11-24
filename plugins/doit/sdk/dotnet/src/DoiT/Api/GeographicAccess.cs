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
using DoiT.Models.OneOf;
using DoiT.Requests.GeographicAccess;

namespace DoiT.Api;

/// <summary>
/// Manage country-based access to tenants in your customer hierarchy.
/// </summary>
public sealed class GeographicAccess
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal GeographicAccess(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a custom region
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeographicAccessCustomRegion"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateGeographicAccessCustomRegionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a custom region owned by the authenticated tenant. The tenant must be a customer-hierarchy root. Requires the UsersManager permission.
    /// </remarks>
    public Task<GeographicAccessCustomRegion> CreateGeographicAccessCustomRegion(CreateGeographicAccessCustomRegionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/custom-regions"),
            [],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GeographicAccessCustomRegion>(),
            CreateGeographicAccessCustomRegionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Clear a customer's geographic scope
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomerGeographicAccessScopeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Clears the geographic scope for a target customer, leaving it unassigned. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the request is idempotent. Requires the UsersManager permission.
    /// </remarks>
    public Task DeleteCustomerGeographicAccessScope(DeleteCustomerGeographicAccessScopeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
            [new TemplateParam("targetCustomerId", request.TargetCustomerId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCustomerGeographicAccessScopeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a custom region
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteGeographicAccessCustomRegionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a custom region owned by the authenticated tenant. Assigned regions cannot be deleted. Requires the UsersManager permission.
    /// </remarks>
    public Task DeleteGeographicAccessCustomRegion(DeleteGeographicAccessCustomRegionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/custom-regions/{customRegionId}"),
            [new TemplateParam("customRegionId", request.CustomRegionId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteGeographicAccessCustomRegionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Clear a user's geographic scope
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteUserGeographicAccessScopeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Clears the geographic scope assigned to a user who belongs to the target customer, leaving it unassigned. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating the request is idempotent. Requires the UsersManager permission.
    /// </remarks>
    public Task DeleteUserGeographicAccessScope(DeleteUserGeographicAccessScopeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope"),
            [
                new TemplateParam("targetCustomerId", request.TargetCustomerId),
                new TemplateParam("userId", request.UserId),
            ],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteUserGeographicAccessScopeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a customer's geographic scope
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeographicAccessScope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerGeographicAccessScopeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned as not found. Requires the UsersManager permission.
    /// </remarks>
    public Task<GeographicAccessScope> GetCustomerGeographicAccessScope(GetCustomerGeographicAccessScopeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
            [new TemplateParam("targetCustomerId", request.TargetCustomerId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GeographicAccessScope>(),
            GetCustomerGeographicAccessScopeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a custom region
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeographicAccessCustomRegion"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGeographicAccessCustomRegionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a custom region owned by the authenticated tenant. Requires the UsersManager permission.
    /// </remarks>
    public Task<GeographicAccessCustomRegion> GetGeographicAccessCustomRegion(GetGeographicAccessCustomRegionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/custom-regions/{customRegionId}"),
            [new TemplateParam("customRegionId", request.CustomRegionId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GeographicAccessCustomRegion>(),
            GetGeographicAccessCustomRegionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a user's geographic scope
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeographicAccessScope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserGeographicAccessScopeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Targets outside that hierarchy are returned as not found. Requires the UsersManager permission.
    /// </remarks>
    public Task<GeographicAccessScope> GetUserGeographicAccessScope(GetUserGeographicAccessScopeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope"),
            [
                new TemplateParam("targetCustomerId", request.TargetCustomerId),
                new TemplateParam("userId", request.UserId),
            ],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GeographicAccessScope>(),
            GetUserGeographicAccessScopeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List countries available for geographic access
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeographicAccessCountriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGeographicAccessCountriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the canonical ISO 3166-1 alpha-2 country catalogue used by geographic access policies.
    /// </remarks>
    public Task<GeographicAccessCountriesResponse> ListGeographicAccessCountries(ListGeographicAccessCountriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/countries"),
            [],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GeographicAccessCountriesResponse>(),
            ListGeographicAccessCountriesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List custom regions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeographicAccessCustomRegionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGeographicAccessCustomRegionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the ready custom regions owned by the authenticated tenant. Requires the UsersManager permission.
    /// </remarks>
    public Task<GeographicAccessCustomRegionsResponse> ListGeographicAccessCustomRegions(ListGeographicAccessCustomRegionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/custom-regions"),
            [],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GeographicAccessCustomRegionsResponse>(),
            ListGeographicAccessCustomRegionsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a customer's geographic scope
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeographicAccessScope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomerGeographicAccessScopeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Atomically replaces the geographic scope for a target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical request is idempotent. Requires the UsersManager permission.
    /// </remarks>
    public Task<GeographicAccessScope> UpdateCustomerGeographicAccessScope(UpdateCustomerGeographicAccessScopeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customers/{targetCustomerId}/geographic-scope"),
            [new TemplateParam("targetCustomerId", request.TargetCustomerId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GeographicAccessScope>(),
            UpdateCustomerGeographicAccessScopeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a custom region
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeographicAccessCustomRegion"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGeographicAccessCustomRegionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the name, country membership, or both for a custom region owned by the authenticated tenant. Requires the UsersManager permission.
    /// </remarks>
    public Task<GeographicAccessCustomRegion> UpdateGeographicAccessCustomRegion(UpdateGeographicAccessCustomRegionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/custom-regions/{customRegionId}"),
            [new TemplateParam("customRegionId", request.CustomRegionId)],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GeographicAccessCustomRegion>(),
            UpdateGeographicAccessCustomRegionError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a user's geographic scope
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GeographicAccessScope"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateUserGeographicAccessScopeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Atomically replaces the geographic scope assigned to a user who belongs to the target customer. The authenticated tenant must be the hierarchy root, and the target must be that root customer or one of its child customers. Repeating an identical request is idempotent. Requires the UsersManager permission.
    /// </remarks>
    public Task<GeographicAccessScope> UpdateUserGeographicAccessScope(UpdateUserGeographicAccessScopeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/rbac/v1/customers/{targetCustomerId}/users/{userId}/geographic-scope"),
            [
                new TemplateParam("targetCustomerId", request.TargetCustomerId),
                new TemplateParam("userId", request.UserId),
            ],
            [],
            [new HeaderParam("X-Tenant-Id", request.XTenantId), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GeographicAccessScope>(),
            UpdateUserGeographicAccessScopeError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
