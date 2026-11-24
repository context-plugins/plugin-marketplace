using Sapling.Models;

namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingAddDictionaryEntry operation.
/// </summary>
public sealed record SaplingAddDictionaryEntryRequest
{
    public required ApiV1DictionaryRequest Body { get; init; }
}
