using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Describes a potential routing change that may occur as a result of some deployment operation.
/// </summary>
public record GoogleCloudApigeeV1DeploymentChangeReportRoutingChange
{
    /// <summary>
    /// Base path/deployment that may start receiving that traffic. May be null if no deployment is able to receive the traffic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toDeployment")]
    public GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2? ToDeployment { get; init; }

    /// <summary>
    /// Human-readable description of this routing change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Set to <c>true</c> if using sequenced rollout would make this routing change safer. <b>Note</b>: This does not necessarily imply that automated sequenced rollout mode is supported for the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shouldSequenceRollout")]
    public bool? ShouldSequenceRollout { get; init; }

    /// <summary>
    /// Name of the environment group affected by this routing change.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentGroup")]
    public string? EnvironmentGroup { get; init; }

    /// <summary>
    /// Base path/deployment that may stop receiving some traffic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fromDeployment")]
    public GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment3? FromDeployment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
