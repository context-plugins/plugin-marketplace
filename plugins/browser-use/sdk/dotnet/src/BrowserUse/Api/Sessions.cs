using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BrowserUse.Core;
using BrowserUse.Core.Exceptions;
using BrowserUse.Core.Models;
using BrowserUse.Core.Request;
using BrowserUse.Core.Response;
using BrowserUse.Errors;
using BrowserUse.Models;
using BrowserUse.Models.AnyOf;
using BrowserUse.Requests.Sessions;

namespace BrowserUse.Api;

public sealed class Sessions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Sessions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel Queued Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueuedMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a still-pending queued message; 409 once the drain has claimed it.
    /// </remarks>
    public Task<QueuedMessage> CancelQueuedMessageSessionsSessionIdQueueMessageIdDelete(CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}/queue/{message_id}"),
            [new TemplateParam("session_id", request.SessionId), new TemplateParam("message_id", request.MessageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<QueuedMessage>(),
            CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Session Share
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionShareInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSessionShareSessionsSessionIdSharePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enable sharing: reactivates the session's existing share (stable token,
    /// so a link that was toggled off keeps working when re-enabled) or creates
    /// one on first use.
    /// </remarks>
    public Task<SessionShareInfo> CreateSessionShareSessionsSessionIdSharePost(CreateSessionShareSessionsSessionIdSharePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}/share"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<SessionShareInfo>(),
            CreateSessionShareSessionsSessionIdSharePostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSessionSessionsSessionIdDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a session: it disappears from the session lists and can no longer
    /// be opened or continued.
    /// <para>
    /// Soft delete (mirrors V2's <c>is_archived</c>): the runs, events and usage records
    /// stay in place so billing and analytics keep reconciling, and ZDR purge is the
    /// only thing that ever destroys V4 content. Idempotent — deleting twice is a
    /// no-op 204.
    /// </para>
    /// <para>
    /// An in-flight run is cancelled first, and pending queued messages are
    /// cancelled too; otherwise the drain would dispatch a follow-up run whose
    /// <c>session_archived_at</c> is NULL and resurrect the session. Cancel is forwarded
    /// to CP before anything is written (and outside the queue lock, per the
    /// enqueue path's ordering), so a CP failure (502) leaves the session visible
    /// rather than hiding a run that is still burning credits.
    /// </para>
    /// </remarks>
    public Task DeleteSessionSessionsSessionIdDelete(DeleteSessionSessionsSessionIdDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSessionSessionsSessionIdDeleteError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Session Cost
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionCostResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSessionCostSessionsSessionIdCostGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Everything this session has cost so far, split by source.
    /// <para>
    /// A run's <c>total_cost_usd</c> is its LLM (and web-search) charge only. Browser
    /// time and proxy bandwidth are metered against the session's browser, which
    /// outlives any one run — so this is the endpoint for the session's full cost.
    /// </para>
    /// <para>
    /// These are recorded usage costs, not an invoice total: promotional waivers
    /// and credits are applied downstream in billing, so a session run under a
    /// promotion can report cost here that was never charged.
    /// </para>
    /// <para>
    /// Costs keep moving after a run reports <c>finished</c>: LLM calls settle up to
    /// about 90 seconds later, and the browser accrues time and proxy traffic
    /// until it stops.
    /// </para>
    /// </remarks>
    public Task<SessionCostResponse> GetSessionCostSessionsSessionIdCostGet(GetSessionCostSessionsSessionIdCostGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}/cost"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SessionCostResponse>(),
            GetSessionCostSessionsSessionIdCostGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Session Queue Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueuedMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Read one queued message including terminal handoff states.
    /// </remarks>
    public Task<QueuedMessage> GetSessionQueueMessageSessionsSessionIdQueueMessageIdGet(GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}/queue/{message_id}"),
            [new TemplateParam("session_id", request.SessionId), new TemplateParam("message_id", request.MessageId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QueuedMessage>(),
            GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSessionSessionsSessionIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Session detail — the same slim shape as one GET /sessions row (its
    /// latest run). Doubles as the busy/idle poll for a conversation (POLL rate
    /// bucket): slim columns only, indexed public_session_id lookup, never the
    /// heavy result/token fields.
    /// </remarks>
    public Task<SessionInfo> GetSessionSessionsSessionIdGet(GetSessionSessionsSessionIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SessionInfo>(),
            GetSessionSessionsSessionIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Session Share
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResponseGetSessionShareSessionsSessionIdShareGet"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSessionShareSessionsSessionIdShareGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The session's share link (active or not); null if never shared.
    /// </remarks>
    public Task<ResponseGetSessionShareSessionsSessionIdShareGet> GetSessionShareSessionsSessionIdShareGet(GetSessionShareSessionsSessionIdShareGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}/share"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ResponseGetSessionShareSessionsSessionIdShareGet>(),
            GetSessionShareSessionsSessionIdShareGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Session Queue
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueueListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSessionQueueSessionsSessionIdQueueGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List open messages, recently delivered queued messages, and steering cutoffs.
    /// <para>
    /// Includes live dispatch claims so clients can restore an accepted queued
    /// message after a refresh without briefly losing its waiting state.
    /// </para>
    /// <para>
    /// Consumed QUEUE rows are returned too, capped at the most recent
    /// _DELIVERED_QUEUE_HISTORY, plus up to _AGENCY_DELIVERED_QUEUE_HISTORY compact
    /// Agency choice and generation receipts so inbox state survives refresh. A message absorbed mid-run is announced by a
    /// <c>queued_input_injected</c> event carrying only its input id, so the chat has no
    /// other source for the text to render. The cap bounds this response because
    /// clients poll it while a run is active; a session with more delivered
    /// follow-ups than the cap renders its oldest injected bubbles without text.
    /// </para>
    /// <para>
    /// The latest consumed interrupt bridges the primary-write/read-replica gap
    /// before its replacement run appears; clients discard it once that run is
    /// visible. Compact per-source cutoffs preserve every historical interrupted
    /// transcript boundary without returning every historical steering message and
    /// its attachments.
    /// </para>
    /// </remarks>
    public Task<QueueListResponse> ListSessionQueueSessionsSessionIdQueueGet(ListSessionQueueSessionsSessionIdQueueGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}/queue"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QueueListResponse>(),
            ListSessionQueueSessionsSessionIdQueueGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSessionsSessionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the project's V4 sessions — one row per session (its most recent
    /// run), most-recent first.
    /// <para>
    /// A session is a conversation: follow-up runs reuse the same
    /// public_session_id, so GET /api/v4/runs would list one row per RUN. This
    /// collapses to one row per SESSION directly in Postgres with DISTINCT ON, so a
    /// chatty session with 100 runs is still a single row (no scan amplification),
    /// and selects only the slim columns the session list needs — never the heavy
    /// per-run text/token/cost fields.
    /// </para>
    /// <para>
    /// Keyset-paginated on the latest run's (created_at, id): pass <c>next_cursor</c>
    /// back as <c>cursor</c> to page. Offset/COUNT was dropped — it doesn't scale on
    /// projects with many sessions.
    /// </para>
    /// </remarks>
    public Task<SessionListResponse> ListSessionsSessionsGet(ListSessionsSessionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions"),
            [],
            [new Param("limit", request.Limit), new Param("cursor", request.Cursor)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SessionListResponse>(),
            ListSessionsSessionsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Purge Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PurgeSessionSessionsSessionIdPurgePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Purge V4 session data; return 202 while active work or uploads defer deletion.
    /// <para>
    /// Redacts DB records and deletes S3 objects (bcode state, workspace files,
    /// recordings, downloads, staging uploads) for every run in the session. Same
    /// cleanup the ZDR cron performs, but on-demand; outstanding upload grants defer physical deletion. V4
    /// analog of the V2 POST /sessions/{id}/purge. Surfaces shared with a still-live
    /// sibling run are deferred by the same guards the cron uses.
    /// </para>
    /// </remarks>
    public Task PurgeSessionSessionsSessionIdPurgePost(PurgeSessionSessionsSessionIdPurgePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}/purge"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            PurgeSessionSessionsSessionIdPurgePostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Queue Session Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueuedMessage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueueSessionMessageSessionsSessionIdQueuePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a message to a session. If the session is busy it waits on the queue
    /// and runs as the next turn; if idle it drains immediately.
    /// <para>
    /// <c>interrupt=true</c> cancels the session's active run so this message takes effect
    /// now instead of waiting for the current turn (no-op when the session is idle).
    /// </para>
    /// </remarks>
    public Task<QueuedMessage> QueueSessionMessageSessionsSessionIdQueuePost(QueueSessionMessageSessionsSessionIdQueuePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}/queue"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [
                new HeaderParam("X-V4-Queue-Deduplicate", request.XV4QueueDeduplicate),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QueuedMessage>(),
            QueueSessionMessageSessionsSessionIdQueuePostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Session Cost Cap
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionCostCapResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSessionCostCapSessionsSessionIdCostCapPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the active run cap without starting another run.
    /// </remarks>
    public Task<SessionCostCapResponse> UpdateSessionCostCapSessionsSessionIdCostCapPatch(UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}/cost-cap"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SessionCostCapResponse>(),
            UpdateSessionCostCapSessionsSessionIdCostCapPatchError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSessionSessionsSessionIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Rename a session.
    /// <para>
    /// <c>session_title</c> is denormalized onto every run in the session (the session
    /// list reads the latest run), so a rename writes them all in one UPDATE. Null
    /// clears the name and the UI falls back to the opening task — it does NOT
    /// re-run title generation, which only fills rows where the title IS NULL and
    /// so would silently overwrite the clear.
    /// </para>
    /// </remarks>
    public Task<SessionInfo> UpdateSessionSessionsSessionIdPatch(UpdateSessionSessionsSessionIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SessionInfo>(),
            UpdateSessionSessionsSessionIdPatchError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Session Share
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionShareInfo"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSessionShareSessionsSessionIdSharePutError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Toggle the session's share link on/off.
    /// </remarks>
    public Task<SessionShareInfo> UpdateSessionShareSessionsSessionIdSharePut(UpdateSessionShareSessionsSessionIdSharePutRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sessions/{session_id}/share"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SessionShareInfo>(),
            UpdateSessionShareSessionsSessionIdSharePutError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
