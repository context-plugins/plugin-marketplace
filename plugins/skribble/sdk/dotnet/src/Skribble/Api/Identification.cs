using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Exceptions;
using Skribble.Core.Models;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Models;
using Skribble.Requests.Identification;

namespace Skribble.Api;

/// <summary>
/// Endpoints for retrieving, checking status, and downloading identification evidence
/// collected during identification.
/// </summary>
public sealed class Identification
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Identification(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Identification Evidence Files
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIdentificationEvidenceFilesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Downloads all files related to the identification evidence as a ZIP archive.
    /// <para>
    /// <b>Requirements:</b>
    /// - The business must have identification evidence enabled. If it is not,
    /// the request fails with <c>403 Forbidden</c> (problem type <c>feature-not-enabled</c>).
    /// - The identification process must be completed (<c>evidence_id</c> is required).
    /// </para>
    /// </remarks>
    public Task<BinaryContent> GetIdentificationEvidenceFiles(GetIdentificationEvidenceFilesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleIdentificationApi(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/files"),
            [new TemplateParam("SR_ID", request.SrId), new TemplateParam("EVIDENCE_ID", request.EvidenceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            GetIdentificationEvidenceFilesError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Identification Evidence JSON
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIdentificationEvidenceJsonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the full identification evidence record as JSON for the given
    /// <c>SignatureRequest</c> and <c>evidence_id</c>.
    /// <para>
    /// <b>Requirements:</b>
    /// - The business must have identification evidence enabled. If it is not,
    /// the request fails with <c>403 Forbidden</c> (problem type <c>feature-not-enabled</c>).
    /// - The identification process must be completed (<c>evidence_id</c> is required).
    /// </para>
    /// </remarks>
    public Task<object> GetIdentificationEvidenceJson(GetIdentificationEvidenceJsonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleIdentificationApi(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}"),
            [new TemplateParam("SR_ID", request.SrId), new TemplateParam("EVIDENCE_ID", request.EvidenceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetIdentificationEvidenceJsonError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Identification Evidence JWT
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIdentificationEvidenceJwtError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the signed JWT for the identification evidence. Useful for
    /// cryptographic verification or downstream integration purposes.
    /// <para>
    /// <b>Requirements:</b>
    /// - The business must have identification evidence enabled. If it is not,
    /// the request fails with <c>403 Forbidden</c> (problem type <c>feature-not-enabled</c>).
    /// - The identification process must be completed (<c>evidence_id</c> is required).
    /// </para>
    /// </remarks>
    public Task<string> GetIdentificationEvidenceJwt(GetIdentificationEvidenceJwtRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleIdentificationApi(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/jwt"),
            [new TemplateParam("SR_ID", request.SrId), new TemplateParam("EVIDENCE_ID", request.EvidenceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            PlainTextResponse.CreateString(),
            GetIdentificationEvidenceJwtError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Identification Evidence Status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IdentificationEvidenceStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIdentificationEvidenceStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current status of the identification evidence for the given
    /// <c>SignatureRequest</c> and <c>evidence_id</c>.
    /// <para>
    /// <b>Requirements:</b>
    /// - The business must have identification evidence enabled. If it is not,
    /// the request fails with <c>403 Forbidden</c> (problem type <c>feature-not-enabled</c>).
    /// - The identification process must have been initiated (<c>evidence_id</c> is required,
    /// available in <c>signer_identity_data.evidence_id</c> of the <c>SignatureRequest</c> response).
    /// </para>
    /// </remarks>
    public Task<IdentificationEvidenceStatusResponse> GetIdentificationEvidenceStatus(GetIdentificationEvidenceStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleIdentificationApi(
                "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/status"),
            [new TemplateParam("SR_ID", request.SrId), new TemplateParam("EVIDENCE_ID", request.EvidenceId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IdentificationEvidenceStatusResponse>(),
            GetIdentificationEvidenceStatusError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
