using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiUpdateCustomSqlMonitorResponse
{
    [JsonPropertyName("customSqlMetricMonitor")]
    public required CustomMetricMonitorDto CustomSqlMetricMonitor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
