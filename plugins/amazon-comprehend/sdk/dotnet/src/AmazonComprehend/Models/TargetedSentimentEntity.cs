using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record TargetedSentimentEntity
{
    /// <summary>
    /// One or more index into the Mentions array that provides the best name for the entity group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DescriptiveMentionIndex")]
    public IReadOnlyList<int>? DescriptiveMentionIndex { get; init; }

    /// <summary>
    /// An array of mentions of the entity in the document. The array represents a co-reference group. See Co-reference group for an example.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Mentions")]
    public IReadOnlyList<TargetedSentimentMention>? Mentions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
