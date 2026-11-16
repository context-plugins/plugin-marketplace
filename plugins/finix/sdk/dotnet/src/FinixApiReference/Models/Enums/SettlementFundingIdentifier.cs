using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Includes additional information (like the MID or <c>Merchant</c> name) when submitting funding <c>Transfers</c> to processors.
/// - <c>UNSET</c>: No additional details get provided to the processor.
/// - <c>MID_AND_DATE</c>: The <c>MID</c> of the <c>Merchant</c> and the date the funding <c>Transfer</c> was submitted (Date is in UTC). e.g <c>MID:12345678-20220225</c>
/// - <c>MID_AND_MERCHANT_NAME</c>: The <c>MID</c> of the <c>Merchant</c> and the <c>Merchant#name</c> (white spaces will be removed). e.g. <c>MID:12345678-NameOfMerchant</c>
/// <para>
/// These details appear alongside the seller's payout in their bank account as a description of the deposit.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SettlementFundingIdentifier>))]
public sealed record SettlementFundingIdentifier : OpenStringEnum<SettlementFundingIdentifier>
{
    private SettlementFundingIdentifier(string value) : base(value)
    {
    }

    public static readonly SettlementFundingIdentifier Unset = new("UNSET");

    public static readonly SettlementFundingIdentifier MidAndDate = new("MID_AND_DATE");

    public static readonly SettlementFundingIdentifier MidAndMerchantName = new("MID_AND_MERCHANT_NAME");

    public TResult Match<TResult>(Func<TResult> onUnset,
        Func<TResult> onMidAndDate,
        Func<TResult> onMidAndMerchantName,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unset => onUnset(),
            _ when this == MidAndDate => onMidAndDate(),
            _ when this == MidAndMerchantName => onMidAndMerchantName(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnset, Action onMidAndDate, Action onMidAndMerchantName, Action<string> otherwise)
    {
        if (this == Unset) onUnset();
        else if (this == MidAndDate) onMidAndDate();
        else if (this == MidAndMerchantName) onMidAndMerchantName();
        else otherwise(Value);
    }
}
