using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Input only. Enum specifying the parsing mode for OpenAPI Specification (OAS) parsing.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ParsingMode>))]
public sealed record ParsingMode : OpenStringEnum<ParsingMode>
{
    private ParsingMode(string value) : base(value)
    {
    }

    public static readonly ParsingMode ParsingModeUnspecified = new("PARSING_MODE_UNSPECIFIED");

    public static readonly ParsingMode Relaxed = new("RELAXED");

    public static readonly ParsingMode Strict = new("STRICT");

    public TResult Match<TResult>(Func<TResult> onParsingModeUnspecified,
        Func<TResult> onRelaxed,
        Func<TResult> onStrict,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ParsingModeUnspecified => onParsingModeUnspecified(),
            _ when this == Relaxed => onRelaxed(),
            _ when this == Strict => onStrict(),
            _ => otherwise(Value)
        };

    public void Match(Action onParsingModeUnspecified, Action onRelaxed, Action onStrict, Action<string> otherwise)
    {
        if (this == ParsingModeUnspecified) onParsingModeUnspecified();
        else if (this == Relaxed) onRelaxed();
        else if (this == Strict) onStrict();
        else otherwise(Value);
    }
}
