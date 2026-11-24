using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record HistoryItem
{
    /// <summary>
    /// Amount value in the reported period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    /// <summary>
    /// Reporting period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period")]
    public string? Period { get; init; }

    /// <summary>
    /// Percentage change compared to previous period
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("change")]
    public string? Change { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
