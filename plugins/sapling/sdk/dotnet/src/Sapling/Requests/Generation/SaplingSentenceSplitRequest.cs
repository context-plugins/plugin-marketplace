using Sapling.Models;

namespace Sapling.Requests.Generation;

/// <summary>
/// The inputs of the SaplingSentenceSplit operation.
/// </summary>
public sealed record SaplingSentenceSplitRequest
{
    public required ApiV1SentenceSplitRequest Body { get; init; }
}
