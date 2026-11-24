using Shortcut.Models;

namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the CreateEpicHealth operation.
/// </summary>
public sealed record CreateEpicHealthRequest
{
    /// <summary>
    /// The unique ID of the Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }

    public required CreateEpicHealth Body { get; init; }
}
