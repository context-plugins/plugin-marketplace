using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record UsageStats
{
    [JsonPropertyName("used")]
    public required double Used { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    [JsonPropertyName("remaining")]
    public required double Remaining { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
