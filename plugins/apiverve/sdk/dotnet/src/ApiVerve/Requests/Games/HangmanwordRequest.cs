namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Hangmanword operation.
/// </summary>
public sealed record HangmanwordRequest
{
    /// <summary>
    /// Word category
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Difficulty level
    /// </summary>
    public string? Difficulty { get; init; }

    /// <summary>
    /// Number of words
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable puzzle image
    /// </summary>
    public bool? Image { get; init; }
}
