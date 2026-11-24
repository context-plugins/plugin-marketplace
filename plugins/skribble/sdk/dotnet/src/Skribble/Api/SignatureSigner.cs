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
using Skribble.Requests.SignatureSigner;

namespace Skribble.Api;

/// <summary>
/// Endpoints for managing signers on a signature request.
/// </summary>
public sealed class SignatureSigner
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SignatureSigner(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add an individual signer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SignatureResponseV3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddSignatureSignerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds an individual signer to the <c>SignatureRequest</c> with the ID <c>SR_ID</c>.
    /// Use <c>account_email</c> to invite a signer with an existing Skribble account,
    /// or <c>signer_identity_data</c> to invite a No-Account-Signer (NAS).
    /// <para>
    /// &gt; <b>Good to know</b>
    /// &gt; We recommend combining <c>signer_identity_data</c> and <c>account_email</c> when
    /// &gt; you are unsure whether the user has a Skribble account. If a matching
    /// &gt; account exists, the user will find the <c>SignatureRequest</c> in the
    /// &gt; <b>To sign</b> section of their account on my.skribble.com.
    /// &gt;
    /// &gt; If you invite them using only <c>signer_identity_data</c>, the document will
    /// &gt; not appear in their Skribble account even if one exists — they will need
    /// &gt; to access it via the link in their invitation email.
    /// </para>
    /// </remarks>
    public Task<SignatureResponseV3> AddSignatureSigner(AddSignatureSignerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureSignerApi("/signature-requests/{SR_ID}/signatures"),
            [new TemplateParam("SR_ID", request.SrId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SignatureResponseV3>(),
            AddSignatureSignerError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Remove an individual signer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveSignatureSignerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes an individual signer from the <c>SignatureRequest</c>. Provide the
    /// SignatureRequest ID <c>SR_ID</c> and the Signature ID <c>SID</c> of the signer to
    /// remove.
    /// </remarks>
    public Task RemoveSignatureSigner(RemoveSignatureSignerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSignatureSignerApi("/signature-requests/{SR_ID}/signatures/{SID}"),
            [new TemplateParam("SR_ID", request.SrId), new TemplateParam("SID", request.Sid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RemoveSignatureSignerError.Response,
            _auth.Bearer,
            requestOptions,
            cancellationToken);
}
