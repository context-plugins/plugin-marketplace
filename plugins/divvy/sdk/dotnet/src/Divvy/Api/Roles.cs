using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.Roles;

namespace Divvy.Api;

public sealed class Roles
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Roles(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get user role details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RoleResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrganizationUserRoleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing user role.
    /// </remarks>
    public Task<RoleResponseDto> GetOrganizationUserRole(GetOrganizationUserRoleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/roles/{roleId}"),
            [new TemplateParam("roleId", request.RoleId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RoleResponseDto>(),
            GetOrganizationUserRoleError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of user roles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoRoleResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListOrganizationUserRolesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of user role objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoRoleResponseDto> ListOrganizationUserRoles(ListOrganizationUserRolesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/roles"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoRoleResponseDto>(),
            ListOrganizationUserRolesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
