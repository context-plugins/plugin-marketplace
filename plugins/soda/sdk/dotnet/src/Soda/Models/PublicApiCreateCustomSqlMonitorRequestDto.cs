using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiCreateCustomSqlMonitorRequestDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columnName")]
    public string? ColumnName { get; init; }

    [JsonPropertyName("configuration")]
    public required CustomSqlMonitorConfigurationDto Configuration { get; init; }

    [JsonPropertyName("monitorName")]
    public required string MonitorName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
