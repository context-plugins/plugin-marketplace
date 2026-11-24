namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Wordstonumbers operation.
/// </summary>
public sealed record WordstonumbersRequest
{
    /// <summary>
    /// The words to convert to numbers
    /// </summary>
    public required string Words { get; init; }
}
