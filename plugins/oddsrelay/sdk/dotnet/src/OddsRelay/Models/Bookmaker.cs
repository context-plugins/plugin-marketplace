using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;

namespace OddsRelay.Models;

public record Bookmaker
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("region")]
    public required string Region { get; init; }

    /// <summary>
    /// The newest <c>last_update</c> of the venue's markets.
    /// </summary>
    [JsonPropertyName("last_update")]
    public required LastUpdate? LastUpdate { get; init; }

    /// <summary>
    /// <c>includeLinks=true</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public string? Link { get; init; }

    [JsonPropertyName("markets")]
    public required IReadOnlyList<Market> Markets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
