using Shortcut.Models;

namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the UpdateEpic operation.
/// </summary>
public sealed record UpdateEpicRequest
{
    /// <summary>
    /// The unique ID of the Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }

    public required UpdateEpic Body { get; init; }
}
