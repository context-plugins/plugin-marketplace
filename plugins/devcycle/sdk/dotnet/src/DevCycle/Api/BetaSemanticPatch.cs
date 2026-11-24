using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Requests.BetaSemanticPatch;

namespace DevCycle.Api;

public sealed class BetaSemanticPatch
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal BetaSemanticPatch(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// [Beta] Semantic Patch Update an Audience
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SemanticPatchControllerSemanticUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Semantic Patch Update an Audience by ID or key
    /// </remarks>
    public Task SemanticPatchControllerSemanticUpdate(SemanticPatchControllerSemanticUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/semantic/projects/{project}/audiences/{key}"),
            [new TemplateParam("key", request.Key), new TemplateParam("project", request.Project)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SemanticPatchControllerSemanticUpdateError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
