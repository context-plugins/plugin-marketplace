using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DetectEntitiesResponse
{
    /// <summary>
    /// A collection of entities identified in the input text. For each entity, the response provides the entity text, entity type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the detection. If your request uses a custom entity recognition model, Amazon Comprehend detects the entities that the model is trained to recognize. Otherwise, it detects the default entity types. For a list of default entity types, see Entities in the Comprehend Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Entities")]
    public IReadOnlyList<Entity>? Entities { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentMetadata")]
    public DocumentMetadata? DocumentMetadata { get; init; }

    /// <summary>
    /// The document type for each page in the input document. This field is present in the response only if your request used the Byte parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DocumentType")]
    public IReadOnlyList<DocumentTypeListItem>? DocumentType { get; init; }

    /// <summary>
    /// Information about each block of text in the input document. Blocks are nested. A page block contains a block for each line of text, which contains a block for each word. The Block content for a Word input document does not include a Geometry field. The Block field is not present in the response for plain-text inputs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Blocks")]
    public IReadOnlyList<Block>? Blocks { get; init; }

    /// <summary>
    /// Page-level errors that the system detected while processing the input document. The field is empty if the system encountered no errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Errors")]
    public IReadOnlyList<ErrorsListItem>? Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
