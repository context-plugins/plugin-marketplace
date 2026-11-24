using Sapling.Models;

namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingSpellcheck operation.
/// </summary>
public sealed record SaplingSpellcheckRequest
{
    public required ApiV1SpellcheckRequest Body { get; init; }
}
