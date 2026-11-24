using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The type of text that was detected.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type4>))]
public sealed record Type4 : OpenStringEnum<Type4>
{
    private Type4(string value) : base(value)
    {
    }

    public static readonly Type4 Line = new("LINE");

    public static readonly Type4 Word = new("WORD");

    public TResult Match<TResult>(Func<TResult> onLine, Func<TResult> onWord, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Line => onLine(),
            _ when this == Word => onWord(),
            _ => otherwise(Value)
        };

    public void Match(Action onLine, Action onWord, Action<string> otherwise)
    {
        if (this == Line) onLine();
        else if (this == Word) onWord();
        else otherwise(Value);
    }
}
