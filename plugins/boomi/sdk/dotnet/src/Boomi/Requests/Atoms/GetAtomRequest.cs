namespace Boomi.Requests.Atoms;

/// <summary>
/// The inputs of the GetAtom operation.
/// </summary>
public sealed record GetAtomRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }
}
