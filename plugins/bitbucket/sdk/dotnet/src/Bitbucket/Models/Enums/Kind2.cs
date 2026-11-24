using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The kind of the branch type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kind2>))]
public sealed record Kind2 : OpenStringEnum<Kind2>
{
    private Kind2(string value) : base(value)
    {
    }

    public static readonly Kind2 Feature = new("feature");

    public static readonly Kind2 Bugfix = new("bugfix");

    public static readonly Kind2 Release = new("release");

    public static readonly Kind2 Hotfix = new("hotfix");

    public TResult Match<TResult>(Func<TResult> onFeature,
        Func<TResult> onBugfix,
        Func<TResult> onRelease,
        Func<TResult> onHotfix,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Feature => onFeature(),
            _ when this == Bugfix => onBugfix(),
            _ when this == Release => onRelease(),
            _ when this == Hotfix => onHotfix(),
            _ => otherwise(Value)
        };

    public void Match(Action onFeature, Action onBugfix, Action onRelease, Action onHotfix, Action<string> otherwise)
    {
        if (this == Feature) onFeature();
        else if (this == Bugfix) onBugfix();
        else if (this == Release) onRelease();
        else if (this == Hotfix) onHotfix();
        else otherwise(Value);
    }
}
