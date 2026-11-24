using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ChargeStatus>))]
public sealed record ChargeStatus : OpenStringEnum<ChargeStatus>
{
    private ChargeStatus(string value) : base(value)
    {
    }

    public static readonly ChargeStatus Charged = new("charged");

    public static readonly ChargeStatus Skipped = new("skipped");

    public static readonly ChargeStatus InsufficientBalance = new("insufficient_balance");

    public static readonly ChargeStatus Test = new("test");

    public static readonly ChargeStatus Error = new("error");

    public TResult Match<TResult>(Func<TResult> onCharged,
        Func<TResult> onSkipped,
        Func<TResult> onInsufficientBalance,
        Func<TResult> onTest,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Charged => onCharged(),
            _ when this == Skipped => onSkipped(),
            _ when this == InsufficientBalance => onInsufficientBalance(),
            _ when this == Test => onTest(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onCharged,
        Action onSkipped,
        Action onInsufficientBalance,
        Action onTest,
        Action onError,
        Action<string> otherwise)
    {
        if (this == Charged) onCharged();
        else if (this == Skipped) onSkipped();
        else if (this == InsufficientBalance) onInsufficientBalance();
        else if (this == Test) onTest();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
