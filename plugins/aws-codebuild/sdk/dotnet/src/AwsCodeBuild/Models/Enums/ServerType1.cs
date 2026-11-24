using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, GITLAB, GITLAB_SELF_MANAGED, or BITBUCKET.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ServerType1>))]
public sealed record ServerType1 : OpenStringEnum<ServerType1>
{
    private ServerType1(string value) : base(value)
    {
    }

    public static readonly ServerType1 Github = new("GITHUB");

    public static readonly ServerType1 Bitbucket = new("BITBUCKET");

    public static readonly ServerType1 GithubEnterprise = new("GITHUB_ENTERPRISE");

    public static readonly ServerType1 Gitlab = new("GITLAB");

    public static readonly ServerType1 GitlabSelfManaged = new("GITLAB_SELF_MANAGED");

    public TResult Match<TResult>(Func<TResult> onGithub,
        Func<TResult> onBitbucket,
        Func<TResult> onGithubEnterprise,
        Func<TResult> onGitlab,
        Func<TResult> onGitlabSelfManaged,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Github => onGithub(),
            _ when this == Bitbucket => onBitbucket(),
            _ when this == GithubEnterprise => onGithubEnterprise(),
            _ when this == Gitlab => onGitlab(),
            _ when this == GitlabSelfManaged => onGitlabSelfManaged(),
            _ => otherwise(Value)
        };

    public void Match(Action onGithub,
        Action onBitbucket,
        Action onGithubEnterprise,
        Action onGitlab,
        Action onGitlabSelfManaged,
        Action<string> otherwise)
    {
        if (this == Github) onGithub();
        else if (this == Bitbucket) onBitbucket();
        else if (this == GithubEnterprise) onGithubEnterprise();
        else if (this == Gitlab) onGitlab();
        else if (this == GitlabSelfManaged) onGitlabSelfManaged();
        else otherwise(Value);
    }
}
