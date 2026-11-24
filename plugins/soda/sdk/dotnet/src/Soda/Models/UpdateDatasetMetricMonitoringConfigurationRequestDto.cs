using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record UpdateDatasetMetricMonitoringConfigurationRequestDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasetMetricMonitorsConfiguration")]
    public IReadOnlyList<DatasetMetricMonitorConfigurationDto>? DatasetMetricMonitorsConfiguration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("historicalMetricCollectionScanStartDate")]
    public DateTimeOffset? HistoricalMetricCollectionScanStartDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scanSchedule")]
    public ZonedCronDto? ScanSchedule { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
