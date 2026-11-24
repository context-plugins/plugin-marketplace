using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Board>))]
public sealed record Board : OpenStringEnum<Board>
{
    private Board(string value) : base(value)
    {
    }

    public static readonly Board Filtered = new("filtered");

    public static readonly Board Partitioned = new("partitioned");

    public TResult Match<TResult>(Func<TResult> onFiltered,
        Func<TResult> onPartitioned,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Filtered => onFiltered(),
            _ when this == Partitioned => onPartitioned(),
            _ => otherwise(Value)
        };

    public void Match(Action onFiltered, Action onPartitioned, Action<string> otherwise)
    {
        if (this == Filtered) onFiltered();
        else if (this == Partitioned) onPartitioned();
        else otherwise(Value);
    }
}
