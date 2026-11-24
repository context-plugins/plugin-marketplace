using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// The status of a given sync sequence run at both a high level and the individual
/// sync-run level.
/// </summary>
public record SyncSequenceStatusOutput
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("status")]
    public required SyncSequenceRequestStatus Status { get; init; }

    [JsonPropertyName("syncRuns")]
    public required IReadOnlyList<SyncRun> SyncRuns { get; init; }
}
