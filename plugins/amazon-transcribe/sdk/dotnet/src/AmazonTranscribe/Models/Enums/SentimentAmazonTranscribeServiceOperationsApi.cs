using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the sentiment that was detected in the specified segment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SentimentAmazonTranscribeServiceOperationsApi>))]
public sealed record SentimentAmazonTranscribeServiceOperationsApi : OpenStringEnum<SentimentAmazonTranscribeServiceOperationsApi>
{
    private SentimentAmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly SentimentAmazonTranscribeServiceOperationsApi Positive = new("POSITIVE");

    public static readonly SentimentAmazonTranscribeServiceOperationsApi Negative = new("NEGATIVE");

    public static readonly SentimentAmazonTranscribeServiceOperationsApi Mixed = new("MIXED");

    public static readonly SentimentAmazonTranscribeServiceOperationsApi Neutral = new("NEUTRAL");

    public TResult Match<TResult>(Func<TResult> onPositive,
        Func<TResult> onNegative,
        Func<TResult> onMixed,
        Func<TResult> onNeutral,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Positive => onPositive(),
            _ when this == Negative => onNegative(),
            _ when this == Mixed => onMixed(),
            _ when this == Neutral => onNeutral(),
            _ => otherwise(Value)
        };

    public void Match(Action onPositive, Action onNegative, Action onMixed, Action onNeutral, Action<string> otherwise)
    {
        if (this == Positive) onPositive();
        else if (this == Negative) onNegative();
        else if (this == Mixed) onMixed();
        else if (this == Neutral) onNeutral();
        else otherwise(Value);
    }
}
