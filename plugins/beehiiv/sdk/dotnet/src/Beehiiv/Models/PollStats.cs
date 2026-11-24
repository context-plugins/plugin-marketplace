using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PollStats
{
    /// <summary>
    /// The total number of responses to this poll.
    /// </summary>
    [JsonPropertyName("completions")]
    public required int Completions { get; init; }

    /// <summary>
    /// A map of poll choice labels to the number of votes each choice received.
    /// </summary>
    [JsonPropertyName("vote_counts")]
    public required IReadOnlyDictionary<string, int> VoteCounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
