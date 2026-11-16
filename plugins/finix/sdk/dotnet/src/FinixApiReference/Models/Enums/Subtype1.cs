using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The subtype of the <c>Settlement Entry</c>.
/// - <c>DISPUTE_MERCHANT_DEBIT</c>: A <c>Settlement Entry</c> for a <see href="/api/split-transfers">Split Transfer</see> created when a <see href="/api/disputes">Dispute</see> pulls funds from a merchant proportionally. Only applies when <c>entity_type</c> is <c>SPLIT_TRANSFER</c>.
/// - <c>DISPUTE_MERCHANT_CREDIT</c>: A <c>Settlement Entry</c> for a <c>Split Transfer</c> created when a <c>Dispute</c> is ruled in favor of the <see href="/api/merchants">Merchant</see> and funds are returned proportionally. Only applies when <c>entity_type</c> is <c>SPLIT_TRANSFER</c>.
/// - <c>REFUND_MERCHANT_DEBIT_ADJUSTMENT</c>: A <c>Settlement Entry</c> created to debit the refund amount from the merchant's settlement when a <see href="/guides/after-the-payment/refunds/pending-refunds">held refund</see> can't be covered. <c>parent_entity_id</c> contains the ID of the held refund.
/// - <c>REFUND_MERCHANT_CREDIT_ADJUSTMENT</c>: A <c>Settlement Entry</c> created to credit the refund amount back when a <see href="/guides/after-the-payment/refunds/pending-refunds">held refund</see> is submitted or expires. <c>parent_entity_id</c> contains the ID of the held refund.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Subtype1>))]
public sealed record Subtype1 : OpenStringEnum<Subtype1>
{
    private Subtype1(string value) : base(value)
    {
    }

    public static readonly Subtype1 Debit = new("DEBIT");

    public static readonly Subtype1 Credit = new("CREDIT");

    public static readonly Subtype1 Fee = new("FEE");

    public static readonly Subtype1 Reversal = new("REVERSAL");

    public static readonly Subtype1 Adjustment = new("ADJUSTMENT");

    public static readonly Subtype1 Dispute = new("DISPUTE");

    public static readonly Subtype1 DisputeMerchantDebit = new("DISPUTE_MERCHANT_DEBIT");

    public static readonly Subtype1 DisputeMerchantCredit = new("DISPUTE_MERCHANT_CREDIT");

    public static readonly Subtype1 RefundMerchantDebitAdjustment = new("REFUND_MERCHANT_DEBIT_ADJUSTMENT");

    public static readonly Subtype1 RefundMerchantCreditAdjustment = new("REFUND_MERCHANT_CREDIT_ADJUSTMENT");

    public static readonly Subtype1 Custom = new("CUSTOM");

    public TResult Match<TResult>(Func<TResult> onDebit,
        Func<TResult> onCredit,
        Func<TResult> onFee,
        Func<TResult> onReversal,
        Func<TResult> onAdjustment,
        Func<TResult> onDispute,
        Func<TResult> onDisputeMerchantDebit,
        Func<TResult> onDisputeMerchantCredit,
        Func<TResult> onRefundMerchantDebitAdjustment,
        Func<TResult> onRefundMerchantCreditAdjustment,
        Func<TResult> onCustom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Debit => onDebit(),
            _ when this == Credit => onCredit(),
            _ when this == Fee => onFee(),
            _ when this == Reversal => onReversal(),
            _ when this == Adjustment => onAdjustment(),
            _ when this == Dispute => onDispute(),
            _ when this == DisputeMerchantDebit => onDisputeMerchantDebit(),
            _ when this == DisputeMerchantCredit => onDisputeMerchantCredit(),
            _ when this == RefundMerchantDebitAdjustment => onRefundMerchantDebitAdjustment(),
            _ when this == RefundMerchantCreditAdjustment => onRefundMerchantCreditAdjustment(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onDebit,
        Action onCredit,
        Action onFee,
        Action onReversal,
        Action onAdjustment,
        Action onDispute,
        Action onDisputeMerchantDebit,
        Action onDisputeMerchantCredit,
        Action onRefundMerchantDebitAdjustment,
        Action onRefundMerchantCreditAdjustment,
        Action onCustom,
        Action<string> otherwise)
    {
        if (this == Debit) onDebit();
        else if (this == Credit) onCredit();
        else if (this == Fee) onFee();
        else if (this == Reversal) onReversal();
        else if (this == Adjustment) onAdjustment();
        else if (this == Dispute) onDispute();
        else if (this == DisputeMerchantDebit) onDisputeMerchantDebit();
        else if (this == DisputeMerchantCredit) onDisputeMerchantCredit();
        else if (this == RefundMerchantDebitAdjustment) onRefundMerchantDebitAdjustment();
        else if (this == RefundMerchantCreditAdjustment) onRefundMerchantCreditAdjustment();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
