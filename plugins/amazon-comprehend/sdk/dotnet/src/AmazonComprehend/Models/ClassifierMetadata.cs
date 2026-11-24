using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ClassifierMetadata
{
    /// <summary>
    /// The number of labels in the input data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfLabels")]
    public int? NumberOfLabels { get; init; }

    /// <summary>
    /// The number of documents in the input data that were used to train the classifier. Typically this is 80 to 90 percent of the input documents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfTrainedDocuments")]
    public int? NumberOfTrainedDocuments { get; init; }

    /// <summary>
    /// The number of documents in the input data that were used to test the classifier. Typically this is 10 to 20 percent of the input documents, up to 10,000 documents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberOfTestDocuments")]
    public int? NumberOfTestDocuments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluationMetrics")]
    public ClassifierEvaluationMetrics? EvaluationMetrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
