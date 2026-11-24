using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record ThresholdStrategyDto
{
    [JsonPropertyName("isLowerBoundEnabled")]
    public required bool IsLowerBoundEnabled { get; init; }

    [JsonPropertyName("isUpperBoundEnabled")]
    public required bool IsUpperBoundEnabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
