namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Fillintheblanks operation.
/// </summary>
public sealed record FillintheblanksRequest
{
    /// <summary>
    /// Puzzle category
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Number of puzzles
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Difficulty level
    /// </summary>
    public string? Difficulty { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable puzzle image
    /// </summary>
    public bool? Image { get; init; }
}
