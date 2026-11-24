using RelmCrm.Models;

namespace RelmCrm.Requests.Sequences;

/// <summary>
/// The inputs of the Enroll operation.
/// </summary>
public sealed record EnrollRequest
{
    public required string Id { get; init; }

    public required SequencesEnrollRequest Body { get; init; }
}
