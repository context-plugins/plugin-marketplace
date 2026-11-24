using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Error400OddsRelayServiceApi
{
    [JsonPropertyName("error")]
    public required Error3OddsRelayServiceApi Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
