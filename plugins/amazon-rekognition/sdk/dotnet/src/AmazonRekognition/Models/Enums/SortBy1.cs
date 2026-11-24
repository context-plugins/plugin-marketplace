using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The sorting method chosen for a GetContentModeration request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SortBy1>))]
public sealed record SortBy1 : OpenStringEnum<SortBy1>
{
    private SortBy1(string value) : base(value)
    {
    }

    public static readonly SortBy1 Name = new("NAME");

    public static readonly SortBy1 Timestamp = new("TIMESTAMP");

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
