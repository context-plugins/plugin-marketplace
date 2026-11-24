using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Json = new("json");

    public static readonly Format Csv = new("csv");

    public static readonly Format Ndjson = new("ndjson");

    public TResult Match<TResult>(Func<TResult> onJson,
        Func<TResult> onCsv,
        Func<TResult> onNdjson,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Json => onJson(),
            _ when this == Csv => onCsv(),
            _ when this == Ndjson => onNdjson(),
            _ => otherwise(Value)
        };

    public void Match(Action onJson, Action onCsv, Action onNdjson, Action<string> otherwise)
    {
        if (this == Json) onJson();
        else if (this == Csv) onCsv();
        else if (this == Ndjson) onNdjson();
        else otherwise(Value);
    }
}
