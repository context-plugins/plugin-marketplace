using System;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Requests.TransfersApi;

/// <summary>
/// The inputs of the ListTransfers operation.
/// </summary>
public sealed record ListTransfersRequest
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
    /// Filter bank reversals by ACH Return Code. Use comma-separation to query for multiple values.
    /// </summary>
    public string? BankReturnReasonCode { get; init; }

    /// <summary>
    /// Return every resource created before the cursor value.
    /// </summary>
    public string? BeforeCursor { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's business name (exact match).
    /// </summary>
    public string? BuyerBusinessName { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's business name (partial match).
    /// </summary>
    public string? BuyerBusinessNameLike { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's Doing Business As (exact match).
    /// </summary>
    public string? BuyerDoingBusinessAs { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's Doing Business As (partial match).
    /// </summary>
    public string? BuyerDoingBusinessAsLike { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's first name (exact match).
    /// </summary>
    public string? BuyerIdentityFirstName { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's first name (partial match).
    /// </summary>
    public string? BuyerIdentityFirstNameLike { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's ID.
    /// </summary>
    public string? BuyerIdentityId { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's last name (exact match).
    /// </summary>
    public string? BuyerIdentityLastName { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's last name (partial match).
    /// </summary>
    public string? BuyerIdentityLastNameLike { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's full personal name (exact match).
    /// </summary>
    public string? BuyerIdentityName { get; init; }

    /// <summary>
    /// Filter by the Buyer Identity's full personal name (partial match).
    /// </summary>
    public string? BuyerIdentityNameLike { get; init; }

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
    /// Filter by <c>id</c>.
    /// </summary>
    public string? Id { get; init; }

    /// <summary>
    /// Filter by Idempotency ID.
    /// </summary>
    public string? IdempotencyId { get; init; }

    /// <summary>
    /// For <c>BANK_ACCOUNT</c> Payment Instruments, filter by the last-4 digits of the bank account number (i.e., from the Payment Instrument's <c>masked_account_number</c>).
    /// </summary>
    public string? InstrumentAccountLast4 { get; init; }

    /// <summary>
    /// For <c>PAYMENT_CARD</c> Payment Instruments, filter by the first-6 digits of the card's number (i.e., the Payment Instrument's <c>bin</c>).
    /// </summary>
    public string? InstrumentBin { get; init; }

    /// <summary>
    /// For <c>PAYMENT_CARD</c> Payment Instruments, filter by the card's <c>brand</c>.
    /// </summary>
    public string? InstrumentBrandType { get; init; }

    /// <summary>
    /// For <c>PAYMENT_CARD</c> Payment Instruments, filter by the last-4 digits of the card's number (i.e., the Payment Instrument's <c>last_four</c>).
    /// </summary>
    public string? InstrumentCardLast4 { get; init; }

    /// <summary>
    /// For <c>PAYMENT_CARD</c> Payment Instruments, filter by the card's issuing country (i.e., the Payment Instrument's <c>issuer_country</c>). Use comma-separation to query for multiple values.
    /// </summary>
    public string? InstrumentIssuerCountry { get; init; }

    /// <summary>
    /// Filter by the Payment Instrument's <c>name</c> (exact match).
    /// </summary>
    public string? InstrumentName { get; init; }

    /// <summary>
    /// Filter by the Payment Instrument's <c>type</c>.
    /// </summary>
    public InstrumentType2? InstrumentType { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Filter by the Merchant's ID (i.e., the Transfer's <c>merchant</c>).
    /// </summary>
    public string? Merchant { get; init; }

    /// <summary>
    /// Filter by the Merchant's Identity ID (i.e., the Transfer's <c>merchant_identity</c>).
    /// </summary>
    public string? MerchantIdentityId { get; init; }

    /// <summary>
    /// Filter by the Merchant's name (i.e., the Merchant's <c>merchant_name</c>).
    /// </summary>
    public string? MerchantIdentityName { get; init; }

    /// <summary>
    /// Filter by the Merchant's Merchant Identification Number (MID) (i.e., the Merchant's <c>mid</c>).
    /// </summary>
    public string? MerchantMid { get; init; }

    /// <summary>
    /// Filter by the Merchant's processor (i.e., the Merchant's <c>processor</c>).
    /// </summary>
    public string? MerchantProcessorId { get; init; }

    /// <summary>
    /// Filter by the ID of the parent transfer.
    /// </summary>
    public string? ParentTransferId { get; init; }

    /// <summary>
    /// Filter where <c>ready_to_settle_at</c> is after the given date. Only available on <c>Finix-Version: 2022-02-01</c>. For more details, see <see href="/additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public DateTimeOffset? ReadyToSettleAtGte { get; init; }

    /// <summary>
    /// Filter where <c>ready_to_settle_at</c> is before the given date. Only available on <c>Finix-Version: 2022-02-01</c>. For more details, see <see href="/additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public DateTimeOffset? ReadyToSettleAtLte { get; init; }

    /// <summary>
    /// Filter by the transfer's state.
    /// </summary>
    public State24? State { get; init; }

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
    /// Filter by <c>Transfer</c> type.
    /// </summary>
    public Type53? Type { get; init; }

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
