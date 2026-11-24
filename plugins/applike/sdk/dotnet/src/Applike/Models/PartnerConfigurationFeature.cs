using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Applike.Core.Models;

namespace Applike.Models;

public record PartnerConfigurationFeature
{
    [JsonPropertyName("key")]
    [MinLength(1)]
    public required string Key { get; init; }

    [JsonPropertyName("value")]
    [MinLength(1)]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
