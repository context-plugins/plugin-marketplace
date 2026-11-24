using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Define how metrics are selected and filtered in reports.
/// </summary>
public record MetricConfig
{
    /// <summary>
    /// Identifier for metric type (e.g., basic, custom, extended).
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
