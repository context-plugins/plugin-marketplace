namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Maze operation.
/// </summary>
public sealed record MazeRequest
{
    /// <summary>
    /// Maze width
    /// </summary>
    public int? Width { get; init; }

    /// <summary>
    /// Maze height
    /// </summary>
    public int? Height { get; init; }

    /// <summary>
    /// Difficulty level
    /// </summary>
    public string? Difficulty { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable maze image
    /// </summary>
    public bool? Image { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable solution image
    /// </summary>
    public bool? SolutionImage { get; init; }
}
