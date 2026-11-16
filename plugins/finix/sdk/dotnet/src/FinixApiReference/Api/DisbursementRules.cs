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
using FinixApiReference.Requests.DisbursementRules;

namespace FinixApiReference.Api;

/// <summary>
/// For the Payouts product, when a payout is executed, such as a Push-To-Card or ACH transaction, Finix checks the transaction against velocity rules and balance rules.
/// <para>
/// Rules establish limits on transactions. For example, there may be a daily transaction limit of 100 transactions (<c>count_limit</c>) or a monthly volume limit of $100,000 (<c>volume_limit</c>). If a transaction exceeds any defined limit, the transaction is rejected.
/// </para>
/// <para>
/// Rules are set for entities involved in transactions, including the application, senders, and recipients.
/// </para>
/// <para>
/// The "Application" represents the customer to whom Finix is applying the rules. Application rules are set solely by Finix and are applied to every single transaction.
/// </para>
/// <para>
/// You can establish rules for "senders" and "recipients," referring to the parties involved in transactions:
/// </para>
/// <list type="bullet">
///   <item><description>In the case of a <c>PULL_FROM_CARD</c> or <c>PULL_FROM_ACH</c> transaction, sender rules are applied (either card or ACH rules). The "target" of the pull is referred to as the "sender," specifically the customer of Finix's client.</description></item>
///   <item><description>Conversely, in the case of a <c>PUSH_TO_CARD</c> or <c>PUSH_TO_ACH</c> transaction, the recipient rules are applied (either card or ACH rules). The "target" of the push is referred to as the "recipient," which is, in turn, the customer of Finix's client.</description></item>
/// </list>
/// </summary>
public sealed class DisbursementRules
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DisbursementRules(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Current Usages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListCurrentUsages"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCurrentUsagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the current usage for disbursements.
    /// </remarks>
    public Task<ListCurrentUsages> ListCurrentUsages(ListCurrentUsagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disbursement_rules/current_usages"),
            [],
            [
                new Param("linked_to", request.LinkedTo),
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("limit", request.Limit),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListCurrentUsages>(),
            ListCurrentUsagesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Disbursement Rules
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListDisbursementRules"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDisbursementRulesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Disbursement Rule</c> resources linked to an <c>Application</c> / <c>Platform</c>. Currently, there is only one <c>Disbursement Rule</c> object per application / platform.
    /// <para>
    /// For details on how to query endpoints using the available parameters, see <see href="/api/overview/#section/Query-Parameters">Query Parameters</see>.
    /// </para>
    /// </remarks>
    public Task<ListDisbursementRules> ListDisbursementRules(ListDisbursementRulesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/disbursement_rules"),
            [],
            [
                new Param("linked_to", request.LinkedTo),
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
            JsonResponse.Create<ListDisbursementRules>(),
            ListDisbursementRulesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
