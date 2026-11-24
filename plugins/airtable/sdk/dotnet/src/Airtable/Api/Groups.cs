using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Airtable.Core;
using Airtable.Core.Exceptions;
using Airtable.Core.Models;
using Airtable.Core.Request;
using Airtable.Core.Response;
using Airtable.Errors;
using Airtable.Models;
using Airtable.Requests.Groups;

namespace Airtable.Api;

/// <summary>
/// SCIM group provisioning and management
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
    /// Airtable Create a SCIM Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateScimGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new SCIM group in the enterprise account. Groups can contain user members and are used for access management.
    /// </remarks>
    public Task<ScimGroup> CreateScimGroup(CreateScimGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Groups"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScimGroup>(),
            CreateScimGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Delete a SCIM Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteScimGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a SCIM group from the enterprise account. Members are not deleted but are removed from the group.
    /// </remarks>
    public Task DeleteScimGroup(DeleteScimGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Groups/{groupId}"),
            [new TemplateParam("groupId", request.GroupId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteScimGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Get a SCIM Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScimGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single SCIM group resource by its unique identifier, including its member list.
    /// </remarks>
    public Task<ScimGroup> GetScimGroup(GetScimGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Groups/{groupId}"),
            [new TemplateParam("groupId", request.GroupId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScimGroup>(),
            GetScimGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable List SCIM Groups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimGroupListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListScimGroupsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of SCIM group resources. Supports filtering by group display name and pagination using startIndex and count.
    /// </remarks>
    public Task<ScimGroupListResponse> ListScimGroups(ListScimGroupsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Groups"),
            [],
            [
                new Param("filter", request.Filter),
                new Param("startIndex", request.StartIndex),
                new Param("count", request.Count),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ScimGroupListResponse>(),
            ListScimGroupsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Replace a SCIM Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReplaceScimGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replaces a SCIM group resource entirely with the provided data. The complete member list must be included in the request.
    /// </remarks>
    public Task<ScimGroup> ReplaceScimGroup(ReplaceScimGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Groups/{groupId}"),
            [new TemplateParam("groupId", request.GroupId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScimGroup>(),
            ReplaceScimGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Update a SCIM Group (partial)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScimGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateScimGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially updates a SCIM group resource using SCIM PATCH operations. Commonly used to add or remove members from the group without replacing the entire resource.
    /// </remarks>
    public Task<ScimGroup> UpdateScimGroup(UpdateScimGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultAirtableScimGroupsApi("/Groups/{groupId}"),
            [new TemplateParam("groupId", request.GroupId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScimGroup>(),
            UpdateScimGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
