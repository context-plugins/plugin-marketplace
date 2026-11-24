using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The output of a request to list runs for an IDR graph.
/// </summary>
public record ListIdrRunsOutput
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<IdrRun> Data { get; init; }

    [JsonPropertyName("hasMore")]
    public required bool HasMore { get; init; }
}
