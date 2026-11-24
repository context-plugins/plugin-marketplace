namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the DeleteEpic operation.
/// </summary>
public sealed record DeleteEpicRequest
{
    /// <summary>
    /// The unique ID of the Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }
}
