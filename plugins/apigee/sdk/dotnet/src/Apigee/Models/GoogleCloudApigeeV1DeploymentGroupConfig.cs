using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// DeploymentGroupConfig represents a deployment group that should be present in a particular environment.
/// </summary>
public record GoogleCloudApigeeV1DeploymentGroupConfig
{
    /// <summary>
    /// Unique ID. The ID will only change if the deployment group is deleted and recreated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Revision number which can be used by the runtime to detect if the deployment group has changed between two versions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// Name of the deployment group in the following format: <c>organizations/{org}/environments/{env}/deploymentGroups/{group}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Type of the deployment group, which will be either Standard or Extensible.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentGroupType")]
    public DeploymentGroupType? DeploymentGroupType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
