using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record CustomSqlMonitorConfigurationDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groupByColumnNames")]
    public IReadOnlyList<string>? GroupByColumnNames { get; init; }

    [JsonPropertyName("resultMetric")]
    public required string ResultMetric { get; init; }

    [JsonPropertyName("sqlQuery")]
    public required string SqlQuery { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exclusionZones")]
    public IReadOnlyList<ExclusionZoneDto>? ExclusionZones { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isEnabled")]
    public bool? IsEnabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isSamplingEnabled")]
    public bool? IsSamplingEnabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sensitivity")]
    public double? Sensitivity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thresholdStrategy")]
    public ThresholdStrategyDto? ThresholdStrategy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validRange")]
    public ValidRangeDto? ValidRange { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
