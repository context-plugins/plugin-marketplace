using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

/// <summary>
/// Measurement details for the line item.
/// </summary>
public record LineItemMeasurements
{
    /// <summary>
    /// The measurement amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// The measurement unit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit")]
    public string? Unit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
