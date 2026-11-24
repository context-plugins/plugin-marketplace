namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Spellingbee operation.
/// </summary>
public sealed record SpellingbeeRequest
{
    /// <summary>
    /// Difficulty: easy, medium, hard (affects word count)
    /// </summary>
    public string? Difficulty { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable puzzle image
    /// </summary>
    public bool? Image { get; init; }
}
