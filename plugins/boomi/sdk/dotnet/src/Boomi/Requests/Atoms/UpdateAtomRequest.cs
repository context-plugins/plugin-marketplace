using Boomi.Models;

namespace Boomi.Requests.Atoms;

/// <summary>
/// The inputs of the UpdateAtom operation.
/// </summary>
public sealed record UpdateAtomRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }

    public required AtomInput Body { get; init; }
}
