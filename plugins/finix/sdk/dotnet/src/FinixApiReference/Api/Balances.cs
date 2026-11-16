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
using FinixApiReference.Requests.Balances;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Balance</c> resource represents the current financial state of an <c>Application</c> identified by the <c>linked_to</c> query parameter.
/// <para>
/// It tracks the state of funds processed through the system, including amounts that are:
///   - <c>available_amount</c> for immediate use or disbursement.
///   - <c>pending_amount</c> due to processing times, holds, or other constraints.
///   - <c>posted_amount</c>, which reflects the total sum (including both available and pending funds).
/// </para>
/// </summary>
public sealed class Balances
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Balances(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch a Balance
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Balance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBalanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of an existing <c>Balance</c>.
    /// </remarks>
    public Task<Balance> GetBalance(GetBalanceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/balances/{balance_id}"),
            [new TemplateParam("balance_id", request.BalanceId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Balance>(),
            GetBalanceError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Balance Entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BalanceEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBalanceEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a specific <c>Balance Entry</c>.
    /// </remarks>
    public Task<BalanceEntry> GetBalanceEntry(GetBalanceEntryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/balance_entries/{balance_entry_id}"),
            [new TemplateParam("balance_entry_id", request.BalanceEntryId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BalanceEntry>(),
            GetBalanceEntryError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Balance Entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBalances"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBalanceEntriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A <c>Balance Entry</c> reflects a change to an application's <c>Balance</c> due to a <c>Transfer</c> or a <c>Balance Adjustment</c> (i.e., "top-up").
    /// <para>
    /// You can use this endpoint to obtain a list of <c>Balance Entry</c> objects.
    /// </para>
    /// </remarks>
    public Task<ListBalances> ListBalanceEntries(ListBalanceEntriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/balances/{balance_id}/balance_entries"),
            [new TemplateParam("balance_id", request.BalanceId)],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("amount", request.Amount),
                new Param("amount.gt", request.AmountGt),
                new Param("amount.gte", request.AmountGte),
                new Param("amount.lt", request.AmountLt),
                new Param("amount.lte", request.AmountLte),
                new Param("before_cursor", request.BeforeCursor),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("entity_id", request.EntityId),
                new Param("entity_type", request.EntityType),
                new Param("id", request.Id),
                new Param("limit", request.Limit),
                new Param("parent_balance_entry_id", request.ParentBalanceEntryId),
                new Param("posted_at.gte", request.PostedAtGte?.ToIso8601()),
                new Param("posted_at.lte", request.PostedAtLte?.ToIso8601()),
                new Param("state", request.State),
                new Param("tags.key", request.TagsKey),
                new Param("tags.value", request.TagsValue),
                new Param("type", request.Type),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListBalances>(),
            ListBalanceEntriesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Balances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBalances"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBalancesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Balance</c> resources.
    /// </remarks>
    public Task<ListBalances> ListBalances(ListBalancesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/balances"),
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
            JsonResponse.Create<ListBalances>(),
            ListBalancesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
