using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record CreateWebhookInput
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
    /// An array of arrays of WebhookFilter objects used to determine which webhooks are triggered. At least one WebhookFilter in the array must specify EVENT as its type. For a build to be triggered, at least one filter group in the filterGroups array must pass. For a filter group to pass, each of its filters must pass.
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

    /// <summary>
    /// If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns payloadUrl and secret values for the webhook. The payloadUrl and secret values in the output can be used to manually create a webhook within GitHub. manualCreation is only available for GitHub webhooks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("manualCreation")]
    public bool? ManualCreation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopeConfiguration")]
    public ScopeConfiguration? ScopeConfiguration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pullRequestBuildPolicy")]
    public PullRequestBuildPolicy? PullRequestBuildPolicy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
