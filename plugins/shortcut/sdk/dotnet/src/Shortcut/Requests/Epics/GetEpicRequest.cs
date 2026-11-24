namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the GetEpic operation.
/// </summary>
public sealed record GetEpicRequest
{
    /// <summary>
    /// The unique ID of the Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }
}
