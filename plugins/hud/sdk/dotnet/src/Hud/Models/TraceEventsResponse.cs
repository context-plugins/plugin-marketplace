using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.OneOf;

namespace Hud.Models;

public record TraceEventsResponse
{
    [JsonPropertyName("events")]
    public required IReadOnlyList<Event> Events { get; init; }

    [JsonPropertyName("latest_seq")]
    public required int LatestSeq { get; init; }

    [JsonPropertyName("next_seq")]
    public required int NextSeq { get; init; }

    [JsonPropertyName("has_more")]
    public required bool HasMore { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reward")]
    public Reward? Reward { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
