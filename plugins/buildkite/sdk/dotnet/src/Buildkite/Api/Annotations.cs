using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Buildkite.Core;
using Buildkite.Core.ErrorResponse;
using Buildkite.Core.Exceptions;
using Buildkite.Core.Models;
using Buildkite.Core.Request;
using Buildkite.Core.Response;
using Buildkite.Requests.Annotations;

namespace Buildkite.Api;

public sealed class Annotations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Annotations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Annotations For A Build
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task ListAnnotations(ListAnnotationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/organizations/{org}/pipelines/{pipeline}/builds/{number}/annotations"),
            [
                new TemplateParam("org", request.Org),
                new TemplateParam("pipeline", request.Pipeline),
                new TemplateParam("number", request.Number),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
