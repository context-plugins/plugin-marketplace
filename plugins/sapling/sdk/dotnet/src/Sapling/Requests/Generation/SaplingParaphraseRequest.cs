using Sapling.Models;

namespace Sapling.Requests.Generation;

/// <summary>
/// The inputs of the SaplingParaphrase operation.
/// </summary>
public sealed record SaplingParaphraseRequest
{
    public required ApiV1ParaphraseRequest Body { get; init; }
}
