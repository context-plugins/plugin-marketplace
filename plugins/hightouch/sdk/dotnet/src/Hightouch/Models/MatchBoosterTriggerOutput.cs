using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The output of a trigger action to run a Match Booster enrichment.
/// </summary>
public record MatchBoosterTriggerOutput
{
    /// <summary>
    /// The id of the triggered enrichment job.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The status of the triggered enrichment job.
    /// </summary>
    [JsonPropertyName("status")]
    public required string Status { get; init; }

    /// <summary>
    /// Timestamp when the enrichment job was created.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }
}
