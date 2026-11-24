using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A group of calculated values for this Iteration.
/// </summary>
public record IterationStats
{
    /// <summary>
    /// The total number of completed points in this Iteration.
    /// </summary>
    [JsonPropertyName("num_points_done")]
    public required long NumPointsDone { get; init; }

    /// <summary>
    /// The total number of documents related to an Iteration
    /// </summary>
    [JsonPropertyName("num_related_documents")]
    public required long NumRelatedDocuments { get; init; }

    /// <summary>
    /// The average cycle time (in seconds) of completed stories in this Iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_cycle_time")]
    public long? AverageCycleTime { get; init; }

    /// <summary>
    /// The total number of unstarted Stories in this Iteration.
    /// </summary>
    [JsonPropertyName("num_stories_unstarted")]
    public required long NumStoriesUnstarted { get; init; }

    /// <summary>
    /// The total number of started points in this Iteration.
    /// </summary>
    [JsonPropertyName("num_points_started")]
    public required long NumPointsStarted { get; init; }

    /// <summary>
    /// The total number of unstarted points in this Iteration.
    /// </summary>
    [JsonPropertyName("num_points_unstarted")]
    public required long NumPointsUnstarted { get; init; }

    /// <summary>
    /// The total number of started Stories in this Iteration.
    /// </summary>
    [JsonPropertyName("num_stories_started")]
    public required long NumStoriesStarted { get; init; }

    /// <summary>
    /// The total number of Stories with no point estimate.
    /// </summary>
    [JsonPropertyName("num_stories_unestimated")]
    public required long NumStoriesUnestimated { get; init; }

    /// <summary>
    /// The total number of backlog Stories in this Iteration.
    /// </summary>
    [JsonPropertyName("num_stories_backlog")]
    public required long NumStoriesBacklog { get; init; }

    /// <summary>
    /// The average lead time (in seconds) of completed stories in this Iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("average_lead_time")]
    public long? AverageLeadTime { get; init; }

    /// <summary>
    /// The total number of backlog points in this Iteration.
    /// </summary>
    [JsonPropertyName("num_points_backlog")]
    public required long NumPointsBacklog { get; init; }

    /// <summary>
    /// The total number of points in this Iteration.
    /// </summary>
    [JsonPropertyName("num_points")]
    public required long NumPoints { get; init; }

    /// <summary>
    /// The total number of done Stories in this Iteration.
    /// </summary>
    [JsonPropertyName("num_stories_done")]
    public required long NumStoriesDone { get; init; }
}
