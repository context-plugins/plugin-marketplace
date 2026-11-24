using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Reversetext operation.
/// </summary>
public sealed record ReversetextRequest
{
    public required V1ReversetextRequest Body { get; init; }
}
