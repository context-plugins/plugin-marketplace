using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record StreamProcessorDataSharingPreference
{
    /// <summary>
    /// If this option is set to true, you choose to share data with Rekognition to improve model performance.
    /// </summary>
    [JsonPropertyName("OptIn")]
    public required bool OptIn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
