using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CountryFilter
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
