using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The type of reference (branch/tag).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RefType>))]
public sealed record RefType : OpenStringEnum<RefType>
{
    private RefType(string value) : base(value)
    {
    }

    public static readonly RefType Branch = new("branch");

    public static readonly RefType Tag = new("tag");

    public static readonly RefType NamedBranch = new("named_branch");

    public static readonly RefType Bookmark = new("bookmark");

    public TResult Match<TResult>(Func<TResult> onBranch,
        Func<TResult> onTag,
        Func<TResult> onNamedBranch,
        Func<TResult> onBookmark,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Branch => onBranch(),
            _ when this == Tag => onTag(),
            _ when this == NamedBranch => onNamedBranch(),
            _ when this == Bookmark => onBookmark(),
            _ => otherwise(Value)
        };

    public void Match(Action onBranch, Action onTag, Action onNamedBranch, Action onBookmark, Action<string> otherwise)
    {
        if (this == Branch) onBranch();
        else if (this == Tag) onTag();
        else if (this == NamedBranch) onNamedBranch();
        else if (this == Bookmark) onBookmark();
        else otherwise(Value);
    }
}
