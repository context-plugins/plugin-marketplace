namespace Statable.Requests.Keys;

/// <summary>
/// The inputs of the ListApiKeyEvents operation.
/// </summary>
public sealed record ListApiKeyEventsRequest
{
    /// <summary>
    /// Numeric API key id (from GET /keys).
    /// </summary>
    public required long Id { get; init; }
}
