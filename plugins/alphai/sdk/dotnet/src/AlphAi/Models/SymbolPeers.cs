using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

public record SymbolPeers
{
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    /// <summary>
    /// Industry (or sector) label the peers share; empty if none.
    /// </summary>
    [JsonPropertyName("group")]
    public required string Group { get; init; }

    /// <summary>
    /// Whether the peers were grouped by industry or the broader sector.
    /// </summary>
    [JsonPropertyName("group_kind")]
    public required GroupKind GroupKind { get; init; }

    [JsonPropertyName("peers")]
    public required IReadOnlyList<SymbolPeer> Peers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
