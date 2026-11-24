using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record BuyerIntent
{
    [JsonPropertyName("topicCount")]
    public required int TopicCount { get; init; }

    [JsonPropertyName("detectedTopics")]
    public required IReadOnlyList<CompanyIntentTopic> DetectedTopics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
