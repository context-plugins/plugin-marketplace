using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.SettlementQueueEntries;

/// <summary>
/// The inputs of the ListSettlementQueueEntries operation.
/// </summary>
public sealed record ListSettlementQueueEntriesRequest
{
    /// <summary>
    /// Return every resource created after the cursor value.
    /// </summary>
    public string? AfterCursor { get; init; }

    /// <summary>
    /// Return every resource created before the cursor value.
    /// </summary>
    public string? BeforeCursor { get; init; }

    /// <summary>
    /// Filter by <c>Application</c> ID.
    /// </summary>
    public string? ApplicationId { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtLte { get; init; }

    /// <summary>
    /// Filter by the <c>entity_id</c> of the resource inside the <c>Settlement Queue Entry</c>.
    /// </summary>
    public string? EntityId { get; init; }

    /// <summary>
    /// Filter by <c>entity_type</c>.
    /// </summary>
    public EntityType9? EntityType { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Filter by <c>Merchant</c> ID.
    /// </summary>
    public string? MerchantId { get; init; }

    /// <summary>
    /// Filter where <c>ready_to_settle_after</c> is after the given date.
    /// </summary>
    public DateTimeOffset? ReadyToSettleAfterGte { get; init; }

    /// <summary>
    /// Filter where <c>ready_to_settle_after</c> is before the given date.
    /// </summary>
    public DateTimeOffset? ReadyToSettleAfterLte { get; init; }

    /// <summary>
    /// Filter by <c>state</c>.
    /// </summary>
    public State23? State { get; init; }

    /// <summary>
    /// Filter where <c>updated_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? UpdatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>updated_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? UpdatedAtLte { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
