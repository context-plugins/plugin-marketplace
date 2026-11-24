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
using UiPath.Requests.ValidationApi;

namespace UiPath.Api;

/// <summary>
/// Validate and correct digitization, classification, and extraction results
/// </summary>
public sealed class ValidationApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ValidationApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Start Asynchronous Document Validation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ValidateDocumentAsyncError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits digitization, classification, and extraction results for asynchronous validation. Validation checks the accuracy of previously processed results and may invoke human-in-the-loop review for low-confidence extractions. Returns a requestId for polling.
    /// </remarks>
    public Task<AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi> ValidateDocumentAsync(ValidateDocumentAsyncRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDocumentUnderstandingClassificationApi("/projects/{projectId}/validation/start"),
            [new TemplateParam("projectId", request.ProjectId)],
            [new Param("api-version", request.ApiVersion)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AsyncJobStartResponseUiPathDocumentUnderstandingExtractionApi>(),
            ValidateDocumentAsyncError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
