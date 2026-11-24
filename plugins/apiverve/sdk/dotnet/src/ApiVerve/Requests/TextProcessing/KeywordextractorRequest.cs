using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Keywordextractor operation.
/// </summary>
public sealed record KeywordextractorRequest
{
    public required V1KeywordextractorRequest Body { get; init; }
}
