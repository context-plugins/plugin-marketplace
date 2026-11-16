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
using FinixApiReference.Requests.FeesApi;
using FinixApiReference.Requests.SplitTransfers;

namespace FinixApiReference.Api;

/// <summary>
/// Transactions can be split among different merchants. A <c>Split Transfer</c> shows how funds from a split <c>Transfer</c> were distributed into a merchant's <c>Settlement</c>.
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/online-payments/payment-features/split-transactions">Split Transactions</see>
/// </para>
/// </summary>
public sealed class SplitTransfers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SplitTransfers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch a Split Transfer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SplitTransfer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSplitTransferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch a <c>Split Transfer</c> that was created from a split transaction.
    /// </remarks>
    public Task<SplitTransfer> GetSplitTransfer(GetSplitTransferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/split_transfers/{split_transfer_id}"),
            [new TemplateParam("split_transfer_id", request.SplitTransferId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SplitTransfer>(),
            GetSplitTransferError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Fees
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListFees"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFeesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Fee</c> resources.
    /// <para>
    /// <b>Filter fees by linked entity</b>: You can filter fees by the entity that generated them using the <c>linked_to</c> query parameter:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Transfer fees: <c>?linked_to=TRnErBfrHLgdAi3BqAkWLN27</c></description></item>
    ///   <item><description>Authorization fees: <c>?linked_to=AUg8unYpnWBEY1AdVUDkdQYJ</c></description></item>
    ///   <item><description>Split transfer fees: <c>?linked_to=split_transfer_split_transfer_97gaitUpcmzqjYYpQbei9j</c></description></item>
    ///   <item><description>Compliance Form fees: <c>?linked_to=cf_uwErNm23TKYNEiqrEdJK59</c></description></item>
    ///   <item><description>Payment Instrument fees: <c>?linked_to=PInVUXZLswZi6pdcK1T41MuE</c></description></item>
    ///   <item><description>Merchant-specific fees: <c>?linked_to=MUwfZPNW3r4EqLMzwgr6txw4</c></description></item>
    /// </list>
    /// <para>
    /// {% admonition type="info" %}
    /// Merchant-specific fees include monthly dues and assessments and any <see href="/api/fees/createfee">custom fees</see>.
    /// {% /admonition %}
    /// </para>
    /// <para>
    /// <b>To show fees charged to a specific entity during a period</b>, pass the <c>created_at.gte</c> and <c>created_at.lte</c> query parameters.
    /// - Example: <c>?merchant_id=MUeDVrf2ahuKc9Eg5TeZugvs&amp;created_at.lte=2025-01-01&amp;created_at.gte=2025-02-01</c>
    /// </para>
    /// </remarks>
    public Task<ListFees> ListFees(ListFeesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/fees"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("linked_to", request.LinkedTo),
                new Param("merchant_id", request.MerchantId),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListFees>(),
            ListFeesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Split Transfers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSplitTransfers"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSplitTransfersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Split Transfer</c> resources created for a specific split <c>Transfer</c>.
    /// <para>
    /// For more information, see our <see href="/guides/online-payments/payment-features/split-transactions">Split Transactions</see> guide.
    /// </para>
    /// </remarks>
    public Task<ListSplitTransfers> ListSplitTransfers(ListSplitTransfersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/split_transfers"),
            [],
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
            JsonResponse.Create<ListSplitTransfers>(),
            ListSplitTransfersError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
