using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// The number of rows that we attempted to sync, but were rejected by the
/// destination.
/// <para>
/// This does not include rows that weren't attempted due to the sync being
/// cancelled.
/// </para>
/// </summary>
public record FailedRows
{
    /// <summary>
    /// The number of failed removes.
    /// </summary>
    [JsonPropertyName("removedCount")]
    public required double RemovedCount { get; init; }

    /// <summary>
    /// The number of failed changes.
    /// </summary>
    [JsonPropertyName("changedCount")]
    public required double ChangedCount { get; init; }

    /// <summary>
    /// The number of failed adds.
    /// </summary>
    [JsonPropertyName("addedCount")]
    public required double AddedCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
