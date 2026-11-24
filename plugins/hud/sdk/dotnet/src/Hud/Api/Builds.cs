using System;
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
using Hud.Requests.Builds;

namespace Hud.Api;

public sealed class Builds
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Builds(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Build Status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BuildStatusV2BuildsBuildIdStatusGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a build's current status and details.
    /// </remarks>
    public Task<BuildResponse> BuildStatusV2BuildsBuildIdStatusGet(BuildStatusV2BuildsBuildIdStatusGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/{build_id}/status"),
            [new TemplateParam("build_id", request.BuildId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BuildResponse>(),
            BuildStatusV2BuildsBuildIdStatusGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel Build
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelBuildV2BuildsBuildIdCancelPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel an in-progress build.
    /// </remarks>
    public Task<BuildResponse> CancelBuildV2BuildsBuildIdCancelPost(CancelBuildV2BuildsBuildIdCancelPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/{build_id}/cancel"),
            [new TemplateParam("build_id", request.BuildId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BuildResponse>(),
            CancelBuildV2BuildsBuildIdCancelPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download Build Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildSourceDownloadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a short-lived presigned download URL for a file in a build's source tree.
    /// </remarks>
    public Task<BuildSourceDownloadResponse> DownloadBuildSourceV2BuildsBuildIdSourceDownloadGet(DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/{build_id}/source/download"),
            [new TemplateParam("build_id", request.BuildId)],
            [new Param("path", request.Path)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BuildSourceDownloadResponse>(),
            DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download Build Workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stream a build's captured workspace as a zip archive.
    /// </remarks>
    public Task<object> DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet(DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/{build_id}/workspace/download"),
            [new TemplateParam("build_id", request.BuildId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Build Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildSourceListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBuildSourceV2BuildsBuildIdSourceGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List files and directories at a path in a build's expanded source tree.
    /// <para>
    /// Readers outside the owning team see only the latest build of a public environment
    /// whose owner published its source.
    /// </para>
    /// </remarks>
    public Task<BuildSourceListResponse> ListBuildSourceV2BuildsBuildIdSourceGet(ListBuildSourceV2BuildsBuildIdSourceGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/{build_id}/source"),
            [new TemplateParam("build_id", request.BuildId)],
            [new Param("path", request.Path), new Param("cursor", request.Cursor), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BuildSourceListResponse>(),
            ListBuildSourceV2BuildsBuildIdSourceGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Build Workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildWorkspaceListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List files and directories at a path in a build's captured workspace.
    /// </remarks>
    public Task<BuildWorkspaceListResponse> ListBuildWorkspaceV2BuildsBuildIdWorkspaceGet(ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/{build_id}/workspace"),
            [new TemplateParam("build_id", request.BuildId)],
            [new Param("path", request.Path), new Param("cursor", request.Cursor), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BuildWorkspaceListResponse>(),
            ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Builds
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBuildsV2BuildsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List builds for an environment registry, newest first.
    /// </remarks>
    public Task<BuildListResponse> ListBuildsV2BuildsGet(ListBuildsV2BuildsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds"),
            [],
            [new Param("registry_id", request.RegistryId), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BuildListResponse>(),
            ListBuildsV2BuildsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Lookup Builds
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildLookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LookupBuildsV2BuildsLookupPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find the team's builds whose source has one of the given content digests.
    /// </remarks>
    public Task<BuildLookupResponse> LookupBuildsV2BuildsLookupPost(LookupBuildsV2BuildsLookupPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/lookup"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BuildLookupResponse>(),
            LookupBuildsV2BuildsLookupPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Preview Build Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildSourcePreviewResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the text content of a file in a build's source tree (1 MiB cap, text only).
    /// </remarks>
    public Task<BuildSourcePreviewResponse> PreviewBuildSourceV2BuildsBuildIdSourcePreviewGet(PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/{build_id}/source/preview"),
            [new TemplateParam("build_id", request.BuildId)],
            [new Param("path", request.Path)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BuildSourcePreviewResponse>(),
            PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Preview Build Workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildSourcePreviewResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the text content of a captured workspace file (1 MiB cap, text only).
    /// </remarks>
    public Task<BuildSourcePreviewResponse> PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet(PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/{build_id}/workspace/preview"),
            [new TemplateParam("build_id", request.BuildId)],
            [new Param("path", request.Path)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BuildSourcePreviewResponse>(),
            PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Register Build Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildRegisterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RegisterBuildSourceV2BuildsRegisterPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Record an uploaded build context as an unbuilt build of an environment.
    /// </remarks>
    public Task<BuildRegisterResponse> RegisterBuildSourceV2BuildsRegisterPost(RegisterBuildSourceV2BuildsRegisterPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/register"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BuildRegisterResponse>(),
            RegisterBuildSourceV2BuildsRegisterPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reindex Build Source
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Request a new source index after an indexing failure. Requires build edit access.
    /// </remarks>
    public Task ReindexBuildSourceV2BuildsBuildIdSourceReindexPost(ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/{build_id}/source/reindex"),
            [new TemplateParam("build_id", request.BuildId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set Latest Build
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SetLatestBuildV2BuildsBuildIdSetLatestPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pin a successful build as its registry's latest build.
    /// </remarks>
    public Task<BuildResponse> SetLatestBuildV2BuildsBuildIdSetLatestPost(SetLatestBuildV2BuildsBuildIdSetLatestPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/{build_id}/set-latest"),
            [new TemplateParam("build_id", request.BuildId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BuildResponse>(),
            SetLatestBuildV2BuildsBuildIdSetLatestPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger Build
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerBuildV2BuildsTriggerDirectPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger an environment build from a previously uploaded build context.
    /// </remarks>
    public Task<BuildResponse> TriggerBuildV2BuildsTriggerDirectPost(TriggerBuildV2BuildsTriggerDirectPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/trigger-direct"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BuildResponse>(),
            TriggerBuildV2BuildsTriggerDirectPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger Build
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerBuildV2BuildsTriggerPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger an environment build from a previously uploaded build context.
    /// </remarks>
    public Task<BuildResponse> TriggerBuildV2BuildsTriggerPost(TriggerBuildV2BuildsTriggerPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/trigger"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BuildResponse>(),
            TriggerBuildV2BuildsTriggerPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Url
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BuildUploadUrlResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadUrlV2BuildsUploadUrlPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a presigned S3 URL for uploading a build context, with a new build id.
    /// </remarks>
    public Task<BuildUploadUrlResponse> UploadUrlV2BuildsUploadUrlPost(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/builds/upload-url"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<BuildUploadUrlResponse>(),
            UploadUrlV2BuildsUploadUrlPostError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
