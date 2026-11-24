using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fellow.Core;
using Fellow.Core.ErrorResponse;
using Fellow.Core.Exceptions;
using Fellow.Core.Models;
using Fellow.Core.Request;
using Fellow.Core.Response;
using Fellow.Models;
using Fellow.Requests.ActionItems;

namespace Fellow.Api;

/// <summary>
/// Access and manage action items from meetings. Retrieve, list, complete, or archive action items with optional filters and pagination.
/// </summary>
public sealed class ActionItems
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ActionItems(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Archive Action Item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ActionItemResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an action item by marking it as won't do.
    /// </remarks>
    public Task<ActionItemResponse> AppsDeveloperApiApiArchiveActionItem(AppsDeveloperApiApiArchiveActionItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/action_item/{action_item_id}/archive"),
            [new TemplateParam("action_item_id", request.ActionItemId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ActionItemResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Action Item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ActionItemResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve an action item by its ID.
    /// </remarks>
    public Task<ActionItemResponse> AppsDeveloperApiApiGetActionItemById(AppsDeveloperApiApiGetActionItemByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/action_item/{action_item_id}"),
            [new TemplateParam("action_item_id", request.ActionItemId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ActionItemResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Action Items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ActionItemsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List action items with optional filters and pagination.
    /// Privileged access allows you to get action items for the account.
    /// Non-privileged access allows you to get action items for the authenticated user only.
    /// <para>
    /// The <c>scope</c> filter controls which action items are returned:
    /// - (no scope - default): All action items the user has access to
    /// - assigned_to_me: Only action items assigned to the authenticated user
    /// - assigned_to_others: Only action items the user can edit, assigned to teammates
    /// </para>
    /// <para>
    /// The <c>created_at_start</c>, <c>created_at_end</c>, <c>updated_at_start</c> and <c>updated_at_end</c> filters take a
    /// YYYY-MM-DD date or an ISO datetime and are inclusive. A value without a time means midnight UTC, so
    /// pass a time on an end bound (<c>2024-01-05T23:59:59</c>) to cover the whole day. To page through a window
    /// of changes, combine <c>updated_at_start</c> with <c>order_by: updated_at_asc</c>.
    /// </para>
    /// <para>
    /// Whether <c>updated_at</c> moves depends on where the change was made. Edits in the note itself, including
    /// its text, completion, assignees and due date, all bump <c>updated_at</c>. An assignee or due date changed
    /// outside the note, such as from the action items list, is written to a separate record and leaves
    /// <c>updated_at</c> unchanged, so the <c>updated_at</c> filters do not pick that item up.
    /// </para>
    /// </remarks>
    public Task<ActionItemsListResponse> AppsDeveloperApiApiGetActionItems(AppsDeveloperApiApiGetActionItemsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/action_items"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ActionItemsListResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Mark Action Item Complete
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ActionItemResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mark an action item as complete or incomplete.
    /// </remarks>
    public Task<ActionItemResponse> AppsDeveloperApiApiMarkActionItemComplete(AppsDeveloperApiApiMarkActionItemCompleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/action_item/{action_item_id}/complete"),
            [new TemplateParam("action_item_id", request.ActionItemId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ActionItemResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);
}
