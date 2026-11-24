using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Exactly one of "eventIds" or "time ranges" must be provided.
/// </summary>
public record DatahubV1EventsDeleteRequest
{
    /// <summary>
    /// The dataset (provider) of the events to be deleted.
    /// </summary>
    [JsonPropertyName("dataset")]
    public required string Dataset { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventIds")]
    public IReadOnlyList<string>? EventIds { get; init; }

    /// <summary>
    /// The start timestamp of the time range in RFC3339 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The end timestamp of the time range in RFC3339 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
