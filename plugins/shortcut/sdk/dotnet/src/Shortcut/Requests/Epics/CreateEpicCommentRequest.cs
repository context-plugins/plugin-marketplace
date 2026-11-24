using Shortcut.Models;

namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the CreateEpicComment operation.
/// </summary>
public sealed record CreateEpicCommentRequest
{
    /// <summary>
    /// The ID of the associated Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }

    public required CreateEpicComment Body { get; init; }
}
