using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ScopeConfiguration
{
    /// <summary>
    /// The name of either the group, enterprise, or organization that will send webhook events to CodeBuild, depending on the type of webhook.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The domain of the GitHub Enterprise organization or the GitLab Self Managed group. Note that this parameter is only required if your project's source type is GITHUB_ENTERPRISE or GITLAB_SELF_MANAGED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// The type of scope for a GitHub or GitLab webhook. The scope default is GITHUB_ORGANIZATION.
    /// </summary>
    [JsonPropertyName("scope")]
    public required Scope Scope { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
