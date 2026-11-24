namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingListDictionary operation.
/// </summary>
public sealed record SaplingListDictionaryRequest
{
    public bool ReturnUsage { get; init; } = false;
}
