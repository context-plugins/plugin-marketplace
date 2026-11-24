using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Revisions deployed in the MPs.
/// </summary>
public record GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision
{
    /// <summary>
    /// API proxy revision reported as deployed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revision")]
    public string? Revision { get; init; }

    /// <summary>
    /// Percentage of MP replicas reporting this revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("percentage")]
    public int? Percentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
