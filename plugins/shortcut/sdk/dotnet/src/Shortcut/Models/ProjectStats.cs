using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A group of calculated values for this Project.
/// </summary>
public record ProjectStats
{
    /// <summary>
    /// The total number of stories in this Project.
    /// </summary>
    [JsonPropertyName("num_stories")]
    public required long NumStories { get; init; }

    /// <summary>
    /// The total number of points in this Project.
    /// </summary>
    [JsonPropertyName("num_points")]
    public required long NumPoints { get; init; }

    /// <summary>
    /// The total number of documents related to this Project
    /// </summary>
    [JsonPropertyName("num_related_documents")]
    public required long NumRelatedDocuments { get; init; }
}
