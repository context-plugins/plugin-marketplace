using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Error503OddsRelayDiscoveryApi
{
    [JsonPropertyName("error")]
    public required Error5OddsRelayDiscoveryApi Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
