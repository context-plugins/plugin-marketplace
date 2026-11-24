using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Placeholder size-based estimate, pending calibration from run actuals.
/// </summary>
public record ImportEstimateResponse
{
    [JsonPropertyName("seconds")]
    public required int Seconds { get; init; }

    [JsonPropertyName("credits")]
    public required double Credits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
