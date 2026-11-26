using System.Text.Json.Serialization;
using ForceDream.Core.Models;

namespace ForceDream.Models;

/// <summary>
/// Honestly null where no real reliability data exists yet.
/// </summary>
public record AgentReliability
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success_rate")]
    public double? SuccessRate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avg_latency_ms")]
    public double? AvgLatencyMs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sample_size")]
    public int? SampleSize { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
