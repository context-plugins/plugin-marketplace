using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// Apply the restriction to branches of this type. Active when <c>branch_match_kind</c> is <c>branching_model</c>. The branch type will be calculated using the branching model configured for the repository.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BranchType>))]
public sealed record BranchType : OpenStringEnum<BranchType>
{
    private BranchType(string value) : base(value)
    {
    }

    public static readonly BranchType Feature = new("feature");

    public static readonly BranchType Bugfix = new("bugfix");

    public static readonly BranchType Release = new("release");

    public static readonly BranchType Hotfix = new("hotfix");

    public static readonly BranchType Development = new("development");

    public static readonly BranchType Production = new("production");

    public TResult Match<TResult>(Func<TResult> onFeature,
        Func<TResult> onBugfix,
        Func<TResult> onRelease,
        Func<TResult> onHotfix,
        Func<TResult> onDevelopment,
        Func<TResult> onProduction,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Feature => onFeature(),
            _ when this == Bugfix => onBugfix(),
            _ when this == Release => onRelease(),
            _ when this == Hotfix => onHotfix(),
            _ when this == Development => onDevelopment(),
            _ when this == Production => onProduction(),
            _ => otherwise(Value)
        };

    public void Match(Action onFeature,
        Action onBugfix,
        Action onRelease,
        Action onHotfix,
        Action onDevelopment,
        Action onProduction,
        Action<string> otherwise)
    {
        if (this == Feature) onFeature();
        else if (this == Bugfix) onBugfix();
        else if (this == Release) onRelease();
        else if (this == Hotfix) onHotfix();
        else if (this == Development) onDevelopment();
        else if (this == Production) onProduction();
        else otherwise(Value);
    }
}
