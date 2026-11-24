using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Deliverd.Core;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Exceptions;
using Deliverd.Core.Models;
using Deliverd.Core.Request;
using Deliverd.Core.Response;
using Deliverd.Errors;
using Deliverd.Models;
using Deliverd.Requests.Reports;

namespace Deliverd.Api;

public sealed class Reports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Reports(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retract a comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsCommentsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Take back a comment this credential posted. Your own last comment in a thread, while the thread is open: once somebody has replied it stays, so their reply is never left answering something no longer on the page. Retracting the only comment in a thread takes the thread and its highlight with it, and removes any images attached to the comment. It unsends nothing — the report's owner may have been emailed when it was posted. <c>commentId</c> comes from the <c>POST</c> above or from <c>GET /reports/{idOrSlug}/comments</c>, which marks the one message this credential can still take back.
    /// </remarks>
    public Task<ApiV1ReportsCommentsResponse2> DeleteApiV1ReportsByIdOrSlugCommentsByCommentId(DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/comments/{commentId}"),
            [new TemplateParam("idOrSlug", request.IdOrSlug), new TemplateParam("commentId", request.CommentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ReportsCommentsResponse2>(),
            DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task DeleteApiV1ReportsByIdOrSlugDataByName(DeleteApiV1ReportsByIdOrSlugDataByNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/data/{name}"),
            [new TemplateParam("idOrSlug", request.IdOrSlug), new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Revoke audience access
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsShareResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Take access away from the same audience phrase that granted it. By audience rather than by grant id because that is all a caller has: the audience on <c>GET /reports/{idOrSlug}</c> carries each grant's *principal* id, never the grant row's. The owner's access cannot be revoked, and an audience that never had access is a refusal rather than a no-op — a caller told "revoked" for a grant that was not there would report the door shut while it is open.
    /// </remarks>
    public Task<ApiV1ReportsShareResponse1> DeleteApiV1ReportsByIdOrSlugShare(DeleteApiV1ReportsByIdOrSlugShareRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/share"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsShareResponse1>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List reports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1ReportsResponse> GetApiV1Reports(GetApiV1ReportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports"),
            [],
            [new Param("q", request.Q), new Param("limit", request.Limit), new Param("cursor", request.Cursor)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ReportsResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsResponse4"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1ReportsResponse4> GetApiV1ReportsByIdOrSlug(GetApiV1ReportsByIdOrSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ReportsResponse4>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Who read a report, and when
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsAnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ReportsByIdOrSlugAnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The same figures the report page shows. Total views are on every plan; unique, internal and external viewers, the 30-day series, per-version views and recent readers need the analytics entitlement and come back null or empty without it. Reader names appear only when the organisation's sharing policy shows viewer identities.
    /// </remarks>
    public Task<ApiV1ReportsAnalyticsResponse> GetApiV1ReportsByIdOrSlugAnalytics(GetApiV1ReportsByIdOrSlugAnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/analytics"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ReportsAnalyticsResponse>(),
            GetApiV1ReportsByIdOrSlugAnalyticsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List comments on a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsCommentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Threads with the quoted passage and a plain-text excerpt of the surrounding content in the *current* version, so a client can find what to change without fetching the file. <c>anchorStatus</c> says whether the commented text still exists: <c>anchored</c> and <c>shifted</c> mean it does; <c>stale</c> means it was edited away, and the excerpt then comes from the version the comment was written against.
    /// </remarks>
    public Task<ApiV1ReportsCommentsResponse> GetApiV1ReportsByIdOrSlugComments(GetApiV1ReportsByIdOrSlugCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/comments"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [
                new Param("status", request.Status),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ReportsCommentsResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a report's datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsDataResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1ReportsDataResponse> GetApiV1ReportsByIdOrSlugData(GetApiV1ReportsByIdOrSlugDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/data"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ReportsDataResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The report as an evidence pack
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ReportsByIdOrSlugEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The whole record of one piece of work: every approval, review and request for information with who was asked and what they said, the report's version history, and the timeline across all of it. Requires reports:read, approvals:read, reviews:read and collections:read — the pack contains everything, so it takes every scope that reads any of it. ?format=csv returns the timeline alone as a spreadsheet; the JSON is the whole record. Every export is audited as evidence.exported, with the pack's digest, so the trail records which copy was taken. For a report the steps are the approvals, reviews and requests that point at it, which is the subject an auditor usually names and works for work done before flows existed.
    /// </remarks>
    public Task<IReadOnlyDictionary<string, object>> GetApiV1ReportsByIdOrSlugEvidence(GetApiV1ReportsByIdOrSlugEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/evidence"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyDictionary<string, object>>(),
            GetApiV1ReportsByIdOrSlugEvidenceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsVersionsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<ApiV1ReportsVersionsResponse2> GetApiV1ReportsByIdOrSlugVersions(GetApiV1ReportsByIdOrSlugVersionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/versions"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [new Param("limit", request.Limit), new Param("cursor", request.Cursor)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ReportsVersionsResponse2>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rename a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Change the title, the address, or both. Changing the address keeps the old one: it permanently redirects to the new URL, so links already shared keep working. <c>previousSlug</c> names the address that was kept, or null when only the title changed.
    /// </remarks>
    public Task<ApiV1ReportsResponse3> PatchApiV1ReportsByIdOrSlug(PatchApiV1ReportsByIdOrSlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsResponse3>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publish from an uploadId, inline HTML content, or inline files. Creates the report on first publish; new versions after that. <c>taskId</c> keeps the report with a Task Graph task: it is listed on the task and returned in the task's context. A later publish naming another task moves it there, and one naming none leaves it where it is. Naming a task needs <c>tasks:read</c> on the key and the Tasks plan feature (<c>402 feature_unavailable</c> without it).
    /// </remarks>
    public Task<ApiV1ReportsResponse1> PostApiV1Reports(PostApiV1ReportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsResponse1>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive a report, or put it back
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsArchiveResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archiving stops the URL serving: a reader following a link they already hold is told the report is no longer available. Nothing is deleted and the audience is kept, so <c>{"archived": false}</c> restores it exactly as it was. The body is optional and defaults to archiving.
    /// </remarks>
    public Task<ApiV1ReportsArchiveResponse> PostApiV1ReportsByIdOrSlugArchive(PostApiV1ReportsByIdOrSlugArchiveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/archive"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsArchiveResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Comment on a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsCommentsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ReportsByIdOrSlugCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Omit <c>quote</c> for a comment about the report as a whole. Include it and the comment attaches to that passage and highlights it, the way a reader's selection does. The quote must occur exactly once in the current version; otherwise the request is refused rather than placed on a guess.
    /// </remarks>
    public Task<ApiV1ReportsCommentsResponse1> PostApiV1ReportsByIdOrSlugComments(PostApiV1ReportsByIdOrSlugCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/comments"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsCommentsResponse1>(),
            PostApiV1ReportsByIdOrSlugCommentsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Copy a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsCopyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ReportsByIdOrSlugCopyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Duplicate a report's current version into a new report you own — the primitive behind duplicating a report and behind using one as a template. The copy carries the content, the classification and any datasets; it carries <b>no</b> audience, comments or share links, and starts private to you. Requires that you can already read the source and may publish. Agent keys are refused: a copy lands outside an agent's allow-list.
    /// </remarks>
    public Task<ApiV1ReportsCopyResponse> PostApiV1ReportsByIdOrSlugCopy(PostApiV1ReportsByIdOrSlugCopyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/copy"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsCopyResponse>(),
            PostApiV1ReportsByIdOrSlugCopyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Compose the open feedback into a revision brief
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsRevisionBriefsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ReportsByIdOrSlugRevisionBriefsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One prompt an agent can revise the report from: each open thread's quoted passage, the surrounding text in the current version, the conversation, and signed links to the images readers attached, ending with how to publish the next version and close each thread. Composing a brief is recorded on the report. Pass <c>threadIds</c> to include only some open threads.
    /// </remarks>
    public Task<ApiV1ReportsRevisionBriefsResponse> PostApiV1ReportsByIdOrSlugRevisionBriefs(PostApiV1ReportsByIdOrSlugRevisionBriefsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/revision-briefs"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsRevisionBriefsResponse>(),
            PostApiV1ReportsByIdOrSlugRevisionBriefsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Roll back to an earlier version
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsRollbackResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ReportsByIdOrSlugRollbackError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Serve an earlier version again at the same URL. Name it by number — the <c>currentVersion</c> and <c>latestVersion</c> every other endpoint returns — or by <c>versionId</c> from the versions list. Nothing is deleted: roll forward the same way.
    /// <para>
    /// Datasets are not versioned, so a rollback restores the markup and not the numbers it renders.
    /// </para>
    /// </remarks>
    public Task<ApiV1ReportsRollbackResponse> PostApiV1ReportsByIdOrSlugRollback(PostApiV1ReportsByIdOrSlugRollbackRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/rollback"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsRollbackResponse>(),
            PostApiV1ReportsByIdOrSlugRollbackError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Email a report to a list of addresses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsSendResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ReportsByIdOrSlugSendError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Distinct from <c>POST …/share</c>, which grants access to people the organisation already knows. This takes bare email addresses, creates the guest records behind them, grants access and emails each recipient a link with the sender's covering note.
    /// <para>
    /// <b>Not a mailing list.</b> Each recipient gets their own link tied to their own guest record, which is what makes the audit trail and the per-reader analytics mean anything — and why the list is capped at 50. The link keeps working as the report is updated, so there is no new file to send next time.
    /// </para>
    /// <para>
    /// Governed by everything a share is, because it grants through the same function: the <c>share_external</c> publishing policy — which the seeded confidential-and-restricted rule denies outright — the agent's own allow-list, the expiry clamp, the audit trail and the <c>report.shared</c> webhook. A recipient who already had access is emailed again rather than skipped: re-sending to somebody who says they never got it is the point.
    /// </para>
    /// </remarks>
    public Task<ApiV1ReportsSendResponse> PostApiV1ReportsByIdOrSlugSend(PostApiV1ReportsByIdOrSlugSendRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/send"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsSendResponse>(),
            PostApiV1ReportsByIdOrSlugSendError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Grant audience access
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsShareResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// <c>capability</c> is what the audience may do: <c>view</c> (the default) or <c>comment</c>. A grant that already exists is only ever raised, never lowered, by granting again.
    /// </remarks>
    public Task<ApiV1ReportsShareResponse> PostApiV1ReportsByIdOrSlugShare(PostApiV1ReportsByIdOrSlugShareRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/share"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsShareResponse>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish a new version (update a living report)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsVersionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ReportsByIdOrSlugVersionsError"/> when the server returns an error response.</exception>
    public Task<ApiV1ReportsVersionsResponse> PostApiV1ReportsByIdOrSlugVersions(PostApiV1ReportsByIdOrSlugVersionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/versions"),
            [new TemplateParam("idOrSlug", request.IdOrSlug)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsVersionsResponse>(),
            PostApiV1ReportsByIdOrSlugVersionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a report's live data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportsDataResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutApiV1ReportsByIdOrSlugDataByNameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Data the published report fetches at view time, so a dashboard can show current numbers without republishing. The body is JSON, stored verbatim, up to 5 MB. Served behind the same access check as the report and never edge-cached.
    /// <para>
    /// <b>A dataset is mutable and a version is not.</b> Rolling the report back does not roll the data back — the earlier markup renders today's numbers.
    /// </para>
    /// </remarks>
    public Task<ApiV1ReportsDataResponse1> PutApiV1ReportsByIdOrSlugDataByName(PutApiV1ReportsByIdOrSlugDataByNameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reports/{idOrSlug}/data/{name}"),
            [new TemplateParam("idOrSlug", request.IdOrSlug), new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportsDataResponse1>(),
            PutApiV1ReportsByIdOrSlugDataByNameError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
