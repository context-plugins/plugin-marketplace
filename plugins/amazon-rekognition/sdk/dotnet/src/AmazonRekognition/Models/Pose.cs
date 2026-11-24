using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record Pose
{
    /// <summary>
    /// Value representing the face rotation on the roll axis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Roll")]
    public double? Roll { get; init; }

    /// <summary>
    /// Value representing the face rotation on the yaw axis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Yaw")]
    public double? Yaw { get; init; }

    /// <summary>
    /// Value representing the face rotation on the pitch axis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Pitch")]
    public double? Pitch { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
