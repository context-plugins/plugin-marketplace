using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// RDD operation graph for a Spark Application Stage.
/// </summary>
public record RddOperationGraph1
{
    /// <summary>
    /// A grouping of nodes representing higher level constructs (stage, job etc.).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rootCluster")]
    public RddOperationCluster? RootCluster { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("edges")]
    public IReadOnlyList<RddOperationEdge>? Edges { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outgoingEdges")]
    public IReadOnlyList<RddOperationEdge>? OutgoingEdges { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stageId")]
    public string? StageId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("incomingEdges")]
    public IReadOnlyList<RddOperationEdge>? IncomingEdges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
