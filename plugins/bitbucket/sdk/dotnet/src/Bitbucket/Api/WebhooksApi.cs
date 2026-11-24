using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Errors;
using Bitbucket.Models;
using Bitbucket.Models.AllOf;
using Bitbucket.Requests.WebhooksApi;

namespace Bitbucket.Api;

/// <summary>
/// Webhooks provide a way to configure Bitbucket Cloud to make requests to
/// your server (or another external service) whenever certain events occur in
/// Bitbucket Cloud.
/// </summary>
public sealed class WebhooksApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WebhooksApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a webhook for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified webhook subscription from the given
    /// repository.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2(DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("uid", request.Uid),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugHooksByUid2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a webhook for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWorkspacesByWorkspaceHooksByUidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified webhook subscription from the given workspace.
    /// </remarks>
    public Task DeleteWorkspacesByWorkspaceHooksByUid(DeleteWorkspacesByWorkspaceHooksByUidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/hooks/{uid}"),
            [new TemplateParam("uid", request.Uid), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWorkspacesByWorkspaceHooksByUidError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a webhook resource
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubjectTypes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the webhook resource or subject types on which webhooks can
    /// be registered.
    /// <para>
    /// Each resource/subject type contains an <c>events</c> link that returns the
    /// paginated list of specific events each individual subject type can
    /// emit.
    /// </para>
    /// <para>
    /// This endpoint is publicly accessible and does not require
    /// authentication or scopes.
    /// </para>
    /// </remarks>
    public Task<SubjectTypes> GetHookEvents(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/hook_events"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubjectTypes>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List subscribable webhook types
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedHookEvents"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetHookEventsBySubjectTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of all valid webhook events for the
    /// specified entity.
    /// **The team and user webhooks are deprecated, and you should use workspace instead.
    /// For more information, see the announcement.**
    /// <para>
    /// This is public data that does not require any scopes or authentication.
    /// </para>
    /// <para>
    /// NOTE: The example response is a truncated response object for the <c>workspace</c> <c>subject_type</c>.
    /// We return the same structure for the other <c>subject_type</c> objects.
    /// </para>
    /// </remarks>
    public Task<PaginatedHookEvents> GetHookEventsBySubjectType(GetHookEventsBySubjectTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/hook_events/{subject_type}"),
            [new TemplateParam("subject_type", request.SubjectType)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedHookEvents>(),
            GetHookEventsBySubjectTypeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List webhooks for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedWebhookSubscriptions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugHooks2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of webhooks installed on this repository.
    /// </remarks>
    public Task<PaginatedWebhookSubscriptions> GetRepositoriesByWorkspaceByRepoSlugHooks2(GetRepositoriesByWorkspaceByRepoSlugHooks2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/hooks"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedWebhookSubscriptions>(),
            GetRepositoriesByWorkspaceByRepoSlugHooks2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a webhook for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the webhook with the specified id installed on the specified
    /// repository.
    /// </remarks>
    public Task<WebhookSubscription> GetRepositoriesByWorkspaceByRepoSlugHooksByUid2(GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("uid", request.Uid),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            GetRepositoriesByWorkspaceByRepoSlugHooksByUid2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List webhooks for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedWebhookSubscriptions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceHooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of webhooks installed on this workspace.
    /// </remarks>
    public Task<PaginatedWebhookSubscriptions> GetWorkspacesByWorkspaceHooks(GetWorkspacesByWorkspaceHooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/hooks"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedWebhookSubscriptions>(),
            GetWorkspacesByWorkspaceHooksError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a webhook for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspacesByWorkspaceHooksByUidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the webhook with the specified id installed on the given
    /// workspace.
    /// </remarks>
    public Task<WebhookSubscription> GetWorkspacesByWorkspaceHooksByUid(GetWorkspacesByWorkspaceHooksByUidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/hooks/{uid}"),
            [new TemplateParam("uid", request.Uid), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            GetWorkspacesByWorkspaceHooksByUidError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a webhook for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugHooks2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new webhook on the specified repository.
    /// <para>
    /// Example:
    /// </para>
    /// <code>
    /// $ curl -X POST -u credentials -H 'Content-Type: application/json'
    /// https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
    /// -d '
    /// {
    /// "description": "Webhook Description",
    /// "url": "https://example.com/",
    /// "active": true,
    /// "secret": "this is a really bad secret",
    /// "events": [
    /// "repo:push",
    /// "issue:created",
    /// "issue:updated"
    /// ]
    /// }'
    /// </code>
    /// <para>
    /// When the <c>secret</c> is provided it will be used as the key to generate a HMAC
    /// digest value sent in the <c>X-Hub-Signature</c> header at delivery time. Passing
    /// a <c>null</c> or empty <c>secret</c> or not passing a <c>secret</c> will leave the webhook's
    /// secret unset. Bitbucket only generates the <c>X-Hub-Signature</c> when the webhook's
    /// secret is set.
    /// </para>
    /// <para>
    /// Note that this call requires the webhook scope, as well as any scope
    /// that applies to the events that the webhook subscribes to. In the
    /// example above that means: <c>webhook</c>, <c>repository</c> and <c>issue</c>.
    /// </para>
    /// <para>
    /// Also note that the <c>url</c> must properly resolve and cannot be an
    /// internal, non-routed address.
    /// </para>
    /// </remarks>
    public Task<WebhookSubscription> PostRepositoriesByWorkspaceByRepoSlugHooks2(PostRepositoriesByWorkspaceByRepoSlugHooks2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/hooks"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            PostRepositoriesByWorkspaceByRepoSlugHooks2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a webhook for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostWorkspacesByWorkspaceHooksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new webhook on the specified workspace.
    /// <para>
    /// Workspace webhooks are fired for events from all repositories contained
    /// by that workspace.
    /// </para>
    /// <para>
    /// Example:
    /// </para>
    /// <code>
    /// $ curl -X POST -u credentials -H 'Content-Type: application/json'
    /// https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks
    /// -d '
    /// {
    /// "description": "Webhook Description",
    /// "url": "https://example.com/",
    /// "active": true,
    /// "secret": "this is a really bad secret",
    /// "events": [
    /// "repo:push",
    /// "issue:created",
    /// "issue:updated"
    /// ]
    /// }'
    /// </code>
    /// <para>
    /// When the <c>secret</c> is provided it will be used as the key to generate a HMAC
    /// digest value sent in the <c>X-Hub-Signature</c> header at delivery time. Passing
    /// a <c>null</c> or empty <c>secret</c> or not passing a <c>secret</c> will leave the webhook's
    /// secret unset. Bitbucket only generates the <c>X-Hub-Signature</c> when the webhook's
    /// secret is set.
    /// </para>
    /// <para>
    /// This call requires the webhook scope, as well as any scope
    /// that applies to the events that the webhook subscribes to. In the
    /// example above that means: <c>webhook</c>, <c>repository</c> and <c>issue</c>.
    /// </para>
    /// <para>
    /// The <c>url</c> must properly resolve and cannot be an internal, non-routed address.
    /// </para>
    /// <para>
    /// Only workspace owners can install webhooks on workspaces.
    /// </para>
    /// </remarks>
    public Task<WebhookSubscription> PostWorkspacesByWorkspaceHooks(PostWorkspacesByWorkspaceHooksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/hooks"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            PostWorkspacesByWorkspaceHooksError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook for a repository
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the specified webhook subscription.
    /// <para>
    /// The following properties can be mutated:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>description</c></description></item>
    ///   <item><description><c>url</c></description></item>
    ///   <item><description><c>secret</c></description></item>
    ///   <item><description><c>active</c></description></item>
    ///   <item><description><c>events</c></description></item>
    /// </list>
    /// <para>
    /// The hook's secret is used as a key to generate the HMAC hex digest sent in the
    /// <c>X-Hub-Signature</c> header at delivery time. This signature is only generated
    /// when the hook has a secret.
    /// </para>
    /// <para>
    /// Set the hook's secret by passing the new value in the <c>secret</c> field. Passing a
    /// <c>null</c> value in the <c>secret</c> field will remove the secret from the hook. The
    /// hook's secret can be left unchanged by not passing the <c>secret</c> field in the
    /// request.
    /// </para>
    /// </remarks>
    public Task<WebhookSubscription> PutRepositoriesByWorkspaceByRepoSlugHooksByUid2(PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/hooks/{uid}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("uid", request.Uid),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            PutRepositoriesByWorkspaceByRepoSlugHooksByUid2Error.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a webhook for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookSubscription"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutWorkspacesByWorkspaceHooksByUidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the specified webhook subscription.
    /// <para>
    /// The following properties can be mutated:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>description</c></description></item>
    ///   <item><description><c>url</c></description></item>
    ///   <item><description><c>secret</c></description></item>
    ///   <item><description><c>active</c></description></item>
    ///   <item><description><c>events</c></description></item>
    /// </list>
    /// <para>
    /// The hook's secret is used as a key to generate the HMAC hex digest sent in the
    /// <c>X-Hub-Signature</c> header at delivery time. This signature is only generated
    /// when the hook has a secret.
    /// </para>
    /// <para>
    /// Set the hook's secret by passing the new value in the <c>secret</c> field. Passing a
    /// <c>null</c> value in the <c>secret</c> field will remove the secret from the hook. The
    /// hook's secret can be left unchanged by not passing the <c>secret</c> field in the
    /// request.
    /// </para>
    /// </remarks>
    public Task<WebhookSubscription> PutWorkspacesByWorkspaceHooksByUid(PutWorkspacesByWorkspaceHooksByUidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/workspaces/{workspace}/hooks/{uid}"),
            [new TemplateParam("uid", request.Uid), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookSubscription>(),
            PutWorkspacesByWorkspaceHooksByUidError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
