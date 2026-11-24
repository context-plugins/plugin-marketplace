using System;
using System.Text.Json.Serialization;
using Airtable.Core.Enum;

namespace Airtable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CellFormat>))]
public sealed record CellFormat : OpenStringEnum<CellFormat>
{
    private CellFormat(string value) : base(value)
    {
    }

    public static readonly CellFormat Json = new("json");

    public static readonly CellFormat String = new("string");

    public TResult Match<TResult>(Func<TResult> onJson, Func<TResult> onString, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Json => onJson(),
            _ when this == String => onString(),
            _ => otherwise(Value)
        };

    public void Match(Action onJson, Action onString, Action<string> otherwise)
    {
        if (this == Json) onJson();
        else if (this == String) onString();
        else otherwise(Value);
    }
}
