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
using Bitbucket.Requests.Refs;

namespace Bitbucket.Api;

/// <summary>
/// The refs resource allows you access branches and tags in a repository.
/// By default, results will be in the order the underlying source control
/// system returns them and identical to the ordering one sees when running
/// "$ git show-ref". Note that this follows simple lexical ordering of the
/// ref names.
/// </summary>
public sealed class Refs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Refs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a branch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a branch in the specified repository.
    /// <para>
    /// The main branch is not allowed to be deleted and will return a 400
    /// response.
    /// </para>
    /// <para>
    /// The branch name should not include any prefixes (e.g.
    /// refs/heads).
    /// </para>
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByName(DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/refs/branches/{name}"),
            [
                new TemplateParam("name", request.Name),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a tag in the specified repository.
    /// <para>
    /// The tag name should not include any prefixes (e.g. refs/tags).
    /// </para>
    /// </remarks>
    public Task DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByName(DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/refs/tags/{name}"),
            [
                new TemplateParam("name", request.Name),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List branches and tags
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedRefs"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugRefsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the branches and tags in the repository.
    /// <para>
    /// By default, results will be in the order the underlying source control system returns them and identical to
    /// the ordering one sees when running "$ git show-ref". Note that this follows simple
    /// lexical ordering of the ref names.
    /// </para>
    /// <para>
    /// This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
    /// sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2",
    /// "branch10", "v9", "v10", "v11"].
    /// </para>
    /// <para>
    /// Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
    /// Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
    /// </para>
    /// </remarks>
    public Task<PaginatedRefs> GetRepositoriesByWorkspaceByRepoSlugRefs(GetRepositoriesByWorkspaceByRepoSlugRefsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/refs"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedRefs>(),
            GetRepositoriesByWorkspaceByRepoSlugRefsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List open branches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedBranches"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugRefsBranchesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all open branches within the specified repository.
    /// Results will be in the order the source control manager returns them.
    /// <para>
    /// Branches support filtering and sorting
    /// that can be used to search for specific branches. For instance, to find
    /// all branches that have "stab" in their name:
    /// </para>
    /// <code>
    /// curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~ "stab"'
    /// </code>
    /// <para>
    /// By default, results will be in the order the underlying source control system returns them and identical to
    /// the ordering one sees when running "$ git branch --list". Note that this follows simple
    /// lexical ordering of the ref names.
    /// </para>
    /// <para>
    /// This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
    /// sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].
    /// </para>
    /// <para>
    /// Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
    /// Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
    /// </para>
    /// </remarks>
    public Task<PaginatedBranches> GetRepositoriesByWorkspaceByRepoSlugRefsBranches(GetRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/refs/branches"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedBranches>(),
            GetRepositoriesByWorkspaceByRepoSlugRefsBranchesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a branch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Branch"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a branch object within the specified repository.
    /// <para>
    /// This call requires authentication. Private repositories require the
    /// caller to authenticate with an account that has appropriate
    /// authorization.
    /// </para>
    /// <para>
    /// For Git, the branch name should not include any prefixes (e.g.
    /// refs/heads).
    /// </para>
    /// </remarks>
    public Task<Branch> GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByName(GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/refs/branches/{name}"),
            [
                new TemplateParam("name", request.Name),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Branch>(),
            GetRepositoriesByWorkspaceByRepoSlugRefsBranchesByNameError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List tags
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedTags"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugRefsTagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the tags in the repository.
    /// <para>
    /// By default, results will be in the order the underlying source control system returns them and identical to
    /// the ordering one sees when running "$ git tag --list". Note that this follows simple
    /// lexical ordering of the ref names.
    /// </para>
    /// <para>
    /// This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
    /// sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].
    /// </para>
    /// <para>
    /// Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
    /// Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
    /// </para>
    /// </remarks>
    public Task<PaginatedTags> GetRepositoriesByWorkspaceByRepoSlugRefsTags(GetRepositoriesByWorkspaceByRepoSlugRefsTagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/refs/tags"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [new Param("q", request.Q), new Param("sort", request.Sort)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedTags>(),
            GetRepositoriesByWorkspaceByRepoSlugRefsTagsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Tag"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified tag.
    /// <code>
    /// $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
    /// {
    /// "name": "3.8",
    /// "links": {
    /// "commits": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
    /// },
    /// "self": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
    /// },
    /// "html": {
    /// "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
    /// }
    /// },
    /// "tagger": {
    /// "raw": "Matt Mackall ",
    /// "type": "author",
    /// "user": {
    /// "username": "mpmselenic",
    /// "nickname": "mpmselenic",
    /// "display_name": "Matt Mackall",
    /// "type": "user",
    /// "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
    /// "links": {
    /// "self": {
    /// "href": "https://api.bitbucket.org/2.0/users/mpmselenic"
    /// },
    /// "html": {
    /// "href": "https://bitbucket.org/mpmselenic/"
    /// },
    /// "avatar": {
    /// "href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
    /// }
    /// }
    /// }
    /// },
    /// "date": "2016-05-01T18:52:25+00:00",
    /// "message": "Added tag 3.8 for changeset f85de28eae32",
    /// "type": "tag",
    /// "target": {
    /// "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069",
    /// "repository": {
    /// "links": {
    /// "self": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
    /// },
    /// "html": {
    /// "href": "https://bitbucket.org/seanfarley/hg"
    /// },
    /// "avatar": {
    /// "href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
    /// }
    /// },
    /// "type": "repository",
    /// "name": "hg",
    /// "full_name": "seanfarley/hg",
    /// "uuid": "{c75687fb-e99d-4579-9087-190dbd406d30}"
    /// },
    /// "links": {
    /// "self": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
    /// },
    /// "comments": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
    /// },
    /// "patch": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
    /// },
    /// "html": {
    /// "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
    /// },
    /// "diff": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
    /// },
    /// "approve": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
    /// },
    /// "statuses": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
    /// }
    /// },
    /// "author": {
    /// "raw": "Sean Farley ",
    /// "type": "author",
    /// "user": {
    /// "username": "seanfarley",
    /// "nickname": "seanfarley",
    /// "display_name": "Sean Farley",
    /// "type": "user",
    /// "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
    /// "links": {
    /// "self": {
    /// "href": "https://api.bitbucket.org/2.0/users/seanfarley"
    /// },
    /// "html": {
    /// "href": "https://bitbucket.org/seanfarley/"
    /// },
    /// "avatar": {
    /// "href": "https://bitbucket.org/account/seanfarley/avatar/32/"
    /// }
    /// }
    /// }
    /// },
    /// "parents": [
    /// {
    /// "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2",
    /// "type": "commit",
    /// "links": {
    /// "self": {
    /// "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
    /// },
    /// "html": {
    /// "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
    /// }
    /// }
    /// }
    /// ],
    /// "date": "2016-05-01T04:21:17+00:00",
    /// "message": "debian: alphabetize build deps",
    /// "type": "commit"
    /// }
    /// }
    /// </code>
    /// </remarks>
    public Task<Tag> GetRepositoriesByWorkspaceByRepoSlugRefsTagsByName(GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/refs/tags/{name}"),
            [
                new TemplateParam("name", request.Name),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("workspace", request.Workspace),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Tag>(),
            GetRepositoriesByWorkspaceByRepoSlugRefsTagsByNameError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a branch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Branch"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugRefsBranchesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new branch in the specified repository.
    /// <para>
    /// The payload of the POST should consist of a JSON document that
    /// contains the name of the tag and the target hash.
    /// </para>
    /// <code>
    /// curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \
    /// -s -u seanfarley -X POST -H "Content-Type: application/json" \
    /// -d '{
    /// "name" : "smf/create-feature",
    /// "target" : {
    /// "hash" : "default",
    /// }
    /// }'
    /// </code>
    /// <para>
    /// This call requires authentication. Private repositories require the
    /// caller to authenticate with an account that has appropriate
    /// authorization.
    /// </para>
    /// <para>
    /// The branch name should not include any prefixes (e.g.
    /// refs/heads). This endpoint does support using short hash prefixes for
    /// the commit hash, but it may return a 400 response if the provided
    /// prefix is ambiguous. Using a full commit hash is the preferred
    /// approach.
    /// </para>
    /// </remarks>
    public Task<Branch> PostRepositoriesByWorkspaceByRepoSlugRefsBranches(PostRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/refs/branches"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<Branch>(),
            PostRepositoriesByWorkspaceByRepoSlugRefsBranchesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a tag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Tag"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRepositoriesByWorkspaceByRepoSlugRefsTagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new annotated tag in the specified repository.
    /// <para>
    /// The payload of the POST should consist of a JSON document that
    /// contains the name of the tag and the target hash.
    /// </para>
    /// <code>
    /// curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \
    /// -s -u jdoe -X POST -H "Content-Type: application/json" \
    /// -d '{
    /// "name" : "new-tag-name",
    /// "target" : {
    /// "hash" : "a1b2c3d4e5f6",
    /// }
    /// }'
    /// </code>
    /// <para>
    /// This endpoint does support using short hash prefixes for the commit
    /// hash, but it may return a 400 response if the provided prefix is
    /// ambiguous. Using a full commit hash is the preferred approach.
    /// </para>
    /// <para>
    /// A message for the tag object may optionally be provided. If it is
    /// omitted or the provided message is empty, a default message of
    /// "Added tag for changeset " will be used.
    /// </para>
    /// </remarks>
    public Task<Tag> PostRepositoriesByWorkspaceByRepoSlugRefsTags(PostRepositoriesByWorkspaceByRepoSlugRefsTagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/refs/tags"),
            [new TemplateParam("repo_slug", request.RepoSlug), new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Tag>(),
            PostRepositoriesByWorkspaceByRepoSlugRefsTagsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
