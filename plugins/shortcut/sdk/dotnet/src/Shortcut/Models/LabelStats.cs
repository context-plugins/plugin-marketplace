using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A group of calculated values for this Label. This is not included if the slim? flag is set to true for the List Labels endpoint.
/// </summary>
public record LabelStats
{
    /// <summary>
    /// The total number of Documents associated this Label.
    /// </summary>
    [JsonPropertyName("num_related_documents")]
    public required long NumRelatedDocuments { get; init; }

    /// <summary>
    /// The total number of Epics with this Label.
    /// </summary>
    [JsonPropertyName("num_epics")]
    public required long NumEpics { get; init; }

    /// <summary>
    /// The total number of stories unstarted Stories with this Label.
    /// </summary>
    [JsonPropertyName("num_stories_unstarted")]
    public required long NumStoriesUnstarted { get; init; }

    /// <summary>
    /// The total number of Stories with this Label.
    /// </summary>
    [JsonPropertyName("num_stories_total")]
    public required long NumStoriesTotal { get; init; }

    /// <summary>
    /// The number of unstarted epics associated with this label.
    /// </summary>
    [JsonPropertyName("num_epics_unstarted")]
    public required long NumEpicsUnstarted { get; init; }

    /// <summary>
    /// The number of in progress epics associated with this label.
    /// </summary>
    [JsonPropertyName("num_epics_in_progress")]
    public required long NumEpicsInProgress { get; init; }

    /// <summary>
    /// The total number of unstarted points with this Label.
    /// </summary>
    [JsonPropertyName("num_points_unstarted")]
    public required long NumPointsUnstarted { get; init; }

    /// <summary>
    /// The total number of Stories with no point estimate with this Label.
    /// </summary>
    [JsonPropertyName("num_stories_unestimated")]
    public required long NumStoriesUnestimated { get; init; }

    /// <summary>
    /// The total number of in-progress points with this Label.
    /// </summary>
    [JsonPropertyName("num_points_in_progress")]
    public required long NumPointsInProgress { get; init; }

    /// <summary>
    /// The total number of Epics associated with this Label.
    /// </summary>
    [JsonPropertyName("num_epics_total")]
    public required long NumEpicsTotal { get; init; }

    /// <summary>
    /// The total number of completed Stories with this Label.
    /// </summary>
    [JsonPropertyName("num_stories_completed")]
    public required long NumStoriesCompleted { get; init; }

    /// <summary>
    /// The total number of completed points with this Label.
    /// </summary>
    [JsonPropertyName("num_points_completed")]
    public required long NumPointsCompleted { get; init; }

    /// <summary>
    /// The total number of stories backlog Stories with this Label.
    /// </summary>
    [JsonPropertyName("num_stories_backlog")]
    public required long NumStoriesBacklog { get; init; }

    /// <summary>
    /// The total number of points with this Label.
    /// </summary>
    [JsonPropertyName("num_points_total")]
    public required long NumPointsTotal { get; init; }

    /// <summary>
    /// The total number of in-progress Stories with this Label.
    /// </summary>
    [JsonPropertyName("num_stories_in_progress")]
    public required long NumStoriesInProgress { get; init; }

    /// <summary>
    /// The total number of backlog points with this Label.
    /// </summary>
    [JsonPropertyName("num_points_backlog")]
    public required long NumPointsBacklog { get; init; }

    /// <summary>
    /// The number of completed Epics associated with this Label.
    /// </summary>
    [JsonPropertyName("num_epics_completed")]
    public required long NumEpicsCompleted { get; init; }
}
