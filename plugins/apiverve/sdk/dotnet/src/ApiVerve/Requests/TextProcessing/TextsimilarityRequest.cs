using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Textsimilarity operation.
/// </summary>
public sealed record TextsimilarityRequest
{
    public required V1TextsimilarityRequest Body { get; init; }
}
