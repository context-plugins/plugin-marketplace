using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Error400OddsRelayDiscoveryApi
{
    [JsonPropertyName("error")]
    public required Error6OddsRelayDiscoveryApi Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
