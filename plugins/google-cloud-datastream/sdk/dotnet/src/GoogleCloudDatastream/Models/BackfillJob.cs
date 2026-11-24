using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Models.Enums;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Represents a backfill job on a specific stream object.
/// </summary>
public record BackfillJob
{
    /// <summary>
    /// Output only. Backfill job's start time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastStartTime")]
    public string? LastStartTime { get; init; }

    /// <summary>
    /// Output only. Backfill job state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// Backfill job's triggering reason.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trigger")]
    public Trigger? Trigger { get; init; }

    /// <summary>
    /// Output only. Errors which caused the backfill job to fail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<Error>? Errors { get; init; }

    /// <summary>
    /// Output only. Backfill job's end time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastEndTime")]
    public string? LastEndTime { get; init; }

    /// <summary>
    /// Output only. The filter for performing a partial backfill.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventFilter")]
    public EventFilter3? EventFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
