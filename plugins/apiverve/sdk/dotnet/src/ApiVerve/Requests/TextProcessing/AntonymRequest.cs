namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Antonym operation.
/// </summary>
public sealed record AntonymRequest
{
    /// <summary>
    /// The word to get the antonyms for
    /// </summary>
    public required string Word { get; init; }

    /// <summary>
    /// Language to return the antonyms in. Defaults to English
    /// </summary>
    public string? Language { get; init; }
}
