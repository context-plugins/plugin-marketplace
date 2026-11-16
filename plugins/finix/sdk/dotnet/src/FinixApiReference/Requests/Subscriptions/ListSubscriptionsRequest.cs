using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.Subscriptions;

/// <summary>
/// The inputs of the ListSubscriptions operation.
/// </summary>
public sealed record ListSubscriptionsRequest
{
    /// <summary>
    /// Return every resource created after the cursor value.
    /// </summary>
    public string? AfterCursor { get; init; }

    /// <summary>
    /// Filter by an amount greater than.
    /// </summary>
    public int? AmountGt { get; init; }

    /// <summary>
    /// Filter by an amount greater than or equal.
    /// </summary>
    public int? AmountGte { get; init; }

    /// <summary>
    /// Filter by an amount less than.
    /// </summary>
    public int? AmountLt { get; init; }

    /// <summary>
    /// Filter by an amount less than or equal.
    /// </summary>
    public int? AmountLte { get; init; }

    /// <summary>
    /// Filter by an amount equal to the given value.
    /// </summary>
    public int? Amount { get; init; }

    /// <summary>
    /// Filter by <c>Application</c> ID.
    /// </summary>
    public string? ApplicationId { get; init; }

    /// <summary>
    /// Return every resource created before the cursor value.
    /// </summary>
    public string? BeforeCursor { get; init; }

    /// <summary>
    /// Filter by billing frequency.
    /// </summary>
    public BillingInterval1? BillingInterval { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's ID.
    /// </summary>
    public string? BuyerIdentityId { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtLte { get; init; }

    /// <summary>
    /// Filter by <c>id</c>.
    /// </summary>
    public string? Id { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Filter subscriptions linked to a specific <c>Merchant</c>.
    /// </summary>
    public string? LinkedTo { get; init; }

    /// <summary>
    /// Filter by the <c>Subscription</c> name (exact match).
    /// </summary>
    public string? Nickname { get; init; }

    /// <summary>
    /// Filter by the <c>Subscription</c> name (partial match).
    /// </summary>
    public string? NicknameLike { get; init; }

    /// <summary>
    /// Filter by <c>state</c>:
    /// - <c>ACTIVE</c>
    /// - <c>CANCELED</c>
    /// - <c>EXPIRED</c>
    /// - <c>NOT_STARTED</c>
    /// - <c>PAST DUE</c>
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// Filter subscriptions created by a <c>Subscription Link</c>.
    /// </summary>
    public string? SubscriptionLinkId { get; init; }

    /// <summary>
    /// Filter subscriptions that were created using a specific <c>Subscription Plan</c>.
    /// </summary>
    public string? SubscriptionPlanId { get; init; }

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
