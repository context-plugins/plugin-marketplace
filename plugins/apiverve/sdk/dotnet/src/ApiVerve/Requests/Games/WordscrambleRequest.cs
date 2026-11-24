namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Wordscramble operation.
/// </summary>
public sealed record WordscrambleRequest
{
    /// <summary>
    /// Difficulty level (affects word length)
    /// </summary>
    public string? Difficulty { get; init; }

    /// <summary>
    /// Number of puzzles
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable puzzle image
    /// </summary>
    public bool? Image { get; init; }
}
