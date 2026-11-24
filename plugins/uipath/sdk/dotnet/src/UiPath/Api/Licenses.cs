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
using UiPath.Requests.Licenses;

namespace UiPath.Api;

/// <summary>
/// Manage license allocations across user groups and services
/// </summary>
public sealed class Licenses
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Licenses(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Get License Allocation for a Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupLicenseAllocation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGroupLicenseAllocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the user license allocation rule for a specific group within the organization account. Returns the license types allocated to the group and the current usage count. Requires the PM.License or PM.License.Read OAuth scope.
    /// </remarks>
    public Task<GroupLicenseAllocation> GetGroupLicenseAllocation(GetGroupLicenseAllocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathPlatformManagementAuditLogsApi(
                "/{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}"),
            [
                new TemplateParam("organizationName", request.OrganizationName),
                new TemplateParam("accountId", request.AccountId),
                new TemplateParam("groupId", request.GroupId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GroupLicenseAllocation>(),
            GetGroupLicenseAllocationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Update License Allocation for a Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GroupLicenseAllocation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateGroupLicenseAllocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Allocates or updates user licenses for a specific group. The rule defines which license types members of this group are entitled to. This controls the licenses automatically assigned when a member of the group first logs in. Requires the PM.License OAuth scope.
    /// </remarks>
    public Task<GroupLicenseAllocation> UpdateGroupLicenseAllocation(UpdateGroupLicenseAllocationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathPlatformManagementAuditLogsApi(
                "/{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}"),
            [
                new TemplateParam("organizationName", request.OrganizationName),
                new TemplateParam("accountId", request.AccountId),
                new TemplateParam("groupId", request.GroupId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GroupLicenseAllocation>(),
            UpdateGroupLicenseAllocationError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
