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
using FinixApiReference.Requests.BalanceAdjustments;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Balance Adjustment</c> modifies the account <c>Balance</c> by adding funds (a 'top-up') or reducing funds for Payouts. Each adjustment is linked to a specific payment rail (e.g., ACH, card, wire).
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/guides/payouts/adding-funds">Adding Funds to your Finix Balance</see>
/// </para>
/// </summary>
public sealed class BalanceAdjustments
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BalanceAdjustments(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Balance Adjustment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BalanceAdjustment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBalanceAdjustmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a <c>Balance Adjustment</c> to increase (i.e., 'Top-up') or decrease your account balance for Payouts.
    /// </remarks>
    public Task<BalanceAdjustment> CreateBalanceAdjustment(CreateBalanceAdjustmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/balance_adjustments"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BalanceAdjustment>(),
            CreateBalanceAdjustmentError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Balance Adjustments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBalanceAdjustments"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBalanceAdjustmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Balance Adjustment</c> resources for an <c>Application</c>.
    /// <para>
    /// Only <c>ROLE_PARTNER</c> or <c>ROLE_PLATFORM</c> credentials can be used to retrieve <c>Balance Adjustment</c> objects.
    /// </para>
    /// </remarks>
    public Task<ListBalanceAdjustments> ListBalanceAdjustments(ListBalanceAdjustmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/balance_adjustments"),
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
            JsonResponse.Create<ListBalanceAdjustments>(),
            ListBalanceAdjustmentsError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
