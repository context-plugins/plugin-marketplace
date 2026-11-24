using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiCreateColumnMetricMonitorRequestDto
{
    [JsonPropertyName("columnMetricMonitorConfiguration")]
    public required ColumnMetricMonitorConfigurationDto ColumnMetricMonitorConfiguration { get; init; }

    [JsonPropertyName("columnName")]
    public required string ColumnName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
