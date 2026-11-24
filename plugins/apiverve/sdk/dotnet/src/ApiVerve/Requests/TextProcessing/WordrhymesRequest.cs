namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Wordrhymes operation.
/// </summary>
public sealed record WordrhymesRequest
{
    /// <summary>
    /// The word for which you want to get rhyming words
    /// </summary>
    public required string Word { get; init; }

    /// <summary>
    /// Limit the number of word rhymes returned
    /// </summary>
    public int? Limit { get; init; }
}
