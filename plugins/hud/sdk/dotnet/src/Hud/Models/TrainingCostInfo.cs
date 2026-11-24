using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TrainingCostInfo
{
    [JsonPropertyName("total_cost")]
    public required double TotalCost { get; init; }

    [JsonPropertyName("hourly_rate")]
    public required double HourlyRate { get; init; }

    [JsonPropertyName("runtime_seconds")]
    public required double RuntimeSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
