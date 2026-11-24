using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The sentiment detected in the document.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sentiment>))]
public sealed record Sentiment : OpenStringEnum<Sentiment>
{
    private Sentiment(string value) : base(value)
    {
    }

    public static readonly Sentiment Positive = new("POSITIVE");

    public static readonly Sentiment Negative = new("NEGATIVE");

    public static readonly Sentiment Neutral = new("NEUTRAL");

    public static readonly Sentiment Mixed = new("MIXED");

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
