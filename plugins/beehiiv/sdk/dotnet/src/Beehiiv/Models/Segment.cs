using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

/// <summary>
/// The segment object. To expand results, see the results endpoint.
/// </summary>
public record Segment
{
    /// <summary>
    /// The prefixed ID of the segment.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the segment.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The type of segment.&lt;br&gt;<c>dynamic</c> - The segment is recalculated at set intervals.&lt;br&gt;<c>static</c> - The segment is calculated once at creation.&lt;br&gt;<c>manual</c> - The segment is not calculated at all. The results are created via CSV.
    /// </summary>
    [JsonPropertyName("type")]
    public SegmentType Type { get; init; } = SegmentType.All;

    /// <summary>
    /// The time the Segment was last calculated. Measured in seconds since the Unix epoch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_calculated")]
    public int? LastCalculated { get; init; }

    /// <summary>
    /// The total number of subscriptions that belong in the segment from the last calculation.
    /// </summary>
    [JsonPropertyName("total_results")]
    public required int TotalResults { get; init; }

    /// <summary>
    /// The status of the segment's most recent calculation.&lt;br&gt;<c>pending</c> - The segment has not been calculated yet.&lt;br&gt;<c>processing</c> - The calculation is in progress, and has not completed.&lt;br&gt;<c>completed</c> - The calculation was successful.&lt;br&gt;<c>failed</c> - Something went wrong during the calculation.
    /// </summary>
    [JsonPropertyName("status")]
    public required SegmentStatus Status { get; init; }

    /// <summary>
    /// Dynamic segments are marked inactive if they haven't been used in a specific period of time. Inactive segments will not automatically be recalculated.
    /// </summary>
    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public SegmentStats? Stats { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
