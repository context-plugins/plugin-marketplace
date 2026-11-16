using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.TransferAttempts;

/// <summary>
/// The inputs of the ListTransferAttempts operation.
/// </summary>
public sealed record ListTransferAttemptsRequest
{
    /// <summary>
    /// Filter by an amount equal to the given value.
    /// </summary>
    public int? Amount { get; init; }

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
    /// Filter by <c>Application</c> ID.
    /// </summary>
    public string? ApplicationId { get; init; }

    /// <summary>
    /// Filter by <c>Authorization</c> ID.
    /// </summary>
    public string? AuthorizationId { get; init; }

    /// <summary>
    /// Filter by the buyer's email address (exact match).
    /// </summary>
    public string? BuyerEmail { get; init; }

    /// <summary>
    /// Filter by the buyer's email address (partial match).
    /// </summary>
    public string? BuyerEmailLike { get; init; }

    /// <summary>
    /// Filter by the buyer's first name (exact match).
    /// </summary>
    public string? BuyerFirstName { get; init; }

    /// <summary>
    /// Filter by the buyer's first name (partial match).
    /// </summary>
    public string? BuyerFirstNameLike { get; init; }

    /// <summary>
    /// Filter by the buyer's last name (exact match).
    /// </summary>
    public string? BuyerLastName { get; init; }

    /// <summary>
    /// Filter by the buyer's last name (partial match).
    /// </summary>
    public string? BuyerLastNameLike { get; init; }

    /// <summary>
    /// Filter by the ID of the <c>Checkout Form</c>, <c>Payment Link</c>, or <c>Payout Link</c>.
    /// </summary>
    public string? EntityId { get; init; }

    /// <summary>
    /// Filter by the type of entity that initiated the <c>Transfer Attempt</c>.
    /// </summary>
    public EntityType10? EntityType { get; init; }

    /// <summary>
    /// Filter by whether the <c>Transfer Attempt</c> is tied to an <c>Authorization</c>.
    /// </summary>
    public bool? IsAuthorization { get; init; }

    /// <summary>
    /// Filter by <c>Merchant</c> ID.
    /// </summary>
    public string? MerchantId { get; init; }

    /// <summary>
    /// Filter by <c>Payment Instrument</c> ID.
    /// </summary>
    public string? PaymentInstrumentId { get; init; }

    /// <summary>
    /// Filter by <c>Transfer Attempt</c> state.
    /// </summary>
    public State25? State { get; init; }

    /// <summary>
    /// Filter by <c>Transfer</c> ID.
    /// </summary>
    public string? TransferId { get; init; }

    /// <summary>
    /// Return every resource created after the cursor value.
    /// </summary>
    public string? AfterCursor { get; init; }

    /// <summary>
    /// Return every resource created before the cursor value.
    /// </summary>
    public string? BeforeCursor { get; init; }

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
