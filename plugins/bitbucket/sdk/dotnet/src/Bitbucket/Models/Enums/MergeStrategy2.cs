using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The merge strategy that will be used to merge the pull request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MergeStrategy2>))]
public sealed record MergeStrategy2 : OpenStringEnum<MergeStrategy2>
{
    private MergeStrategy2(string value) : base(value)
    {
    }

    public static readonly MergeStrategy2 MergeCommit = new("merge_commit");

    public static readonly MergeStrategy2 Squash = new("squash");

    public static readonly MergeStrategy2 FastForward = new("fast_forward");

    public static readonly MergeStrategy2 SquashFastForward = new("squash_fast_forward");

    public static readonly MergeStrategy2 RebaseFastForward = new("rebase_fast_forward");

    public static readonly MergeStrategy2 RebaseMerge = new("rebase_merge");

    public TResult Match<TResult>(Func<TResult> onMergeCommit,
        Func<TResult> onSquash,
        Func<TResult> onFastForward,
        Func<TResult> onSquashFastForward,
        Func<TResult> onRebaseFastForward,
        Func<TResult> onRebaseMerge,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MergeCommit => onMergeCommit(),
            _ when this == Squash => onSquash(),
            _ when this == FastForward => onFastForward(),
            _ when this == SquashFastForward => onSquashFastForward(),
            _ when this == RebaseFastForward => onRebaseFastForward(),
            _ when this == RebaseMerge => onRebaseMerge(),
            _ => otherwise(Value)
        };

    public void Match(Action onMergeCommit,
        Action onSquash,
        Action onFastForward,
        Action onSquashFastForward,
        Action onRebaseFastForward,
        Action onRebaseMerge,
        Action<string> otherwise)
    {
        if (this == MergeCommit) onMergeCommit();
        else if (this == Squash) onSquash();
        else if (this == FastForward) onFastForward();
        else if (this == SquashFastForward) onSquashFastForward();
        else if (this == RebaseFastForward) onRebaseFastForward();
        else if (this == RebaseMerge) onRebaseMerge();
        else otherwise(Value);
    }
}
