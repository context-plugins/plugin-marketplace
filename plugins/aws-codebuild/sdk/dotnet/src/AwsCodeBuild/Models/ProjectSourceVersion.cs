using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record ProjectSourceVersion
{
    /// <summary>
    /// An identifier for a source in the build project. The identifier can only contain alphanumeric characters and underscores, and must be less than 128 characters in length.
    /// </summary>
    [JsonPropertyName("sourceIdentifier")]
    public required string SourceIdentifier { get; init; }

    /// <summary>
    /// The source version for the corresponding source identifier. If specified, must be one of: For CodeCommit: the commit ID, branch, or Git tag to use. For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example, pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used. For GitLab: the commit ID, branch, or Git tag to use. For Bitbucket: the commit ID,
    /// </summary>
    [JsonPropertyName("sourceVersion")]
    public required string SourceVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
