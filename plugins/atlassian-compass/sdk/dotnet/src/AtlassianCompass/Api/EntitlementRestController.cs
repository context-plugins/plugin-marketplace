using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AtlassianCompass.Core;
using AtlassianCompass.Core.Exceptions;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Core.Request;
using AtlassianCompass.Core.Response;
using AtlassianCompass.Errors;
using AtlassianCompass.Models;
using AtlassianCompass.Requests.EntitlementRestController;

namespace AtlassianCompass.Api;

public sealed class EntitlementRestController
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal EntitlementRestController(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Entitlement Results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EntitlementResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EvaluateEntitlementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get entitlement results for a given user and site
    /// </remarks>
    public Task<EntitlementResponseDto> EvaluateEntitlements(EvaluateEntitlementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compass/v1/entitlements"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EntitlementResponseDto>(),
            EvaluateEntitlementsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
