namespace RelmCrm.Requests.Sequences;

/// <summary>
/// The inputs of the GetSequence operation.
/// </summary>
public sealed record GetSequenceRequest
{
    public required string Id { get; init; }
}
