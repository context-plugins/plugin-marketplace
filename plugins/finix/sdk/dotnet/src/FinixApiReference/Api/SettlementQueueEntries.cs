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
using FinixApiReference.Requests.SettlementQueueEntries;

namespace FinixApiReference.Api;

/// <summary>
/// A <c>Settlement Queue Entry</c> resource represents an entry in the settlement queue used to track when and how a transfer is queued to be processed.
/// <para>
/// If a merchant's <c>settlement_queue_mode</c> is set to <c>MANUAL</c>, all transfers will have a <c>Settlement Queue Entry</c> created and will not be placed into settlement until the <see href="/api/settlement-queue-entries/updatesettlementqueueentries">Settlement Queue Entry is explicitly released</see>.
/// </para>
/// <para>
/// <b>Related Guides:</b>
/// - <see href="/additional-resources/developers/resources-and-payment-flows/key-resources#settlements">Account Structures and Settlements</see>
/// </para>
/// </summary>
public sealed class SettlementQueueEntries
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SettlementQueueEntries(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Fetch a Settlement Queue Entry
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SettlementQueueEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSettlementQueueEntryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a <c>Settlement Queue Entry</c> created from a <c>Transfer</c>, <c>Fee</c>, or <c>Reversal</c>.
    /// </remarks>
    public Task<SettlementQueueEntry> GetSettlementQueueEntry(GetSettlementQueueEntryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlement_queue_entries/{settlement_queue_entry_id}"),
            [new TemplateParam("settlement_queue_entry_id", request.SettlementQueueEntryId)],
            [],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SettlementQueueEntry>(),
            GetSettlementQueueEntryError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Settlement Queue Entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSettlementQueueEntries"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSettlementQueueEntriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of <c>Settlement Queue Entry</c> resources.
    /// </remarks>
    public Task<ListSettlementQueueEntries> ListSettlementQueueEntries(ListSettlementQueueEntriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlement_queue_entries"),
            [],
            [
                new Param("after_cursor", request.AfterCursor),
                new Param("before_cursor", request.BeforeCursor),
                new Param("application_id", request.ApplicationId),
                new Param("created_at.gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at.lte", request.CreatedAtLte?.ToIso8601()),
                new Param("entity_id", request.EntityId),
                new Param("entity_type", request.EntityType),
                new Param("limit", request.Limit),
                new Param("merchant_id", request.MerchantId),
                new Param("ready_to_settle_after.gte", request.ReadyToSettleAfterGte?.ToIso8601()),
                new Param("ready_to_settle_after.lte", request.ReadyToSettleAfterLte?.ToIso8601()),
                new Param("state", request.State),
                new Param("updated_at.gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at.lte", request.UpdatedAtLte?.ToIso8601()),
            ],
            [new HeaderParam("Finix-Version", request.FinixVersion)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListSettlementQueueEntries>(),
            ListSettlementQueueEntriesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Release Settlement Queue Entries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSettlementQueueEntriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This action is used to release a number of <c>Settlement Queue Entry</c> resources, allowing them to be included in a <c>Settlement</c> as <c>Settlement Entry</c> resources.
    /// </remarks>
    public Task UpdateSettlementQueueEntries(UpdateSettlementQueueEntriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/settlement_queue_entries"),
            [],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            UpdateSettlementQueueEntriesError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
