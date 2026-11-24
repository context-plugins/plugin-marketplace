using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// A source input type, for this build, that overrides the source input defined in the build project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SourceTypeOverride>))]
public sealed record SourceTypeOverride : OpenStringEnum<SourceTypeOverride>
{
    private SourceTypeOverride(string value) : base(value)
    {
    }

    public static readonly SourceTypeOverride Codecommit = new("CODECOMMIT");

    public static readonly SourceTypeOverride Codepipeline = new("CODEPIPELINE");

    public static readonly SourceTypeOverride Github = new("GITHUB");

    public static readonly SourceTypeOverride Gitlab = new("GITLAB");

    public static readonly SourceTypeOverride GitlabSelfManaged = new("GITLAB_SELF_MANAGED");

    public static readonly SourceTypeOverride S3 = new("S3");

    public static readonly SourceTypeOverride Bitbucket = new("BITBUCKET");

    public static readonly SourceTypeOverride GithubEnterprise = new("GITHUB_ENTERPRISE");

    public static readonly SourceTypeOverride NoSource = new("NO_SOURCE");

    public TResult Match<TResult>(Func<TResult> onCodecommit,
        Func<TResult> onCodepipeline,
        Func<TResult> onGithub,
        Func<TResult> onGitlab,
        Func<TResult> onGitlabSelfManaged,
        Func<TResult> onS3,
        Func<TResult> onBitbucket,
        Func<TResult> onGithubEnterprise,
        Func<TResult> onNoSource,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Codecommit => onCodecommit(),
            _ when this == Codepipeline => onCodepipeline(),
            _ when this == Github => onGithub(),
            _ when this == Gitlab => onGitlab(),
            _ when this == GitlabSelfManaged => onGitlabSelfManaged(),
            _ when this == S3 => onS3(),
            _ when this == Bitbucket => onBitbucket(),
            _ when this == GithubEnterprise => onGithubEnterprise(),
            _ when this == NoSource => onNoSource(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodecommit,
        Action onCodepipeline,
        Action onGithub,
        Action onGitlab,
        Action onGitlabSelfManaged,
        Action onS3,
        Action onBitbucket,
        Action onGithubEnterprise,
        Action onNoSource,
        Action<string> otherwise)
    {
        if (this == Codecommit) onCodecommit();
        else if (this == Codepipeline) onCodepipeline();
        else if (this == Github) onGithub();
        else if (this == Gitlab) onGitlab();
        else if (this == GitlabSelfManaged) onGitlabSelfManaged();
        else if (this == S3) onS3();
        else if (this == Bitbucket) onBitbucket();
        else if (this == GithubEnterprise) onGithubEnterprise();
        else if (this == NoSource) onNoSource();
        else otherwise(Value);
    }
}
