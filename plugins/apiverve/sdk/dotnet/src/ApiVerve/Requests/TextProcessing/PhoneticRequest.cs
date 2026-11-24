namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Phonetic operation.
/// </summary>
public sealed record PhoneticRequest
{
    /// <summary>
    /// The word to encode phonetically
    /// </summary>
    public required string Word { get; init; }

    /// <summary>
    /// Algorithm to use
    /// </summary>
    public string? Algorithm { get; init; }
}
