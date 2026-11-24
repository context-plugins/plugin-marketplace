using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Models;

namespace Contentstack.Api;

/// <summary>
/// Schema discovery endpoints implement the SCIM 2.0 service provider configuration, returning supported schemas and resource types for IdP compatibility validation.
/// </summary>
public sealed class ScimSchemaDiscovery
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ScimSchemaDiscovery(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get SCIM resource types
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the SCIM resource types supported by the Contentstack SCIM API including Users and Groups, enabling IdP clients to discover available endpoints and their schemas.
    /// </remarks>
    public Task<ScimListResponse> GetScimResourceTypes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi("/scim/v2.0/ResourceTypes"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScimListResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get SCIM schemas
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the SCIM schemas supported by the Contentstack SCIM API, enabling IdP clients to understand the available attributes for User and Group resources.
    /// </remarks>
    public Task<ScimListResponse> GetScimSchemas(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackScimScimGroupsApi("/scim/v2.0/Schemas"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScimListResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
