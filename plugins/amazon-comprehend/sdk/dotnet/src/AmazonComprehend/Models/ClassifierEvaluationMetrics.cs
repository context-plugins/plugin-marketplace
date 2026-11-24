using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ClassifierEvaluationMetrics
{
    /// <summary>
    /// The fraction of the labels that were correct recognized. It is computed by dividing the number of labels in the test documents that were correctly recognized by the total number of labels in the test documents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Accuracy")]
    public double? Accuracy { get; init; }

    /// <summary>
    /// A measure of the usefulness of the classifier results in the test data. High precision means that the classifier returned substantially more relevant results than irrelevant ones.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Precision")]
    public double? Precision { get; init; }

    /// <summary>
    /// A measure of how complete the classifier results are for the test data. High recall means that the classifier returned most of the relevant results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Recall")]
    public double? Recall { get; init; }

    /// <summary>
    /// A measure of how accurate the classifier results are for the test data. It is derived from the Precision and Recall values. The F1Score is the harmonic average of the two scores. The highest score is 1, and the worst score is 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("F1Score")]
    public double? F1Score { get; init; }

    /// <summary>
    /// A measure of the usefulness of the recognizer results in the test data. High precision means that the recognizer returned substantially more relevant results than irrelevant ones. Unlike the Precision metric which comes from averaging the precision of all available labels, this is based on the overall score of all precision scores added together.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MicroPrecision")]
    public double? MicroPrecision { get; init; }

    /// <summary>
    /// A measure of how complete the classifier results are for the test data. High recall means that the classifier returned most of the relevant results. Specifically, this indicates how many of the correct categories in the text that the model can predict. It is a percentage of correct categories in the text that can found. Instead of averaging the recall scores of all labels (as with Recall), micro Recall is based on the overall score of all recall scores added together.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MicroRecall")]
    public double? MicroRecall { get; init; }

    /// <summary>
    /// A measure of how accurate the classifier results are for the test data. It is a combination of the Micro Precision and Micro Recall values. The Micro F1Score is the harmonic mean of the two scores. The highest score is 1, and the worst score is 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MicroF1Score")]
    public double? MicroF1Score { get; init; }

    /// <summary>
    /// Indicates the fraction of labels that are incorrectly predicted. Also seen as the fraction of wrong labels compared to the total number of labels. Scores closer to zero are better.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HammingLoss")]
    public double? HammingLoss { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
