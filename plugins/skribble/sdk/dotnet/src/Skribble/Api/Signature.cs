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
using Skribble.Requests.Signature;

namespace Skribble.Api;

/// <summary>
/// Endpoints for creating and managing signature requests.
/// </summary>
public sealed class Signature
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Signature(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add an additional document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddDocumentInSignatureRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds an additional document to the <c>SignatureRequest</c> while it is still in <c>DRAFT</c> status.
    /// <para>
    /// <b>Content size limits</b>:
    /// Very large document content is rejected by the gateway in front of the
    /// API before the request reaches it, returning a <c>403 Forbidden</c> response.
    /// This currently returns a plain body instead of the standard
    /// Problem+JSON error envelope used elsewhere in this API; a fix to align
    /// it is planned.
    /// </para>
    /// </remarks>
    public Task AddDocumentInSignatureRequest(AddDocumentInSignatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureApi("/signature-requests/{SR_ID}/documents"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            AddDocumentInSignatureRequestError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a Signature Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignatureResponseV3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSignatureRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new <c>SignatureRequest</c>, which is the primary object of the Skribble API.
    /// A <c>SignatureRequest</c> defines who signs what and under which conditions. It specifies
    /// the documents to be signed, the list of required signers, the desired signature quality
    /// and legislation, and optional settings such as signing sequences, callback URLs, and
    /// access control.
    /// <para>
    /// Compared to API v2, this version supports attaching multiple documents to a single
    /// <c>SignatureRequest</c>. Additionally, the request no longer triggers invitations immediately.
    /// Instead, the <c>SignatureRequest</c> is created with a <c>status_overall</c> of <c>DRAFT</c>.
    /// </para>
    /// <para>
    /// If you specify an owner using the <c>creator</c> field, that user will find the request in
    /// the Drafts section of their account, where they can review and complete the setup.
    /// </para>
    /// <para>
    /// Once ready, call <c>/initiate</c> to start the <c>SignatureRequest</c> and send out invitations.
    /// </para>
    /// </remarks>
    public Task<SignatureResponseV3> CreateSignatureRequest(CreateSignatureRequestOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureApi("/signature-requests"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignatureResponseV3>(),
            CreateSignatureRequestError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove a document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDocumentInSignatureRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the document identified by <c>DOC_ID</c> from the <c>SignatureRequest</c>
    /// with the ID <c>SR_ID</c>.
    /// </remarks>
    public Task DeleteDocumentInSignatureRequest(DeleteDocumentInSignatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureApi("/signature-requests/{SR_ID}/documents/{DOC_ID}"),
            [new TemplateParam("SR_ID", request.SrId), new TemplateParam("DOC_ID", request.DocId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteDocumentInSignatureRequestError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Signature Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSignatureRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a <c>SignatureRequest</c> by its ID.
    /// <para>
    /// <b>Important:</b> A <c>SignatureRequest</c> can only be deleted via the API if:
    /// </para>
    /// <list type="number">
    ///   <item><description>the <c>SignatureRequest</c> has <c>status_overall=OPEN</c>, and</description></item>
    /// </list>
    /// <para>
    /// 2. the API user has sufficient rights on the <c>SignatureRequest</c>, e.g. when
    /// it was created by the API user.
    /// </para>
    /// <para>
    /// Deleting a <c>SignatureRequest</c> does not necessarily remove it from the
    /// system immediately.
    /// </para>
    /// <para>
    /// <b>WITHDRAWN</b>
    /// </para>
    /// <para>
    /// When the API user is the <b>owner</b> of the <c>SignatureRequest</c> and it is
    /// still in <c>status_overall=OPEN</c>, the <c>SignatureRequest</c> will be
    /// <b>WITHDRAWN</b>.
    /// </para>
    /// <para>
    /// This means the <c>SignatureRequest</c> will transition to
    /// <c>status_overall=WITHDRAWN</c> and all pending signatures will be marked with
    /// <c>status_code=WITHDRAWN</c>. Sign and read rights for all signers will be
    /// revoked, so invited signers can no longer read or sign the
    /// <c>SignatureRequest</c>.
    /// </para>
    /// <para>
    /// <b>REMOVE AS PARTICIPANT</b>
    /// </para>
    /// <para>
    /// When the API user is a participant but not the owner of the
    /// <c>SignatureRequest</c>, the <c>DELETE</c> request will only remove the API user as a
    /// participant.
    /// </para>
    /// <para>
    /// In this case, the system will remove the <c>SignatureRequest</c> and its related
    /// documents once the last remaining user deletes it via the Skribble web
    /// application.
    /// </para>
    /// <para>
    /// <b>DELETING</b>
    /// </para>
    /// <para>
    /// When the API user is the last user with access rights to the
    /// <c>SignatureRequest</c> (e.g. after a <b>WITHDRAW</b>), the <c>SignatureRequest</c> and
    /// its related documents will be permanently removed from the system.
    /// </para>
    /// </remarks>
    public Task DeleteSignatureRequest(DeleteSignatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureApi("/signature-requests/{SR_ID}"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSignatureRequestError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a Signature Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignatureResponseV3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignatureRequestDetailsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches a <c>SignatureRequest</c> by its ID.
    /// </remarks>
    public Task<SignatureResponseV3> GetSignatureRequestDetails(GetSignatureRequestDetailsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureApi("/signature-requests/{SR_ID}"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SignatureResponseV3>(),
            GetSignatureRequestDetailsError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Invite signers and start signing process
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InitiateSignatureRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts the signing process for a <c>SignatureRequest</c> in <c>DRAFT</c> status.
    /// <para>
    /// This action sends out invitation emails and transitions <c>status_overall</c>
    /// from <c>DRAFT</c> to <c>OPEN</c>. Once initiated, the <c>SignatureRequest</c> is no longer
    /// visible in the Drafts section and will appear in the appropriate section
    /// (e.g. Pending) for each participant.
    /// </para>
    /// </remarks>
    public Task InitiateSignatureRequest(InitiateSignatureRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureApi("/signature-requests/{SR_ID}/initiate"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            InitiateSignatureRequestError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Withdraw a Signature Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignatureResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WithdrawSignatureRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Withdraws a <c>SignatureRequest</c>, for example when signing becomes unnecessary
    /// or an error occurred during the invitation process. As the inviter, you can
    /// explicitly withdraw the <c>SignatureRequest</c>. This removes all signers and
    /// observers as participants and notifies them with a specified <c>message</c>.
    /// <para>
    /// Similar to deletion, the <c>withdraw</c> action can only be executed if:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>The <c>SignatureRequest</c> has <c>status_overall=OPEN</c></description></item>
    /// </list>
    /// <para>
    /// - The API user has sufficient rights on the <c>SignatureRequest</c>, such as
    /// when it was created by the API user.
    /// </para>
    /// <para>
    /// &gt; <b>Note</b>
    /// &gt; We recommend using the <c>delete</c> endpoint, which automatically determines
    /// &gt; the appropriate action. For example, if the API user does not have
    /// &gt; withdrawal rights, they may instead be removed as a participant, or the
    /// &gt; document may be deleted directly.
    /// &gt;
    /// &gt; Use the <c>withdraw</c> endpoint specifically when you need to withdraw the
    /// &gt; <c>SignatureRequest</c> while keeping it in Skribble.
    /// </para>
    /// </remarks>
    public Task<SignatureResponse> WithdrawSignatureRequest(WithdrawSignatureRequestOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureApi("/signature-requests/{SR_ID}/withdraw"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignatureResponse>(),
            WithdrawSignatureRequestError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
