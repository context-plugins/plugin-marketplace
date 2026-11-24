using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The results of the multi-entity search query.
/// </summary>
public record SearchResults
{
    /// <summary>
    /// The results of the Epic search query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("epics")]
    public EpicSearchResults? Epics { get; init; }

    /// <summary>
    /// The results of the Story search query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stories")]
    public StorySearchResults? Stories { get; init; }

    /// <summary>
    /// The results of the Iteration search query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iterations")]
    public IterationSearchResults? Iterations { get; init; }

    /// <summary>
    /// The results of the Objective search query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milestones")]
    public ObjectiveSearchResults? Milestones { get; init; }
}
