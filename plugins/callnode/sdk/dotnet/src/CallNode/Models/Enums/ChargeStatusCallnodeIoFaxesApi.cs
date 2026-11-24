using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ChargeStatusCallnodeIoFaxesApi>))]
public sealed record ChargeStatusCallnodeIoFaxesApi : OpenStringEnum<ChargeStatusCallnodeIoFaxesApi>
{
    private ChargeStatusCallnodeIoFaxesApi(string value) : base(value)
    {
    }

    public static readonly ChargeStatusCallnodeIoFaxesApi Charged = new("charged");

    public static readonly ChargeStatusCallnodeIoFaxesApi Unpriced = new("unpriced");

    public static readonly ChargeStatusCallnodeIoFaxesApi InsufficientBalance = new("insufficient_balance");

    public static readonly ChargeStatusCallnodeIoFaxesApi Skipped = new("skipped");

    public static readonly ChargeStatusCallnodeIoFaxesApi Test = new("test");

    public TResult Match<TResult>(Func<TResult> onCharged,
        Func<TResult> onUnpriced,
        Func<TResult> onInsufficientBalance,
        Func<TResult> onSkipped,
        Func<TResult> onTest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Charged => onCharged(),
            _ when this == Unpriced => onUnpriced(),
            _ when this == InsufficientBalance => onInsufficientBalance(),
            _ when this == Skipped => onSkipped(),
            _ when this == Test => onTest(),
            _ => otherwise(Value)
        };

    public void Match(Action onCharged,
        Action onUnpriced,
        Action onInsufficientBalance,
        Action onSkipped,
        Action onTest,
        Action<string> otherwise)
    {
        if (this == Charged) onCharged();
        else if (this == Unpriced) onUnpriced();
        else if (this == InsufficientBalance) onInsufficientBalance();
        else if (this == Skipped) onSkipped();
        else if (this == Test) onTest();
        else otherwise(Value);
    }
}
