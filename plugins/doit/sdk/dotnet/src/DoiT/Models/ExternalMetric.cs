using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Metric selector used in reports and filters.
/// </summary>
public record ExternalMetric
{
    /// <summary>
    /// Type of metric to use.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2DoiTReportsApi Type { get; init; }

    /// <summary>
    /// For basic metrics, the value can be one of: ["cost", "usage", "savings"]
    /// If using custom metrics, the value must refer to an existing custom metric ID.
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
