using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record ColumnMetricMonitorConfigurationDto
{
    [JsonPropertyName("configuration")]
    public required ColumnMonitorConfigurationDto Configuration { get; init; }

    [JsonPropertyName("metricType")]
    public required ColumnMonitorMetricTypeDto MetricType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
