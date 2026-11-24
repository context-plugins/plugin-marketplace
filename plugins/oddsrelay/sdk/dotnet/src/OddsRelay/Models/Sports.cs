using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Sports
{
    [JsonPropertyName("events")]
    public required int Events { get; init; }

    /// <summary>
    /// The last instant this venue and sport was read (ISO-8601 Z); null when not known.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_seen")]
    public string? LastSeen { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
