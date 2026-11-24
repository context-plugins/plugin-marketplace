using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ApproverRole>))]
public sealed record ApproverRole : OpenStringEnum<ApproverRole>
{
    private ApproverRole(string value) : base(value)
    {
    }

    public static readonly ApproverRole GithubRead = new("GITHUB_READ");

    public static readonly ApproverRole GithubTriage = new("GITHUB_TRIAGE");

    public static readonly ApproverRole GithubWrite = new("GITHUB_WRITE");

    public static readonly ApproverRole GithubMaintain = new("GITHUB_MAINTAIN");

    public static readonly ApproverRole GithubAdmin = new("GITHUB_ADMIN");

    public static readonly ApproverRole GitlabGuest = new("GITLAB_GUEST");

    public static readonly ApproverRole GitlabPlanner = new("GITLAB_PLANNER");

    public static readonly ApproverRole GitlabReporter = new("GITLAB_REPORTER");

    public static readonly ApproverRole GitlabDeveloper = new("GITLAB_DEVELOPER");

    public static readonly ApproverRole GitlabMaintainer = new("GITLAB_MAINTAINER");

    public static readonly ApproverRole GitlabOwner = new("GITLAB_OWNER");

    public static readonly ApproverRole BitbucketRead = new("BITBUCKET_READ");

    public static readonly ApproverRole BitbucketWrite = new("BITBUCKET_WRITE");

    public static readonly ApproverRole BitbucketAdmin = new("BITBUCKET_ADMIN");

    public TResult Match<TResult>(Func<TResult> onGithubRead,
        Func<TResult> onGithubTriage,
        Func<TResult> onGithubWrite,
        Func<TResult> onGithubMaintain,
        Func<TResult> onGithubAdmin,
        Func<TResult> onGitlabGuest,
        Func<TResult> onGitlabPlanner,
        Func<TResult> onGitlabReporter,
        Func<TResult> onGitlabDeveloper,
        Func<TResult> onGitlabMaintainer,
        Func<TResult> onGitlabOwner,
        Func<TResult> onBitbucketRead,
        Func<TResult> onBitbucketWrite,
        Func<TResult> onBitbucketAdmin,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GithubRead => onGithubRead(),
            _ when this == GithubTriage => onGithubTriage(),
            _ when this == GithubWrite => onGithubWrite(),
            _ when this == GithubMaintain => onGithubMaintain(),
            _ when this == GithubAdmin => onGithubAdmin(),
            _ when this == GitlabGuest => onGitlabGuest(),
            _ when this == GitlabPlanner => onGitlabPlanner(),
            _ when this == GitlabReporter => onGitlabReporter(),
            _ when this == GitlabDeveloper => onGitlabDeveloper(),
            _ when this == GitlabMaintainer => onGitlabMaintainer(),
            _ when this == GitlabOwner => onGitlabOwner(),
            _ when this == BitbucketRead => onBitbucketRead(),
            _ when this == BitbucketWrite => onBitbucketWrite(),
            _ when this == BitbucketAdmin => onBitbucketAdmin(),
            _ => otherwise(Value)
        };

    public void Match(Action onGithubRead,
        Action onGithubTriage,
        Action onGithubWrite,
        Action onGithubMaintain,
        Action onGithubAdmin,
        Action onGitlabGuest,
        Action onGitlabPlanner,
        Action onGitlabReporter,
        Action onGitlabDeveloper,
        Action onGitlabMaintainer,
        Action onGitlabOwner,
        Action onBitbucketRead,
        Action onBitbucketWrite,
        Action onBitbucketAdmin,
        Action<string> otherwise)
    {
        if (this == GithubRead) onGithubRead();
        else if (this == GithubTriage) onGithubTriage();
        else if (this == GithubWrite) onGithubWrite();
        else if (this == GithubMaintain) onGithubMaintain();
        else if (this == GithubAdmin) onGithubAdmin();
        else if (this == GitlabGuest) onGitlabGuest();
        else if (this == GitlabPlanner) onGitlabPlanner();
        else if (this == GitlabReporter) onGitlabReporter();
        else if (this == GitlabDeveloper) onGitlabDeveloper();
        else if (this == GitlabMaintainer) onGitlabMaintainer();
        else if (this == GitlabOwner) onGitlabOwner();
        else if (this == BitbucketRead) onBitbucketRead();
        else if (this == BitbucketWrite) onBitbucketWrite();
        else if (this == BitbucketAdmin) onBitbucketAdmin();
        else otherwise(Value);
    }
}
