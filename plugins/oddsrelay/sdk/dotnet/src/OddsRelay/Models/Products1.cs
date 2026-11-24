using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.Enums;

namespace OddsRelay.Models;

public record Products1
{
    /// <summary>
    /// Venue key, bookmakers then exchanges.
    /// </summary>
    [JsonPropertyName("bookmaker")]
    public required string Bookmaker { get; init; }

    /// <summary>
    /// Sport key base.
    /// </summary>
    [JsonPropertyName("sport")]
    public required string Sport { get; init; }

    /// <summary>
    /// <c>live</c>: we are publishing odds for this venue and sport right now. <c>interrupted_24h</c>: we are not — no rows at this instant, or the venue's feed is interrupted now; it was publishing within the last 24 hours, which is why it is listed at all.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status2 Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
