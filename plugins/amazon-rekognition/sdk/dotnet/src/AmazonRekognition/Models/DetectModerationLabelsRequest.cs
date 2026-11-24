using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DetectModerationLabelsRequest
{
    [JsonPropertyName("Image")]
    public required Image Image { get; init; }

    /// <summary>
    /// Specifies the minimum confidence level for the labels to return. Amazon Rekognition doesn't return any labels with a confidence level lower than this specified value. If you don't specify MinConfidence, the operation returns labels with confidence values greater than or equal to 50 percent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MinConfidence")]
    public double? MinConfidence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HumanLoopConfig")]
    public HumanLoopConfig? HumanLoopConfig { get; init; }

    /// <summary>
    /// Identifier for the custom adapter. Expects the ProjectVersionArn as a value. Use the CreateProject or CreateProjectVersion APIs to create a custom adapter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProjectVersion")]
    public string? ProjectVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
