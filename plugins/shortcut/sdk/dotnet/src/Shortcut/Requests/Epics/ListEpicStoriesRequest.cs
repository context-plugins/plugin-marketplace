namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the ListEpicStories operation.
/// </summary>
public sealed record ListEpicStoriesRequest
{
    /// <summary>
    /// The unique ID of the Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }

    /// <summary>
    /// A true/false boolean indicating whether to return Stories with their descriptions.
    /// </summary>
    public bool? IncludesDescription { get; init; }
}
