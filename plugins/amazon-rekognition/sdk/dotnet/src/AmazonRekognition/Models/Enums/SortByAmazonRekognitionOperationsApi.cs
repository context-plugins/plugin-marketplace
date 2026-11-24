using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Sort to use for elements in the Persons array. Use TIMESTAMP to sort array elements by the time persons are detected. Use INDEX to sort by the tracked persons. If you sort by INDEX, the array elements for each person are sorted by detection confidence. The default sort is by TIMESTAMP.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortByAmazonRekognitionOperationsApi>))]
public sealed record SortByAmazonRekognitionOperationsApi : OpenStringEnum<SortByAmazonRekognitionOperationsApi>
{
    private SortByAmazonRekognitionOperationsApi(string value) : base(value)
    {
    }

    public static readonly SortByAmazonRekognitionOperationsApi Index = new("INDEX");

    public static readonly SortByAmazonRekognitionOperationsApi Timestamp = new("TIMESTAMP");

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
