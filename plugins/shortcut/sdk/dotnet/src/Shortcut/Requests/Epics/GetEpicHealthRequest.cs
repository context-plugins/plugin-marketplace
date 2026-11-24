namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the GetEpicHealth operation.
/// </summary>
public sealed record GetEpicHealthRequest
{
    /// <summary>
    /// The unique ID of the Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }
}
