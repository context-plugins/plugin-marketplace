namespace Audioscrape.Requests.ApiKeys;

/// <summary>
/// The inputs of the ApiKeyUsage operation.
/// </summary>
public sealed record ApiKeyUsageRequest
{
    /// <summary>
    /// API key ID (from the <c>id</c> field on create / list)
    /// </summary>
    public required long Id { get; init; }
}
