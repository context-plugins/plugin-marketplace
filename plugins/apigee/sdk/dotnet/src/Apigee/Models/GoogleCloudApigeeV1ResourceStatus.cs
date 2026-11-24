using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The status of a resource loaded in the runtime.
/// </summary>
public record GoogleCloudApigeeV1ResourceStatus
{
    /// <summary>
    /// The resource name. Currently only two resources are supported: EnvironmentGroup - organizations/{org}/envgroups/{envgroup} EnvironmentConfig - organizations/{org}/environments/{environment}/deployedConfig
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource")]
    public string? Resource { get; init; }

    /// <summary>
    /// The uid of the resource. In the unexpected case that the instance has multiple uids for the same name, they should be reported under separate ResourceStatuses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Revisions of the resource currently deployed in the instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisions")]
    public IReadOnlyList<GoogleCloudApigeeV1RevisionStatus>? Revisions { get; init; }

    /// <summary>
    /// The total number of replicas that should have this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalReplicas")]
    public int? TotalReplicas { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
