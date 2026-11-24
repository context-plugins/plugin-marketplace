using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiCreateCustomSqlMonitorResponse
{
    [JsonPropertyName("customSqlMonitor")]
    public required CustomMetricMonitorDto CustomSqlMonitor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
