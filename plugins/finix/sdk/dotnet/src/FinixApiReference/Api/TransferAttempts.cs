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
using FinixApiReference.Models.AnyOf;
using FinixApiReference.Requests.TransferAttempts;

namespace FinixApiReference.Api;

/// <summary>
/// When a user attempts to make a payment using a Checkout Form or <see href="/low-code-no-code/payment-links">Payment Link</see>, or a recipient submitting details with a <see href="/guides/payouts/payout-links">Payout Link</see>—a Transfer Attempt is created.
/// <para>
/// Using transfer attempts, you can track the lifecycle of a payment or a series of payments if you are using a multi-use Payment Link.
/// </para>
/// <para>
/// Checkout Forms and Payment Links support authorizations. If a payment made with them is an authorization, the Transfer Attempt result shows <c>is_authorization: true</c> and references the authorization (<c>authorization_id</c>).
/// </para>
/// <para>
/// Each Transfer Attempt has as reference to a <c>transfer_id</c> to allow you to query it for additional data.
/// </para>
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/low-code-no-code/manage-low-code-no-code/transfer-attempts">Transfer Attempts</see>
/// </para>
/// </summary>
public sealed class TransferAttempts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TransferAttempts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch a Transfer Attempt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransferAttemptsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTransferAttemptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a <c>Transfer Attempt</c> initiated from a <c>Checkout Form</c>, <c>Payment Link</c> or <c>Payout Link</c>.
    /// </remarks>
    public Task<TransferAttemptsResponse> GetTransferAttempt(GetTransferAttemptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfer_attempts/{transfer_attempt_id}"),
            [new TemplateParam("transfer_attempt_id", request.TransferAttemptId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransferAttemptsResponse>(),
            GetTransferAttemptError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Transfer Attempts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTransferAttempts"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListTransferAttemptsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of all <c>Transfer Attempt</c> resources, or filter the results to a specific <c>Checkout Form</c>, <c>Payment Link</c>, and <c>Payout Link</c> using the <c>entity_id</c> query parameter.
    /// </remarks>
    public Task<ListTransferAttempts> ListTransferAttempts(ListTransferAttemptsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/transfer_attempts"),
            [],
            [
                new Param("amount", request.Amount),
                new Param("amount.gt", request.AmountGt),
                new Param("amount.gte", request.AmountGte),
                new Param("amount.lt", request.AmountLt),
                new Param("amount.lte", request.AmountLte),
                new Param("application_id", request.ApplicationId),
                new Param("authorization_id", request.AuthorizationId),
                new Param("buyer_email", request.BuyerEmail),
                new Param("buyer_email.like", request.BuyerEmailLike),
                new Param("buyer_first_name", request.BuyerFirstName),
                new Param("buyer_first_name.like", request.BuyerFirstNameLike),
                new Param("buyer_last_name", request.BuyerLastName),
                new Param("buyer_last_name.like", request.BuyerLastNameLike),
                new Param("entity_id", request.EntityId),
                new Param("entity_type", request.EntityType),
                new Param("is_authorization", request.IsAuthorization),
                new Param("merchant_id", request.MerchantId),
                new Param("payment_instrument_id", request.PaymentInstrumentId),
                new Param("state", request.State),
                new Param("transfer_id", request.TransferId),
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("id", request.Id),
                new Param("limit", request.Limit),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListTransferAttempts>(),
            ListTransferAttemptsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
