namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Wordpronunciation operation.
/// </summary>
public sealed record WordpronunciationRequest
{
    /// <summary>
    /// The word to get the pronunciation of
    /// </summary>
    public required string Word { get; init; }
}
