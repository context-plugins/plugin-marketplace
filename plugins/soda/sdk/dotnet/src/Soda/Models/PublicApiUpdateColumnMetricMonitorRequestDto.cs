using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record PublicApiUpdateColumnMetricMonitorRequestDto
{
    [JsonPropertyName("configuration")]
    public required ColumnMonitorConfigurationDto Configuration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
