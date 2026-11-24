using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// Indicates how the restriction is matched against a branch. The default is <c>glob</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BranchMatchKind>))]
public sealed record BranchMatchKind : OpenStringEnum<BranchMatchKind>
{
    private BranchMatchKind(string value) : base(value)
    {
    }

    public static readonly BranchMatchKind BranchingModel = new("branching_model");

    public static readonly BranchMatchKind Glob = new("glob");

    public TResult Match<TResult>(Func<TResult> onBranchingModel,
        Func<TResult> onGlob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BranchingModel => onBranchingModel(),
            _ when this == Glob => onGlob(),
            _ => otherwise(Value)
        };

    public void Match(Action onBranchingModel, Action onGlob, Action<string> otherwise)
    {
        if (this == BranchingModel) onBranchingModel();
        else if (this == Glob) onGlob();
        else otherwise(Value);
    }
}
