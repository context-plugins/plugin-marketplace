using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record DbtSchedule
{
    [JsonPropertyName("account")]
    public required Account Account { get; init; }

    [JsonPropertyName("job")]
    public required Job Job { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
