using System.Text.Json.Serialization;
using Search1Api.Core.Validation.Attributes;

namespace Search1Api.Models;

public record Viewport
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("width")]
    [Minimum(320)]
    [Maximum(2560)]
    public int? Width { get; init; } = 1440;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("height")]
    [Minimum(200)]
    [Maximum(1440)]
    public int? Height { get; init; } = 900;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device_scale_factor")]
    [Minimum(1.0)]
    [Maximum(2.0)]
    public double? DeviceScaleFactor { get; init; } = 1d;
}
