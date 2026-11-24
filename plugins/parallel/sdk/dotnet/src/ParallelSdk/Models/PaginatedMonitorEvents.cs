using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.OneOf;

namespace ParallelSdk.Models;

/// <summary>
/// Paginated list of monitor events, newest first.
/// </summary>
public record PaginatedMonitorEvents
{
    /// <summary>
    /// Monitor events returned by this request, ordered newest first.
    /// </summary>
    [JsonPropertyName("events")]
    public required IReadOnlyList<Event> Events { get; init; }

    /// <summary>
    /// Pass as <c>cursor</c> to retrieve more events. Absent when there are no more events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next_cursor")]
    public NextCursor? NextCursor { get; init; }

    /// <summary>
    /// Execution caveats for this page of events, e.g. compute limits.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("warnings")]
    public WarningsParallelAiMonitorApi? Warnings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
