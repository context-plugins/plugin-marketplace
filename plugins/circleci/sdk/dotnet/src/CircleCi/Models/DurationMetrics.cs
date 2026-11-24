using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

/// <summary>
/// Duration statistics
/// </summary>
public record DurationMetrics
{
    /// <summary>
    /// Minimum duration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("min")]
    public int? Min { get; init; }

    /// <summary>
    /// Mean duration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mean")]
    public int? Mean { get; init; }

    /// <summary>
    /// Median duration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("median")]
    public int? Median { get; init; }

    /// <summary>
    /// 95th percentile duration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("p95")]
    public int? P95 { get; init; }

    /// <summary>
    /// Maximum duration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max")]
    public int? Max { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
