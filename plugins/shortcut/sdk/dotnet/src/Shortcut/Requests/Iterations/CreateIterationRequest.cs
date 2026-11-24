using Shortcut.Models;

namespace Shortcut.Requests.Iterations;

/// <summary>
/// The inputs of the CreateIteration operation.
/// </summary>
public sealed record CreateIterationRequest
{
    public required CreateIteration Body { get; init; }
}
