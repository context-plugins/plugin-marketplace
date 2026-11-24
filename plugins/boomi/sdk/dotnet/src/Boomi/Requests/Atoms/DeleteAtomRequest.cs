namespace Boomi.Requests.Atoms;

/// <summary>
/// The inputs of the DeleteAtom operation.
/// </summary>
public sealed record DeleteAtomRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }
}
