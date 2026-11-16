using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.SettlementsApi;

/// <summary>
/// The inputs of the ListSettlements operation.
/// </summary>
public sealed record ListSettlementsRequest
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
    /// Filter by a <c>funding_transfer</c> a <c>Settlement</c> has created.
    /// </summary>
    public string? FundingTransferId { get; init; }

    /// <summary>
    /// Filter by <c>id</c>.
    /// </summary>
    public string? Id { get; init; }

    /// <summary>
    /// Filter to return if settlement is an exception settlement.
    /// </summary>
    public bool? IsException { get; init; }

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
    /// Filter by the status of the <c>Settlement</c>. Merchants only receive payouts when <c>Settlements</c> are <c>APPROVED</c>. For more information, see <see href="/guides/payouts/">Payouts</see>.
    /// </summary>
    public Status3? Status { get; init; }

    /// <summary>
    /// Filter by the tag's key. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsKey { get; init; }

    /// <summary>
    /// Filter by the tag's value. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsValue { get; init; }

    /// <summary>
    /// Filter by a <c>total_amount</c> equal to the given value.
    /// </summary>
    public int? TotalAmount { get; init; }

    /// <summary>
    /// Filter by an <c>total_amount</c> less than or equal to the given value.
    /// </summary>
    public int? TotalAmountLte { get; init; }

    /// <summary>
    /// Filter by an <c>total_amount</c> less than the given value.
    /// </summary>
    public int? TotalAmountLt { get; init; }

    /// <summary>
    /// Filter by an <c>total_amount</c> greater than or equal to the given value.
    /// </summary>
    public int? TotalAmountGte { get; init; }

    /// <summary>
    /// Filter by an <c>total_amount</c> greater than the given value.
    /// </summary>
    public int? TotalAmountGt { get; init; }

    /// <summary>
    /// Filter by a <c>transfer_id</c> a <c>Settlement</c> has accrued.
    /// </summary>
    public string? TransferId { get; init; }

    /// <summary>
    /// Filter by a <c>split_transfer_id</c> a <c>Settlement</c> has accrued.
    /// </summary>
    public string? SplitTransferId { get; init; }

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
