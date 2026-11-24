using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Tabby.Core;
using Tabby.Core.Exceptions;
using Tabby.Core.Models;
using Tabby.Core.Request;
using Tabby.Core.Response;
using Tabby.Errors;
using Tabby.Models;
using Tabby.Requests.DisputesApi;

namespace Tabby.Api;

/// <summary>
/// The Disputes API is designed to simplify the process of handling disputes and help merchants resolve issues with customer orders more efficiently. Merchants can use this API to retrieve a list of disputes, view details about a specific dispute, and approve or challenge a bunch of disputes. It mirrors the functionality available in Tabby Merchant Dashboard and operates exclusively with live payments using live credentials. A secret key is required for using the Disputes API.
/// </summary>
public sealed class DisputesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DisputesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get dispute by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Dispute1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDisputeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed information about dispute.
    /// </remarks>
    public Task<Dispute1> GetDispute(GetDisputeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/disputes/{disputeId}"),
            [
                new TemplateParam("dispute_id", request.DisputeId),
                new TemplateParam("disputeId", request.DisputeIdTemplate),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Dispute1>(),
            GetDisputeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get disputes list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Disputes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDisputesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns list of 100 recently created disputes.
    /// </remarks>
    public Task<Disputes> GetDisputes(GetDisputesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/disputes"),
            [],
            [
                new Param("statuses", request.Statuses),
                new Param("created_at_gte", request.CreatedAtGte),
                new Param("created_at_lte", request.CreatedAtLte),
                new Param("page_token", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Disputes>(),
            GetDisputesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Provide evidence for a dispute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Evidence"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostDisputeProvideEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provide evidence (text and/or attachments) for a dispute. Used by the merchant to submit proof in response to an evidence request.
    /// </remarks>
    public Task<Evidence> PostDisputeProvideEvidence(PostDisputeProvideEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/disputes/{disputeId}/provide-evidence"),
            [
                new TemplateParam("dispute_id", request.DisputeId),
                new TemplateParam("disputeId", request.DisputeIdTemplate),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Evidence>(),
            PostDisputeProvideEvidenceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Approve disputes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisputesApprove"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostDisputesApproveError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Approve disputes (refund money to the customer). Only 20 disputes can be approved within a single request.
    /// </remarks>
    public Task<DisputesApprove> PostDisputesApprove(PostDisputesApproveRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/disputes/approve"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DisputesApprove>(),
            PostDisputesApproveError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Challenge disputes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisputesChallenge"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostDisputesChallengeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Challenge disputes (request Tabby support to take a look at the case). Only 20 disputes can be challenged within a single request. Only disputes with status 'new' might be challenged.
    /// </remarks>
    public Task<DisputesChallenge> PostDisputesChallenge(PostDisputesChallengeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/disputes/challenge"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DisputesChallenge>(),
            PostDisputesChallengeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload attachment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisputeAttachmentUpload"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostUploadAttachmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload an attachment. Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger than 5 MB are rejected.
    /// </remarks>
    public Task<DisputeAttachmentUpload> PostUploadAttachment(PostUploadAttachmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/disputes/attachments/upload"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("attachment", request.Attachment)),
            JsonResponse.Create<DisputeAttachmentUpload>(),
            PostUploadAttachmentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
