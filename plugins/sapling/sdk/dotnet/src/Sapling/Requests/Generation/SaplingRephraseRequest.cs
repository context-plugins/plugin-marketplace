using Sapling.Models;

namespace Sapling.Requests.Generation;

/// <summary>
/// The inputs of the SaplingRephrase operation.
/// </summary>
public sealed record SaplingRephraseRequest
{
    public required ApiV1RephraseRequest Body { get; init; }
}
