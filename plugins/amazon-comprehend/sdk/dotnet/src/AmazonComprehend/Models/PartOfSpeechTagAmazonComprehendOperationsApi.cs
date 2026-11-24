using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record PartOfSpeechTagAmazonComprehendOperationsApi
{
    /// <summary>
    /// Identifies the part of speech that the token represents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tag")]
    public TagAmazonComprehendOperationsApi? Tag { get; init; }

    /// <summary>
    /// The confidence that Amazon Comprehend has that the part of speech was correctly identified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Score")]
    public double? Score { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
