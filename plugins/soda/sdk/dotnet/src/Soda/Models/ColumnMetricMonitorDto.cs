using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record ColumnMetricMonitorDto
{
    [JsonPropertyName("checkId")]
    public required string CheckId { get; init; }

    [JsonPropertyName("columnName")]
    public required string ColumnName { get; init; }

    [JsonPropertyName("configuration")]
    public required ColumnMonitorConfigurationDto Configuration { get; init; }

    [JsonPropertyName("metricType")]
    public required ColumnMonitorMetricTypeDto MetricType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
