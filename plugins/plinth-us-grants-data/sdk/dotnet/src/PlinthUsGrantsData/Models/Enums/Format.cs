using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Json = new("json");

    public static readonly Format Xml = new("xml");

    public TResult Match<TResult>(Func<TResult> onJson, Func<TResult> onXml, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Json => onJson(),
            _ when this == Xml => onXml(),
            _ => otherwise(Value)
        };

    public void Match(Action onJson, Action onXml, Action<string> otherwise)
    {
        if (this == Json) onJson();
        else if (this == Xml) onXml();
        else otherwise(Value);
    }
}
