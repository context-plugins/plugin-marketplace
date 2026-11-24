using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record EyeDirection
{
    /// <summary>
    /// Value representing eye direction on the yaw axis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Yaw")]
    public double? Yaw { get; init; }

    /// <summary>
    /// Value representing eye direction on the pitch axis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Pitch")]
    public double? Pitch { get; init; }

    /// <summary>
    /// The confidence that the service has in its predicted eye direction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    public double? Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
