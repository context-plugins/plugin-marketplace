using System;
using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Enum;

namespace GoogleCloudBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RefType>))]
public sealed record RefType : OpenStringEnum<RefType>
{
    private RefType(string value) : base(value)
    {
    }

    public static readonly RefType RefTypeUnspecified = new("REF_TYPE_UNSPECIFIED");

    public static readonly RefType Tag = new("TAG");

    public static readonly RefType Branch = new("BRANCH");

    public TResult Match<TResult>(Func<TResult> onRefTypeUnspecified,
        Func<TResult> onTag,
        Func<TResult> onBranch,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RefTypeUnspecified => onRefTypeUnspecified(),
            _ when this == Tag => onTag(),
            _ when this == Branch => onBranch(),
            _ => otherwise(Value)
        };

    public void Match(Action onRefTypeUnspecified, Action onTag, Action onBranch, Action<string> otherwise)
    {
        if (this == RefTypeUnspecified) onRefTypeUnspecified();
        else if (this == Tag) onTag();
        else if (this == Branch) onBranch();
        else otherwise(Value);
    }
}
