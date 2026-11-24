using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record Tagged
{
    [JsonPropertyName("username")]
    public required string Username { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? X { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("y")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? Y { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
