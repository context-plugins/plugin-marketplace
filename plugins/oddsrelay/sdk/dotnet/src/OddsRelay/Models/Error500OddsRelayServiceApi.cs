using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Error500OddsRelayServiceApi
{
    [JsonPropertyName("error")]
    public required Error4OddsRelayServiceApi Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
