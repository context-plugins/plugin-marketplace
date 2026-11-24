using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Models;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Errors;
using Audioscrape.Models;
using Audioscrape.Requests.DataExport;

namespace Audioscrape.Api;

/// <summary>
/// Customer-initiated bulk export of workspace data (audio, transcripts, items, metadata) into a downloadable archive
/// </summary>
public sealed class DataExport
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataExport(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Request an export of all workspace data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateExportJobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWorkspaceExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an asynchronous job to package the workspace's audio files,
    /// transcripts, items, and metadata into a single downloadable archive.
    /// Only workspace <c>owner</c> or <c>admin</c> members may call this endpoint.
    /// <para>
    /// At most one job per workspace can be in <c>queued</c> or <c>running</c> status at
    /// any time; further requests return <c>429</c> until the active job finishes.
    /// Poll <c>GET /api/workspaces/{workspace}/export/{job_id}</c> for status.
    /// </para>
    /// </remarks>
    public Task<CreateExportJobResponse> CreateWorkspaceExport(CreateWorkspaceExportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/workspaces/{workspace}/export"),
            [new TemplateParam("workspace", request.Workspace)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CreateExportJobResponse>(),
            CreateWorkspaceExportError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Poll the status of a workspace export job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExportJobStatus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWorkspaceExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current lifecycle state of an export job. When <c>status</c> is
    /// <c>completed</c>, <c>download_url</c> is a signed URL valid for 15 minutes (until
    /// <c>download_expires_at</c>); each call signs a fresh one. A finished export
    /// stays downloadable for 7 days, after which <c>status</c> reads <c>expired</c>.
    /// <para>
    /// Caller must be a member of the workspace (any role).
    /// </para>
    /// </remarks>
    public Task<ExportJobStatus> GetWorkspaceExport(GetWorkspaceExportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/workspaces/{workspace}/export/{job_id}"),
            [new TemplateParam("workspace", request.Workspace), new TemplateParam("job_id", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExportJobStatus>(),
            GetWorkspaceExportError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
