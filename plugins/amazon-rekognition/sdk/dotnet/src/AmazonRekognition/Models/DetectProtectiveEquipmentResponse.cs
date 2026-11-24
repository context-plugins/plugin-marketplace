using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DetectProtectiveEquipmentResponse
{
    /// <summary>
    /// The version number of the PPE detection model used to detect PPE in the image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProtectiveEquipmentModelVersion")]
    public string? ProtectiveEquipmentModelVersion { get; init; }

    /// <summary>
    /// An array of persons detected in the image (including persons not wearing PPE).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Persons")]
    public IReadOnlyList<ProtectiveEquipmentPerson>? Persons { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Summary")]
    public ProtectiveEquipmentSummary? Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
