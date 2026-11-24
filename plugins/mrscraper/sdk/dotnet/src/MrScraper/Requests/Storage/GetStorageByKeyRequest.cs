namespace MrScraper.Requests.Storage;

/// <summary>
/// The inputs of the GetStorageByKey operation.
/// </summary>
public sealed record GetStorageByKeyRequest
{
    /// <summary>
    /// Full storage key, for example results/&lt;user-scope&gt;/&lt;uuid&gt;.json
    /// </summary>
    public required string Key { get; init; }
}
