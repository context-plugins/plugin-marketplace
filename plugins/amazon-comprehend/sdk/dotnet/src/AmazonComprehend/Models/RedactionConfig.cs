using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record RedactionConfig
{
    /// <summary>
    /// An array of the types of PII entities that Amazon Comprehend detects in the input text for your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PiiEntityTypes")]
    public IReadOnlyList<PiiEntityType>? PiiEntityTypes { get; init; }

    /// <summary>
    /// Specifies whether the PII entity is redacted with the mask character or the entity type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaskMode")]
    public MaskMode? MaskMode { get; init; }

    /// <summary>
    /// A character that replaces each character in the redacted PII entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaskCharacter")]
    public string? MaskCharacter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
