using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TargetSelectorType>))]
public sealed record TargetSelectorType : OpenStringEnum<TargetSelectorType>
{
    private TargetSelectorType(string value) : base(value)
    {
    }

    public static readonly TargetSelectorType Branch = new("BRANCH");

    public static readonly TargetSelectorType Tag = new("TAG");

    public static readonly TargetSelectorType Custom = new("CUSTOM");

    public static readonly TargetSelectorType Pullrequests = new("PULLREQUESTS");

    public static readonly TargetSelectorType Default = new("DEFAULT");

    public TResult Match<TResult>(Func<TResult> onBranch,
        Func<TResult> onTag,
        Func<TResult> onCustom,
        Func<TResult> onPullrequests,
        Func<TResult> onDefault,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Branch => onBranch(),
            _ when this == Tag => onTag(),
            _ when this == Custom => onCustom(),
            _ when this == Pullrequests => onPullrequests(),
            _ when this == Default => onDefault(),
            _ => otherwise(Value)
        };

    public void Match(Action onBranch,
        Action onTag,
        Action onCustom,
        Action onPullrequests,
        Action onDefault,
        Action<string> otherwise)
    {
        if (this == Branch) onBranch();
        else if (this == Tag) onTag();
        else if (this == Custom) onCustom();
        else if (this == Pullrequests) onPullrequests();
        else if (this == Default) onDefault();
        else otherwise(Value);
    }
}
