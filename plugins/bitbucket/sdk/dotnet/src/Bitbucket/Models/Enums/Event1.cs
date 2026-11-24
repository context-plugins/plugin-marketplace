using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The event identifier.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Event1>))]
public sealed record Event1 : OpenStringEnum<Event1>
{
    private Event1(string value) : base(value)
    {
    }

    public static readonly Event1 IssueCommentCreated = new("issue:comment_created");

    public static readonly Event1 IssueCreated = new("issue:created");

    public static readonly Event1 IssueUpdated = new("issue:updated");

    public static readonly Event1 PipelineSpanCreated = new("pipeline:span_created");

    public static readonly Event1 ProjectUpdated = new("project:updated");

    public static readonly Event1 PullrequestApproved = new("pullrequest:approved");

    public static readonly Event1 PullrequestChangesRequestCreated = new("pullrequest:changes_request_created");

    public static readonly Event1 PullrequestChangesRequestRemoved = new("pullrequest:changes_request_removed");

    public static readonly Event1 PullrequestCommentCreated = new("pullrequest:comment_created");

    public static readonly Event1 PullrequestCommentDeleted = new("pullrequest:comment_deleted");

    public static readonly Event1 PullrequestCommentReopened = new("pullrequest:comment_reopened");

    public static readonly Event1 PullrequestCommentResolved = new("pullrequest:comment_resolved");

    public static readonly Event1 PullrequestCommentUpdated = new("pullrequest:comment_updated");

    public static readonly Event1 PullrequestCreated = new("pullrequest:created");

    public static readonly Event1 PullrequestFulfilled = new("pullrequest:fulfilled");

    public static readonly Event1 PullrequestPush = new("pullrequest:push");

    public static readonly Event1 PullrequestRejected = new("pullrequest:rejected");

    public static readonly Event1 PullrequestUnapproved = new("pullrequest:unapproved");

    public static readonly Event1 PullrequestUpdated = new("pullrequest:updated");

    public static readonly Event1 RepoCommitCommentCreated = new("repo:commit_comment_created");

    public static readonly Event1 RepoCommitStatusCreated = new("repo:commit_status_created");

    public static readonly Event1 RepoCommitStatusUpdated = new("repo:commit_status_updated");

    public static readonly Event1 RepoCreated = new("repo:created");

    public static readonly Event1 RepoDeleted = new("repo:deleted");

    public static readonly Event1 RepoFork = new("repo:fork");

    public static readonly Event1 RepoImported = new("repo:imported");

    public static readonly Event1 RepoPush = new("repo:push");

    public static readonly Event1 RepoTransfer = new("repo:transfer");

    public static readonly Event1 RepoUpdated = new("repo:updated");

    public TResult Match<TResult>(Func<TResult> onIssueCommentCreated,
        Func<TResult> onIssueCreated,
        Func<TResult> onIssueUpdated,
        Func<TResult> onPipelineSpanCreated,
        Func<TResult> onProjectUpdated,
        Func<TResult> onPullrequestApproved,
        Func<TResult> onPullrequestChangesRequestCreated,
        Func<TResult> onPullrequestChangesRequestRemoved,
        Func<TResult> onPullrequestCommentCreated,
        Func<TResult> onPullrequestCommentDeleted,
        Func<TResult> onPullrequestCommentReopened,
        Func<TResult> onPullrequestCommentResolved,
        Func<TResult> onPullrequestCommentUpdated,
        Func<TResult> onPullrequestCreated,
        Func<TResult> onPullrequestFulfilled,
        Func<TResult> onPullrequestPush,
        Func<TResult> onPullrequestRejected,
        Func<TResult> onPullrequestUnapproved,
        Func<TResult> onPullrequestUpdated,
        Func<TResult> onRepoCommitCommentCreated,
        Func<TResult> onRepoCommitStatusCreated,
        Func<TResult> onRepoCommitStatusUpdated,
        Func<TResult> onRepoCreated,
        Func<TResult> onRepoDeleted,
        Func<TResult> onRepoFork,
        Func<TResult> onRepoImported,
        Func<TResult> onRepoPush,
        Func<TResult> onRepoTransfer,
        Func<TResult> onRepoUpdated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IssueCommentCreated => onIssueCommentCreated(),
            _ when this == IssueCreated => onIssueCreated(),
            _ when this == IssueUpdated => onIssueUpdated(),
            _ when this == PipelineSpanCreated => onPipelineSpanCreated(),
            _ when this == ProjectUpdated => onProjectUpdated(),
            _ when this == PullrequestApproved => onPullrequestApproved(),
            _ when this == PullrequestChangesRequestCreated => onPullrequestChangesRequestCreated(),
            _ when this == PullrequestChangesRequestRemoved => onPullrequestChangesRequestRemoved(),
            _ when this == PullrequestCommentCreated => onPullrequestCommentCreated(),
            _ when this == PullrequestCommentDeleted => onPullrequestCommentDeleted(),
            _ when this == PullrequestCommentReopened => onPullrequestCommentReopened(),
            _ when this == PullrequestCommentResolved => onPullrequestCommentResolved(),
            _ when this == PullrequestCommentUpdated => onPullrequestCommentUpdated(),
            _ when this == PullrequestCreated => onPullrequestCreated(),
            _ when this == PullrequestFulfilled => onPullrequestFulfilled(),
            _ when this == PullrequestPush => onPullrequestPush(),
            _ when this == PullrequestRejected => onPullrequestRejected(),
            _ when this == PullrequestUnapproved => onPullrequestUnapproved(),
            _ when this == PullrequestUpdated => onPullrequestUpdated(),
            _ when this == RepoCommitCommentCreated => onRepoCommitCommentCreated(),
            _ when this == RepoCommitStatusCreated => onRepoCommitStatusCreated(),
            _ when this == RepoCommitStatusUpdated => onRepoCommitStatusUpdated(),
            _ when this == RepoCreated => onRepoCreated(),
            _ when this == RepoDeleted => onRepoDeleted(),
            _ when this == RepoFork => onRepoFork(),
            _ when this == RepoImported => onRepoImported(),
            _ when this == RepoPush => onRepoPush(),
            _ when this == RepoTransfer => onRepoTransfer(),
            _ when this == RepoUpdated => onRepoUpdated(),
            _ => otherwise(Value)
        };

    public void Match(Action onIssueCommentCreated,
        Action onIssueCreated,
        Action onIssueUpdated,
        Action onPipelineSpanCreated,
        Action onProjectUpdated,
        Action onPullrequestApproved,
        Action onPullrequestChangesRequestCreated,
        Action onPullrequestChangesRequestRemoved,
        Action onPullrequestCommentCreated,
        Action onPullrequestCommentDeleted,
        Action onPullrequestCommentReopened,
        Action onPullrequestCommentResolved,
        Action onPullrequestCommentUpdated,
        Action onPullrequestCreated,
        Action onPullrequestFulfilled,
        Action onPullrequestPush,
        Action onPullrequestRejected,
        Action onPullrequestUnapproved,
        Action onPullrequestUpdated,
        Action onRepoCommitCommentCreated,
        Action onRepoCommitStatusCreated,
        Action onRepoCommitStatusUpdated,
        Action onRepoCreated,
        Action onRepoDeleted,
        Action onRepoFork,
        Action onRepoImported,
        Action onRepoPush,
        Action onRepoTransfer,
        Action onRepoUpdated,
        Action<string> otherwise)
    {
        if (this == IssueCommentCreated) onIssueCommentCreated();
        else if (this == IssueCreated) onIssueCreated();
        else if (this == IssueUpdated) onIssueUpdated();
        else if (this == PipelineSpanCreated) onPipelineSpanCreated();
        else if (this == ProjectUpdated) onProjectUpdated();
        else if (this == PullrequestApproved) onPullrequestApproved();
        else if (this == PullrequestChangesRequestCreated) onPullrequestChangesRequestCreated();
        else if (this == PullrequestChangesRequestRemoved) onPullrequestChangesRequestRemoved();
        else if (this == PullrequestCommentCreated) onPullrequestCommentCreated();
        else if (this == PullrequestCommentDeleted) onPullrequestCommentDeleted();
        else if (this == PullrequestCommentReopened) onPullrequestCommentReopened();
        else if (this == PullrequestCommentResolved) onPullrequestCommentResolved();
        else if (this == PullrequestCommentUpdated) onPullrequestCommentUpdated();
        else if (this == PullrequestCreated) onPullrequestCreated();
        else if (this == PullrequestFulfilled) onPullrequestFulfilled();
        else if (this == PullrequestPush) onPullrequestPush();
        else if (this == PullrequestRejected) onPullrequestRejected();
        else if (this == PullrequestUnapproved) onPullrequestUnapproved();
        else if (this == PullrequestUpdated) onPullrequestUpdated();
        else if (this == RepoCommitCommentCreated) onRepoCommitCommentCreated();
        else if (this == RepoCommitStatusCreated) onRepoCommitStatusCreated();
        else if (this == RepoCommitStatusUpdated) onRepoCommitStatusUpdated();
        else if (this == RepoCreated) onRepoCreated();
        else if (this == RepoDeleted) onRepoDeleted();
        else if (this == RepoFork) onRepoFork();
        else if (this == RepoImported) onRepoImported();
        else if (this == RepoPush) onRepoPush();
        else if (this == RepoTransfer) onRepoTransfer();
        else if (this == RepoUpdated) onRepoUpdated();
        else otherwise(Value);
    }
}
