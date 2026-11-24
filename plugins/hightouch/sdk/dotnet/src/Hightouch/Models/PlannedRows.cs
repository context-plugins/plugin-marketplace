using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// The number of planned rows that this sync run was supposed to execute.
/// <para>
/// Note that the counts for <c>successfulRows</c> and <c>failedRows</c> may not add up
/// to <c>plannedRows</c> if the sync was cancelled.
/// </para>
/// </summary>
public record PlannedRows
{
    /// <summary>
    /// The number of removed rows.
    /// </summary>
    [JsonPropertyName("removedCount")]
    public required double RemovedCount { get; init; }

    /// <summary>
    /// The number of changed rows.
    /// </summary>
    [JsonPropertyName("changedCount")]
    public required double ChangedCount { get; init; }

    /// <summary>
    /// The number of added rows.
    /// </summary>
    [JsonPropertyName("addedCount")]
    public required double AddedCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
