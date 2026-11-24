using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Defines how to aggregate the returned results. Results can be aggregated by timestamps or segments.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AggregateByAmazonRekognitionStoredVideoAnalysisApi>))]
public sealed record AggregateByAmazonRekognitionStoredVideoAnalysisApi : OpenStringEnum<AggregateByAmazonRekognitionStoredVideoAnalysisApi>
{
    private AggregateByAmazonRekognitionStoredVideoAnalysisApi(string value) : base(value)
    {
    }

    public static readonly AggregateByAmazonRekognitionStoredVideoAnalysisApi Timestamps = new("TIMESTAMPS");

    public static readonly AggregateByAmazonRekognitionStoredVideoAnalysisApi Segments = new("SEGMENTS");

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
