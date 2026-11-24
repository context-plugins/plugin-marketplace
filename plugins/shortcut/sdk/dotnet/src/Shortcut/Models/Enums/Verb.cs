using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Verb>))]
public sealed record Verb : OpenStringEnum<Verb>
{
    private Verb(string value) : base(value)
    {
    }

    public static readonly Verb Blocks = new("blocks");

    public static readonly Verb Duplicates = new("duplicates");

    public static readonly Verb RelatesTo = new("relates to");

    public TResult Match<TResult>(Func<TResult> onBlocks,
        Func<TResult> onDuplicates,
        Func<TResult> onRelatesTo,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Blocks => onBlocks(),
            _ when this == Duplicates => onDuplicates(),
            _ when this == RelatesTo => onRelatesTo(),
            _ => otherwise(Value)
        };

    public void Match(Action onBlocks, Action onDuplicates, Action onRelatesTo, Action<string> otherwise)
    {
        if (this == Blocks) onBlocks();
        else if (this == Duplicates) onDuplicates();
        else if (this == RelatesTo) onRelatesTo();
        else otherwise(Value);
    }
}
