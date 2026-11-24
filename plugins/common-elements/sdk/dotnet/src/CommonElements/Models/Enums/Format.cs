using System;
using System.Text.Json.Serialization;
using CommonElements.Core.Enum;

namespace CommonElements.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Json = new("json");

    public static readonly Format Yaml = new("yaml");

    public TResult Match<TResult>(Func<TResult> onJson, Func<TResult> onYaml, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Json => onJson(),
            _ when this == Yaml => onYaml(),
            _ => otherwise(Value)
        };

    public void Match(Action onJson, Action onYaml, Action<string> otherwise)
    {
        if (this == Json) onJson();
        else if (this == Yaml) onYaml();
        else otherwise(Value);
    }
}
