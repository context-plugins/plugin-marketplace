using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Models;

public record Tagged1
{
    [JsonPropertyName("username")]
    public required string Username { get; init; }

    [JsonPropertyName("x")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double X { get; init; }

    [JsonPropertyName("y")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Y { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
