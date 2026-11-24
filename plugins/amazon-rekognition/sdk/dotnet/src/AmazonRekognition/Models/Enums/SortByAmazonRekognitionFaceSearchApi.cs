using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Sort to use for grouping faces in the response. Use TIMESTAMP to group faces by the time that they are recognized. Use INDEX to sort by recognized faces.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByAmazonRekognitionFaceSearchApi>))]
public sealed record SortByAmazonRekognitionFaceSearchApi : OpenStringEnum<SortByAmazonRekognitionFaceSearchApi>
{
    private SortByAmazonRekognitionFaceSearchApi(string value) : base(value)
    {
    }

    public static readonly SortByAmazonRekognitionFaceSearchApi Index = new("INDEX");

    public static readonly SortByAmazonRekognitionFaceSearchApi Timestamp = new("TIMESTAMP");

    public TResult Match<TResult>(Func<TResult> onIndex, Func<TResult> onTimestamp, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Index => onIndex(),
            _ when this == Timestamp => onTimestamp(),
            _ => otherwise(Value)
        };

    public void Match(Action onIndex, Action onTimestamp, Action<string> otherwise)
    {
        if (this == Index) onIndex();
        else if (this == Timestamp) onTimestamp();
        else otherwise(Value);
    }
}
