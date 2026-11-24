using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Complete FindAll search results.
/// <para>
/// Represents a snapshot of a FindAll run, including run metadata and a list of
/// candidate entities with their match status and details at the time the snapshot was
/// taken.
/// </para>
/// </summary>
public record FindAllRunResult
{
    /// <summary>
    /// FindAll run object.
    /// </summary>
    [JsonPropertyName("run")]
    public required FindAllRun1 Run { get; init; }

    /// <summary>
    /// All evaluated candidates at the time of the snapshot.
    /// </summary>
    [JsonPropertyName("candidates")]
    public required IReadOnlyList<FindAllCandidate> Candidates { get; init; }

    /// <summary>
    /// ID of the last event of the run at the time of the request. This can be used to resume streaming from the last event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_event_id")]
    public LastEventId? LastEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
