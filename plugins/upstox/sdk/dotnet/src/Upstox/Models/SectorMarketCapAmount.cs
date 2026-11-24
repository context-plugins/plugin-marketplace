using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record SectorMarketCapAmount
{
    /// <summary>
    /// Numeric value of the market capitalisation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    /// <summary>
    /// Unit of the market capitalisation value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit")]
    public string? Unit { get; init; }

    /// <summary>
    /// Human-readable formatted market capitalisation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formatted")]
    public string? Formatted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
