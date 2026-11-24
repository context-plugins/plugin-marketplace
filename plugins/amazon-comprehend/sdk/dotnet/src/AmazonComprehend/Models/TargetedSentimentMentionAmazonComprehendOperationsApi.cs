using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record TargetedSentimentMentionAmazonComprehendOperationsApi
{
    /// <summary>
    /// Model confidence that the entity is relevant. Value range is zero to one, where one is highest confidence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Score")]
    public double? Score { get; init; }

    /// <summary>
    /// The confidence that all the entities mentioned in the group relate to the same entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupScore")]
    public double? GroupScore { get; init; }

    /// <summary>
    /// The text in the document that identifies the entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Text")]
    public string? Text { get; init; }

    /// <summary>
    /// The type of the entity. Amazon Comprehend supports a variety of entity types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public Type4AmazonComprehendOperationsApi? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MentionSentiment")]
    public MentionSentiment? MentionSentiment { get; init; }

    /// <summary>
    /// The offset into the document text where the mention begins.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginOffset")]
    public int? BeginOffset { get; init; }

    /// <summary>
    /// The offset into the document text where the mention ends.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndOffset")]
    public int? EndOffset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
