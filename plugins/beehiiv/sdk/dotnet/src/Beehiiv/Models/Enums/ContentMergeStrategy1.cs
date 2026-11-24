using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Controls how provided <c>blocks</c> interact with the post's existing content. Defaults to <c>replace</c>. Use <c>append_to_template</c> to preserve template header blocks when updating posts that were created from a template.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentMergeStrategy1>))]
public sealed record ContentMergeStrategy1 : OpenStringEnum<ContentMergeStrategy1>
{
    private ContentMergeStrategy1(string value) : base(value)
    {
    }

    public static readonly ContentMergeStrategy1 Replace = new("replace");

    public static readonly ContentMergeStrategy1 AppendToTemplate = new("append_to_template");

    public static readonly ContentMergeStrategy1 Append = new("append");

    public static readonly ContentMergeStrategy1 Prepend = new("prepend");

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
