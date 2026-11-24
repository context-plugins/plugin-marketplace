using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The block represents a line of text or one word of text. WORD - A word that's detected on a document page. A word is one or more ISO basic Latin script characters that aren't separated by spaces. LINE - A string of tab-delimited, contiguous words that are detected on a document page
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BlockType>))]
public sealed record BlockType : OpenStringEnum<BlockType>
{
    private BlockType(string value) : base(value)
    {
    }

    public static readonly BlockType Line = new("LINE");

    public static readonly BlockType Word = new("WORD");

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
