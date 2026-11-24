using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Button126
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [StringLength(36, MinimumLength = 1)]
    public string? Id { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "POSTBACK";

    [JsonPropertyName("label")]
    [StringLength(20, MinimumLength = 1)]
    public required string Label { get; init; }

    [JsonPropertyName("payload")]
    [StringLength(1000, MinimumLength = 1)]
    public required string Payload { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
