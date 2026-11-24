using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Products2
{
    [JsonPropertyName("bookmakers")]
    public required IReadOnlyList<BookmakerOddsRelayServiceApi> Bookmakers { get; init; }

    [JsonPropertyName("exchanges")]
    public required IReadOnlyList<Exchange> Exchanges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
