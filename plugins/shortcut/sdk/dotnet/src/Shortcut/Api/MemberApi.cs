using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;

namespace Shortcut.Api;

public sealed class MemberApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MemberApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Current Member Info
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MemberInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCurrentMemberInfoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the authenticated member.
    /// </remarks>
    public Task<MemberInfo> GetCurrentMemberInfo(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/member"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MemberInfo>(),
            GetCurrentMemberInfoError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
