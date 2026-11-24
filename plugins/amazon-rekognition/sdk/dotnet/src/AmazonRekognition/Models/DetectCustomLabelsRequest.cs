using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DetectCustomLabelsRequest
{
    /// <summary>
    /// The ARN of the model version that you want to use. Only models associated with Custom Labels projects accepted by the operation. If a provided ARN refers to a model version associated with a project for a different feature type, then an InvalidParameterException is returned.
    /// </summary>
    [JsonPropertyName("ProjectVersionArn")]
    public required string ProjectVersionArn { get; init; }

    [JsonPropertyName("Image")]
    public required Image Image { get; init; }

    /// <summary>
    /// Maximum number of results you want the service to return in the response. The service returns the specified number of highest confidence labels ranked from highest confidence to lowest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// Specifies the minimum confidence level for the labels to return. DetectCustomLabels doesn't return any labels with a confidence value that's lower than this specified value. If you specify a value of 0, DetectCustomLabels returns all labels, regardless of the assumed threshold applied to each label. If you don't specify a value for MinConfidence, DetectCustomLabels returns labels based on the assumed threshold of each label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MinConfidence")]
    public double? MinConfidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
