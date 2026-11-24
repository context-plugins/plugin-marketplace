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
using DevCycle.Models;
using DevCycle.Requests.OpenFeatureRemoteEvaluationApiOfrep;

namespace DevCycle.Api;

/// <summary>
/// See the OpenFeature documentation for more information: https://github.com/open-feature/protocol
/// </summary>
public sealed class OpenFeatureRemoteEvaluationApiOfrep
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal OpenFeatureRemoteEvaluationApiOfrep(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// OFREP Bulk Evaluation Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OfrepBulkEvaluationSuccess"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostOfrepV1EvaluateFlagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return all flag values for a user context.
    /// </remarks>
    public Task<OfrepBulkEvaluationSuccess> PostOfrepV1EvaluateFlags(PostOfrepV1EvaluateFlagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultDevCycleBucketingBucketingApi("/ofrep/v1/evaluate/flags"),
            [],
            [],
            [new HeaderParam("If-None-Match", request.IfNoneMatch), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OfrepBulkEvaluationSuccess>(),
            PostOfrepV1EvaluateFlagsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// OFREP Single Flag Evaluation Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OfrepEvaluationSuccess"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostOfrepV1EvaluateFlagsByKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return a single flag for a user context
    /// </remarks>
    public Task<OfrepEvaluationSuccess> PostOfrepV1EvaluateFlagsByKey(PostOfrepV1EvaluateFlagsByKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultDevCycleBucketingBucketingApi("/ofrep/v1/evaluate/flags/{key}"),
            [new TemplateParam("key", request.Key)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OfrepEvaluationSuccess>(),
            PostOfrepV1EvaluateFlagsByKeyError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
