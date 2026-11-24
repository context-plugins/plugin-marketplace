using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The status of a deployment as reported by a single instance.
/// </summary>
public record GoogleCloudApigeeV1InstanceDeploymentStatus
{
    /// <summary>
    /// Revisions currently deployed in MPs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployedRevisions")]
    public IReadOnlyList<GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision>? DeployedRevisions { get; init; }

    /// <summary>
    /// ID of the instance reporting the status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instance")]
    public string? Instance { get; init; }

    /// <summary>
    /// Current routes deployed in the ingress routing table. A route which is missing will appear in <c>missing_routes</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployedRoutes")]
    public IReadOnlyList<GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute>? DeployedRoutes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
