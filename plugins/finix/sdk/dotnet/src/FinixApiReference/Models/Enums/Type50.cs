using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type50>))]
public sealed record Type50 : OpenStringEnum<Type50>
{
    private Type50(string value) : base(value)
    {
    }

    public static readonly Type50 BalanceTopUpAch = new("BALANCE_TOP_UP_ACH");

    public static readonly Type50 BalanceWithdrawalAch = new("BALANCE_WITHDRAWAL_ACH");

    public static readonly Type50 ManualBalanceAdjustmentDecrease = new("MANUAL_BALANCE_ADJUSTMENT_DECREASE");

    public static readonly Type50 ManualBalanceAdjustmentIncrease = new("MANUAL_BALANCE_ADJUSTMENT_INCREASE");

    public static readonly Type50 PullFromAch = new("PULL_FROM_ACH");

    public static readonly Type50 PullFromCard = new("PULL_FROM_CARD");

    public static readonly Type50 PullFromSameDayAch = new("PULL_FROM_SAME_DAY_ACH");

    public static readonly Type50 PushToAch = new("PUSH_TO_ACH");

    public static readonly Type50 PushToCard = new("PUSH_TO_CARD");

    public static readonly Type50 PushToSameDayAch = new("PUSH_TO_SAME_DAY_ACH");

    public TResult Match<TResult>(Func<TResult> onBalanceTopUpAch,
        Func<TResult> onBalanceWithdrawalAch,
        Func<TResult> onManualBalanceAdjustmentDecrease,
        Func<TResult> onManualBalanceAdjustmentIncrease,
        Func<TResult> onPullFromAch,
        Func<TResult> onPullFromCard,
        Func<TResult> onPullFromSameDayAch,
        Func<TResult> onPushToAch,
        Func<TResult> onPushToCard,
        Func<TResult> onPushToSameDayAch,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BalanceTopUpAch => onBalanceTopUpAch(),
            _ when this == BalanceWithdrawalAch => onBalanceWithdrawalAch(),
            _ when this == ManualBalanceAdjustmentDecrease => onManualBalanceAdjustmentDecrease(),
            _ when this == ManualBalanceAdjustmentIncrease => onManualBalanceAdjustmentIncrease(),
            _ when this == PullFromAch => onPullFromAch(),
            _ when this == PullFromCard => onPullFromCard(),
            _ when this == PullFromSameDayAch => onPullFromSameDayAch(),
            _ when this == PushToAch => onPushToAch(),
            _ when this == PushToCard => onPushToCard(),
            _ when this == PushToSameDayAch => onPushToSameDayAch(),
            _ => otherwise(Value)
        };

    public void Match(Action onBalanceTopUpAch,
        Action onBalanceWithdrawalAch,
        Action onManualBalanceAdjustmentDecrease,
        Action onManualBalanceAdjustmentIncrease,
        Action onPullFromAch,
        Action onPullFromCard,
        Action onPullFromSameDayAch,
        Action onPushToAch,
        Action onPushToCard,
        Action onPushToSameDayAch,
        Action<string> otherwise)
    {
        if (this == BalanceTopUpAch) onBalanceTopUpAch();
        else if (this == BalanceWithdrawalAch) onBalanceWithdrawalAch();
        else if (this == ManualBalanceAdjustmentDecrease) onManualBalanceAdjustmentDecrease();
        else if (this == ManualBalanceAdjustmentIncrease) onManualBalanceAdjustmentIncrease();
        else if (this == PullFromAch) onPullFromAch();
        else if (this == PullFromCard) onPullFromCard();
        else if (this == PullFromSameDayAch) onPullFromSameDayAch();
        else if (this == PushToAch) onPushToAch();
        else if (this == PushToCard) onPushToCard();
        else if (this == PushToSameDayAch) onPushToSameDayAch();
        else otherwise(Value);
    }
}
