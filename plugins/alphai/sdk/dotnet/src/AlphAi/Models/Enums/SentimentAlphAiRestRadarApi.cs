using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SentimentAlphAiRestRadarApi>))]
public sealed record SentimentAlphAiRestRadarApi : OpenStringEnum<SentimentAlphAiRestRadarApi>
{
    private SentimentAlphAiRestRadarApi(string value) : base(value)
    {
    }

    public static readonly SentimentAlphAiRestRadarApi All = new("all");

    public static readonly SentimentAlphAiRestRadarApi Positive = new("positive");

    public static readonly SentimentAlphAiRestRadarApi Negative = new("negative");

    public static readonly SentimentAlphAiRestRadarApi Mixed = new("mixed");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onPositive,
        Func<TResult> onNegative,
        Func<TResult> onMixed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Positive => onPositive(),
            _ when this == Negative => onNegative(),
            _ when this == Mixed => onMixed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onPositive, Action onNegative, Action onMixed, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Positive) onPositive();
        else if (this == Negative) onNegative();
        else if (this == Mixed) onMixed();
        else otherwise(Value);
    }
}
