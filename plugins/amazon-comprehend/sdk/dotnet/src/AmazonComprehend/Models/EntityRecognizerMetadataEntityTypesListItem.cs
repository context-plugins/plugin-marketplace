using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record EntityRecognizerMetadataEntityTypesListItem
{
    /// <summary>
    /// Type of entity from the list of entity types in the metadata of an entity recognizer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public string? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluationMetrics")]
    public EntityTypesEvaluationMetrics? EvaluationMetrics { get; init; }

    /// <summary>
    /// Indicates the number of times the given entity type was seen in the training data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfTrainMentions")]
    public int? NumberOfTrainMentions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
