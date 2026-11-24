using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The execution status for the plugin instance.
/// </summary>
public record GoogleCloudApihubV1ExecutionStatus
{
    /// <summary>
    /// Output only. The current state of the execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentExecutionState")]
    public CurrentExecutionState? CurrentExecutionState { get; init; }

    /// <summary>
    /// Output only. The last execution of the plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastExecution")]
    public GoogleCloudApihubV1LastExecution1? LastExecution { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
