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
using UiPath.Requests.Extraction;

namespace UiPath.Api;

/// <summary>
/// Extract structured data fields from documents
/// </summary>
public sealed class Extraction
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Extraction(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Start Asynchronous Document Extraction
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExtractDocumentAsyncError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits a previously digitized document for asynchronous data extraction. The extractors to apply and the document type must be specified in the request body. Returns a requestId to poll for results. Results are retained for 24 hours. Use GET /extraction/{requestId}/result to retrieve extracted field values once processing completes.
    /// </remarks>
    public Task<AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi> ExtractDocumentAsync(ExtractDocumentAsyncRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDocumentUnderstandingClassificationApi("/projects/{projectId}/extraction/start"),
            [new TemplateParam("projectId", request.ProjectId)],
            [new Param("api-version", request.ApiVersion)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi>(),
            ExtractDocumentAsyncError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UiPath Get Asynchronous Extraction Result
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExtractionResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExtractionResultError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the result of an asynchronous extraction request by its requestId. The job status can be NotStarted, Running, Failed, or Succeeded. Poll this endpoint until the status is Succeeded or Failed. Returns extracted field values with associated confidence scores. Results are available for 24 hours from the time the job completed.
    /// </remarks>
    public Task<ExtractionResult> GetExtractionResult(GetExtractionResultRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDocumentUnderstandingClassificationApi(
                "/projects/{projectId}/extraction/{requestId}/result"),
            [new TemplateParam("projectId", request.ProjectId), new TemplateParam("requestId", request.RequestId)],
            [new Param("api-version", request.ApiVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExtractionResult>(),
            GetExtractionResultError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
