using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the stabilization level used for your transcription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PartialResultsStability>))]
public sealed record PartialResultsStability : OpenStringEnum<PartialResultsStability>
{
    private PartialResultsStability(string value) : base(value)
    {
    }

    public static readonly PartialResultsStability High = new("high");

    public static readonly PartialResultsStability Medium = new("medium");

    public static readonly PartialResultsStability Low = new("low");

    public TResult Match<TResult>(Func<TResult> onHigh,
        Func<TResult> onMedium,
        Func<TResult> onLow,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == High => onHigh(),
            _ when this == Medium => onMedium(),
            _ when this == Low => onLow(),
            _ => otherwise(Value)
        };

    public void Match(Action onHigh, Action onMedium, Action onLow, Action<string> otherwise)
    {
        if (this == High) onHigh();
        else if (this == Medium) onMedium();
        else if (this == Low) onLow();
        else otherwise(Value);
    }
}
