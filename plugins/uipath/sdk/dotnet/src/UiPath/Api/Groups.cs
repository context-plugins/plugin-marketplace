using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.Groups;

namespace UiPath.Api;

/// <summary>
/// Manage user groups and group memberships
/// </summary>
public sealed class Groups
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Groups(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Create a Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Group"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new user group in the organization. Groups are used to assign roles in bulk, allocate licenses, and control access to automation resources. Members can be added after group creation. Requires the PM.Groups OAuth scope.
    /// </remarks>
    public Task<Group> CreateGroup(CreateGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathPlatformManagementAuditLogsApi("/{organizationName}/identity_/api/Group"),
            [new TemplateParam("organizationName", request.OrganizationName)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Group>(),
            CreateGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Get a Group by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Group"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a specific user group by its unique identifier within the specified organizational partition. Returns group details including name, description, and member count. Requires the PM.Groups or PM.Groups.Read OAuth scope.
    /// </remarks>
    public Task<Group> GetGroup(GetGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathPlatformManagementAuditLogsApi(
                "/{organizationName}/identity_/api/Group/{partitionGlobalId}/{groupId}"),
            [
                new TemplateParam("organizationName", request.OrganizationName),
                new TemplateParam("partitionGlobalId", request.PartitionGlobalId),
                new TemplateParam("groupId", request.GroupId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Group>(),
            GetGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath List Groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IdentityApiGroupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all user groups within the specified organizational partition (tenant or organization). Groups aggregate users for role assignment and license allocation. Requires the PM.Groups or PM.Groups.Read OAuth scope.
    /// </remarks>
    public Task<IdentityApiGroupResponse> ListGroups(ListGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathPlatformManagementAuditLogsApi(
                "/{organizationName}/identity_/api/Group/{partitionGlobalId}"),
            [
                new TemplateParam("organizationName", request.OrganizationName),
                new TemplateParam("partitionGlobalId", request.PartitionGlobalId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IdentityApiGroupResponse>(),
            ListGroupsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
