using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The type of restriction that is being applied.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Push = new("push");

    public static readonly Kind Delete = new("delete");

    public static readonly Kind Force = new("force");

    public static readonly Kind RestrictMerges = new("restrict_merges");

    public static readonly Kind RequireTasksToBeCompleted = new("require_tasks_to_be_completed");

    public static readonly Kind RequireApprovalsToMerge = new("require_approvals_to_merge");

    public static readonly Kind RequireReviewGroupApprovalsToMerge = new("require_review_group_approvals_to_merge");

    public static readonly Kind RequireDefaultReviewerApprovalsToMerge = new(
        "require_default_reviewer_approvals_to_merge");

    public static readonly Kind RequireNoChangesRequested = new("require_no_changes_requested");

    public static readonly Kind RequirePassingBuildsToMerge = new("require_passing_builds_to_merge");

    public static readonly Kind RequireCommitsBehind = new("require_commits_behind");

    public static readonly Kind ResetPullrequestApprovalsOnChange = new("reset_pullrequest_approvals_on_change");

    public static readonly Kind SmartResetPullrequestApprovals = new("smart_reset_pullrequest_approvals");

    public static readonly Kind ResetPullrequestChangesRequestedOnChange = new(
        "reset_pullrequest_changes_requested_on_change");

    public static readonly Kind RequireAllDependenciesMerged = new("require_all_dependencies_merged");

    public static readonly Kind EnforceMergeChecks = new("enforce_merge_checks");

    public static readonly Kind AllowAutoMergeWhenBuildsPass = new("allow_auto_merge_when_builds_pass");

    public static readonly Kind RequireAllCommentsResolved = new("require_all_comments_resolved");

    public TResult Match<TResult>(Func<TResult> onPush,
        Func<TResult> onDelete,
        Func<TResult> onForce,
        Func<TResult> onRestrictMerges,
        Func<TResult> onRequireTasksToBeCompleted,
        Func<TResult> onRequireApprovalsToMerge,
        Func<TResult> onRequireReviewGroupApprovalsToMerge,
        Func<TResult> onRequireDefaultReviewerApprovalsToMerge,
        Func<TResult> onRequireNoChangesRequested,
        Func<TResult> onRequirePassingBuildsToMerge,
        Func<TResult> onRequireCommitsBehind,
        Func<TResult> onResetPullrequestApprovalsOnChange,
        Func<TResult> onSmartResetPullrequestApprovals,
        Func<TResult> onResetPullrequestChangesRequestedOnChange,
        Func<TResult> onRequireAllDependenciesMerged,
        Func<TResult> onEnforceMergeChecks,
        Func<TResult> onAllowAutoMergeWhenBuildsPass,
        Func<TResult> onRequireAllCommentsResolved,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Push => onPush(),
            _ when this == Delete => onDelete(),
            _ when this == Force => onForce(),
            _ when this == RestrictMerges => onRestrictMerges(),
            _ when this == RequireTasksToBeCompleted => onRequireTasksToBeCompleted(),
            _ when this == RequireApprovalsToMerge => onRequireApprovalsToMerge(),
            _ when this == RequireReviewGroupApprovalsToMerge => onRequireReviewGroupApprovalsToMerge(),
            _ when this == RequireDefaultReviewerApprovalsToMerge => onRequireDefaultReviewerApprovalsToMerge(),
            _ when this == RequireNoChangesRequested => onRequireNoChangesRequested(),
            _ when this == RequirePassingBuildsToMerge => onRequirePassingBuildsToMerge(),
            _ when this == RequireCommitsBehind => onRequireCommitsBehind(),
            _ when this == ResetPullrequestApprovalsOnChange => onResetPullrequestApprovalsOnChange(),
            _ when this == SmartResetPullrequestApprovals => onSmartResetPullrequestApprovals(),
            _ when this == ResetPullrequestChangesRequestedOnChange => onResetPullrequestChangesRequestedOnChange(),
            _ when this == RequireAllDependenciesMerged => onRequireAllDependenciesMerged(),
            _ when this == EnforceMergeChecks => onEnforceMergeChecks(),
            _ when this == AllowAutoMergeWhenBuildsPass => onAllowAutoMergeWhenBuildsPass(),
            _ when this == RequireAllCommentsResolved => onRequireAllCommentsResolved(),
            _ => otherwise(Value)
        };

    public void Match(Action onPush,
        Action onDelete,
        Action onForce,
        Action onRestrictMerges,
        Action onRequireTasksToBeCompleted,
        Action onRequireApprovalsToMerge,
        Action onRequireReviewGroupApprovalsToMerge,
        Action onRequireDefaultReviewerApprovalsToMerge,
        Action onRequireNoChangesRequested,
        Action onRequirePassingBuildsToMerge,
        Action onRequireCommitsBehind,
        Action onResetPullrequestApprovalsOnChange,
        Action onSmartResetPullrequestApprovals,
        Action onResetPullrequestChangesRequestedOnChange,
        Action onRequireAllDependenciesMerged,
        Action onEnforceMergeChecks,
        Action onAllowAutoMergeWhenBuildsPass,
        Action onRequireAllCommentsResolved,
        Action<string> otherwise)
    {
        if (this == Push) onPush();
        else if (this == Delete) onDelete();
        else if (this == Force) onForce();
        else if (this == RestrictMerges) onRestrictMerges();
        else if (this == RequireTasksToBeCompleted) onRequireTasksToBeCompleted();
        else if (this == RequireApprovalsToMerge) onRequireApprovalsToMerge();
        else if (this == RequireReviewGroupApprovalsToMerge) onRequireReviewGroupApprovalsToMerge();
        else if (this == RequireDefaultReviewerApprovalsToMerge) onRequireDefaultReviewerApprovalsToMerge();
        else if (this == RequireNoChangesRequested) onRequireNoChangesRequested();
        else if (this == RequirePassingBuildsToMerge) onRequirePassingBuildsToMerge();
        else if (this == RequireCommitsBehind) onRequireCommitsBehind();
        else if (this == ResetPullrequestApprovalsOnChange) onResetPullrequestApprovalsOnChange();
        else if (this == SmartResetPullrequestApprovals) onSmartResetPullrequestApprovals();
        else if (this == ResetPullrequestChangesRequestedOnChange) onResetPullrequestChangesRequestedOnChange();
        else if (this == RequireAllDependenciesMerged) onRequireAllDependenciesMerged();
        else if (this == EnforceMergeChecks) onEnforceMergeChecks();
        else if (this == AllowAutoMergeWhenBuildsPass) onAllowAutoMergeWhenBuildsPass();
        else if (this == RequireAllCommentsResolved) onRequireAllCommentsResolved();
        else otherwise(Value);
    }
}
