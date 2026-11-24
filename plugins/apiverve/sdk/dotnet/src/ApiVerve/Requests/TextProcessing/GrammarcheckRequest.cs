using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Grammarcheck operation.
/// </summary>
public sealed record GrammarcheckRequest
{
    public required V1GrammarcheckRequest Body { get; init; }
}
