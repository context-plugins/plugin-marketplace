using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.PaymentInstrumentsApi;

/// <summary>
/// The inputs of the ListPaymentInstruments operation.
/// </summary>
public sealed record ListPaymentInstrumentsRequest
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
    /// Filter by the last 4 digits of the account if available.
    /// </summary>
    public string? AccountLast4 { get; init; }

    /// <summary>
    /// Filter by the account routing number if available.
    /// </summary>
    public string? AccountRoutingNumber { get; init; }

    /// <summary>
    /// Filter by Bank Identification Number (BIN). The BIN is the first 6 digits of the masked number.
    /// </summary>
    public string? Bin { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is after the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtGte { get; init; }

    /// <summary>
    /// Filter where <c>created_at</c> is before the given date.
    /// </summary>
    public DateTimeOffset? CreatedAtLte { get; init; }

    /// <summary>
    /// Filter by the expiration month associated with the <c>Payment Instrument</c> if applicable. This filter only applies to payment cards.
    /// </summary>
    public string? ExpirationMonth { get; init; }

    /// <summary>
    /// Filter by the 4 digit expiration year associated with the Payment Instrument if applicable. This filter only applies to payment cards.
    /// </summary>
    public string? ExpirationYear { get; init; }

    /// <summary>
    /// Filter by <c>id</c>.
    /// </summary>
    public string? Id { get; init; }

    /// <summary>
    /// Filter by the last 4 digits of the <c>Payment Instrument</c> card. This filter only applies to payment cards.
    /// </summary>
    public string? Last4 { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Filter by the name.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Filter by the owner id of the associated <c>Identity</c>.
    /// </summary>
    public string? OwnerIdentityId { get; init; }

    /// <summary>
    /// Filter by the <c>Payment Instrument</c> type.
    /// </summary>
    public Type52? Type { get; init; }

    /// <summary>
    /// Filter by the tag's key. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsKey { get; init; }

    /// <summary>
    /// Filter by the tag's value. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsValue { get; init; }

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
