using System.Text.Json.Serialization;
using Soda.Core.Models;
using Soda.Models.Enums;

namespace Soda.Models;

public record DatasetMetricMonitorConfigurationDto
{
    [JsonPropertyName("configuration")]
    public required DatasetMonitorConfigurationDto Configuration { get; init; }

    [JsonPropertyName("metricType")]
    public required DatasetMonitorMetricTypeDto MetricType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
