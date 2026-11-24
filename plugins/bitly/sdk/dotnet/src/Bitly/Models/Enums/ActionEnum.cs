using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// archive or edit_tags
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum Archive = new("archive");

    public static readonly ActionEnum EditTags = new("edit_tags");

    public TResult Match<TResult>(Func<TResult> onArchive, Func<TResult> onEditTags, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Archive => onArchive(),
            _ when this == EditTags => onEditTags(),
            _ => otherwise(Value)
        };

    public void Match(Action onArchive, Action onEditTags, Action<string> otherwise)
    {
        if (this == Archive) onArchive();
        else if (this == EditTags) onEditTags();
        else otherwise(Value);
    }
}
