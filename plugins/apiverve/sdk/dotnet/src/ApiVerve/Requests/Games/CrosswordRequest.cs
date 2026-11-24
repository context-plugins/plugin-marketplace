namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Crossword operation.
/// </summary>
public sealed record CrosswordRequest
{
    /// <summary>
    /// Grid size: small, medium, large
    /// </summary>
    public string? Size { get; init; }

    /// <summary>
    /// Theme: random, animals, food, sports, science, geography
    /// </summary>
    public string? Theme { get; init; }

    /// <summary>
    /// Difficulty: easy, medium, hard
    /// </summary>
    public string? Difficulty { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable puzzle image
    /// </summary>
    public bool? Image { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable solution image
    /// </summary>
    public bool? SolutionImage { get; init; }
}
