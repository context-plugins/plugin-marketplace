using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core;
using MicrosoftDynamicsNav.Core.Authentication;
using MicrosoftDynamicsNav.Core.Exceptions;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Core.Request;
using MicrosoftDynamicsNav.Core.Response;
using MicrosoftDynamicsNav.Errors;
using MicrosoftDynamicsNav.Models;
using MicrosoftDynamicsNav.Requests.PermissionSets;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// Manage permission sets and user permissions
/// </summary>
public sealed class PermissionSets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PermissionSets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Assign a Permission Set to a User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserPermission"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateUserPermissionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Assigns a permission set to the specified user.
    /// </remarks>
    public Task<UserPermission> CreateUserPermission(CreateUserPermissionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/users({user_id})/userPermissions"),
            [new TemplateParam("company_id", request.CompanyId), new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UserPermission>(),
            CreateUserPermissionError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Permission Sets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiPermissionSetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPermissionSetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of available permission sets.
    /// </remarks>
    public Task<CompaniesApiPermissionSetsResponse> ListPermissionSets(ListPermissionSetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi("/companies({company_id})/permissionSets"),
            [new TemplateParam("company_id", request.CompanyId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesApiPermissionSetsResponse>(),
            ListPermissionSetsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List User Permissions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesApiUsersApiUserPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListUserPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permission sets assigned to the user.
    /// </remarks>
    public Task<CompaniesApiUsersApiUserPermissionsResponse> ListUserPermissions(ListUserPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAutomationApiV20CompaniesApi(
                "/companies({company_id})/users({user_id})/userPermissions"),
            [new TemplateParam("company_id", request.CompanyId), new TemplateParam("user_id", request.UserId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesApiUsersApiUserPermissionsResponse>(),
            ListUserPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
