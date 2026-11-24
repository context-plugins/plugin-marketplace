using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Sort to use for celebrities returned in Celebrities field. Specify ID to sort by the celebrity identifier, specify TIMESTAMP to sort by the time the celebrity was recognized.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy Id = new("ID");

    public static readonly SortBy Timestamp = new("TIMESTAMP");

    public TResult Match<TResult>(Func<TResult> onId, Func<TResult> onTimestamp, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Id => onId(),
            _ when this == Timestamp => onTimestamp(),
            _ => otherwise(Value)
        };

    public void Match(Action onId, Action onTimestamp, Action<string> otherwise)
    {
        if (this == Id) onId();
        else if (this == Timestamp) onTimestamp();
        else otherwise(Value);
    }
}
