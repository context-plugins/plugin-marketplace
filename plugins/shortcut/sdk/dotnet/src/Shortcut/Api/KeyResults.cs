using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.KeyResults;

namespace Shortcut.Api;

public sealed class KeyResults
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal KeyResults(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Key Result
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="KeyResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetKeyResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Key Result returns information about a chosen Key Result.
    /// </remarks>
    public Task<KeyResult> GetKeyResult(GetKeyResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/key-results/{key-result-public-id}"),
            [new TemplateParam("key-result-public-id", request.KeyResultPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<KeyResult>(),
            GetKeyResultError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Key Result
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="KeyResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateKeyResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update Key Result allows updating a Key Result's name or initial, observed, or target values.
    /// </remarks>
    public Task<KeyResult> UpdateKeyResult(UpdateKeyResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/key-results/{key-result-public-id}"),
            [new TemplateParam("key-result-public-id", request.KeyResultPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<KeyResult>(),
            UpdateKeyResultError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
