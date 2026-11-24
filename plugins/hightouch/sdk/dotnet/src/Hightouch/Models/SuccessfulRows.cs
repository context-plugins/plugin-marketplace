using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// The number of rows that were successfully processed by the destination.
/// </summary>
public record SuccessfulRows
{
    /// <summary>
    /// The number of successful removes.
    /// </summary>
    [JsonPropertyName("removedCount")]
    public required double RemovedCount { get; init; }

    /// <summary>
    /// The number of successful changes.
    /// </summary>
    [JsonPropertyName("changedCount")]
    public required double ChangedCount { get; init; }

    /// <summary>
    /// The number of successful adds.
    /// </summary>
    [JsonPropertyName("addedCount")]
    public required double AddedCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
