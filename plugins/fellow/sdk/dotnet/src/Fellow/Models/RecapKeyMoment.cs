using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

public record RecapKeyMoment
{
    [JsonPropertyName("timestamp")]
    public required int Timestamp { get; init; }

    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
