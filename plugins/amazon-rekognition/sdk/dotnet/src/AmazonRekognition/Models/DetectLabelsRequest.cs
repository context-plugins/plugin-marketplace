using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record DetectLabelsRequest
{
    [JsonPropertyName("Image")]
    public required Image Image { get; init; }

    /// <summary>
    /// Maximum number of labels you want the service to return in the response. The service returns the specified number of highest confidence labels. Only valid when GENERAL_LABELS is specified as a feature type in the Feature input parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxLabels")]
    public int? MaxLabels { get; init; }

    /// <summary>
    /// Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with confidence lower than this specified value. If MinConfidence is not specified, the operation returns labels with a confidence values greater than or equal to 55 percent. Only valid when GENERAL_LABELS is specified as a feature type in the Feature input parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MinConfidence")]
    public double? MinConfidence { get; init; }

    /// <summary>
    /// A list of the types of analysis to perform. Specifying GENERAL_LABELS uses the label detection feature, while specifying IMAGE_PROPERTIES returns information regarding image color and quality. If no option is specified GENERAL_LABELS is used by default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Features")]
    public IReadOnlyList<Feature>? Features { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Settings")]
    public DetectLabelsSettings? Settings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
