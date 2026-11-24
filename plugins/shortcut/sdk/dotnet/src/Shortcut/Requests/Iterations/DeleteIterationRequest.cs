namespace Shortcut.Requests.Iterations;

/// <summary>
/// The inputs of the DeleteIteration operation.
/// </summary>
public sealed record DeleteIterationRequest
{
    /// <summary>
    /// The unique ID of the Iteration.
    /// </summary>
    public required long IterationPublicId { get; init; }
}
