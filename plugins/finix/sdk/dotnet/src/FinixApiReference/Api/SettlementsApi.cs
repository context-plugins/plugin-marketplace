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
using FinixApiReference.Requests.SettlementsApi;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Settlement</c> represents a collection (i.e. batch) of Settlement Entries that will get paid out to a specific <see href="/api/merchants">Merchant</see>. A <c>Settlement Entry</c> can represent a <see href="/api/transfers">Transfer</see>, custom <see href="/api/fees">Fee</see>, or <see href="/api/split-transfers">Split Transfer</see>.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/payouts">Payouts</see>
/// </para>
/// </summary>
public sealed class SettlementsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SettlementsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Close a Settlement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Settlement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClosesettlementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Close an accruing <c>Settlement</c>. Finix, by default, creates accruing settlements then closes them based on your payout configurations. Use this endpoint to manually close a specific <c>settlement</c>.
    /// <para>
    /// The closed <c>Settlement</c> will not accrue any further transactions and gets immediately submitted for approval.
    /// </para>
    /// <para>
    /// *Important Notes*:
    /// - This endpoint is only available to Finix Core customers. If you have any questions, please contact the <see href="mailto:support@finix.com">Finix Support Team</see>.
    /// - Any refunded <c>Transfers</c> get included in <c>Settlements</c> as a deduction.
    /// - <b>PENDING</b> <c>Transfers</c> don't get included in <c>Settlements</c>.
    /// - The <c>total_amount</c> minus the <c>total_fee</c> equals the <c>net_amount</c>. The <c>net_amount</c> is the amount in cents that gets deposited into the seller's bank account.
    /// </para>
    /// </remarks>
    public Task<Settlement> Closesettlements(ClosesettlementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{settlement_id}"),
            [new TemplateParam("settlement_id", request.SettlementId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Settlement>(),
            ClosesettlementsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Settlement Funding Transfer Attempt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SettlementFundingTransferAttempt"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSettlementFundingTransferAttemptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Funding Transfer Attempt</c> for this <c>Settlement</c>. Funding transfer attempts are used to submit funds for instant payout.
    /// </remarks>
    public Task<SettlementFundingTransferAttempt> CreateSettlementFundingTransferAttempt(CreateSettlementFundingTransferAttemptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{settlement_id}/funding_transfer_attempts"),
            [new TemplateParam("settlement_id", request.SettlementId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SettlementFundingTransferAttempt>(),
            CreateSettlementFundingTransferAttemptError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Settlement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Settlement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSettlementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Settlement</c>.
    /// </remarks>
    public Task<Settlement> GetSettlement(GetSettlementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{settlement_id}"),
            [new TemplateParam("settlement_id", request.SettlementId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Settlement>(),
            GetSettlementError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Settlement Fees
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListFees"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSettlementFeesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <see href="/api/fees">Fee</see> resources belonging to a <c>Settlement</c>.
    /// </remarks>
    public Task<ListFees> ListSettlementFees(ListSettlementFeesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{settlement_id}/fees"),
            [new TemplateParam("settlement_id", request.SettlementId)],
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
            JsonResponse.Create<ListFees>(),
            ListSettlementFeesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Settlement Funding Transfer Attempts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSettlementFundingTransferAttempts"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSettlementFundingTransferAttemptsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all settlement <c>Funding Transfer Attempt</c> resources associated for the <c>Settlement</c>. A <c>Funding Transfer Attempt</c> resource is created when <see href="/api/settlements/createsettlementfundingtransferattempt">requesting an instant payout of funds</see> for the <c>Settlement</c>.
    /// </remarks>
    public Task<ListSettlementFundingTransferAttempts> ListSettlementFundingTransferAttempts(ListSettlementFundingTransferAttemptsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{settlement_id}/funding_transfer_attempts"),
            [new TemplateParam("settlement_id", request.SettlementId)],
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
            JsonResponse.Create<ListSettlementFundingTransferAttempts>(),
            ListSettlementFundingTransferAttemptsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Settlement Funding Transfers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSettlementFundingTransfers"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSettlementFundingTransfersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the funding <c>Transfer</c> resources created when a <c>Settlement</c> was approved with a <c>type</c> of <c>CREDIT</c> or <c>DEBIT</c>.
    /// </remarks>
    public Task<ListSettlementFundingTransfers> ListSettlementFundingTransfers(ListSettlementFundingTransfersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{settlement_id}/funding_transfers"),
            [new TemplateParam("settlement_id", request.SettlementId)],
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
            JsonResponse.Create<ListSettlementFundingTransfers>(),
            ListSettlementFundingTransfersError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all Transfers in a Settlement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSettlementTransfers"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSettlementTransfersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// &gt; ##### &lt;u&gt;This endpoint is deprecated&lt;/u&gt;.&lt;br/&gt;
    /// &gt; Use <see href="/api/settlements/listsettlemententries">List all Entries in a Settlement</see> instead.
    /// ---
    /// <para>
    /// Retrieve a list of every <c>Transfer</c> in a <c>Settlement</c> that has a <c>type</c> of <c>DEBIT</c> or <c>REFUND</c>. This is not an exhaustive list of everything that comprises a settlement. We recommend using  <see href="#operation/listSettlementEntries">List Settlement Entries</see>.
    /// </para>
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/section/query-parameters">Query Parameters.</see>
    /// </para>
    /// </remarks>
    public Task<ListSettlementTransfers> ListSettlementTransfers(ListSettlementTransfersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{settlement_id}/transfers"),
            [new TemplateParam("settlement_id", request.SettlementId)],
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
            JsonResponse.Create<ListSettlementTransfers>(),
            ListSettlementTransfersError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Settlements
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSettlements"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSettlementsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Settlement</c> resources.
    /// </remarks>
    public Task<ListSettlements> ListSettlements(ListSettlementsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("application_id", request.ApplicationId),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("funding_transfer_id", request.FundingTransferId),
                new Param("id", request.Id),
                new Param("is_exception", request.IsException),
                new Param("limit", request.Limit),
                new Param("merchant_id", request.MerchantId),
                new Param("status", request.Status),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("total_amount", request.TotalAmount),
                new Param("total_amount.lte", request.TotalAmountLte),
                new Param("total_amount.lt", request.TotalAmountLt),
                new Param("total_amount.gte", request.TotalAmountGte),
                new Param("total_amount.gt", request.TotalAmountGt),
                new Param("transfer_id", request.TransferId),
                new Param("split_transfer_id", request.SplitTransferId),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListSettlements>(),
            ListSettlementsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all Entries in a Settlement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSettlementEntries"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListsettlemententriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of every <c>Settlement Entry</c> in a <c>Settlement</c>. A <c>Settlement Entry</c> is an object that describes the item inside of a <c>Settlement</c>.
    /// <para>
    /// A <c>Settlement Entry</c> can represent a <see href="/api/transfers">Transfer</see>, custom <see href="/api/fees">Fee</see>, or <see href="/api/split-transfers">Split Transfer</see>.
    /// </para>
    /// </remarks>
    public Task<ListSettlementEntries> Listsettlemententries(ListsettlemententriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{settlement_id}/entries"),
            [new TemplateParam("settlement_id", request.SettlementId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListSettlementEntries>(),
            ListsettlemententriesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Settlement Entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveSettlementEntriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Remove a <c>Settlement Entry</c> or list of <c>Settlement Entries</c> that make up a <c>Settlement</c>.
    /// <para>
    /// As long as the <c>Settlement</c> has not been funded, you can remove the <c>Settlement Entry</c> or an array of <c>Settlement Entries</c>, along with its corresponding fee entry from the encompassing <c>Settlement</c>.
    /// </para>
    /// <para>
    /// The response body is empty after sending a successful delete request.
    /// </para>
    /// </remarks>
    public Task RemoveSettlementEntries(RemoveSettlementEntriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{settlement_id}/entries"),
            [new TemplateParam("settlement_id", request.SettlementId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RemoveSettlementEntriesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Settlement Transfers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RemoveSettlementTransfersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// &gt; ##### &lt;u&gt;This endpoint is deprecated&lt;/u&gt;.&lt;br/&gt;
    /// &gt; Use <see href="/api/settlements/removeSettlementEntries">Delete Settlement Entries</see> instead.
    /// ---
    /// <para>
    /// Remove one or more <c>Transfer</c> objects that make up a <c>Settlement</c>.
    /// </para>
    /// <para>
    /// As long as the <c>Settlement</c> has not been funded, you can remove the <c>Transfer</c> or an array of <c>Transfers</c>, along with its corresponding <c>Fee</c> from the encompassing <c>Settlement</c>.
    /// </para>
    /// <para>
    /// Funding <c>transfers</c> cannot be deleted.
    /// </para>
    /// <para>
    /// The response body is empty after sending a successful delete request.
    /// </para>
    /// </remarks>
    public Task RemoveSettlementTransfers(RemoveSettlementTransfersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlements/{settlement_id}/transfers"),
            [new TemplateParam("settlement_id", request.SettlementId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RemoveSettlementTransfersError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
