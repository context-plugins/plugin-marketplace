using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record ByokProviderOption
{
    [JsonPropertyName("provider_id")]
    public required int ProviderId { get; init; }

    [JsonPropertyName("provider_name")]
    public required string ProviderName { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
