using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record UpdateWebhookInput
{
    /// <summary>
    /// The name of the CodeBuild project.
    /// </summary>
    [JsonPropertyName("projectName")]
    public required string ProjectName { get; init; }

    /// <summary>
    /// A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If branchFilter is empty, then all branches are built. It is recommended that you use filterGroups instead of branchFilter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branchFilter")]
    public string? BranchFilter { get; init; }

    /// <summary>
    /// A boolean value that specifies whether the associated GitHub repository's secret token should be updated. If you use Bitbucket for your repository, rotateSecret is ignored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rotateSecret")]
    public bool? RotateSecret { get; init; }

    /// <summary>
    /// An array of arrays of WebhookFilter objects used to determine if a webhook event can trigger a build. A filter group must contain at least one EVENT WebhookFilter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filterGroups")]
    public IReadOnlyList<IReadOnlyList<WebhookFilter>>? FilterGroups { get; init; }

    /// <summary>
    /// Specifies the type of build this webhook will trigger. RUNNER_BUILDKITE_BUILD is only available for NO_SOURCE source type projects configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite runner builds, see Tutorial: Configure a CodeBuild-hosted Buildkite runner in the CodeBuild user guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildType")]
    public BuildType? BuildType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pullRequestBuildPolicy")]
    public PullRequestBuildPolicy? PullRequestBuildPolicy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
