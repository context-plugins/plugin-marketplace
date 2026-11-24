using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiCreateColumnMetricMonitorResponse
{
    [JsonPropertyName("columnMetricMonitor")]
    public required ColumnMetricMonitorDto ColumnMetricMonitor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
