using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.Members;

namespace Shortcut.Api;

public sealed class Members
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Members(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Member
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Member"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMemberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about a Member.
    /// </remarks>
    public Task<Member> GetMember(GetMemberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/members/{member-public-id}"),
            [new TemplateParam("member-public-id", request.MemberPublicId)],
            [new Param("org-public-id", request.OrgPublicId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Member>(),
            GetMemberError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Members
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Member"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMembersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about members of the Workspace.
    /// </remarks>
    public Task<IReadOnlyList<Member>> ListMembers(ListMembersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/members"),
            [],
            [new Param("org-public-id", request.OrgPublicId), new Param("disabled", request.Disabled)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Member>>(),
            ListMembersError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
