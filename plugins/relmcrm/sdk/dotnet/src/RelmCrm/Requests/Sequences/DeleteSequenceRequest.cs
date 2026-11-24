namespace RelmCrm.Requests.Sequences;

/// <summary>
/// The inputs of the DeleteSequence operation.
/// </summary>
public sealed record DeleteSequenceRequest
{
    public required string Id { get; init; }
}
