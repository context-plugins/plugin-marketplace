using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CircleCi.Core;
using CircleCi.Core.Exceptions;
using CircleCi.Core.Models;
using CircleCi.Core.Request;
using CircleCi.Core.Response;
using CircleCi.Errors;
using CircleCi.Models;
using CircleCi.Requests.ArtifactApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for listing and downloading build artifacts.
/// </summary>
public sealed class ArtifactApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ArtifactApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List artifacts for a build
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Artifact"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBuildArtifactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of artifacts produced by the specified build.
    /// </remarks>
    public Task<IReadOnlyList<Artifact>> ListBuildArtifacts(ListBuildArtifactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/{build_num}/artifacts"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
                new TemplateParam("build_num", request.BuildNum),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Artifact>>(),
            ListBuildArtifactsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List latest build artifacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Artifact"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListLatestArtifactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns artifacts from the latest build of the project, optionally filtered by branch.
    /// </remarks>
    public Task<IReadOnlyList<Artifact>> ListLatestArtifacts(ListLatestArtifactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/latest/artifacts"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
            ],
            [new Param("branch", request.Branch), new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Artifact>>(),
            ListLatestArtifactsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
