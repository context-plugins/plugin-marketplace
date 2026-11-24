using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Removepunctuation operation.
/// </summary>
public sealed record RemovepunctuationRequest
{
    public required V1RemovepunctuationRequest Body { get; init; }
}
