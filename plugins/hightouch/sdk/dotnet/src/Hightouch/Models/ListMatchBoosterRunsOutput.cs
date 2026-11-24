using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The output of a request to list Match Booster enrichment runs for a model.
/// </summary>
public record ListMatchBoosterRunsOutput
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<MatchBoosterRun> Data { get; init; }

    [JsonPropertyName("hasMore")]
    public required bool HasMore { get; init; }
}
