using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Core;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Models;
using FinixApiReference.Requests.DisputesApi;

namespace FinixApiReference.Api;

/// <summary>
/// Disputes, also known as chargebacks, are customer-disputed charges. A core part of the dispute lifecycle is the ability for a <c>Merchant</c> to upload evidence supporting their side.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/after-the-payment/disputes">Managing Disputes</see>
/// </para>
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
    /// Accept a Dispute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Dispute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AcceptDisputeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// You can accept a <c>Dispute</c> to prevent a long (and potentially expensive) process. When you accept a <c>Dispute</c>, you concede that the <c>Dispute</c> is not worth challenging or representing.
    /// <para>
    /// Related guides: <see href="/guides/after-the-payment/disputes/accepting-disputes/">Accepting a Dispute</see>
    /// </para>
    /// </remarks>
    public Task<Dispute> AcceptDispute(AcceptDisputeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}/accept"),
            [new TemplateParam("dispute_id", request.DisputeId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Dispute>(),
            AcceptDisputeError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Files as Dispute Evidence
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisputeEvidence"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDisputeEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a file as evidence for a <c>Dispute</c>.
    /// <list type="bullet">
    ///   <item><description>You can upload up to 8 files; the total size of the uploaded files combined cannot exceed 10 MB.</description></item>
    ///   <item><description>The allowed file formats include JPEG, PDF, PNG.</description></item>
    ///   <item><description>Individual JPEG, PDF, PNG files can't exceed 1 MB.</description></item>
    ///   <item><description>PNG files will be automatically converted and returned as JPEG files.</description></item>
    /// </list>
    /// </remarks>
    public Task<DisputeEvidence> CreateDisputeEvidence(CreateDisputeEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}/evidence"),
            [new TemplateParam("dispute_id", request.DisputeId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("file", request.File)),
            JsonResponse.Create<DisputeEvidence>(),
            CreateDisputeEvidenceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Dispute Evidence
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDisputeEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a <c>Dispute Evidence</c> file. You can delete evidence files only before a <c>Dispute</c> and its uploaded evidence are submitted for the first time, and only on <c>FINIX_V1</c> or <c>DUMMY_V1</c>.
    /// </remarks>
    public Task DeleteDisputeEvidence(DeleteDisputeEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}/evidence/{evidence_id}"),
            [new TemplateParam("dispute_id", request.DisputeId), new TemplateParam("evidence_id", request.EvidenceId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteDisputeEvidenceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download Dispute Evidence
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadDisputeEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Download a file uploaded as <c>Dispute Evidence</c>.
    /// <para>
    /// <b>Note</b>: The file extension included in <c>output</c> must match the extension of the original uploaded file.
    /// </para>
    /// </remarks>
    public Task<BinaryContent> DownloadDisputeEvidence(DownloadDisputeEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}/evidence/{evidence_id}/download"),
            [new TemplateParam("dispute_id", request.DisputeId), new TemplateParam("evidence_id", request.EvidenceId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DownloadDisputeEvidenceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Dispute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Dispute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDisputeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Dispute</c>.
    /// </remarks>
    public Task<Dispute> GetDispute(GetDisputeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}"),
            [new TemplateParam("dispute_id", request.DisputeId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Dispute>(),
            GetDisputeError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch Dispute Evidence
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisputeEvidence"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDisputeEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch evidence uploaded for a <c>Dispute</c>.
    /// <para>
    /// If the Finix Dashboard is unavailable, you can fetch the evidence to review the upload <c>state</c> and confirm it was sent to the processor.
    /// </para>
    /// </remarks>
    public Task<DisputeEvidence> GetDisputeEvidence(GetDisputeEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}/evidence/{evidence_id}"),
            [new TemplateParam("dispute_id", request.DisputeId), new TemplateParam("evidence_id", request.EvidenceId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DisputeEvidence>(),
            GetDisputeEvidenceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Disputes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListDisputes"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDisputesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Dispute</c> resources.
    /// </remarks>
    public Task<ListDisputes> ListDisputes(ListDisputesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes"),
            [],
            [
                new Param("adjustment_transfer_id", request.AdjustmentTransferId),
                new Param("application_id", request.ApplicationId),
                new Param("amount", request.Amount),
                new Param("amount.gt", request.AmountGt),
                new Param("amount.gte", request.AmountGte),
                new Param("amount.lt", request.AmountLt),
                new Param("amount.lte", request.AmountLte),
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("buyer_identity_first_name", request.BuyerIdentityFirstName),
                new Param("buyer_identity_last_name", request.BuyerIdentityLastName),
                new Param("buyer_business_name", request.BuyerBusinessName),
                new Param("buyer_doing_business_as", request.BuyerDoingBusinessAs),
                new Param("instrument_bin", request.InstrumentBin),
                new Param("instrument_brand_type", request.InstrumentBrandType),
                new Param("instrument_card_last4", request.InstrumentCardLast4),
                new Param("instrument_card_type", request.InstrumentCardType),
                new Param("instrument_fingerprint", request.InstrumentFingerprint),
                new Param("instrument_name", request.InstrumentName),
                new Param("instrument_type", request.InstrumentType),
                new Param("limit", request.Limit),
                new Param("merchant_identity_id", request.MerchantIdentityId),
                new Param("merchant_identity_name", request.MerchantIdentityName),
                new Param("merchant_identity_name.like", request.MerchantIdentityNameLike),
                new Param("merchant_id", request.MerchantId),
                new Param("merchant_mid", request.MerchantMid),
                new Param("names", request.Names),
                new Param("names.like", request.NamesLike),
                new Param("response_state", request.ResponseState),
                new Param("respond_by.lte", request.RespondByLte),
                new Param("respond_by.gte", request.RespondByGte),
                new Param("tags", request.Tags),
                new Param("tags.like", request.TagsLike),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("transfer_id", request.TransferId),
                new Param("state", request.State),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListDisputes>(),
            ListDisputesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Dispute Adjustment Transfers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListDisputeAdjustmentTransfers"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDisputesAdjustmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the adjustment <c>Transfers</c> for a <c>Dispute</c>. Depending on the stage of the <c>Dispute</c>, different adjustment <c>Transfer</c> subtypes can be applied.
    /// <para>
    /// There are four available subtypes for adjustment <c>Transfers</c> in <c>Disputes</c>:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>PLATFORM_CREDIT</c></description></item>
    ///   <item><description><c>MERCHANT_DEBIT</c></description></item>
    ///   <item><description><c>MERCHANT_CREDIT</c></description></item>
    ///   <item><description><c>PLATFORM_DEBIT</c></description></item>
    /// </list>
    /// </remarks>
    public Task<ListDisputeAdjustmentTransfers> ListDisputesAdjustments(ListDisputesAdjustmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}/adjustment_transfers"),
            [new TemplateParam("dispute_id", request.DisputeId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListDisputeAdjustmentTransfers>(),
            ListDisputesAdjustmentsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Dispute Evidence
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListDisputeEvidence"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDisputesEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Dispute Evidence</c> for a <c>Dispute</c>.
    /// </remarks>
    public Task<ListDisputeEvidence> ListDisputesEvidence(ListDisputesEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}/evidence"),
            [new TemplateParam("dispute_id", request.DisputeId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListDisputeEvidence>(),
            ListDisputesEvidenceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit Dispute Evidence
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisputeEvidence"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubmitDisputeEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// You can submit evidence to the issuing bank, confirming that the <c>Merchant</c> has completed submitting evidence and is ready to proceed with the <c>Dispute</c>.
    /// <para>
    /// Related guides: <see href="/guides/after-the-payment/disputes/responding-to-disputes">Responding to Disputes</see>.
    /// </para>
    /// </remarks>
    public Task<DisputeEvidence> SubmitDisputeEvidence(SubmitDisputeEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}/submit"),
            [new TemplateParam("dispute_id", request.DisputeId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DisputeEvidence>(),
            SubmitDisputeEvidenceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Dispute
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Dispute"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDisputeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update <c>tags</c> on a <c>Dispute</c>.
    /// </remarks>
    public Task<Dispute> UpdateDispute(UpdateDisputeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}"),
            [new TemplateParam("dispute_id", request.DisputeId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Dispute>(),
            UpdateDisputeError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Dispute Evidence
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisputeEvidence"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDisputeEvidenceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update <c>tags</c> on <c>Dispute Evidence</c>.
    /// </remarks>
    public Task<DisputeEvidence> UpdateDisputeEvidence(UpdateDisputeEvidenceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disputes/{dispute_id}/evidence/{evidence_id}"),
            [new TemplateParam("dispute_id", request.DisputeId), new TemplateParam("evidence_id", request.EvidenceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DisputeEvidence>(),
            UpdateDisputeEvidenceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
