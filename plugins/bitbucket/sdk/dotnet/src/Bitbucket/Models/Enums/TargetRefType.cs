using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TargetRefType>))]
public sealed record TargetRefType : OpenStringEnum<TargetRefType>
{
    private TargetRefType(string value) : base(value)
    {
    }

    public static readonly TargetRefType Branch = new("BRANCH");

    public static readonly TargetRefType Tag = new("TAG");

    public static readonly TargetRefType AnnotatedTag = new("ANNOTATED_TAG");

    public TResult Match<TResult>(Func<TResult> onBranch,
        Func<TResult> onTag,
        Func<TResult> onAnnotatedTag,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Branch => onBranch(),
            _ when this == Tag => onTag(),
            _ when this == AnnotatedTag => onAnnotatedTag(),
            _ => otherwise(Value)
        };

    public void Match(Action onBranch, Action onTag, Action onAnnotatedTag, Action<string> otherwise)
    {
        if (this == Branch) onBranch();
        else if (this == Tag) onTag();
        else if (this == AnnotatedTag) onAnnotatedTag();
        else otherwise(Value);
    }
}
