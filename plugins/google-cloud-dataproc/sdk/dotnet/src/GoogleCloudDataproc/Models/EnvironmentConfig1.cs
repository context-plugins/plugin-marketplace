using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Environment configuration for session execution.
/// </summary>
public record EnvironmentConfig1
{
    /// <summary>
    /// Optional. Execution configuration for a workload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionConfig")]
    public ExecutionConfig2? ExecutionConfig { get; init; }

    /// <summary>
    /// Optional. Peripherals configuration that workload has access to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peripheralsConfig")]
    public PeripheralsConfig2? PeripheralsConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
