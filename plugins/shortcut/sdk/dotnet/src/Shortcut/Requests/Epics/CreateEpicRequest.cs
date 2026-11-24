using Shortcut.Models;

namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the CreateEpic operation.
/// </summary>
public sealed record CreateEpicRequest
{
    public required CreateEpic Body { get; init; }
}
