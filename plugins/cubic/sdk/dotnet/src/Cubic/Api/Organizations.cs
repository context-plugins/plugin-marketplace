using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cubic.Core;
using Cubic.Core.Exceptions;
using Cubic.Core.Models;
using Cubic.Core.Request;
using Cubic.Core.Response;
using Cubic.Errors;
using Cubic.Models;
using Cubic.Requests.Organizations;

namespace Cubic.Api;

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
    /// Get a member
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationMember"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMemberError"/> when the server returns an error response.</exception>
    public Task<OrganizationMember> GetMember(GetMemberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organizations/{org}/members/{githubUserId}"),
            [new TemplateParam("org", request.Org), new TemplateParam("githubUserId", request.GithubUserId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationMember>(),
            GetMemberError.Response,
            _auth.AnalyticsApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List members
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MemberList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMembersError"/> when the server returns an error response.</exception>
    public Task<MemberList> ListMembers(ListMembersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organizations/{org}/members"),
            [new TemplateParam("org", request.Org)],
            [
                new Param("search", request.Search),
                new Param("role", request.Role),
                new Param("seat", request.Seat),
                new Param("cursor", request.Cursor),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MemberList>(),
            ListMembersError.Response,
            _auth.AnalyticsApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List the organizations you can view
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListOrganizationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// An organization API key lists only its own organization.
    /// </remarks>
    public Task<OrganizationList> ListOrganizations(ListOrganizationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organizations"),
            [],
            [new Param("cursor", request.Cursor), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationList>(),
            ListOrganizationsError.Response,
            _auth.AnalyticsApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Turn a seat on or off, or change a role
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MemberUpdateResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMemberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Needs an organization admin or an organization API key with Admin access, and an active paid subscription. It never buys seats. Turning a seat off does not remove access to cubic. To remove someone, remove them from the GitHub organization.
    /// </remarks>
    public Task<MemberUpdateResult> UpdateMember(UpdateMemberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organizations/{org}/members/{githubUserId}"),
            [new TemplateParam("org", request.Org), new TemplateParam("githubUserId", request.GithubUserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MemberUpdateResult>(),
            UpdateMemberError.Response,
            _auth.AnalyticsApiKey,
            requestOptions,
            cancellationToken);
}
