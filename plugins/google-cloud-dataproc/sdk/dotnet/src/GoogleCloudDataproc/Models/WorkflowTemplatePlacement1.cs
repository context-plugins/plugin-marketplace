using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Required. WorkflowTemplate scheduling information.
/// </summary>
public record WorkflowTemplatePlacement1
{
    /// <summary>
    /// Optional. A selector that chooses target cluster for jobs based on metadata.The selector is evaluated at the time each job is submitted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterSelector")]
    public ClusterSelector2? ClusterSelector { get; init; }

    /// <summary>
    /// A cluster that is managed by the workflow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("managedCluster")]
    public ManagedCluster2? ManagedCluster { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
