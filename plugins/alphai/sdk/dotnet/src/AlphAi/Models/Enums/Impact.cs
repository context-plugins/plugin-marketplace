using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

/// <summary>
/// The summary's read of the event for this ticker — an editorial call, not a price label.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Impact>))]
public sealed record Impact : OpenStringEnum<Impact>
{
    private Impact(string value) : base(value)
    {
    }

    public static readonly Impact Positive = new("positive");

    public static readonly Impact Negative = new("negative");

    public static readonly Impact Neutral = new("neutral");

    public TResult Match<TResult>(Func<TResult> onPositive,
        Func<TResult> onNegative,
        Func<TResult> onNeutral,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Positive => onPositive(),
            _ when this == Negative => onNegative(),
            _ when this == Neutral => onNeutral(),
            _ => otherwise(Value)
        };

    public void Match(Action onPositive, Action onNegative, Action onNeutral, Action<string> otherwise)
    {
        if (this == Positive) onPositive();
        else if (this == Negative) onNegative();
        else if (this == Neutral) onNeutral();
        else otherwise(Value);
    }
}
