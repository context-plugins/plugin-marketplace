using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of repository that contains the source code to be built. Valid values include: BITBUCKET: The source code is in a Bitbucket repository. CODECOMMIT: The source code is in an CodeCommit repository. CODEPIPELINE: The source code settings are specified in the source action of a pipeline in CodePipeline. GITHUB: The source code is in a GitHub repository. GITHUB_ENTERPRISE: The source code is in a GitHub Enterprise Server repository. GITLAB: The source code is in a GitLab repository. GITLAB_SELF_MANAGED: The source code is in a self-managed GitLab repository. NO_SOURCE: The project does not
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>))]
public sealed record TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi : OpenStringEnum<TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>
{
    private TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi(string value) : base(value)
    {
    }

    public static readonly TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Codecommit = new(
        "CODECOMMIT");

    public static readonly TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Codepipeline = new(
        "CODEPIPELINE");

    public static readonly TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Github = new("GITHUB");

    public static readonly TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Gitlab = new("GITLAB");

    public static readonly TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi GitlabSelfManaged = new(
        "GITLAB_SELF_MANAGED");

    public static readonly TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi S3 = new("S3");

    public static readonly TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Bitbucket = new(
        "BITBUCKET");

    public static readonly TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi GithubEnterprise = new(
        "GITHUB_ENTERPRISE");

    public static readonly TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi NoSource = new(
        "NO_SOURCE");

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
