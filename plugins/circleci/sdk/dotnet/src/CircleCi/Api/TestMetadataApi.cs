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
using CircleCi.Requests.TestMetadataApi;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for retrieving test metadata collected during builds.
/// </summary>
public sealed class TestMetadataApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TestMetadataApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List test metadata for a build
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectProjectBuildNumTestsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBuildTestsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns test metadata collected from the specified build, sourced from JUnit XML or similar test result files.
    /// </remarks>
    public Task<ProjectProjectBuildNumTestsResponse> ListBuildTests(ListBuildTestsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/{build_num}/tests"),
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
            JsonResponse.Create<ProjectProjectBuildNumTestsResponse>(),
            ListBuildTestsError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
