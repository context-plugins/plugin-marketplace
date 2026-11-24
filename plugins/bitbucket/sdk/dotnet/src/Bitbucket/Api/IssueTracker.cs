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
using Bitbucket.Requests.IssueTracker;

namespace Bitbucket.Api;

/// <summary>
/// The issue resources provide functionality for getting information on
/// issues in an issue tracker, creating new issues, updating them and deleting
/// them.
/// </summary>
public sealed class IssueTracker
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal IssueTracker(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified issue. This requires write access to the
    /// repository.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an attachment for an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an attachment.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPath(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("path", request.Path),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a comment on an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified comment.
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove vote for an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Error"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retract your vote.
    /// </remarks>
    public Task<Error> DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Error>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop watching an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Error"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stop watching this issue.
    /// </remarks>
    public Task<Error> DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Error>(),
            DeleteRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List components
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedComponents"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugComponentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the components that have been defined in the issue tracker.
    /// <para>
    /// This resource is only available on repositories that have the issue
    /// tracker enabled.
    /// </para>
    /// </remarks>
    public Task<PaginatedComponents> GetRepositoriesByWorkspaceByRepoSlugComponents(GetRepositoriesByWorkspaceByRepoSlugComponentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/components"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedComponents>(),
            GetRepositoriesByWorkspaceByRepoSlugComponentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a component for issues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Component"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified issue tracker component object.
    /// </remarks>
    public Task<Component> GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentId(GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/components/{component_id}"),
            [
                new TemplateParam("component_id", request.ComponentId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Component>(),
            GetRepositoriesByWorkspaceByRepoSlugComponentsByComponentIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List issues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedIssues"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugIssuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the issues in the issue tracker.
    /// </remarks>
    public Task<PaginatedIssues> GetRepositoriesByWorkspaceByRepoSlugIssues(GetRepositoriesByWorkspaceByRepoSlugIssuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedIssues>(),
            GetRepositoriesByWorkspaceByRepoSlugIssuesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Issue"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified issue.
    /// </remarks>
    public Task<Issue> GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Issue>(),
            GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List attachments for an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedIssueAttachment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all attachments for this issue.
    /// <para>
    /// This returns the files' meta data. This does not return the files'
    /// actual contents.
    /// </para>
    /// <para>
    /// The files are always ordered by their upload date.
    /// </para>
    /// </remarks>
    public Task<PaginatedIssueAttachment> GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachments(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedIssueAttachment>(),
            GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get attachment for an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the contents of the specified file attachment.
    /// <para>
    /// Note that this endpoint does not return a JSON response, but instead
    /// returns a redirect pointing to the actual file that in turn will return
    /// the raw contents.
    /// </para>
    /// <para>
    /// The redirect URL contains a one-time token that has a limited lifetime.
    /// As a result, the link should not be persisted, stored, or shared.
    /// </para>
    /// </remarks>
    public Task GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPath(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("path", request.Path),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsByPathError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List changes on an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedLogEntries"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the list of all changes that have been made to the specified
    /// issue. Changes are returned in chronological order with the oldest
    /// change first.
    /// <para>
    /// Each time an issue is edited in the UI or through the API, an immutable
    /// change record is created under the <c>/issues/123/changes</c> endpoint. It
    /// also has a comment associated with the change.
    /// </para>
    /// <para>
    /// Note that this operation is changing significantly, due to privacy changes.
    /// See the announcement
    /// for details.
    /// </para>
    /// <para>
    /// Changes support filtering and sorting that
    /// can be used to search for specific changes. For instance, to see
    /// when an issue transitioned to "resolved":
    /// </para>
    /// <code>
    /// $ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \
    /// -G --data-urlencode='q=changes.state.new = "resolved"'
    /// </code>
    /// <para>
    /// This resource is only available on repositories that have the issue
    /// tracker enabled.
    /// </para>
    /// <para>
    /// N.B.
    /// </para>
    /// <para>
    /// The <c>changes.assignee</c> and <c>changes.assignee_account_id</c> fields are not
    /// a <c>user</c> object. Instead, they contain the raw <c>username</c> and
    /// <c>account_id</c> of the user. This is to protect the integrity of the audit
    /// log even after a user account gets deleted.
    /// </para>
    /// <para>
    /// The <c>changes.assignee</c> field is deprecated will disappear in the
    /// future. Use <c>changes.assignee_account_id</c> instead.
    /// </para>
    /// </remarks>
    public Task<PaginatedLogEntries> GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedLogEntries>(),
            GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get issue change object
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IssueChange"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified issue change object.
    /// <para>
    /// This resource is only available on repositories that have the issue
    /// tracker enabled.
    /// </para>
    /// </remarks>
    public Task<IssueChange> GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeId(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}"),
            [
                new TemplateParam("change_id", request.ChangeId),
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IssueChange>(),
            GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List comments on an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedIssueComments"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of all comments that were made on the
    /// specified issue.
    /// <para>
    /// The default sorting is oldest to newest and can be overridden with
    /// the <c>sort</c> query parameter.
    /// </para>
    /// <para>
    /// This endpoint also supports filtering and sorting of the results. See
    /// filtering and sorting for more details.
    /// </para>
    /// </remarks>
    public Task<PaginatedIssueComments> GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdComments(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("q", request.Q)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedIssueComments>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a comment on an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IssueComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified issue comment object.
    /// </remarks>
    public Task<IssueComment> GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IssueComment>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check if current user voted for an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Error"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check whether the authenticated user has voted for this issue.
    /// A 204 status code indicates that the user has voted, while a 404
    /// implies they haven't.
    /// </remarks>
    public Task<Error> GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Error>(),
            GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check if current user is watching a issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Error"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Indicated whether or not the authenticated user is watching this
    /// issue.
    /// </remarks>
    public Task<Error> GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Error>(),
            GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check issue export status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IssueJobStatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint is used to poll for the progress of an issue export
    /// job and return the zip file after the job is complete.
    /// As long as the job is running, this will return a 202 response
    /// with in the response body a description of the current status.
    /// <para>
    /// After the job has been scheduled, but before it starts executing, the endpoint
    /// returns a 202 response with status <c>ACCEPTED</c>.
    /// </para>
    /// <para>
    /// Once it starts running, it is a 202 response with status <c>STARTED</c> and progress filled.
    /// </para>
    /// <para>
    /// After it is finished, it becomes a 200 response with status <c>SUCCESS</c> or <c>FAILURE</c>.
    /// </para>
    /// </remarks>
    public Task<IssueJobStatus> GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZip(GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip"),
            [
                new TemplateParam("repo_name", request.RepoName),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("task_id", request.TaskId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IssueJobStatus>(),
            GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check issue import status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IssueJobStatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugIssuesImportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// When using GET, this endpoint reports the status of the current import task.
    /// <para>
    /// After the job has been scheduled, but before it starts executing, the endpoint
    /// returns a 202 response with status <c>ACCEPTED</c>.
    /// </para>
    /// <para>
    /// Once it starts running, it is a 202 response with status <c>STARTED</c> and progress filled.
    /// </para>
    /// <para>
    /// After it is finished, it becomes a 200 response with status <c>SUCCESS</c> or <c>FAILURE</c>.
    /// </para>
    /// </remarks>
    public Task<IssueJobStatus> GetRepositoriesByWorkspaceByRepoSlugIssuesImport(GetRepositoriesByWorkspaceByRepoSlugIssuesImportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/import"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IssueJobStatus>(),
            GetRepositoriesByWorkspaceByRepoSlugIssuesImportError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List milestones
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedMilestones"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugMilestonesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the milestones that have been defined in the issue tracker.
    /// <para>
    /// This resource is only available on repositories that have the issue
    /// tracker enabled.
    /// </para>
    /// </remarks>
    public Task<PaginatedMilestones> GetRepositoriesByWorkspaceByRepoSlugMilestones(GetRepositoriesByWorkspaceByRepoSlugMilestonesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/milestones"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedMilestones>(),
            GetRepositoriesByWorkspaceByRepoSlugMilestonesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a milestone
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Milestone"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified issue tracker milestone object.
    /// </remarks>
    public Task<Milestone> GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneId(GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}"),
            [
                new TemplateParam("milestone_id", request.MilestoneId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Milestone>(),
            GetRepositoriesByWorkspaceByRepoSlugMilestonesByMilestoneIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List defined versions for issues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedVersions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the versions that have been defined in the issue tracker.
    /// <para>
    /// This resource is only available on repositories that have the issue
    /// tracker enabled.
    /// </para>
    /// </remarks>
    public Task<PaginatedVersions> GetRepositoriesByWorkspaceByRepoSlugVersions(GetRepositoriesByWorkspaceByRepoSlugVersionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/versions"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedVersions>(),
            GetRepositoriesByWorkspaceByRepoSlugVersionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a defined version for issues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VersionModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified issue tracker version object.
    /// </remarks>
    public Task<VersionModel> GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionId(GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/versions/{version_id}"),
            [
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("version_id", request.VersionId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VersionModel>(),
            GetRepositoriesByWorkspaceByRepoSlugVersionsByVersionIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Issue"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugIssuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new issue.
    /// <para>
    /// This call requires authentication. Private repositories or private
    /// issue trackers require the caller to authenticate with an account that
    /// has appropriate authorization.
    /// </para>
    /// <para>
    /// The authenticated user is used for the issue's <c>reporter</c> field.
    /// </para>
    /// </remarks>
    public Task<Issue> PostRepositoriesByWorkspaceByRepoSlugIssues(PostRepositoriesByWorkspaceByRepoSlugIssuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Issue>(),
            PostRepositoriesByWorkspaceByRepoSlugIssuesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload an attachment to an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload new issue attachments.
    /// <para>
    /// To upload files, perform a <c>multipart/form-data</c> POST containing one
    /// or more file fields.
    /// </para>
    /// <para>
    /// When a file is uploaded with the same name as an existing attachment,
    /// then the existing file will be replaced.
    /// </para>
    /// </remarks>
    public Task PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachments(PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdAttachmentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Modify the state of an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IssueChange"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Makes a change to the specified issue.
    /// <para>
    /// For example, to change an issue's state and assignee, create a new
    /// change object that modifies these fields:
    /// </para>
    /// <code>
    /// curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \
    /// -s -u evzijst -X POST -H "Content-Type: application/json" \
    /// -d '{
    /// "changes": {
    /// "assignee_account_id": {
    /// "new": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
    /// },
    /// "state": {
    /// "new": 'resolved"
    /// }
    /// }
    /// "message": {
    /// "raw": "This is now resolved."
    /// }
    /// }'
    /// </code>
    /// <para>
    /// The above example also includes a custom comment to go alongside the
    /// change. This comment will also be visible on the issue page in the UI.
    /// </para>
    /// <para>
    /// The fields of the <c>changes</c> object are strings, not objects. This
    /// allows for immutable change log records, even after user accounts,
    /// milestones, or other objects recorded in a change entry, get renamed or
    /// deleted.
    /// </para>
    /// <para>
    /// The <c>assignee_account_id</c> field stores the account id. When POSTing a
    /// new change and changing the assignee, the client should therefore use
    /// the user's account_id in the <c>changes.assignee_account_id.new</c> field.
    /// </para>
    /// <para>
    /// This call requires authentication. Private repositories or private
    /// issue trackers require the caller to authenticate with an account that
    /// has appropriate authorization.
    /// </para>
    /// </remarks>
    public Task<IssueChange> PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges(PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IssueChange>(),
            PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a comment on an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new issue comment.
    /// <code>
    /// $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \
    /// -X POST -u evzijst \
    /// -H 'Content-Type: application/json' \
    /// -d '{"content": {"raw": "Lorem ipsum."}}'
    /// </code>
    /// </remarks>
    public Task PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdComments(PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Export issues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugIssuesExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A POST request to this endpoint initiates a new background celery task that archives the repo's issues.
    /// <para>
    /// When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
    /// 'Location' response header. This url is the endpoint for where the user can obtain their zip files."
    /// </para>
    /// </remarks>
    public Task PostRepositoriesByWorkspaceByRepoSlugIssuesExport(PostRepositoriesByWorkspaceByRepoSlugIssuesExportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/export"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostRepositoriesByWorkspaceByRepoSlugIssuesExportError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import issues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IssueJobStatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugIssuesImportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All
    /// existing issues will be deleted and replaced by the contents of the imported zip file.
    /// <para>
    /// Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
    /// "archive," which needs to be a file field:
    /// </para>
    /// <code>
    /// $ curl -u -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories///issues/import
    /// </code>
    /// </remarks>
    public Task<IssueJobStatus> PostRepositoriesByWorkspaceByRepoSlugIssuesImport(PostRepositoriesByWorkspaceByRepoSlugIssuesImportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/import"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<IssueJobStatus>(),
            PostRepositoriesByWorkspaceByRepoSlugIssuesImportError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Issue"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Modifies the issue.
    /// <code>
    /// $ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \
    /// -u evzijst -s -X PUT -H 'Content-Type: application/json' \
    /// -d '{
    /// "title": "Updated title",
    /// "assignee": {
    /// "account_id": "5d5355e8c6b9320d9ea5b28d"
    /// },
    /// "priority": "minor",
    /// "version": {
    /// "name": "1.0"
    /// },
    /// "component": null
    /// }'
    /// </code>
    /// <para>
    /// This example changes the <c>title</c>, <c>assignee</c>, <c>priority</c> and the
    /// <c>version</c>. It also removes the value of the <c>component</c> from the issue
    /// by setting the field to <c>null</c>. Any field not present keeps its existing
    /// value.
    /// </para>
    /// <para>
    /// Each time an issue is edited in the UI or through the API, an immutable
    /// change record is created under the <c>/issues/123/changes</c> endpoint. It
    /// also has a comment associated with the change.
    /// </para>
    /// </remarks>
    public Task<Issue> PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueId(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<Issue>(),
            PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a comment on an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IssueComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the content of the specified issue comment. Note that only
    /// the <c>content.raw</c> field can be modified.
    /// <code>
    /// $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \
    /// -X PUT -u evzijst \
    /// -H 'Content-Type: application/json' \
    /// -d '{"content": {"raw": "Lorem ipsum."}'
    /// </code>
    /// </remarks>
    public Task<IssueComment> PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentId(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IssueComment>(),
            PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdCommentsByCommentIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Vote for an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Error"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Vote for this issue.
    /// <para>
    /// To cast your vote, do an empty PUT. The 204 status code indicates that
    /// the operation was successful.
    /// </para>
    /// </remarks>
    public Task<Error> PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVote(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<Error>(),
            PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdVoteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Watch an issue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Error"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start watching this issue.
    /// <para>
    /// To start watching this issue, do an empty PUT. The 204 status code
    /// indicates that the operation was successful.
    /// </para>
    /// </remarks>
    public Task<Error> PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatch(PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch"),
            [
                new TemplateParam("issue_id", request.IssueId),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<Error>(),
            PutRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdWatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
