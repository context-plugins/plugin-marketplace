using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record Entity
{
    /// <summary>
    /// The level of confidence that Amazon Comprehend has in the accuracy of the detection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Score")]
    public double? Score { get; init; }

    /// <summary>
    /// The entity type. For entity detection using the built-in model, this field contains one of the standard entity types listed below. For custom entity detection, this field contains one of the entity types that you specified when you trained your custom model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// The text of the entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Text")]
    public string? Text { get; init; }

    /// <summary>
    /// The zero-based offset from the beginning of the source text to the first character in the entity. This field is empty for non-text input.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginOffset")]
    public int? BeginOffset { get; init; }

    /// <summary>
    /// The zero-based offset from the beginning of the source text to the last character in the entity. This field is empty for non-text input.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndOffset")]
    public int? EndOffset { get; init; }

    /// <summary>
    /// A reference to each block for this entity. This field is empty for plain-text input.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BlockReferences")]
    public IReadOnlyList<BlockReference>? BlockReferences { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
