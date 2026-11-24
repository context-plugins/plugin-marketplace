using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Controls how provided blocks interact with the post's existing content on update.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentMergeStrategy>))]
public sealed record ContentMergeStrategy : OpenStringEnum<ContentMergeStrategy>
{
    private ContentMergeStrategy(string value) : base(value)
    {
    }

    public static readonly ContentMergeStrategy Replace = new("replace");

    public static readonly ContentMergeStrategy AppendToTemplate = new("append_to_template");

    public static readonly ContentMergeStrategy Append = new("append");

    public static readonly ContentMergeStrategy Prepend = new("prepend");

    public TResult Match<TResult>(Func<TResult> onReplace,
        Func<TResult> onAppendToTemplate,
        Func<TResult> onAppend,
        Func<TResult> onPrepend,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Replace => onReplace(),
            _ when this == AppendToTemplate => onAppendToTemplate(),
            _ when this == Append => onAppend(),
            _ when this == Prepend => onPrepend(),
            _ => otherwise(Value)
        };

    public void Match(Action onReplace,
        Action onAppendToTemplate,
        Action onAppend,
        Action onPrepend,
        Action<string> otherwise)
    {
        if (this == Replace) onReplace();
        else if (this == AppendToTemplate) onAppendToTemplate();
        else if (this == Append) onAppend();
        else if (this == Prepend) onPrepend();
        else otherwise(Value);
    }
}
