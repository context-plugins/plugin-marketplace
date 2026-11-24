using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The source input type that overrides the source input defined in the batch build project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>))]
public sealed record SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi : OpenStringEnum<SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>
{
    private SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(string value) : base(value)
    {
    }

    public static readonly SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Codecommit = new(
        "CODECOMMIT");

    public static readonly SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Codepipeline = new(
        "CODEPIPELINE");

    public static readonly SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Github = new("GITHUB");

    public static readonly SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Gitlab = new("GITLAB");

    public static readonly SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi GitlabSelfManaged = new(
        "GITLAB_SELF_MANAGED");

    public static readonly SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi S3 = new("S3");

    public static readonly SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi Bitbucket = new(
        "BITBUCKET");

    public static readonly SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi GithubEnterprise = new(
        "GITHUB_ENTERPRISE");

    public static readonly SourceTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi NoSource = new("NO_SOURCE");

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
