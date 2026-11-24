using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.SupportRequests;

namespace DoiT.Api;

/// <summary>
/// Create and manage support tickets with DoiT.
/// </summary>
public sealed class SupportRequests
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SupportRequests(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add tags to a support request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddTicketTagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds one or more tags to an existing support request. The operation is
    /// surgical — only the tags listed in the request are added; existing tags
    /// on the ticket are preserved. Re-adding a tag that is already present is
    /// a successful no-op.
    /// <para>
    /// All submitted tags are normalized (trim + lowercase) before storage. For
    /// customers, the system additionally applies a <c>customer_tag/</c> namespace
    /// prefix to prevent collisions with internal DoiT process tags. The
    /// response echoes the actual stored strings so callers can verify the
    /// transform.
    /// </para>
    /// </remarks>
    public Task<TagsResponse> AddTicketTags(AddTicketTagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/tickets/{ticketId}/tags"),
            [new TemplateParam("ticketId", request.TicketId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TagsResponse>(),
            AddTicketTagsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TicketResponseExtApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTicketError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new support request
    /// </remarks>
    public Task<TicketResponseExtApi> CreateTicket(CreateTicketRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/tickets"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TicketResponseExtApi>(),
            CreateTicketError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add a comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CommentExtApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateTicketCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a comment to an existing support request. For customers and
    /// service-account callers, comments are always public, even when
    /// <c>private</c> is <c>true</c>. Callers authenticated with DoiT employee privileges
    /// can create private internal notes by setting <c>private</c> to <c>true</c>.
    /// The response always includes <c>public</c>, reflecting the effective
    /// visibility after these rules are applied, not merely the requested
    /// privacy. Existing authentication and ticket authorization are unchanged.
    /// </remarks>
    public Task<CommentExtApi> CreateTicketComment(CreateTicketCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/tickets/{ticketId}/comments"),
            [new TemplateParam("ticketId", request.TicketId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CommentExtApi>(),
            CreateTicketCommentError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TicketDetailExtApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTicketError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the details of a single support request by its ID.
    /// </remarks>
    public Task<TicketDetailExtApi> GetTicket(GetTicketRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/tickets/{ticketId}"),
            [new TemplateParam("ticketId", request.TicketId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TicketDetailExtApi>(),
            GetTicketError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List request comments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CommentsResponseExtApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTicketCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all permitted comments on a support request. Customers and
    /// service-account callers receive only public comments; private comment
    /// bodies and attachments are excluded. Callers authenticated with DoiT
    /// employee privileges receive both public and private comments, subject
    /// to existing ticket authorization. Each comment includes <c>public</c>,
    /// sourced from Zendesk: <c>true</c> means public and <c>false</c> means private
    /// (internal). Missing visibility in legacy responses or snapshots means
    /// unknown, not private. All comments are returned in a single response
    /// (no pagination).
    /// </remarks>
    public Task<CommentsResponseExtApi> ListTicketComments(ListTicketCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/tickets/{ticketId}/comments"),
            [new TemplateParam("ticketId", request.TicketId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CommentsResponseExtApi>(),
            ListTicketCommentsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List tags on a support request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTicketTagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the tags currently set on a support request.
    /// <para>
    /// DoiT employee (doer) callers receive the full tag set verbatim,
    /// including internal namespaces (e.g. <c>tier/*</c>, <c>synapse_*</c>). Customer
    /// callers receive only tags under the <c>customer_tag/</c> namespace, with
    /// that prefix stripped (e.g. a tag added as <c>billing</c> reads back as
    /// <c>billing</c>). Always present; empty array when the caller has no visible
    /// tags.
    /// </para>
    /// </remarks>
    public Task<TagsGetResponse> ListTicketTags(ListTicketTagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/tickets/{ticketId}/tags"),
            [new TemplateParam("ticketId", request.TicketId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TagsGetResponse>(),
            ListTicketTagsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List requests
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TicketsList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTicketsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all historical requests that your account has access to.
    /// Tickets are returned in reverse chronological order by default.
    /// </remarks>
    public Task<TicketsList> ListTickets(ListTicketsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/tickets"),
            [],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("filter", request.Filter),
                new Param("minCreationTime", request.MinCreationTime),
                new Param("maxCreationTime", request.MaxCreationTime),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TicketsList>(),
            ListTicketsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove tags from a support request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TagsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveTicketTagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes one or more tags from an existing support request. The operation
    /// is surgical — only the tags listed in the request are removed; tags not
    /// listed are preserved. Removing a tag that is not present is a successful
    /// no-op.
    /// <para>
    /// For customers, the system applies the same <c>customer_tag/</c> namespace
    /// mapping as on add, so a customer who added <c>my_tag</c> (stored as
    /// <c>customer_tag/my_tag</c>) can remove it by sending <c>my_tag</c>.
    /// </para>
    /// </remarks>
    public Task<TagsResponse> RemoveTicketTags(RemoveTicketTagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/tickets/{ticketId}/tags"),
            [new TemplateParam("ticketId", request.TicketId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TagsResponse>(),
            RemoveTicketTagsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SupportV1TicketsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateTicketError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially updates a support request. Supports setting the request
    /// <c>status</c> and/or <c>assignee</c>. DoiT employees may set any of <c>open</c>,
    /// <c>pending</c>, <c>hold</c>, or <c>solved</c> and may set the <c>assignee</c>; customers may
    /// set only <c>solved</c> (parity with the console "mark as resolved" action)
    /// and may not set an assignee. <c>closed</c> is not settable via the API
    /// (Zendesk auto-closes from <c>solved</c>). The <c>assignee</c> is a DoiT-employee
    /// email, resolved server-side to a Zendesk agent; an email that does not
    /// resolve to an active agent returns <c>400</c>. At least one mutable field
    /// must be present. The response echoes the fields that were applied.
    /// </remarks>
    public Task<SupportV1TicketsResponse> UpdateTicket(UpdateTicketRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/tickets/{ticketId}"),
            [new TemplateParam("ticketId", request.TicketId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SupportV1TicketsResponse>(),
            UpdateTicketError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
