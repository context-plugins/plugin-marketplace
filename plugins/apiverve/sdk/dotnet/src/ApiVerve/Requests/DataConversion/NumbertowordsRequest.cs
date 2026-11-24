namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Numbertowords operation.
/// </summary>
public sealed record NumbertowordsRequest
{
    /// <summary>
    /// The number to convert to words
    /// </summary>
    public required double Number { get; init; }
}
