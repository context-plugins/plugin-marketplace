using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record ZonedCronDto
{
    [JsonPropertyName("cronExpression")]
    public required string CronExpression { get; init; }

    [JsonPropertyName("timezone")]
    public required string Timezone { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
