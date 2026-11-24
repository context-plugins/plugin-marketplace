using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Describes a routing conflict that may cause a deployment not to receive traffic at some base path.
/// </summary>
public record GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict
{
    /// <summary>
    /// Existing base path/deployment causing the conflict.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conflictingDeployment")]
    public GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4? ConflictingDeployment { get; init; }

    /// <summary>
    /// Human-readable description of this conflict.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Name of the environment group in which this conflict exists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentGroup")]
    public string? EnvironmentGroup { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
