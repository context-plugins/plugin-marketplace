namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Lexicon operation.
/// </summary>
public sealed record LexiconRequest
{
    /// <summary>
    /// The word to analyze
    /// </summary>
    public required string Word { get; init; }
}
