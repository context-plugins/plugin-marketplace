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
using Contentstack.Requests.Organizations;

namespace Contentstack.Api;

/// <summary>
/// Endpoints for managing Contentstack organizations, including user invitations, roles, stacks, and audit logs at the organization level.
/// </summary>
public sealed class Organizations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Organizations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get all organizations
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllOrganizationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all Contentstack organizations that the authenticated user is a member of, along with their roles and permissions.
    /// </remarks>
    public Task<OrganizationList> GetAllOrganizations(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/organizations"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationList>(),
            GetAllOrganizationsError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Organization"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves details for a specific organization identified by its UID, including plan information and configuration settings.
    /// </remarks>
    public Task<Organization> GetOrganization(GetOrganizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/organizations/{organization_uid}"),
            [new TemplateParam("organization_uid", request.OrganizationUid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Organization>(),
            GetOrganizationError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get organization stacks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StackList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationStacksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all stacks within a given organization that the authenticated user has access to.
    /// </remarks>
    public Task<StackList> GetOrganizationStacks(GetOrganizationStacksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEnvironmentsApi("/organizations/{organization_uid}/stacks"),
            [new TemplateParam("organization_uid", request.OrganizationUid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StackList>(),
            GetOrganizationStacksError.Response,
            AuthScheme.Any(_auth.AuthtokenAuth, _auth.ManagementTokenAuth),
            requestOptions,
            cancellationToken);
}
