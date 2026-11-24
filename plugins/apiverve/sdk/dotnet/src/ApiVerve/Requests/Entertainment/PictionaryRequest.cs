namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Pictionary operation.
/// </summary>
public sealed record PictionaryRequest
{
    /// <summary>
    /// Difficulty level
    /// </summary>
    public string? Difficulty { get; init; }

    /// <summary>
    /// Number of words to generate
    /// </summary>
    public int? Count { get; init; }
}
