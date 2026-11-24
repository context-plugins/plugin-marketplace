using Shortcut.Models;

namespace Shortcut.Requests.Objectives;

/// <summary>
/// The inputs of the CreateObjective operation.
/// </summary>
public sealed record CreateObjectiveRequest
{
    public required CreateObjective Body { get; init; }
}
