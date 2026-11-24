using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Tag
{
    [JsonPropertyName("display")]
    public required string Display { get; init; }

    [JsonPropertyName("urn")]
    public required string Urn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
