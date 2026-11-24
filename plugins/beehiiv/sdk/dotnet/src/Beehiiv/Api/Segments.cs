using System;
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
using Beehiiv.Requests.Segments;

namespace Beehiiv.Api;

public sealed class Segments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Segments(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create segment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SegmentShowResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create9Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new segment.
    /// <para>
    /// <b>Manual segments</b> — Use <c>subscriptions</c> or <c>emails</c> input to create a segment from an explicit list of subscription IDs or email addresses. The segment is processed synchronously and returns with <c>status: completed</c>. Net new email addresses will be ignored; create subscriptions using the <c>Create Subscription</c> endpoint.
    /// </para>
    /// <para>
    /// <b>Dynamic segments</b> — Use <c>custom_fields</c> input to create a segment that filters subscribers by custom field values. The segment is processed asynchronously and returns with <c>status: pending</c>. Results will be available in the <c>List Segment Subscribers</c> endpoint after processing is complete.
    /// </para>
    /// </remarks>
    public Task<SegmentShowResponse> Create9(Create9Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/segments"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SegmentShowResponse>(),
            Create9Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete segment OAuth Scope: segments:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SegmentDeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Delete4Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a segment. Deleting the segment does not effect the subscriptions in the segment.
    /// </remarks>
    public Task<SegmentDeleteResponse> Delete4(Delete4Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/segments/{segmentId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("segmentId", request.SegmentId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SegmentDeleteResponse>(),
            Delete4Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List segment subscriber IDs OAuth Scope: segments:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SegmentsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExpandResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List subscriber IDs for a segment. Returns a lightweight array of subscription IDs only, without additional subscriber details.
    /// <b>Use this endpoint when you only need subscriber IDs</b> (e.g., for counting, ID-based lookups, or integrations with external systems). If you need full subscriber details (email, status, custom fields, etc.), use <c>/segments/{segmentId}/members</c> instead.
    /// </remarks>
    public Task<SegmentsGetResponse> ExpandResults(ExpandResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/segments/{segmentId}/results"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("segmentId", request.SegmentId),
            ],
            [new Param("limit", request.Limit), new Param("page", request.Page)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SegmentsGetResponse>(),
            ExpandResultsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List segments OAuth Scope: segments:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SegmentsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index19Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve information about all segments belonging to a specific publication
    /// </remarks>
    public Task<SegmentsListResponse> Index19(Index19Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/segments"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("type", request.Type),
                new Param("status", request.Status),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
                new Param("order_by", request.OrderBy),
                new Param("direction", request.Direction),
                new Param("expand[]", request.Expand),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SegmentsListResponse>(),
            Index19Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List segment subscribers OAuth Scope: segments:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SegmentMembersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMembersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all members in a segment with full subscription data. Each member is returned as a subscription object containing complete subscriber information and their subscription details. Supports optional expansions for stats, custom fields, tags, referrals, and premium tiers.
    /// <b>Use this endpoint when you need detailed subscriber information.</b> If you only need subscriber IDs, use <c>/segments/{segmentId}/results</c> for a lighter-weight response.
    /// </remarks>
    public Task<SegmentMembersResponse> ListMembers(ListMembersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/segments/{segmentId}/members"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("segmentId", request.SegmentId),
            ],
            [new Param("limit", request.Limit), new Param("page", request.Page), new Param("expand[]", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SegmentMembersResponse>(),
            ListMembersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Recalculate segment OAuth Scope: segments:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SegmentRecalculateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecalculateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recalculates a specific segment belonging to a publication
    /// </remarks>
    public Task<SegmentRecalculateResponse> Recalculate(RecalculateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/segments/{segmentId}/recalculate"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("segmentId", request.SegmentId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<SegmentRecalculateResponse>(),
            RecalculateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get segment OAuth Scope: segments:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SegmentShowResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show15Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve information about a specific segment belonging to a publication
    /// </remarks>
    public Task<SegmentShowResponse> Show15(Show15Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/segments/{segmentId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("segmentId", request.SegmentId),
            ],
            [new Param("expand[]", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SegmentShowResponse>(),
            Show15Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
