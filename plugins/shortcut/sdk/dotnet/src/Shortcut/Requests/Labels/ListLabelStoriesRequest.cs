namespace Shortcut.Requests.Labels;

/// <summary>
/// The inputs of the ListLabelStories operation.
/// </summary>
public sealed record ListLabelStoriesRequest
{
    /// <summary>
    /// The unique ID of the Label.
    /// </summary>
    public required long LabelPublicId { get; init; }

    /// <summary>
    /// A true/false boolean indicating whether to return Stories with their descriptions.
    /// </summary>
    public bool? IncludesDescription { get; init; }
}
