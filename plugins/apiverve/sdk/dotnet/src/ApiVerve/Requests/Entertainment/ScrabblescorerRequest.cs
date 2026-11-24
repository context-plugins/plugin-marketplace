namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Scrabblescorer operation.
/// </summary>
public sealed record ScrabblescorerRequest
{
    /// <summary>
    /// The word to score
    /// </summary>
    public required string Word { get; init; }

    /// <summary>
    /// Scrabble language variant
    /// </summary>
    public string? Language { get; init; }
}
