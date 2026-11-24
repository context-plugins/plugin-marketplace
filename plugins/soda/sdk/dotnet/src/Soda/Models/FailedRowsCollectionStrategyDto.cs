using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record FailedRowsCollectionStrategyDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxRowCountOverride")]
    public int? MaxRowCountOverride { get; init; }

    [JsonPropertyName("threshold")]
    public required double Threshold { get; init; }

    [JsonPropertyName("thresholdCondition")]
    public required ThresholdConditionDto ThresholdCondition { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public FailedRowsCollectionStrategyTypeDto? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
