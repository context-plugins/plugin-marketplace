using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record TextDetection
{
    /// <summary>
    /// The word or line of text recognized by Amazon Rekognition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DetectedText")]
    public string? DetectedText { get; init; }

    /// <summary>
    /// The type of text that was detected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public Type4? Type { get; init; }

    /// <summary>
    /// The identifier for the detected text. The identifier is only unique for a single call to DetectText.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public int? Id { get; init; }

    /// <summary>
    /// The Parent identifier for the detected text identified by the value of ID. If the type of detected text is LINE, the value of ParentId is Null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ParentId")]
    public int? ParentId { get; init; }

    /// <summary>
    /// The confidence that Amazon Rekognition has in the accuracy of the detected text and the accuracy of the geometry points around the detected text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    public double? Confidence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Geometry")]
    public Geometry? Geometry { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
