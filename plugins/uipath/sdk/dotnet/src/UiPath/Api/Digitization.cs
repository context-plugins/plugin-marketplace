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
using UiPath.Requests.Digitization;

namespace UiPath.Api;

/// <summary>
/// Convert documents into a digitized format for downstream processing
/// </summary>
public sealed class Digitization
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Digitization(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// UiPath Digitize a Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DigitizationResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DigitizeDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits a document for digitization, converting it into a structured digital representation that can be used for classification, extraction, and validation. Supported input formats are JPEG, PNG, PDF, and TIFF. The response includes a documentId that must be used in subsequent classification, extraction, and validation requests. Digitized results are retained for seven days.
    /// </remarks>
    public Task<DigitizationResult> DigitizeDocument(DigitizeDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultUiPathDocumentUnderstandingClassificationApi("/projects/{projectId}/digitization/start"),
            [new TemplateParam("projectId", request.ProjectId)],
            [new Param("api-version", request.ApiVersion)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DigitizationResult>(),
            DigitizeDocumentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
