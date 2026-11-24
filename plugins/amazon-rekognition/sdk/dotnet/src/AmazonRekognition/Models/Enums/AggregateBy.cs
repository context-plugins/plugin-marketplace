using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Defines how to aggregate results of the StartContentModeration request. Default aggregation option is TIMESTAMPS. SEGMENTS mode aggregates moderation labels over time.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AggregateBy>))]
public sealed record AggregateBy : OpenStringEnum<AggregateBy>
{
    private AggregateBy(string value) : base(value)
    {
    }

    public static readonly AggregateBy Timestamps = new("TIMESTAMPS");

    public static readonly AggregateBy Segments = new("SEGMENTS");

    public TResult Match<TResult>(Func<TResult> onTimestamps,
        Func<TResult> onSegments,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Timestamps => onTimestamps(),
            _ when this == Segments => onSegments(),
            _ => otherwise(Value)
        };

    public void Match(Action onTimestamps, Action onSegments, Action<string> otherwise)
    {
        if (this == Timestamps) onTimestamps();
        else if (this == Segments) onSegments();
        else otherwise(Value);
    }
}
