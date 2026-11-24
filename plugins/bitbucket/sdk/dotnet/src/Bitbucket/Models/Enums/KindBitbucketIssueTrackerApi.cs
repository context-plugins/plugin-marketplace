using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<KindBitbucketIssueTrackerApi>))]
public sealed record KindBitbucketIssueTrackerApi : OpenStringEnum<KindBitbucketIssueTrackerApi>
{
    private KindBitbucketIssueTrackerApi(string value) : base(value)
    {
    }

    public static readonly KindBitbucketIssueTrackerApi Bug = new("bug");

    public static readonly KindBitbucketIssueTrackerApi Enhancement = new("enhancement");

    public static readonly KindBitbucketIssueTrackerApi Proposal = new("proposal");

    public static readonly KindBitbucketIssueTrackerApi Task = new("task");

    public TResult Match<TResult>(Func<TResult> onBug,
        Func<TResult> onEnhancement,
        Func<TResult> onProposal,
        Func<TResult> onTask,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bug => onBug(),
            _ when this == Enhancement => onEnhancement(),
            _ when this == Proposal => onProposal(),
            _ when this == Task => onTask(),
            _ => otherwise(Value)
        };

    public void Match(Action onBug, Action onEnhancement, Action onProposal, Action onTask, Action<string> otherwise)
    {
        if (this == Bug) onBug();
        else if (this == Enhancement) onEnhancement();
        else if (this == Proposal) onProposal();
        else if (this == Task) onTask();
        else otherwise(Value);
    }
}
