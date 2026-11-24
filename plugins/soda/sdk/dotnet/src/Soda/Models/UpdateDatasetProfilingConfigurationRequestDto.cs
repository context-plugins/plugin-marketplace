using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record UpdateDatasetProfilingConfigurationRequestDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profilingSamplingStrategy")]
    public ProfilingSamplingStrategyConfigurationDto? ProfilingSamplingStrategy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scanSchedule")]
    public ZonedCronDto? ScanSchedule { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
