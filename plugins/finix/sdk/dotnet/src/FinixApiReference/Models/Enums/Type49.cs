using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of <c>Split Transfer</c>.
/// - <c>DEBIT</c>: Standard <c>Split Transfer</c> from a split transaction where the parent <c>Transfer</c> debits the buyer's card.
/// - <c>DISPUTE_MERCHANT_DEBIT</c>: A <c>Split Transfer</c> created when a <see href="/api/disputes">Dispute</see> pulls funds from merchants proportionally. Created when the parent <see href="/api/disputes/listdisputesadjustments">adjustment transfer</see> has <c>type: DISPUTE</c> and <c>subtype: MERCHANT_DEBIT</c>.
/// - <c>DISPUTE_MERCHANT_CREDIT</c>: A <c>Split Transfer</c> created when a <c>Dispute</c> is ruled in favor of the <see href="/api/merchants">Merchant</see> and funds are returned proportionally. Created when the parent adjustment <c>Transfer</c> has <c>type: DISPUTE</c> and <c>subtype: MERCHANT_CREDIT</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type49>))]
public sealed record Type49 : OpenStringEnum<Type49>
{
    private Type49(string value) : base(value)
    {
    }

    public static readonly Type49 Debit = new("DEBIT");

    public static readonly Type49 DisputeMerchantDebit = new("DISPUTE_MERCHANT_DEBIT");

    public static readonly Type49 DisputeMerchantCredit = new("DISPUTE_MERCHANT_CREDIT");

    public TResult Match<TResult>(Func<TResult> onDebit,
        Func<TResult> onDisputeMerchantDebit,
        Func<TResult> onDisputeMerchantCredit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Debit => onDebit(),
            _ when this == DisputeMerchantDebit => onDisputeMerchantDebit(),
            _ when this == DisputeMerchantCredit => onDisputeMerchantCredit(),
            _ => otherwise(Value)
        };

    public void Match(Action onDebit,
        Action onDisputeMerchantDebit,
        Action onDisputeMerchantCredit,
        Action<string> otherwise)
    {
        if (this == Debit) onDebit();
        else if (this == DisputeMerchantDebit) onDisputeMerchantDebit();
        else if (this == DisputeMerchantCredit) onDisputeMerchantCredit();
        else otherwise(Value);
    }
}
