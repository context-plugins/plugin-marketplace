using Sapling.Models;

namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingGrammarCheck operation.
/// </summary>
public sealed record SaplingGrammarCheckRequest
{
    public required ApiV1EditsRequest Body { get; init; }
}
