using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record PiiEntity
{
    /// <summary>
    /// The level of confidence that Amazon Comprehend has in the accuracy of the detection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Score")]
    public double? Score { get; init; }

    /// <summary>
    /// The entity's type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public Type4? Type { get; init; }

    /// <summary>
    /// The zero-based offset from the beginning of the source text to the first character in the entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginOffset")]
    public int? BeginOffset { get; init; }

    /// <summary>
    /// The zero-based offset from the beginning of the source text to the last character in the entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndOffset")]
    public int? EndOffset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
