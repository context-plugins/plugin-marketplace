using System;

namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingDeleteDictionaryEntry operation.
/// </summary>
public sealed record SaplingDeleteDictionaryEntryRequest
{
    /// <summary>
    /// Dictionary entry id.
    /// </summary>
    public required Guid EntryId { get; init; }

    public bool ReturnUsage { get; init; } = false;
}
