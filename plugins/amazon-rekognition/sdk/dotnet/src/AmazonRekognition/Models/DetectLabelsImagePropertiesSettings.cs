using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DetectLabelsImagePropertiesSettings
{
    /// <summary>
    /// The maximum number of dominant colors to return when detecting labels in an image. The default value is 10.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxDominantColors")]
    public int? MaxDominantColors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
