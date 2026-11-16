using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The operation performed in the transaction. <c>REFUND_MERCHANT_DEBIT_ADJUSTMENT</c> and <c>REFUND_MERCHANT_CREDIT_ADJUSTMENT</c> are created by Finix for <see href="/guides/after-the-payment/refunds/pending-refunds">refund holds</see> and cannot be passed in requests.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OperationKey2>))]
public sealed record OperationKey2 : OpenStringEnum<OperationKey2>
{
    private OperationKey2(string value) : base(value)
    {
    }

    public static readonly OperationKey2 CardNotPresentCapture = new("CARD_NOT_PRESENT_CAPTURE");

    public static readonly OperationKey2 CardNotPresentRefund = new("CARD_NOT_PRESENT_REFUND");

    public static readonly OperationKey2 CardNotPresentSale = new("CARD_NOT_PRESENT_SALE");

    public static readonly OperationKey2 CardNotPresentUnreferencedRefund = new("CARD_NOT_PRESENT_UNREFERENCED_REFUND");

    public static readonly OperationKey2 CardPresentAuthorization = new("CARD_PRESENT_AUTHORIZATION");

    public static readonly OperationKey2 CardPresentDebit = new("CARD_PRESENT_DEBIT");

    public static readonly OperationKey2 CardPresentSale = new("CARD_PRESENT_SALE");

    public static readonly OperationKey2 CardPresentUnreferencedRefund = new("CARD_PRESENT_UNREFERENCED_REFUND");

    public static readonly OperationKey2 InstantApplicationFundingPullFromAch = new(
        "INSTANT_APPLICATION_FUNDING_PULL_FROM_ACH");

    public static readonly OperationKey2 InstantApplicationFundingPullFromCard = new(
        "INSTANT_APPLICATION_FUNDING_PULL_FROM_CARD");

    public static readonly OperationKey2 InstantApplicationFundingPullFromFedNow = new(
        "INSTANT_APPLICATION_FUNDING_PULL_FROM_FED_NOW");

    public static readonly OperationKey2 InstantApplicationFundingPullFromSameDayAch = new(
        "INSTANT_APPLICATION_FUNDING_PULL_FROM_SAME_DAY_ACH");

    public static readonly OperationKey2 InstantApplicationFundingPushToAch = new(
        "INSTANT_APPLICATION_FUNDING_PUSH_TO_ACH");

    public static readonly OperationKey2 InstantApplicationFundingPushToCard = new(
        "INSTANT_APPLICATION_FUNDING_PUSH_TO_CARD");

    public static readonly OperationKey2 InstantApplicationFundingPushToFedNow = new(
        "INSTANT_APPLICATION_FUNDING_PUSH_TO_FED_NOW");

    public static readonly OperationKey2 InstantApplicationFundingPushToSameDayAch = new(
        "INSTANT_APPLICATION_FUNDING_PUSH_TO_SAME_DAY_ACH");

    public static readonly OperationKey2 InstantMerchantFundingPullFromAch = new(
        "INSTANT_MERCHANT_FUNDING_PULL_FROM_ACH");

    public static readonly OperationKey2 InstantMerchantFundingPullFromFedNow = new(
        "INSTANT_MERCHANT_FUNDING_PULL_FROM_FED_NOW");

    public static readonly OperationKey2 InstantMerchantFundingPullFromSameDayAch = new(
        "INSTANT_MERCHANT_FUNDING_PULL_FROM_SAME_DAY_ACH");

    public static readonly OperationKey2 InstantMerchantFundingPushToAch = new("INSTANT_MERCHANT_FUNDING_PUSH_TO_ACH");

    public static readonly OperationKey2 InstantMerchantFundingPushToCard = new(
        "INSTANT_MERCHANT_FUNDING_PUSH_TO_CARD");

    public static readonly OperationKey2 InstantMerchantFundingPushToFedNow = new(
        "INSTANT_MERCHANT_FUNDING_PUSH_TO_FED_NOW");

    public static readonly OperationKey2 InstantMerchantFundingPushToSameDayAch = new(
        "INSTANT_MERCHANT_FUNDING_PUSH_TO_SAME_DAY_ACH");

    public static readonly OperationKey2 MerchantCreditAdjustment = new("MERCHANT_CREDIT_ADJUSTMENT");

    public static readonly OperationKey2 MerchantDebitAdjustment = new("MERCHANT_DEBIT_ADJUSTMENT");

    public static readonly OperationKey2 PullFromAch = new("PULL_FROM_ACH");

    public static readonly OperationKey2 PullFromCard = new("PULL_FROM_CARD");

    public static readonly OperationKey2 PullFromSameDayAch = new("PULL_FROM_SAME_DAY_ACH");

    public static readonly OperationKey2 PushToAch = new("PUSH_TO_ACH");

    public static readonly OperationKey2 PushToCard = new("PUSH_TO_CARD");

    public static readonly OperationKey2 PushToSameDayAch = new("PUSH_TO_SAME_DAY_ACH");

    public static readonly OperationKey2 RefundMerchantCreditAdjustment = new("REFUND_MERCHANT_CREDIT_ADJUSTMENT");

    public static readonly OperationKey2 RefundMerchantDebitAdjustment = new("REFUND_MERCHANT_DEBIT_ADJUSTMENT");

    public static readonly OperationKey2 Sale = new("SALE");

    public static readonly OperationKey2 StandardApplicationFundingPullFromAch = new(
        "STANDARD_APPLICATION_FUNDING_PULL_FROM_ACH");

    public static readonly OperationKey2 StandardApplicationFundingPullFromCard = new(
        "STANDARD_APPLICATION_FUNDING_PULL_FROM_CARD");

    public static readonly OperationKey2 StandardApplicationFundingPullFromSameDayAch = new(
        "STANDARD_APPLICATION_FUNDING_PULL_FROM_SAME_DAY_ACH");

    public static readonly OperationKey2 StandardApplicationFundingPushToAch = new(
        "STANDARD_APPLICATION_FUNDING_PUSH_TO_ACH");

    public static readonly OperationKey2 StandardApplicationFundingPushToCard = new(
        "STANDARD_APPLICATION_FUNDING_PUSH_TO_CARD");

    public static readonly OperationKey2 StandardApplicationFundingPushToSameDayAch = new(
        "STANDARD_APPLICATION_FUNDING_PUSH_TO_SAME_DAY_ACH");

    public static readonly OperationKey2 StandardMerchantFundingPullFromAch = new(
        "STANDARD_MERCHANT_FUNDING_PULL_FROM_ACH");

    public static readonly OperationKey2 StandardMerchantFundingPullFromCard = new(
        "STANDARD_MERCHANT_FUNDING_PULL_FROM_CARD");

    public static readonly OperationKey2 StandardMerchantFundingPullFromSameDayAch = new(
        "STANDARD_MERCHANT_FUNDING_PULL_FROM_SAME_DAY_ACH");

    public static readonly OperationKey2 StandardMerchantFundingPushToAch = new(
        "STANDARD_MERCHANT_FUNDING_PUSH_TO_ACH");

    public static readonly OperationKey2 StandardMerchantFundingPushToCard = new(
        "STANDARD_MERCHANT_FUNDING_PUSH_TO_CARD");

    public static readonly OperationKey2 StandardMerchantFundingPushToSameDayAch = new(
        "STANDARD_MERCHANT_FUNDING_PUSH_TO_SAME_DAY_ACH");

    public static readonly OperationKey2 UnreferencedRefund = new("UNREFERENCED_REFUND");

    public TResult Match<TResult>(Func<TResult> onCardNotPresentCapture,
        Func<TResult> onCardNotPresentRefund,
        Func<TResult> onCardNotPresentSale,
        Func<TResult> onCardNotPresentUnreferencedRefund,
        Func<TResult> onCardPresentAuthorization,
        Func<TResult> onCardPresentDebit,
        Func<TResult> onCardPresentSale,
        Func<TResult> onCardPresentUnreferencedRefund,
        Func<TResult> onInstantApplicationFundingPullFromAch,
        Func<TResult> onInstantApplicationFundingPullFromCard,
        Func<TResult> onInstantApplicationFundingPullFromFedNow,
        Func<TResult> onInstantApplicationFundingPullFromSameDayAch,
        Func<TResult> onInstantApplicationFundingPushToAch,
        Func<TResult> onInstantApplicationFundingPushToCard,
        Func<TResult> onInstantApplicationFundingPushToFedNow,
        Func<TResult> onInstantApplicationFundingPushToSameDayAch,
        Func<TResult> onInstantMerchantFundingPullFromAch,
        Func<TResult> onInstantMerchantFundingPullFromFedNow,
        Func<TResult> onInstantMerchantFundingPullFromSameDayAch,
        Func<TResult> onInstantMerchantFundingPushToAch,
        Func<TResult> onInstantMerchantFundingPushToCard,
        Func<TResult> onInstantMerchantFundingPushToFedNow,
        Func<TResult> onInstantMerchantFundingPushToSameDayAch,
        Func<TResult> onMerchantCreditAdjustment,
        Func<TResult> onMerchantDebitAdjustment,
        Func<TResult> onPullFromAch,
        Func<TResult> onPullFromCard,
        Func<TResult> onPullFromSameDayAch,
        Func<TResult> onPushToAch,
        Func<TResult> onPushToCard,
        Func<TResult> onPushToSameDayAch,
        Func<TResult> onRefundMerchantCreditAdjustment,
        Func<TResult> onRefundMerchantDebitAdjustment,
        Func<TResult> onSale,
        Func<TResult> onStandardApplicationFundingPullFromAch,
        Func<TResult> onStandardApplicationFundingPullFromCard,
        Func<TResult> onStandardApplicationFundingPullFromSameDayAch,
        Func<TResult> onStandardApplicationFundingPushToAch,
        Func<TResult> onStandardApplicationFundingPushToCard,
        Func<TResult> onStandardApplicationFundingPushToSameDayAch,
        Func<TResult> onStandardMerchantFundingPullFromAch,
        Func<TResult> onStandardMerchantFundingPullFromCard,
        Func<TResult> onStandardMerchantFundingPullFromSameDayAch,
        Func<TResult> onStandardMerchantFundingPushToAch,
        Func<TResult> onStandardMerchantFundingPushToCard,
        Func<TResult> onStandardMerchantFundingPushToSameDayAch,
        Func<TResult> onUnreferencedRefund,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CardNotPresentCapture => onCardNotPresentCapture(),
            _ when this == CardNotPresentRefund => onCardNotPresentRefund(),
            _ when this == CardNotPresentSale => onCardNotPresentSale(),
            _ when this == CardNotPresentUnreferencedRefund => onCardNotPresentUnreferencedRefund(),
            _ when this == CardPresentAuthorization => onCardPresentAuthorization(),
            _ when this == CardPresentDebit => onCardPresentDebit(),
            _ when this == CardPresentSale => onCardPresentSale(),
            _ when this == CardPresentUnreferencedRefund => onCardPresentUnreferencedRefund(),
            _ when this == InstantApplicationFundingPullFromAch => onInstantApplicationFundingPullFromAch(),
            _ when this == InstantApplicationFundingPullFromCard => onInstantApplicationFundingPullFromCard(),
            _ when this == InstantApplicationFundingPullFromFedNow => onInstantApplicationFundingPullFromFedNow(),
            _ when this ==
                InstantApplicationFundingPullFromSameDayAch => onInstantApplicationFundingPullFromSameDayAch(),
            _ when this == InstantApplicationFundingPushToAch => onInstantApplicationFundingPushToAch(),
            _ when this == InstantApplicationFundingPushToCard => onInstantApplicationFundingPushToCard(),
            _ when this == InstantApplicationFundingPushToFedNow => onInstantApplicationFundingPushToFedNow(),
            _ when this == InstantApplicationFundingPushToSameDayAch => onInstantApplicationFundingPushToSameDayAch(),
            _ when this == InstantMerchantFundingPullFromAch => onInstantMerchantFundingPullFromAch(),
            _ when this == InstantMerchantFundingPullFromFedNow => onInstantMerchantFundingPullFromFedNow(),
            _ when this == InstantMerchantFundingPullFromSameDayAch => onInstantMerchantFundingPullFromSameDayAch(),
            _ when this == InstantMerchantFundingPushToAch => onInstantMerchantFundingPushToAch(),
            _ when this == InstantMerchantFundingPushToCard => onInstantMerchantFundingPushToCard(),
            _ when this == InstantMerchantFundingPushToFedNow => onInstantMerchantFundingPushToFedNow(),
            _ when this == InstantMerchantFundingPushToSameDayAch => onInstantMerchantFundingPushToSameDayAch(),
            _ when this == MerchantCreditAdjustment => onMerchantCreditAdjustment(),
            _ when this == MerchantDebitAdjustment => onMerchantDebitAdjustment(),
            _ when this == PullFromAch => onPullFromAch(),
            _ when this == PullFromCard => onPullFromCard(),
            _ when this == PullFromSameDayAch => onPullFromSameDayAch(),
            _ when this == PushToAch => onPushToAch(),
            _ when this == PushToCard => onPushToCard(),
            _ when this == PushToSameDayAch => onPushToSameDayAch(),
            _ when this == RefundMerchantCreditAdjustment => onRefundMerchantCreditAdjustment(),
            _ when this == RefundMerchantDebitAdjustment => onRefundMerchantDebitAdjustment(),
            _ when this == Sale => onSale(),
            _ when this == StandardApplicationFundingPullFromAch => onStandardApplicationFundingPullFromAch(),
            _ when this == StandardApplicationFundingPullFromCard => onStandardApplicationFundingPullFromCard(),
            _ when this ==
                StandardApplicationFundingPullFromSameDayAch => onStandardApplicationFundingPullFromSameDayAch(),
            _ when this == StandardApplicationFundingPushToAch => onStandardApplicationFundingPushToAch(),
            _ when this == StandardApplicationFundingPushToCard => onStandardApplicationFundingPushToCard(),
            _ when this == StandardApplicationFundingPushToSameDayAch => onStandardApplicationFundingPushToSameDayAch(),
            _ when this == StandardMerchantFundingPullFromAch => onStandardMerchantFundingPullFromAch(),
            _ when this == StandardMerchantFundingPullFromCard => onStandardMerchantFundingPullFromCard(),
            _ when this == StandardMerchantFundingPullFromSameDayAch => onStandardMerchantFundingPullFromSameDayAch(),
            _ when this == StandardMerchantFundingPushToAch => onStandardMerchantFundingPushToAch(),
            _ when this == StandardMerchantFundingPushToCard => onStandardMerchantFundingPushToCard(),
            _ when this == StandardMerchantFundingPushToSameDayAch => onStandardMerchantFundingPushToSameDayAch(),
            _ when this == UnreferencedRefund => onUnreferencedRefund(),
            _ => otherwise(Value)
        };

    public void Match(Action onCardNotPresentCapture,
        Action onCardNotPresentRefund,
        Action onCardNotPresentSale,
        Action onCardNotPresentUnreferencedRefund,
        Action onCardPresentAuthorization,
        Action onCardPresentDebit,
        Action onCardPresentSale,
        Action onCardPresentUnreferencedRefund,
        Action onInstantApplicationFundingPullFromAch,
        Action onInstantApplicationFundingPullFromCard,
        Action onInstantApplicationFundingPullFromFedNow,
        Action onInstantApplicationFundingPullFromSameDayAch,
        Action onInstantApplicationFundingPushToAch,
        Action onInstantApplicationFundingPushToCard,
        Action onInstantApplicationFundingPushToFedNow,
        Action onInstantApplicationFundingPushToSameDayAch,
        Action onInstantMerchantFundingPullFromAch,
        Action onInstantMerchantFundingPullFromFedNow,
        Action onInstantMerchantFundingPullFromSameDayAch,
        Action onInstantMerchantFundingPushToAch,
        Action onInstantMerchantFundingPushToCard,
        Action onInstantMerchantFundingPushToFedNow,
        Action onInstantMerchantFundingPushToSameDayAch,
        Action onMerchantCreditAdjustment,
        Action onMerchantDebitAdjustment,
        Action onPullFromAch,
        Action onPullFromCard,
        Action onPullFromSameDayAch,
        Action onPushToAch,
        Action onPushToCard,
        Action onPushToSameDayAch,
        Action onRefundMerchantCreditAdjustment,
        Action onRefundMerchantDebitAdjustment,
        Action onSale,
        Action onStandardApplicationFundingPullFromAch,
        Action onStandardApplicationFundingPullFromCard,
        Action onStandardApplicationFundingPullFromSameDayAch,
        Action onStandardApplicationFundingPushToAch,
        Action onStandardApplicationFundingPushToCard,
        Action onStandardApplicationFundingPushToSameDayAch,
        Action onStandardMerchantFundingPullFromAch,
        Action onStandardMerchantFundingPullFromCard,
        Action onStandardMerchantFundingPullFromSameDayAch,
        Action onStandardMerchantFundingPushToAch,
        Action onStandardMerchantFundingPushToCard,
        Action onStandardMerchantFundingPushToSameDayAch,
        Action onUnreferencedRefund,
        Action<string> otherwise)
    {
        if (this == CardNotPresentCapture) onCardNotPresentCapture();
        else if (this == CardNotPresentRefund) onCardNotPresentRefund();
        else if (this == CardNotPresentSale) onCardNotPresentSale();
        else if (this == CardNotPresentUnreferencedRefund) onCardNotPresentUnreferencedRefund();
        else if (this == CardPresentAuthorization) onCardPresentAuthorization();
        else if (this == CardPresentDebit) onCardPresentDebit();
        else if (this == CardPresentSale) onCardPresentSale();
        else if (this == CardPresentUnreferencedRefund) onCardPresentUnreferencedRefund();
        else if (this == InstantApplicationFundingPullFromAch) onInstantApplicationFundingPullFromAch();
        else if (this == InstantApplicationFundingPullFromCard) onInstantApplicationFundingPullFromCard();
        else if (this == InstantApplicationFundingPullFromFedNow) onInstantApplicationFundingPullFromFedNow();
        else if (this == InstantApplicationFundingPullFromSameDayAch) onInstantApplicationFundingPullFromSameDayAch();
        else if (this == InstantApplicationFundingPushToAch) onInstantApplicationFundingPushToAch();
        else if (this == InstantApplicationFundingPushToCard) onInstantApplicationFundingPushToCard();
        else if (this == InstantApplicationFundingPushToFedNow) onInstantApplicationFundingPushToFedNow();
        else if (this == InstantApplicationFundingPushToSameDayAch) onInstantApplicationFundingPushToSameDayAch();
        else if (this == InstantMerchantFundingPullFromAch) onInstantMerchantFundingPullFromAch();
        else if (this == InstantMerchantFundingPullFromFedNow) onInstantMerchantFundingPullFromFedNow();
        else if (this == InstantMerchantFundingPullFromSameDayAch) onInstantMerchantFundingPullFromSameDayAch();
        else if (this == InstantMerchantFundingPushToAch) onInstantMerchantFundingPushToAch();
        else if (this == InstantMerchantFundingPushToCard) onInstantMerchantFundingPushToCard();
        else if (this == InstantMerchantFundingPushToFedNow) onInstantMerchantFundingPushToFedNow();
        else if (this == InstantMerchantFundingPushToSameDayAch) onInstantMerchantFundingPushToSameDayAch();
        else if (this == MerchantCreditAdjustment) onMerchantCreditAdjustment();
        else if (this == MerchantDebitAdjustment) onMerchantDebitAdjustment();
        else if (this == PullFromAch) onPullFromAch();
        else if (this == PullFromCard) onPullFromCard();
        else if (this == PullFromSameDayAch) onPullFromSameDayAch();
        else if (this == PushToAch) onPushToAch();
        else if (this == PushToCard) onPushToCard();
        else if (this == PushToSameDayAch) onPushToSameDayAch();
        else if (this == RefundMerchantCreditAdjustment) onRefundMerchantCreditAdjustment();
        else if (this == RefundMerchantDebitAdjustment) onRefundMerchantDebitAdjustment();
        else if (this == Sale) onSale();
        else if (this == StandardApplicationFundingPullFromAch) onStandardApplicationFundingPullFromAch();
        else if (this == StandardApplicationFundingPullFromCard) onStandardApplicationFundingPullFromCard();
        else if (this == StandardApplicationFundingPullFromSameDayAch) onStandardApplicationFundingPullFromSameDayAch();
        else if (this == StandardApplicationFundingPushToAch) onStandardApplicationFundingPushToAch();
        else if (this == StandardApplicationFundingPushToCard) onStandardApplicationFundingPushToCard();
        else if (this == StandardApplicationFundingPushToSameDayAch) onStandardApplicationFundingPushToSameDayAch();
        else if (this == StandardMerchantFundingPullFromAch) onStandardMerchantFundingPullFromAch();
        else if (this == StandardMerchantFundingPullFromCard) onStandardMerchantFundingPullFromCard();
        else if (this == StandardMerchantFundingPullFromSameDayAch) onStandardMerchantFundingPullFromSameDayAch();
        else if (this == StandardMerchantFundingPushToAch) onStandardMerchantFundingPushToAch();
        else if (this == StandardMerchantFundingPushToCard) onStandardMerchantFundingPushToCard();
        else if (this == StandardMerchantFundingPushToSameDayAch) onStandardMerchantFundingPushToSameDayAch();
        else if (this == UnreferencedRefund) onUnreferencedRefund();
        else otherwise(Value);
    }
}
