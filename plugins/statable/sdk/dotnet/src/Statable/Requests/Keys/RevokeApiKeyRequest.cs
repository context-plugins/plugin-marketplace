namespace Statable.Requests.Keys;

/// <summary>
/// The inputs of the RevokeApiKey operation.
/// </summary>
public sealed record RevokeApiKeyRequest
{
    /// <summary>
    /// Numeric API key id (from GET /keys).
    /// </summary>
    public required long Id { get; init; }
}
