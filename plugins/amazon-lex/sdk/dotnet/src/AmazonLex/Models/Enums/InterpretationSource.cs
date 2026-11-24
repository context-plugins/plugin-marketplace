using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies the service that interpreted the input.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InterpretationSource>))]
public sealed record InterpretationSource : OpenStringEnum<InterpretationSource>
{
    private InterpretationSource(string value) : base(value)
    {
    }

    public static readonly InterpretationSource Bedrock = new("Bedrock");

    public static readonly InterpretationSource Lex = new("Lex");

    public TResult Match<TResult>(Func<TResult> onBedrock, Func<TResult> onLex, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bedrock => onBedrock(),
            _ when this == Lex => onLex(),
            _ => otherwise(Value)
        };

    public void Match(Action onBedrock, Action onLex, Action<string> otherwise)
    {
        if (this == Bedrock) onBedrock();
        else if (this == Lex) onLex();
        else otherwise(Value);
    }
}
