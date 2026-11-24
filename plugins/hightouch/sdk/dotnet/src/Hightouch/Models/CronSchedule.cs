using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record CronSchedule
{
    [JsonPropertyName("expression")]
    public required string Expression { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
