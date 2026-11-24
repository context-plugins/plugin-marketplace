using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FacebookBusinessManager.Core;
using FacebookBusinessManager.Core.Exceptions;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Request;
using FacebookBusinessManager.Core.Response;
using FacebookBusinessManager.Errors;
using FacebookBusinessManager.Models;
using FacebookBusinessManager.Requests.Posts;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Create, read, update, and delete posts on a Facebook Page feed.
/// </summary>
public sealed class Posts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Posts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Create a page post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePagePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publishes a new post to the Facebook Page feed. Supports text posts, link shares, and scheduled posts. Requires a page access token with pages_manage_posts permission.
    /// </remarks>
    public Task<CreateResponse> CreatePagePost(CreatePagePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{page_id}/feed"),
            [new TemplateParam("page_id", request.PageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResponse>(),
            CreatePagePostError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Delete a post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a post from the Facebook Page. This action cannot be undone.
    /// </remarks>
    public Task<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi> DeletePost(DeletePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{post_id}"),
            [new TemplateParam("post_id", request.PostId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi>(),
            DeletePostError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Get page feed
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPageFeedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the feed of posts on a Facebook Page. Includes posts published by the page and posts by visitors if allowed.
    /// </remarks>
    public Task<PostList> GetPageFeed(GetPageFeedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{page_id}/feed"),
            [new TemplateParam("page_id", request.PageId)],
            [new Param("fields", request.Fields), new Param("limit", request.Limit), new Param("after", request.After)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PostList>(),
            GetPageFeedError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Get a post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Post"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the details of a specific post including message, attachments, reactions, and engagement counts.
    /// </remarks>
    public Task<Post> GetPost(GetPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{post_id}"),
            [new TemplateParam("post_id", request.PostId)],
            [new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Post>(),
            GetPostError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Update a post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing post on the Page. Only the message field can be updated after publishing.
    /// </remarks>
    public Task<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi> UpdatePost(UpdatePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{post_id}"),
            [new TemplateParam("post_id", request.PostId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi>(),
            UpdatePostError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
