namespace Shortcut.Requests.Projects;

/// <summary>
/// The inputs of the ListStories operation.
/// </summary>
public sealed record ListStoriesRequest
{
    /// <summary>
    /// The unique ID of the Project.
    /// </summary>
    public required long ProjectPublicId { get; init; }

    /// <summary>
    /// A true/false boolean indicating whether to return Stories with their descriptions.
    /// </summary>
    public bool? IncludesDescription { get; init; }
}
