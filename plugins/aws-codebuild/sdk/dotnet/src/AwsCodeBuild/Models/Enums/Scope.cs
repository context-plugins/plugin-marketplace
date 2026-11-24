using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of scope for a GitHub or GitLab webhook. The scope default is GITHUB_ORGANIZATION.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope GithubOrganization = new("GITHUB_ORGANIZATION");

    public static readonly Scope GithubGlobal = new("GITHUB_GLOBAL");

    public static readonly Scope GitlabGroup = new("GITLAB_GROUP");

    public TResult Match<TResult>(Func<TResult> onGithubOrganization,
        Func<TResult> onGithubGlobal,
        Func<TResult> onGitlabGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GithubOrganization => onGithubOrganization(),
            _ when this == GithubGlobal => onGithubGlobal(),
            _ when this == GitlabGroup => onGitlabGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onGithubOrganization,
        Action onGithubGlobal,
        Action onGitlabGroup,
        Action<string> otherwise)
    {
        if (this == GithubOrganization) onGithubOrganization();
        else if (this == GithubGlobal) onGithubGlobal();
        else if (this == GitlabGroup) onGitlabGroup();
        else otherwise(Value);
    }
}
