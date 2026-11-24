using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyIntent
{
    [JsonPropertyName("detectedTopics")]
    public required IReadOnlyList<CompanyIntentTopic> DetectedTopics { get; init; }

    [JsonPropertyName("topicCount")]
    public required double TopicCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
