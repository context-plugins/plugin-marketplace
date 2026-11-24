using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The sorting method chosen for a GetLabelDetection request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy1AmazonRekognitionStoredVideoAnalysisApi>))]
public sealed record SortBy1AmazonRekognitionStoredVideoAnalysisApi : OpenStringEnum<SortBy1AmazonRekognitionStoredVideoAnalysisApi>
{
    private SortBy1AmazonRekognitionStoredVideoAnalysisApi(string value) : base(value)
    {
    }

    public static readonly SortBy1AmazonRekognitionStoredVideoAnalysisApi Name = new("NAME");

    public static readonly SortBy1AmazonRekognitionStoredVideoAnalysisApi Timestamp = new("TIMESTAMP");

    public TResult Match<TResult>(Func<TResult> onName, Func<TResult> onTimestamp, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Name => onName(),
            _ when this == Timestamp => onTimestamp(),
            _ => otherwise(Value)
        };

    public void Match(Action onName, Action onTimestamp, Action<string> otherwise)
    {
        if (this == Name) onName();
        else if (this == Timestamp) onTimestamp();
        else otherwise(Value);
    }
}
