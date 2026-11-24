namespace RelmCrm.Requests.Sequences;

/// <summary>
/// The inputs of the PreviewSequence operation.
/// </summary>
public sealed record PreviewSequenceRequest
{
    public required string Id { get; init; }
}
