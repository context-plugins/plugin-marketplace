using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

/// <summary>
/// Every JSON 4xx and 5xx this API writes.
/// </summary>
public record ErrorBodyOddsRelayServiceApi
{
    [JsonPropertyName("error")]
    public required Error5OddsRelayServiceApi Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
