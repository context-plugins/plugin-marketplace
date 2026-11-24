using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hud.Core;
using Hud.Core.Authentication;
using Hud.Core.Exceptions;
using Hud.Core.Models;
using Hud.Core.Request;
using Hud.Core.Response;
using Hud.Errors;
using Hud.Models;
using Hud.Requests.Storage;

namespace Hud.Api;

public sealed class Storage
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Storage(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List Trace Artifacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceStorageObjectListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List trace-owned screenshots, recordings, and captured files.
    /// </remarks>
    public Task<TraceStorageObjectListResponse> ListTraceArtifactsV2StorageTracesTraceIdArtifactsGet(ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/storage/traces/{trace_id}/artifacts"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceStorageObjectListResponse>(),
            ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trace Workspace Changes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceWorkspaceChangesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return filetracking snapshots, patches, and captured files for a trace.
    /// </remarks>
    public Task<TraceWorkspaceChangesResponse> TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGet(TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/storage/traces/{trace_id}/workspace/changes"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceWorkspaceChangesResponse>(),
            TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trace Workspace Files
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TraceWorkspaceFilesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return final captured file contents for a trace workspace.
    /// </remarks>
    public Task<TraceWorkspaceFilesResponse> TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGet(TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/storage/traces/{trace_id}/workspace/files"),
            [new TemplateParam("trace_id", request.TraceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TraceWorkspaceFilesResponse>(),
            TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
