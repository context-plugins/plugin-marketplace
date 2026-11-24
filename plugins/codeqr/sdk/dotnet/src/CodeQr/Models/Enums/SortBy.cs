using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy Timestamp = new("timestamp");

    public TResult Match<TResult>(Func<TResult> onTimestamp, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Timestamp => onTimestamp(),
            _ => otherwise(Value)
        };

    public void Match(Action onTimestamp, Action<string> otherwise)
    {
        if (this == Timestamp) onTimestamp();
        else otherwise(Value);
    }
}
