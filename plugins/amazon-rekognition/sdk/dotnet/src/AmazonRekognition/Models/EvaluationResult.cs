using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record EvaluationResult
{
    /// <summary>
    /// The F1 score for the evaluation of all labels. The F1 score metric evaluates the overall precision and recall performance of the model as a single value. A higher value indicates better precision and recall performance. A lower score indicates that precision, recall, or both are performing poorly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("F1Score")]
    public double? F1Score { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Summary")]
    public Summary? Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
