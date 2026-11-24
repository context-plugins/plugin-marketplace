using Boomi.Models;

namespace Boomi.Requests.Atoms;

/// <summary>
/// The inputs of the QueryAtoms operation.
/// </summary>
public sealed record QueryAtomsRequest
{
    public required QueryRequest Body { get; init; }
}
