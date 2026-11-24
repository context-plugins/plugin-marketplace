using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A group of calculated values for this Milestone.
/// </summary>
public record MilestoneStats
{
    /// <summary>
    /// The average cycle time (in seconds) of completed stories in this Milestone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_cycle_time")]
    public long? AverageCycleTime { get; init; }

    /// <summary>
    /// The average lead time (in seconds) of completed stories in this Milestone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_lead_time")]
    public long? AverageLeadTime { get; init; }

    /// <summary>
    /// The number of related documents to this Milestone.
    /// </summary>
    [JsonPropertyName("num_related_documents")]
    public required long NumRelatedDocuments { get; init; }
}
