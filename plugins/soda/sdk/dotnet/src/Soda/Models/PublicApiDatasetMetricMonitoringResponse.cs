using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiDatasetMetricMonitoringResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columnMetricMonitors")]
    public IReadOnlyList<ColumnMetricMonitorDto>? ColumnMetricMonitors { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customSqlMetricMonitors")]
    public IReadOnlyList<CustomMetricMonitorDto>? CustomSqlMetricMonitors { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasetId")]
    public string? DatasetId { get; init; }

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
    [JsonPropertyName("partitionColumn")]
    public string? PartitionColumn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scanSchedule")]
    public ZonedCronDto? ScanSchedule { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timePartition")]
    public DatasetTimePartitionDto? TimePartition { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
