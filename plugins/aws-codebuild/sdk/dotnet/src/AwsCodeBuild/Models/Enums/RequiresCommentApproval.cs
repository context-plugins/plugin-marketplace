using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Specifies when comment-based approval is required before triggering a build on pull requests. This setting determines whether builds run automatically or require explicit approval through comments. DISABLED: Builds trigger automatically without requiring comment approval ALL_PULL_REQUESTS: All pull requests require comment approval before builds execute (unless contributor is one of the approver roles) FORK_PULL_REQUESTS: Only pull requests from forked repositories require comment approval (unless contributor is one of the approver roles)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RequiresCommentApproval>))]
public sealed record RequiresCommentApproval : OpenStringEnum<RequiresCommentApproval>
{
    private RequiresCommentApproval(string value) : base(value)
    {
    }

    public static readonly RequiresCommentApproval Disabled = new("DISABLED");

    public static readonly RequiresCommentApproval AllPullRequests = new("ALL_PULL_REQUESTS");

    public static readonly RequiresCommentApproval ForkPullRequests = new("FORK_PULL_REQUESTS");

    public TResult Match<TResult>(Func<TResult> onDisabled,
        Func<TResult> onAllPullRequests,
        Func<TResult> onForkPullRequests,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Disabled => onDisabled(),
            _ when this == AllPullRequests => onAllPullRequests(),
            _ when this == ForkPullRequests => onForkPullRequests(),
            _ => otherwise(Value)
        };

    public void Match(Action onDisabled, Action onAllPullRequests, Action onForkPullRequests, Action<string> otherwise)
    {
        if (this == Disabled) onDisabled();
        else if (this == AllPullRequests) onAllPullRequests();
        else if (this == ForkPullRequests) onForkPullRequests();
        else otherwise(Value);
    }
}
