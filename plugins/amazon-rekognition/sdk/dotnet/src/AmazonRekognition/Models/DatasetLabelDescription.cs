using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DatasetLabelDescription
{
    /// <summary>
    /// The name of the label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LabelName")]
    public string? LabelName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LabelStats")]
    public DatasetLabelStats? LabelStats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
