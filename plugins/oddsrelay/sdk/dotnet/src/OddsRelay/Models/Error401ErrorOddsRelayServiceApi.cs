using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Error401ErrorOddsRelayServiceApi
{
    [JsonPropertyName("error")]
    public required Error7OddsRelayServiceApi Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
