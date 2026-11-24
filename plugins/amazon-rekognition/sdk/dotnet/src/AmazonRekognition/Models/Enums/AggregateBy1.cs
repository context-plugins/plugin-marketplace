using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The aggregation method chosen for a GetContentModeration request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AggregateBy1>))]
public sealed record AggregateBy1 : OpenStringEnum<AggregateBy1>
{
    private AggregateBy1(string value) : base(value)
    {
    }

    public static readonly AggregateBy1 Timestamps = new("TIMESTAMPS");

    public static readonly AggregateBy1 Segments = new("SEGMENTS");

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
