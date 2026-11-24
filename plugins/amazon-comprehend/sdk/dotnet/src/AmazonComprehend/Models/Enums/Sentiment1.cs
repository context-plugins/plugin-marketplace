using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The sentiment of the mention.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sentiment1>))]
public sealed record Sentiment1 : OpenStringEnum<Sentiment1>
{
    private Sentiment1(string value) : base(value)
    {
    }

    public static readonly Sentiment1 Positive = new("POSITIVE");

    public static readonly Sentiment1 Negative = new("NEGATIVE");

    public static readonly Sentiment1 Neutral = new("NEUTRAL");

    public static readonly Sentiment1 Mixed = new("MIXED");

    public TResult Match<TResult>(Func<TResult> onPositive,
        Func<TResult> onNegative,
        Func<TResult> onNeutral,
        Func<TResult> onMixed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Positive => onPositive(),
            _ when this == Negative => onNegative(),
            _ when this == Neutral => onNeutral(),
            _ when this == Mixed => onMixed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPositive, Action onNegative, Action onNeutral, Action onMixed, Action<string> otherwise)
    {
        if (this == Positive) onPositive();
        else if (this == Negative) onNegative();
        else if (this == Neutral) onNeutral();
        else if (this == Mixed) onMixed();
        else otherwise(Value);
    }
}
