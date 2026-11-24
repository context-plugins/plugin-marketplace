using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Sentiment>))]
public sealed record Sentiment : OpenStringEnum<Sentiment>
{
    private Sentiment(string value) : base(value)
    {
    }

    public static readonly Sentiment Positive = new("positive");

    public static readonly Sentiment Neutral = new("neutral");

    public static readonly Sentiment Negative = new("negative");

    public TResult Match<TResult>(Func<TResult> onPositive,
        Func<TResult> onNeutral,
        Func<TResult> onNegative,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Positive => onPositive(),
            _ when this == Neutral => onNeutral(),
            _ when this == Negative => onNegative(),
            _ => otherwise(Value)
        };

    public void Match(Action onPositive, Action onNeutral, Action onNegative, Action<string> otherwise)
    {
        if (this == Positive) onPositive();
        else if (this == Neutral) onNeutral();
        else if (this == Negative) onNegative();
        else otherwise(Value);
    }
}
