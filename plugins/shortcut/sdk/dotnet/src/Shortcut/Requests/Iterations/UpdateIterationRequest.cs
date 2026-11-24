using Shortcut.Models;

namespace Shortcut.Requests.Iterations;

/// <summary>
/// The inputs of the UpdateIteration operation.
/// </summary>
public sealed record UpdateIterationRequest
{
    /// <summary>
    /// The unique ID of the Iteration.
    /// </summary>
    public required long IterationPublicId { get; init; }

    public required UpdateIteration Body { get; init; }
}
