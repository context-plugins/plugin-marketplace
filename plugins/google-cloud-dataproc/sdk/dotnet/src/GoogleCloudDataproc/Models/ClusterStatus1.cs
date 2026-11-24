using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only. Cluster status.
/// </summary>
public record ClusterStatus1
{
    /// <summary>
    /// Optional. Details of cluster's state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    /// <summary>
    /// Output only. Additional state information that includes status reported by the agent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("substate")]
    public Substate? Substate { get; init; }

    /// <summary>
    /// Output only. The cluster's state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State2? State { get; init; }

    /// <summary>
    /// Output only. Time when this state was entered (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateStartTime")]
    public string? StateStartTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
