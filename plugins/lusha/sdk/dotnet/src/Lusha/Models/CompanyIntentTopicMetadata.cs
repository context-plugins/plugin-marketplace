using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyIntentTopicMetadata
{
    [JsonPropertyName("topicScore")]
    public required double TopicScore { get; init; }

    [JsonPropertyName("topicTrend")]
    public required string TopicTrend { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
