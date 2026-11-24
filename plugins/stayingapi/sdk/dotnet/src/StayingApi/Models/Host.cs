using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.AnyOf;

namespace StayingApi.Models;

public record Host
{
    [JsonPropertyName("name")]
    public required Name Name { get; init; }

    [JsonPropertyName("isSuperhost")]
    public required IsSuperhost IsSuperhost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
