using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models;
using Hightouch.Models.AnyOf;
using Hightouch.Requests.Syncs;

namespace Hightouch.Api;

public sealed class Syncs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Syncs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Approve Sync Draft
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncDraft"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApproveSyncDraftError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Approve a sync draft and apply its change. Fails with 409 and applies
    /// nothing when the draft or the sync changed after the versions you send.
    /// </remarks>
    public Task<SyncDraft> ApproveSyncDraft(ApproveSyncDraftRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/{syncId}/drafts/{draftId}/approve"),
            [new TemplateParam("syncId", request.SyncId), new TemplateParam("draftId", request.DraftId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SyncDraft>(),
            ApproveSyncDraftError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Sync
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSyncError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new sync
    /// <para>
    /// A sync either owns its configuration (<c>destinationId</c> and
    /// <c>configuration</c>) or is created from a sync template (<c>syncTemplateId</c>).
    /// A sync created from a template uses the template's destination and
    /// configuration, and may set the fields the template's <c>overrideConfig</c>
    /// marks as overridable through <c>syncTemplateOverrides</c>. The effective
    /// configuration is validated for the destination either way, and
    /// <c>configuration.</c> errors on a template sync refer to that merged
    /// configuration.
    /// </para>
    /// </remarks>
    public Task<SyncsResponse1> CreateSync(CreateSyncRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SyncsResponse1>(),
            CreateSyncError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Sync
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncsResponse11"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSyncError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a sync
    /// </remarks>
    public Task<SyncsResponse11> DeleteSync(DeleteSyncRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/{syncId}"),
            [new TemplateParam("syncId", request.SyncId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<SyncsResponse11>(),
            DeleteSyncError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Sync
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Sync"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSyncError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve sync from sync ID
    /// </remarks>
    public Task<Sync> GetSync(GetSyncRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/{syncId}"),
            [new TemplateParam("syncId", request.SyncId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Sync>(),
            GetSyncError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Sync Draft
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncDraftDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSyncDraftError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a sync draft with the sync as it is now and as approval would
    /// leave it. Send its <c>draftVersion</c> and <c>resourceVersion</c> to approve it.
    /// </remarks>
    public Task<SyncDraftDetail> GetSyncDraft(GetSyncDraftRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/{syncId}/drafts/{draftId}"),
            [new TemplateParam("syncId", request.SyncId), new TemplateParam("draftId", request.DraftId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SyncDraftDetail>(),
            GetSyncDraftError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Drafts for a Sync
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncDraftList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDraftsForSyncError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List one sync's drafts, oldest change first.
    /// </remarks>
    public Task<SyncDraftList> ListDraftsForSync(ListDraftsForSyncRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/{syncId}/drafts"),
            [new TemplateParam("syncId", request.SyncId)],
            [
                new Param("status", request.Status),
                new Param("updatedSince", request.UpdatedSince?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SyncDraftList>(),
            ListDraftsForSyncError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Syncs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSyncError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all the syncs in the current workspace
    /// </remarks>
    public Task<SyncsResponse> ListSync(ListSyncRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs"),
            [],
            [
                new Param("slug", request.Slug),
                new Param("modelId", request.ModelId),
                new Param("destinationId", request.DestinationId),
                new Param("after", request.After?.ToIso8601()),
                new Param("before", request.Before?.ToIso8601()),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("orderBy", request.OrderBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SyncsResponse>(),
            ListSyncError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sync Drafts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncDraftList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSyncDraftsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List sync drafts across every sync in the workspace, oldest change first.
    /// Poll with <c>status=pending</c> and read every page each time: the list shows
    /// the current state, not a feed of changes.
    /// </remarks>
    public Task<SyncDraftList> ListSyncDrafts(ListSyncDraftsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/drafts"),
            [],
            [
                new Param("status", request.Status),
                new Param("syncId", request.SyncId),
                new Param("updatedSince", request.UpdatedSince?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SyncDraftList>(),
            ListSyncDraftsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Sync Runs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncsRunsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSyncRunsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all sync runs under a sync
    /// </remarks>
    public Task<SyncsRunsResponse> ListSyncRuns(ListSyncRunsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/{syncId}/runs"),
            [new TemplateParam("syncId", request.SyncId)],
            [
                new Param("runId", request.RunId),
                new Param("after", request.After?.ToIso8601()),
                new Param("before", request.Before?.ToIso8601()),
                new Param("within", request.Within),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("orderBy", request.OrderBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SyncsRunsResponse>(),
            ListSyncRunsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reject Sync Draft
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncDraft"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RejectSyncDraftError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reject a sync draft. The draft closes without applying its change; to try
    /// again, the requester edits the sync.
    /// </remarks>
    public Task<SyncDraft> RejectSyncDraft(RejectSyncDraftRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/{syncId}/drafts/{draftId}/reject"),
            [new TemplateParam("syncId", request.SyncId), new TemplateParam("draftId", request.DraftId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SyncDraft>(),
            RejectSyncDraftError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger Sync
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TriggerRunOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerRunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger a new run for the given sync.
    /// <para>
    /// If a run is already in progress, this queues a sync run that will get
    /// executed immediately after the current run completes.
    /// </para>
    /// </remarks>
    public Task<TriggerRunOutput> TriggerRun(TriggerRunRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/{syncId}/trigger"),
            [new TemplateParam("syncId", request.SyncId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TriggerRunOutput>(),
            TriggerRunError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger Sync From ID or Slug
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncsTriggerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerRunCustomError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger a new run globally based on sync id or sync slug
    /// <para>
    /// If a run is already in progress, this queues a sync run that will get
    /// executed immediately after the current run completes.
    /// </para>
    /// </remarks>
    public Task<SyncsTriggerResponse> TriggerRunCustom(TriggerRunCustomRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/trigger"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SyncsTriggerResponse>(),
            TriggerRunCustomError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Sync
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSyncError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an existing sync
    /// <para>
    /// Patch a sync based on its Hightouch ID. A sync bound to a sync template
    /// takes its configuration from the template: change this sync's values
    /// with <c>syncTemplateOverrides</c>, bind it to another template or detach it
    /// with <c>syncTemplateId</c>, but do not set <c>configuration</c> while it is bound.
    /// </para>
    /// </remarks>
    public Task<SyncsResponse1> UpdateSync(UpdateSyncRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/syncs/{syncId}"),
            [new TemplateParam("syncId", request.SyncId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SyncsResponse1>(),
            UpdateSyncError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
