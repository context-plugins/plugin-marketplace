using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record EntityRecognizerMetadata
{
    /// <summary>
    /// The number of documents in the input data that were used to train the entity recognizer. Typically this is 80 to 90 percent of the input documents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfTrainedDocuments")]
    public int? NumberOfTrainedDocuments { get; init; }

    /// <summary>
    /// The number of documents in the input data that were used to test the entity recognizer. Typically this is 10 to 20 percent of the input documents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfTestDocuments")]
    public int? NumberOfTestDocuments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluationMetrics")]
    public EntityRecognizerEvaluationMetrics? EvaluationMetrics { get; init; }

    /// <summary>
    /// Entity types from the metadata of an entity recognizer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntityTypes")]
    public IReadOnlyList<EntityRecognizerMetadataEntityTypesListItem>? EntityTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
