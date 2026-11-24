using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The aggregation method chosen for a GetLabelDetection request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AggregateBy1AmazonRekognitionStoredVideoAnalysisApi>))]
public sealed record AggregateBy1AmazonRekognitionStoredVideoAnalysisApi : OpenStringEnum<AggregateBy1AmazonRekognitionStoredVideoAnalysisApi>
{
    private AggregateBy1AmazonRekognitionStoredVideoAnalysisApi(string value) : base(value)
    {
    }

    public static readonly AggregateBy1AmazonRekognitionStoredVideoAnalysisApi Timestamps = new("TIMESTAMPS");

    public static readonly AggregateBy1AmazonRekognitionStoredVideoAnalysisApi Segments = new("SEGMENTS");

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
