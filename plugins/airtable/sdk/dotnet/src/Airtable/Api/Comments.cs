using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Airtable.Core;
using Airtable.Core.Exceptions;
using Airtable.Core.Models;
using Airtable.Core.Request;
using Airtable.Core.Response;
using Airtable.Errors;
using Airtable.Models;
using Airtable.Requests.Comments;

namespace Airtable.Api;

/// <summary>
/// Manage comments on individual records
/// </summary>
public sealed class Comments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Comments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Airtable Create a Comment on a Record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Comment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new comment on the specified record. Comments can include user mentions using the @[usrXXXXXXXX] syntax. Requires OAuth authentication with the comment:write scope.
    /// </remarks>
    public Task<Comment> CreateComment(CreateCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{baseId}/{tableIdOrName}/{recordId}/comments"),
            [
                new TemplateParam("baseId", request.BaseId),
                new TemplateParam("tableIdOrName", request.TableIdOrName),
                new TemplateParam("recordId", request.RecordId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Comment>(),
            CreateCommentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Delete a Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecordIdCommentsCommentIdResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a comment from a record. Only the author of the comment can delete it.
    /// </remarks>
    public Task<RecordIdCommentsCommentIdResponse> DeleteComment(DeleteCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}"),
            [
                new TemplateParam("baseId", request.BaseId),
                new TemplateParam("tableIdOrName", request.TableIdOrName),
                new TemplateParam("recordId", request.RecordId),
                new TemplateParam("commentId", request.CommentId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<RecordIdCommentsCommentIdResponse>(),
            DeleteCommentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable List Comments on a Record
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CommentList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of comments on the specified record. Comments are returned in reverse chronological order.
    /// </remarks>
    public Task<CommentList> ListComments(ListCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{baseId}/{tableIdOrName}/{recordId}/comments"),
            [
                new TemplateParam("baseId", request.BaseId),
                new TemplateParam("tableIdOrName", request.TableIdOrName),
                new TemplateParam("recordId", request.RecordId),
            ],
            [new Param("offset", request.Offset), new Param("pageSize", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CommentList>(),
            ListCommentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airtable Update a Comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Comment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the text of an existing comment on a record. Only the author of the comment can update it.
    /// </remarks>
    public Task<Comment> UpdateComment(UpdateCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{baseId}/{tableIdOrName}/{recordId}/comments/{commentId}"),
            [
                new TemplateParam("baseId", request.BaseId),
                new TemplateParam("tableIdOrName", request.TableIdOrName),
                new TemplateParam("recordId", request.RecordId),
                new TemplateParam("commentId", request.CommentId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Comment>(),
            UpdateCommentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
