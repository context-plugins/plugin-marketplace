using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DetectProtectiveEquipmentRequest
{
    [JsonPropertyName("Image")]
    public required Image Image { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SummarizationAttributes")]
    public ProtectiveEquipmentSummarizationAttributes? SummarizationAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
