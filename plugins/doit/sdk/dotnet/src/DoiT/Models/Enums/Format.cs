using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Csv = new("csv");

    public static readonly Format Jsonl = new("jsonl");

    public TResult Match<TResult>(Func<TResult> onCsv, Func<TResult> onJsonl, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Csv => onCsv(),
            _ when this == Jsonl => onJsonl(),
            _ => otherwise(Value)
        };

    public void Match(Action onCsv, Action onJsonl, Action<string> otherwise)
    {
        if (this == Csv) onCsv();
        else if (this == Jsonl) onJsonl();
        else otherwise(Value);
    }
}
