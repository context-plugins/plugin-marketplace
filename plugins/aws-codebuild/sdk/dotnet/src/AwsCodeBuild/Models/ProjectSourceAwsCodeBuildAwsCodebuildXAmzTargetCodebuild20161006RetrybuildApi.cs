using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ProjectSourceAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi
{
    /// <summary>
    /// The type of repository that contains the source code to be built. Valid values include: BITBUCKET: The source code is in a Bitbucket repository. CODECOMMIT: The source code is in an CodeCommit repository. CODEPIPELINE: The source code settings are specified in the source action of a pipeline in CodePipeline. GITHUB: The source code is in a GitHub repository. GITHUB_ENTERPRISE: The source code is in a GitHub Enterprise Server repository. GITLAB: The source code is in a GitLab repository. GITLAB_SELF_MANAGED: The source code is in a self-managed GitLab repository. NO_SOURCE: The project does not
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Type { get; init; }

    /// <summary>
    /// Information about the location of the source code to be built. Valid values include: For source code settings that are specified in the source action of a pipeline in CodePipeline, location should not be specified. If it is specified, CodePipeline ignores it. This is because CodePipeline uses the settings in a pipeline's source action instead of this value. For source code in an CodeCommit repository, the HTTPS clone URL to the repository that contains the source code and the buildspec file (for example, https://git-codecommit..amazonaws.com/v1/repos/). For source code in an Amazon S3 input bu
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// Information about the Git clone depth for the build project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gitCloneDepth")]
    public int? GitCloneDepth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gitSubmodulesConfig")]
    public GitSubmodulesConfig? GitSubmodulesConfig { get; init; }

    /// <summary>
    /// The buildspec file declaration to use for the builds in this build project. If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in CODEBUILD_SRC_DIR environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, arn:aws:s3:::my-codebuild-sample2/buildspec.yml). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root dir
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildspec")]
    public string? Buildspec { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auth")]
    public SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi? Auth { get; init; }

    /// <summary>
    /// Set to true to report the status of a build's start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, GitLab, GitLab Self Managed, or Bitbucket. If this is set and you use a different source provider, an invalidInputException is thrown. To be able to report the build status to the source provider, the user associated with the source provider must have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see Source provider acces
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportBuildStatus")]
    public bool? ReportBuildStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildStatusConfig")]
    public BuildStatusConfig? BuildStatusConfig { get; init; }

    /// <summary>
    /// Enable this flag to ignore SSL warnings while connecting to the project source code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insecureSsl")]
    public bool? InsecureSsl { get; init; }

    /// <summary>
    /// An identifier for this project source. The identifier can only contain alphanumeric characters and underscores, and must be less than 128 characters in length.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceIdentifier")]
    public string? SourceIdentifier { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
