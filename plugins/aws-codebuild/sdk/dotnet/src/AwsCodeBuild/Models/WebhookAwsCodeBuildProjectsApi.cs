using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record WebhookAwsCodeBuildProjectsApi
{
    /// <summary>
    /// The URL to the webhook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// The CodeBuild endpoint where webhook events are sent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payloadUrl")]
    public string? PayloadUrl { get; init; }

    /// <summary>
    /// The secret token of the associated repository. A Bitbucket webhook does not support secret.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secret")]
    public string? Secret { get; init; }

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
    public IReadOnlyList<IReadOnlyList<WebhookFilterAwsCodeBuildProjectsApi>>? FilterGroups { get; init; }

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

    /// <summary>
    /// A timestamp that indicates the last time a repository's secret token was modified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedSecret")]
    public DateTimeOffset? LastModifiedSecret { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopeConfiguration")]
    public ScopeConfiguration? ScopeConfiguration { get; init; }

    /// <summary>
    /// The status of the webhook. Valid values include: CREATING: The webhook is being created. CREATE_FAILED: The webhook has failed to create. ACTIVE: The webhook has succeeded and is active. DELETING: The webhook is being deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusAwsCodeBuildProjectsApi? Status { get; init; }

    /// <summary>
    /// A message associated with the status of a webhook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusMessage")]
    public string? StatusMessage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pullRequestBuildPolicy")]
    public PullRequestBuildPolicy? PullRequestBuildPolicy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
