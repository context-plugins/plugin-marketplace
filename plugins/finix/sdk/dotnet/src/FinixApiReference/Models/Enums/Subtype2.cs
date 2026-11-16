using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Additional information describing the <c>payment_type</c>.
/// <para>
/// For <see href="/api/disputes/listdisputesadjustments">dispute adjustment transfers</see> (<c>type: DISPUTE</c>):
/// - <c>MERCHANT_DEBIT</c>: Funds are pulled from the merchant(s) when a chargeback occurs. For split transactions, this creates <c>Split Transfers</c> with <c>type: DISPUTE_MERCHANT_DEBIT</c>.
/// - <c>MERCHANT_CREDIT</c>: Funds are returned to the merchant(s) when a <c>Dispute</c> is ruled in their favor. For split transactions, this creates <c>Split Transfers</c> with <c>type: DISPUTE_MERCHANT_CREDIT</c>.
/// </para>
/// <para>
/// For <see href="/guides/after-the-payment/refunds/pending-refunds">refund hold</see> adjustment transfers:
/// - <c>REFUND_MERCHANT_DEBIT_ADJUSTMENT</c>: Funds are pulled from the merchant to cover a held refund.
/// - <c>REFUND_MERCHANT_CREDIT_ADJUSTMENT</c>: Funds are returned to the merchant when the held refund is submitted or expires.
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Subtype2>))]
public sealed record Subtype2 : OpenStringEnum<Subtype2>
{
    private Subtype2(string value) : base(value)
    {
    }

    public static readonly Subtype2 Api = new("API");

    public static readonly Subtype2 Dispute = new("DISPUTE");

    public static readonly Subtype2 MerchantCredit = new("MERCHANT_CREDIT");

    public static readonly Subtype2 MerchantCreditAdjustment = new("MERCHANT_CREDIT_ADJUSTMENT");

    public static readonly Subtype2 MerchantDebit = new("MERCHANT_DEBIT");

    public static readonly Subtype2 MerchantDebitAdjustment = new("MERCHANT_DEBIT_ADJUSTMENT");

    public static readonly Subtype2 PlatformCredit = new("PLATFORM_CREDIT");

    public static readonly Subtype2 PlatformCreditAdjustment = new("PLATFORM_CREDIT_ADJUSTMENT");

    public static readonly Subtype2 PlatformDebit = new("PLATFORM_DEBIT");

    public static readonly Subtype2 PlatformDebitAdjustment = new("PLATFORM_DEBIT_ADJUSTMENT");

    public static readonly Subtype2 RefundMerchantCreditAdjustment = new("REFUND_MERCHANT_CREDIT_ADJUSTMENT");

    public static readonly Subtype2 RefundMerchantDebitAdjustment = new("REFUND_MERCHANT_DEBIT_ADJUSTMENT");

    public static readonly Subtype2 SettlementMerchant = new("SETTLEMENT_MERCHANT");

    public static readonly Subtype2 SettlementNoop = new("SETTLEMENT_NOOP");

    public static readonly Subtype2 SettlementPartner = new("SETTLEMENT_PARTNER");

    public static readonly Subtype2 SettlementPlatform = new("SETTLEMENT_PLATFORM");

    public static readonly Subtype2 SplitPayout = new("SPLIT_PAYOUT");

    public static readonly Subtype2 SplitPayoutAdjustment = new("SPLIT_PAYOUT_ADJUSTMENT");

    public static readonly Subtype2 System = new("SYSTEM");

    public TResult Match<TResult>(Func<TResult> onApi,
        Func<TResult> onDispute,
        Func<TResult> onMerchantCredit,
        Func<TResult> onMerchantCreditAdjustment,
        Func<TResult> onMerchantDebit,
        Func<TResult> onMerchantDebitAdjustment,
        Func<TResult> onPlatformCredit,
        Func<TResult> onPlatformCreditAdjustment,
        Func<TResult> onPlatformDebit,
        Func<TResult> onPlatformDebitAdjustment,
        Func<TResult> onRefundMerchantCreditAdjustment,
        Func<TResult> onRefundMerchantDebitAdjustment,
        Func<TResult> onSettlementMerchant,
        Func<TResult> onSettlementNoop,
        Func<TResult> onSettlementPartner,
        Func<TResult> onSettlementPlatform,
        Func<TResult> onSplitPayout,
        Func<TResult> onSplitPayoutAdjustment,
        Func<TResult> onSystem,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Api => onApi(),
            _ when this == Dispute => onDispute(),
            _ when this == MerchantCredit => onMerchantCredit(),
            _ when this == MerchantCreditAdjustment => onMerchantCreditAdjustment(),
            _ when this == MerchantDebit => onMerchantDebit(),
            _ when this == MerchantDebitAdjustment => onMerchantDebitAdjustment(),
            _ when this == PlatformCredit => onPlatformCredit(),
            _ when this == PlatformCreditAdjustment => onPlatformCreditAdjustment(),
            _ when this == PlatformDebit => onPlatformDebit(),
            _ when this == PlatformDebitAdjustment => onPlatformDebitAdjustment(),
            _ when this == RefundMerchantCreditAdjustment => onRefundMerchantCreditAdjustment(),
            _ when this == RefundMerchantDebitAdjustment => onRefundMerchantDebitAdjustment(),
            _ when this == SettlementMerchant => onSettlementMerchant(),
            _ when this == SettlementNoop => onSettlementNoop(),
            _ when this == SettlementPartner => onSettlementPartner(),
            _ when this == SettlementPlatform => onSettlementPlatform(),
            _ when this == SplitPayout => onSplitPayout(),
            _ when this == SplitPayoutAdjustment => onSplitPayoutAdjustment(),
            _ when this == System => onSystem(),
            _ => otherwise(Value)
        };

    public void Match(Action onApi,
        Action onDispute,
        Action onMerchantCredit,
        Action onMerchantCreditAdjustment,
        Action onMerchantDebit,
        Action onMerchantDebitAdjustment,
        Action onPlatformCredit,
        Action onPlatformCreditAdjustment,
        Action onPlatformDebit,
        Action onPlatformDebitAdjustment,
        Action onRefundMerchantCreditAdjustment,
        Action onRefundMerchantDebitAdjustment,
        Action onSettlementMerchant,
        Action onSettlementNoop,
        Action onSettlementPartner,
        Action onSettlementPlatform,
        Action onSplitPayout,
        Action onSplitPayoutAdjustment,
        Action onSystem,
        Action<string> otherwise)
    {
        if (this == Api) onApi();
        else if (this == Dispute) onDispute();
        else if (this == MerchantCredit) onMerchantCredit();
        else if (this == MerchantCreditAdjustment) onMerchantCreditAdjustment();
        else if (this == MerchantDebit) onMerchantDebit();
        else if (this == MerchantDebitAdjustment) onMerchantDebitAdjustment();
        else if (this == PlatformCredit) onPlatformCredit();
        else if (this == PlatformCreditAdjustment) onPlatformCreditAdjustment();
        else if (this == PlatformDebit) onPlatformDebit();
        else if (this == PlatformDebitAdjustment) onPlatformDebitAdjustment();
        else if (this == RefundMerchantCreditAdjustment) onRefundMerchantCreditAdjustment();
        else if (this == RefundMerchantDebitAdjustment) onRefundMerchantDebitAdjustment();
        else if (this == SettlementMerchant) onSettlementMerchant();
        else if (this == SettlementNoop) onSettlementNoop();
        else if (this == SettlementPartner) onSettlementPartner();
        else if (this == SettlementPlatform) onSettlementPlatform();
        else if (this == SplitPayout) onSplitPayout();
        else if (this == SplitPayoutAdjustment) onSplitPayoutAdjustment();
        else if (this == System) onSystem();
        else otherwise(Value);
    }
}
