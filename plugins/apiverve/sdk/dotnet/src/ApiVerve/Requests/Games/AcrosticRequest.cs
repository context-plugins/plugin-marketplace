namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Acrostic operation.
/// </summary>
public sealed record AcrosticRequest
{
    /// <summary>
    /// The keyword to spell out (3-15 letters)
    /// </summary>
    public required string Word { get; init; }

    /// <summary>
    /// Theme: random, positive, nature, adventure, friendship, learning
    /// </summary>
    public string? Theme { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable puzzle image
    /// </summary>
    public bool? Image { get; init; }
}
