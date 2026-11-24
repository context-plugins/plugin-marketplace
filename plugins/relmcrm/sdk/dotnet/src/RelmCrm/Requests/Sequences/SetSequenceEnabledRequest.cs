using RelmCrm.Models;

namespace RelmCrm.Requests.Sequences;

/// <summary>
/// The inputs of the SetSequenceEnabled operation.
/// </summary>
public sealed record SetSequenceEnabledRequest
{
    public required string Id { get; init; }

    public required SequencesRequest Body { get; init; }
}
