namespace AmazonAppSync.Requests.ApiKeys;

/// <summary>
/// The inputs of the DeleteApiKey operation.
/// </summary>
public sealed record DeleteApiKeyRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The ID for the API key.
    /// </summary>
    public required string Id { get; init; }
}
