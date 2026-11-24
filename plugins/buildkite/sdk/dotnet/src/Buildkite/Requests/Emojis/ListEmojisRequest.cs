namespace Buildkite.Requests.Emojis;

/// <summary>
/// The inputs of the ListEmojis operation.
/// </summary>
public sealed record ListEmojisRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }
}
