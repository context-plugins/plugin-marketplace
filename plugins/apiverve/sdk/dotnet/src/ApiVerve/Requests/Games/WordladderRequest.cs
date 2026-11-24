namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Wordladder operation.
/// </summary>
public sealed record WordladderRequest
{
    /// <summary>
    /// Starting word (3-6 letters)
    /// </summary>
    public string? Start { get; init; }

    /// <summary>
    /// Ending word (same length as start)
    /// </summary>
    public string? End { get; init; }

    /// <summary>
    /// Difficulty level
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
