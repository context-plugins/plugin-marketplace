namespace Shortcut.Requests.Iterations;

/// <summary>
/// The inputs of the GetIteration operation.
/// </summary>
public sealed record GetIterationRequest
{
    /// <summary>
    /// The unique ID of the Iteration.
    /// </summary>
    public required long IterationPublicId { get; init; }
}
