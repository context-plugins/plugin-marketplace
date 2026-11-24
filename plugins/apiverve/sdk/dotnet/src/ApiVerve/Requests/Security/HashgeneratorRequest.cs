namespace ApiVerve.Requests.Security;

/// <summary>
/// The inputs of the Hashgenerator operation.
/// </summary>
public sealed record HashgeneratorRequest
{
    /// <summary>
    /// Text to hash
    /// </summary>
    public required string Text { get; init; }

    /// <summary>
    /// Comma-separated list of algorithms or 'all'
    /// </summary>
    public string? Algorithms { get; init; }
}
