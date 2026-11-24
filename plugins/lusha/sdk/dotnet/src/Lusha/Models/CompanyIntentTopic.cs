using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyIntentTopic
{
    [JsonPropertyName("topicName")]
    public required string TopicName { get; init; }

    [JsonPropertyName("metadata")]
    public required CompanyIntentTopicMetadata Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
