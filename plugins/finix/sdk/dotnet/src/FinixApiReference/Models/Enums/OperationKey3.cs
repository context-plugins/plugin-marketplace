using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details the operation that is be performed in the transaction.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OperationKey3>))]
public sealed record OperationKey3 : OpenStringEnum<OperationKey3>
{
    private OperationKey3(string value) : base(value)
    {
    }

    public static readonly OperationKey3 CardNotPresentSale = new("CARD_NOT_PRESENT_SALE");

    public static readonly OperationKey3 CardNotPresentUnreferencedRefund = new("CARD_NOT_PRESENT_UNREFERENCED_REFUND");

    public static readonly OperationKey3 CardPresentDebit = new("CARD_PRESENT_DEBIT");

    public static readonly OperationKey3 CardPresentSale = new("CARD_PRESENT_SALE");

    public static readonly OperationKey3 CardPresentUnreferencedRefund = new("CARD_PRESENT_UNREFERENCED_REFUND");

    public static readonly OperationKey3 MerchantCreditAdjustment = new("MERCHANT_CREDIT_ADJUSTMENT");

    public static readonly OperationKey3 MerchantDebitAdjustment = new("MERCHANT_DEBIT_ADJUSTMENT");

    public static readonly OperationKey3 PullFromCard = new("PULL_FROM_CARD");

    public static readonly OperationKey3 PushToAch = new("PUSH_TO_ACH");

    public static readonly OperationKey3 PushToCard = new("PUSH_TO_CARD");

    public static readonly OperationKey3 PushToSameDayAch = new("PUSH_TO_SAME_DAY_ACH");

    public static readonly OperationKey3 Sale = new("SALE");

    public static readonly OperationKey3 UnreferencedRefund = new("UNREFERENCED_REFUND");

    public TResult Match<TResult>(Func<TResult> onCardNotPresentSale,
        Func<TResult> onCardNotPresentUnreferencedRefund,
        Func<TResult> onCardPresentDebit,
        Func<TResult> onCardPresentSale,
        Func<TResult> onCardPresentUnreferencedRefund,
        Func<TResult> onMerchantCreditAdjustment,
        Func<TResult> onMerchantDebitAdjustment,
        Func<TResult> onPullFromCard,
        Func<TResult> onPushToAch,
        Func<TResult> onPushToCard,
        Func<TResult> onPushToSameDayAch,
        Func<TResult> onSale,
        Func<TResult> onUnreferencedRefund,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CardNotPresentSale => onCardNotPresentSale(),
            _ when this == CardNotPresentUnreferencedRefund => onCardNotPresentUnreferencedRefund(),
            _ when this == CardPresentDebit => onCardPresentDebit(),
            _ when this == CardPresentSale => onCardPresentSale(),
            _ when this == CardPresentUnreferencedRefund => onCardPresentUnreferencedRefund(),
            _ when this == MerchantCreditAdjustment => onMerchantCreditAdjustment(),
            _ when this == MerchantDebitAdjustment => onMerchantDebitAdjustment(),
            _ when this == PullFromCard => onPullFromCard(),
            _ when this == PushToAch => onPushToAch(),
            _ when this == PushToCard => onPushToCard(),
            _ when this == PushToSameDayAch => onPushToSameDayAch(),
            _ when this == Sale => onSale(),
            _ when this == UnreferencedRefund => onUnreferencedRefund(),
            _ => otherwise(Value)
        };

    public void Match(Action onCardNotPresentSale,
        Action onCardNotPresentUnreferencedRefund,
        Action onCardPresentDebit,
        Action onCardPresentSale,
        Action onCardPresentUnreferencedRefund,
        Action onMerchantCreditAdjustment,
        Action onMerchantDebitAdjustment,
        Action onPullFromCard,
        Action onPushToAch,
        Action onPushToCard,
        Action onPushToSameDayAch,
        Action onSale,
        Action onUnreferencedRefund,
        Action<string> otherwise)
    {
        if (this == CardNotPresentSale) onCardNotPresentSale();
        else if (this == CardNotPresentUnreferencedRefund) onCardNotPresentUnreferencedRefund();
        else if (this == CardPresentDebit) onCardPresentDebit();
        else if (this == CardPresentSale) onCardPresentSale();
        else if (this == CardPresentUnreferencedRefund) onCardPresentUnreferencedRefund();
        else if (this == MerchantCreditAdjustment) onMerchantCreditAdjustment();
        else if (this == MerchantDebitAdjustment) onMerchantDebitAdjustment();
        else if (this == PullFromCard) onPullFromCard();
        else if (this == PushToAch) onPushToAch();
        else if (this == PushToCard) onPushToCard();
        else if (this == PushToSameDayAch) onPushToSameDayAch();
        else if (this == Sale) onSale();
        else if (this == UnreferencedRefund) onUnreferencedRefund();
        else otherwise(Value);
    }
}
