using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The type of link.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VerbShortcutStoryLinksApi>))]
public sealed record VerbShortcutStoryLinksApi : OpenStringEnum<VerbShortcutStoryLinksApi>
{
    private VerbShortcutStoryLinksApi(string value) : base(value)
    {
    }

    public static readonly VerbShortcutStoryLinksApi Blocks = new("blocks");

    public static readonly VerbShortcutStoryLinksApi Duplicates = new("duplicates");

    public static readonly VerbShortcutStoryLinksApi RelatesTo = new("relates to");

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
