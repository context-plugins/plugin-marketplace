namespace Shortcut.Requests.Iterations;

/// <summary>
/// The inputs of the ListIterationStories operation.
/// </summary>
public sealed record ListIterationStoriesRequest
{
    /// <summary>
    /// The unique ID of the Iteration.
    /// </summary>
    public required long IterationPublicId { get; init; }

    /// <summary>
    /// A true/false boolean indicating whether to return Stories with their descriptions.
    /// </summary>
    public bool? IncludesDescription { get; init; }
}
