using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Sort to use for elements in the ModerationLabelDetections array. Use TIMESTAMP to sort array elements by the time labels are detected. Use NAME to alphabetically group elements for a label together. Within each label group, the array element are sorted by detection confidence. The default sort is by TIMESTAMP.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByAmazonRekognitionContentModerationApi>))]
public sealed record SortByAmazonRekognitionContentModerationApi : OpenStringEnum<SortByAmazonRekognitionContentModerationApi>
{
    private SortByAmazonRekognitionContentModerationApi(string value) : base(value)
    {
    }

    public static readonly SortByAmazonRekognitionContentModerationApi Name = new("NAME");

    public static readonly SortByAmazonRekognitionContentModerationApi Timestamp = new("TIMESTAMP");

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
