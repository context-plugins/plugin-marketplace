using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsCodeBuild.Core;
using AwsCodeBuild.Core.Exceptions;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Core.Request;
using AwsCodeBuild.Core.Response;
using AwsCodeBuild.Errors;
using AwsCodeBuild.Requests.AwsCodebuildXAmzTargetCodebuild20161006Listbuilds;

namespace AwsCodeBuild.Api;

public sealed class AwsCodebuildXAmzTargetCodebuild20161006Listbuilds
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AwsCodebuildXAmzTargetCodebuild20161006Listbuilds(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Builds
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBuildsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of build IDs, with each build ID representing a single build.
    /// </remarks>
    public Task ListBuilds(ListBuildsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListBuilds"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListBuildsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
