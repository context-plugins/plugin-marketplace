using System;
using System.Text.Json.Serialization;
using Stoplight.Core.Enum;

namespace Stoplight.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format OasJson = new("oas.json");

    public static readonly Format OasYaml = new("oas.yaml");

    public static readonly Format Raml08Yaml = new("raml08.yaml");

    public static readonly Format Raml10Yaml = new("raml10.yaml");

    public static readonly Format StoplightJson = new("stoplight.json");

    public static readonly Format StoplightYaml = new("stoplight.yaml");

    public TResult Match<TResult>(Func<TResult> onOasJson,
        Func<TResult> onOasYaml,
        Func<TResult> onRaml08Yaml,
        Func<TResult> onRaml10Yaml,
        Func<TResult> onStoplightJson,
        Func<TResult> onStoplightYaml,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OasJson => onOasJson(),
            _ when this == OasYaml => onOasYaml(),
            _ when this == Raml08Yaml => onRaml08Yaml(),
            _ when this == Raml10Yaml => onRaml10Yaml(),
            _ when this == StoplightJson => onStoplightJson(),
            _ when this == StoplightYaml => onStoplightYaml(),
            _ => otherwise(Value)
        };

    public void Match(Action onOasJson,
        Action onOasYaml,
        Action onRaml08Yaml,
        Action onRaml10Yaml,
        Action onStoplightJson,
        Action onStoplightYaml,
        Action<string> otherwise)
    {
        if (this == OasJson) onOasJson();
        else if (this == OasYaml) onOasYaml();
        else if (this == Raml08Yaml) onRaml08Yaml();
        else if (this == Raml10Yaml) onRaml10Yaml();
        else if (this == StoplightJson) onStoplightJson();
        else if (this == StoplightYaml) onStoplightYaml();
        else otherwise(Value);
    }
}
