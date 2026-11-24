using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MergeStrategy>))]
public sealed record MergeStrategy : OpenStringEnum<MergeStrategy>
{
    private MergeStrategy(string value) : base(value)
    {
    }

    public static readonly MergeStrategy MergeCommit = new("merge_commit");

    public static readonly MergeStrategy Squash = new("squash");

    public static readonly MergeStrategy FastForward = new("fast_forward");

    public static readonly MergeStrategy SquashFastForward = new("squash_fast_forward");

    public static readonly MergeStrategy RebaseFastForward = new("rebase_fast_forward");

    public static readonly MergeStrategy RebaseMerge = new("rebase_merge");

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
