using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A selector that chooses target cluster for jobs based on metadata.
/// </summary>
public record ClusterSelector
{
    /// <summary>
    /// Optional. The zone where workflow process executes. This parameter does not affect the selection of the cluster.If unspecified, the zone of the first cluster matching the selector is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zone")]
    public string? Zone { get; init; }

    /// <summary>
    /// Required. The cluster labels. Cluster must have all labels to match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterLabels")]
    public IReadOnlyDictionary<string, string>? ClusterLabels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
