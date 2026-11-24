using RelmCrm.Models;

namespace RelmCrm.Requests.Sequences;

/// <summary>
/// The inputs of the CreateSequence operation.
/// </summary>
public sealed record CreateSequenceRequest
{
    public required SequenceInput Body { get; init; }
}
