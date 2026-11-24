using System;
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
using Skribble.Requests.SignatureAttachmentApi;

namespace Skribble.Api;

/// <summary>
/// Endpoints for managing attachments on a signature request.
/// </summary>
public sealed class SignatureAttachmentApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SignatureAttachmentApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add an attachment to a signature request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignatureResponseSkribbleSignatureAttachmentApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSignatureAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this endpoint to provide supplementary documents (for example, Terms &amp;
    /// Conditions or appendices) to participants of a <c>SignatureRequest</c>.
    /// <para>
    /// Attachments are delivered to participants together with the
    /// <c>SignatureRequest</c>.
    /// </para>
    /// <para>
    /// <b>Content type limits</b>:
    /// The Skribble API accepts PDF files, image files, Microsoft Office files, and
    /// plain text files.
    /// </para>
    /// <para>
    /// Allowed content types:
    /// - application/pdf
    /// - application/x-tika-msoffice
    /// - application/x-tika-ooxml
    /// - application/msword
    /// - application/vnd.openxmlformats-officedocument.wordprocessingml.document
    /// - application/vnd.ms-word.document.macroEnabled.12
    /// - application/vnd.ms-excel
    /// - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
    /// - application/vnd.ms-excel.sheet.macroenabled.12
    /// - application/vnd.ms-powerpoint
    /// - application/vnd.openxmlformats-officedocument.presentationml.presentation
    /// - application/vnd.ms-powerpoint.presentation.macroEnabled.12
    /// - image/gif
    /// - image/jpeg
    /// - image/png
    /// - text/plain
    /// </para>
    /// <para>
    /// <b>Content size limits</b>:
    /// The maximum size of a single attachment is approximately 40 MB.
    /// The maximum request size is 60 MB. Exceeding it is rejected by the
    /// gateway in front of the API before the request reaches it, returning a
    /// <c>403 Forbidden</c> response. This currently returns a plain body instead
    /// of the standard Problem+JSON error envelope used elsewhere in this
    /// API; a fix to align it is planned.
    /// </para>
    /// <para>
    /// <b>Amount limits</b>:
    /// There is currently no limit on the number of attachments per
    /// SignatureRequest. Abuse of this service may result in enforced limits.
    /// </para>
    /// </remarks>
    public Task<SignatureResponseSkribbleSignatureAttachmentApi> CreateSignatureAttachment(CreateSignatureAttachmentOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureAttachmentApi("/signature-requests/{SR_ID}/attachments"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignatureResponseSkribbleSignatureAttachmentApi>(),
            CreateSignatureAttachmentError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove an attachment from a signature request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSignatureAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the attachment identified by <c>ATTACHMENT_ID</c> from the
    /// <c>SignatureRequest</c> with the ID <c>SR_ID</c>.
    /// </remarks>
    public Task DeleteSignatureAttachment(DeleteSignatureAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureAttachmentApi("/signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}"),
            [new TemplateParam("SR_ID", request.SrId), new TemplateParam("ATTACHMENT_ID", request.AttachmentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSignatureAttachmentError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Signature Attachment content
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignatureAttachmentContentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Downloads the content of the attachment identified by <c>ATTACHMENT_ID</c>
    /// for the <c>SignatureRequest</c> with the ID <c>SR_ID</c>.
    /// </remarks>
    public Task<BinaryContent> GetSignatureAttachmentContent(GetSignatureAttachmentContentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureAttachmentApi(
                "/signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}/content"),
            [new TemplateParam("SR_ID", request.SrId), new TemplateParam("ATTACHMENT_ID", request.AttachmentId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            GetSignatureAttachmentContentError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
