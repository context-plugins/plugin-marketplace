using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using UiPath.Core;
using UiPath.Core.Exceptions;
using UiPath.Core.Models;
using UiPath.Core.Request;
using UiPath.Core.Response;
using UiPath.Errors;
using UiPath.Models;
using UiPath.Requests.Classification;

namespace UiPath.Api;

/// <summary>
/// Classify documents into predefined document types
/// </summary>
public sealed class Classification
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Classification(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Start Asynchronous Document Classification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AsyncJobStartResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClassifyDocumentAsyncError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits a previously digitized document for asynchronous classification. Returns a requestId to poll for results. Asynchronous mode is suited for multi-page documents and concurrent batch workloads. Results are retained for 24 hours. Use GET /classification/{requestId}/result to retrieve the classification outcome once processing is complete.
    /// </remarks>
    public Task<AsyncJobStartResponse> ClassifyDocumentAsync(ClassifyDocumentAsyncRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDocumentUnderstandingClassificationApi("/projects/{projectId}/classification/start"),
            [new TemplateParam("projectId", request.ProjectId)],
            [new Param("api-version", request.ApiVersion)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AsyncJobStartResponse>(),
            ClassifyDocumentAsyncError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Get Asynchronous Classification Result
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClassificationResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the result of an asynchronous classification request by its requestId. The job status can be NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Results are available for 24 hours from the time the job completed.
    /// </remarks>
    public Task<ClassificationResult> GetClassificationResult(GetClassificationResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDocumentUnderstandingClassificationApi(
                "/projects/{projectId}/classification/{requestId}/result"),
            [new TemplateParam("projectId", request.ProjectId), new TemplateParam("requestId", request.RequestId)],
            [new Param("api-version", request.ApiVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationResult>(),
            GetClassificationResultError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
