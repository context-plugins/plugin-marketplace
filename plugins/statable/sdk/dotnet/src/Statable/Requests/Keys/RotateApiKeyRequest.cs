namespace Statable.Requests.Keys;

/// <summary>
/// The inputs of the RotateApiKey operation.
/// </summary>
public sealed record RotateApiKeyRequest
{
    /// <summary>
    /// Numeric API key id (from GET /keys).
    /// </summary>
    public required long Id { get; init; }
}
