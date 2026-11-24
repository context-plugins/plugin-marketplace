using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record Topic
{
    [JsonPropertyName("topic")]
    public required string TopicValue { get; init; }

    [JsonPropertyName("relevance")]
    public required double Relevance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
