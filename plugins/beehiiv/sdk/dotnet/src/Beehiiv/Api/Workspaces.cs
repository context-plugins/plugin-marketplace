using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.Workspaces;

namespace Beehiiv.Api;

public sealed class Workspaces
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Workspaces(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Identify workspace OAuth Scope: identify:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspaceIdentifyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Identify2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve information about the workspace the OAuth or API token is associated with.
    /// </remarks>
    public Task<WorkspaceIdentifyResponse> Identify2(Identify2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/identify"),
            [],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspaceIdentifyResponse>(),
            Identify2Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get workspace permissions OAuth Scope: identify:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkspacePermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the permissions granted to the OAuth or API token for this workspace. API keys return all granular OAuth scopes. OAuth tokens return only the scopes they were authorized for.
    /// <para>
    /// <c>posts</c> write access is only included when the Send API feature is enabled; tokens with <c>posts:write</c> but without Send API receive <c>posts</c> as <c>["read"]</c>.
    /// </para>
    /// </remarks>
    public Task<WorkspacePermissionsResponse> Permissions(PermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/permissions"),
            [],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkspacePermissionsResponse>(),
            PermissionsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get publications by subscription email OAuth Scope: publications:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="PublicationsBySubscriptionEmailResponseItem"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PublicationsBySubscriptionEmailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all publications in the workspace that have a subscription for the specified email address. The workspace is determined by the provided API key.
    /// </remarks>
    public Task<IReadOnlyList<PublicationsBySubscriptionEmailResponseItem>> PublicationsBySubscriptionEmail(PublicationsBySubscriptionEmailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/publications/by_subscription_email/{email}"),
            [new TemplateParam("email", request.Email)],
            [new Param("expand", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<PublicationsBySubscriptionEmailResponseItem>>(),
            PublicationsBySubscriptionEmailError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
