using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.AuthorizationsApi;

/// <summary>
/// The inputs of the ListAuthorizations operation.
/// </summary>
public sealed record ListAuthorizationsRequest
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
    /// Filter by the currency of the resource.
    /// </summary>
    public string? Currency { get; init; }

    /// <summary>
    /// Filter by the device's ID.
    /// </summary>
    public string? Device { get; init; }

    /// <summary>
    /// Filter by Idempotency ID.
    /// </summary>
    public string? IdempotencyId { get; init; }

    /// <summary>
    /// Filter Transactions by the last 4 digits of the bank account. The bank account last 4 are the last 4 digits of the masked account number.
    /// </summary>
    public string? InstrumentAccountLast4 { get; init; }

    /// <summary>
    /// Filter by Bank Identification Number (BIN). The BIN is the first 6 digits of the masked number.
    /// </summary>
    public string? InstrumentBin { get; init; }

    /// <summary>
    /// Filter by card brand.
    /// </summary>
    public string? InstrumentBrandType { get; init; }

    /// <summary>
    /// Filter by the payment card last 4 digits.
    /// </summary>
    public string? InstrumentCardLast4 { get; init; }

    /// <summary>
    /// Filter Transactions by the <c>name</c> of the <c>Payment Instrument</c>.
    /// </summary>
    public string? InstrumentName { get; init; }

    /// <summary>
    /// Show only voided authorizations.
    /// </summary>
    public bool? IsVoid { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Filter by the <c>Merchant</c> ID.
    /// </summary>
    public string? Merchant { get; init; }

    /// <summary>
    /// Filter Transactions by name of the <c>Identity</c>.
    /// </summary>
    public string? MerchantIdentityName { get; init; }

    /// <summary>
    /// Filter by Merchant Identification Number (MID).
    /// </summary>
    public string? MerchantMid { get; init; }

    /// <summary>
    /// Filter by <c>Processor</c> ID.
    /// </summary>
    public string? MerchantProcessorId { get; init; }

    /// <summary>
    /// Filter by transaction state.
    /// </summary>
    public State21? State { get; init; }

    /// <summary>
    /// Filter by the tag's key. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsKey { get; init; }

    /// <summary>
    /// Filter by the tag's value. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsValue { get; init; }

    /// <summary>
    /// Filter by <c>trace_id</c>.
    /// </summary>
    public string? TraceId { get; init; }

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
