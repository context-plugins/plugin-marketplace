namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Wordopposite operation.
/// </summary>
public sealed record WordoppositeRequest
{
    /// <summary>
    /// The word to get the opposites for
    /// </summary>
    public required string Word { get; init; }
}
