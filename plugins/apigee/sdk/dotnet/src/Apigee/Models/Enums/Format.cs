using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The format of the input specification file contents.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format FormatUnspecified = new("FORMAT_UNSPECIFIED");

    public static readonly Format Yaml = new("YAML");

    public static readonly Format Json = new("JSON");

    public TResult Match<TResult>(Func<TResult> onFormatUnspecified,
        Func<TResult> onYaml,
        Func<TResult> onJson,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FormatUnspecified => onFormatUnspecified(),
            _ when this == Yaml => onYaml(),
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onFormatUnspecified, Action onYaml, Action onJson, Action<string> otherwise)
    {
        if (this == FormatUnspecified) onFormatUnspecified();
        else if (this == Yaml) onYaml();
        else if (this == Json) onJson();
        else otherwise(Value);
    }
}
