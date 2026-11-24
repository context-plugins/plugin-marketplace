using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Hard = new("hard");

    public static readonly Kind Negative = new("negative");

    public static readonly Kind Positive = new("positive");

    public static readonly Kind Info = new("info");

    public static readonly Kind Skipped = new("skipped");

    public TResult Match<TResult>(Func<TResult> onHard,
        Func<TResult> onNegative,
        Func<TResult> onPositive,
        Func<TResult> onInfo,
        Func<TResult> onSkipped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Hard => onHard(),
            _ when this == Negative => onNegative(),
            _ when this == Positive => onPositive(),
            _ when this == Info => onInfo(),
            _ when this == Skipped => onSkipped(),
            _ => otherwise(Value)
        };

    public void Match(Action onHard,
        Action onNegative,
        Action onPositive,
        Action onInfo,
        Action onSkipped,
        Action<string> otherwise)
    {
        if (this == Hard) onHard();
        else if (this == Negative) onNegative();
        else if (this == Positive) onPositive();
        else if (this == Info) onInfo();
        else if (this == Skipped) onSkipped();
        else otherwise(Value);
    }
}
