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
using FacebookBusinessManager.Requests.CommentsApi;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Manage comments on Page posts including reading, replying, and moderating.
/// </summary>
public sealed class CommentsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CommentsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Create a comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Posts a comment on a Page post as the Page. Requires a page access token with pages_manage_engagement permission.
    /// </remarks>
    public Task<CreateResponse> CreateComment(CreateCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{post_id}/comments"),
            [new TemplateParam("post_id", request.PostId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResponse>(),
            CreateCommentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Delete a comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a comment from a Page post. The Page must own the comment or the post the comment is on.
    /// </remarks>
    public Task<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi> DeleteComment(DeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{comment_id}"),
            [new TemplateParam("comment_id", request.CommentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi>(),
            DeleteCommentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Get post comments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CommentList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPostCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves comments on a specific post. Supports pagination and filtering by order.
    /// </remarks>
    public Task<CommentList> GetPostComments(GetPostCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{post_id}/comments"),
            [new TemplateParam("post_id", request.PostId)],
            [
                new Param("fields", request.Fields),
                new Param("limit", request.Limit),
                new Param("after", request.After),
                new Param("filter", request.Filter),
                new Param("order", request.Order),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CommentList>(),
            GetPostCommentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
