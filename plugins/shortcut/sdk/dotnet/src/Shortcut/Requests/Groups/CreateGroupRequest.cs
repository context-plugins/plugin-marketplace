using Shortcut.Models;

namespace Shortcut.Requests.Groups;

/// <summary>
/// The inputs of the CreateGroup operation.
/// </summary>
public sealed record CreateGroupRequest
{
    public required CreateGroup Body { get; init; }
}
