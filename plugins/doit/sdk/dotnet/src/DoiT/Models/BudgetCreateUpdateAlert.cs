using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Threshold settings for budget alerts.
/// </summary>
public record BudgetCreateUpdateAlert
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("percentage")]
    public double? Percentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
