using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Json = new("json");

    public static readonly Format Csv = new("csv");

    public TResult Match<TResult>(Func<TResult> onJson, Func<TResult> onCsv, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Json => onJson(),
            _ when this == Csv => onCsv(),
            _ => otherwise(Value)
        };

    public void Match(Action onJson, Action onCsv, Action<string> otherwise)
    {
        if (this == Json) onJson();
        else if (this == Csv) onCsv();
        else otherwise(Value);
    }
}
