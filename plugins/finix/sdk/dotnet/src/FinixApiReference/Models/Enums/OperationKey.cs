using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details the operation that's performed in the transaction.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OperationKey>))]
public sealed record OperationKey : OpenStringEnum<OperationKey>
{
    private OperationKey(string value) : base(value)
    {
    }

    public static readonly OperationKey PushToCard = new("PUSH_TO_CARD");

    public static readonly OperationKey PullFromCard = new("PULL_FROM_CARD");

    public static readonly OperationKey CardPresentSale = new("CARD_PRESENT_SALE");

    public static readonly OperationKey CardPresentUnreferencedRefund = new("CARD_PRESENT_UNREFERENCED_REFUND");

    public static readonly OperationKey CardNotPresentSale = new("CARD_NOT_PRESENT_SALE");

    public static readonly OperationKey CardNotPresentCapture = new("CARD_NOT_PRESENT_CAPTURE");

    public static readonly OperationKey Sale = new("SALE");

    public static readonly OperationKey UnreferencedRefund = new("UNREFERENCED_REFUND");

    public static readonly OperationKey MerchantCreditAdjustment = new("MERCHANT_CREDIT_ADJUSTMENT");

    public static readonly OperationKey MerchantDebitAdjustment = new("MERCHANT_DEBIT_ADJUSTMENT");

    public TResult Match<TResult>(Func<TResult> onPushToCard,
        Func<TResult> onPullFromCard,
        Func<TResult> onCardPresentSale,
        Func<TResult> onCardPresentUnreferencedRefund,
        Func<TResult> onCardNotPresentSale,
        Func<TResult> onCardNotPresentCapture,
        Func<TResult> onSale,
        Func<TResult> onUnreferencedRefund,
        Func<TResult> onMerchantCreditAdjustment,
        Func<TResult> onMerchantDebitAdjustment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PushToCard => onPushToCard(),
            _ when this == PullFromCard => onPullFromCard(),
            _ when this == CardPresentSale => onCardPresentSale(),
            _ when this == CardPresentUnreferencedRefund => onCardPresentUnreferencedRefund(),
            _ when this == CardNotPresentSale => onCardNotPresentSale(),
            _ when this == CardNotPresentCapture => onCardNotPresentCapture(),
            _ when this == Sale => onSale(),
            _ when this == UnreferencedRefund => onUnreferencedRefund(),
            _ when this == MerchantCreditAdjustment => onMerchantCreditAdjustment(),
            _ when this == MerchantDebitAdjustment => onMerchantDebitAdjustment(),
            _ => otherwise(Value)
        };

    public void Match(Action onPushToCard,
        Action onPullFromCard,
        Action onCardPresentSale,
        Action onCardPresentUnreferencedRefund,
        Action onCardNotPresentSale,
        Action onCardNotPresentCapture,
        Action onSale,
        Action onUnreferencedRefund,
        Action onMerchantCreditAdjustment,
        Action onMerchantDebitAdjustment,
        Action<string> otherwise)
    {
        if (this == PushToCard) onPushToCard();
        else if (this == PullFromCard) onPullFromCard();
        else if (this == CardPresentSale) onCardPresentSale();
        else if (this == CardPresentUnreferencedRefund) onCardPresentUnreferencedRefund();
        else if (this == CardNotPresentSale) onCardNotPresentSale();
        else if (this == CardNotPresentCapture) onCardNotPresentCapture();
        else if (this == Sale) onSale();
        else if (this == UnreferencedRefund) onUnreferencedRefund();
        else if (this == MerchantCreditAdjustment) onMerchantCreditAdjustment();
        else if (this == MerchantDebitAdjustment) onMerchantDebitAdjustment();
        else otherwise(Value);
    }
}
