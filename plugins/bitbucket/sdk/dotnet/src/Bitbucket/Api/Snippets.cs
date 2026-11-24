using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Errors;
using Bitbucket.Models;
using Bitbucket.Models.AllOf;
using Bitbucket.Requests.Snippets;

namespace Bitbucket.Api;

/// <summary>
/// Snippets allow you share code segments or files with yourself, members of
/// your workspace, or the world.
/// <para>
/// Like pull requests, repositories and workspaces, the full set of snippets
/// is defined by what the current user has access to. This includes all
/// snippets owned by any of the workspaces the user is a member of, or
/// snippets by other users that the current user is either watching or has
/// collaborated on (for instance by commenting on it).
/// </para>
/// </summary>
public sealed class Snippets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Snippets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSnippetsByWorkspaceByEncodedIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a snippet and returns an empty response.
    /// </remarks>
    public Task DeleteSnippetsByWorkspaceByEncodedId(DeleteSnippetsByWorkspaceByEncodedIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}"),
            [new TemplateParam("encoded_id", request.EncodedId), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSnippetsByWorkspaceByEncodedIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a previous revision of a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSnippetsByWorkspaceByEncodedIdByNodeIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the snippet.
    /// <para>
    /// Note that this only works for versioned URLs that point to the latest
    /// commit of the snippet. Pointing to an older commit results in a 405
    /// status code.
    /// </para>
    /// <para>
    /// To delete a snippet, regardless of whether or not concurrent changes
    /// are being made to it, use <c>DELETE /snippets/{encoded_id}</c> instead.
    /// </para>
    /// </remarks>
    public Task DeleteSnippetsByWorkspaceByEncodedIdByNodeId(DeleteSnippetsByWorkspaceByEncodedIdByNodeIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/{node_id}"),
            [
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("node_id", request.NodeId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSnippetsByWorkspaceByEncodedIdByNodeIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a comment on a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a snippet comment.
    /// <para>
    /// Comments can only be removed by the comment author, snippet creator, or workspace admin.
    /// </para>
    /// </remarks>
    public Task DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentId(DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop watching a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSnippetsByWorkspaceByEncodedIdWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Used to stop watching a specific snippet. Returns 204 (No Content)
    /// to indicate success.
    /// </remarks>
    public Task DeleteSnippetsByWorkspaceByEncodedIdWatch(DeleteSnippetsByWorkspaceByEncodedIdWatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/watch"),
            [new TemplateParam("encoded_id", request.EncodedId), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSnippetsByWorkspaceByEncodedIdWatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List snippets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedSnippets"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// **This endpoint is deprecated. Please use the
    /// workspace scoped alternative.**
    /// <para>
    /// Returns all snippets. Like pull requests, repositories and workspaces, the
    /// full set of snippets is defined by what the current user has access to.
    /// </para>
    /// <para>
    /// This includes all snippets owned by any of the workspaces the user is a member of,
    /// or snippets by other users that the current user is either watching or has collaborated
    /// on (for instance by commenting on it).
    /// </para>
    /// <para>
    /// To limit the set of returned snippets, apply the
    /// <c>?role=[owner|contributor|member]</c> query parameter where the roles are
    /// defined as follows:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>owner</c>: all snippets owned by the current user</description></item>
    ///   <item><description><c>contributor</c>: all snippets owned by, or watched by the current user</description></item>
    ///   <item><description><c>member</c>: created in a workspaces or watched by the current user</description></item>
    /// </list>
    /// <para>
    /// When no role is specified, all public snippets are returned, as well as all
    /// privately owned snippets watched or commented on.
    /// </para>
    /// <para>
    /// The returned response is a normal paginated JSON list. This endpoint
    /// only supports <c>application/json</c> responses and no
    /// <c>multipart/form-data</c> or <c>multipart/related</c>. As a result, it is not
    /// possible to include the file contents.
    /// </para>
    /// </remarks>
    public Task<PaginatedSnippets> GetSnippets(GetSnippetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets"),
            [],
            [new Param("role", request.Role)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedSnippets>(),
            GetSnippetsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List snippets in a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedSnippets"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Identical to <c>/snippets</c>, except that the result is further filtered
    /// by the snippet owner and only those that are owned by <c>{workspace}</c> are
    /// returned.
    /// </remarks>
    public Task<PaginatedSnippets> GetSnippetsByWorkspace(GetSnippetsByWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}"),
            [new TemplateParam("workspace", request.Workspace)],
            [new Param("role", request.Role)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedSnippets>(),
            GetSnippetsByWorkspaceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Snippet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a single snippet.
    /// </remarks>
    public Task<Snippet> GetSnippetsByWorkspaceByEncodedId(GetSnippetsByWorkspaceByEncodedIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}"),
            [new TemplateParam("encoded_id", request.EncodedId), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Snippet>(),
            GetSnippetsByWorkspaceByEncodedIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a previous revision of a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Snippet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdByNodeIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Identical to <c>GET /snippets/encoded_id</c>, except that this endpoint
    /// can be used to retrieve the contents of the snippet as it was at an
    /// older revision, while <c>/snippets/encoded_id</c> always returns the
    /// snippet's current revision.
    /// <para>
    /// Note that only the snippet's file contents are versioned, not its
    /// meta data properties like the title.
    /// </para>
    /// <para>
    /// Other than that, the two endpoints are identical in behavior.
    /// </para>
    /// </remarks>
    public Task<Snippet> GetSnippetsByWorkspaceByEncodedIdByNodeId(GetSnippetsByWorkspaceByEncodedIdByNodeIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/{node_id}"),
            [
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("node_id", request.NodeId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Snippet>(),
            GetSnippetsByWorkspaceByEncodedIdByNodeIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a snippet's raw file
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the raw contents of a specific file in the snippet. The
    /// <c>Content-Disposition</c> header will be "attachment" to avoid issues with
    /// malevolent executable files.
    /// <para>
    /// The file's mime type is derived from its filename and returned in the
    /// <c>Content-Type</c> header.
    /// </para>
    /// <para>
    /// Note that for text files, no character encoding is included as part of
    /// the content type.
    /// </para>
    /// </remarks>
    public Task GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPath(GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}"),
            [
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("node_id", request.NodeId),
                new TemplateParam("path", request.Path),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get snippet changes between versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdByRevisionDiffError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the diff of the specified commit against its first parent.
    /// <para>
    /// Note that this resource is different in functionality from the <c>patch</c>
    /// resource.
    /// </para>
    /// <para>
    /// The differences between a diff and a patch are:
    /// </para>
    /// <para>
    /// * patches have a commit header with the username, message, etc
    /// * diffs support the optional <c>path=foo/bar.py</c> query param to filter the
    /// diff to just that one file diff (not supported for patches)
    /// * for a merge, the diff will show the diff between the merge commit and
    /// its first parent (identical to how PRs work), while patch returns a
    /// response containing separate patches for each commit on the second
    /// parent's ancestry, up to the oldest common ancestor (identical to
    /// its reachability).
    /// </para>
    /// <para>
    /// Note that the character encoding of the contents of the diff is
    /// unspecified as Git does not track this, making it hard for
    /// Bitbucket to reliably determine this.
    /// </para>
    /// </remarks>
    public Task GetSnippetsByWorkspaceByEncodedIdByRevisionDiff(GetSnippetsByWorkspaceByEncodedIdByRevisionDiffRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/{revision}/diff"),
            [
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("revision", request.Revision),
                new TemplateParam("workspace", request.Workspace),
            ],
            [new Param("path", request.Path)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetSnippetsByWorkspaceByEncodedIdByRevisionDiffError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get snippet patch between versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdByRevisionPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the patch of the specified commit against its first
    /// parent.
    /// <para>
    /// Note that this resource is different in functionality from the <c>diff</c>
    /// resource.
    /// </para>
    /// <para>
    /// The differences between a diff and a patch are:
    /// </para>
    /// <para>
    /// * patches have a commit header with the username, message, etc
    /// * diffs support the optional <c>path=foo/bar.py</c> query param to filter the
    /// diff to just that one file diff (not supported for patches)
    /// * for a merge, the diff will show the diff between the merge commit and
    /// its first parent (identical to how PRs work), while patch returns a
    /// response containing separate patches for each commit on the second
    /// parent's ancestry, up to the oldest common ancestor (identical to
    /// its reachability).
    /// </para>
    /// <para>
    /// Note that the character encoding of the contents of the patch is
    /// unspecified as Git does not track this, making it hard for
    /// Bitbucket to reliably determine this.
    /// </para>
    /// </remarks>
    public Task GetSnippetsByWorkspaceByEncodedIdByRevisionPatch(GetSnippetsByWorkspaceByEncodedIdByRevisionPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/{revision}/patch"),
            [
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("revision", request.Revision),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetSnippetsByWorkspaceByEncodedIdByRevisionPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List comments on a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedSnippetComments"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Used to retrieve a paginated list of all comments for a specific
    /// snippet.
    /// <para>
    /// This resource works identical to commit and pull request comments.
    /// </para>
    /// <para>
    /// The default sorting is oldest to newest and can be overridden with
    /// the <c>sort</c> query parameter.
    /// </para>
    /// </remarks>
    public Task<PaginatedSnippetComments> GetSnippetsByWorkspaceByEncodedIdComments(GetSnippetsByWorkspaceByEncodedIdCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/comments"),
            [new TemplateParam("encoded_id", request.EncodedId), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedSnippetComments>(),
            GetSnippetsByWorkspaceByEncodedIdCommentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a comment on a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SnippetComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specific snippet comment.
    /// </remarks>
    public Task<SnippetComment> GetSnippetsByWorkspaceByEncodedIdCommentsByCommentId(GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SnippetComment>(),
            GetSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List snippet changes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedSnippetCommits"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdCommitsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the changes (commits) made on this snippet.
    /// </remarks>
    public Task<PaginatedSnippetCommits> GetSnippetsByWorkspaceByEncodedIdCommits(GetSnippetsByWorkspaceByEncodedIdCommitsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/commits"),
            [new TemplateParam("encoded_id", request.EncodedId), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedSnippetCommits>(),
            GetSnippetsByWorkspaceByEncodedIdCommitsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a previous snippet change
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SnippetCommit"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the changes made on this snippet in this commit.
    /// </remarks>
    public Task<SnippetCommit> GetSnippetsByWorkspaceByEncodedIdCommitsByRevision(GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/commits/{revision}"),
            [
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("revision", request.Revision),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SnippetCommit>(),
            GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a snippet's raw file at HEAD
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdFilesByPathError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convenience resource for getting to a snippet's raw files without the
    /// need for first having to retrieve the snippet itself and having to pull
    /// out the versioned file links.
    /// </remarks>
    public Task GetSnippetsByWorkspaceByEncodedIdFilesByPath(GetSnippetsByWorkspaceByEncodedIdFilesByPathRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/files/{path}"),
            [
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("path", request.Path),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetSnippetsByWorkspaceByEncodedIdFilesByPathError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check if the current user is watching a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Used to check if the current user is watching a specific snippet.
    /// <para>
    /// Returns 204 (No Content) if the user is watching the snippet and 404 if
    /// not.
    /// </para>
    /// <para>
    /// Hitting this endpoint anonymously always returns a 404.
    /// </para>
    /// </remarks>
    public Task GetSnippetsByWorkspaceByEncodedIdWatch(GetSnippetsByWorkspaceByEncodedIdWatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/watch"),
            [new TemplateParam("encoded_id", request.EncodedId), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetSnippetsByWorkspaceByEncodedIdWatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List users watching a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedAccounts"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnippetsByWorkspaceByEncodedIdWatchersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of all users watching a specific snippet.
    /// </remarks>
    public Task<PaginatedAccounts> GetSnippetsByWorkspaceByEncodedIdWatchers(GetSnippetsByWorkspaceByEncodedIdWatchersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/watchers"),
            [new TemplateParam("encoded_id", request.EncodedId), new TemplateParam("workspace", request.Workspace)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedAccounts>(),
            GetSnippetsByWorkspaceByEncodedIdWatchersError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Snippet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostSnippetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new snippet under the authenticated user's account.
    /// </remarks>
    public Task<Snippet> PostSnippets(PostSnippetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Snippet>(),
            PostSnippetsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a snippet for a workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Snippet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostSnippetsByWorkspaceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Identical to <c>/snippets</c>, except that the new snippet will be
    /// created under the workspace specified in the path parameter
    /// <c>{workspace}</c>.
    /// </remarks>
    public Task<Snippet> PostSnippetsByWorkspace(PostSnippetsByWorkspaceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Snippet>(),
            PostSnippetsByWorkspaceError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a comment on a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SnippetComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostSnippetsByWorkspaceByEncodedIdCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new comment.
    /// <para>
    /// The only required field in the body is <c>content.raw</c>.
    /// </para>
    /// <para>
    /// To create a threaded reply to an existing comment, include <c>parent.id</c>.
    /// </para>
    /// </remarks>
    public Task<SnippetComment> PostSnippetsByWorkspaceByEncodedIdComments(PostSnippetsByWorkspaceByEncodedIdCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/comments"),
            [new TemplateParam("encoded_id", request.EncodedId), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SnippetComment>(),
            PostSnippetsByWorkspaceByEncodedIdCommentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Snippet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutSnippetsByWorkspaceByEncodedIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Used to update a snippet.
    /// </remarks>
    public Task<Snippet> PutSnippetsByWorkspaceByEncodedId(PutSnippetsByWorkspaceByEncodedIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}"),
            [new TemplateParam("encoded_id", request.EncodedId), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<Snippet>(),
            PutSnippetsByWorkspaceByEncodedIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a previous revision of a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Snippet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutSnippetsByWorkspaceByEncodedIdByNodeIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Identical to <c>UPDATE /snippets/encoded_id</c>, except that this endpoint
    /// takes an explicit commit revision. Only the snippet's "HEAD"/"tip"
    /// (most recent) version can be updated and requests on all other,
    /// older revisions fail by returning a 405 status.
    /// <para>
    /// Usage of this endpoint over the unrestricted <c>/snippets/encoded_id</c>
    /// could be desired if the caller wants to be sure no concurrent
    /// modifications have taken place between the moment of the UPDATE
    /// request and the original GET.
    /// </para>
    /// <para>
    /// This can be considered a so-called "Compare And Swap", or CAS
    /// operation.
    /// </para>
    /// <para>
    /// Other than that, the two endpoints are identical in behavior.
    /// </para>
    /// </remarks>
    public Task<Snippet> PutSnippetsByWorkspaceByEncodedIdByNodeId(PutSnippetsByWorkspaceByEncodedIdByNodeIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/{node_id}"),
            [
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("node_id", request.NodeId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<Snippet>(),
            PutSnippetsByWorkspaceByEncodedIdByNodeIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a comment on a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SnippetComment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a comment.
    /// <para>
    /// The only required field in the body is <c>content.raw</c>.
    /// </para>
    /// <para>
    /// Comments can only be updated by their author.
    /// </para>
    /// </remarks>
    public Task<SnippetComment> PutSnippetsByWorkspaceByEncodedIdCommentsByCommentId(PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/comments/{comment_id}"),
            [
                new TemplateParam("comment_id", request.CommentId),
                new TemplateParam("encoded_id", request.EncodedId),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SnippetComment>(),
            PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Watch a snippet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutSnippetsByWorkspaceByEncodedIdWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Used to start watching a specific snippet. Returns 204 (No Content).
    /// </remarks>
    public Task PutSnippetsByWorkspaceByEncodedIdWatch(PutSnippetsByWorkspaceByEncodedIdWatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snippets/{workspace}/{encoded_id}/watch"),
            [new TemplateParam("encoded_id", request.EncodedId), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PutSnippetsByWorkspaceByEncodedIdWatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
