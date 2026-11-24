namespace Shortcut.Requests.Labels;

/// <summary>
/// The inputs of the ListLabelEpics operation.
/// </summary>
public sealed record ListLabelEpicsRequest
{
    /// <summary>
    /// The unique ID of the Label.
    /// </summary>
    public required long LabelPublicId { get; init; }
}
