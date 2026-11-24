using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models;
using Hightouch.Requests.SyncSequences;

namespace Hightouch.Api;

public sealed class SyncSequences
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SyncSequences(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Sync sequence status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncSequenceStatusOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSyncSequenceRunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the status of a sync sequence run.
    /// </remarks>
    public Task<SyncSequenceStatusOutput> GetSyncSequenceRun(GetSyncSequenceRunRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sync-sequences/runs/{syncSequenceRunId}"),
            [new TemplateParam("syncSequenceRunId", request.SyncSequenceRunId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SyncSequenceStatusOutput>(),
            GetSyncSequenceRunError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger Sync sequence
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TriggerSequenceRunOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerSequenceRunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger a new run for the given sync sequence.
    /// <para>
    /// A sequence never runs concurrently with itself. If a run is already in
    /// progress, then where run queueing is enabled for the workspace, a single
    /// follow-up run is queued and starts after the current run completes
    /// (repeated triggers return the same queued run); otherwise the id of the
    /// run already in progress is returned.
    /// </para>
    /// </remarks>
    public Task<TriggerSequenceRunOutput> TriggerSequenceRun(TriggerSequenceRunRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sync-sequences/{syncSequenceId}/trigger"),
            [new TemplateParam("syncSequenceId", request.SyncSequenceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<TriggerSequenceRunOutput>(),
            TriggerSequenceRunError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
