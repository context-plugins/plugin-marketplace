namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the ListEpicComments operation.
/// </summary>
public sealed record ListEpicCommentsRequest
{
    /// <summary>
    /// The unique ID of the Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }
}
