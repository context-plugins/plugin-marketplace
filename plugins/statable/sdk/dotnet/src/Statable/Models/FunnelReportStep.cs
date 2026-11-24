using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Models.Enums;

namespace Statable.Models;

/// <summary>
/// One step's outcome. Steps are ordered — do not sort them.
/// </summary>
public record FunnelReportStep
{
    /// <summary>
    /// 0-based position in the funnel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("index")]
    public int? Index { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind? Kind { get; init; }

    /// <summary>
    /// Visitors/visits that reached this step.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visitors")]
    public long? Visitors { get; init; }

    /// <summary>
    /// visitors / entering * 100 — cumulative vs the first step, NOT step-to-step.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversion_rate")]
    public double? ConversionRate { get; init; }

    /// <summary>
    /// Visitors lost versus the previous step.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dropoff")]
    public long? Dropoff { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
