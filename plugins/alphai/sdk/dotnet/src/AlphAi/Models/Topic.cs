using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record Topic
{
    [JsonPropertyName("topic")]
    public required string TopicValue { get; init; }

    [JsonPropertyName("relevance")]
    public required double Relevance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
