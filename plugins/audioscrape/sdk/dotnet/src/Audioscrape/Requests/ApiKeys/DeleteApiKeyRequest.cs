namespace Audioscrape.Requests.ApiKeys;

/// <summary>
/// The inputs of the DeleteApiKey operation.
/// </summary>
public sealed record DeleteApiKeyRequest
{
    /// <summary>
    /// API key ID (from the <c>id</c> field on create / list)
    /// </summary>
    public required long Id { get; init; }
}
