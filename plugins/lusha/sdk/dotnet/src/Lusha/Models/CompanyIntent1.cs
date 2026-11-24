using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

/// <summary>
/// A list of detected intent topics related to the company based on your account's mapped topics.
/// </summary>
public record CompanyIntent1
{
    [JsonPropertyName("detectedTopics")]
    public required IReadOnlyList<CompanyIntentTopic> DetectedTopics { get; init; }

    [JsonPropertyName("topicCount")]
    public required double TopicCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
