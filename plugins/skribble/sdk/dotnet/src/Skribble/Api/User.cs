using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Exceptions;
using Skribble.Core.Models;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Models;
using Skribble.Requests.User;

namespace Skribble.Api;

/// <summary>
/// Endpoints for user information and signature quality queries.
/// </summary>
public sealed class User
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal User(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Signature Quality Details for a User
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UserSignatureQualitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUserSignatureQualitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the effective signature <c>quality</c> that will be applied when the
    /// given <c>username</c> signs a document.
    /// <para>
    /// The resulting quality is determined by the combination of the requested
    /// <c>quality</c> and <c>legislation</c>, where <c>any</c> matches any legislation.
    /// </para>
    /// <para>
    /// For example, if you create a <c>SignatureRequest</c> with <c>quality=AES_MINIMAL</c>
    /// and <c>legislation=ZERTES</c>, this endpoint will indicate the final quality the
    /// user will sign with — typically <c>QES</c>, as <c>AES_MINIMAL</c> upgrades to <c>QES</c>
    /// when the user's settings allow it.
    /// </para>
    /// </remarks>
    public Task<UserSignatureQualitiesResponse> GetUserSignatureQualities(GetUserSignatureQualitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleUserApi("/user/signature-qualities"),
            [],
            [new Param("username", request.Username)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<UserSignatureQualitiesResponse>(),
            GetUserSignatureQualitiesError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
