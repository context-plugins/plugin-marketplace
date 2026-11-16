using System;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Requests.DisputesApi;

/// <summary>
/// The inputs of the ListDisputes operation.
/// </summary>
public sealed record ListDisputesRequest
{
    /// <summary>
    /// Filter by the ID of the adjustment <c>Transfer</c>. &lt;br&gt;&lt;br&gt;<b>Note</b>: If included, all other filter parameters are ignored.
    /// </summary>
    public string? AdjustmentTransferId { get; init; }

    /// <summary>
    /// Filter by <c>Application</c> ID.
    /// </summary>
    public string? ApplicationId { get; init; }

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
    /// Filter by buyer's first name.
    /// </summary>
    public string? BuyerIdentityFirstName { get; init; }

    /// <summary>
    /// Filter by buyer's last name.
    /// </summary>
    public string? BuyerIdentityLastName { get; init; }

    /// <summary>
    /// Filter by the <c>business_name</c> of the buyer's <c>Identity</c>.
    /// </summary>
    public string? BuyerBusinessName { get; init; }

    /// <summary>
    /// Filter by the <c>doing_business_as</c> of the buyer's <c>Identity</c>.
    /// </summary>
    public string? BuyerDoingBusinessAs { get; init; }

    /// <summary>
    /// Filter by the Bank Identification Number (BIN). The BIN is the first 6 digits of the masked account number.
    /// </summary>
    public string? InstrumentBin { get; init; }

    /// <summary>
    /// Filter by the card brand used.
    /// </summary>
    public string? InstrumentBrandType { get; init; }

    /// <summary>
    /// Filter by the last 4 digits of the card used.
    /// </summary>
    public string? InstrumentCardLast4 { get; init; }

    /// <summary>
    /// Filter by the card type.
    /// </summary>
    public string? InstrumentCardType { get; init; }

    /// <summary>
    /// Filter by the fingerprint of the <c>Payment Instrument</c>.
    /// </summary>
    public string? InstrumentFingerprint { get; init; }

    /// <summary>
    /// Filter by the name of the <c>Payment Instrument</c>.
    /// </summary>
    public string? InstrumentName { get; init; }

    /// <summary>
    /// Filter by <c>Payment Instrument</c> type.
    /// </summary>
    public string? InstrumentType { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Filter by the ID of the <c>Identity</c> used by the <c>Merchant</c>.
    /// </summary>
    public string? MerchantIdentityId { get; init; }

    /// <summary>
    /// Filter by the name used by the <c>Merchant</c>.
    /// </summary>
    public string? MerchantIdentityName { get; init; }

    /// <summary>
    /// Filter by the name used by the <c>Merchant</c>. Use this when searching with only partial name values.
    /// </summary>
    public string? MerchantIdentityNameLike { get; init; }

    /// <summary>
    /// Filter by the ID of the <c>Merchant</c>.
    /// </summary>
    public string? MerchantId { get; init; }

    /// <summary>
    /// Filter by the MID of the <c>Merchant</c>.
    /// </summary>
    public string? MerchantMid { get; init; }

    /// <summary>
    /// Filter by the name used by the <c>Merchant</c>, the buyer's first and last name, <c>business_name</c>, and <c>doing_business_as</c> used by <c>Identities</c> when role is <c>BUYER</c>.
    /// </summary>
    public string? Names { get; init; }

    /// <summary>
    /// Filter by the name used by the <c>Merchant</c>, the buyer's first and last name, <c>business_name</c>, and <c>doing_business_as</c> used by <c>Identities</c> when role is <c>BUYER</c>. Use this when searching with only partial values.
    /// </summary>
    public string? NamesLike { get; init; }

    /// <summary>
    /// Filter by the <c>response_state</c> of the <c>Dispute</c>.
    /// </summary>
    public string? ResponseState { get; init; }

    /// <summary>
    /// Filter where <c>respond_by</c> is before the given date.
    /// </summary>
    public string? RespondByLte { get; init; }

    /// <summary>
    /// Filter where <c>respond_by</c> is after the given date.
    /// </summary>
    public string? RespondByGte { get; init; }

    /// <summary>
    /// Filter by the <c>key</c> or <c>value</c> of tags.
    /// </summary>
    public string? Tags { get; init; }

    /// <summary>
    /// Filter by the <c>key</c> or <c>value</c> of tags. Use this when searching with only partial values.
    /// </summary>
    public string? TagsLike { get; init; }

    /// <summary>
    /// Filter by the tag's key. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsKey { get; init; }

    /// <summary>
    /// Filter by the tag's value. For more information, see <see href="/api/section/tags">Tags</see>.
    /// </summary>
    public string? TagsValue { get; init; }

    /// <summary>
    /// Filter by the ID of the <c>Transfer</c> that's being disputed. &lt;br&gt;&lt;br&gt;<b>Note</b>: If included, all other filter parameters are ignored.
    /// </summary>
    public string? TransferId { get; init; }

    /// <summary>
    /// Filter by the state of the <c>Dispute</c>.
    /// </summary>
    public string? State { get; init; }

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
