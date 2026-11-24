using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Location2
{
    [JsonPropertyName("country")]
    public required string? Country { get; init; }

    [JsonPropertyName("state")]
    public required string? State { get; init; }

    [JsonPropertyName("city")]
    public required string? City { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
