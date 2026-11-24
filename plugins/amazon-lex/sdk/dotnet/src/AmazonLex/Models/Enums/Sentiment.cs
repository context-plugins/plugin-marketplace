using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The overall sentiment expressed in the user's response. This is the sentiment most likely expressed by the user based on the analysis by Amazon Comprehend.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sentiment>))]
public sealed record Sentiment : OpenStringEnum<Sentiment>
{
    private Sentiment(string value) : base(value)
    {
    }

    public static readonly Sentiment Mixed = new("MIXED");

    public static readonly Sentiment Negative = new("NEGATIVE");

    public static readonly Sentiment Neutral = new("NEUTRAL");

    public static readonly Sentiment Positive = new("POSITIVE");

    public TResult Match<TResult>(Func<TResult> onMixed,
        Func<TResult> onNegative,
        Func<TResult> onNeutral,
        Func<TResult> onPositive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mixed => onMixed(),
            _ when this == Negative => onNegative(),
            _ when this == Neutral => onNeutral(),
            _ when this == Positive => onPositive(),
            _ => otherwise(Value)
        };

    public void Match(Action onMixed, Action onNegative, Action onNeutral, Action onPositive, Action<string> otherwise)
    {
        if (this == Mixed) onMixed();
        else if (this == Negative) onNegative();
        else if (this == Neutral) onNeutral();
        else if (this == Positive) onPositive();
        else otherwise(Value);
    }
}
